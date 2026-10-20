import { useEffect } from 'react'

const SDK_URL = 'https://web-plugin.botcircuits.com/plugin/sdk.min.js'

declare global {
  interface Window {
    botcircuits_init?: (botId: string, accessKey: string) => void
  }
}

let sdkLoad: Promise<void> | undefined
const loadSdk = () =>
  (sdkLoad ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = SDK_URL
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => {
      sdkLoad = undefined
      reject(new Error('Failed to load BotCircuits SDK'))
    }
    document.body.appendChild(s)
  }))

// The SDK injects a global widget, so init once per page load (also guards StrictMode's double effect).
let initialised = false

const DEFAULT_BOT_ID = '5u5pi6rcvz'

interface Props {
  accessKey: string
  botId?: string
}

/** Installs the BotCircuits chat widget. Usage: <BotCircuitsWidget accessKey="..." />. Renders no DOM itself. */
export default function BotCircuitsWidget({ accessKey, botId = DEFAULT_BOT_ID }: Props) {
  useEffect(() => {
    let cancelled = false
    loadSdk()
      .then(() => {
        if (cancelled || initialised) return
        initialised = true
        window.botcircuits_init?.(botId, accessKey)
      })
      .catch((e) => console.error(e))
    return () => {
      cancelled = true
    }
  }, [botId, accessKey])

  return null
}

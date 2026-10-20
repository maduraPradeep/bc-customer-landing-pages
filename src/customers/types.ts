export interface CustomerConfig {
  /** URL slug: domain/<slug>. Use a non-guessable value if the page must stay private. */
  slug: string
  name: string
  /** Single brand accent, any CSS color. */
  accent: string
  headline: string
  subhead: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  chat: { from: 'user' | 'bot'; text: string }[]
  features: { title: string; body: string }[]
  steps: { title: string; body: string }[]
  contactEmail: string
  /** BotCircuits widget access key. Omit to render the page without the widget. */
  widgetAccessKey?: string
}

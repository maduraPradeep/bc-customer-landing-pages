import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Static customer snapshots live in public/<slug>/index.html. Firebase serves them directly;
// this mirrors that for `vite dev` / `vite preview`, where /<slug> would otherwise hit the SPA.
const staticPages = ['suren-automart', 'sterling']
const serveStaticPages = (): Plugin => {
  const middleware = (req: { url?: string }, _res: unknown, next: () => void) => {
    const path = (req.url ?? '').split('?')[0].replace(/\/$/, '')
    if (staticPages.some((s) => path === `/${s}`)) req.url = `${path}/index.html`
    next()
  }
  return {
    name: 'serve-static-customer-pages',
    configureServer: (s) => void s.middlewares.use(middleware),
    configurePreviewServer: (s) => void s.middlewares.use(middleware),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveStaticPages()],
})

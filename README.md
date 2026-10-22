# Customer Demo Pages

Per-customer landing pages served from sub-paths (`domain/autodirect`) on Firebase Hosting. Vite + React + TypeScript, static build.

## Add a customer
1. Copy `src/customers/autodirect.ts` to `src/customers/<name>.ts` and edit the content (`slug` is the URL path).
2. Set `widgetAccessKey` to install the BotCircuits chat widget (`src/components/BotCircuitsWidget.tsx`, rendered by `CustomerPage`). Omit it for no widget.
3. Register it in `src/customers/index.ts`.
4. Deploy.

Slugs are case-insensitive. For a private page, use a non-obvious slug (e.g. `autodirect-7k2p`).

## Privacy
Pages are link-only: `noindex` meta, `X-Robots-Tag` header and `robots.txt` Disallow. The root path and unknown slugs show "Page not found".

## Develop / deploy
```
npm run dev
npm run build
firebase login
firebase use --add      # or: firebase init hosting (keep public=dist, SPA rewrite=yes)
firebase deploy --only hosting
```
`firebase.json` rewrites all paths to `index.html` so client-side routing works on direct links.

## Static snapshot pages
`public/suren-automart/index.html` is a saved copy of https://surenautomart.lk/ (noindex added, canonical/og tags removed). CSS, JS and images are hotlinked from the original site and all links go to the live site, so it stays in sync only as far as those assets do. Re-snapshot by re-downloading the page and re-applying the same edits. New static slugs must also be added to `staticPages` in `vite.config.ts` for dev/preview.

The Suren Automart snapshot has the BotCircuits widget as two inline `<script>` tags before `</body>` (uses the same access key as `autodirect.ts`); keep them when re-snapshotting.

`public/sterling/index.html` is a hand-built page in the style of https://www.sterling.lk (original markup and artwork, no hotlinked assets; text and prices adapted from the public site, brand logos replaced with plain names). It carries the same two inline widget `<script>` tags as the Suren Automart page.

# Birthday wishlist · 07.10

Ukrainian birthday wishlist for my 32nd birthday. Responsive editorial layout, 19 gifts, retailer photographs and shop links.

## GitHub Pages

The public website is served from `/docs` on the `main` branch at:
https://pavlusenko-designer.github.io/birthday-wishlist/

```sh
npm install
npm run build:pages
```

Commit the changed source and `docs/` output, then push `main`. GitHub Pages serves the committed static build. `vite.pages.config.ts` sets the repository base path and reservation API URL. `github-pages/` contains the browser entrypoint.

## Reservations

GitHub Pages cannot execute server code. The shared reservation API and existing Cloudflare D1 database remain deployed through Sites:
https://birthday-wishlist-orange-edition.greammy.chatgpt.site/api/reservations

`app/api/reservations/route.ts` owns all reservation state. A unique database key prevents duplicate reservations, including simultaneous requests. The four gaiwans are alternatives; the three tea sets are alternatives. Tea scales and all other gifts are independently reservable.

GitHub Pages visitors use a random device token; only its hash is stored in the database. Local storage holds this device credential, never the authoritative booking state. No account, name, email, administrator credential or service key is required or embedded in the browser. Cross-origin access is restricted to the GitHub Pages origin. Private cancellation links work across devices. Original-site guest cookies and previously issued cancellation tokens remain supported.

Backend changes require `npm run build` and deployment through Sites. Database migrations in `drizzle/` are immutable once applied. Frontend-only publishing does not deploy backend or product catalog changes to that API: keep both builds synchronized when adding gifts.

## Content

- `lib/products.ts`: gifts, prices, photos, shop URLs, optional personal/availability notes, alternative grouping.
- `app/wishlist.tsx`: Ukrainian interface and reservation flow.
- `app/globals.css`: shared design.
- `public/`: portrait, product photos and fonts.

Prices and availability checked 24 September 2026; retailer pages remain authoritative. Tea scales were on preorder for dispatch from 8 October 2026. The Game WoW mat links to the 400×900 mm option.

The displayed portrait is the supplied original; the requested birthday-hat edit remains blocked by the image tool's file-access error.

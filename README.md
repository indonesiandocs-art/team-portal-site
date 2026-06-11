# Nova Group Team Portal

Frontend and Cloudflare Worker backend for the Nova Group internal team portal.

## Current scope

- Home dashboard with quick links, metrics, upcoming events, vacation requests, and key documents.
- Team directory with search, department filters, table view, and card view.
- Documents section with search, category filters, and document cards.
- Payment Radar section for weekly China payment-risk signals, bank behavior, sanctions typologies, and recommended actions.
- Events section with birthdays, approved vacations, reminders, and a simple vacation request form.
- Company calendar holiday layer with public non-working days and key relationship gift dates.
- Admin section for editing team records, event records, document records, payment radar signals, and vacation approvals.
- Shared Cloudflare KV storage through the `/api/portal-data` Worker API.
- Automation-ready `/api/radar-items` Worker API for publishing radar signals with the admin token.
- Public vacation request intake through the `/api/vacation-request` Worker API.
- Responsive layout for desktop and mobile screens.

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server.

## Deployment

The site is deployed to Cloudflare Workers static assets under the `divine-wave-7f6d` Worker.
The production domain is `team.drnova.org`.

The Worker uses:

- `PORTAL_KV`: Workers KV namespace for shared portal content.
- `PORTAL_ACCESS_CODE`: Shared employee access code required before the portal is served.
- `ADMIN_TOKEN`: Worker secret used by the Admin page to publish changes.

Do not store access codes or admin tokens in the repository. Set or rotate them through GitHub Actions secrets and Cloudflare Worker secrets.

## Holiday calendar

Holiday data is stored in `assets/holiday-calendar.json` and displayed inside the Company calendar.
Keep all names in English. Each record can be marked as a normal public non-working day or as a key relationship gift date.

Refresh this file annually before the new business year. CN, HK, ID, RU and core TR dates can be seeded from Nager.Date. AE, MY and movable Islamic holidays should be verified manually because official dates can shift with moon sighting and local announcements.

## Payment Radar automation

The Payment Radar module is prepared for weekly automated publishing.

- `payment-radar-automation.md` defines the China-only source strategy, filtering rules, and JSON output shape.
- `publish-radar-items.mjs` publishes generated radar JSON to `/api/radar-items`.
- Set `PAYMENT_RADAR_ADMIN_TOKEN` in the automation environment. It must match the Worker `ADMIN_TOKEN`.
- Optionally set `PAYMENT_RADAR_SITE_ORIGIN`; it defaults to `https://team.drnova.org`.

Publish a prepared JSON file:

```sh
PAYMENT_RADAR_ADMIN_TOKEN=... node publish-radar-items.mjs radar-items.json https://team.drnova.org
```

Only publish signals with a practical payment, bank, document, route, sanctions, or typology impact. Most weeks should produce 0-3 items, not a general news feed.

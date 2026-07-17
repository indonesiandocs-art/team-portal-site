# Nova Group Team Portal

Frontend and Cloudflare Worker backend for the Nova Group internal team portal.

## Current scope

- Home dashboard with quick links, metrics, upcoming events, vacation requests, and key documents.
- Team directory with search, department filters, table view, and card view.
- Documents section with search, category filters, and document cards.
- Payment Radar section for China payment-risk signals, bank behavior, sanctions typologies, and recommended actions.
- Events section with birthdays, approved vacations, reminders, and a simple vacation request form.
- Company calendar holiday layer with public non-working days and key relationship gift dates.
- Protected Visualizations section for route schemes and interactive HTML artifacts.
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
- `VISUALIZATIONS_ACCESS_CODE`: Optional separate access code for the Visualizations section. If it is not configured, the Worker uses the built-in hashed fallback code.

Do not store access codes or admin tokens in the repository. Set or rotate them through GitHub Actions secrets and Cloudflare Worker secrets.

## Holiday calendar

Holiday data is stored in `assets/holiday-calendar.json` and displayed inside the Company calendar.
Keep all names in English. Each record can be marked as a normal public non-working day or as a key relationship gift date.

Refresh this file annually before the new business year. CN, HK, ID, RU and core TR dates can be seeded from Nager.Date. AE, MY and movable Islamic holidays should be verified manually because official dates can shift with moon sighting and local announcements.

## Visualizations

Visualization HTML files live in `assets/visualizations/`.
Add new files there and register them in `assets/visualizations/manifest.json`.

The section uses a separate access cookie. Direct access to files under `assets/visualizations/` is blocked until the visualization code is accepted.

## Payment Radar automation

The Payment Radar module is prepared for weekly automated publishing.

- `payment-radar-automation.md` defines the China-only source strategy, filtering rules, and JSON output shape.
- `run-weekly-radar.mjs` runs the weekly research workflow through the OpenAI API, validates generated items, saves JSON under `work/`, and publishes to `/api/radar-items`.
- `publish-radar-items.mjs` publishes generated radar JSON to `/api/radar-items`.
- Set `PAYMENT_RADAR_ADMIN_TOKEN` in the automation environment. It must match the Worker `ADMIN_TOKEN`.
- Set `OPENAI_API_KEY` for the GitHub Actions weekly research runner.
- Optionally set `PAYMENT_RADAR_SITE_ORIGIN`; it defaults to `https://team.drnova.org`.

Publish a prepared JSON file:

```sh
PAYMENT_RADAR_ADMIN_TOKEN=... node publish-radar-items.mjs radar-items.json https://team.drnova.org
```

Only publish signals with a practical payment, bank, document, route, sanctions, or typology impact. Most weeks should produce 0-3 items, not a general news feed. Use manual out-of-cycle runs only for materially important China/Hong Kong payment-risk events.

The GitHub Actions workflow `.github/workflows/china-payment-radar-weekly.yml` runs every Friday at 06:00 UTC, which is 09:00 in Istanbul, and can also be started manually from the Actions tab.

To retry publication for an already prepared JSON file, commit the file under `work/` and start the same workflow manually. Manual runs publish the latest `work/payment-radar-items-*.json` file; scheduled Friday runs continue to run the full weekly research workflow. Set `PAYMENT_RADAR_MANUAL_RESEARCH=1` only when a manual run should ignore prepared JSON and run fresh research instead.

# Nova Group Team Portal

Frontend and Cloudflare Worker backend for the Nova Group internal team portal.

## Current scope

- Home dashboard with quick links, metrics, upcoming events, vacation requests, and key documents.
- Team directory with search, department filters, table view, and card view.
- Documents section with search, category filters, and document cards.
- Events section with birthdays, approved vacations, reminders, and a simple vacation request form.
- Admin section for editing team records, event records, document records, and vacation approvals.
- Shared Cloudflare KV storage through the `/api/portal-data` Worker API.
- Public vacation request intake through the `/api/vacation-request` Worker API.
- Responsive layout for desktop and mobile screens.

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server.

## Deployment

The site is deployed to Cloudflare Workers static assets under the `divine-wave-7f6d` Worker.
The production domain is `team.drnova.org`.

The Worker uses:

- `PORTAL_KV`: Workers KV namespace for shared portal content.
- `ADMIN_TOKEN`: Worker secret used by the Admin page to publish changes.

Do not store the admin token in the repository. Set or rotate it through Cloudflare Worker secrets.

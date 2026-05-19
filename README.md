# Nova Group Team Portal

Frontend and Cloudflare Worker backend for the Nova Group internal team portal.

## Current scope

- Home dashboard with quick links, metrics, upcoming events, recent articles, and key documents.
- Team directory with search, department filters, work-mode filters, table view, and card view.
- Knowledge Base with article list, rich-text editor, formatting controls, links, and image upload.
- Documents section with search, category filters, and document cards.
- Admin section for editing team records, document records, and Knowledge Base articles.
- Shared Cloudflare KV storage through the `/api/portal-data` Worker API.
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

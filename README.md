# BEAT Technology 比忒科技 官方網站

Hosted on **Cloudflare Pages** (connected to GitHub).

- Frontend: React + Vite → built to `dist/`
- API: Cloudflare Pages Functions in `functions/api/`
  - `POST /api/contact` – contact form (forwards to FormSubmit)
  - `GET /api/news` – news articles from Notion
  - `GET /api/legal` – legal documents from Notion

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `dist`
- Settings → Variables and Secrets (set for both Production and Preview, then redeploy):
  - `NOTION_API_KEY` (type: Secret)
  - `NOTION_DATABASE_ID`
  - `NOTION_LEGAL_DATABASE_ID` (optional)
  - `APP_URL`

## Run Locally

**Prerequisites:** Node.js 20+

1. `npm install`
2. Frontend only (the /api routes are not available): `npm run dev`
3. Frontend + API (Pages Functions):
   copy `.env.example` to `.dev.vars`, fill in the values, then run `npm run dev:functions`
   (uses `wrangler` via npx).

`.env` / `.dev.vars` are git-ignored; never commit real keys.

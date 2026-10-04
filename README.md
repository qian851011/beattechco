# BEAT Technology 比忒科技 官方網站

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env` (or `.env.local`) and fill in your Notion values
   (`NOTION_API_KEY`, `NOTION_DATABASE_ID`, optional `NOTION_LEGAL_DATABASE_ID`, `APP_URL`)
3. Run the app:
   `npm run dev`
4. After changing the env file, stop the server (Ctrl+C) and run `npm run dev` again.
   The terminal prints whether the Notion keys were loaded.

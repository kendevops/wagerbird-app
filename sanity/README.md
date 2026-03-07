# WAGERBIRD Sanity CMS

This folder contains the Sanity Studio configuration and schemas for the WAGERBIRD app.

## Setup

1. Create a project at [sanity.io/manage](https://sanity.io/manage) and note your **Project ID** and **Dataset** (e.g. `production`).
2. Copy `.env.example` to `.env.local` in the project root and set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_STUDIO_URL` (e.g. `http://localhost:3000/studio`)
   - Optionally `SANITY_API_VIEWER_TOKEN` for draft/preview and Visual Editing (create a token with Viewer permissions in the Sanity project).
   - Optionally `NEXT_PUBLIC_SITE_URL` for the Presentation tool preview URL.

## Seeding existing content

To load the app’s existing copy into Sanity (home, terminal, pricing, hotsheet, sportsbooks, odds, and coming-soon pages):

1. Create an API token with **Editor** or **Admin** permissions at [sanity.io/manage](https://sanity.io/manage) (Project → API → Tokens).
2. Add it to `.env.local` as `SANITY_API_WRITE_TOKEN` (or reuse a token that has write access).
3. Run from the project root:
   ```bash
   npm run seed:sanity
   ```
4. Open `/studio` and edit any page or block; changes will appear on the site (use Presentation for live editing).

## Studio

- Open **Studio** at `/studio` when the app is running (e.g. `npm run dev` then visit `http://localhost:3000/studio`).
- Sign in with your Sanity account and create or edit content.

## Content model

- **Site SEO & Icons**: A single document (open **Site SEO & Icons** in the sidebar) controls app-wide SEO and browser icons: **Site Name**, **Default Meta Title**, **Default Meta Description**, **Default OG Image**, **Favicon / Tab Icon**, **Apple Touch Icon**, and **Twitter Handle**. These apply as defaults; each page can override title, description, and OG image via its **SEO** block.
- **Pages**: Create documents with type **Page**. Set **Slug** (e.g. `home` for the homepage, `terminal`, `pricing`, etc.) and add **Blocks** (Hero, Ticker, Signals, FAQ, CTA Banner, etc.) in the order you want them to appear.
- **SEO**: Fill the **SEO** object on each page (Meta Title, Meta Description, OG Image) to override the site defaults for that page.
- For the site root (`/`) to work, create a page with slug **home**.

## Live editing (Presentation)

1. In Studio, open the **Presentation** tool.
2. The preview iframe will load your site and enable draft mode.
3. With a **Viewer** token set in env, you can edit content in Studio and see draft changes in the preview; use click-to-edit overlays to jump from the preview to the field in Studio.

## CORS

Add your Studio URL (e.g. `http://localhost:3000`) to your project’s **CORS origins** in [sanity.io/manage](https://sanity.io/manage) with **Allow credentials** enabled so the preview and Visual Editing can work.

## Immediate updates after publish (webhook)

To have the live site update as soon as you publish in Sanity:

1. Add `REVALIDATE_SECRET` to `.env` (and `.env.local`) with a random string (e.g. `openssl rand -hex 24`).
2. In [sanity.io/manage](https://sanity.io/manage) go to **API** → **Webhooks** and create a webhook:
   - **URL**: `https://your-site.com/api/revalidate` (or `http://localhost:3000/api/revalidate` for local).
   - **Trigger**: **Create**, **Update**, **Delete** (or at least **Update**).
   - **Filter** (optional): `_type == "page"` so only page changes trigger revalidation.
   - **HTTP method**: POST.
   - **Headers**: `Authorization: Bearer YOUR_REVALIDATE_SECRET` (or pass `?secret=YOUR_REVALIDATE_SECRET` in the URL).
   - **Body**: Sanity sends a JSON payload; the API uses the document’s slug to revalidate that path and the home page.
3. After each publish, the revalidate API runs and Next.js refreshes the cached page so changes appear immediately.

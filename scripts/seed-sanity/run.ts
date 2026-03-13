/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Seed Sanity with initial page content from the app.
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and a token with write access (e.g. SANITY_API_WRITE_TOKEN or SANITY_API_VIEWER_TOKEN with write).
 * Run: npm run seed:sanity  (or npx tsx scripts/seed-sanity/run.ts)
 */
import * as dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });
import {
  allPages,
  siteSettings,
  signInPage,
  registerPage,
  notFoundPage,
  error500Page,
  comingSoonMeta,
  affiliatesPage,
  quantumPage,
} from "./data";

async function main() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  const token = process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_API_VIEWER_TOKEN;

  if (!projectId) {
    console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Set it in .env.local or the environment.");
    process.exit(1);
  }

  if (!token) {
    console.error(
      "Missing SANITY_API_WRITE_TOKEN (or SANITY_API_VIEWER_TOKEN with write). Create a token at https://sanity.io/manage and add it to .env.local."
    );
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token,
  });

  console.log(
    `Seeding site SEO + system pages + ${allPages.length} content pages into ${projectId}/${dataset}...`
  );

  const transaction = client.transaction();
  transaction.createOrReplace(siteSettings as any);
  console.log("  - siteSettings: Site SEO & Icons");

  transaction.createOrReplace(signInPage as any);
  console.log("  - signInPage: Sign In Page");

  transaction.createOrReplace(registerPage as any);
  console.log("  - registerPage: Register Page");

  transaction.createOrReplace(notFoundPage as any);
  console.log("  - notFoundPage: 404 Not Found");

  transaction.createOrReplace(error500Page as any);
  console.log("  - error500Page: 500 Error");

  transaction.createOrReplace(comingSoonMeta as any);
  console.log("  - comingSoonPage: Coming Soon Meta");

  transaction.createOrReplace(affiliatesPage as any);
  console.log("  - affiliatesPage: Affiliates Hero");

  transaction.createOrReplace(quantumPage as any);
  console.log("  - quantumPage: Quantum Page");

  for (const page of allPages) {
    transaction.createOrReplace(page as any);
    console.log(`  - ${page.slug.current}: ${page.title}`);
  }

  await transaction.commit();
  console.log("Done. Open /studio to edit content.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

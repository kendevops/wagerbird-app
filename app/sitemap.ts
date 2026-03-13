import type { MetadataRoute } from "next";
import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { allPageSlugsQuery } from "@/sanity/lib/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wagerbird.com";

const STATIC_ROUTES = [
  "",
  "signin",
  "register",
  "get-started",
  "get-started/complete",
  "affiliates",
  "coming-soon",
  "onboarding",
  "quantum",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  if (hasValidSanityConfig()) {
    try {
      const client = getClient(false);
      const slugs = await client.fetch<string[]>(allPageSlugsQuery);
      const seen = new Set(entries.map((e) => e.url));
      for (const slug of slugs ?? []) {
        if (!slug || slug === "home") continue;
        const url = `${BASE_URL}/${slug}`;
        if (seen.has(url)) continue;
        seen.add(url);
        entries.push({
          url,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        });
      }
    } catch {
      // omit Sanity pages if fetch fails (e.g. build without env)
    }
  }

  return entries;
}

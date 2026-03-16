import type { MetadataRoute } from "next";
import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { allPageSlugsQuery, allBlogPostsQuery, type BlogPostSummary } from "@/sanity/lib/queries";

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
      const [slugs, blogPosts] = await Promise.all([
        client.fetch<string[]>(allPageSlugsQuery),
        client.fetch<BlogPostSummary[]>(allBlogPostsQuery),
      ]);

      const seen = new Set(entries.map((e) => e.url));

      // Sanity-driven pages (non-blog)
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

      // Blog index
      const blogIndexUrl = `${BASE_URL}/blog`;
      if (!seen.has(blogIndexUrl)) {
        seen.add(blogIndexUrl);
        entries.push({
          url: blogIndexUrl,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        });
      }

      // Individual blog posts
      for (const post of blogPosts ?? []) {
        if (!post.slug) continue;
        const url = `${BASE_URL}/blog/${post.slug}`;
        if (seen.has(url)) continue;
        seen.add(url);
        entries.push({
          url,
          lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        });
      }
    } catch {
      // omit Sanity pages if fetch fails (e.g. build without env)
    }
  }

  return entries;
}

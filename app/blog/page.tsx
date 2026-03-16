import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { allBlogPostsQuery, type BlogPostSummary } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/metadata";
import BlogIndexPageContent, { type BlogPostWithUrl } from "@/components/BlogIndexPageContent";

export const metadata: Metadata = {
  title: "Blog — WagerBird | The Edge Report",
  description:
    "Strategy, analytics, bankroll management, and market insights for serious sports bettors.",
};

export default async function BlogPage() {
  let posts: BlogPostWithUrl[] = [];
  if (hasValidSanityConfig()) {
    const { isEnabled } = await draftMode();
    const client = getClient(isEnabled);
    const raw = await client.fetch<BlogPostSummary[]>(allBlogPostsQuery);
    posts = raw.map((p) => ({
      ...p,
      mainImageUrl: urlForImage(p.mainImage),
    }));
  }
  return <BlogIndexPageContent posts={posts} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import {
  blogPostBySlugQuery,
  type BlogPostResult,
} from "@/sanity/lib/queries";
import { buildMetadataFromSite, getSiteSettings } from "@/sanity/lib/metadata";
import imageUrlBuilder from "@sanity/image-url";
import BlogPostPageContent from "@/components/BlogPostPageContent";

function ogImageUrl(asset: { _ref?: string; url?: string } | undefined): string | undefined {
  if (!asset) return undefined;
  if (typeof (asset as { url?: string }).url === "string") return (asset as { url: string }).url;
  if ((asset as { _ref?: string })._ref && hasValidSanityConfig()) {
    return imageUrlBuilder(getClient(false)).image(asset as { _ref: string }).url();
  }
  return undefined;
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = (await params).slug;
  if (!hasValidSanityConfig()) return buildMetadataFromSite(null);

  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);
  const [post, site] = await Promise.all([
    client.fetch<BlogPostResult>(blogPostBySlugQuery, { slug }),
    getSiteSettings(isEnabled),
  ]);

  const base = buildMetadataFromSite(site);
  if (!post) return base;

  const title = post.seo?.metaTitle ?? post.title ?? base.title;
  const description = post.seo?.metaDescription ?? post.excerpt ?? base.description;
  const pageOgUrl = post.seo?.ogImage?.asset
    ? ogImageUrl(post.seo.ogImage.asset as { _ref?: string; url?: string })
    : post.mainImage?.asset
      ? ogImageUrl(post.mainImage.asset as { _ref?: string; url?: string })
      : undefined;

  return {
    ...base,
    title: title ?? base.title,
    description: description ?? base.description,
    openGraph: {
      ...base.openGraph,
      title: title ?? undefined,
      description: description ?? undefined,
      ...(pageOgUrl && { images: [pageOgUrl] }),
    },
    twitter: {
      ...base.twitter,
      title: title ?? undefined,
      description: description ?? undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!hasValidSanityConfig()) notFound();

  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);
  const post = await client.fetch<BlogPostResult>(blogPostBySlugQuery, { slug });

  if (!post) notFound();

  return <BlogPostPageContent post={post} />;
}

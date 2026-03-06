import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getClient } from "@/sanity/lib/client";
import { pageBySlugQuery, type PageBySlugResult } from "@/sanity/lib/queries";
import { buildMetadataFromSite, getSiteSettings } from "@/sanity/lib/metadata";
import imageUrlBuilder from "@sanity/image-url";
import BlockRenderer from "@/components/BlockRenderer";
import NoPageFallback from "./NoPageFallback";

const imageBuilder = imageUrlBuilder(getClient(false));

function ogImageUrl(asset: { _ref?: string; url?: string } | undefined): string | undefined {
  if (!asset) return undefined;
  if (typeof (asset as { url?: string }).url === "string") return (asset as { url: string }).url;
  if ((asset as { _ref?: string })._ref)
    return imageBuilder.image(asset as { _ref: string }).url();
  return undefined;
}

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

function getSlugFromParams(params: { slug?: string[] }): string {
  if (!params.slug || params.slug.length === 0) return "home";
  return params.slug.join("/");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);
  const slug = getSlugFromParams(await params);
  const [page, site] = await Promise.all([
    client.fetch<PageBySlugResult | null>(pageBySlugQuery, { slug }),
    getSiteSettings(isEnabled),
  ]);

  const base = buildMetadataFromSite(site);

  if (!page) return base;

  const title = page.seo?.metaTitle ?? page.title;
  const description = page.seo?.metaDescription ?? undefined;
  const pageOgUrl = page.seo?.ogImage?.asset
    ? ogImageUrl(page.seo.ogImage.asset as { _ref?: string; url?: string })
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

export default async function SanityPage({ params }: PageProps) {
  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);
  const slug = getSlugFromParams(await params);
  const page = await client.fetch<PageBySlugResult | null>(pageBySlugQuery, {
    slug,
  });

  if (!page) {
    if (slug === "home") {
      return <NoPageFallback />;
    }
    notFound();
  }

  const blocks = (page.blocks ?? []) as Parameters<typeof BlockRenderer>[0]["blocks"];
  return <BlockRenderer blocks={blocks} />;
}

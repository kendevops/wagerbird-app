import type { Metadata } from "next";
import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./client";
import { siteSettingsQuery, type SiteSettingsResult } from "./queries";

const builder = imageUrlBuilder(getClient(false));

export function urlForImage(source: { asset?: { _ref?: string; url?: string } } | null | undefined): string | undefined {
  if (!source?.asset) return undefined;
  const asset = source.asset as { _ref?: string; url?: string };
  if (typeof asset.url === "string") return asset.url;
  if (asset._ref) return builder.image(source as { asset: { _ref: string } }).url();
  return undefined;
}

export async function getSiteSettings(preview = false): Promise<SiteSettingsResult> {
  const client = getClient(preview);
  return client.fetch<SiteSettingsResult>(siteSettingsQuery);
}

export function buildMetadataFromSite(site: SiteSettingsResult): Metadata {
  if (!site) {
    return {
      title: { default: "Wagerbird", template: "%s | Wagerbird" },
      description: "Confidence-scored betting signals.",
    };
  }

  const siteName = site.siteName ?? "Wagerbird";
  const defaultTitle = site.defaultMetaTitle?.trim() || undefined;
  const defaultDescription = site.defaultMetaDescription?.trim() || undefined;
  const defaultOgImageUrl = urlForImage(site.defaultOgImage);
  const faviconUrl = urlForImage(site.favicon);
  const appleTouchUrl = urlForImage(site.appleTouchIcon);
  const twitterHandle = site.twitterHandle?.trim()?.replace(/^@/, "");

  const icons: NonNullable<Metadata["icons"]> = {};
  if (faviconUrl) icons.icon = { url: faviconUrl, type: "image/png" };
  if (appleTouchUrl) icons.apple = [{ url: appleTouchUrl, sizes: "180x180", type: "image/png" }];

  return {
    title: defaultTitle
      ? { default: defaultTitle, template: `%s | ${siteName}` }
      : { default: siteName, template: `%s | ${siteName}` },
    description: defaultDescription,
    icons: Object.keys(icons).length > 0 ? icons : undefined,
    openGraph: {
      siteName,
      type: "website",
      ...(defaultOgImageUrl && { images: [{ url: defaultOgImageUrl }] }),
    },
    twitter: twitterHandle
      ? { card: "summary_large_image", creator: twitterHandle }
      : { card: "summary_large_image" },
  };
}

export async function getSiteMetadata(): Promise<Metadata> {
  const site = await getSiteSettings(false);
  return buildMetadataFromSite(site);
}

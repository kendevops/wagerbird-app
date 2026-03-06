import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    siteName,
    defaultMetaTitle,
    defaultMetaDescription,
    defaultOgImage { asset-> },
    favicon { asset-> },
    appleTouchIcon { asset-> },
    twitterHandle
  }
`;

export type SiteSettingsResult = {
  siteName?: string;
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  defaultOgImage?: { asset?: { _ref?: string; url?: string } };
  favicon?: { asset?: { _ref?: string; url?: string } };
  appleTouchIcon?: { asset?: { _ref?: string; url?: string } };
  twitterHandle?: string;
} | null;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    seo {
      metaTitle,
      metaDescription,
      ogImage { asset-> }
    },
    blocks[] {
      _type,
      _key,
      ...,
      // Expand block content by type (all fields are inline in blocks)
    }
  }
`;

export type PageBySlugResult = {
  _id: string;
  title: string;
  slug: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: { asset?: { url?: string } };
  };
  blocks?: unknown[];
};

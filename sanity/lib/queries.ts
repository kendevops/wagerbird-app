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

export const affiliatesPageQuery = groq`
  *[_type == "affiliatesPage" && _id == "affiliatesPage"][0] {
    heroHeading,
    heroDescription,
    commissionMeta,
    programStatus,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    calcEyebrow,
    calcHeading,
    calcDescription,
    calcProducts[] { id, name, price, label },
    whyEyebrow,
    whyHeading,
    whyDescription,
    whyCtaLabel,
    whyReasons[] { num, body, tag },
    marqueeItems,
    wypEyebrow,
    wypHeading1,
    wypHeading2,
    wypDescription,
    wypFootnote,
    wypProducts[] {
      id,
      badges[] { label, filled },
      title,
      subtags[],
      description,
      tiers[] { label, price, earn }
    },
    procEyebrow,
    procSubtitle,
    procHeading,
    procSteps[] { num, body },
    wsaEyebrow,
    wsaHeading1,
    wsaHeading2,
    wsaDescription,
    wsaAudiences[] { num, title, body, span },
    prEyebrow,
    prHeading1,
    prHeading2,
    prDescription,
    prResources[] { id, title, body, href, highlighted },
    ctaEyebrow,
    ctaHeading1,
    ctaHeading2,
    ctaDescription,
    ctaButtonLabel,
    ctaButtonHref,
    ctaFooterText,
    ctaFooterEmail,
    faqEyebrow,
    faqHeading1,
    faqHeading2,
    faqItems[] { id, question, answer }
  }
`;

export type AffiliatesPageResult = {
  heroHeading?: string;
  heroDescription?: string;
  commissionMeta?: string;
  programStatus?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  calcEyebrow?: string;
  calcHeading?: string;
  calcDescription?: string;
  calcProducts?: { id?: string; name?: string; price?: number; label?: string }[];
  whyEyebrow?: string;
  whyHeading?: string;
  whyDescription?: string;
  whyCtaLabel?: string;
  whyReasons?: { num?: string; body?: string; tag?: string }[];
  marqueeItems?: string[];
  wypEyebrow?: string;
  wypHeading1?: string;
  wypHeading2?: string;
  wypDescription?: string;
  wypFootnote?: string;
  wypProducts?: {
    id?: string;
    badges?: { label?: string; filled?: boolean }[];
    title?: string;
    subtags?: string[];
    description?: string;
    tiers?: { label?: string; price?: number; earn?: number }[];
  }[];
  procEyebrow?: string;
  procSubtitle?: string;
  procHeading?: string;
  procSteps?: { num?: string; body?: string }[];
  wsaEyebrow?: string;
  wsaHeading1?: string;
  wsaHeading2?: string;
  wsaDescription?: string;
  wsaAudiences?: { num?: string; title?: string; body?: string; span?: number }[];
  prEyebrow?: string;
  prHeading1?: string;
  prHeading2?: string;
  prDescription?: string;
  prResources?: { id?: string; title?: string; body?: string; href?: string; highlighted?: boolean }[];
  ctaEyebrow?: string;
  ctaHeading1?: string;
  ctaHeading2?: string;
  ctaDescription?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
  ctaFooterText?: string;
  ctaFooterEmail?: string;
  faqEyebrow?: string;
  faqHeading1?: string;
  faqHeading2?: string;
  faqItems?: { id?: string; question?: string; answer?: string }[];
} | null;

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

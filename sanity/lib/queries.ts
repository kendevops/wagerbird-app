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

export const allPageSlugsQuery = groq`
  *[_type == "page" && defined(slug.current)].slug.current
`;

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

export const signInPageQuery = groq`
  *[_type == "signInPage" && _id == "signInPage"][0] {
    leftEyebrow,
    leftHeroLine1,
    leftHeroLine2,
    leftTagline,
    stats[] { value, label },
    formEyebrow,
    formTitle,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    forgotLabel,
    submitLabel,
    signupPrompt,
    signupLinkLabel,
    signupLinkHref,
    finePrint,
    formAction,
  }
`;

export type SignInPageResult = {
  leftEyebrow?: string;
  leftHeroLine1?: string;
  leftHeroLine2?: string;
  leftTagline?: string;
  stats?: { value?: string; label?: string }[];
  formEyebrow?: string;
  formTitle?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  forgotLabel?: string;
  submitLabel?: string;
  signupPrompt?: string;
  signupLinkLabel?: string;
  signupLinkHref?: string;
  finePrint?: string;
  formAction?: string | null;
} | null;

export const registerPageQuery = groq`
  *[_type == "registerPage" && _id == "registerPage"][0] {
    leftEyebrow,
    leftHeroLine1,
    leftHeroLine2,
    leftTagline,
    featureBullets[] { bold, rest },
    formEyebrow,
    formTitle,
    formSubtitle,
    firstNameLabel,
    firstNamePlaceholder,
    lastNameLabel,
    lastNamePlaceholder,
    phoneLabel,
    phonePlaceholder,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    submitLabel,
    legalText,
    termsHref,
    privacyHref,
    signinPrompt,
    signinLinkLabel,
    signinLinkHref,
    formAction,
  }
`;

export type RegisterPageResult = {
  leftEyebrow?: string;
  leftHeroLine1?: string;
  leftHeroLine2?: string;
  leftTagline?: string;
  featureBullets?: { bold?: string; rest?: string }[];
  formEyebrow?: string;
  formTitle?: string;
  formSubtitle?: string;
  firstNameLabel?: string;
  firstNamePlaceholder?: string;
  lastNameLabel?: string;
  lastNamePlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  confirmPasswordLabel?: string;
  confirmPasswordPlaceholder?: string;
  submitLabel?: string;
  legalText?: string;
  termsHref?: string;
  privacyHref?: string;
  signinPrompt?: string;
  signinLinkLabel?: string;
  signinLinkHref?: string;
  formAction?: string | null;
} | null;

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

export const quantumPageQuery = groq`
  *[_type == "quantumPage" && _id == "quantumPage"][0] {
    heroBadgeText,
    heroTitleLine1,
    heroTitleLine2,
    heroSub,
    heroPrimaryCtaLabel,
    heroPrimaryCtaHref,
    heroSecondaryCtaLabel,
    heroSecondaryCtaHref,
    heroVideoUrl,
    heroMetaItems,
    introTitle,
    introParagraph1,
    introParagraph2,
    pillarsEyebrow,
    pillarsTitle,
    pillarsCards[] { num, title, tag, desc },
    platformsEyebrow,
    platformsTitle,
    platformsDescription,
    platformAdvisoryTag,
    platformAdvisoryName,
    platformAdvisorySub,
    platformAdvisoryBadge,
    platformAdvisoryDesc,
    platformHorizonTag,
    platformHorizonName,
    platformHorizonSub,
    platformHorizonBadge,
    platformHorizonDesc,
    platformPulseTag,
    platformPulseName,
    platformPulseSub,
    platformPulseBadge,
    platformPulseDesc,
    structureTitle,
    structureNote,
    tiers[] { label, name, features[], footerText, featured, featuredBadge },
    qualRightFitTitle,
    qualRightFitItems,
    qualMisalignedTitle,
    qualMisalignedItems,
    applyTitle,
    applyNote,
    applyDisclaimer,
    applyCheckboxText,
    applySubmitLabel
  }
`;

export type QuantumPageResult = {
  heroBadgeText?: string;
  heroTitleLine1?: string;
  heroTitleLine2?: string;
  heroSub?: string;
  heroPrimaryCtaLabel?: string;
  heroPrimaryCtaHref?: string;
  heroSecondaryCtaLabel?: string;
  heroSecondaryCtaHref?: string;
  heroVideoUrl?: string | null;
  heroMetaItems?: string[];
  introTitle?: string;
  introParagraph1?: string;
  introParagraph2?: string;
  pillarsEyebrow?: string;
  pillarsTitle?: string;
  pillarsCards?: { num?: string; title?: string; tag?: string; desc?: string }[];
  platformsEyebrow?: string;
  platformsTitle?: string;
  platformsDescription?: string;
  platformAdvisoryTag?: string;
  platformAdvisoryName?: string;
  platformAdvisorySub?: string;
  platformAdvisoryBadge?: string;
  platformAdvisoryDesc?: string;
  platformHorizonTag?: string;
  platformHorizonName?: string;
  platformHorizonSub?: string;
  platformHorizonBadge?: string;
  platformHorizonDesc?: string;
  platformPulseTag?: string;
  platformPulseName?: string;
  platformPulseSub?: string;
  platformPulseBadge?: string;
  platformPulseDesc?: string;
  structureTitle?: string;
  structureNote?: string;
  tiers?: {
    label?: string;
    name?: string;
    features?: string[];
    footerText?: string;
    featured?: boolean;
    featuredBadge?: string;
  }[];
  qualRightFitTitle?: string;
  qualRightFitItems?: string[];
  qualMisalignedTitle?: string;
  qualMisalignedItems?: string[];
  applyTitle?: string;
  applyNote?: string;
  applyDisclaimer?: string;
  applyCheckboxText?: string;
  applySubmitLabel?: string;
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

// ── Blog ──

export const allBlogPostsQuery = groq`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    (!defined(status) || status == "active")
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,
    categories,
    mainImage { asset-> }
  }
`;

export const blogPostBySlugQuery = groq`
  *[
    _type == "blogPost" &&
    slug.current == $slug &&
    (!defined(status) || status == "active")
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,
    categories,
    mainImage { asset-> },
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    author,
    readTimeMinutes,
    heroStats[] { value, label },
    body,
    keyTakeaways,
    relatedPosts[]->{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      categories
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage { asset-> }
    }
  }
`;

export type BlogPostSummary = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  publishedAt?: string;
  featured?: boolean;
  categories?: string[];
  mainImage?: { asset?: { _ref?: string; url?: string } };
};

import type { PortableTextBlock } from "@portabletext/types";

export type BlogPostResult = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  publishedAt?: string;
  featured?: boolean;
  categories?: string[];
  mainImage?: { asset?: { _ref?: string; url?: string } };
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  author?: string;
  readTimeMinutes?: number;
  heroStats?: { value?: string; label?: string }[];
  body?: PortableTextBlock[] | null;
  keyTakeaways?: string[];
  relatedPosts?: {
    _id: string;
    title?: string;
    slug?: string;
    excerpt?: string;
    publishedAt?: string;
    categories?: string[];
  }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: { asset?: { url?: string } };
  };
} | null;

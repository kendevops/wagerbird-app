import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
  projectId: "pl80ucet",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Type definitions for Sanity content
export interface HeroContent {
  tickerText: string;
  badgeText: string;
  title: string;
  highlightWord: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroImage?: SanityImageSource;
  stats: { value: string; label: string; _key: string }[];
}

export interface SignalsSectionContent {
  label: string;
  title: string;
  highlightWord: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  footerText: string;
}

export interface SignalContent {
  _id: string;
  matchup: string;
  sport: string;
  time: string;
  betType: string;
  confidence: number;
  locked: boolean;
  order: number;
}

export interface PacksSectionContent {
  label: string;
  title: string;
  highlightWord: string;
  description: string;
  footnote: string;
}

export interface PackContent {
  _id: string;
  name: string;
  points: string;
  goodFor: string;
  price: number;
  ctaLabel: string;
  popular: boolean;
  order: number;
}

export interface HowItWorksSectionContent {
  label: string;
  title: string;
  highlightWord: string;
}

export interface HowItWorksStepContent {
  _id: string;
  number: string;
  title: string;
  description: string;
  order: number;
}

export interface HotsheetSectionContent {
  label: string;
  title: string;
  highlightWord: string;
  description: string;
  perks: string;
  ctaLabel: string;
  ctaHref: string;
  videoUrl?: string;
}

export interface EmailCaptureSectionContent {
  label: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  cardTitle: string;
  cardSubtitle: string;
  buttonLabel: string;
  disclaimer: string;
}

export interface FaqSectionContent {
  label: string;
  title: string;
  highlightWord: string;
}

export interface FaqItemContent {
  _id: string;
  question: string;
  answer: string;
  order: number;
}

export interface CtaBannerSectionContent {
  watermark: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

// GROQ Queries
export const queries = {
  hero: `*[_type == "hero"][0]`,
  signalsSection: `*[_type == "signalsSection"][0]`,
  signals: `*[_type == "signal"] | order(order asc)`,
  packsSection: `*[_type == "packsSection"][0]`,
  packs: `*[_type == "pack"] | order(order asc)`,
  howItWorksSection: `*[_type == "howItWorksSection"][0]`,
  howItWorksSteps: `*[_type == "howItWorksStep"] | order(order asc)`,
  hotsheetSection: `*[_type == "hotsheetSection"][0]`,
  emailCaptureSection: `*[_type == "emailCaptureSection"][0]`,
  faqSection: `*[_type == "faqSection"][0]`,
  faqItems: `*[_type == "faqItem"] | order(order asc)`,
  ctaBannerSection: `*[_type == "ctaBannerSection"][0]`,
};

// Fetch functions
export async function getHeroContent(): Promise<HeroContent | null> {
  return sanityClient.fetch(queries.hero);
}

export async function getSignalsSectionContent(): Promise<SignalsSectionContent | null> {
  return sanityClient.fetch(queries.signalsSection);
}

export async function getSignals(): Promise<SignalContent[]> {
  return sanityClient.fetch(queries.signals);
}

export async function getPacksSectionContent(): Promise<PacksSectionContent | null> {
  return sanityClient.fetch(queries.packsSection);
}

export async function getPacks(): Promise<PackContent[]> {
  return sanityClient.fetch(queries.packs);
}

export async function getHowItWorksSectionContent(): Promise<HowItWorksSectionContent | null> {
  return sanityClient.fetch(queries.howItWorksSection);
}

export async function getHowItWorksSteps(): Promise<HowItWorksStepContent[]> {
  return sanityClient.fetch(queries.howItWorksSteps);
}

export async function getHotsheetSectionContent(): Promise<HotsheetSectionContent | null> {
  return sanityClient.fetch(queries.hotsheetSection);
}

export async function getEmailCaptureSectionContent(): Promise<EmailCaptureSectionContent | null> {
  return sanityClient.fetch(queries.emailCaptureSection);
}

export async function getFaqSectionContent(): Promise<FaqSectionContent | null> {
  return sanityClient.fetch(queries.faqSection);
}

export async function getFaqItems(): Promise<FaqItemContent[]> {
  return sanityClient.fetch(queries.faqItems);
}

export async function getCtaBannerSectionContent(): Promise<CtaBannerSectionContent | null> {
  return sanityClient.fetch(queries.ctaBannerSection);
}

// Get all homepage content in one request
export async function getHomepageContent() {
  const query = `{
    "hero": ${queries.hero},
    "signalsSection": ${queries.signalsSection},
    "signals": ${queries.signals},
    "packsSection": ${queries.packsSection},
    "packs": ${queries.packs},
    "howItWorksSection": ${queries.howItWorksSection},
    "howItWorksSteps": ${queries.howItWorksSteps},
    "hotsheetSection": ${queries.hotsheetSection},
    "emailCaptureSection": ${queries.emailCaptureSection},
    "faqSection": ${queries.faqSection},
    "faqItems": ${queries.faqItems},
    "ctaBannerSection": ${queries.ctaBannerSection}
  }`;

  return sanityClient.fetch<{
    hero: HeroContent | null;
    signalsSection: SignalsSectionContent | null;
    signals: SignalContent[];
    packsSection: PacksSectionContent | null;
    packs: PackContent[];
    howItWorksSection: HowItWorksSectionContent | null;
    howItWorksSteps: HowItWorksStepContent[];
    hotsheetSection: HotsheetSectionContent | null;
    emailCaptureSection: EmailCaptureSectionContent | null;
    faqSection: FaqSectionContent | null;
    faqItems: FaqItemContent[];
    ctaBannerSection: CtaBannerSectionContent | null;
  }>(query);
}

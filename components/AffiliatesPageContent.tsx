"use client";

import Link from "next/link";
import AffiliatesCalculator from "@/components/AffiliatesCalculator";
import WhyProgramSection from "@/components/WhyProgramSection";
import AffiliatesMarquee from "@/components/AffiliatesMarquee";
import WhatYouPromote from "@/components/WhatYouPromote";
import TheProcess from "@/components/TheProcess";
import WhoShouldApply from "@/components/WhoShouldApply";
import PartnerResources from "@/components/PartnerResources";
import AffiliateCTA from "@/components/AffiliateCTA";
import AffiliateFAQ from "@/components/AffiliateFAQ";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

const DEFAULTS: Partial<AffiliatesPageResult> = {
  heroHeading: "Get Paid to\nShare the Edge.",
  heroDescription:
    "Earn 30% on every first-time purchase your audience makes on WagerBird — HOTSHEET, PointsPacks, or Terminal access. Flat rate. No tiers. No forced subscriptions.",
  commissionMeta: "// Commission · First Purchase · No Cap",
  programStatus: "Program Open · Paying Out From Day One",
  primaryCtaLabel: "Apply to the Program",
  primaryCtaHref: "/register",
  secondaryCtaLabel: "See How It Works",
  secondaryCtaHref: "#how-it-works",
};

export default function AffiliatesPageContent({
  data,
}: {
  data: AffiliatesPageResult | null;
}) {
  const c = { ...DEFAULTS, ...data };
  const heroLines = (c.heroHeading ?? "Get Paid to\nShare the Edge.").split("\n");

  return (
    <div className="aff-page">
      <div className="aff-glow" aria-hidden="true" />

      {/* Hero */}
      <section className="aff-hero">
        <h1 className="aff-hero-heading">
          {heroLines[0]}
          <br />
          {heroLines[1]?.replace(/Edge\.?$/, "") ?? "Share the "}
          <em className="aff-hero-accent">Edge.</em>
        </h1>
        <p className="aff-hero-description">{c.heroDescription}</p>
        <div className="aff-program-status">
          <span className="aff-status-dot" aria-hidden="true" />
          <span className="aff-status-text">{c.programStatus}</span>
        </div>
        <div className="aff-hero-actions">
          <Link href={c.primaryCtaHref ?? "/register"} className="aff-btn-primary">
            {c.primaryCtaLabel}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9.33333 3.33325L14 7.99992M14 7.99992L9.33333 12.6666M14 7.99992H2" stroke="currentColor" strokeWidth="1.67" strokeLinecap="square" />
            </svg>
          </Link>
          <a href={c.secondaryCtaHref ?? "#how-it-works"} className="aff-btn-ghost">
            {c.secondaryCtaLabel}
          </a>
        </div>
      </section>

      <AffiliatesCalculator data={data} />
      <WhyProgramSection data={data} />
      <AffiliatesMarquee data={data} />
      <WhatYouPromote data={data} />
      <TheProcess data={data} />
      <WhoShouldApply data={data} />
      <PartnerResources data={data} />
      <AffiliateCTA data={data} />
      <AffiliateFAQ data={data} />
    </div>
  );
}

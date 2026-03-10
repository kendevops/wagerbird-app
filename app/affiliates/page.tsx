import type { Metadata } from "next";
import Link from "next/link";
import AffiliatesCalculator from "@/components/AffiliatesCalculator";
import WhyProgramSection from "@/components/WhyProgramSection";
import AffiliatesMarquee from "@/components/AffiliatesMarquee";
import WhatYouPromote from "@/components/WhatYouPromote";
import TheProcess from "@/components/TheProcess";
import WhoShouldApply from "@/components/WhoShouldApply";
import PartnerResources from "@/components/PartnerResources";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Affiliates — WagerBird",
  description:
    "Earn 30% commission on every first-time purchase. No tiers. No forced subscriptions. Paying out from day one.",
};

export default function AffiliatesPage() {
  return (
    <div className="aff-page">
      {/* Ambient glow */}
      <div className="aff-glow" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="aff-hero">
        {/* Big commission number */}
        <div className="aff-commission-display">
          <span className="aff-commission-value">30%</span>
          <p className="aff-commission-meta">
            // Commission&nbsp;·&nbsp;First Purchase&nbsp;·&nbsp;No Cap
          </p>
        </div>

        {/* Divider */}
        <div className="aff-divider" aria-hidden="true">
          <span className="aff-divider-line" />
          <span className="aff-divider-post" />
          <span className="aff-divider-line" />
        </div>

        {/* Heading */}
        <h1 className="aff-hero-heading">
          Get Paid to
          <br />
          Share the{" "}
          <em className="aff-hero-accent">Edge.</em>
        </h1>

        {/* Description */}
        <p className="aff-hero-description">
          Earn 30% on every first-time purchase your audience makes on
          WagerBird&nbsp;— HOTSHEET, PointsPacks, or Terminal access. Flat rate.
          No tiers. No forced subscriptions.
        </p>

        {/* Program status */}
        <div className="aff-program-status">
          <span className="aff-status-dot" aria-hidden="true" />
          <span className="aff-status-text">
            Program Open&nbsp;·&nbsp;Paying Out From Day One
          </span>
        </div>

        {/* CTAs */}
        <div className="aff-hero-actions">
          <Link href="/register" className="aff-btn-primary">
            Apply to the Program
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9.33333 3.33325L14 7.99992M14 7.99992L9.33333 12.6666M14 7.99992H2"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="square"
              />
            </svg>
          </Link>
          <a href="#how-it-works" className="aff-btn-ghost">
            See How It Works
          </a>
        </div>
      </section>

      {/* ── EARNINGS CALCULATOR ── */}
      <AffiliatesCalculator />

      {/* ── WHY THIS PROGRAM ── */}
      <WhyProgramSection />

      {/* ── MARQUEE BANNER ── */}
      <AffiliatesMarquee />

      {/* ── WHAT YOU PROMOTE ── */}
      <WhatYouPromote />

      {/* ── THE PROCESS ── */}
      <TheProcess />

      {/* ── WHO SHOULD APPLY ── */}
      <WhoShouldApply />

      {/* ── PARTNER RESOURCES ── */}
      <PartnerResources />

      {/* ── CTA BANNER ── */}
      <AffiliateCTA />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import AffiliatesCalculator from "@/components/AffiliatesCalculator";
import WhyProgramSection from "@/components/WhyProgramSection";
import AffiliatesMarquee from "@/components/AffiliatesMarquee";

export const metadata: Metadata = {
  title: "Affiliates — WagerBird",
  description:
    "Earn 30% commission on every first-time purchase. No tiers. No forced subscriptions. Paying out from day one.",
};

const PROGRAM_PERKS = [
  {
    label: "30% Commission",
    detail: "On every first-time purchase your audience makes. Flat rate, no tiers.",
  },
  {
    label: "No Cap",
    detail: "Unlimited earning potential. The more you refer, the more you earn.",
  },
  {
    label: "Instant Payouts",
    detail: "Paying out from day one. No waiting periods or thresholds.",
  },
  {
    label: "All Products",
    detail: "HOTSHEET, PointsPacks, Terminal access — every purchase counts.",
  },
];

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

      {/* ── HOW IT WORKS ── */}
      <section className="aff-how-section" id="how-it-works">
        <p className="aff-section-eyebrow">// How It Works</p>
        <h2 className="aff-section-heading">Simple. Transparent. Profitable.</h2>

        <div className="aff-steps">
          {[
            {
              num: "01",
              title: "Apply",
              body: "Fill out a short application. Get approved within 24 hours.",
            },
            {
              num: "02",
              title: "Share",
              body: "Get your unique referral link and share it with your audience.",
            },
            {
              num: "03",
              title: "Earn",
              body: "Earn 30% on every first purchase made through your link. No expiry.",
            },
          ].map(({ num, title, body }) => (
            <div key={num} className="aff-step">
              <span className="aff-step-num">{num}</span>
              <h3 className="aff-step-title">{title}</h3>
              <p className="aff-step-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="aff-perks-section">
        <p className="aff-section-eyebrow">// Program Details</p>
        <h2 className="aff-section-heading">Everything You Need to Know</h2>

        <div className="aff-perks-grid">
          {PROGRAM_PERKS.map(({ label, detail }) => (
            <div key={label} className="aff-perk-card">
              <span className="aff-perk-check" aria-hidden="true">✓</span>
              <div>
                <h3 className="aff-perk-label">{label}</h3>
                <p className="aff-perk-detail">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="aff-cta-section">
        <h2 className="aff-cta-heading">
          Ready to Start
          <br />
          <em className="aff-hero-accent">Earning?</em>
        </h2>
        <p className="aff-cta-body">
          Join the WagerBird affiliate program and get paid to share the edge.
        </p>
        <Link href="/register" className="aff-btn-primary">
          Apply Now
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
      </section>
    </div>
  );
}

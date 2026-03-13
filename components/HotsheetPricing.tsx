"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";


// ─── Types ────────────────────────────────────────────
interface PricingCardProps {
  popular?: boolean;
  mockLabel: string;
  mockSublabel?: string;
  mockMatchup: string;
  mockConfidence: number;
  mockSecondary: string;
  mockSecondaryMeta?: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  footer?: string;
}

// ─── Phone Mockup Widget ──────────────────────────────
const PhoneMockup = ({
  label,
  sublabel,
  matchup,
  confidence,
  secondary,
  secondaryMeta,
  popular,
}: {
  label: string;
  sublabel?: string;
  matchup: string;
  confidence: number;
  secondary: string;
  secondaryMeta?: string;
  popular?: boolean;
}) => (
  <div className={`hsp-mockup ${popular ? "hsp-mockup--popular" : ""}`}>
    <div className="hsp-mockup__top">
      <div className="hsp-mockup__top-left">
        <span className="hsp-mockup__label">{label}</span>
        {sublabel && <span className="hsp-mockup__sublabel">{sublabel}</span>}
      </div>
      <span className="hsp-mockup__score">{confidence}</span>
    </div>
    <div className="hsp-mockup__main">
      <div className="hsp-mockup__matchup-row">
        <div>
          <div className="hsp-mockup__matchup">{matchup}</div>
          <div className="hsp-mockup__conf">
            Confidence: <strong>{confidence}</strong>
            <span className="hsp-mockup__dot" />
          </div>
        </div>
      </div>
      <button className="hsp-mockup__tap" tabIndex={-1} aria-hidden="true">
        TAP TO VIEW
      </button>
    </div>
    <div className="hsp-mockup__footer">
      <span className="hsp-mockup__secondary">{secondary}</span>
      {secondaryMeta && (
        <span className="hsp-mockup__secondary-meta">{secondaryMeta}</span>
      )}
    </div>
  </div>
);

// ─── Check icon ───────────────────────────────────────
const CheckIcon = ({ popular }: { popular?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill={popular ? "rgba(255,255,255,0.15)" : "rgba(228,242,34,0.15)"} />
    <path
      d="M5 8.5L7 10.5L11 6"
      stroke={popular ? "#fff" : "#E4F222"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Pricing Card with Tilt + Glow ───────────────────
const PricingCard = ({
  popular,
  mockLabel,
  mockSublabel,
  mockMatchup,
  mockConfidence,
  mockSecondary,
  mockSecondaryMeta,
  title,
  subtitle,
  price,
  features,
  ctaLabel,
  ctaHref = "/register",
  footer,
}: PricingCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glowOpacity, setGlowOpacity] = useState(0);
  const [shineOpacity, setShineOpacity] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springCfg = { damping: 18, stiffness: 280, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springCfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springCfg);
  const scaleSpring = useSpring(1, springCfg);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    containerRef.current.style.setProperty("--glow-x", `${px * 100}%`);
    containerRef.current.style.setProperty("--glow-y", `${py * 100}%`);
    if (popular) setGlowOpacity(1);
    setShineOpacity(0.12);
  };

  const handleMouseEnter = () => {
    scaleSpring.set(1.03);
    if (popular) setGlowOpacity(1);
    setShineOpacity(0.12);
  };

  const handleMouseLeave = () => {
    scaleSpring.set(1);
    x.set(0);
    y.set(0);
    setGlowOpacity(0);
    setShineOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hsp-card-outer ${popular ? "hsp-card-outer--popular" : ""}`}
      style={{ perspective: 1000 }}
    >
      {/* Radial glow behind the popular card */}
      {popular && (
        <div
          className="hsp-card-glow"
          style={{ opacity: glowOpacity }}
          aria-hidden="true"
        />
      )}

      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          transformStyle: "preserve-3d",
        }}
        className={`hsp-card ${popular ? "hsp-card--popular" : ""}`}
      >
        {/* Mouse-follow shine */}
        <div
          className="hsp-card-shine"
          style={{ opacity: shineOpacity }}
          aria-hidden="true"
        />

        {/* Most popular badge */}
        {popular && (
          <div className="hsp-card-badge">
            <span className="hsp-card-badge__dot" aria-hidden="true" />
            MOST POPULAR
          </div>
        )}

        {/* Phone mockup */}
        <PhoneMockup
          label={mockLabel}
          sublabel={mockSublabel}
          matchup={mockMatchup}
          confidence={mockConfidence}
          secondary={mockSecondary}
          secondaryMeta={mockSecondaryMeta}
          popular={popular}
        />

        {/* Plan info */}
        <div className="hsp-card-body">
          <div>
            <h3 className="hsp-card-title">{title}</h3>
            <p className="hsp-card-subtitle">{subtitle}</p>
          </div>

          <div className="hsp-card-price-row">
            <span className="hsp-card-price">{price}</span>
            <span className="hsp-card-price-suffix">one-time</span>
          </div>

          <ul className="hsp-card-features">
            {features.map((f, i) => (
              <li key={i} className="hsp-card-feature">
                <CheckIcon popular={popular} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={ctaHref}
            onClick={() => trackInitiateCheckout("hotsheet_pricing", title)}
            className={`hsp-card-cta ${popular ? "hsp-card-cta--popular" : ""}`}
          >
            {ctaLabel}
          </a>

          {footer && (
            <p className="hsp-card-footer">{footer}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────
export default function HotsheetPricing() {
  return (
    <section className="hsp-section">
      <div className="hsp-inner">
        {/* Header */}
        <motion.div
          className="hsp-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="hsp-label">// Choose Your Window</span>
          <h2 className="hsp-heading">
            One-Time.
            <br />
            <em className="hsp-heading-accent">No Subscription.</em>
          </h2>
          <p className="hsp-description">
            Pay once per day. Half-day gets you the morning window. Full-day
            gets you both morning and evening — plus 3-day Terminal access.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="hsp-cards">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <PricingCard
              mockLabel="WAGERBIRD HOTSHEET"
              mockSublabel="TOP SIGNAL"
              mockMatchup="YANKEES VS RED SOX"
              mockConfidence={89}
              mockSecondary="CHIEFS VS RAVENS"
              title="On-Demand"
              subtitle="Best picks from the Terminal, instantly delivered"
              price="$25"
              features={[
                "2–3 of our best signals (picks)",
                "Direct to your inbox — no login required",
                "Confidence-scored signals rated 76+",
                "No subscription required",
              ]}
              ctaLabel="BUY NOW →"
              ctaHref="/get-started?plan=hotsheet-ondemand"
              footer="🔒  SECURE CHECKOUT · ONE TIME PAYMENT"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <PricingCard
              popular
              mockLabel="WAGERBIRD HOTSHEET"
              mockSublabel="MORNING + EVENING"
              mockMatchup="BRAVES VS PADRES"
              mockConfidence={91}
              mockSecondary="LAKERS VS WARRIORS · NBA"
              mockSecondaryMeta="+ MORE SIGNALS"
              title="Full-Day Pass"
              subtitle="Both windows — morning + evening"
              price="$40"
              features={[
                "6+ of our best signals (picks)",
                "2 emails sent — morning and evening",
                "Confidence-scored signals rated 76+",
                "Full Terminal access for 3 days",
              ]}
              ctaLabel="BUY NOW →"
              ctaHref="/get-started?plan=hotsheet-fullday"
              footer="INCLUDES FREE 3-DAY TERMINAL TRIAL"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

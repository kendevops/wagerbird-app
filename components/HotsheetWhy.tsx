"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MagicBento, MagicBentoCard } from "./animations/MagicBento";

// ─── Feature list icons ───────────────────────────────────
const IconInbox = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 7V12L15 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" opacity="0.5"/>
    <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.75"/>
    <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor"/>
  </svg>
);

const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

// ─── Feature row ──────────────────────────────────────────
const FEATURES = [
  {
    icon: <IconInbox />,
    title: "No Login Required",
    desc: "Signals delivered straight to your inbox. Open, read, execute.",
  },
  {
    icon: <IconClock />,
    title: "Timed For Action",
    desc: "Delivered before game time. Never miss a window again.",
  },
  {
    icon: <IconBar />,
    title: "Confidence Scored",
    desc: "Every signal carries a score. Know exactly how hard to bet it.",
  },
  {
    icon: <IconTarget />,
    title: "Curated Selection",
    desc: "Only the model's top 2–3 picks. No noise, no padding.",
  },
];

const FeatureRow = ({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`hsw-feature ${hovered ? "hsw-feature--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Yellow side accent bar */}
      <motion.div
        className="hsw-feature__bar"
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0 }}
        aria-hidden="true"
      />

      <div className="hsw-feature__icon">{icon}</div>
      <div className="hsw-feature__text">
        <span className="hsw-feature__title">{title}</span>
        <span className="hsw-feature__desc">{desc}</span>
      </div>
    </motion.div>
  );
};

// ─── Right side: Sample cards ─────────────────────────────
interface SampleCardProps {
  kicker: string;
  sport: string;
  matchup: string;
  market: string;
  confidence: number;
  locked?: boolean;
  featured?: boolean;
}

const SampleCard = ({ kicker, sport, matchup, market, confidence, locked, featured }: SampleCardProps) => (
  <MagicBentoCard
    className={`hsw-sample-card ${featured ? "hsw-sample-card--featured" : ""} ${locked ? "hsw-sample-card--locked" : ""}`}
    glowColor="228, 242, 34"
    enableTilt={!locked}
    enableParticles={!locked}
  >
    <div className="hsw-sample-card__inner">
      {/* Card header row */}
      <div className="hsw-sample-card__header">
        <div className="hsw-sample-card__header-left">
          <span className="hsw-sample-card__kicker">{kicker}</span>
          <span className="hsw-sample-card__sport">{sport}</span>
        </div>
        {locked ? (
          <div className="hsw-sample-card__lock" aria-label="Locked">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
        ) : (
          <span className="hsw-sample-card__score">{confidence}</span>
        )}
      </div>

      {/* Matchup */}
      <div className={`hsw-sample-card__matchup ${locked ? "hsw-sample-card__matchup--blur" : ""}`}>
        {matchup}
      </div>

      {/* Market + confidence row */}
      <div className="hsw-sample-card__meta">
        <span>
          Market: <strong>{market}</strong>
        </span>
        {!locked && <span>Confidence: <strong>{confidence}</strong></span>}
      </div>

      {/* CTA or locked notice */}
      {locked ? (
        <div className="hsw-sample-card__locked-notice">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          UNLOCK WITH FULL-DAY PASS
        </div>
      ) : (
        <button className="hsw-sample-card__btn" tabIndex={-1} aria-label={`View ${matchup} signal`}>
          TAP TO VIEW
        </button>
      )}
    </div>
  </MagicBentoCard>
);

// ─── Main component ───────────────────────────────────────
export default function HotsheetWhy() {
  return (
    <section className="hsw-section">
      <div className="hsw-bg" aria-hidden="true" />

      <div className="hsw-inner">
        {/* ── Left column ── */}
        <motion.div
          className="hsw-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="hsw-label">// Why Hotsheet</span>

          <h2 className="hsw-heading">
            Same Terminal<br />
            Signals.<br />
            <em className="hsw-heading-accent">Zero Workflow.</em>
          </h2>

          <p className="hsw-description">
            The Terminal framework is printing across every sport. Hotsheet gives you the top plays without logging in, without the workflow — just the signals that matter most.
          </p>

          <div className="hsw-features">
            {FEATURES.map((f, i) => (
              <FeatureRow key={f.title} {...f} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          className="hsw-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Panel header */}
          <div className="hsw-panel-header">
            <span className="hsw-panel-dot" aria-hidden="true" />
            <span className="hsw-panel-title">Today's Hotsheet</span>
            <span className="hsw-panel-divider" aria-hidden="true">·</span>
            <span className="hsw-panel-tag">Sample</span>
          </div>

          {/* Cards */}
          <MagicBento className="hsw-cards-grid" enableSpotlight glowColor="228, 242, 34">
            <SampleCard
              featured
              kicker="WAGERBIRD HOTSHEET"
              sport="TOP SIGNAL · MLB"
              matchup="BRAVES VS PADRES"
              market="Spread"
              confidence={91}
            />
            <SampleCard
              kicker="WAGERBIRD HOTSHEET"
              sport="SIGNAL · NFL"
              matchup="CHIEFS VS RAVENS"
              market="Moneyline"
              confidence={89}
            />
            <SampleCard
              locked
              kicker="WAGERBIRD HOTSHEET"
              sport="SIGNAL · NBA"
              matchup="CELTICS VS HEAT"
              market="Over/Under"
              confidence={0}
            />
          </MagicBento>
        </motion.div>
      </div>
    </section>
  );
}

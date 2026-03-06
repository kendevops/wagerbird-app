"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./animations/SpotlightCard";

// ─── Card: Two Daily Releases ──────────────────────────
const TwoDailyReleasesCard = () => (
  <div className="hsf-card__inner">
    <div className="hsf-card__header">
      <div className="hsf-card__icon-wrap">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M12 7V12L15 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="hsf-card__badge">AM + PM</span>
    </div>
    <h3 className="hsf-card__title">Two Daily Releases</h3>
    <p className="hsf-card__desc">
      Morning window for early games. Evening window for primetime. Two shots at the best plays each day.
    </p>
    <div className="hsf-releases__times">
      <div className="hsf-releases__row">
        <span className="hsf-releases__label">AM HOTSHEET</span>
        <span className="hsf-releases__time">9:15 AM <em>ET</em></span>
      </div>
      <div className="hsf-releases__divider" />
      <div className="hsf-releases__row">
        <span className="hsf-releases__label">PM HOTSHEET</span>
        <span className="hsf-releases__time">3:15 PM <em>ET</em></span>
      </div>
    </div>
  </div>
);

// ─── Card: Curated Signals ─────────────────────────────
const CuratedSignalsCard = () => (
  <div className="hsf-card__inner">
    <h3 className="hsf-card__title hsf-card__title--lg">
      Curated Up To Three Signals (Picks)
    </h3>
    <p className="hsf-card__desc">
      Hand-selected from the Terminal&rsquo;s highest-confidence output. Only the signals worth acting on make the cut.
    </p>
    <div className="hsf-signals__list">
      {[
        { matchup: "BRAVES VS PADRES", score: 91, active: true },
        { matchup: "CHIEFS VS RAVENS", score: 85, active: true },
        { matchup: "LAKERS VS WARRIORS", score: 74, active: false },
      ].map((s) => (
        <div key={s.matchup} className="hsf-signals__row">
          <div className="hsf-signals__row-inner">
            <span className="hsf-signals__kicker">WAGERBIRD HOTSHEET</span>
            <span className="hsf-signals__matchup">{s.matchup}</span>
          </div>
          <span className={`hsf-signals__score ${s.active ? "hsf-signals__score--active" : ""}`}>
            {s.score}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Card: Confidence Shown ────────────────────────────
const ConfidenceCard = () => {
  const bars = [9, 9, 9, 9, 9, 9, 3]; // roughly 10 bars, last partial
  return (
    <div className="hsf-card__inner">
      <h3 className="hsf-card__title">Confidence Shown</h3>
      <p className="hsf-card__desc">
        Every signal carries a confidence rating, telling you how strong the model&rsquo;s conviction is.
      </p>
      <div className="hsf-conf__display">
        <span className="hsf-conf__score">93</span>
        <div className="hsf-conf__bars" aria-label="Confidence bar visualization">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`hsf-conf__bar ${i < 9 ? "hsf-conf__bar--filled" : "hsf-conf__bar--partial"}`}
            />
          ))}
        </div>
      </div>
      <p className="hsf-conf__footnote">
        CONFIDENCE SCORE OUT OF 100. 75+ REQUIRED TO MAKE THE HOTSHEET.
      </p>
    </div>
  );
};

// ─── Card: Direct to Inbox ─────────────────────────────
const DirectInboxCard = () => (
  <div className="hsf-card__inner">
    <h3 className="hsf-card__title">Direct To Inbox</h3>
    <p className="hsf-card__desc">
      One email. No login. No app. No friction. Open it, read the plays, execute at your sportsbook.
    </p>
    <div className="hsf-inbox__notification">
      <div className="hsf-inbox__icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="rgba(228,242,34,0.7)"/>
        </svg>
      </div>
      <div className="hsf-inbox__content">
        <span className="hsf-inbox__label">EMAIL NOTIFICATION</span>
        <span className="hsf-inbox__text">Your AM HOTSHEET — 3 plays · Conf 79–91</span>
      </div>
      <div className="hsf-inbox__dot" aria-label="New notification" />
    </div>
  </div>
);

// ─── Feature card wrapper with animation ──────────────
const FeatureCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    className="hsf-card-motion"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <SpotlightCard
      className="hsf-card"
      spotlightColor="rgba(228, 242, 34, 0.08)"
    >
      {children}
    </SpotlightCard>
  </motion.div>
);

// ─── Main Section ──────────────────────────────────────
export default function HotsheetFeatures() {
  return (
    <section className="hsf-section">
      {/* Background layers matching hero */}
      <div className="hsf-bg" aria-hidden="true" />
      <div className="hsf-stars" aria-hidden="true" />

      <div className="hsf-inner">
        {/* Header */}
        <motion.div
          className="hsf-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="hsf-label">// What You Get</span>
          <h2 className="hsf-heading">
            <em>Simplified.</em>
          </h2>
          <p className="hsf-description">
            HOTSHEET delivers a max of three confirmed plays per release. Each one is pulled directly from the WAGERBIRD Terminal, confidence-weighted, and sent right to your inbox. Three plays. High quality, get you fewer. More equity, that&rsquo;s our framework forward.
          </p>
        </motion.div>

        {/* 2×2 Cards grid */}
        <div className="hsf-grid">
          <FeatureCard delay={0.05}>
            <TwoDailyReleasesCard />
          </FeatureCard>
          <FeatureCard delay={0.12}>
            <CuratedSignalsCard />
          </FeatureCard>
          <FeatureCard delay={0.18}>
            <ConfidenceCard />
          </FeatureCard>
          <FeatureCard delay={0.24}>
            <DirectInboxCard />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

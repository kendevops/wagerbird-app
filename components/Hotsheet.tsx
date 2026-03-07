"use client";

import { motion } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";
import { MagicBento, MagicBentoCard } from "./animations/MagicBento";

interface HotsheetProps {
  ctaLabel?: string;
  ctaHref?: string;
}

// ─── Bento Content Cards ──────────────────────────────────
const TopSignalCard = () => (
  <div className="hotsheet-bento__signal-card">
    <div className="hotsheet-bento__card-kicker">WAGERBIRD HOTSHEET</div>
    <div className="hotsheet-bento__confidence">91</div>
    <div className="hotsheet-bento__card-sub">TOP SIGNAL</div>
    <div className="hotsheet-bento__card-matchup">BRAVES VS PADRES</div>
    <div className="hotsheet-bento__card-meta">Confidence: <strong>91</strong></div>
    <button className="hotsheet-bento__tap-btn">TAP TO VIEW</button>
  </div>
);

const NotificationCard = ({ matchup, sport, score, time }: { matchup: string; sport: string; score: string | number; time?: string }) => (
  <div className="hotsheet-bento__notif">
    {time && <div className="hotsheet-bento__notif-time">// DELIVERED {time}</div>}
    <div className="hotsheet-bento__notif-matchup">{matchup}</div>
    <div className="hotsheet-bento__notif-bottom">
      <span className="hotsheet-bento__notif-sport">{sport}</span>
      <span className="hotsheet-bento__notif-score">{score}</span>
    </div>
  </div>
);

const StatCard = ({ value, label, accent }: { value: string; label: string; accent?: boolean }) => (
  <div className={`hotsheet-bento__stat ${accent ? 'hotsheet-bento__stat--accent' : ''}`}>
    <div className="hotsheet-bento__stat-value">{value}</div>
    <div className="hotsheet-bento__stat-label">{label}</div>
  </div>
);

const DeliveryCard = () => (
  <div className="hotsheet-bento__delivery">
    <div className="hotsheet-bento__delivery-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#E4F222"/>
      </svg>
    </div>
    <div className="hotsheet-bento__delivery-text">
      <div className="hotsheet-bento__delivery-label">Daily Delivery</div>
      <div className="hotsheet-bento__delivery-sub">By 8:00 AM EST, every day</div>
    </div>
  </div>
);

export default function Hotsheet({
  ctaLabel = "Get Hotsheet →",
  ctaHref = "https://app.wagerbird.com/register",
}: HotsheetProps) {
  return (
    <section className="hotsheet-hero">
      {/* Background layers */}
      <div className="hotsheet-hero__bg" aria-hidden="true" />
      <div className="hotsheet-hero__stars" aria-hidden="true" />
      <div className="hotsheet-hero__divider" aria-hidden="true" />

      {/* Left — copy */}
      <motion.div
        className="hotsheet-hero__content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Kicker */}
        <div className="hotsheet-hero__kicker">
          <span className="hotsheet-hero__dot" aria-hidden="true" />
          <span className="hotsheet-hero__kicker-text">// Hotsheet</span>
        </div>

        {/* Heading */}
        <h2 className="hotsheet-hero__heading">
          The Cheat<br />
          Code. <em className="hotsheet-hero__heading-accent">Built</em><br />
          To Hit.
        </h2>

        {/* Description */}
        <p className="hotsheet-hero__description">
          Top daily picks sent directly to your phone before game time. Every play is scored by confidence — always know what to bet and how hard to bet it.
        </p>

        {/* Meta perks */}
        <div className="hotsheet-hero__meta">
          <span>$2/day</span>
          <span className="hotsheet-hero__meta-sep" aria-hidden="true">·</span>
          <span>Cancel anytime</span>
          <span className="hotsheet-hero__meta-sep" aria-hidden="true">·</span>
          <span>No commitment</span>
        </div>

        {/* CTA */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout("hotsheet")}
          className="hotsheet-hero__cta clip-btn"
        >
          {ctaLabel}
        </a>
      </motion.div>

      {/* Right — MagicBento grid */}
      <motion.div
        className="hotsheet-hero__bento-wrap"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <MagicBento className="hotsheet-hero__bento" enableSpotlight glowColor="228, 242, 34">
          {/* Card 1 — Featured / Top signal (spans 2 rows) */}
          <MagicBentoCard className="hotsheet-bento__card hotsheet-bento__card--featured" glowColor="228, 242, 34">
            <TopSignalCard />
          </MagicBentoCard>

          {/* Card 2 — Stats: picks per day */}
          <MagicBentoCard className="hotsheet-bento__card" glowColor="228, 242, 34">
            <StatCard value="5–7" label="Daily Picks" accent />
          </MagicBentoCard>

          {/* Card 3 — Stats: cost */}
          <MagicBentoCard className="hotsheet-bento__card" glowColor="228, 242, 34">
            <StatCard value="$2" label="Per Day" />
          </MagicBentoCard>

          {/* Card 4 — Notification: Chiefs */}
          <MagicBentoCard className="hotsheet-bento__card hotsheet-bento__card--notif" glowColor="228, 242, 34">
            <NotificationCard matchup="CHIEFS VS RAVENS" sport="NFL · Spread" score={91} />
          </MagicBentoCard>

          {/* Card 5 — Delivery info */}
          <MagicBentoCard className="hotsheet-bento__card hotsheet-bento__card--delivery" glowColor="228, 242, 34">
            <DeliveryCard />
          </MagicBentoCard>

          {/* Card 6 — Notification: Lakers */}
          <MagicBentoCard className="hotsheet-bento__card hotsheet-bento__card--notif" glowColor="228, 242, 34">
            <NotificationCard matchup="LAKERS VS WARRIORS" sport="NBA · O/U" score={76} time="8:45 AM" />
          </MagicBentoCard>
        </MagicBento>
      </motion.div>
    </section>
  );
}

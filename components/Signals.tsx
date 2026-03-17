"use client";

import { motion } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";

import SignalCard, { SignalCardProps } from "./SignalCard";

interface SignalsProps {
  sectionId?: string;
  label?: string;
  title?: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items?: SignalCardProps[];
  footerText?: string;
}

const defaultSignals: SignalCardProps[] = [
  {
    matchup: "Yankees vs Red Sox",
    sport: "MLB",
    time: "Tonight 7:05 PM",
    betType: "O/U",
    confidence: 89,
    locked: false,
  },
  {
    matchup: "Chiefs vs Ravens",
    sport: "NFL",
    time: "Sunday 4:25 PM",
    betType: "ML",
    confidence: 91,
    locked: false,
  },
  {
    matchup: "Lakers vs Warriors",
    sport: "NBA",
    time: "Tonight 10:30 PM",
    betType: "Spread",
    confidence: 76,
    locked: false,
  },
  {
    matchup: "Bruins vs Maple Leafs",
    sport: "NHL",
    time: "Tonight 7:00 PM",
    betType: "ML",
    confidence: 82,
    locked: true,
  },
  {
    matchup: "Dodgers vs Cubs",
    sport: "MLB",
    time: "Tonight 8:10 PM",
    betType: "RL",
    confidence: 77,
    locked: true,
  },
];

export default function Signals({
  sectionId,
  label = "// The Terminal",
  title = (
    <>
      Every Signal.
      <br />
      Every Sport.
      <br />
      <em className="signals-heading-accent">Scored.</em>
    </>
  ),
  description = "Each pick is assigned a confidence rating 0–100. Higher confidence = more points required. The model's performance is fully transparent — no cherry-picking, no selective memory.",
  ctaLabel = "Unlock All Signals →",
  ctaHref = "/pricing#packs",
  items = defaultSignals,
  footerText = "+ 47 more signals locked — Buy points to unlock",
}: SignalsProps) {
  return (
    <section id={sectionId || "terminal"} className="signals-section">
      {/* Left — copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="signals-copy"
      >
        <span className="signals-label">{label}</span>

        <h2 className="signals-heading">{title}</h2>

        <p className="signals-description">{description}</p>

        <a
          href={ctaHref}
          onClick={() => trackInitiateCheckout("signals")}
          className="signals-cta clip-btn"
        >
          {ctaLabel}
        </a>
      </motion.div>

      {/* Right — signal cards panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="signals-panel"
      >
        <div className="signals-cards">
          {items.map((signal, i) => (
            <SignalCard key={i} {...signal} />
          ))}
        </div>

        <div className="signals-panel-footer">{footerText}</div>
      </motion.div>
    </section>
  );
}

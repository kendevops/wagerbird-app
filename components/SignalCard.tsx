"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Waveform-style bar heights (12 bars)
const BAR_HEIGHTS = [5, 10, 18, 26, 32, 28, 22, 30, 18, 12, 7, 14];

function ConfidenceBars({ confidence }: { confidence: number }) {
  const scale = confidence / 100;
  return (
    <div className="signal-bars" aria-hidden="true">
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="signal-bar"
          style={{ height: `${Math.round(h * scale + h * 0.35)}px` }}
        />
      ))}
    </div>
  );
}

export interface SignalCardProps {
  matchup: string;
  sport: string;
  time: string;
  betType: string;
  confidence: number;
  locked?: boolean;
}

export default function SignalCard({
  matchup,
  sport,
  time,
  betType,
  confidence,
  locked = false,
}: SignalCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`signal-card${locked ? " signal-card--locked" : ""}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        boxShadow:
          hovered && !locked
            ? "0 0 0 1px rgba(228,242,34,0.28), 0 8px 36px rgba(228,242,34,0.14)"
            : "0 0 0 0px rgba(228,242,34,0), 0 0px 0px rgba(228,242,34,0)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {/* Yellow left accent bar — only for unlocked on hover */}
      <AnimatePresence>
        {hovered && !locked && (
          <motion.span
            className="signal-card-accent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Inner content — blurred when locked */}
      <div className={`signal-card-inner${locked ? " signal-card-inner--blurred" : ""}`}>
        {/* Left: matchup info */}
        <div className="signal-card-info">
          <span className="signal-card-matchup">{matchup}</span>
          <span className="signal-card-meta">
            {sport}&nbsp;·&nbsp;{time}&nbsp;·&nbsp;{betType}
          </span>
        </div>

        {/* Right: bars + score */}
        <div className="signal-card-score-area">
          <ConfidenceBars confidence={confidence} />
          <span className="signal-card-score">{confidence}</span>
        </div>
      </div>
    </motion.div>
  );
}

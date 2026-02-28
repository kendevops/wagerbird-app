"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Bar heights pattern for the confidence visualizer (10 bars)
const BAR_HEIGHTS = [4, 8, 12, 16, 20, 24, 20, 14, 10, 6];

function ConfidenceBars({ confidence }: { confidence: number }) {
  // Scale bars based on confidence (70–100 range)
  const scale = confidence / 100;
  return (
    <div className="signal-bars" aria-hidden="true">
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="signal-bar"
          style={{ height: `${Math.round(h * scale + h * 0.4)}px` }}
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
        boxShadow: hovered
          ? "0 0 0 1px rgba(228,242,34,0.25), 0 8px 32px rgba(228,242,34,0.12)"
          : "0 0 0 0px rgba(228,242,34,0), 0 0px 0px rgba(228,242,34,0)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {/* Yellow left accent bar */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="signal-card-accent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Left: matchup info */}
      <div className="signal-card-info">
        <span className={`signal-card-matchup${locked ? " signal-card-matchup--locked" : ""}`}>
          {matchup}
        </span>
        <span className="signal-card-meta">
          {sport} &nbsp;·&nbsp; {time} &nbsp;·&nbsp; {betType}
        </span>
      </div>

      {/* Right: confidence display */}
      <div className="signal-card-score-area">
        {locked ? (
          <span className="signal-locked-badge">LOCKED</span>
        ) : (
          <ConfidenceBars confidence={confidence} />
        )}
        <span className={`signal-card-score${locked ? " signal-card-score--locked" : ""}`}>
          {confidence}
        </span>
      </div>
    </motion.div>
  );
}

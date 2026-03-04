"use client";

import { motion } from "framer-motion";

interface TickerItem {
  sport: string;
  matchup: string;
  confidence: number;
}

interface TickerProps {
  items?: TickerItem[];
  variant?: "yellow" | "dark";
}

const defaultTickerItems: TickerItem[] = [
  { sport: "MLB", matchup: "Yankees vs Red Sox", confidence: 89 },
  { sport: "NFL", matchup: "Chiefs vs Ravens", confidence: 91 },
  { sport: "NBA", matchup: "Lakers vs Warriors", confidence: 76 },
  { sport: "NHL", matchup: "Bruins vs Maple Leafs", confidence: 82 },
  { sport: "MLB", matchup: "Dodgers vs Cubs", confidence: 77 },
];

function TickerEntry({ sport, matchup, confidence }: TickerItem) {
  return (
    <span className="ticker-entry">
      <span className="ticker-sport">{sport}</span>
      <span className="ticker-star">★</span>
      <span className="ticker-matchup">{matchup}</span>
      <span className="ticker-confidence">CONF {confidence}</span>
    </span>
  );
}

export default function Ticker({ items = defaultTickerItems, variant = "yellow" }: TickerProps) {
  // Duplicate items to create a seamless loop
  const allItems = [...items, ...items];

  return (
    <div className={`ticker-wrapper${variant === "dark" ? " ticker-wrapper--dark" : ""}`}>
      <motion.div
        className="ticker-track"
        animate={{ x: "-50%" }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {allItems.map((item, index) => (
          <TickerEntry key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

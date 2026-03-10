"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "30% Commission",
  "Real-Time Tracking",
  "No Subscription Required",
  "Flat Rate From Day One",
  "Full Creative Kit",
  "First-Purchase Payout",
  "Unlimited Referrals",
  "Instant Approval",
];

export default function AffiliatesMarquee() {
  // Duplicate items so the seamless loop works at any screen width
  const track = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="aff-marquee-wrapper" aria-hidden="true">
      <motion.div
        className="aff-marquee-track"
        animate={{ x: "-33.333%" }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span key={i} className="aff-marquee-item">
            {item}
            <span className="aff-marquee-sep">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

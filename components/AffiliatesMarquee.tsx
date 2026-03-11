"use client";

import { motion } from "framer-motion";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

const DEFAULT_ITEMS = [
  "30% Commission",
  "Real-Time Tracking",
  "No Subscription Required",
  "Flat Rate From Day One",
  "Full Creative Kit",
  "First-Purchase Payout",
  "Unlimited Referrals",
  "Instant Approval",
];

export default function AffiliatesMarquee({ data }: { data?: AffiliatesPageResult | null }) {
  const items = data?.marqueeItems?.length ? data.marqueeItems : DEFAULT_ITEMS;
  const track = [...items, ...items, ...items];

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

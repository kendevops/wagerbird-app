"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

const DEFAULT_PRODUCTS = [
  {
    id: "terminal",
    badges: [{ label: "Full Platform Access", filled: false }],
    title: "Terminal / PointsPacks",
    subtags: ["Confidence-Scored Signals", "WagerVision", "Calculator"],
    description:
      "Access to the full WagerBird Terminal — the complete signal library, performance tracking, WagerVision overlays, and the bankroll Calculator. Purchased via Points, not a subscription.",
    tiers: [
      { label: "Starter Pack", price: 39, earn: 11.7 },
      { label: "Pro Pack", price: 99, earn: 29.7 },
    ],
  },
  {
    id: "hotsheet",
    badges: [
      { label: "Popular", filled: true },
      { label: "Daily Signal Digest", filled: false },
    ],
    title: "Hotsheet",
    subtags: ["AM + PM Releases", "Up to 3 Signals per Release"],
    description:
      "High-confidence signals delivered on a set schedule, twice daily. Your audience picks what they need — a single release or the full-day pass. No ongoing commitment.",
    tiers: [
      { label: "Single Release", price: 25, earn: 7.5 },
      { label: "Day Pass", price: 40, earn: 12.0 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhatYouPromote({ data }: { data?: AffiliatesPageResult | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const eyebrow = data?.wypEyebrow ?? "// What You Promote";
  const heading1 = data?.wypHeading1 ?? "Two Products.";
  const heading2 = data?.wypHeading2 ?? "One Clean Commission.";
  const description =
    data?.wypDescription ??
    "Promote WagerBird's core products. Every first-time purchase through your link earns 30% — no exceptions, no fine print.";
  const footnote =
    data?.wypFootnote ??
    "Commission applies to first-time purchases. All activity tracked in real time inside your partner dashboard.";
  const products =
    data?.wypProducts?.length && data.wypProducts.every((p) => p.id && p.title)
      ? (data.wypProducts as typeof DEFAULT_PRODUCTS)
      : DEFAULT_PRODUCTS;

  return (
    <section ref={sectionRef} className="wyp-section">
      {/* ── Header ── */}
      <motion.div
        className="wyp-header"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p className="wyp-eyebrow" variants={headingVariants}>
          {eyebrow}
        </motion.p>
        <motion.h2 className="wyp-heading" variants={headingVariants}>
          <span className="wyp-heading-dark">{heading1}</span>
          <br />
          <span className="wyp-heading-blue">{heading2}</span>
        </motion.h2>
        <motion.p className="wyp-description" variants={headingVariants}>
          {description}
        </motion.p>
      </motion.div>

      {/* ── Product Cards ── */}
      <motion.div
        className="wyp-cards"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="wyp-card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.22 } }}
          >
            {/* Left: Content */}
            <div className="wyp-card-body">
              {/* Badges */}
              <div className="wyp-badges">
                {product.badges.map((b) => (
                  <span
                    key={b.label}
                    className={`wyp-badge ${b.filled ? "wyp-badge--filled" : "wyp-badge--outline"}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="wyp-card-title">{product.title}</h3>

              {/* Subtags */}
              <p className="wyp-card-subtags">
                {product.subtags.join(" · ")}
              </p>

              {/* Description */}
              <p className="wyp-card-desc">{product.description}</p>

              {/* Pricing tiers */}
              <div className="wyp-tiers">
                {product.tiers.map((tier, i) => (
                  <div
                    key={tier.label}
                    className={`wyp-tier ${i === 1 ? "wyp-tier--dark" : "wyp-tier--light"}`}
                  >
                    <span className="wyp-tier-label">
                      {tier.label}&nbsp;&mdash;&nbsp;${tier.price}
                    </span>
                    <span className="wyp-tier-arrow">&rarr;</span>
                    <span className="wyp-tier-earn">
                      You Earn&nbsp;
                      <strong>
                        ${tier.earn % 1 === 0 ? tier.earn.toFixed(2) : tier.earn.toFixed(2)}
                      </strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Commission panel */}
            <div className="wyp-card-commission">
              <span className="wyp-commission-pct">30%</span>
              <span className="wyp-commission-label">Commission</span>
              <span className="wyp-commission-sub">Per first-time purchase</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Footer note ── */}
      <p className="wyp-footnote">{footnote}</p>
    </section>
  );
}

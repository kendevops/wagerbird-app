"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

const DEFAULT_AUDIENCES = [
  {
    num: "01",
    title: "Sports Betting Content Creators",
    body: "Writers, bloggers, and analysts covering betting strategy, picks breakdowns, and bankroll management. Your audience already buys — point them somewhere that pays you.",
    span: 3,
  },
  {
    num: "02",
    title: "Podcast & Newsletter Hosts",
    body: "Trusted voices with engaged audiences. WagerBird fits naturally into a pre-roll, mid-roll, or a newsletter placement. Low friction for your audience to convert.",
    span: 3,
  },
  {
    num: "03",
    title: "YouTube & Video Creators",
    body: "Demo-driven content and sports breakdowns. WagerBird's dashboard is visual and compelling on screen — your audience can see exactly what they're buying.",
    span: 2,
  },
  {
    num: "04",
    title: "Social Media Sports Accounts",
    body: "High-follower sports and betting accounts across X, Instagram, and TikTok. Fast conversions, low-cost entry point for your audience, straightforward link placement.",
    span: 2,
  },
  {
    num: "05",
    title: "Fantasy & DFS Analysts",
    body: "The overlap between DFS and sports betting is significant. WagerBird's signal structure resonates with an audience already thinking in terms of edges and probabilities.",
    span: 2,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function WhoShouldApply({ data }: { data?: AffiliatesPageResult | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const eyebrow = data?.wsaEyebrow ?? "// Who Should Apply";
  const heading1 = data?.wsaHeading1 ?? "Built for Anyone";
  const heading2 = data?.wsaHeading2 ?? "a Relevant Audience.";
  const description =
    data?.wsaDescription ??
    "If your audience has a genuine interest in sports betting, bankroll management, fantasy sports, or DFS — there's a real fit here. We review every application to confirm it.";
  const audiences =
    data?.wsaAudiences?.length && data.wsaAudiences.every((a) => a.num && a.title && a.body)
      ? (data.wsaAudiences as { num: string; title: string; body: string; span?: number }[])
      : DEFAULT_AUDIENCES;

  return (
    <section ref={sectionRef} className="wsa-section">
      {/* ── Section Header ── */}
      <div className="wsa-header">
        <div className="wsa-header-left">
          <motion.p
            className="wsa-eyebrow"
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headingVariants}
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            className="wsa-heading"
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headingVariants}
          >
            {heading1}
            <br />
            With{" "}
            <em className="wsa-heading-accent">
              {heading2}
            </em>
          </motion.h2>
        </div>
        <motion.p
          className="wsa-header-desc"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          {description}
        </motion.p>
      </div>

      {/* ── Cards Grid ── */}
      <motion.div
        className="wsa-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {audiences.map((item) => (
          <motion.div
            key={item.num}
            className="wsa-card"
            style={{ "--wsa-span": item.span } as React.CSSProperties}
            variants={cardVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            {/* Watermark number */}
            <span className="wsa-card-watermark" aria-hidden="true">
              {item.num}
            </span>

            {/* Content */}
            <div className="wsa-card-content">
              <h3 className="wsa-card-title">{item.title}</h3>
              <p className="wsa-card-body">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

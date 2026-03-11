"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

const DEFAULT_REASONS = [
  { num: "01", body: "Most programs make you earn your rate. WagerBird pays 30% from your first referral. The same rate whether you send 1 or 100. No quarterly quotas, no loyalty ladders.", tag: "From Day One" },
  { num: "02", body: "WagerBird is pay-per-pick. Your referrals buy what they need — a Hotsheet release, a Points Pack — and leave. No recurring commitment required. That's a far easier conversion than a monthly SaaS plan.", tag: "Lower Barrier to Buy" },
  { num: "03", body: "Your dashboard shows every click, every purchase, every commission in real time. Nothing is batched, delayed, or ambiguous. You know exactly where you stand at all times.", tag: "Real-Time Dashboard" },
  { num: "04", body: "WagerBird isn't a generic picks service. It's confidence-scored, process-driven, and built for bettors who take their bankroll seriously. That story resonates. It converts because it's true.", tag: "Story Sells Itself" },
  { num: "05", body: "Once approved, you receive your tracking link and a full creative kit — banners, copy blocks, angle suggestions. You can go from approval to your first post within the hour.", tag: "Ship Same Day" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function WhyProgramSection({ data }: { data?: AffiliatesPageResult | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const eyebrow = data?.whyEyebrow ?? "// Why This Program";
  const heading = data?.whyHeading ?? "Platform.";
  const description =
    data?.whyDescription ??
    "WagerBird runs on process. Clean structure, no noise, everything visible. The affiliate program works exactly the same way.";
  const ctaLabel = data?.whyCtaLabel ?? "Apply Now";
  const reasons = (data?.whyReasons?.length ? data.whyReasons : DEFAULT_REASONS) as {
    num: string;
    body: string;
    tag: string;
  }[];

  return (
    <section ref={sectionRef} className="why-section">
      {/* ── LEFT PANEL ── */}
      <motion.div
        className="why-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={leftVariants}
      >
        <p className="why-eyebrow">{eyebrow}</p>

        <h2 className="why-heading">
          <em className="why-heading-accent">{heading}</em>
        </h2>

        <p className="why-description">{description}</p>

        <Link href="/register" className="why-apply-btn">
          {ctaLabel}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9.33333 3.33325L14 7.99992M14 7.99992L9.33333 12.6666M14 7.99992H2"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </motion.div>

      {/* ── RIGHT PANEL ── */}
      <motion.div
        className="why-right"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {reasons.map(({ num, body, tag }, i) => (
          <motion.div key={num} className="why-item" variants={itemVariants}>
            <div className="why-item-inner">
              <span className="why-item-num">{num}</span>
              <div className="why-item-content">
                <p className="why-item-body">{body}</p>
                <span className="why-item-tag">{tag}</span>
              </div>
            </div>
            {i < reasons.length - 1 && (
              <div className="why-item-divider" aria-hidden="true" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

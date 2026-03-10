"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const RESOURCES = [
  {
    id: "materials",
    title: "Marketing Materials",
    body: "Banners, copy blocks, and creative assets aligned with the WagerBird brand — ready to drop into any format.",
    href: "/register",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="12" width="4" height="9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="10" y="7" width="4" height="14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="17" y="3" width="4" height="18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "link",
    title: "Unique Tracking Link",
    body: "Your personal link tracks every click and purchase tied to your audience. Attribution is clear. No gaps.",
    href: "/register",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "commission",
    title: "30% Flat Commission",
    body: "No tiers. No climbing. 30% on every first-time purchase from day one — Hotsheet or PointsPacks.",
    href: "/affiliates#calculator",
    highlighted: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "dashboard",
    title: "Partner Dashboard",
    body: "Real-time view of all clicks, conversions, and commissions. Full visibility — no delays, no batching.",
    href: "/register",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="12" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="16" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "platform",
    title: "Platform Access",
    body: "Approved affiliates get direct access to WagerBird. Speak from experience, not theory. Your audience will feel the difference.",
    href: "/register",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "support",
    title: "Dedicated Support",
    body: "Our team helps with creative strategy, campaign angles, and questions. You won't be figuring things out alone.",
    href: "/register",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PartnerResources() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section ref={sectionRef} className="pr-section">
      {/* ── Header ── */}
      <motion.div
        className="pr-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <p className="pr-eyebrow">
          <span className="pr-eyebrow-dot" aria-hidden="true" />
          // Partner Resources
        </p>
        <h2 className="pr-heading">
          <span className="pr-heading-white">Partner Resources.</span>
          <br />
          <span className="pr-heading-yellow">Start Promoting.</span>
        </h2>
        <p className="pr-description">
          You handle the audience. We handle the assets. Approved affiliates can
          ship on day one.
        </p>
      </motion.div>

      {/* ── Cards grid ── */}
      <motion.div
        className="pr-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {RESOURCES.map((resource) => (
          <motion.div
            key={resource.id}
            className={`pr-card-wrap ${resource.highlighted ? "pr-card-wrap--highlighted" : ""}`}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
          >
            <Link href={resource.href} className="pr-card">
              {/* Icon box */}
              <div className="pr-icon-box">
                {resource.icon}
              </div>

              {/* Text */}
              <h3 className={`pr-card-title ${resource.highlighted ? "pr-card-title--highlighted" : ""}`}>
                {resource.title}
              </h3>
              <p className="pr-card-body">{resource.body}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

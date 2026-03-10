"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AffiliateCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="acta-section">
      {/* Grid pattern overlay */}
      <div className="acta-grid-pattern" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="acta-glow" aria-hidden="true" />

      <div className="acta-inner">
        {/* Eyebrow */}
        <motion.p
          className="acta-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          // Get Started — Affiliate Program
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="acta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <span className="acta-heading-white">Build Your Edge.</span>
          <br />
          <span className="acta-heading-yellow">And Your Income.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="acta-description"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
        >
          Apply now. Start earning 30% on every first-time purchase your
          audience makes on WagerBird.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.34 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <Link href="/register" className="acta-btn">
              Apply to the Affiliate Program
              <span className="acta-btn-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer link */}
        <motion.p
          className="acta-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          Questions?{" "}
          <a href="mailto:partners@wagerbird.com" className="acta-footer-link">
            partners@wagerbird.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}

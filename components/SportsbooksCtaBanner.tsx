"use client";

import { motion } from "framer-motion";

export default function SportsbooksCtaBanner() {
  return (
    <section className="sb-cta-section">
      <motion.span
        className="sb-cta-watermark"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        FREE
      </motion.span>

      <motion.div
        className="sb-cta-content"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="sb-cta-heading">
          <span className="sb-cta-heading-line">Open 3 Books.</span>
          <em className="sb-cta-heading-line sb-cta-heading-italic">Get $117 Free.</em>
        </h2>

        <p className="sb-cta-subtext">
          Takes 30 minutes. Points never expire. Start winning with credits on us.
        </p>

        <a href="#partner-sportsbooks" className="sb-cta-btn">
          Find My Sportsbooks →
        </a>
      </motion.div>
    </section>
  );
}

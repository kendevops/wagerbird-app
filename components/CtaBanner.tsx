"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.07, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="cta-watermark"
        aria-hidden="true"
      >
        WagerBird
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cta-content"
      >
        <h2 className="cta-heading">
          Stop Guessing.
          <br />
          Start Winning.
        </h2>
        <p className="cta-subtext">
          Join 12,000+ bettors who trade with confidence-scored signals.
        </p>
        <a href="/packs" className="cta-btn">
          Buy a Pack Now &rarr;
        </a>
      </motion.div>
    </section>
  );
}

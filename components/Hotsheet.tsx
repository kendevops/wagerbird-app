"use client";

import { motion } from "framer-motion";

interface HotsheetProps {
  label?: string;
  title?: React.ReactNode;
  description?: string;
  perks?: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
}

export default function Hotsheet({
  label = "// Hotsheet",
  title = (
    <>
      The Cheat<br />
      Code. <em className="hotsheet-heading-accent">Built</em><br />
      To Hit.
    </>
  ),
  description = "Top daily picks sent directly to your phone before game time. Every play is scored by confidence — always know what to bet and how hard to bet it.",
  perks = "$2/day  ·  Cancel anytime  ·  No commitment",
  ctaLabel = "Get Hotsheet →",
  ctaHref = "/hotsheet",
  videoSrc = undefined
}: HotsheetProps) {
  return (
    <section className="hotsheet-section">
      {/* Left — copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hotsheet-content"
      >
        <span className="hotsheet-label">{label}</span>

        <h2 className="hotsheet-heading">
          {title}
        </h2>

        <p className="hotsheet-description">
          {description}
        </p>

        <p className="hotsheet-perks">
          {perks}
        </p>

        <a href={ctaHref} className="hotsheet-cta">
          {ctaLabel}
        </a>
      </motion.div>

      {/* Right — video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hotsheet-video-panel"
      >
        {/* Replace `src` with your actual video URL */}
        <video
          className="hotsheet-video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hotsheet preview"
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface HotsheetPromoProps {
  ctaLabel?: string;
  ctaHref?: string;
}

const VIDEO_URL =
  "https://cdn.builder.io/o/assets%2F0d74d6500f4d4101a69c1e5625bc65eb%2F691c4d6e898a44b0910ee280b41889fc?alt=media&token=b46e7fbb-e8c7-4839-9d62-4b9f0667a724&apiKey=0d74d6500f4d4101a69c1e5625bc65eb";

export default function HotsheetPromo({
  ctaLabel = "Get Hotsheet →",
  ctaHref = "/hotsheet",
}: HotsheetPromoProps) {
  return (
    <section className="hs-promo">
      {/* Yellow radial glow — top-right of left panel */}
      <div className="hs-promo__glow" aria-hidden="true" />

      {/* Left — copy */}
      <motion.div
        className="hs-promo__content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="hs-promo__kicker">// Hotsheet</p>

        <h2 className="hs-promo__heading">
          The cheat<br />
          code. <em className="hs-promo__heading-accent">Built</em><br />
          to hit.
        </h2>

        <p className="hs-promo__description">
          Top daily picks sent directly to your phone before game time. Every
          play is scored by confidence — always know what to bet and how hard to
          bet it.
        </p>

        <p className="hs-promo__price">
          $2/day · Cancel anytime · No commitment
        </p>

        <a href={ctaHref} data-cursor-label="BUY" className="hs-promo__cta">
          {ctaLabel}
        </a>
      </motion.div>

      {/* Right — video */}
      <motion.div
        className="hs-promo__media"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <video
          className="hs-promo__video"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
    </section>
  );
}

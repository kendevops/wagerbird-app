"use client";

import { motion } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";
import { APP_URL } from "@/lib/constants";

interface CtaBannerProps {
  watermark?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CtaBanner({
  watermark = "WIN",
  title = (
    <>
      Stop Guessing.
      <br />
      Start Winning.
    </>
  ),
  subtitle = "Join 12,000+ bettors who trade with confidence-scored signals.",
  ctaLabel = "Buy a Pack Now →",
  ctaHref = `${APP_URL}/register`,
}: CtaBannerProps) {
  return (
    <section className="cta-section">
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="cta-watermark"
        aria-hidden="true"
      >
        {watermark}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cta-content"
      >
        <h2 className="cta-heading">{title}</h2>
        <p className="cta-subtext">{subtitle}</p>
        <a
          href={ctaHref}
          {...(ctaHref?.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          data-cursor-label="GO"
          onClick={() =>
            ctaHref?.startsWith("http") && trackInitiateCheckout("cta_banner")
          }
          className="cta-btn clip-btn"
        >
          {ctaLabel}
        </a>
      </motion.div>
    </section>
  );
}

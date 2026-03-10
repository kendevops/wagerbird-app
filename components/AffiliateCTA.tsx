"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { AffiliatesPageResult } from "@/sanity/lib/queries";

export default function AffiliateCTA({ data }: { data?: AffiliatesPageResult | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const eyebrow = data?.ctaEyebrow ?? "// Get Started — Affiliate Program";
  const heading1 = data?.ctaHeading1 ?? "Build Your Edge.";
  const heading2 = data?.ctaHeading2 ?? "And Your Income.";
  const description =
    data?.ctaDescription ??
    "Apply now. Start earning 30% on every first-time purchase your audience makes on WagerBird.";
  const buttonLabel = data?.ctaButtonLabel ?? "Apply to the Affiliate Program";
  const buttonHref = data?.ctaButtonHref ?? "/register";
  const footerText = data?.ctaFooterText ?? "Questions?";
  const footerEmail = data?.ctaFooterEmail ?? "partners@wagerbird.com";

  return (
    <section ref={sectionRef} className="acta-section">
      <div className="acta-grid-pattern" aria-hidden="true" />
      <div className="acta-glow" aria-hidden="true" />

      <div className="acta-inner">
        <motion.p
          className="acta-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          className="acta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <span className="acta-heading-white">{heading1}</span>
          <br />
          <span className="acta-heading-yellow">{heading2}</span>
        </motion.h2>

        <motion.p
          className="acta-description"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
        >
          {description}
        </motion.p>

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
            <Link href={buttonHref} className="acta-btn">
              {buttonLabel}
              <span className="acta-btn-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          className="acta-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          {footerText}{" "}
          <a href={`mailto:${footerEmail}`} className="acta-footer-link">
            {footerEmail}
          </a>
        </motion.p>
      </div>
    </section>
  );
}

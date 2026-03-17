"use client";

import { motion } from "framer-motion";

const SUBSTACK_PUBLICATION = (process.env.NEXT_PUBLIC_SUBSTACK_PUBLICATION ?? "").trim();
const SUBSTACK_EMBED_URL = SUBSTACK_PUBLICATION
  ? `https://${SUBSTACK_PUBLICATION}.substack.com/embed`
  : "";
const substackReady = Boolean(SUBSTACK_EMBED_URL);

interface EmailCaptureProps {
  sectionId?: string;
  label?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  cardTitle?: string;
  cardSubtitle?: string;
  buttonLabel?: string;
  disclaimer?: string;
}

export default function EmailCapture({
  sectionId,
  label = "// Free Daily Picks",
  title = (
    <>
      Today&rsquo;s Top Signals.
      <br />
      <em className="email-capture-heading-accent">Free, In Your Inbox.</em>
    </>
  ),
  subtitle = (
    <>
      No credit card. No fluff. Just the model&rsquo;s top 3 picks,
      <br className="email-capture-br" />
      every morning before game time.
    </>
  ),
  cardTitle = "Join 12,000+ Sharp Bettors",
  cardSubtitle = "Get the model\u2019s top picks before game time \u2014 free, every day.",
  disclaimer = "No spam. Unsubscribe anytime. Your data stays private.",
}: EmailCaptureProps) {
  return (
    <section id={sectionId} className="email-capture-section">
      <div className="email-capture-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="email-capture-label"
        >
          {label}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="email-capture-heading"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="email-capture-subtext"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="email-capture-card-wrap"
        >
          <div className="email-capture-card">
            <h3 className="email-capture-card-heading">{cardTitle}</h3>
            <p className="email-capture-card-sub">{cardSubtitle}</p>
            {substackReady ? (
              <div className="email-capture-embed-wrap">
                <iframe
                  src={SUBSTACK_EMBED_URL}
                  className="email-capture-embed"
                  title="Subscribe to newsletter"
                  tabIndex={-1}
                />
              </div>
            ) : (
              <p className="email-capture-error">
                Set NEXT_PUBLIC_SUBSTACK_PUBLICATION to enable signup.
              </p>
            )}
            <p className="email-capture-disclaimer">{disclaimer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

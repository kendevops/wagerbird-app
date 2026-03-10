"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    body: "Submit your application. Our team reviews it quickly — no lengthy vetting, just a check that your audience is a real fit.",
  },
  {
    num: "02",
    body: "Approved affiliates receive their unique tracking link plus a full creative kit — ready to use across any channel or format.",
  },
  {
    num: "03",
    body: "Promote however you work — content, video, social, email. If your audience clicks your link and buys, you earn. Simple.",
  },
  {
    num: "04",
    body: "Your dashboard shows every click, conversion, and commission in real time. No black boxes. No delays.",
  },
];

export default function TheProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section ref={sectionRef} className="proc-section" id="how-it-works">
      {/* ── Top row: eyebrow + subtitle ── */}
      <div className="proc-top">
        <motion.p
          className="proc-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // The Process
        </motion.p>
        <motion.p
          className="proc-subtitle"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Four steps. Clean process. You&rsquo;ll hear back quickly&nbsp;&mdash; no
          lengthy vetting, just a real audience check.
        </motion.p>
      </div>

      {/* ── Hero heading ── */}
      <motion.h2
        className="proc-heading"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Get Paid.
      </motion.h2>

      {/* ── Timeline grid ── */}
      <div className="proc-timeline">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className={`proc-col ${hovered === step.num ? "proc-col--hovered" : ""}`}
            onMouseEnter={() => setHovered(step.num)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Box + line */}
            <div className="proc-track">
              <motion.div
                className="proc-box"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.12 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <span className="proc-num">{step.num}</span>
              </motion.div>

              {/* Connecting line (all cols except last) */}
              {i < STEPS.length - 1 && (
                <div className="proc-line-wrap">
                  {/* Background rail */}
                  <div className="proc-line-rail" />
                  {/* Animated fill */}
                  <motion.div
                    className="proc-line-fill"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.9,
                      ease: "easeInOut",
                      delay: 0.7 + i * 0.35,
                    }}
                    style={{ originX: 0 }}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <motion.p
              className="proc-desc"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
            >
              {step.body}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}

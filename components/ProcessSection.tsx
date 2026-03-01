"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  label?: string;
  heading?: string;
  description?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#E05252" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="6" stroke="#E05252" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="2.5" fill="#E05252"/>
      </svg>
    ),
    title: "Get Credits",
    description:
      "Select a pack that fits your budget. No monthly fees, no expiration dates, no lock-in of any kind.",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="#D4C97A" strokeWidth="1.8"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#D4C97A" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="#D4C97A"/>
      </svg>
    ),
    title: "Unlock Insights",
    description:
      "Use points to uncover specific high-value plays. You only pay for the signals you actually want to see.",
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#E05252" strokeWidth="1.8"/>
        <path d="M7 14l3-3 3 3 4-5" stroke="#E05252" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Bet With Confidence",
    description:
      "Place your wagers backed by the model, not gut feeling. Execute your strategy with a documented edge.",
  },
];

export default function ProcessSection({
  label = "// Simple Process",
  heading = "Simple Process.\nProfessional Edge.",
  description = "Traditional services sell picks. WAGERBIRD delivers structured signals — scored, confidence-weighted, and professionally reviewed. You only pay for the ones you want.",
  steps = defaultSteps,
}: ProcessSectionProps) {
  return (
    <section className="process-section">
      <div className="process-inner">
        {/* Header */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="process-label">{label}</span>
          <h2 className="process-heading">
            {heading.split("\n").map((line, i) => (
              <span key={i} className="process-heading-line">{line}</span>
            ))}
          </h2>
          <p className="process-description">{description}</p>
        </motion.div>

        {/* Steps grid */}
        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -8,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }
              }}
            >
              {/* Step number watermark */}
              <motion.span
                className="process-step-number"
                aria-hidden="true"
                variants={{
                  hover: {
                    scale: 1.1,
                    opacity: 0.08,
                    x: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }
                }}
              >
                {step.number}
              </motion.span>

              {/* Icon */}
              <motion.div
                className="process-step-icon-wrap"
                variants={{
                  hover: {
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }
                }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <motion.h3
                className="process-step-title"
                variants={{
                  hover: {
                    color: "#FFFFFF",
                    transition: { duration: 0.2 }
                  }
                }}
              >
                {step.title}
              </motion.h3>
              <p className="process-step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

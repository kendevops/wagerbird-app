"use client";

import { motion } from "framer-motion";
import HowItWorksStep from "./HowItWorksStep";

interface Step {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HowItWorksProps {
  label?: string;
  title?: React.ReactNode;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Buy Points",
    description:
      "Choose a pack — Starter, Core, or Advanced. Points never expire. Use them on any sport, any pick type, whenever you're ready.",
  },
  {
    number: "02",
    title: "Browse Signals",
    description:
      "Enter the Terminal and browse confidence-rated signals across every game. Filter by sport, confidence level, or game time.",
  },
  {
    number: "03",
    title: "Trade With Edge",
    description:
      "Each signal costs points equal to its confidence score. Bet knowing exactly how strong the model's conviction is. No guessing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HowItWorks({
  label = "// How It Works",
  title = (
    <>
      Simple.
      <br />
      Transparent.
      <br />
      <em className="hiw-heading-accent">Profitable.</em>
    </>
  ),
  steps = defaultSteps
}: HowItWorksProps) {
  return (
    <section className="hiw-section">
      <div className="hiw-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hiw-header"
        >
          <span className="hiw-label">{label}</span>
          <h2 className="hiw-heading">
            {title}
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hiw-steps"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={itemVariants}>
              <HowItWorksStep {...step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

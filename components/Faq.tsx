"use client";

import { motion, Variants } from "framer-motion";
import FaqItem from "./FaqItem";

interface FaqProps {
  sectionId?: string;
  label?: string;
  title?: React.ReactNode;
  items?: { question: string; answer: string }[];
}

const defaultFaqs = [
  {
    question: "Do my points expire?",
    answer:
      "No — your WAGERBIRD points never expire. Once you earn or purchase points, they stay in your account until you use them. You can hold onto them for any upcoming game or season without worry.",
  },
  {
    question: "How does confidence scoring work?",
    answer:
      "Each signal is scored from 1–100 based on our model's certainty. A score above 85 means the model has very strong conviction in that pick — it accounts for line movement, historical matchup data, and current form. Lower scores don't mean skip, they just mean bet smaller.",
  },
  {
    question: "Can I use points on any sport?",
    answer:
      "Yes. Points work across all sports we cover — NFL, NBA, MLB, NHL, and more. There's no sport-specific point pool. Whatever's in your account is available for any signal you unlock.",
  },
  {
    question: "What happens when I run out of points?",
    answer:
      "You can top up anytime by purchasing a new pack. If you run out mid-day, free daily signals are always available at no cost. You'll never be completely locked out — we always surface a few high-confidence picks for free members.",
  },
  {
    question: "What's the difference between packs?",
    answer:
      "Packs vary by point volume and unlock level. Starter packs give you enough to try a handful of premium picks. Pro packs unlock the full signal feed with priority access to high-confidence plays. The Hotsheet subscription is separate — it delivers picks directly to your phone every morning before game time.",
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Faq({
  sectionId,
  label = "// FAQ",
  title = (
    <>
      Common<br />
      <em className="faq-heading-accent">Questions.</em>
    </>
  ),
  items = defaultFaqs
}: FaqProps) {
  return (
    <section id={sectionId} className="faq-section faq-section--cinder">
      <div className="faq-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="faq-header"
        >
          <span className="faq-label">{label}</span>
          <h2 className="faq-heading">
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="faq-list"
        >
          {items.map((item) => (
            <motion.div key={item.question} variants={itemVariants}>
              <FaqItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

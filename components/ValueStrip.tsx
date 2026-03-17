"use client";

import { motion } from "framer-motion";

interface ValueStripItem {
  value: string;
  label: string;
  description: string;
}

interface ValueStripProps {
  sectionId?: string;
  items?: ValueStripItem[];
}

const defaultItems: ValueStripItem[] = [
  {
    value: "$0.06",
    label: "Per Point (Core)",
    description: "Best value per pick of any access tier",
  },
  {
    value: "3,600",
    label: "Points Max Pack",
    description: "Up to 55 premium picks in one purchase",
  },
  {
    value: "∞",
    label: "Expiry — Never",
    description: "Points stay until you use them",
  },
  {
    value: "5+",
    label: "Sports Covered",
    description: "NFL · NBA · MLB · NHL · Soccer",
  },
];

export default function ValueStrip({ sectionId, items = defaultItems }: ValueStripProps) {
  return (
    <section id={sectionId} className="value-strip">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="value-strip-item"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <span className="value-strip-value">{item.value}</span>
          <span className="value-strip-label">{item.label}</span>
          <span className="value-strip-desc">{item.description}</span>
        </motion.div>
      ))}
    </section>
  );
}

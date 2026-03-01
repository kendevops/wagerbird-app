"use client";

import { motion } from "framer-motion";
import PriceCard, { PriceCardProps } from "./PriceCard";

interface PacksProps {
  label?: string;
  title?: React.ReactNode;
  description?: string;
  packs?: PriceCardProps[];
  footnote?: React.ReactNode;
}

const defaultPacks: PriceCardProps[] = [
  {
    name: "Starter Pack",
    points: "600 Points",
    goodFor: "~7–9 Premium Picks",
    price: 39,
    ctaLabel: "Get Instant Access",
  },
  {
    name: "Core Pack",
    points: "1,700 Points",
    goodFor: "~20–26 Premium Picks",
    price: 99,
    ctaLabel: "Get Core Pack",
    popular: true,
  },
  {
    name: "Advanced Pack",
    points: "3,600 Points",
    goodFor: "~42–55 Premium Picks",
    price: 199,
    ctaLabel: "Get Advanced Pack",
  },
];

export default function Packs({
  label = "// Choose Your Pack",
  title = (
    <>
      Points Never Expire.
      <br />
      <em className="packs-heading-accent">Buy Once. Win Forever.</em>
    </>
  ),
  description = "All customers see the same transparent pricing. The more you buy upfront, the lower your per-point cost.",
  packs = defaultPacks,
  footnote = (
    <>
      Points act as credits to unlock signals (<strong>Picks</strong>). Each signal's cost is based on its confidence rating. You can also use points to access{" "}
      <strong className="packs-footnote-brand">WAGERVISION</strong> (live in-game signals).
    </>
  )
}: PacksProps) {
  return (
    <section className="packs-section">
      {/* Header */}
      <PacksHeader label={label} title={title} description={description} />

      {/* Cards grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="packs-grid"
      >
        {packs.map((pack, i) => (
          <PriceCard key={i} {...pack} />
        ))}
      </motion.div>

      {/* Footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="packs-footnote"
      >
        {footnote}
      </motion.p>
    </section>
  );
}

interface PacksHeaderProps {
  label: string;
  title: React.ReactNode;
  description: string;
}

function PacksHeader({ label, title, description }: PacksHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="packs-header"
    >
      <span className="packs-label">{label}</span>
      <h2 className="packs-heading">
        {title}
      </h2>
      <p className="packs-subtext">
        {description}
      </p>
    </motion.div>
  );
}

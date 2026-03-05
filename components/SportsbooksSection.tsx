"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SportsbookCard, { SportsbookCardProps } from "./SportsbookCard";
import WobbleCard from "./animations/WobbleCard";

const US_STATES = [
  "All states (default)",
  "Arizona",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New York",
  "North Carolina",
  "Ohio",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "Tennessee",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wyoming",
];

interface SportsbooksSectionProps {
  label?: string;
  title?: React.ReactNode;
  description?: string;
  sportsbooks: SportsbookCardProps[];
  disclaimer?: string;
}

export default function SportsbooksSection({
  label = "// Partner Sportsbooks",
  title = (
    <>
      Find Your State.
      <br />
      <em className="sb-section-title-accent">Find Your Books.</em>
    </>
  ),
  description = "All partners are licensed, regulated U.S. sportsbooks. Select your state to see which books are available where you are.",
  sportsbooks,
  disclaimer = "More partner sportsbooks being added regularly.\nNew accounts only · Availability varies by state · WagerBird partners with licensed, regulated U.S. operators only.",
}: SportsbooksSectionProps) {
  const [selectedState, setSelectedState] = useState("All states (default)");
  const [activeState, setActiveState] = useState("All states (default)");

  const filteredBooks =
    activeState === "All states (default)"
      ? sportsbooks
      : sportsbooks.filter((sb) => sb.states.includes(activeState));

  const handleShowBooks = () => {
    setActiveState(selectedState);
  };

  return (
    <section className="sb-section">
      <div className="sb-section-inner">
        {/* Header row */}
        <div className="sb-section-header">
          <div className="sb-section-header-left">
            <motion.span
              className="sb-section-label"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {label}
            </motion.span>
            <motion.h2
              className="sb-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="sb-section-description"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            className="sb-section-filter"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="sb-filter-select-wrap">
              <select
                className="sb-filter-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                aria-label="Select your state"
              >
                {US_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <span className="sb-filter-select-arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <button className="sb-filter-btn" onClick={handleShowBooks}>
              Show Books
            </button>
          </motion.div>
        </div>

        {/* Cards grid */}
        {filteredBooks.length > 0 ? (
          <div className="sb-cards-grid">
            {filteredBooks.map((sb, i) => (
              <motion.div
                key={sb.name}
                className="sb-card-wrapper h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <WobbleCard className="h-full">
                  <SportsbookCard {...sb} />
                </WobbleCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="sb-no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No partner sportsbooks are currently available in <strong>{activeState}</strong>. Check back soon &mdash; we&rsquo;re adding books regularly.</p>
          </motion.div>
        )}

        {/* Disclaimer */}
        {disclaimer && (
          <p className="sb-section-disclaimer">
            {disclaimer.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < disclaimer.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

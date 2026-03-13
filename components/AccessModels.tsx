"use client";

import { motion } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";


interface ComparisonRow {
  label: string;
  packs: React.ReactNode;
  terminal: string;
}

const defaultRows: ComparisonRow[] = [
  {
    label: "Best For",
    packs: "Snipers & Weekend Bettors",
    terminal: "Daily Grinders",
  },
  {
    label: "Commitment",
    packs: (
      <span className="access-packs-commitment">
        <span className="access-zero-badge">ZERO</span>
        Points never expire
      </span>
    ),
    terminal: "Monthly. Recurring billing.",
  },
  {
    label: "Access",
    packs: "Unlock only specific games",
    terminal: "Unlimited access to everything",
  },
  {
    label: "Cost Control",
    packs: "Pay exactly for what you use",
    terminal: "Flat fee, regardless of volume",
  },
  {
    label: "Ideal Volume",
    packs: "1–5 Bets per week",
    terminal: "10+ Bets per week",
  },
];

interface AccessModelsProps {
  label?: string;
  heading?: React.ReactNode;
  subtitle?: string;
  rows?: ComparisonRow[];
  packsCtaLabel?: string;
  packsCtaHref?: string;
  terminalCtaLabel?: string;
  terminalCtaHref?: string;
}

export default function AccessModels({
  label = "// Access Models",
  heading,
  subtitle = "Packs are for bettors who want flexibility. Terminal Plans are for daily grinders.",
  rows = defaultRows,
  packsCtaLabel = "Get Core Pack →",
  packsCtaHref = "/pricing#packs",
  terminalCtaLabel = "Check Monthly Plans",
  terminalCtaHref = "/pricing#packs",
}: AccessModelsProps) {
  const defaultHeading = (
    <>
      Define Your<br />
      <em className="access-heading-accent">Betting Approach</em>
    </>
  );

  return (
    <section className="access-models-section">
      <div className="access-models-inner">
        {/* Header */}
        <motion.div
          className="access-models-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="access-models-label">{label}</span>
          <h2 className="access-models-heading">
            {heading ?? defaultHeading}
          </h2>
          <p className="access-models-subtitle">{subtitle}</p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="access-table-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Column headers */}
          <div className="access-table-head">
            <div className="access-table-label-col" />
            <div className="access-table-packs-col">
              <span className="access-col-tag access-col-tag--packs">{"// Recommended"}</span>
              <span className="access-col-title access-col-title--packs">Points Packs</span>
            </div>
            <div className="access-table-terminal-col">
              <span className="access-col-tag access-col-tag--terminal">{"// Alternative"}</span>
              <span className="access-col-title">Terminal Plans</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="access-table-row">
              <div className="access-table-label-col">
                <span className="access-row-label">{row.label}</span>
              </div>
              <div className="access-table-packs-col">
                <span className="access-packs-value">{row.packs}</span>
              </div>
              <div className="access-table-terminal-col">
                <span className="access-terminal-value">{row.terminal}</span>
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="access-table-cta-row">
            <div className="access-table-label-col" />
            <div className="access-table-packs-col">
              <a
                href={packsCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout("access_models_packs")}
                className="access-cta access-cta--packs"
              >
                {packsCtaLabel}
              </a>
            </div>
            <div className="access-table-terminal-col">
              <a
                href={terminalCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout("access_models_terminal")}
                className="access-cta access-cta--terminal"
              >
                {terminalCtaLabel}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

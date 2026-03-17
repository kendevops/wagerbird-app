"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./animations/SpotlightCard";
import SplitText from "./animations/SplitText";

interface RewardRow {
  accountCount: string;
  accountLabel: string;
  packs: string;
  points: string;
  value: string;
  highlighted?: boolean;
}

const rewardRows: RewardRow[] = [
  {
    accountCount: "1",
    accountLabel: "Account",
    packs: "1",
    points: "600",
    value: "$39",
  },
  {
    accountCount: "2",
    accountLabel: "Accounts",
    packs: "2",
    points: "1,200",
    value: "$78",
  },
  {
    accountCount: "3+",
    accountLabel: "Accounts",
    packs: "3",
    points: "1,800",
    value: "$117",
    highlighted: true,
  },
];

const heroStats = [
  { value: "3+",    label: "Recommended\nAccounts" },
  { value: "$117",  label: "Max Free\nValue" },
  { value: "1,800", label: "Free Points\nEarned" },
];

interface SportsbooksHeroProps {
  sectionId?: string;
}

export default function SportsbooksHero({ sectionId }: SportsbooksHeroProps) {
  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id={sectionId} className="sportsbooks-hero-section">

      {/* ── Ticker bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="sportsbooks-ticker-bar"
      >
        <span className="sportsbooks-ticker-left">WAGERBIRD Sportsbooks — Open Accounts. Earn Free Picks.</span>
        <div className="sportsbooks-ticker-center">
          <span className="sportsbooks-ticker-dot" aria-hidden="true" />
          New Accounts Eligible
        </div>
        <span className="sportsbooks-ticker-right">{dateStr}</span>
      </motion.div>

      {/* ── Two-column main ── */}
      <div className="sportsbooks-hero-container">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sportsbooks-hero-left"
        >
          {/* Badge */}
          <div className="sportsbooks-hero-badge">
            <span className="sportsbooks-hero-badge-dot">●</span>
            <span className="sportsbooks-hero-badge-text">
              <SplitText text="Open 3 Books · Earn $117 Free" />
            </span>
          </div>

          {/* Heading */}
          <h1 className="sportsbooks-hero-heading">
            <SplitText text="Open Books." />
            <br />
            <SplitText text="Get " />
            <span className="sportsbooks-hero-heading-accent">
              <SplitText text="Free" delay={0.5} />
            </span>
            <br />
            <SplitText text="Picks." delay={0.8} />
          </h1>

          {/* Bordered description */}
          <div className="sportsbooks-hero-description-wrap">
            <p className="sportsbooks-hero-description">
              Open new sportsbook accounts through WAGERBIRD and earn a{" "}
              <span className="sportsbooks-hero-description-highlight">free $39 Points Pack</span>{" "}
              for each one. Three accounts = 1,800 points = $117 in free picks. New accounts only.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="sportsbooks-hero-ctas">
            <a href="#partner-sportsbooks" className="sportsbooks-hero-cta-primary" data-cursor-label="GO">
              FIND MY SPORTSBOOKS <span className="sportsbooks-hero-cta-arrow">→</span>
            </a>
            <a href="#how-it-works" className="sportsbooks-hero-cta-secondary" data-cursor-label="HOW">
              HOW IT WORKS
            </a>
          </div>
        </motion.div>

        {/* Right Column — Rewards Table */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="sportsbooks-hero-right"
        >
          {/* Glow shadow */}
          <div className="sportsbooks-hero-glow" aria-hidden="true" />

          {/* Table card */}
          <SpotlightCard className="rewards-card" spotlightColor="rgba(228, 242, 34, 0.2)">
            <div className="rewards-card-header">
              <span className="rewards-card-header-text">Your Reward Grows With Every Account You Open</span>
            </div>

            <div className="rewards-table-col-headers">
              <span className="rewards-col-label">Accounts</span>
              <span className="rewards-col-label">Free Packs</span>
              <span className="rewards-col-label">Points</span>
              <span className="rewards-col-label">Value</span>
            </div>

            {rewardRows.map((row, i) => (
              <div
                key={i}
                className={`rewards-row${row.highlighted ? " rewards-row--highlighted" : ""}`}
              >
                <div className="rewards-cell">
                  <span className={`rewards-cell-number${row.highlighted ? " rewards-cell-number--highlighted" : ""}`}>
                    {row.accountCount}
                  </span>
                  <span className={`rewards-cell-label${row.highlighted ? " rewards-cell-label--highlighted" : ""}`}>
                    {row.accountLabel}
                  </span>
                </div>
                <div className="rewards-cell">
                  <span className={`rewards-cell-value${row.highlighted ? " rewards-cell-value--highlighted" : ""}`}>{row.packs}</span>
                  <span className={`rewards-cell-label${row.highlighted ? " rewards-cell-label--highlighted" : ""}`}>Free Packs</span>
                </div>
                <div className="rewards-cell">
                  <span className={`rewards-cell-value${row.highlighted ? " rewards-cell-value--highlighted" : ""}`}>{row.points}</span>
                  <span className={`rewards-cell-label${row.highlighted ? " rewards-cell-label--highlighted" : ""}`}>Points</span>
                </div>
                <div className="rewards-cell">
                  <span className={`rewards-cell-value${row.highlighted ? " rewards-cell-value--highlighted" : ""}`}>{row.value}</span>
                  <span className={`rewards-cell-label${row.highlighted ? " rewards-cell-label--highlighted" : ""}`}>Value</span>
                </div>
              </div>
            ))}

            <div className="rewards-max-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5.42946 1.75625C5.60946 1.20365 6.39126 1.20365 6.57066 1.75625L7.21266 3.73145C7.25188 3.85174 7.32813 3.95655 7.4305 4.03091C7.53287 4.10526 7.65613 4.14535 7.78266 4.14545H9.85986C10.4413 4.14545 10.6825 4.88945 10.2127 5.23145L8.53266 6.45185C8.43008 6.52626 8.35369 6.63125 8.31446 6.75176C8.27522 6.87226 8.27515 7.0021 8.31426 7.12265L8.95626 9.09785C9.13626 9.65045 8.50326 10.1106 8.03226 9.76865L6.35226 8.54825C6.24978 8.47385 6.12639 8.43378 5.99976 8.43378C5.87312 8.43378 5.74973 8.47385 5.64726 8.54825L3.96726 9.76865C3.49686 10.1106 2.86446 9.65045 3.04386 9.09785L3.68586 7.12265C3.72496 7.0021 3.72489 6.87226 3.68566 6.75176C3.64642 6.63125 3.57004 6.52626 3.46746 6.45185L1.78806 5.23205C1.31826 4.89005 1.56006 4.14605 2.14086 4.14605H4.21746C4.34409 4.14608 4.46748 4.10605 4.56997 4.03169C4.67247 3.95732 4.7488 3.85244 4.78806 3.73205L5.43006 1.75685L5.42946 1.75625Z" fill="#E4F222"/>
              </svg>
              <span className="rewards-max-badge-text">Max Value — Recommended</span>
            </div>
          </SpotlightCard>

          <p className="rewards-footnote">
            New accounts only · Does not apply to existing sportsbook accounts.
            <br />
            The more books you open, the more you earn.
          </p>
        </motion.div>

      </div>

      {/* ── Bottom stats bar ── */}
      <div className="sportsbooks-stats-bar">
        {heroStats.map((stat, i) => (
          <div key={i} className="sportsbooks-stats-bar-group">
            {i > 0 && <div className="sportsbooks-stats-divider" aria-hidden="true" />}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="sportsbooks-stat-item"
            >
              <span className="sportsbooks-stat-value">{stat.value}</span>
              <span className="sportsbooks-stat-label">{stat.label}</span>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
}

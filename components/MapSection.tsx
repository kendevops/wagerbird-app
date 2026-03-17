"use client";

import { motion } from "framer-motion";
import LicenseBadge from "./LicenseBadge";

/* ── Icons for badges ── */
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <rect x="2" y="5.5" width="8" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const ArrowsIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8M7.5 3.5L10 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <circle cx="6" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M2 10.5c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const FreeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4.5 6h3M6 4.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const badges = [
  { icon: <CheckIcon />, text: "Licensed Partners Only" },
  { icon: <LockIcon />, text: "New Accounts Only" },
  { icon: <ArrowsIcon />, label: "Target", labelColor: "#C2400E", text: "Points Never Expire" },
  { icon: <PersonIcon />, text: "21+ Required" },
  { icon: <FreeIcon />, label: "Free", labelColor: "#166534", text: "No Hidden Fees" },
];

interface MapSectionProps {
  sectionId?: string;
  heading?: string;
  description?: string;
  disclaimer?: string;
}

export default function MapSection({
  sectionId,
  heading = "Licensed.\nRegulated.\nResponsible.",
  description = "WAGERBIRD partners exclusively with state-licensed, regulated U.S. sportsbooks. We never hold your funds, process wagers, or operate as a sportsbook. All rewards are issued by WAGERBIRD as Points Packs — not by the sportsbook operators.",
  disclaimer = "Free Points Pack applies to new sportsbook accounts opened through WAGERBIRD referral links only... Availability varies by state. Must be 21 or older. Gambling problem? Call 1-800-GAMBLER.",
}: MapSectionProps) {
  return (
    <section id={sectionId} className="map-section">
      <div className="map-section-inner">
        {/* Left column */}
        <div className="map-section-left">
          <motion.h2
            className="map-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < heading.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h2>

          <motion.p
            className="map-section-description"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="map-section-badges"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
          >
            {badges.map((badge, i) => (
              <LicenseBadge key={i} {...badge} />
            ))}
          </motion.div>
        </div>

        {/* Right column — dot map */}
        <motion.div
          className="map-section-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7fad18f5e95f14d992167878bfacc8b9e06346d6"
            alt="USA Map showing licensed sportsbooks"
            className="usa-map-image"
          />
        </motion.div>
      </div>

      {/* Bottom disclaimer */}
      <div className="map-section-disclaimer-wrap">
        <p className="map-section-disclaimer">
          {disclaimer}{" "}
          <a href="#" className="map-section-disclaimer-link">
            Responsible gambling resources →
          </a>
        </p>
      </div>
    </section>
  );
}

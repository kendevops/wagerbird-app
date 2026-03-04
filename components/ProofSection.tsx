"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./animations/SpotlightCard";

const testimonials = [
  {
    name: "MARCUS T.",
    location: "CHICAGO, IL · HOTSHEET SUBSCRIBER",
    badge: "4-1 FIRST WEEK",
    text: '"I was honestly skeptical — I\'ve tried other picks services and they were all garbage. First week on the Hotsheet I went 4-1. The confidence scores actually tell you something real. I\'ve never had that kind of clarity on what to bet and how hard to bet it."',
    stars: 5,
  },
  {
    name: "JAMES R.",
    location: "AUSTIN, TX · FULL-DAY PASS",
    badge: "2 MIN VS. 2 HRS",
    text: '"I used to spend two hours every morning reading injury reports, line movements, Twitter takes — the whole thing. Now I open one email, see three plays with scores attached, and I\'m done. The model does what I was spending my morning trying to do badly."',
    stars: 5,
  },
  {
    name: "RACHEL D.",
    location: "ARVADA, CO · ON-DEMAND PASS",
    badge: "NEW TO BETTING",
    text: '"I barely understood what a spread was when I started. The confidence score removed all the guessing — an 88 means bet more, a 76 means bet less. That\'s a framework I can actually use. I didn\'t need to know sports betting to start winning with it."',
    stars: 5,
  },
];

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
      fill="white"
    />
  </svg>
);

export default function ProofSection() {
  return (
    <section className="proof-section">
      <div className="proof-inner">
        <motion.div
          className="proof-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="proof-label">// REAL USERS</span>
          <h2 className="proof-heading">
            WHAT THEY&apos;RE<br />
            <em className="proof-heading-accent">SAYING.</em>
          </h2>
        </motion.div>

        <div className="proof-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SpotlightCard
                className="proof-card"
                spotlightColor="rgba(228, 242, 34, 0.08)"
              >
                <div className="proof-card-inner">
                  <div className="proof-card-stars">
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>
                  
                  <div className="proof-card-badge">{t.badge}</div>

                  <p className="proof-card-text">{t.text}</p>

                  <div className="proof-card-footer">
                    <span className="proof-card-name">{t.name}</span>
                    <span className="proof-card-location">{t.location}</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

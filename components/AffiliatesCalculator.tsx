"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, animate, type Variants } from "framer-motion";

const PRODUCTS = [
  { id: "hotsheet",    name: "Hotsheet",    price: 25,  label: "$25 per purchase" },
  { id: "pointspacks", name: "PointsPacks", price: 49,  label: "$49 per purchase" },
  { id: "terminal",   name: "Terminal",    price: 99,  label: "$99 per purchase" },
];

const COMMISSION = 0.3;
const SLIDER_MIN = 1;
const SLIDER_MAX = 100;
const SLIDER_MARKS = [1, 25, 50, 75, 100];

/** Animate a number from one value to another using framer-motion's animate() */
function useAnimatedNumber(target: number, decimals = 0) {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);

  useEffect(() => {
    const controls = animate(prevRef.current, target, {
      duration: 0.45,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(parseFloat(v.toFixed(decimals))),
    });
    prevRef.current = target;
    return controls.stop;
  }, [target, decimals]);

  return display;
}

function AnimatedDollar({ value, decimals = 2 }: { value: number; decimals?: number }) {
  const animated = useAnimatedNumber(value, decimals);
  return <>${decimals === 0 ? Math.round(animated).toLocaleString() : animated.toFixed(decimals)}</>;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut", delay: 0.15 } },
};

export default function AffiliatesCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [referrals, setReferrals] = useState(10);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const perReferral = selectedProduct.price * COMMISSION;
  const monthly = perReferral * referrals;
  const annual = monthly * 12;
  const sliderPct = ((referrals - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;

  return (
    <motion.section
      ref={sectionRef}
      className="calc-section"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Left: copy */}
      <motion.div className="calc-copy" variants={sectionVariants}>
        <p className="calc-eyebrow">// Your Potential Earnings</p>
        <h2 className="calc-heading">
          See What{" "}
          <em className="calc-heading-accent">Your<br />Cut Looks Like.</em>
        </h2>
        <p className="calc-description">
          Pick the product. Drag the slider. See exactly what 30% means for your
          audience&nbsp;— no ambiguity, no fine print.
        </p>

        {/* Quick stat pills */}
        <div className="calc-stat-pills">
          <div className="calc-stat-pill">
            <span className="calc-pill-value">{COMMISSION * 100}%</span>
            <span className="calc-pill-label">Flat Commission</span>
          </div>
          <div className="calc-stat-pill">
            <span className="calc-pill-value">$0</span>
            <span className="calc-pill-label">Minimum Payout</span>
          </div>
          <div className="calc-stat-pill">
            <span className="calc-pill-value">Day 1</span>
            <span className="calc-pill-label">Payout Starts</span>
          </div>
        </div>
      </motion.div>

      {/* Right: calculator panel */}
      <motion.div className="calc-panel" variants={panelVariants}>

        {/* Product tabs */}
        <div className="calc-tabs" role="tablist" aria-label="Select a product">
          {PRODUCTS.map((p) => {
            const active = p.id === selectedProduct.id;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedProduct(p)}
                className={`calc-tab ${active ? "calc-tab--active" : ""}`}
              >
                <span className="calc-tab-name">{p.name}</span>
                <span className="calc-tab-price">{p.label}</span>
                <span className="calc-tab-referral">
                  <AnimatedDollar value={p.price * COMMISSION} />&nbsp;
                  <span className="calc-tab-ref-label">per referral</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Slider */}
        <div className="calc-slider-section">
          <div className="calc-slider-header">
            <span className="calc-slider-label">Referrals per Month</span>
            <span className="calc-slider-value">
              <motion.span
                key={referrals}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="calc-slider-count"
              >
                {referrals}
              </motion.span>
              <span className="calc-slider-unit">&nbsp;/ Month</span>
            </span>
          </div>

          <div className="calc-slider-track-wrap">
            <div
              className="calc-slider-fill"
              style={{ width: `${sliderPct}%` }}
            />
            <input
              type="range"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              value={referrals}
              onChange={(e) => setReferrals(Number(e.target.value))}
              className="calc-slider-input"
              aria-label="Referrals per month"
            />
          </div>

          <div className="calc-slider-marks" aria-hidden="true">
            {SLIDER_MARKS.map((m) => (
              <span key={m} className="calc-slider-mark">{m}</span>
            ))}
          </div>
        </div>

        {/* Per referral + Monthly summary */}
        <div className="calc-summary-row">
          <div className="calc-summary-cell">
            <span className="calc-summary-meta">Per Referral</span>
            <span className="calc-summary-amount">
              <AnimatedDollar value={perReferral} />
            </span>
            <span className="calc-summary-sub">{COMMISSION * 100}% of sale</span>
          </div>
          <div className="calc-summary-divider" aria-hidden="true" />
          <div className="calc-summary-cell">
            <span className="calc-summary-meta">Monthly</span>
            <span className="calc-summary-amount">
              <AnimatedDollar value={monthly} decimals={0} />
            </span>
            <span className="calc-summary-sub">At this volume</span>
          </div>
        </div>

        {/* Annual projection */}
        <div className="calc-annual">
          <span className="calc-annual-label">Annual Projection</span>
          <span className="calc-annual-amount">
            <AnimatedDollar value={annual} decimals={0} />
          </span>
          <span className="calc-annual-sub">12-month run rate</span>
        </div>
      </motion.div>
    </motion.section>
  );
}

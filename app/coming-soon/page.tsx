"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Target date — swap for a real launch date
const TARGET_DATE = new Date("2028-01-01T00:00:00Z");

const TICKER_ITEMS = [
  "Coming Soon",
  "Wagerbird",
  "Stay Tuned",
  "New Feature",
  "Signal Stream",
  "The Model",
  "Coming Soon",
  "Wagerbird",
  "Stay Tuned",
  "New Feature",
  "Signal Stream",
  "The Model",
];

function useCountdown(target: Date) {
  // Start with a stable zero state so SSR and first client render match.
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const getTimeLeft = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      };
    };

    // Defer initial update to avoid synchronous setState in effect (cascading renders).
    const tick = () => setTimeLeft(getTimeLeft());
    const timeoutId = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(id);
    };
  }, [target]);

  return timeLeft;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function ComingSoonPage() {
  const { days, hours, mins, secs } = useCountdown(TARGET_DATE);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const countdownUnits = [
    { value: pad(days), label: "Days" },
    { value: pad(hours), label: "Hours" },
    { value: pad(mins), label: "Mins" },
    { value: pad(secs), label: "Secs" },
  ];

  return (
    <div className="cs-page">
      {/* Yellow ticker banner */}
      <div className="cs-ticker-wrapper" aria-hidden="true">
        <motion.div
          ref={trackRef}
          className="cs-ticker-track"
          animate={{ x: "-50%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="cs-ticker-item">
              {item}
              <span className="cs-ticker-sep">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main content */}
      <main className="cs-main">
        {/* Eyebrow */}
        <p className="cs-eyebrow">{"// Something Big Is Coming"}</p>

        {/* Hero heading */}
        <h1 className="cs-hero">
          <span className="cs-hero-white">Coming</span>
          <br />
          <span className="cs-hero-yellow">Soon.</span>
        </h1>

        {/* Description */}
        <p className="cs-description">
          We&apos;re building something that will change how you bet. Be the
          first to know when it drops.
        </p>

        {/* Countdown */}
        <div className="cs-countdown" role="timer" aria-label="Countdown timer">
          {countdownUnits.map(({ value, label }, i) => (
            <div key={label} className="cs-countdown-group">
              <div className="cs-countdown-box">
                <span className="cs-countdown-value">{value}</span>
              </div>
              <span className="cs-countdown-label">{label}</span>
              {i < countdownUnits.length - 1 && (
                <span className="cs-countdown-colon" aria-hidden="true">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Email capture */}
        {submitted ? (
          <div className="cs-submitted">
            <span className="cs-submitted-check">✓</span>
            You&apos;re on the list. We&apos;ll be in touch.
          </div>
        ) : (
          <form className="cs-email-form" onSubmit={handleNotify}>
            <input
              type="email"
              className="cs-email-input"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <button type="submit" className="cs-notify-btn">
              Notify Me
            </button>
          </form>
        )}

        <p className="cs-fine-print">No spam. Unsubscribe anytime.</p>
      </main>
    </div>
  );
}

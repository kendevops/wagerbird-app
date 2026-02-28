"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="email-capture-section">
      <div className="email-capture-inner">
        <span className="email-capture-label">// Free Daily Picks</span>
        <h2 className="email-capture-heading">
          Today&rsquo;s Top Signals.
          <br />
          <em className="email-capture-heading-accent">Free, In Your Inbox.</em>
        </h2>
        <p className="email-capture-subtext">
          No credit card. No fluff. Just the model&rsquo;s top 3 picks,
          <br className="email-capture-br" />
          every morning before game time.
        </p>

        <div className="email-capture-card-wrap">
          <div className="email-capture-card">
            <h3 className="email-capture-card-heading">Join 12,000+ Sharp Bettors</h3>
            <p className="email-capture-card-sub">
              Get the model&rsquo;s top picks before game time — free, every day.
            </p>
            <form className="email-capture-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-capture-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="email-capture-btn">
                Send My Picks
              </button>
            </form>
            <p className="email-capture-disclaimer">
              No spam. Unsubscribe anytime. Your data stays private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

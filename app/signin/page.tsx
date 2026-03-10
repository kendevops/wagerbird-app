"use client";

import { useState } from "react";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_WAGERBIRD_APP_URL ?? "https://app.wagerbird.com";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? data?.message ?? "Sign in failed");
        return;
      }
      const redirectUrl = data?.redirectUrl ?? APP_URL;
      window.location.href = redirectUrl;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signin-layout">
      {/* Left Panel — branding & stats */}
      <section className="signin-left-panel">
        <div className="signin-grid-bg" />
        <div className="signin-left-content">
          <p className="signin-eyebrow">// Welcome back</p>

          <h1 className="signin-hero-heading">
            <span className="signin-hero-white">Back in</span>
            <br />
            <span className="signin-hero-yellow">The Game.</span>
          </h1>

          <p className="signin-tagline">
            Your signals are waiting. Log in to access today&apos;s picks and
            your Points balance.
          </p>

          <div className="signin-stats">
            <div className="signin-stat-item">
              <span className="signin-stat-value">68%</span>
              <span className="signin-stat-label">Win Rate</span>
            </div>
            <div className="signin-stat-item">
              <span className="signin-stat-value">12K+</span>
              <span className="signin-stat-label">Bettors</span>
            </div>
            <div className="signin-stat-item">
              <span className="signin-stat-value">10+</span>
              <span className="signin-stat-label">Leagues</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Panel — sign-in form */}
      <section className="signin-right-panel">
        <div className="signin-form-container">
          <div className="signin-form-header">
            <p className="signin-form-eyebrow">// Sign in</p>
            <h2 className="signin-form-title">Welcome Back</h2>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            {error && (
              <div className="signin-error" role="alert">
                {error}
              </div>
            )}
            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="signin-field-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="signin-field-group">
              <div className="signin-password-row">
                <label className="signin-field-label" htmlFor="password">
                  Password
                </label>
                <a href="#" className="signin-forgot-link">
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="signin-field-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="signin-submit-btn clip-btn" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9.33333 3.33325L14 7.99992M14 7.99992L9.33333 12.6666M14 7.99992H2"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </form>

          <div className="signin-divider-row">
            <span className="signin-divider-line" />
            <span className="signin-divider-text">Or</span>
            <span className="signin-divider-line" />
          </div>

          <div className="signin-footer-links">
            <p className="signin-signup-row">
              <span className="signin-signup-prompt">
                Don&apos;t have an account?
              </span>
              <Link href="/register" className="signin-signup-link">
                Sign up&nbsp;&rarr;
              </Link>
            </p>
            <p className="signin-fine-print">
              Points never expire &middot; Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

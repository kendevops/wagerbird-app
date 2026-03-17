"use client";

import { useState } from "react";
import Link from "next/link";
import type { SignInPageResult } from "@/sanity/lib/queries";

const APP_URL =
  process.env.NEXT_PUBLIC_WAGERBIRD_APP_URL ?? "https://app.wagerbird.com";

const DEFAULT_STATS = [
  { value: "68%", label: "Win Rate" },
  { value: "12K+", label: "Bettors" },
  { value: "10+", label: "Leagues" },
];

export default function SignInPageContent({
  data,
  successBanner,
  onSignUpClick,
}: {
  data: SignInPageResult | null;
  successBanner?: string;
  onSignUpClick?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const c = {
    leftEyebrow: data?.leftEyebrow ?? "// Welcome back",
    leftHeroLine1: data?.leftHeroLine1 ?? "Back in",
    leftHeroLine2: data?.leftHeroLine2 ?? "The Game.",
    leftTagline:
      data?.leftTagline ??
      "Your signals are waiting. Log in to access today's picks and your Points balance.",
    stats: data?.stats?.length ? data.stats : DEFAULT_STATS,
    formEyebrow: data?.formEyebrow ?? "// Sign in",
    formTitle: data?.formTitle ?? "Welcome Back",
    emailLabel: data?.emailLabel ?? "Email",
    emailPlaceholder: data?.emailPlaceholder ?? "your@email.com",
    passwordLabel: data?.passwordLabel ?? "Password",
    passwordPlaceholder: data?.passwordPlaceholder ?? "••••••••",
    forgotLabel: data?.forgotLabel ?? "Forgot?",
    submitLabel: data?.submitLabel ?? "Sign In",
    signupPrompt: data?.signupPrompt ?? "Don't have an account?",
    signupLinkLabel: data?.signupLinkLabel ?? "Sign up →",
    signupLinkHref: data?.signupLinkHref ?? "/register",
    finePrint: data?.finePrint ?? "Points never expire · Cancel anytime",
  };

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
      const resData = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(resData?.error ?? resData?.message ?? "Sign in failed");
        return;
      }
      localStorage.setItem("wagerbird_authenticated", "true");
      const redirectUrl = resData?.redirectUrl ?? APP_URL;
      window.location.href = redirectUrl;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signin-layout">
      <section className="signin-left-panel">
        <div className="signin-grid-bg" />
        <div className="signin-left-content">
          <p className="signin-eyebrow">{c.leftEyebrow}</p>

          <h1 className="signin-hero-heading">
            <span className="signin-hero-white">{c.leftHeroLine1}</span>
            <br />
            <span className="signin-hero-yellow">{c.leftHeroLine2}</span>
          </h1>

          <p className="signin-tagline">{c.leftTagline}</p>

          <div className="signin-stats">
            {c.stats.map((stat, i) => (
              <div key={i} className="signin-stat-item">
                <span className="signin-stat-value">{stat.value}</span>
                <span className="signin-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="signin-right-panel">
        <div className="signin-form-container">
          <div className="signin-form-header">
            <p className="signin-form-eyebrow">{c.formEyebrow}</p>
            <h2 className="signin-form-title">{c.formTitle}</h2>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            {successBanner && (
              <div className="get-started-success-banner">
                <span className="get-started-success-icon-sm">&#10003;</span>
                {successBanner}
              </div>
            )}
            {error && (
              <div className="signin-error" role="alert">
                {error}
              </div>
            )}
            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="email">
                {c.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                className="signin-field-input"
                placeholder={c.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="signin-field-group">
              <div className="signin-password-row">
                <label className="signin-field-label" htmlFor="password">
                  {c.passwordLabel}
                </label>
                <a href="#" className="signin-forgot-link">
                  {c.forgotLabel}
                </a>
              </div>
              <div className="signin-password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="signin-field-input"
                  placeholder={c.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="signin-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="signin-submit-btn clip-btn"
              disabled={loading}
            >
              {loading ? "Signing in…" : c.submitLabel}
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
              <span className="signin-signup-prompt">{c.signupPrompt}</span>
              {onSignUpClick ? (
                <button
                  type="button"
                  className="signin-signup-link"
                  onClick={onSignUpClick}
                >
                  {c.signupLinkLabel}
                </button>
              ) : (
                <Link href={c.signupLinkHref} className="signin-signup-link">
                  {c.signupLinkLabel}
                </Link>
              )}
            </p>
            <p className="signin-fine-print">{c.finePrint}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

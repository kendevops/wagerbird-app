"use client";

import { useState } from "react";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_WAGERBIRD_APP_URL ?? "https://app.wagerbird.com";

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", label: "US" },
  { code: "+1", flag: "🇨🇦", label: "CA" },
  { code: "+44", flag: "🇬🇧", label: "GB" },
  { code: "+61", flag: "🇦🇺", label: "AU" },
  { code: "+353", flag: "🇮🇪", label: "IE" },
  { code: "+64", flag: "🇳🇿", label: "NZ" },
  { code: "+27", flag: "🇿🇦", label: "ZA" },
  { code: "+91", flag: "🇮🇳", label: "IN" },
  { code: "+49", flag: "🇩🇪", label: "DE" },
  { code: "+33", flag: "🇫🇷", label: "FR" },
  { code: "+34", flag: "🇪🇸", label: "ES" },
  { code: "+39", flag: "🇮🇹", label: "IT" },
  { code: "+31", flag: "🇳🇱", label: "NL" },
  { code: "+46", flag: "🇸🇪", label: "SE" },
  { code: "+47", flag: "🇳🇴", label: "NO" },
  { code: "+45", flag: "🇩🇰", label: "DK" },
  { code: "+358", flag: "🇫🇮", label: "FI" },
  { code: "+52", flag: "🇲🇽", label: "MX" },
  { code: "+55", flag: "🇧🇷", label: "BR" },
  { code: "+54", flag: "🇦🇷", label: "AR" },
  { code: "+57", flag: "🇨🇴", label: "CO" },
  { code: "+56", flag: "🇨🇱", label: "CL" },
  { code: "+81", flag: "🇯🇵", label: "JP" },
  { code: "+82", flag: "🇰🇷", label: "KR" },
  { code: "+86", flag: "🇨🇳", label: "CN" },
  { code: "+65", flag: "🇸🇬", label: "SG" },
  { code: "+60", flag: "🇲🇾", label: "MY" },
  { code: "+63", flag: "🇵🇭", label: "PH" },
  { code: "+66", flag: "🇹🇭", label: "TH" },
  { code: "+234", flag: "🇳🇬", label: "NG" },
  { code: "+254", flag: "🇰🇪", label: "KE" },
  { code: "+233", flag: "🇬🇭", label: "GH" },
];

const FEATURE_BULLETS = [
  { bold: "Pay per pick.", rest: " No subscription required." },
  { bold: "Points never expire.", rest: " Buy once, use anytime." },
  { bold: "10+ leagues.", rest: " NFL, NBA, MLB, NHL, CBB and more." },
  { bold: "68% win rate.", rest: " Backed by the model." },
];

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName: firstName || undefined,
          lastName: lastName || undefined,
          phone: phone || undefined,
          countryCode: countryCode || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? data?.message ?? "Registration failed");
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
    <main className="signup-layout">
      {/* Left Panel — branding & feature bullets */}
      <section className="signup-left-panel">
        <div className="signin-grid-bg" />
        <div className="signup-left-content">
          <p className="signin-eyebrow">// Get Started</p>

          <h1 className="signup-hero-heading">
            <span className="signup-hero-white">Your Edge</span>
            <br />
            <span className="signup-hero-yellow">Starts Here</span>
          </h1>

          <p className="signup-tagline">
            Join thousands bettors using confidence-scored signals to make
            smarter plays across every sport.
          </p>

          <ul className="signup-feature-list">
            {FEATURE_BULLETS.map(({ bold, rest }, i) => (
              <li key={i} className="signup-feature-item">
                <span className="signup-bullet-dot" aria-hidden="true" />
                <span className="signup-feature-text">
                  <strong className="signup-feature-bold">{bold}</strong>
                  {rest}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Right Panel — registration form */}
      <section className="signup-right-panel">
        <div className="signup-form-container">
          <div className="signup-form-header">
            <p className="signin-form-eyebrow">// Create Account</p>
            <h2 className="signup-form-title">Get Started</h2>
            <p className="signup-form-subtitle">
              Free to join. Buy Points when you&apos;re ready.
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            {error && (
              <div className="signup-error" role="alert">
                {error}
              </div>
            )}
            {/* First + Last Name row */}
            <div className="signup-name-row">
              <div className="signin-field-group">
                <label className="signin-field-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="signin-field-input"
                  placeholder="First"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
              </div>
              <div className="signin-field-group">
                <label className="signin-field-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="signin-field-input"
                  placeholder="Last"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Phone number with country code */}
            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="phone">
                Phone Number
              </label>
              <div className="signup-phone-row">
                <div className="signup-country-select-wrapper">
                  <select
                    className="signup-country-select"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map(({ code, flag, label }, i) => (
                      <option key={i} value={code}>
                        {flag} {code} ({label})
                      </option>
                    ))}
                  </select>
                  <svg className="signup-select-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4L6 8L10 4" stroke="#5A5A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input
                  id="phone"
                  type="tel"
                  className="signin-field-input signup-phone-input"
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel-national"
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="signin-field-input"
                placeholder="Min 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
              />
            </div>

            {/* Confirm Password */}
            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="signin-field-input"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
              />
            </div>

            <button type="submit" className="signin-submit-btn signup-submit-btn clip-btn" disabled={loading}>
              {loading ? "Creating account…" : "Create Account"}
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

          {/* Legal & sign-in link */}
          <div className="signup-footer-section">
            <p className="signup-legal-text">
              By signing up you agree to our{" "}
              <Link href="/terms-of-service" className="signup-legal-link">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="signup-legal-link">
                Privacy Policy
              </Link>
              . Must be 21+ to bet.
            </p>
            <p className="signup-signin-row">
              <span className="signin-signup-prompt">
                Already have an account?
              </span>{" "}
              <Link href="/signin" className="signin-signup-link">
                Sign In&nbsp;&rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import type { RegisterPageResult } from "@/sanity/lib/queries";

const APP_URL =
  process.env.NEXT_PUBLIC_WAGERBIRD_APP_URL ?? "https://app.wagerbird.com";

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

const DEFAULT_FEATURE_BULLETS = [
  { bold: "Pay per pick.", rest: " No subscription required." },
  { bold: "Points never expire.", rest: " Buy once, use anytime." },
  { bold: "10+ leagues.", rest: " NFL, NBA, MLB, NHL, CBB and more." },
  { bold: "68% win rate.", rest: " Backed by the model." },
];

function LegalTextWithLinks({
  legalText,
  termsHref,
  privacyHref,
}: {
  legalText: string;
  termsHref: string;
  privacyHref: string;
}) {
  const parts = legalText.split(/(Terms of Service|Privacy Policy)/);
  return (
    <>
      {parts.map((part, i) =>
        part === "Terms of Service" ? (
          <Link key={i} href={termsHref} className="signup-legal-link">
            {part}
          </Link>
        ) : part === "Privacy Policy" ? (
          <Link key={i} href={privacyHref} className="signup-legal-link">
            {part}
          </Link>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export default function RegisterPageContent({
  data,
}: {
  data: RegisterPageResult | null;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+1|US");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const c = {
    leftEyebrow: data?.leftEyebrow ?? "// Get Started",
    leftHeroLine1: data?.leftHeroLine1 ?? "Your Edge",
    leftHeroLine2: data?.leftHeroLine2 ?? "Starts Here",
    leftTagline:
      data?.leftTagline ??
      "Join thousands bettors using confidence-scored signals to make smarter plays across every sport.",
    featureBullets: data?.featureBullets?.length
      ? data.featureBullets
      : DEFAULT_FEATURE_BULLETS,
    formEyebrow: data?.formEyebrow ?? "// Create Account",
    formTitle: data?.formTitle ?? "Get Started",
    formSubtitle:
      data?.formSubtitle ?? "Free to join. Buy Points when you're ready.",
    firstNameLabel: data?.firstNameLabel ?? "First Name",
    firstNamePlaceholder: data?.firstNamePlaceholder ?? "First",
    lastNameLabel: data?.lastNameLabel ?? "Last Name",
    lastNamePlaceholder: data?.lastNamePlaceholder ?? "Last",
    phoneLabel: data?.phoneLabel ?? "Phone Number",
    phonePlaceholder: data?.phonePlaceholder ?? "(555) 000-0000",
    emailLabel: data?.emailLabel ?? "Email",
    emailPlaceholder: data?.emailPlaceholder ?? "your@email.com",
    passwordLabel: data?.passwordLabel ?? "Password",
    passwordPlaceholder: data?.passwordPlaceholder ?? "Min 8 characters",
    confirmPasswordLabel: data?.confirmPasswordLabel ?? "Confirm Password",
    confirmPasswordPlaceholder:
      data?.confirmPasswordPlaceholder ?? "Re-enter password",
    submitLabel: data?.submitLabel ?? "Create Account",
    legalText:
      data?.legalText ??
      "By signing up you agree to our Terms of Service and Privacy Policy. Must be 21+ to bet.",
    termsHref: data?.termsHref ?? "/terms-of-service",
    privacyHref: data?.privacyHref ?? "/privacy-policy",
    signinPrompt: data?.signinPrompt ?? "Already have an account?",
    signinLinkLabel: data?.signinLinkLabel ?? "Sign In →",
    signinLinkHref: data?.signinLinkHref ?? "/signin",
  };

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
          passwordConfirmation: confirmPassword,
          firstName: firstName || undefined,
          lastName: lastName || undefined,
          phone: phone || undefined,
          countryCode: countryCode?.split("|")[0] || undefined,
        }),
      });
      const resData = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(resData?.error ?? resData?.message ?? "Registration failed");
        return;
      }
      const loginUrl = resData?.redirectUrl ?? APP_URL;
      const userUuid = resData?.userUuid ?? "";

      sessionStorage.setItem("onboarding_login_url", loginUrl);
      if (userUuid) {
        sessionStorage.setItem("onboarding_user_uuid", userUuid);
      }

      window.location.href = "/onboarding";
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup-layout">
      <section className="signup-left-panel">
        <div className="signin-grid-bg" />
        <div className="signup-left-content">
          <p className="signin-eyebrow">{c.leftEyebrow}</p>

          <h1 className="signup-hero-heading">
            <span className="signup-hero-white">{c.leftHeroLine1}</span>
            <br />
            <span className="signup-hero-yellow">{c.leftHeroLine2}</span>
          </h1>

          <p className="signup-tagline">{c.leftTagline}</p>

          <ul className="signup-feature-list">
            {c.featureBullets.map(({ bold, rest }, i) => (
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

      <section className="signup-right-panel">
        <div className="signup-form-container">
          <div className="signup-form-header">
            <p className="signin-form-eyebrow">{c.formEyebrow}</p>
            <h2 className="signup-form-title">{c.formTitle}</h2>
            <p className="signup-form-subtitle">{c.formSubtitle}</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            {error && (
              <div className="signup-error" role="alert">
                {error}
              </div>
            )}
            <div className="signup-name-row">
              <div className="signin-field-group">
                <label className="signin-field-label" htmlFor="firstName">
                  {c.firstNameLabel}
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="signin-field-input"
                  placeholder={c.firstNamePlaceholder}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
              </div>
              <div className="signin-field-group">
                <label className="signin-field-label" htmlFor="lastName">
                  {c.lastNameLabel}
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="signin-field-input"
                  placeholder={c.lastNamePlaceholder}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="phone">
                {c.phoneLabel}
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
                      <option key={i} value={`${code}|${label}`}>
                        {flag} {code} ({label})
                      </option>
                    ))}
                  </select>
                  <svg
                    className="signup-select-chevron"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="#5A5A5A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  id="phone"
                  type="tel"
                  className="signin-field-input signup-phone-input"
                  placeholder={c.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel-national"
                />
              </div>
            </div>

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
              <label className="signin-field-label" htmlFor="password">
                {c.passwordLabel}
              </label>
              <div className="signin-password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="signin-field-input"
                  placeholder={c.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  minLength={8}
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

            <div className="signin-field-group">
              <label className="signin-field-label" htmlFor="confirmPassword">
                {c.confirmPasswordLabel}
              </label>
              <div className="signin-password-input-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="signin-field-input"
                  placeholder={c.confirmPasswordPlaceholder}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  minLength={8}
                />
                <button
                  type="button"
                  className="signin-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
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
              className="signin-submit-btn signup-submit-btn clip-btn"
              disabled={loading}
            >
              {loading ? "Creating account…" : c.submitLabel}
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

          <div className="signup-footer-section">
            <p className="signup-legal-text">
              <LegalTextWithLinks
                legalText={c.legalText}
                termsHref={c.termsHref}
                privacyHref={c.privacyHref}
              />
            </p>
            <p className="signup-signin-row">
              <span className="signin-signup-prompt">{c.signinPrompt}</span>{" "}
              <Link href={c.signinLinkHref} className="signin-signup-link">
                {c.signinLinkLabel}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

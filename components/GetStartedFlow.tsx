"use client";

import { useState, useCallback, FormEvent } from "react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const PLAN_DETAILS: Record<
  string,
  { name: string; points: string; price: number }
> = {
  starter: { name: "Starter Pack", points: "600 Points", price: 39 },
  core: { name: "Core Pack", points: "1,700 Points", price: 99 },
  advanced: { name: "Advanced Pack", points: "3,600 Points", price: 199 },
};

const STRIPE_PRICES: Record<string, string> = {
  starter: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER!,
  core: process.env.NEXT_PUBLIC_STRIPE_PRICE_CORE!,
  advanced: process.env.NEXT_PUBLIC_STRIPE_PRICE_ADVANCED!,
};

export default function GetStartedFlow({ plan }: { plan: string }) {
  const planInfo = PLAN_DETAILS[plan] || PLAN_DETAILS.core;
  const stripePrice = STRIPE_PRICES[plan] || STRIPE_PRICES.core;

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/auth/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stripe_price: stripePrice }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to create checkout");
    return data.data.checkout_client_secret;
  }, [stripePrice]);

  return (
    <div className="get-started-container">
      {/* Pack summary */}
      <div className="get-started-pack-summary">
        <span className="get-started-pack-name">{planInfo.name}</span>
        <span className="get-started-pack-details">
          {planInfo.points} &middot; ${planInfo.price}
        </span>
      </div>

      {/* Embedded Checkout */}
      <div className="get-started-checkout">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}

/* ─── Registration form shown after payment ─── */

const COUNTRY_CODES = [
  { code: "+1", flag: "\u{1F1FA}\u{1F1F8}", label: "US" },
  { code: "+1", flag: "\u{1F1E8}\u{1F1E6}", label: "CA" },
  { code: "+44", flag: "\u{1F1EC}\u{1F1E7}", label: "GB" },
  { code: "+61", flag: "\u{1F1E6}\u{1F1FA}", label: "AU" },
  { code: "+353", flag: "\u{1F1EE}\u{1F1EA}", label: "IE" },
  { code: "+64", flag: "\u{1F1F3}\u{1F1FF}", label: "NZ" },
  { code: "+27", flag: "\u{1F1FF}\u{1F1E6}", label: "ZA" },
  { code: "+91", flag: "\u{1F1EE}\u{1F1F3}", label: "IN" },
  { code: "+49", flag: "\u{1F1E9}\u{1F1EA}", label: "DE" },
  { code: "+33", flag: "\u{1F1EB}\u{1F1F7}", label: "FR" },
  { code: "+34", flag: "\u{1F1EA}\u{1F1F8}", label: "ES" },
  { code: "+39", flag: "\u{1F1EE}\u{1F1F9}", label: "IT" },
  { code: "+31", flag: "\u{1F1F3}\u{1F1F1}", label: "NL" },
  { code: "+46", flag: "\u{1F1F8}\u{1F1EA}", label: "SE" },
  { code: "+47", flag: "\u{1F1F3}\u{1F1F4}", label: "NO" },
  { code: "+45", flag: "\u{1F1E9}\u{1F1F0}", label: "DK" },
  { code: "+358", flag: "\u{1F1EB}\u{1F1EE}", label: "FI" },
  { code: "+52", flag: "\u{1F1F2}\u{1F1FD}", label: "MX" },
  { code: "+55", flag: "\u{1F1E7}\u{1F1F7}", label: "BR" },
  { code: "+54", flag: "\u{1F1E6}\u{1F1F7}", label: "AR" },
  { code: "+57", flag: "\u{1F1E8}\u{1F1F4}", label: "CO" },
  { code: "+56", flag: "\u{1F1E8}\u{1F1F1}", label: "CL" },
  { code: "+81", flag: "\u{1F1EF}\u{1F1F5}", label: "JP" },
  { code: "+82", flag: "\u{1F1F0}\u{1F1F7}", label: "KR" },
  { code: "+86", flag: "\u{1F1E8}\u{1F1F3}", label: "CN" },
  { code: "+65", flag: "\u{1F1F8}\u{1F1EC}", label: "SG" },
  { code: "+60", flag: "\u{1F1F2}\u{1F1FE}", label: "MY" },
  { code: "+63", flag: "\u{1F1F5}\u{1F1ED}", label: "PH" },
  { code: "+66", flag: "\u{1F1F9}\u{1F1ED}", label: "TH" },
  { code: "+234", flag: "\u{1F1F3}\u{1F1EC}", label: "NG" },
  { code: "+254", flag: "\u{1F1F0}\u{1F1EA}", label: "KE" },
  { code: "+233", flag: "\u{1F1EC}\u{1F1ED}", label: "GH" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  password: string;
  passwordConfirmation: string;
}

interface FormErrors {
  [key: string]: string[];
}

export function RegistrationForm({
  sessionId,
  prefillEmail,
}: {
  sessionId: string;
  prefillEmail: string;
}) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: prefillEmail,
    phone: "",
    countryCode: "+1|US",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    setGeneralError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.passwordConfirmation,
          session_id: sessionId,
          phone_number: formData.phone
            ? `${formData.countryCode.split("|")[0]}${formData.phone.replace(/\D/g, "")}`
            : undefined,
          phone_number_country: formData.phone
            ? formData.countryCode.split("|")[1]
            : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setGeneralError(data.message || "Registration failed.");
        }
        return;
      }

      // Redirect to monolith auto-login URL
      if (data.data?.login_url) {
        window.open(
          "https://onepage-campaign.onrender.com/wagerbird",
          "_blank",
        );
        window.location.href = data.data.login_url;
      }
    } catch {
      setGeneralError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="get-started-container">
      <div className="get-started-success-banner">
        <span className="get-started-success-icon-sm">&#10003;</span>
        Payment successful! Create your account to access your points.
      </div>

      <form onSubmit={handleSubmit} className="get-started-form">
        {generalError && (
          <div className="get-started-error-banner">{generalError}</div>
        )}

        <div className="get-started-form-row">
          <div className="get-started-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              required
            />
            {errors.first_name && (
              <span className="get-started-field-error">
                {errors.first_name[0]}
              </span>
            )}
          </div>
          <div className="get-started-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              required
            />
            {errors.last_name && (
              <span className="get-started-field-error">
                {errors.last_name[0]}
              </span>
            )}
          </div>
        </div>

        <div className="get-started-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            readOnly
            className="get-started-field-locked"
          />
        </div>

        <div className="get-started-field">
          <label htmlFor="phone">Phone Number</label>
          <div className="get-started-phone-row">
            <div className="get-started-country-select-wrapper">
              <select
                className="get-started-country-select"
                value={formData.countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
                aria-label="Country code"
              >
                {COUNTRY_CODES.map(({ code, flag, label }, i) => (
                  <option key={i} value={`${code}|${label}`}>
                    {flag} {code} ({label})
                  </option>
                ))}
              </select>
              <svg
                className="get-started-select-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="#999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              id="phone"
              type="tel"
              className="get-started-phone-input"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              autoComplete="tel-national"
            />
          </div>
          {errors.phone_number && (
            <span className="get-started-field-error">
              {errors.phone_number[0]}
            </span>
          )}
        </div>

        <div className="get-started-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
            minLength={8}
          />
          {errors.password && (
            <span className="get-started-field-error">
              {errors.password[0]}
            </span>
          )}
        </div>

        <div className="get-started-field">
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            id="passwordConfirmation"
            type="password"
            value={formData.passwordConfirmation}
            onChange={(e) =>
              handleChange("passwordConfirmation", e.target.value)
            }
            required
            minLength={8}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="get-started-submit"
        >
          {submitting ? "Creating account..." : "Create Account & Access Picks"}
        </button>

        <p className="get-started-terms">
          By creating an account, you agree to our{" "}
          <Link href="/terms-of-service">Terms of Service</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}

/* ─── Sign-in form for returning users on checkout complete ─── */

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loginUrl, setLoginUrl] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || data.message || "Sign in failed.");
        return;
      }

      if (data.redirectUrl) {
        setLoginUrl(data.redirectUrl);
      } else {
        setError("Sign in succeeded but no redirect was provided. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loginUrl) {
    return (
      <div className="get-started-container">
        <div className="get-started-success-banner">
          <span className="get-started-success-icon-sm">&#10003;</span>
          Payment successful! Points added to your account.
        </div>
        <a href={loginUrl} className="get-started-submit">
          Go to Dashboard
        </a>
      </div>
    );
  }

  return (
    <div className="get-started-container">
      <div className="get-started-success-banner">
        <span className="get-started-success-icon-sm">&#10003;</span>
        Payment successful! Sign in to receive your points.
      </div>

      <form onSubmit={handleSubmit} className="get-started-form">
        {error && <div className="get-started-error-banner">{error}</div>}

        <div className="get-started-field">
          <label htmlFor="signin-email">Email</label>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="get-started-field">
          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="get-started-submit"
        >
          {submitting ? "Signing in..." : "Sign In & Access Picks"}
        </button>
      </form>
    </div>
  );
}

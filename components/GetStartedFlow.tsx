"use client";

import { useState, useCallback, FormEvent } from "react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PLAN_DETAILS: Record<
  string,
  { name: string; points: string; price: number; stripePriceEnvKey: string }
> = {
  starter: {
    name: "Starter Pack",
    points: "600 Points",
    price: 39,
    stripePriceEnvKey: "NEXT_PUBLIC_STRIPE_PRICE_STARTER",
  },
  core: {
    name: "Core Pack",
    points: "1,700 Points",
    price: 99,
    stripePriceEnvKey: "NEXT_PUBLIC_STRIPE_PRICE_CORE",
  },
  advanced: {
    name: "Advanced Pack",
    points: "3,600 Points",
    price: 199,
    stripePriceEnvKey: "NEXT_PUBLIC_STRIPE_PRICE_ADVANCED",
  },
};

const STRIPE_PRICES: Record<string, string> = {
  starter: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER!,
  core: process.env.NEXT_PUBLIC_STRIPE_PRICE_CORE!,
  advanced: process.env.NEXT_PUBLIC_STRIPE_PRICE_ADVANCED!,
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface FormErrors {
  [key: string]: string[];
}

export default function GetStartedFlow({ plan }: { plan: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const planInfo = PLAN_DETAILS[plan] || PLAN_DETAILS.core;
  const stripePrice = STRIPE_PRICES[plan] || STRIPE_PRICES.core;

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
          stripe_price: stripePrice,
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

      setClientSecret(data.data.checkout_client_secret);
      setStep(2);
    } catch {
      setGeneralError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fetchClientSecret = useCallback(() => {
    return Promise.resolve(clientSecret);
  }, [clientSecret]);

  return (
    <div className="get-started-container">
      {/* Pack summary */}
      <div className="get-started-pack-summary">
        <span className="get-started-pack-name">{planInfo.name}</span>
        <span className="get-started-pack-details">
          {planInfo.points} &middot; ${planInfo.price}
        </span>
      </div>

      {/* Step indicator */}
      <div className="get-started-steps">
        <div className={`get-started-step ${step >= 1 ? "get-started-step--active" : ""}`}>
          {step > 1 ? (
            <span className="get-started-step-check">&#10003;</span>
          ) : (
            <span className="get-started-step-number">1</span>
          )}
          <span>Account</span>
        </div>
        <div className="get-started-step-divider" />
        <div className={`get-started-step ${step >= 2 ? "get-started-step--active" : ""}`}>
          <span className="get-started-step-number">2</span>
          <span>Payment</span>
        </div>
      </div>

      {/* Step 1: Registration */}
      {step === 1 && (
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
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
            {errors.email && (
              <span className="get-started-field-error">
                {errors.email[0]}
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
            {submitting ? "Creating account..." : "Continue to Payment"}
          </button>

          <p className="get-started-terms">
            By creating an account, you agree to our{" "}
            <a href="/terms-of-service">Terms of Service</a> and{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </form>
      )}

      {/* Step 2: Embedded Checkout */}
      {step === 2 && clientSecret && (
        <div className="get-started-checkout">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      )}
    </div>
  );
}

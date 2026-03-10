"use client";

import { trackInitiateCheckout } from "@/lib/tracking";
import { APP_URL } from "@/lib/constants";

import { motion } from "framer-motion";

const PRICE_TO_STRIPE_ID: Record<number, string> = {
  39: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER!,
  99: process.env.NEXT_PUBLIC_STRIPE_PRICE_CORE!,
  199: process.env.NEXT_PUBLIC_STRIPE_PRICE_ADVANCED!,
};

function buildRegisterHref(price: number): string {
  const stripePriceId = PRICE_TO_STRIPE_ID[price];
  if (stripePriceId) {
    return `${APP_URL}/register?stripePrice=${stripePriceId}`;
  }
  return `${APP_URL}/register`;
}

export interface PriceCardProps {
  name: string;
  points: string;
  goodFor: string;
  price: number;
  ctaLabel: string;
  ctaHref?: string;
  popular?: boolean;
}

export default function PriceCard({
  name,
  points,
  goodFor,
  price,
  ctaLabel,
  ctaHref,
  popular = false,
}: PriceCardProps) {
  const href = ctaHref || buildRegisterHref(price);
  return (
    <div className={`price-card${popular ? " price-card--popular" : ""}`}>
      {/* Most Popular badge */}
      {popular && (
        <div className="price-card-popular-badge">
          <svg className="price-card-popular-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
          </svg>
          <span>Most Popular</span>
        </div>
      )}

      {/* Animated glow border for popular card */}
      {popular && (
        <motion.span
          className="price-card-glow-ring"
          animate={{
            opacity: [0.6, 1, 0.6],
            boxShadow: [
              "0 0 24px 4px rgba(79,110,255,0.45), inset 0 0 24px rgba(79,110,255,0.1)",
              "0 0 56px 12px rgba(79,110,255,0.75), inset 0 0 40px rgba(79,110,255,0.2)",
              "0 0 24px 4px rgba(79,110,255,0.45), inset 0 0 24px rgba(79,110,255,0.1)",
            ],
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      )}

      <div className="price-card-body">
        {/* Header */}
        <div className="price-card-header">
          <span className="price-card-name">{name}</span>
          <span className="price-card-points">{points}</span>
        </div>

        {/* Good for */}
        <div className="price-card-good-for">
          <span className="price-card-good-label">Good for</span>
          <span className="price-card-picks-badge">{goodFor}</span>
        </div>

        {/* Price */}
        <div className="price-card-price-row">
          <span className="price-card-amount">${price}</span>
          <span className="price-card-period">/ one time purchase</span>
        </div>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout("price_card", name)}
          className={`price-card-cta${popular ? " price-card-cta--popular" : ""}`}
        >
          {ctaLabel}
        </a>

        {/* Security note */}
        <span className="price-card-security">
          🔒 Secure Checkout &nbsp;·&nbsp; Points Never Expire
        </span>
      </div>
    </div>
  );
}

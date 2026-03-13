"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { SportsbookCardProps } from "./SportsbookCard";

const DEFAULT_LEGAL_TEXT =
  "GAMBLING PROBLEM? CALL 1-800-GAMBLER or 1-800-522-4700, (800) 327-5050 or visit http://gamblinghelplinema.org (MA). Call 877-8-HOPENY/text HOPENY (467369) (NY). Please Gamble Responsibly. 888-789-7777/visit http://ccpg.org (CT), or visit www.mdgamblinghelp.org (MD). 21+ and present in most states. (18+ DC/KY/NH/WY). Void in ONT/OR/NH. Eligibility restrictions apply. On behalf of Boot Hill Casino & Resort (KS). Pass-thru of per wager tax may apply in IL. 1 per new customer. Must register new account to receive reward Token. Must select Token BEFORE placing min. $5 bet to receive $200 in Bonus Bets if your bet wins. Min. -500 odds req. Token and Bonus Bets are single-use and non-withdrawable. Bet must settle by and Token expires 3/15/26. Bonus Bets expire in 7 days (168 hours). Stake removed from payout. Terms: http://sportsbook.draftkings.com/promos . Ends 3/8/26 at 11:59 PM ET. Sponsored by DK.";
const DEFAULT_DISCLAIMER =
  "New accounts only. Must be 21+. Availability varies by state. WagerBird Points Pack credited after qualifying deposit is confirmed, within 2–5 business days. Gambling problem? Call 1-800-GAMBLER.";

export interface ResolvedOfferContent {
  offerText: string;
  pointsPack: string;
  features: string[];
  detailText: string;
  legalText: string;
  disclaimer: string;
  ctaHref: string;
}

interface SportsbookOfferModalProps {
  sportsbook: SportsbookCardProps;
  selectedState: string;
  onChangeState: () => void;
  onOpenAccount: (ctaHref: string) => void;
  onClose: () => void;
}

function resolveOfferContent(
  sportsbook: SportsbookCardProps,
  selectedState: string,
): ResolvedOfferContent {
  const stateOverride = sportsbook.stateOffers?.find(
    (o) =>
      o.states?.includes(selectedState) ||
      (o as { state?: string }).state === selectedState,
  );
  const offerText =
    stateOverride?.offerText ??
    sportsbook.currentOffer ??
    "Special offer available — see details at signup.";
  const pointsPack =
    stateOverride?.pointsPack ??
    sportsbook.pointsPack ??
    "+$39 Points Pack";
  const features = stateOverride?.features ??
    sportsbook.features ?? [sportsbook.description];
  const detailText =
    stateOverride?.detailText ?? `${offerText} If Your Bet Wins!`;
  const legalText = stateOverride?.legalText ?? DEFAULT_LEGAL_TEXT;
  const disclaimer = stateOverride?.disclaimer ?? DEFAULT_DISCLAIMER;
  const ctaHref = stateOverride?.ctaHref ?? sportsbook.ctaHref ?? "#";
  return {
    offerText,
    pointsPack,
    features,
    detailText,
    legalText,
    disclaimer,
    ctaHref,
  };
}

export default function SportsbookOfferModal({
  sportsbook,
  selectedState,
  onChangeState,
  onOpenAccount,
  onClose,
}: SportsbookOfferModalProps) {
  const content = resolveOfferContent(sportsbook, selectedState);
  const {
    offerText,
    pointsPack,
    features,
    detailText,
    legalText,
    disclaimer,
    ctaHref,
  } = content;

  const [showFullLegal, setShowFullLegal] = useState(false);
  const isLongLegal = legalText.length > 220;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOpenAccount = () => {
    onOpenAccount(ctaHref);
  };

  return createPortal(
    <div
      className="sb-modal-overlay"
      onClick={onClose}
      role="presentation"
      aria-hidden="false"
    >
      <div
        className="sb-offer-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sb-offer-title"
      >
        <div
          className="sb-modal-header sb-offer-modal-header"
          style={{ backgroundColor: sportsbook.brandColor }}
        >
          <div className="sb-modal-header-inner">
            {sportsbook.logo && (
              <div className="sb-modal-logo-wrap">
                <Image
                  src={sportsbook.logo}
                  alt=""
                  width={32}
                  height={32}
                  className="sb-modal-logo"
                />
              </div>
            )}
            <div>
              <span className="sb-modal-brand-name">{sportsbook.name}</span>
              <span className="sb-modal-tagline">
                LICENSED U.S. SPORTSBOOK • EST. 2012
              </span>
            </div>
          </div>
          <button
            type="button"
            className="sb-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="sb-offer-modal-body">
          <div className="sb-offer-state-row">
            <button
              type="button"
              className="sb-offer-change-state"
              onClick={onChangeState}
            >
              ← CHANGE STATE
            </button>
            <span className="sb-offer-state-badge">{selectedState}</span>
          </div>

          <div className="sb-offer-banner">
            <div className="sb-offer-banner-left">
              <span className="sb-offer-banner-label">CURRENT OFFER</span>
              <span className="sb-offer-banner-text">{offerText}</span>
            </div>
            <div className="sb-offer-banner-right">
              <span className="sb-offer-banner-label">WAGERBIRD REWARD</span>
              <span className="sb-offer-banner-reward-value">{pointsPack}</span>
            </div>
          </div>

          <div className="sb-offer-detail-card">
            <div className="flex items-center gap-2">
              {sportsbook.logo && (
                <div className="sb-offer-detail-logo">
                  <Image src={sportsbook.logo} alt="" width={40} height={40} />
                </div>
              )}
              <span className="text-lg font-medium align-middle font-barlow-condensed uppercase font-size-lg">{sportsbook.name}</span>
            </div>
            <p className="sb-offer-detail-text">{detailText}</p>
            <p
              className={
                showFullLegal || !isLongLegal
                  ? "sb-offer-legal"
                  : "sb-offer-legal sb-offer-legal--clamped"
              }
            >
              {legalText.includes("1800gambler.net")
                ? legalText.split("1800gambler.net").map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <a
                          href="https://www.1800gambler.net"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1800gambler.net
                        </a>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )
                : legalText}
            </p>
            {isLongLegal && (
              <button
                type="button"
                className="sb-legal-toggle"
                onClick={() => setShowFullLegal((v) => !v)}
              >
                {showFullLegal ? "Show less" : "Show more"}
              </button>
            )}
          </div>

          <ul className="sb-offer-features">
            {features.map((f, i) => (
              <li key={i} className="sb-offer-feature-item">
                {f}
              </li>
            ))}
          </ul>

          <div className="sb-modal-actions">
            <button
              type="button"
              className="sb-modal-btn-primary clip-btn"
              onClick={handleOpenAccount}
            >
              OPEN {sportsbook.name.toUpperCase()} ACCOUNT
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="sb-modal-btn-secondary"
              onClick={onClose}
            >
              MAYBE LATER
            </button>
          </div>

          <p className="sb-offer-disclaimer">{disclaimer}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

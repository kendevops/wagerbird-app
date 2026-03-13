"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { SportsbookCardProps } from "./SportsbookCard";
import { US_SPORTSBOOK_STATES } from "@/lib/constants";

interface SportsbookChooseStateModalProps {
  sportsbook: SportsbookCardProps;
  onSeeOffer: (state: string) => void;
  onClose: () => void;
}

export default function SportsbookChooseStateModal({
  sportsbook,
  onSeeOffer,
  onClose,
}: SportsbookChooseStateModalProps) {
  const [selectedState, setSelectedState] = useState("");

  const availableStates = US_SPORTSBOOK_STATES.filter((s) =>
    sportsbook.states.includes(s),
  );

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

  const handleSeeOffer = () => {
    if (selectedState) onSeeOffer(selectedState);
  };

  const effectiveSelectedState =
    selectedState && availableStates.some((s) => s === selectedState)
      ? selectedState
      : availableStates[0] ?? "";

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="sb-modal-overlay"
      onClick={onClose}
      role="presentation"
      aria-hidden="false"
    >
      <div
        className="sb-choose-state-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sb-choose-state-title"
      >
        <div
          className="sb-modal-header"
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
            <span className="sb-modal-brand-name">{sportsbook.name}</span>
          </div>
          <p className="sb-modal-header-sub">SELECT YOUR STATE TO SEE YOUR OFFER</p>
          <button
            type="button"
            className="sb-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="sb-modal-body">
          <div className="sb-choose-state-pin" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h2 id="sb-choose-state-title" className="sb-modal-title">
            WHERE ARE YOU LOCATED?
          </h2>
          <p className="sb-modal-subtitle">
            Bonus offers vary by state. We&apos;ll show you exactly what&apos;s available where you are.
          </p>

          <div className="sb-choose-state-select-wrap">
            <select
              className="sb-choose-state-select"
              value={effectiveSelectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              aria-label="Select your state"
            >
              {availableStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <span className="sb-choose-state-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <p className="sb-modal-disclaimer">
            • OFFERS VARY BY STATE AND ARE SUBJECT TO CHANGE. MUST BE 21+.
          </p>

          <div className="sb-modal-actions">
            <button
              type="button"
              className="sb-modal-btn-primary clip-btn"
              onClick={handleSeeOffer}
              disabled={!selectedState}
            >
              SEE MY OFFER
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="sb-modal-btn-secondary" onClick={onClose}>
              MAYBE LATER
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

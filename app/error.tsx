"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function generateTraceId() {
  const hex = () => Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, "0");
  return `${hex()}-${Math.floor(Math.random() * 99999).toString(16).toUpperCase().padStart(5, "0")}`;
}

// Scattered decorative dot positions (deterministic so SSR matches)
const DOTS = [
  { top: "72%", left: "24%", size: 5 },
  { top: "55%", left: "7%", size: 3 },
  { top: "78%", left: "70%", size: 4 },
  { top: "82%", left: "44%", size: 3 },
  { top: "65%", left: "87%", size: 5 },
  { top: "88%", left: "60%", size: 3 },
  { top: "60%", left: "15%", size: 4 },
];

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [traceId, setTraceId] = useState("------");

  useEffect(() => {
    setTraceId(generateTraceId());
  }, []);

  return (
    <main className="err500-page">
      {/* Ambient orange glow */}
      <div className="err500-glow" aria-hidden="true" />

      {/* Concentric rings */}
      <div className="err500-rings" aria-hidden="true">
        <div className="err500-ring err500-ring--1" />
        <div className="err500-ring err500-ring--2" />
        <div className="err500-ring err500-ring--3" />
      </div>

      {/* Scattered dots */}
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="err500-dot"
          aria-hidden="true"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}

      {/* Content */}
      <div className="err500-content">
        {/* Status badge */}
        <div className="err500-status-badge">
          <span className="err500-status-dot" aria-hidden="true" />
          <span className="err500-status-text">System Error</span>
          <span className="err500-status-sep" aria-hidden="true">·</span>
          <span className="err500-status-text">Server Unresponsive</span>
        </div>

        {/* Recovery bar */}
        <div className="err500-recovery-row" aria-hidden="true">
          <span className="err500-recovery-label">System Recovery</span>
          <span className="err500-recovery-pct">0%</span>
        </div>
        <div className="err500-recovery-track" aria-hidden="true">
          <div className="err500-recovery-fill" />
        </div>

        {/* Eyebrow */}
        <p className="err500-eyebrow">// Error · Internal Server Failure</p>

        {/* 500 display */}
        <div className="err500-code" aria-label="500 error">
          <span className="err500-digit">5</span>
          <span className="err500-zero">0</span>
          <span className="err500-digit">0</span>
        </div>

        {/* Heading */}
        <h1 className="err500-heading">System Down.</h1>

        {/* Description */}
        <p className="err500-description">
          Something went wrong on our end. Our team has been notified and is
          working on a fix.
        </p>

        {/* Trace ID */}
        <p className="err500-trace">
          ERR_INTERNAL &nbsp;·&nbsp; TRACE_ID: {traceId}
        </p>

        {/* CTAs */}
        <div className="err500-actions">
          <button onClick={reset} className="err500-btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13.333 2.667A7.333 7.333 0 1 0 14.667 8M13.333 2.667V6M13.333 2.667H10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Try Again
          </button>
          <Link href="/" className="err500-btn-secondary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.667 12.667L2 8.00004M2 8.00004L6.667 3.333M2 8.00004H14"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="square"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Bottom orange border line */}
      <div className="err500-bottom-bar" aria-hidden="true" />
    </main>
  );
}

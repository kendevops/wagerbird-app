import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      {/* Grid overlay */}
      <div className="not-found-grid" aria-hidden="true" />

      {/* Circular glow ring behind the 404 */}
      <div className="not-found-ring" aria-hidden="true" />

      <div className="not-found-content">
        {/* Eyebrow */}
        <p className="not-found-eyebrow">
          <span className="not-found-eyebrow-error">// Error</span>
          <span className="not-found-eyebrow-dot" aria-hidden="true">·</span>
          <span className="not-found-eyebrow-label">Page Not Found</span>
        </p>

        {/* 404 display */}
        <div className="not-found-code" aria-label="404">
          <span className="not-found-digit">4</span>
          <span className="not-found-zero">0</span>
          <span className="not-found-digit">4</span>
        </div>

        {/* Heading */}
        <h1 className="not-found-heading">Signal Lost.</h1>

        {/* Description */}
        <p className="not-found-description">
          The page you&apos;re looking for went out of bounds. It may have been
          moved, deleted, or never existed.
        </p>

        {/* CTA buttons */}
        <div className="not-found-actions">
          <Link href="/" className="not-found-btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004H14"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="square"
              />
            </svg>
            Back to Home
          </Link>
          <Link href="/terminal" className="not-found-btn-secondary">
            View Signals
          </Link>
        </div>
      </div>
    </main>
  );
}

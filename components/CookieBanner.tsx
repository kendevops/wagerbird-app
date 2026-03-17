"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "wagerbird-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (!stored) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
      <div className="pointer-events-auto max-w-3xl w-full rounded-2xl border border-white/10 bg-[#050510]/95 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-5 shadow-lg shadow-black/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5 text-sm sm:text-[13px] leading-relaxed text-white/80">
            <p className="font-medium text-[11px] tracking-[0.18em] uppercase text-[var(--color-yellow)]">
              Cookies & Privacy
            </p>
            <p>
              We use cookies to improve your experience, analyze site traffic, and personalize content. By clicking
              Accept, you agree to our use of cookies.
            </p>
            <p className="text-xs text-white/55">
              Read more in our{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 decoration-white/40 hover:decoration-[var(--color-yellow)]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-none items-center gap-2 sm:flex-col sm:items-stretch sm:gap-2">
            <button
              type="button"
              onClick={accept}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-yellow)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black hover:bg-[#f0ff3a] transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


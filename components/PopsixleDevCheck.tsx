"use client";

import { useEffect } from "react";

/**
 * In development, logs a one-time hint if Popsixle globals (a10x_dl) are missing
 * so you don't have to guess why window.a10x_dl is undefined.
 */
export default function PopsixleDevCheck() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    const timer = setTimeout(() => {
      const hasToken = Boolean(
        typeof window !== "undefined" &&
          process.env.NEXT_PUBLIC_POP6_TRACKING_TOKEN
      );
      if (!hasToken) return;
      const dl = typeof window !== "undefined" ? (window as Window & { a10x_dl?: unknown }).a10x_dl : undefined;
      if (dl !== undefined) return;
      console.warn(
        "[Popsixle] window.a10x_dl is undefined. The script loaded but did not initialize. " +
          "Usually this means: (1) token/shop are invalid or (2) this domain is not allowed in your Popsixle account. " +
          "Check NEXT_PUBLIC_POP6_TRACKING_TOKEN and NEXT_PUBLIC_POP6_SHOP and your Popsixle dashboard."
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return null;
}

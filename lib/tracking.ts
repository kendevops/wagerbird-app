/**
 * Popsixle / conversion tracking utilities.
 * Fires events via Meta fbq when available (Popsixle works alongside Meta pixel).
 * Safe no-op when fbq is not loaded.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function safeFbq(event: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.fbq === "function") {
      if (payload) {
        window.fbq("track", event, payload);
      } else {
        window.fbq("track", event);
      }
    }
  } catch {
    // no-op
  }
}

/** Track InitiateCheckout when user clicks a buy/register CTA */
export function trackInitiateCheckout(source: string, value?: string) {
  safeFbq("InitiateCheckout", { content_name: source, value });
}

/** Track Lead when user submits email capture or similar form */
export function trackLead(source?: string) {
  safeFbq("Lead", source ? { content_name: source } : undefined);
}

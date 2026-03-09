/**
 * Popsixle / conversion tracking utilities.
 * Uses Popsixle runtime (a10x_dl, p6_post_event) per Popsixle custom event guide,
 * and also fires events via Meta fbq when available.
 * Safe no-op when APIs are missing.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    a10x_dl?: {
      vars?: {
        cart_data?: Array<{
          content_id?: string;
          content_name?: string;
          content_category?: string;
          content_type?: string;
          num_items?: number;
          value?: number;
          currency?: string;
        }>;
        event_value?: number;
        currency?: string;
        order_id?: string;
        content_name?: string;
      };
      db_session?: { session_id?: string | null };
    };
    p6_post_event?: (name: string) => void;
    p6_ensure_datalayer_initialized?: () => void;
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

type PopsixleVars = NonNullable<NonNullable<Window["a10x_dl"]>["vars"]>;

/** Ensure a10x_dl exists (Popsixle base snippet must be loaded). One p6_post_event per action. */
function safePopsixleEvent(
  eventName: string,
  setup: (vars: PopsixleVars) => void
) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.p6_ensure_datalayer_initialized === "function") {
      window.p6_ensure_datalayer_initialized();
    }
    const dl = window.a10x_dl;
    const vars = dl?.vars;
    if (!vars) return;
    setup(vars);
    if (typeof window.p6_post_event === "function") {
      window.p6_post_event(eventName);
    }
  } catch {
    // no-op
  }
}

/** Track InitiateCheckout when user clicks a buy/register CTA */
export function trackInitiateCheckout(source: string, value?: string) {
  const numValue = value ? parseFloat(value) : 0;
  safePopsixleEvent("InitiateCheckout", (vars) => {
    vars.cart_data = [
      {
        content_id: source,
        content_name: source,
        content_type: "product",
        num_items: 1,
        value: Number.isFinite(numValue) ? numValue : 0,
        currency: "USD",
      },
    ];
    vars.event_value = Number.isFinite(numValue) ? numValue : 0;
    vars.currency = "USD";
  });
  safeFbq("InitiateCheckout", { content_name: source, value });
}

/** Track Lead when user submits email capture or similar form */
export function trackLead(source?: string) {
  safePopsixleEvent("Lead", (vars) => {
    if (source) vars.content_name = source;
  });
  safeFbq("Lead", source ? { content_name: source } : undefined);
}

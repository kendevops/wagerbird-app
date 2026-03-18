"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RegisterPageContent from "@/components/RegisterPageContent";
import SignInPageContent from "@/components/SignInPageContent";
import { APP_URL } from "@/lib/constants";

type Status = "loading" | "complete" | "error";
type Mode = "register" | "signin";

function trackPopsixlePurchase(options: {
  sessionId: string;
  email?: string;
  amountTotal?: number;
  currency?: string;
}) {
  if (typeof window === "undefined") return;
  const w = window as any;
  try {
    if (!w.p6_ensure_datalayer_initialized || !w.p6_post_event || !w.a10x_dl) {
      return;
    }
    w.p6_ensure_datalayer_initialized();
    const dl = w.a10x_dl;
    dl.vars = dl.vars || {};

    const currency = options.currency || "USD";
    const total =
      typeof options.amountTotal === "number" && !Number.isNaN(options.amountTotal)
        ? options.amountTotal
        : 0;

    dl.vars.cart_data = [
      {
        content_id: "points_pack",
        content_name: "Points Pack Purchase",
        num_items: 1,
        value: total,
        currency,
      },
    ];
    dl.vars.event_value = total;
    dl.vars.currency = currency;
    dl.vars.order_id = options.sessionId;

    // Optionally set identity from email when available.
    if (
      options.email &&
      w.normalize_email &&
      w.normalize_email_goog &&
      w.sha256 &&
      w.p6_process_form_field
    ) {
      const norm = w.normalize_email(options.email);
      const goog = w.normalize_email_goog(options.email);
      const emailHash = w.sha256(norm);
      const emailGoogHash = w.sha256(goog);
      w.p6_process_form_field("em", emailHash, emailGoogHash);
    }

    w.p6_post_event("Purchase");
  } catch {
    // Never block the user flow on tracking failures.
  }
}

function CompleteFlow() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("loading");
  const [customerEmail, setCustomerEmail] = useState("");
  const [mode, setMode] = useState<Mode>("register");
  const [purchaseTracked, setPurchaseTracked] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    fetch(
      `/api/auth/checkout-status?session_id=${encodeURIComponent(sessionId)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data?.status === "complete") {
          setCustomerEmail(data.data.customer_email || "");
          if (data.data.user_exists) {
            setMode("signin");
          }
          if (!purchaseTracked) {
            trackPopsixlePurchase({
              sessionId,
              email: data.data.customer_email,
              amountTotal:
                typeof data.data.amount_total === "number"
                  ? data.data.amount_total / 100
                  : undefined,
              currency: data.data.currency,
            });
            setPurchaseTracked(true);
          }
          setStatus("complete");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId, purchaseTracked]);

  if (status === "loading") {
    return (
      <main className="get-started-page">
        <div className="get-started-wrapper">
          <div className="get-started-status">
            <div className="get-started-spinner" />
            <p>Verifying your payment...</p>
          </div>
        </div>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="get-started-page">
        <div className="get-started-wrapper">
          <div className="get-started-status">
            <h1 className="get-started-title">Something Went Wrong</h1>
            <p className="get-started-subtitle">
              We couldn&rsquo;t verify your payment. If you were charged, your
              points will be credited automatically and you&rsquo;ll receive an
              email to set up your account.
            </p>
            <a href={`${APP_URL}/login`} className="get-started-submit">
              Go to Login
            </a>
          </div>
        </div>
      </main>
    );
  }

  if (mode === "signin") {
    return (
      <SignInPageContent
        data={null}
        successBanner="Payment successful! Sign in to receive your points."
        onSignUpClick={() => setMode("register")}
      />
    );
  }

  return (
    <RegisterPageContent
      data={null}
      sessionId={sessionId!}
      prefillEmail={customerEmail}
      onSignInClick={() => setMode("signin")}
    />
  );
}

export default function GetStartedCompletePage() {
  return (
    <Suspense
      fallback={
        <main className="get-started-page">
          <div className="get-started-wrapper">
            <div className="get-started-status">
              <div className="get-started-spinner" />
              <p>Verifying your payment...</p>
            </div>
          </div>
        </main>
      }
    >
      <CompleteFlow />
    </Suspense>
  );
}

"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RegisterPageContent from "@/components/RegisterPageContent";
import SignInPageContent from "@/components/SignInPageContent";
import { APP_URL } from "@/lib/constants";

type Status = "loading" | "complete" | "error";
type Mode = "register" | "signin";

function CompleteFlow() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("loading");
  const [customerEmail, setCustomerEmail] = useState("");
  const [mode, setMode] = useState<Mode>("register");

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
          setStatus("complete");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

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

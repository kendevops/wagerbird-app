"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RegistrationForm } from "@/components/GetStartedFlow";
import { APP_URL } from "@/lib/constants";

type Status = "loading" | "complete" | "error";

function CompleteFlow() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("loading");
  const [customerEmail, setCustomerEmail] = useState("");

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
          setStatus("complete");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

  return (
    <>
      {status === "loading" && (
        <div className="get-started-status">
          <div className="get-started-spinner" />
          <p>Verifying your payment...</p>
        </div>
      )}

      {status === "complete" && sessionId && (
        <>
          <h1 className="get-started-title">Create Your Account</h1>
          <p className="get-started-subtitle">
            One last step — set up your account to access your picks.
          </p>
          <RegistrationForm
            sessionId={sessionId}
            prefillEmail={customerEmail}
          />
        </>
      )}

      {status === "error" && (
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
      )}
    </>
  );
}

export default function GetStartedCompletePage() {
  return (
    <main className="get-started-page">
      <div className="get-started-wrapper">
        <Suspense
          fallback={
            <div className="get-started-status">
              <div className="get-started-spinner" />
              <p>Verifying your payment...</p>
            </div>
          }
        >
          <CompleteFlow />
        </Suspense>
      </div>
    </main>
  );
}

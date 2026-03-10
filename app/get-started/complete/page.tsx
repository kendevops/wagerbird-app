"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { APP_URL } from "@/lib/constants";

type Status = "loading" | "complete" | "open" | "error";

export default function GetStartedCompletePage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    fetch(`/api/auth/checkout-status?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data?.status === "complete") {
          setStatus("complete");
        } else if (data.data?.status === "open") {
          setStatus("open");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

  return (
    <main className="get-started-page">
      <div className="get-started-wrapper get-started-complete">
        {status === "loading" && (
          <div className="get-started-status">
            <div className="get-started-spinner" />
            <p>Verifying your payment...</p>
          </div>
        )}

        {status === "complete" && (
          <div className="get-started-status">
            <div className="get-started-success-icon">&#10003;</div>
            <h1 className="get-started-title">You&rsquo;re All Set!</h1>
            <p className="get-started-subtitle">
              Your account has been created and your points are ready to use.
            </p>
            <a href={`${APP_URL}/dashboard`} className="get-started-submit">
              Go to Dashboard
            </a>
          </div>
        )}

        {status === "open" && (
          <div className="get-started-status">
            <h1 className="get-started-title">Payment Incomplete</h1>
            <p className="get-started-subtitle">
              Your payment was not completed. Please try again.
            </p>
            <a href="/get-started" className="get-started-submit">
              Try Again
            </a>
          </div>
        )}

        {status === "error" && (
          <div className="get-started-status">
            <h1 className="get-started-title">Something Went Wrong</h1>
            <p className="get-started-subtitle">
              We couldn&rsquo;t verify your payment. If you were charged, your
              points will be credited shortly.
            </p>
            <a href={`${APP_URL}/dashboard`} className="get-started-submit">
              Go to Dashboard
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

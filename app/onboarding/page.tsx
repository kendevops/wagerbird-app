"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────

interface Option {
  id: string;
  label: string;
  sublabel?: string;
}

interface Question {
  id: number;
  eyebrow: string;
  headingWhite: string;
  headingYellow: string;
  description: string;
  multiSelect?: boolean;
  options: Option[];
}

// ── Data ───────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 1,
    eyebrow: "// QUESTION 01 OF 04",
    headingWhite: "HOW LONG HAVE YOU",
    headingYellow: "BEEN BETTING?",
    description:
      "This helps us calibrate the signal explanations and context we show you.",
    options: [
      { id: "just-starting", label: "JUST STARTING OUT", sublabel: "Less than 6 months" },
      { id: "getting-footing", label: "GETTING MY FOOTING", sublabel: "6 months – 2 years" },
      { id: "few-years", label: "A FEW YEARS IN", sublabel: "2 – 5 years" },
      { id: "long-time", label: "LONG-TIME BETTOR", sublabel: "5+ years" },
    ],
  },
  {
    id: 2,
    eyebrow: "// QUESTION 02 OF 04",
    headingWhite: "WHAT'S YOUR AVERAGE",
    headingYellow: "MONTHLY BANKROLL?",
    description:
      "Approximate is fine. We use this to personalize unit sizing recommendations.",
    options: [
      { id: "under-500", label: "UNDER $500", sublabel: "Casual / learning" },
      { id: "500-2000", label: "$500 - $2,000", sublabel: "Steady player" },
      { id: "2000-10000", label: "$2,000 - $10,000", sublabel: "Serious bettor" },
      { id: "just-starting-vol", label: "JUST STARTING OUT", sublabel: "High volume" },
    ],
  },
  {
    id: 3,
    eyebrow: "// QUESTION 03 OF 04",
    headingWhite: "WHICH SPORTS ARE YOU",
    headingYellow: "MOST ACTIVE IN?",
    description: "Select all that apply. We'll weight your Terminal feed accordingly.",
    multiSelect: true,
    options: [
      { id: "nfl", label: "NFL" },
      { id: "nba", label: "NBA" },
      { id: "mlb", label: "MLB" },
      { id: "ncaaf", label: "NCAAF", sublabel: "College Football" },
      { id: "ncaab", label: "NCAAB", sublabel: "College Basketball" },
      { id: "nhl", label: "NHL" },
    ],
  },
  {
    id: 4,
    eyebrow: "// QUESTION 04 OF 04",
    headingWhite: "WHAT'S YOUR PRIMARY",
    headingYellow: "BETTING GOAL?",
    description:
      "Approximate is fine. We use this to personalize unit sizing recommendations.",
    options: [
      { id: "beat-books", label: "BEAT THE BOOKS", sublabel: "Sharp, long-term edge" },
      { id: "consistent-profit", label: "CONSISTENT PROFIT", sublabel: "Steady monthly returns" },
      { id: "recreational", label: "RECREATIONAL FUN", sublabel: "Engagement over grind" },
      { id: "track-learn", label: "TRACK AND LEARN", sublabel: "Data-driven improvement" },
    ],
  },
];

const TOTAL_STEPS = QUESTIONS.length;

// ── WagerBird Logo SVG ─────────────────────────────────────────────────────

function WagerbirdLogo() {
  return (
    <svg width="177" height="28" viewBox="0 0 177 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_ob)">
        <mask id="mask0_ob" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="177" height="28">
          <path d="M176.296 0H0V28H176.296V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_ob)">
          <path d="M7.13021 3.23453L0 10.3647L12.1239 7.73649L11.5866 16.3187L19.905 15.5176L17.2109 27.5756L24.341 20.4454C27.7358 17.0507 27.7358 11.5467 24.341 8.15192L19.4237 3.23453C16.029 -0.160209 10.525 -0.16021 7.13021 3.23453Z" fill="#205FFF" />
          <path d="M12.6624 15.1592L9.34325 27.5755L0.246094 18.4784L12.6624 15.1592Z" fill="#205FFF" />
          <path d="M26.4301 1.39062L23.1109 13.807L14.0137 4.70986L26.4301 1.39062Z" fill="#205FFF" />
          <path d="M162.445 20.2013H156.594V8.06299H162.492C164.153 8.06299 165.582 8.306 166.78 8.79199C167.978 9.27405 168.899 9.9675 169.544 10.8723C170.194 11.7771 170.519 12.8598 170.519 14.1203C170.519 15.3847 170.194 16.4713 169.544 17.3801C168.899 18.2889 167.972 18.9863 166.764 19.4723C165.56 19.9583 164.121 20.2013 162.445 20.2013ZM160.083 18.0024H162.3C163.33 18.0024 164.198 17.8681 164.902 17.5994C165.612 17.3267 166.143 16.9059 166.497 16.3369C166.857 15.764 167.038 15.0251 167.038 14.1203C167.038 13.2233 166.857 12.4904 166.497 11.9214C166.143 11.3524 165.614 10.9336 164.911 10.6649C164.207 10.3962 163.339 10.2619 162.307 10.2619H160.083V18.0024Z" fill="#FCFCFC" />
          <path d="M141.99 20.2013V8.06299H148.502C149.748 8.06299 150.812 8.22696 151.694 8.55492C152.579 8.87893 153.255 9.33925 153.716 9.93589C154.184 10.5286 154.417 11.226 154.417 12.0281C154.417 12.8341 154.181 13.5276 153.708 14.1084C153.235 14.6853 152.55 15.1278 151.653 15.436C150.761 15.7442 149.681 15.8983 148.414 15.8983H144.054V13.8358H147.849C148.515 13.8358 149.069 13.7686 149.51 13.6343C149.949 13.5 150.277 13.2984 150.493 13.0298C150.713 12.7611 150.823 12.4272 150.823 12.0281C150.823 11.625 150.713 11.2853 150.493 11.0087C150.277 10.732 149.947 10.5226 149.501 10.3804C149.061 10.2342 148.505 10.1611 147.833 10.1611H145.48V20.2013H141.99ZM150.904 14.6774L155.005 20.2013H151.153L147.14 14.6774H150.904Z" fill="#FCFCFC" />
          <path d="M139.222 8.06299V20.2013H135.732V8.06299H139.222Z" fill="#FCFCFC" />
          <path d="M120.779 20.2013V8.06299H127.388C128.603 8.06299 129.615 8.19536 130.426 8.46009C131.238 8.72483 131.848 9.0923 132.255 9.56249C132.664 10.0287 132.868 10.5661 132.868 11.1746C132.868 11.6488 132.739 12.0657 132.481 12.4252C132.223 12.7808 131.868 13.0732 131.417 13.3024C130.971 13.5276 130.461 13.6876 129.887 13.7825V13.901C130.515 13.9207 131.103 14.0512 131.652 14.2922C132.204 14.5332 132.653 14.871 132.997 15.3057C133.341 15.7363 133.513 16.25 133.513 16.8467C133.513 17.4907 133.295 18.0656 132.86 18.5714C132.43 19.0732 131.794 19.4703 130.95 19.7626C130.106 20.0551 129.067 20.2013 127.831 20.2013H120.779ZM124.269 18.1032H127.114C128.086 18.1032 128.796 17.9668 129.242 17.6942C129.687 17.4176 129.91 17.0502 129.91 16.5918C129.91 16.2559 129.8 15.9596 129.58 15.7027C129.36 15.446 129.046 15.2444 128.637 15.0983C128.235 14.952 127.753 14.8789 127.194 14.8789H124.269V18.1032ZM124.269 13.1423H126.856C127.334 13.1423 127.759 13.0811 128.13 12.9586C128.505 12.8321 128.801 12.6544 129.015 12.4252C129.236 12.196 129.346 11.9214 129.346 11.6014C129.346 11.1628 129.134 10.8091 128.71 10.5405C128.291 10.2717 127.694 10.1374 126.921 10.1374H124.269V13.1423Z" fill="#FCFCFC" />
          <path d="M106.176 20.2013V8.06299H112.687C113.934 8.06299 114.998 8.22696 115.879 8.55492C116.766 8.87893 117.44 9.33925 117.902 9.93589C118.369 10.5286 118.603 11.226 118.603 12.0281C118.603 12.8341 118.366 13.5276 117.894 14.1084C117.421 14.6853 116.736 15.1278 115.839 15.436C114.947 15.7442 113.867 15.8983 112.599 15.8983H108.239V13.8358H112.035C112.701 13.8358 113.255 13.7686 113.695 13.6343C114.136 13.5 114.464 13.2984 114.678 13.0298C114.898 12.7611 115.009 12.4272 115.009 12.0281C115.009 11.625 114.898 11.2853 114.678 11.0087C114.464 10.732 114.133 10.5226 113.687 10.3804C113.246 10.2342 112.69 10.1611 112.018 10.1611H109.665V20.2013H106.176ZM115.089 14.6774L119.192 20.2013H115.339L111.326 14.6774H115.089Z" fill="#FCFCFC" />
          <path d="M92.6152 20.2013V8.06299H103.737V10.1789H96.1048V13.0713H103.164V15.1871H96.1048V18.0853H103.769V20.2013H92.6152Z" fill="#FCFCFC" />
          <path d="M86.6363 11.9865C86.5234 11.6981 86.365 11.4432 86.1608 11.222C85.9567 10.9967 85.7069 10.8071 85.4113 10.653C85.1212 10.4949 84.7881 10.3744 84.412 10.2914C84.0414 10.2085 83.6304 10.167 83.1791 10.167C82.3356 10.167 81.5942 10.3211 80.9548 10.6293C80.3209 10.9374 79.8266 11.3859 79.472 11.9747C79.1174 12.5595 78.9401 13.2747 78.9401 14.1202C78.9401 14.9658 79.1147 15.6849 79.4639 16.2777C79.8132 16.8703 80.3074 17.3228 80.9468 17.6349C81.5861 17.943 82.3409 18.0971 83.2113 18.0971C84.001 18.0971 84.6753 17.9945 85.2341 17.7889C85.7982 17.5795 86.228 17.2852 86.5234 16.9059C86.8244 16.5265 86.9747 16.0781 86.9747 15.5604L87.684 15.6375H83.4289V13.7054H90.3353V15.2345C90.3353 16.3013 90.029 17.218 89.4166 17.9846C88.8041 18.7471 87.9607 19.3359 86.8861 19.7508C85.8116 20.1617 84.5813 20.3672 83.1952 20.3672C81.6479 20.3672 80.2887 20.1162 79.1174 19.6144C77.9462 19.1087 77.0329 18.3915 76.3775 17.463C75.7274 16.5305 75.4023 15.4242 75.4023 14.1439C75.4023 13.1601 75.5958 12.2829 75.9826 11.5124C76.3748 10.7379 76.9227 10.082 77.6266 9.54466C78.3303 9.00729 79.1497 8.59833 80.0845 8.31779C81.0192 8.03724 82.032 7.89697 83.1227 7.89697C84.0575 7.89697 84.9278 7.99773 85.7337 8.19925C86.5396 8.39681 87.2541 8.67735 87.8774 9.04087C88.5059 9.40439 89.0191 9.83705 89.4166 10.3389C89.8142 10.8367 90.0694 11.3859 90.1822 11.9865H86.6363Z" fill="#FCFCFC" />
          <path d="M62.3369 20.2013H58.5977L64.2952 8.06299H68.792L74.4815 20.2013H70.7423L66.6081 10.8368H66.4791L62.3369 20.2013ZM62.1033 15.4301H70.9357V17.4335H62.1033V15.4301Z" fill="#FCFCFC" />
          <path d="M41.3553 20.2013L36.6328 8.06299H40.4446L43.1766 16.497H43.3136L46.3276 8.06299H49.5914L52.5974 16.5147H52.7424L55.4743 8.06299H59.2862L54.5637 20.2013H51.1628L48.0199 12.2652H47.891L44.7561 20.2013H41.3553Z" fill="#FCFCFC" />
          <path d="M173.384 9.58351C172.953 9.58351 172.566 9.49028 172.222 9.30382C171.885 9.11018 171.616 8.84483 171.415 8.50776C171.221 8.1707 171.125 7.78343 171.125 7.34595C171.125 6.90849 171.221 6.52122 171.415 6.18415C171.616 5.84708 171.885 5.58531 172.222 5.39885C172.566 5.20522 172.953 5.1084 173.384 5.1084C173.814 5.1084 174.198 5.20522 174.535 5.39885C174.879 5.58531 175.148 5.84708 175.342 6.18415C175.543 6.52122 175.642 6.90849 175.642 7.34595C175.642 7.78343 175.543 8.1707 175.342 8.50776C175.148 8.84483 174.879 9.11018 174.535 9.30382C174.198 9.49028 173.814 9.58351 173.384 9.58351ZM173.384 9.1317C173.922 9.1317 174.352 8.97033 174.675 8.64761C175.005 8.31772 175.169 7.88383 175.169 7.34595C175.169 6.80808 175.005 6.37778 174.675 6.05506C174.352 5.72516 173.922 5.56021 173.384 5.56021C172.845 5.56021 172.412 5.72516 172.082 6.05506C171.76 6.37778 171.598 6.80808 171.598 7.34595C171.598 7.88383 171.76 8.31772 172.082 8.64761C172.412 8.97033 172.845 9.1317 173.384 9.1317ZM172.609 8.51852V6.13036H173.524C173.789 6.13036 173.989 6.1949 174.126 6.32399C174.262 6.45308 174.33 6.60369 174.33 6.77581C174.33 6.91207 174.294 7.03399 174.223 7.14156C174.158 7.24197 174.05 7.32085 173.9 7.37822V7.48581C174.021 7.49297 174.108 7.53242 174.158 7.60413C174.215 7.67585 174.244 7.77267 174.244 7.89458V8.51852H173.792V7.87307C173.792 7.72247 173.718 7.64717 173.566 7.64717H173.061V8.51852H172.609ZM173.061 7.23838H173.524C173.645 7.23838 173.735 7.20252 173.792 7.13081C173.849 7.05909 173.878 6.97661 173.878 6.88338C173.878 6.78297 173.849 6.70051 173.792 6.63596C173.735 6.57142 173.645 6.53915 173.524 6.53915H173.061V7.23838Z" fill="white" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_ob">
          <rect width="176.296" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [userUuid, setUserUuid] = useState("");
  const [loginUrl, setLoginUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setUserUuid(sessionStorage.getItem("onboarding_user_uuid") ?? "");
    setLoginUrl(sessionStorage.getItem("onboarding_login_url") ?? "");
  }, []);

  const question = QUESTIONS[currentStep - 1];
  const selectedForStep = answers[currentStep] ?? [];

  function handleSelect(optionId: string) {
    if (question.multiSelect) {
      setAnswers((prev) => {
        const current = prev[currentStep] ?? [];
        const exists = current.includes(optionId);
        return {
          ...prev,
          [currentStep]: exists
            ? current.filter((id) => id !== optionId)
            : [...current, optionId],
        };
      });
    } else {
      setAnswers((prev) => ({ ...prev, [currentStep]: [optionId] }));
    }
  }

  async function submitOnboarding() {
    setSubmitting(true);
    try {
      if (userUuid) {
        await fetch("/api/onboarding", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userUuid,
            bettingExperience: answers[1]?.[0] ?? null,
            monthlyBankroll: answers[2]?.[0] ?? null,
            activeSports: answers[3] ?? [],
            bettingGoal: answers[4]?.[0] ?? null,
          }),
        });
      }
    } catch (err) {
      console.error("Failed to save onboarding:", err);
    }
    sessionStorage.removeItem("onboarding_user_uuid");
    sessionStorage.removeItem("onboarding_login_url");
    setSubmitting(false);
    setIsComplete(true);
  }

  function handleNext() {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1);
    } else {
      submitOnboarding();
    }
  }

  function handleBack() {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  }

  const progressPct = (currentStep / TOTAL_STEPS) * 100;

  // ── Completion screen ────────────────────────────────────────────────────
  if (isComplete) {
    return (
      <div className="ob-completion-page">
        <nav className="ob-completion-nav">
          <WagerbirdLogo />
        </nav>
        <div className="ob-completion-divider" />
        <div className="ob-completion-body">
          <div className="ob-success-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#E1F424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="ob-completion-heading">
            <span className="ob-heading-white">YOU&apos;RE ALL </span>
            <span className="ob-heading-yellow-italic">SET.</span>
          </h1>
          <p className="ob-completion-description">
            Your Terminal is ready. We&apos;ve tuned your feed based on your
            answers — you can update preferences anytime in your profile.
          </p>
          <a href={loginUrl || "/"} className="ob-browse-btn">
            BROWSE LIVE PICKS ↓
          </a>
        </div>
      </div>
    );
  }

  // ── Question screen ──────────────────────────────────────────────────────
  return (
    <div className="ob-page">
      {/* Nav */}
      <nav className="ob-nav">
        <WagerbirdLogo />
        <button className="ob-skip-btn" onClick={() => submitOnboarding()}>
          SKIP FOR NOW
        </button>
      </nav>

      {/* Progress bar */}
      <div className="ob-progress-track">
        <div
          className="ob-progress-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Step dots */}
      <div className="ob-step-dots">
        {QUESTIONS.map((q) => (
          <div
            key={q.id}
            className={`ob-dot ${q.id === currentStep ? "ob-dot--active" : ""}`}
          />
        ))}
      </div>

      {/* Question content */}
      <main className="ob-main">
        <div className="ob-content">
          <p className="ob-eyebrow">{question.eyebrow}</p>
          <h1 className="ob-question-heading">
            <span className="ob-heading-white">{question.headingWhite}<br /></span>
            <span className="ob-heading-yellow-italic">{question.headingYellow}</span>
          </h1>
          <p className="ob-question-description">{question.description}</p>

          {/* Options grid */}
          <div className={`ob-options-grid ${question.multiSelect ? "ob-options-grid--3col" : ""}`}>
            {question.options.map((opt) => {
              const isSelected = selectedForStep.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  className={`ob-option-card ${isSelected ? "ob-option-card--selected" : ""}`}
                  onClick={() => handleSelect(opt.id)}
                >
                  {isSelected && <span className="ob-option-dot" />}
                  <span className={`ob-option-label ${isSelected ? "ob-option-label--selected" : ""}`}>
                    {opt.label}
                  </span>
                  {opt.sublabel && (
                    <span className="ob-option-sublabel">{opt.sublabel}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom navigation */}
      <footer className="ob-footer">
        <div className="ob-footer-left">
          {currentStep > 1 && (
            <button className="ob-back-btn" onClick={handleBack}>
              ← BACK
            </button>
          )}
        </div>
        <div className="ob-footer-center">
          <span className="ob-step-counter">
            {currentStep} / {TOTAL_STEPS}
          </span>
        </div>
        <div className="ob-footer-right">
          <button
            className="ob-next-btn"
            onClick={handleNext}
            disabled={selectedForStep.length === 0 || submitting}
          >
            {submitting ? "SAVING..." : currentStep < TOTAL_STEPS ? "NEXT →" : "FINISH →"}
          </button>
        </div>
      </footer>
    </div>
  );
}

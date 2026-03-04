"use client";

import Hotsheet from "@/components/Hotsheet";
import HotsheetFeatures from "@/components/HotsheetFeatures";
import ProcessSection from "@/components/ProcessSection";
import EmailCapture from "@/components/EmailCapture";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

const hotsheetFaqs = [
  {
    question: "What is the WagerBird Hotsheet?",
    answer: "The Hotsheet is our premier daily email and SMS product. It's a curated list of the day's highest-conviction plays, delivered directly to your device so you never miss a sharp move.",
  },
  {
    question: "How often do I receive it?",
    answer: "Every single day. The Hotsheet goes out by 12:00 PM EST daily to ensure you have enough time to shop for lines and place your wagers.",
  },
  {
    question: "How much does it cost?",
    answer: "The Hotsheet is a separate subscription product priced at roughly $2 per day ($59/month). It provides a full season's worth of value for a fraction of the cost of typical tout services.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no long-term commitments. You can manage your subscription and cancel anytime through your account settings with just a couple of clicks.",
  },
  {
    question: "What's the difference between Hotsheet and Terminal?",
    answer: "The Terminal is for active traders who want to unlock specific, individual signals. The Hotsheet is for bettors who want a daily 'cheat sheet' of the top picks delivered to them automatically.",
  },
];

export default function HotsheetPage() {
  return (
    <main>
      {/* Hero — the MagicBento hotsheet section */}
      <Hotsheet />

      {/* What You Get feature cards */}
      <HotsheetFeatures />

      <div id="process">
        <ProcessSection
          label="// Simple Setup"
          heading="Simple Steps. To The Sheet."
          description="Getting started with the Hotsheet is seamless. Subscribe once, receive daily, and bet with confidence every single morning."
        />
      </div>

      <EmailCapture
        title={
          <>
            Not Ready?<br />
            <em className="email-capture-heading-accent">Get Free Daily Picks.</em>
          </>
        }
      />

      <Faq
        title={
          <>
            Hotsheet
            <br />
            <em className="faq-heading-accent">Knowledge.</em>
          </>
        }
        items={hotsheetFaqs}
      />

      <CtaBanner
        watermark="WIN"
        title={
          <>
            Stop Guessing.<br />
            Start Winning.
          </>
        }
        subtitle="Join 12,000+ traders getting the daily edge in their inbox."
        ctaLabel="Subscribe for $59/mo →"
        ctaHref="#"
      />
    </main>
  );
}

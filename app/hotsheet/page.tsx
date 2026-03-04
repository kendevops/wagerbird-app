"use client";

import Hero from "@/components/Hero";
import Hotsheet from "@/components/Hotsheet";
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
      <Hero
        tickerText="Daily Hotsheet Live — The Cheat Code"
        badgeText="THE HOTSHEET · DAILY CHEAT SHEET"
        title={
          <>
            The Daily<br />
            <em className="text-brand-yellow italic font-bold">Cheat Sheet.</em><br />
            Built To Hit.
          </>
        }
        description="Don't waste hours scanning markets. We deliver the day's highest-conviction signals directly to your phone. Simple, scored, and sharp."
        primaryCtaLabel="Get Hotsheet Now →"
        primaryCtaHref="#hotsheet-main"
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="#process"
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/bc93b8c5e939c79c4dc82e9fb08dc657d35b4b67"
        stats={[
          { value: "5-7", label: "Daily Plays" },
          { value: "Daily", label: "Frequency" },
          { value: "$2", label: "Cost Per Day" },
        ]}
      />

      <div id="hotsheet-main">
        <Hotsheet
          title={
            <>
              Daily<br />
              <em className="hotsheet-heading-accent">Insight.</em>
            </>
          }
          videoSrc="https://cdn.builder.io/o/assets%2F0d74d6500f4d4101a69c1e5625bc65eb%2F691c4d6e898a44b0910ee280b41889fc?alt=media&token=b46e7fbb-e8c7-4839-9d62-4b9f0667a724&apiKey=0d74d6500f4d4101a69c1e5625bc65eb"
        />
      </div>

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
        ctaHref="#hotsheet-main"
      />
    </main>
  );
}

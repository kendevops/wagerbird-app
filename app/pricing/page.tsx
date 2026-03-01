"use client";

import Hero from "@/components/Hero";
import Packs from "@/components/Packs";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

/* ── Pricing How It Works step icons ── */
const IconBuyPoints = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
    <path d="M12 6V8M12 16V18M9 9.5C9 8.12 10.34 7 12 7C13.66 7 15 8.12 15 9.5C15 10.88 13.66 12 12 12C10.34 12 9 13.12 9 14.5C9 15.88 10.34 17 12 17C13.66 17 15 15.88 15 14.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconBrowseSignals = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M7 8h10M7 12h7M7 16h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconUnlockPick = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill="white"/>
  </svg>
);

const pricingSteps = [
  {
    number: "01",
    icon: <IconBuyPoints />,
    title: "Buy a Points Pack",
    description:
      "Choose the pack that fits your season — Starter, Core, or Advanced. Points never expire. No subscription, no lock-in, no pressure.",
  },
  {
    number: "02",
    icon: <IconBrowseSignals />,
    title: "Browse the Signal Feed",
    description:
      "Open the Terminal and filter signals by sport, confidence score, or game time. Every pick shows its cost in points before you unlock it.",
  },
  {
    number: "03",
    icon: <IconUnlockPick />,
    title: "Unlock & Place Your Pick",
    description:
      "Spend points to unlock any signal. The cost equals its confidence score — so a 90-rated pick costs 90 points. Transparent. Always.",
  },
];

const pricingFaqs = [
  {
    question: "Do my points expire?",
    answer:
      "No. WagerBird points never expire. Once you purchase a pack, the points stay in your account until you use them — no time pressure, no hidden deadlines.",
  },
  {
    question: "How does confidence scoring work?",
    answer:
      "Each signal is scored 1–100 based on our model's conviction. A score of 85+ means very high confidence. The cost to unlock a signal equals its confidence score in points, so high-conviction picks cost more but signal stronger conviction.",
  },
  {
    question: "Can I use points on any sport?",
    answer:
      "Yes. Points work across all sports we cover — NFL, NBA, MLB, NHL, and more. There's no sport-specific pool; whatever's in your account is available for any signal.",
  },
  {
    question: "What happens if I run out of points?",
    answer:
      "You can top up anytime by purchasing a new pack. Free daily signals are always available at no cost, so you're never completely locked out.",
  },
  {
    question: "Is there a subscription option?",
    answer:
      "No subscription required for signal packs — it's purely pay-as-you-go. The Hotsheet is a separate daily email product available on a rolling basis.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <Hero
        tickerText="Points Packs — Pay As You Go · No Subscription Required"
        badgeText="POINTS PACKS · PAY AS YOU GO"
        title={
          <>
            Unlock<br />
            Real <em className="text-brand-yellow italic font-bold">Picks.</em><br />
            Any Time.
          </>
        }
        description="No subscription. No commitments. Points never expire. Buy a pack, unlock confidence-scored signals whenever you need them."
        primaryCtaLabel="See Packs →"
        primaryCtaHref="#packs"
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="#how-it-works"
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/bc93b8c5e939c79c4dc82e9fb08dc657d35b4b67"
        stats={[
          { value: "3", label: "Pack Sizes" },
          { value: "∞", label: "Points Never Expire" },
          { value: "68%", label: "Season Win Rate" },
        ]}
      />

      <div id="packs">
        <Packs />
      </div>

      <div id="how-it-works">
        <HowItWorks
          label="// How It Works"
          title={
            <>
              Three Steps.
              <br />
              <em className="hiw-heading-accent">Instant Edge.</em>
            </>
          }
          steps={pricingSteps}
        />
      </div>

      <Faq
        title={
          <>
            Common
            <br />
            <em className="faq-heading-accent">Questions.</em>
          </>
        }
        items={pricingFaqs}
      />

      <CtaBanner
        watermark="WIN"
        title={
          <>
            Stop Guessing.
            <br />
            Start Winning.
          </>
        }
        subtitle="Join 12,000+ bettors who trade with confidence-scored signals."
        ctaLabel="Buy a Pack Now →"
        ctaHref="#packs"
      />
    </main>
  );
}

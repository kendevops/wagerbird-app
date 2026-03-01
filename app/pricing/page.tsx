"use client";

import Hero from "@/components/Hero";
import Packs from "@/components/Packs";
import ValueStrip from "@/components/ValueStrip";
import ProcessSection from "@/components/ProcessSection";
import AccessModels from "@/components/AccessModels";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

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

      <ValueStrip />

      <ProcessSection />

      <AccessModels />

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

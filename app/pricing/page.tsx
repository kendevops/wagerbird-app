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
        titleText="Unlock Real Picks. Any Time."
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
        videoUrl="https://cdn.builder.io/o/assets%2F72558899b84e49bc881d9b8ba6c19012%2Facd816a4a4224fd3a5e1d21181806042?alt=media&token=47fac893-2250-40d5-8e0f-5a4ae82a910a&apiKey=72558899b84e49bc881d9b8ba6c19012"
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

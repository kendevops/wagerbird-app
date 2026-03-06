import type { PortableTextBlock } from "@portabletext/types";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Signals from "@/components/Signals";
import Packs from "@/components/Packs";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import ValueStrip from "@/components/ValueStrip";
import Hotsheet from "@/components/Hotsheet";
import HotsheetPromo from "@/components/HotsheetPromo";
import HotsheetFeatures from "@/components/HotsheetFeatures";
import HotsheetPricing from "@/components/HotsheetPricing";
import HotsheetWhy from "@/components/HotsheetWhy";
import ProofSection from "@/components/ProofSection";
import ProcessSection from "@/components/ProcessSection";
import EmailCapture from "@/components/EmailCapture";
import SportsbooksHero from "@/components/SportsbooksHero";
import SportsbooksSection from "@/components/SportsbooksSection";
import AccessModels from "@/components/AccessModels";
import MapSection from "@/components/MapSection";
import PortableTextRenderer from "@/components/PortableTextRenderer";

type Block = {
  _type: string;
  _key: string;
  [key: string]: unknown;
};

function RichTitle({
  value,
  accentClass,
}: {
  value: PortableTextBlock[] | null | undefined;
  accentClass?: string;
}) {
  if (!value?.length) return null;
  return (
    <PortableTextRenderer value={value} accentClassName={accentClass} />
  );
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null;

  return (
    <main>
      {blocks.map((block) => {
        switch (block._type) {
          case "heroBlock":
            return (
              <Hero
                key={block._key}
                tickerText={block.tickerText as string | undefined}
                badgeText={block.badgeText as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="text-brand-yellow italic font-black not-italic"
                    />
                  ) : undefined
                }
                description={(block.description as string) ?? ""}
                stats={
                  Array.isArray(block.stats)
                    ? (block.stats as { value: string; label: string }[])
                    : undefined
                }
                primaryCtaLabel={block.primaryCtaLabel as string | undefined}
                primaryCtaHref={block.primaryCtaHref as string | undefined}
                secondaryCtaLabel={block.secondaryCtaLabel as string | undefined}
                secondaryCtaHref={block.secondaryCtaHref as string | undefined}
                imageUrl={block.imageUrl as string | undefined}
                videoUrl={block.videoUrl as string | undefined}
              />
            );

          case "tickerBlock":
            return (
              <Ticker
                key={block._key}
                items={
                  Array.isArray(block.items) && block.items.length > 0
                    ? (block.items as { sport: string; matchup: string; confidence: number }[])
                    : undefined
                }
                variant={(block.variant as "yellow" | "dark") ?? undefined}
              />
            );

          case "signalsBlock":
            return (
              <Signals
                key={block._key}
                label={block.label as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="signals-heading-accent"
                    />
                  ) : undefined
                }
                description={block.description as string | undefined}
                ctaLabel={block.ctaLabel as string | undefined}
                ctaHref={block.ctaHref as string | undefined}
                items={block.items as Parameters<typeof Signals>[0]["items"]}
                footerText={block.footerText as string | undefined}
              />
            );

          case "packsBlock":
            return (
              <Packs
                key={block._key}
                label={block.label as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="packs-heading-accent"
                    />
                  ) : undefined
                }
                description={block.description as string | undefined}
                packs={block.packs as Parameters<typeof Packs>[0]["packs"]}
                footnote={
                  block.footnote ? (
                    <span>{block.footnote as string}</span>
                  ) : undefined
                }
              />
            );

          case "howItWorksBlock":
            return (
              <HowItWorks
                key={block._key}
                label={block.label as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="hiw-heading-accent"
                    />
                  ) : undefined
                }
                steps={block.steps as Parameters<typeof HowItWorks>[0]["steps"]}
                stepVariant={
                  (block.stepVariant as "badge" | "card") ?? "badge"
                }
              />
            );

          case "faqBlock":
            return (
              <Faq
                key={block._key}
                label={block.label as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="faq-heading-accent"
                    />
                  ) : undefined
                }
                items={
                  block.items as { question: string; answer: string }[] | undefined
                }
              />
            );

          case "ctaBannerBlock":
            return (
              <CtaBanner
                key={block._key}
                watermark={block.watermark as string | undefined}
                title={
                  block.title ? (
                    <RichTitle value={block.title as PortableTextBlock[]} />
                  ) : undefined
                }
                subtitle={block.subtitle as string | undefined}
                ctaLabel={block.ctaLabel as string | undefined}
                ctaHref={block.ctaHref as string | undefined}
              />
            );

          case "valueStripBlock":
            return (
              <ValueStrip
                key={block._key}
                items={
                  block.items as Parameters<typeof ValueStrip>[0]["items"]
                }
              />
            );

          case "hotsheetBlock":
            return (
              <Hotsheet
                key={block._key}
                ctaLabel={block.ctaLabel as string | undefined}
                ctaHref={block.ctaHref as string | undefined}
              />
            );

          case "hotsheetPromoBlock":
            return (
              <HotsheetPromo
                key={block._key}
                ctaLabel={block.ctaLabel as string | undefined}
                ctaHref={block.ctaHref as string | undefined}
              />
            );

          case "hotsheetFeaturesBlock":
            return <HotsheetFeatures key={block._key} />;

          case "hotsheetPricingBlock":
            return <HotsheetPricing key={block._key} />;

          case "hotsheetWhyBlock":
            return <HotsheetWhy key={block._key} />;

          case "proofSectionBlock":
            return <ProofSection key={block._key} />;

          case "processSectionBlock":
            return (
              <ProcessSection
                key={block._key}
                label={block.label as string | undefined}
                heading={block.heading as string | undefined}
                description={block.description as string | undefined}
                steps={
                  block.steps as Parameters<typeof ProcessSection>[0]["steps"]
                }
              />
            );

          case "emailCaptureBlock":
            return (
              <EmailCapture
                key={block._key}
                label={block.label as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="email-capture-heading-accent"
                    />
                  ) : undefined
                }
                subtitle={
                  block.subtitle ? (
                    <RichTitle value={block.subtitle as PortableTextBlock[]} />
                  ) : undefined
                }
                cardTitle={block.cardTitle as string | undefined}
                cardSubtitle={block.cardSubtitle as string | undefined}
                buttonLabel={block.buttonLabel as string | undefined}
                disclaimer={block.disclaimer as string | undefined}
              />
            );

          case "sportsbooksHeroBlock":
            return <SportsbooksHero key={block._key} />;

          case "sportsbooksSectionBlock":
            return (
              <SportsbooksSection
                key={block._key}
                label={block.label as string | undefined}
                title={
                  block.title ? (
                    <RichTitle
                      value={block.title as PortableTextBlock[]}
                      accentClass="sb-section-title-accent"
                    />
                  ) : undefined
                }
                description={block.description as string | undefined}
                sportsbooks={
                  block.sportsbooks as Parameters<
                    typeof SportsbooksSection
                  >[0]["sportsbooks"]
                }
                disclaimer={block.disclaimer as string | undefined}
              />
            );

          case "accessModelsBlock":
            return (
              <AccessModels
                key={block._key}
                label={block.label as string | undefined}
                heading={
                  block.heading ? (
                    <RichTitle value={block.heading as PortableTextBlock[]} />
                  ) : undefined
                }
                subtitle={block.subtitle as string | undefined}
                packsCtaLabel={block.packsCtaLabel as string | undefined}
                packsCtaHref={block.packsCtaHref as string | undefined}
                terminalCtaLabel={block.terminalCtaLabel as string | undefined}
                terminalCtaHref={block.terminalCtaHref as string | undefined}
              />
            );

          case "mapSectionBlock":
            return (
              <MapSection
                key={block._key}
                heading={block.heading as string | undefined}
                description={block.description as string | undefined}
                disclaimer={block.disclaimer as string | undefined}
              />
            );

          default:
            return null;
        }
      })}
    </main>
  );
}

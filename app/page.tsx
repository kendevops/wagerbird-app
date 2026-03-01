import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Signals from "@/components/Signals";
import Packs from "@/components/Packs";
import HowItWorks from "@/components/HowItWorks";
import Hotsheet from "@/components/Hotsheet";
import EmailCapture from "@/components/EmailCapture";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { getHomepageContent, urlFor } from "@/lib/sanity";

// Helper function to parse title with line breaks and highlight
function parseTitle(title: string, highlightWord: string, highlightClass: string) {
  const lines = title.split("|");
  return (
    <>
      {lines.map((line, index) => {
        const parts = line.split(highlightWord);
        if (parts.length > 1) {
          return (
            <span key={index}>
              {parts[0]}
              <em className={highlightClass}>{highlightWord}</em>
              {parts[1]}
              {index < lines.length - 1 && <br />}
            </span>
          );
        }
        return (
          <span key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}

export default async function Home() {
  const content = await getHomepageContent();

  // Parse hero title
  const heroTitle = content.hero ? (
    parseTitle(
      content.hero.title,
      content.hero.highlightWord,
      "text-brand-yellow italic font-bold not-italic"
    )
  ) : (
    <>
      Access<br />
      The <em className="text-brand-yellow italic font-bold not-italic">Edge.</em><br />
      Trade<br />
      The Game.
    </>
  );

  // Parse signals title
  const signalsTitle = content.signalsSection ? (
    parseTitle(
      content.signalsSection.title,
      content.signalsSection.highlightWord,
      "signals-heading-accent"
    )
  ) : (
    <>
      Every Signal.<br />
      Every Sport.<br />
      <em className="signals-heading-accent">Scored.</em>
    </>
  );

  // Parse packs title
  const packsTitle = content.packsSection ? (
    parseTitle(
      content.packsSection.title,
      content.packsSection.highlightWord,
      "packs-heading-accent"
    )
  ) : (
    <>
      Points Never Expire.<br />
      <em className="packs-heading-accent">Buy Once. Win Forever.</em>
    </>
  );

  // Parse how it works title
  const hiwTitle = content.howItWorksSection ? (
    parseTitle(
      content.howItWorksSection.title,
      content.howItWorksSection.highlightWord,
      "hiw-heading-accent"
    )
  ) : (
    <>
      Simple.<br />
      Transparent.<br />
      <em className="hiw-heading-accent">Profitable.</em>
    </>
  );

  // Parse hotsheet title
  const hotsheetTitle = content.hotsheetSection ? (
    parseTitle(
      content.hotsheetSection.title,
      content.hotsheetSection.highlightWord,
      "hotsheet-heading-accent"
    )
  ) : (
    <>
      The Cheat<br />
      Code. <em className="hotsheet-heading-accent">Built</em><br />
      To Hit.
    </>
  );

  // Parse email capture title
  const emailCaptureTitle = content.emailCaptureSection ? (
    parseTitle(
      content.emailCaptureSection.title,
      content.emailCaptureSection.highlightWord,
      "email-capture-heading-accent"
    )
  ) : (
    <>
      Today&rsquo;s Top Signals.<br />
      <em className="email-capture-heading-accent">Free, In Your Inbox.</em>
    </>
  );

  // Parse FAQ title
  const faqTitle = content.faqSection ? (
    parseTitle(
      content.faqSection.title,
      content.faqSection.highlightWord,
      "faq-heading-accent"
    )
  ) : (
    <>
      Common<br />
      <em className="faq-heading-accent">Questions.</em>
    </>
  );

  // Parse CTA banner title
  const ctaTitle = content.ctaBannerSection ? (
    <>
      {content.ctaBannerSection.title.split("|").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  ) : (
    <>
      Stop Guessing.<br />
      Start Winning.
    </>
  );

  // Map signals content to component props
  const signalItems = content.signals.map((signal) => ({
    matchup: signal.matchup,
    sport: signal.sport,
    time: signal.time,
    betType: signal.betType,
    confidence: signal.confidence,
    locked: signal.locked,
  }));

  // Map packs content to component props
  const packItems = content.packs.map((pack) => ({
    name: pack.name,
    points: pack.points,
    goodFor: pack.goodFor,
    price: pack.price,
    ctaLabel: pack.ctaLabel,
    popular: pack.popular,
  }));

  // Map how it works steps to component props
  const hiwSteps = content.howItWorksSteps.map((step) => ({
    number: step.number,
    title: step.title,
    description: step.description,
  }));

  // Map FAQ items to component props
  const faqItems = content.faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <main>
      <Hero
        tickerText={content.hero?.tickerText}
        badgeText={content.hero?.badgeText}
        title={heroTitle}
        description={content.hero?.description || "Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side."}
        primaryCtaLabel={content.hero?.primaryCtaLabel}
        primaryCtaHref={content.hero?.primaryCtaHref}
        secondaryCtaLabel={content.hero?.secondaryCtaLabel}
        secondaryCtaHref={content.hero?.secondaryCtaHref}
        imageUrl={content.hero?.heroImage ? urlFor(content.hero.heroImage).url() : undefined}
        stats={content.hero?.stats}
      />
      <Ticker />
      <Signals
        label={content.signalsSection?.label}
        title={signalsTitle}
        description={content.signalsSection?.description}
        ctaLabel={content.signalsSection?.ctaLabel}
        ctaHref={content.signalsSection?.ctaHref}
        items={signalItems.length > 0 ? signalItems : undefined}
        footerText={content.signalsSection?.footerText}
      />
      <Packs
        label={content.packsSection?.label}
        title={packsTitle}
        description={content.packsSection?.description}
        packs={packItems.length > 0 ? packItems : undefined}
        footnote={content.packsSection?.footnote ? (
          <span dangerouslySetInnerHTML={{ __html: content.packsSection.footnote.replace(/WAGERVISION/g, '<strong class="packs-footnote-brand">WAGERVISION</strong>').replace(/Picks/g, '<strong>Picks</strong>') }} />
        ) : undefined}
      />
      <HowItWorks
        label={content.howItWorksSection?.label}
        title={hiwTitle}
        steps={hiwSteps.length > 0 ? hiwSteps : undefined}
      />
      <Hotsheet
        label={content.hotsheetSection?.label}
        title={hotsheetTitle}
        description={content.hotsheetSection?.description}
        perks={content.hotsheetSection?.perks}
        ctaLabel={content.hotsheetSection?.ctaLabel}
        ctaHref={content.hotsheetSection?.ctaHref}
        videoSrc={content.hotsheetSection?.videoUrl}
      />
      <EmailCapture
        label={content.emailCaptureSection?.label}
        title={emailCaptureTitle}
        subtitle={content.emailCaptureSection?.subtitle ? (
          <>
            {content.emailCaptureSection.subtitle.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br className="email-capture-br" />}
              </span>
            ))}
          </>
        ) : undefined}
        cardTitle={content.emailCaptureSection?.cardTitle}
        cardSubtitle={content.emailCaptureSection?.cardSubtitle}
        buttonLabel={content.emailCaptureSection?.buttonLabel}
        disclaimer={content.emailCaptureSection?.disclaimer}
      />
      <Faq
        label={content.faqSection?.label}
        title={faqTitle}
        items={faqItems.length > 0 ? faqItems : undefined}
      />
      <CtaBanner
        watermark={content.ctaBannerSection?.watermark}
        title={ctaTitle}
        subtitle={content.ctaBannerSection?.subtitle}
        ctaLabel={content.ctaBannerSection?.ctaLabel}
        ctaHref={content.ctaBannerSection?.ctaHref}
      />
    </main>
  );
}

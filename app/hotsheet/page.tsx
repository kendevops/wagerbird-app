import Hotsheet from "@/components/Hotsheet";
import ValueStrip from "@/components/ValueStrip";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import HotsheetFeatures from "@/components/HotsheetFeatures";
import HotsheetPricing from "@/components/HotsheetPricing";
import HotsheetWhy from "@/components/HotsheetWhy";
import ProofSection from "@/components/ProofSection";
import ProcessSection from "@/components/ProcessSection";
import EmailCapture from "@/components/EmailCapture";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

const hotsheetFaqs = [
  {
    question: "What is the Hotsheet?",
    answer: "The Hotsheet is a curated daily email delivering the top 2–6 picks from the WAGERBIRD Terminal directly to your inbox. Every play is confidence-scored and selected by our model — no research required on your end. Open it, read the plays, execute.",
  },
  {
    question: "What's the difference between Half-Day and Full-Day?",
    answer: "The On-Demand pass ($25) delivers 2–3 of our top signals for the morning window. The Full-Day Pass ($40) covers both the morning and evening windows — 6+ signals total — and includes 3 days of free Terminal access. Both are one-time payments, no subscription.",
  },
  {
    question: "Do I need an account to use the Hotsheet?",
    answer: "No. The Hotsheet is delivered directly to your email. You don't need to create an account, download an app, or log in anywhere. Just enter your email at checkout and your picks land in your inbox before game time.",
  },
  {
    question: "How are the signals scored?",
    answer: "Every signal is run through the WAGERBIRD Terminal model and assigned a confidence score from 1–100. Only signals scoring 76 or above make it into the Hotsheet. A score of 88 means bet stronger. A score of 76 means size down but still worth acting on.",
  },
  {
    question: "What sports are covered?",
    answer: "The Hotsheet covers NFL, NBA, MLB, NHL, and select international soccer markets. Coverage depends on the day's schedule — we only include sports where the model has high-confidence output. No filler picks, ever.",
  },
];

export default function HotsheetPage() {
  return (
    <main>
      {/* Hero — the MagicBento hotsheet section */}
      <Hotsheet />

      {/* Stats strip */}
      <ValueStrip
        items={[
          { value: "76+", label: "Min Confidence Score", description: "Only signals scoring 76 or higher make the cut" },
          { value: "2-6", label: "Signals Per Email", description: "Focused, curated picks — not noise" },
          { value: "$2", label: "Per Day Average", description: "Less than a coffee for daily winning intel" },
          { value: "5+", label: "Sports Covered", description: "NFL · NBA · MLB · NHL · Soccer" },
        ]}
      />

      {/* Scrolling signal ticker */}
      <Ticker
        variant="dark"
        items={[
          { sport: "MLB", matchup: "Yankees vs Red Sox", confidence: 89 },
          { sport: "NFL", matchup: "Chiefs vs Ravens", confidence: 91 },
          { sport: "NBA", matchup: "Lakers vs Warriors", confidence: 76 },
          { sport: "NHL", matchup: "Bruins vs Maple Leafs", confidence: 82 },
          { sport: "MLB", matchup: "Braves vs Padres", confidence: 91 },
          { sport: "NBA", matchup: "Celtics vs Heat", confidence: 84 },
          { sport: "NFL", matchup: "Eagles vs Cowboys", confidence: 78 },
        ]}
      />

       {/* What You Get feature cards */}
      <HotsheetFeatures />

      {/* From Terminal. To Your Inbox. — process steps */}
      <HowItWorks
        label="// The Process"
        title={
          <>
            From Terminal.
            <br />
            <em className="hiw-heading-accent">To Your Inbox.</em>
          </>
        }
        steps={[
          {
            number: "01",
            icon: (
              <div className="hiw-mockcard">
                <div className="hiw-mockcard__header">
                  <span className="hiw-mockcard__source">WAGERBIRD TERMINAL</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.48 2.68 3.66 3.19 1.95.46 2.34 1.15 2.34 1.86 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.37 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="rgba(7,7,15,0.3)" />
                  </svg>
                </div>
                <span className="hiw-mockcard__content">MODEL SCANS — SCORES BOARD</span>
              </div>
            ),
            title: "Signals Generated",
            description:
              "The WAGERBIRD Terminal scans the board every morning and afternoon. Every game gets a confidence rating. No gut picks. No opinions. Pure model output.",
          },
          {
            number: "02",
            icon: (
              <div className="hiw-mockcard hiw-mockcard--blue">
                <div className="hiw-mockcard__header">
                  <span className="hiw-mockcard__source">WAGERBIRD HOTSHEET</span>
                  <span className="hiw-mockcard__score">91</span>
                </div>
                <span className="hiw-mockcard__content">BRAVES VS PADRES — SPREAD</span>
              </div>
            ),
            title: "Top Picks Selected",
            description:
              "The highest-conviction plays — rated 76 or above — are packaged into your Hotsheet. Up to three picks per release, ranked by the model's confidence score.",
          },
          {
            number: "03",
            icon: (
              <div className="hiw-mockcard">
                <div className="hiw-mockcard__header">
                  <span className="hiw-mockcard__source">YOUR INBOX · 9:15 AM ET</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#1E40AF" />
                  </svg>
                </div>
                <span className="hiw-mockcard__content">OPEN — READ — EXECUTE</span>
              </div>
            ),
            title: "Delivered Before Game Time",
            description:
              "Your email lands before the AM window (9:15 ET) and PM window (3:15 ET). Open it, place your bets. That's the whole workflow.",
          },
        ]}
        stepVariant="card"
      />

      {/* One-Time Pricing */}
      <HotsheetPricing />

      {/* Why Hotsheet — features list + sample cards */}
      <HotsheetWhy />

      {/* Social Proof — Testimonials */}
      <ProofSection />

      <Faq
        label="// FAQ"
        title={
          <>
            Common
            <em className="faq-heading-accent">Questions.</em>
          </>
        }
        items={hotsheetFaqs}
      />

      <CtaBanner
        watermark="HOTSHEET"
        title={
          <>
            Today&apos;s Top<br />
            Signals. Your Inbox.
          </>
        }
        subtitle="No login. No subscription. Just the picks that matter, before game time."
        ctaLabel="Get Hotsheet →"
        ctaHref="#"
      />
    </main>
  );
}

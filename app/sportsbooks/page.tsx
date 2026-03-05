"use client";

import SportsbooksHero from "@/components/SportsbooksHero";
import SportsbooksSection from "@/components/SportsbooksSection";
import { SportsbookCardProps } from "@/components/SportsbookCard";
import HowItWorks from "@/components/HowItWorks";
import MapSection from "@/components/MapSection";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";

/* ── Sportsbooks "How It Works" step icons ── */
const IconPickSportsbooks = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconOpenDeposit = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
    <path d="M12 6V8M12 16V18M9 9.5C9 8.12 10.34 7 12 7C13.66 7 15 8.12 15 9.5C15 10.88 13.66 12 12 12C10.34 12 9 13.12 9 14.5C9 15.88 10.34 17 12 17C13.66 17 15 15.88 15 14.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconCollectPacks = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0.15"/>
  </svg>
);

const sportsbooksSteps = [
  {
    number: "01",
    icon: <IconPickSportsbooks />,
    title: "Pick Your Sportsbooks",
    description:
      "Choose from our licensed partner books below. We recommend opening at least three — each one earns you a free $39 Points Pack worth 600 WagerBird points.",
  },
  {
    number: "02",
    icon: <IconOpenDeposit />,
    title: "Open & Deposit",
    description:
      "Use our referral links to create your new accounts and make qualifying deposits. Takes under 10 minutes per book — most users complete all three in one sitting.",
  },
  {
    number: "03",
    icon: <IconCollectPacks />,
    title: "Collect Your Free Packs",
    description:
      "WagerBird credits a $39 Points Pack to your account for each new sportsbook opened. Points never expire — use them on any sport, any time you're ready to trade.",
  },
];

const sportsbooks: SportsbookCardProps[] = [
  {
    name: "DraftKings",
    brandColor: "#1B5E2E",
    description: "One of the largest U.S. books. Deep markets, strong live betting.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.draftkings.com",
    states: [
      "Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa",
      "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
      "Michigan", "Montana", "Nebraska", "New Hampshire", "New Jersey",
      "New York", "North Carolina", "Ohio", "Oregon", "Pennsylvania",
      "Rhode Island", "Tennessee", "Vermont", "Virginia", "West Virginia",
      "Wyoming",
    ],
  },
  {
    name: "FanDuel",
    brandColor: "#1A4FC4",
    description: "Top-rated mobile experience. Competitive odds, fast payouts.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.fanduel.com",
    states: [
      "Arizona", "Colorado", "Connecticut", "Illinois", "Indiana", "Iowa",
      "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
      "Michigan", "Montana", "Nebraska", "New Hampshire", "New Jersey",
      "New York", "North Carolina", "Ohio", "Pennsylvania", "Rhode Island",
      "Tennessee", "Vermont", "Virginia", "West Virginia", "Wyoming",
    ],
  },
  {
    name: "BetMGM",
    brandColor: "#8B7D2A",
    description: "Casino + sports under one login. Wide parlay coverage.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.betmgm.com",
    states: [
      "Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas",
      "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan",
      "Mississippi", "Nevada", "New Hampshire", "New Jersey", "New York",
      "North Carolina", "Ohio", "Pennsylvania", "Tennessee", "Virginia",
      "Washington", "West Virginia", "Wyoming",
    ],
  },
  {
    name: "Caesars",
    brandColor: "#4A4A1A",
    description: "Generous rewards program. Best for loyalty-focused bettors.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.caesars.com/sportsbook",
    states: [
      "Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas",
      "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan",
      "Nevada", "New Hampshire", "New Jersey", "New York", "North Carolina",
      "Ohio", "Pennsylvania", "Tennessee", "Virginia", "West Virginia",
      "Wyoming",
    ],
  },
  {
    name: "ESPN Bet",
    brandColor: "#CC1F1F",
    description: "Seamless integration with ESPN stats and live game data.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.espnbet.com",
    states: [
      "Arizona", "Colorado", "Illinois", "Indiana", "Iowa", "Kansas",
      "Kentucky", "Louisiana", "Maryland", "Massachusetts", "Michigan",
      "New Jersey", "North Carolina", "Ohio", "Pennsylvania", "Tennessee",
      "Virginia", "West Virginia", "Wyoming",
    ],
  },
  {
    name: "bet365",
    brandColor: "#1A6B3A",
    description: "Global leader. Exceptional live streaming and in-play markets.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.bet365.com",
    states: [
      "Colorado", "Indiana", "Iowa", "Kentucky", "Louisiana", "New Jersey",
      "Ohio", "Virginia",
    ],
  },
  {
    name: "PointsBet",
    brandColor: "#C0392B",
    description: "Unique PointsBetting format — ideal for high-conviction plays.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.pointsbet.com",
    states: [
      "Colorado", "Illinois", "Indiana", "Iowa", "Kansas", "Michigan",
      "New Jersey", "New York", "Pennsylvania", "Virginia", "West Virginia",
    ],
  },
  {
    name: "Hard Rock Bet",
    brandColor: "#7B1F1F",
    description: "Strong Florida presence. Fast, clean mobile experience.",
    pointsPack: "+1 FREE POINTS PACK ($39)",
    ctaHref: "https://www.hardrock.bet",
    states: [
      "Indiana", "Iowa", "New Jersey", "Ohio", "Tennessee", "Virginia",
      "Wyoming",
    ],
  },
];

const faqItems = [
  {
    question: "How do I get my free Points Packs?",
    answer: "Open a new sportsbook account through one of our referral links below and make a qualifying deposit. Once your account is verified, WagerBird automatically credits a free $39 Points Pack (600 points) to your account — no code required. Open three books and you'll receive three packs, totalling $117 in free picks.",
  },
  {
    question: 'What counts as a "new" account?',
    answer: "A new account means you have never previously held an account with that sportsbook operator. If you already have an existing account — even if it's inactive or zeroed out — it does not qualify. The offer applies to first-time signups only, using our referral link at the point of registration.",
  },
  {
    question: "What can I do with WagerBird Points?",
    answer: "Points unlock premium confidence-scored signals in the WagerBird Terminal. Each signal costs points equal to its confidence score, so a 90-rated pick costs 90 points. Points never expire and work across all sports — NFL, NBA, MLB, NHL, and more.",
  },
  {
    question: "Can I claim a Pack for each sportsbook I open?",
    answer: "Yes. You earn one free $39 Points Pack for every new qualifying sportsbook account you open through WagerBird. There's no cap — open more books, earn more packs. Most users open three to five books and collect between $117–$195 in free points.",
  },
  {
    question: "When will my Points be credited?",
    answer: "Points are credited to your WagerBird account typically within 3–5 business days of your sportsbook account being verified and your qualifying deposit being confirmed. You'll receive an email notification as soon as your pack is applied.",
  },
  {
    question: "Why do you recommend three or more accounts?",
    answer: "Opening three books is the sweet spot — it maximises your free points ($117) while giving you access to multiple books so you can always find the best line on any given game. More accounts also means more promotional offers from each sportsbook over time.",
  },
];

export default function SportsbooksPage() {
  return (
    <main>
      <SportsbooksHero />

      <div id="how-it-works">
        <HowItWorks
          label="// How It Works"
          title={
            <>
              Three Steps.
              <br />
              <em className="hiw-heading-accent">Free Picks.</em>
            </>
          }
          steps={sportsbooksSteps}
        />
      </div>

      <div id="partner-sportsbooks">
        <SportsbooksSection
          sportsbooks={sportsbooks}
        />
      </div>

      <MapSection />

      <Faq
        title={<>Common<br /><em className="faq-heading-accent">Questions.</em></>}
        items={faqItems}
      />

      <CtaBanner
        watermark="FREE"
        title={
          <>
            Open 3 Books.<br />
            <em className="cta-heading-accent">Get $117 Free.</em>
          </>
        }
        subtitle="Takes 30 minutes. Points never expire. Start winning with credits on us."
        ctaLabel="FIND MY SPORTSBOOKS →"
        ctaHref="#partner-sportsbooks"
      />
    </main>
  );
}

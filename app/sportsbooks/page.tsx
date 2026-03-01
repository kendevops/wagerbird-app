"use client";

import SportsbooksHero from "@/components/SportsbooksHero";
import SportsbookCard, { SportsbookCardProps } from "@/components/SportsbookCard";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

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
    name: "FanDuel",
    logoUrl: "",
    offer: "Bet $5, Get $150 in Bonus Bets",
    ctaLabel: "Join FanDuel",
    ctaHref: "https://www.fanduel.com",
  },
  {
    name: "DraftKings",
    logoUrl: "",
    offer: "Bet $5, Get $200 in Bonus Bets",
    ctaLabel: "Join DraftKings",
    ctaHref: "https://www.draftkings.com",
  },
  {
    name: "BetMGM",
    logoUrl: "",
    offer: "Up to $1,500 Back in Bonus Bets",
    ctaLabel: "Join BetMGM",
    ctaHref: "https://www.betmgm.com",
  },
  {
    name: "Caesars",
    logoUrl: "",
    offer: "Up to $1,000 First Bet on Caesars",
    ctaLabel: "Join Caesars",
    ctaHref: "https://www.caesars.com/sportsbook",
  },
  {
    name: "BetRivers",
    logoUrl: "",
    offer: "Up to $500 2nd Chance Bet",
    ctaLabel: "Join BetRivers",
    ctaHref: "https://www.betrivers.com",
  },
  {
    name: "Pinnacle",
    logoUrl: "",
    offer: "Best Odds. Lowest Juice.",
    ctaLabel: "Join Pinnacle",
    ctaHref: "https://www.pinnacle.com",
  },
];

const faqItems = [
  {
    question: "How do I choose the best sportsbook?",
    answer: "It depends on what you value most — FanDuel and DraftKings often have the best mobile apps, while BetMGM and Caesars offer huge rewards. We recommend having accounts at multiple books to 'line shop' and always get the best odds."
  },
  {
    question: "Is sports betting legal everywhere?",
    answer: "No, sports betting is regulated on a state-by-state basis in the US. Check our list to see which books are licensed in your location before signing up."
  },
  {
    question: "Do sportsbooks have sign-up bonuses?",
    answer: "Yes, almost every major sportsbook offers a sign-up bonus or 'first bet' protection to new users. Make sure to read the terms and conditions for each offer."
  }
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

      <section id="offers" className="py-[80px] md:py-[120px] bg-[#050510] px-[20px] md:px-[48px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[16px] mb-[64px]"
          >
            <span className="font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text/35">// The Lineup</span>
            <h2 className="font-display text-[clamp(32px,5vw,48px)] font-bold text-nav-text leading-tight uppercase">
              Curated <em className="text-brand-yellow not-italic">Partners.</em>
            </h2>
            <p className="font-mono text-[13px] font-400 leading-[1.8] text-nav-text/55 max-w-[540px]">
              We only recommend sportsbooks that are fully licensed, secure, and known for fair lines. 
              Signing up through these links helps support WagerBird.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {sportsbooks.map((sb, i) => (
              <motion.div
                key={sb.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SportsbookCard {...sb} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Faq 
        title={<>Sportsbook<br/><em className="faq-heading-accent">FAQ.</em></>}
        items={faqItems}
      />

      <CtaBanner 
        title={<>Ready to Place<br/>Your First Trade?</>}
        subtitle="Access confidence-scored signals and start winning with the model on your side."
        ctaLabel="Get Started Now →"
        ctaHref="/packs"
      />
    </main>
  );
}

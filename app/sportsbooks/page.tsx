"use client";

import Hero from "@/components/Hero";
import SportsbookCard, { SportsbookCardProps } from "@/components/SportsbookCard";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

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
      <Hero
        title={
          <>
            Top Rated<br />
            <em className="text-brand-yellow italic font-bold not-italic">Sportsbooks.</em><br />
            Best Odds.
          </>
        }
        description="The WagerBird guide to the best sportsbooks in the industry. Compare offers, find the best lines, and maximize your edge."
        primaryCtaLabel="View All Offers ↓"
        primaryCtaHref="#offers"
        secondaryCtaLabel="Back to Terminal"
        secondaryCtaHref="/"
        imageUrl="https://images.pexels.com/photos/5700769/pexels-photo-5700769.jpeg"
      />

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

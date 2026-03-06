import Hero from "@/components/Hero";

export default function OddsPage() {
  return (
    <main>
      <Hero
        tickerText="Wagerbird Odds — Live Betting Markets Coming Soon"
        badgeText="ODDS · LIVE MARKETS"
        title={
          <>
            Real-Time<br />
            Odds <em className="text-brand-yellow italic font-black">Incoming.</em>
          </>
        }
        description="We're currently integrating real-time odds from 15+ major sportsbooks. This feature is dropping soon. Get ready for the ultimate betting terminal."
        primaryCtaLabel="Explore Terminal →"
        primaryCtaHref="/terminal"
      />
    </main>
  );
}

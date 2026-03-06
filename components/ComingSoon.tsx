import Hero from "@/components/Hero";

export default function ComingSoon() {
  return (
    <Hero
      tickerText="Wagerbird Development — New Features Incoming"
      badgeText="COMING SOON · STAY TUNED"
      title={
        <>
          Something<br />
          Big is <em className="text-brand-yellow italic font-black">Coming.</em>
        </>
      }
      description="We're currently building the most advanced sports betting terminal on the planet. This feature is dropping soon. Join the waitlist to be first."
      primaryCtaLabel="Go Back Home →"
      primaryCtaHref="/"
    />
  );
}

import GetStartedFlow from "@/components/GetStartedFlow";

export const metadata = {
  title: "Get Started | Wagerbird",
  description: "Get instant access to premium picks.",
};

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan = "core" } = await searchParams;
  const validPlans = ["starter", "core", "advanced"];
  const selectedPlan = validPlans.includes(plan) ? plan : "core";

  return (
    <main className="signup-layout">
      <section className="signup-left-panel">
        <div className="signin-grid-bg" />
        <div className="signup-left-content">
          <p className="signin-eyebrow">// Secure Checkout</p>

          <h1 className="signup-hero-heading">
            <span className="signup-hero-white">Get Instant</span>
            <br />
            <span className="signup-hero-yellow">Access</span>
          </h1>

          <p className="signup-tagline">
            Complete your purchase, then create your account to start receiving
            confidence-scored signals.
          </p>

          <ul className="signup-feature-list">
            <li className="signup-feature-item">
              <span className="signup-bullet-dot" aria-hidden="true" />
              <span className="signup-feature-text">
                <strong className="signup-feature-bold">Pay per pick.</strong>
                {" "}No subscription required.
              </span>
            </li>
            <li className="signup-feature-item">
              <span className="signup-bullet-dot" aria-hidden="true" />
              <span className="signup-feature-text">
                <strong className="signup-feature-bold">Points never expire.</strong>
                {" "}Buy once, use anytime.
              </span>
            </li>
            <li className="signup-feature-item">
              <span className="signup-bullet-dot" aria-hidden="true" />
              <span className="signup-feature-text">
                <strong className="signup-feature-bold">10+ leagues.</strong>
                {" "}NFL, NBA, MLB, NHL, CBB and more.
              </span>
            </li>
            <li className="signup-feature-item">
              <span className="signup-bullet-dot" aria-hidden="true" />
              <span className="signup-feature-text">
                <strong className="signup-feature-bold">68% win rate.</strong>
                {" "}Backed by the model.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="signup-right-panel">
        <div style={{ width: "100%" }}>
          <GetStartedFlow plan={selectedPlan} />
        </div>
      </section>
    </main>
  );
}

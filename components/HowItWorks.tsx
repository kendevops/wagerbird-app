import HowItWorksStep from "./HowItWorksStep";

const steps = [
  {
    number: "01",
    title: "Buy Points",
    description:
      "Choose a pack — Starter, Core, or Advanced. Points never expire. Use them on any sport, any pick type, whenever you're ready.",
  },
  {
    number: "02",
    title: "Browse Signals",
    description:
      "Enter the Terminal and browse confidence-rated signals across every game. Filter by sport, confidence level, or game time.",
  },
  {
    number: "03",
    title: "Trade With Edge",
    description:
      "Each signal costs points equal to its confidence score. Bet knowing exactly how strong the model's conviction is. No guessing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-container">
        {/* Header */}
        <div className="hiw-header">
          <span className="hiw-label">// How It Works</span>
          <h2 className="hiw-heading">
            Simple.
            <br />
            Transparent.
            <br />
            <em className="hiw-heading-accent">Profitable.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="hiw-steps">
          {steps.map((step, i) => (
            <HowItWorksStep key={i} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

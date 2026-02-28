export default function CtaBanner() {
  return (
    <section className="cta-section">
      <span className="cta-watermark" aria-hidden="true">WagerBird</span>
      <div className="cta-content">
        <h2 className="cta-heading">
          Stop Guessing.
          <br />
          Start Winning.
        </h2>
        <p className="cta-subtext">
          Join 12,000+ bettors who trade with confidence-scored signals.
        </p>
        <a href="/packs" className="cta-btn">
          Buy a Pack Now &rarr;
        </a>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background grid overlay */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="hero-content">
        {/* Eyebrow label */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          <span className="hero-eyebrow-text">Confidence-Scored Signals</span>
        </div>

        {/* Main headline */}
        <h1 className="hero-headline">
          Bet with the<br />
          <span className="hero-headline-accent">model.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline">
          Priced by conviction. Backed by data.<br className="hero-break" />
          Not a sportsbook.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta-group">
          <a href="/get-access" className="hero-btn-primary">Get Access</a>
          <a href="/signals" className="hero-btn-secondary">View Signals</a>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">15+</span>
            <span className="hero-stat-label">Sports Covered</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value">Daily</span>
            <span className="hero-stat-label">Signal Updates</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value">Model-First</span>
            <span className="hero-stat-label">Conviction Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

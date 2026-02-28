export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow" aria-hidden="true" />

      {/* Ticker bar */}
      <div className="hero-ticker">
        <div className="hero-ticker-inner">
          <span className="hero-ticker-brand">Wagerbird Terminal — Confidence-Scored Signals</span>
          <div className="hero-ticker-live">
            <span className="hero-live-dot" aria-hidden="true" />
            Live Signals Active
          </div>
          <span className="hero-ticker-date">Thursday, February 19, 2020</span>
        </div>
      </div>

      {/* Two-column main */}
      <div className="hero-main">
        {/* Left column */}
        <div className="hero-left">
          <div className="hero-sports-badge">
            <span className="hero-sports-dot" aria-hidden="true" />
            <span className="hero-sports-label">MLB · NBA · NFL · NHL — All Sports Covered</span>
          </div>

          <h1 className="hero-headline">
            Access<br />
            The <em className="hero-headline-accent">Edge.</em><br />
            Trade<br />
            The Game.
          </h1>

          <div className="hero-description-block">
            <p className="hero-description">
              Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side.
            </p>
          </div>

          <div className="hero-actions">
            <a href="/packs" className="hero-cta-primary">Buy a Pack →</a>
            <a href="/picks" className="hero-cta-ghost">Free Picks via Email</a>
          </div>
        </div>

        {/* Right column — hero image */}
        <div className="hero-right">
          <div className="hero-terminal-image">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7a48826f4f3592b62edc4a4adaa3da19d8075e3"
              alt="WagerBird signal cards terminal"
              className="hero-terminal-img"
            />
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="hero-stats">
        <div className="hero-stat-divider" />
        <div className="hero-stat-item">
          <span className="hero-stat-num">68%</span>
          <span className="hero-stat-lbl">Season Win Rate</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat-item">
          <span className="hero-stat-num">12K+</span>
          <span className="hero-stat-lbl">Active Bettors</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat-item">
          <span className="hero-stat-num">5</span>
          <span className="hero-stat-lbl">Sports Covered</span>
        </div>
        <div className="hero-stat-divider" />
      </div>
    </section>
  );
}

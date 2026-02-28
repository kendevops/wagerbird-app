function BasketballCourtSVG() {
  return (
    <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="court-svg">
      <rect x="0.5" y="0.5" width="159" height="99" stroke="rgba(32,95,255,0.5)" strokeWidth="0.8"/>
      <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5"/>
      <circle cx="80" cy="50" r="16" stroke="rgba(32,95,255,0.45)" strokeWidth="0.8" fill="none"/>
      <path d="M 0 14 A 46 46 0 0 1 0 86" stroke="rgba(32,95,255,0.4)" strokeWidth="0.8" fill="none"/>
      <path d="M 160 14 A 46 46 0 0 0 160 86" stroke="rgba(32,95,255,0.4)" strokeWidth="0.8" fill="none"/>
      <rect x="0" y="32" width="30" height="36" stroke="rgba(32,95,255,0.35)" strokeWidth="0.5" fill="none"/>
      <rect x="130" y="32" width="30" height="36" stroke="rgba(32,95,255,0.35)" strokeWidth="0.5" fill="none"/>
      <circle cx="15" cy="50" r="6" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="none"/>
      <circle cx="145" cy="50" r="6" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="none"/>
    </svg>
  );
}

function HockeyRinkSVG() {
  return (
    <svg viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="court-svg">
      <rect x="0.5" y="0.5" width="179" height="99" rx="18" stroke="rgba(32,95,255,0.5)" strokeWidth="0.8"/>
      <line x1="90" y1="0" x2="90" y2="100" stroke="rgba(228,242,34,0.18)" strokeWidth="0.8"/>
      <line x1="58" y1="0" x2="58" y2="100" stroke="rgba(32,95,255,0.4)" strokeWidth="0.8"/>
      <line x1="122" y1="0" x2="122" y2="100" stroke="rgba(32,95,255,0.4)" strokeWidth="0.8"/>
      <circle cx="90" cy="50" r="13" stroke="rgba(228,242,34,0.18)" strokeWidth="0.8" fill="none"/>
      <circle cx="45" cy="30" r="5" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="none"/>
      <circle cx="45" cy="70" r="5" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="none"/>
      <circle cx="135" cy="30" r="5" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="none"/>
      <circle cx="135" cy="70" r="5" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="none"/>
      <path d="M 0.5 30 Q 14 30 14 50 Q 14 70 0.5 70" stroke="rgba(32,95,255,0.4)" strokeWidth="0.5" fill="none"/>
      <path d="M 179.5 30 Q 166 30 166 50 Q 166 70 179.5 70" stroke="rgba(32,95,255,0.4)" strokeWidth="0.5" fill="none"/>
    </svg>
  );
}

function BaseballDiamondSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="court-svg">
      <polygon points="60,6 114,60 60,114 6,60" stroke="rgba(32,95,255,0.5)" strokeWidth="0.8" fill="none"/>
      <line x1="60" y1="6" x2="60" y2="114" stroke="rgba(32,95,255,0.2)" strokeWidth="0.4"/>
      <line x1="6" y1="60" x2="114" y2="60" stroke="rgba(32,95,255,0.2)" strokeWidth="0.4"/>
      <rect x="56.5" y="2.5" width="7" height="7" fill="rgba(32,95,255,0.5)" stroke="rgba(32,95,255,0.6)" strokeWidth="0.5"/>
      <rect x="110.5" y="56.5" width="7" height="7" fill="rgba(32,95,255,0.5)" stroke="rgba(32,95,255,0.6)" strokeWidth="0.5"/>
      <rect x="56.5" y="110.5" width="7" height="7" fill="rgba(32,95,255,0.5)" stroke="rgba(32,95,255,0.6)" strokeWidth="0.5"/>
      <rect x="2.5" y="56.5" width="7" height="7" fill="rgba(32,95,255,0.5)" stroke="rgba(32,95,255,0.6)" strokeWidth="0.5"/>
      <circle cx="60" cy="60" r="3" fill="rgba(228,242,34,0.4)"/>
      <path d="M 60 114 Q 115 30 114 6" stroke="rgba(228,242,34,0.65)" strokeWidth="1.2" fill="none" strokeDasharray="3 2"/>
    </svg>
  );
}

function FootballFieldSVG() {
  return (
    <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="court-svg">
      <rect x="0.5" y="0.5" width="199" height="109" stroke="rgba(32,95,255,0.5)" strokeWidth="0.8"/>
      <rect x="0.5" y="0.5" width="22" height="109" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="rgba(32,95,255,0.05)"/>
      <rect x="177.5" y="0.5" width="22" height="109" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5" fill="rgba(32,95,255,0.05)"/>
      <line x1="55" y1="0" x2="55" y2="110" stroke="rgba(32,95,255,0.2)" strokeWidth="0.5"/>
      <line x1="100" y1="0" x2="100" y2="110" stroke="rgba(32,95,255,0.3)" strokeWidth="0.5"/>
      <line x1="145" y1="0" x2="145" y2="110" stroke="rgba(32,95,255,0.2)" strokeWidth="0.5"/>
      <circle cx="100" cy="78" r="4" fill="rgba(228,242,34,0.5)"/>
      <path d="M 100 78 L 82 58 L 66 68" stroke="rgba(228,242,34,0.5)" strokeWidth="1" fill="none"/>
      <path d="M 82 58 L 92 42" stroke="rgba(228,242,34,0.45)" strokeWidth="1" fill="none" strokeDasharray="3 2"/>
      <circle cx="66" cy="68" r="3" stroke="rgba(228,242,34,0.4)" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow" aria-hidden="true" />

      {/* Ticker bar */}
      <div className="hero-ticker">
        <span className="hero-ticker-brand">Wagerbird Terminal — Confidence-Scored Signals</span>
        <span className="hero-ticker-live">
          <span className="hero-live-dot" aria-hidden="true" />
          Live Signals Active
        </span>
        <span className="hero-ticker-date">Thursday, February 19, 2020</span>
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

        {/* Right column — stacked terminal cards */}
        <div className="hero-right">
          <div className="hero-terminal">

            {/* Card 1: NBA */}
            <div className="signal-card signal-card--nba">
              <div className="signal-card-left">
                <div className="signal-card-game">
                  <span className="signal-league-tag">NBA:</span>
                  <span className="signal-matchup">Lakers <span className="signal-vs">vs</span> Warriors</span>
                </div>
                <div className="signal-card-market">
                  <span className="signal-market-label">Market:</span>
                  <span className="signal-market-name">Over/Under</span>
                </div>
                <div className="signal-confidence">
                  <div className="signal-confidence-heading">Confidence Score</div>
                  <div className="signal-score-row">
                    <div className="signal-bar">
                      <div className="signal-bar-fill" style={{width: '72%'}} />
                    </div>
                    <span className="signal-score-num">76</span>
                  </div>
                  <div className="signal-score-range">
                    <span>72</span>
                    <span>78</span>
                  </div>
                </div>
              </div>
              <div className="signal-card-right">
                <BasketballCourtSVG />
                <div className="signal-field-icons">
                  <span className="signal-field-icon">✕</span>
                  <span className="signal-field-label">Offense</span>
                  <span className="signal-field-icon">◎</span>
                  <span className="signal-field-label">Defense</span>
                </div>
              </div>
            </div>

            {/* Card 2: NHL */}
            <div className="signal-card signal-card--nhl">
              <div className="signal-card-left">
                <div className="signal-card-game">
                  <span className="signal-league-tag">NHL:</span>
                  <span className="signal-matchup">Rangers <span className="signal-vs">vs</span> Devils</span>
                </div>
                <div className="signal-card-market">
                  <span className="signal-market-label">Market:</span>
                  <span className="signal-market-name">Moneyline</span>
                </div>
                <div className="signal-confidence">
                  <div className="signal-confidence-heading">Confidence Score</div>
                  <div className="signal-score-row">
                    <div className="signal-bar">
                      <div className="signal-bar-fill" style={{width: '85%'}} />
                    </div>
                    <span className="signal-score-num">85</span>
                  </div>
                  <div className="signal-score-range">
                    <span>85</span>
                    <span>35</span>
                  </div>
                </div>
              </div>
              <div className="signal-card-right">
                <HockeyRinkSVG />
                <div className="signal-field-icons">
                  <span className="signal-field-icon">✕</span>
                  <span className="signal-field-label">Offense</span>
                  <span className="signal-field-icon">◎</span>
                  <span className="signal-field-label">Defense</span>
                </div>
              </div>
            </div>

            {/* Card 3: MLB — UNLOCK SIGNAL */}
            <div className="signal-card signal-card--mlb">
              <div className="signal-card-left">
                <div className="signal-card-game">
                  <span className="signal-league-tag">Game:</span>
                  <span className="signal-matchup">Braves <span className="signal-vs">vs</span> Padres</span>
                </div>
                <div className="signal-card-market">
                  <span className="signal-market-label">Market:</span>
                  <span className="signal-market-name">Spread</span>
                </div>
                <div className="signal-confidence">
                  <div className="signal-confidence-heading">Confidence Score</div>
                  <div className="signal-score-row">
                    <div className="signal-bar">
                      <div className="signal-bar-fill" style={{width: '89%'}} />
                    </div>
                    <span className="signal-score-num">89</span>
                  </div>
                  <div className="signal-score-range">
                    <span>82</span>
                    <span>87</span>
                  </div>
                </div>
              </div>
              <div className="signal-card-right signal-card-right--unlock">
                <BaseballDiamondSVG />
                <a href="/packs" className="signal-unlock-btn">Unlock Signal</a>
                <div className="signal-field-icons">
                  <span className="signal-field-icon">✕</span>
                  <span className="signal-field-label">Offense</span>
                  <span className="signal-field-icon">◎</span>
                  <span className="signal-field-label">Defense</span>
                </div>
              </div>
            </div>

            {/* Card 4: NFL */}
            <div className="signal-card signal-card--nfl">
              <div className="signal-card-left">
                <div className="signal-card-game">
                  <span className="signal-league-tag">NFL:</span>
                  <span className="signal-matchup">Chiefs <span className="signal-vs">vs</span> Ravens</span>
                </div>
                <div className="signal-card-market">
                  <span className="signal-market-label">Market:</span>
                  <span className="signal-market-name">Spread</span>
                </div>
                <div className="signal-confidence">
                  <div className="signal-confidence-heading">Confidence Score</div>
                  <div className="signal-score-row">
                    <div className="signal-bar">
                      <div className="signal-bar-fill" style={{width: '87%'}} />
                    </div>
                    <span className="signal-score-num">87</span>
                  </div>
                  <div className="signal-score-range">
                    <span>72</span>
                    <span>87</span>
                  </div>
                </div>
              </div>
              <div className="signal-card-right">
                <FootballFieldSVG />
                <div className="signal-field-icons">
                  <span className="signal-field-icon">✕</span>
                  <span className="signal-field-label">Offense</span>
                  <span className="signal-field-icon">◎</span>
                  <span className="signal-field-label">Defense</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="hero-stats">
        <div className="hero-stat-item">
          <span className="hero-stat-num">68%</span>
          <span className="hero-stat-lbl">Season Win Rate</span>
        </div>
        <div className="hero-stat-item">
          <span className="hero-stat-num">12K+</span>
          <span className="hero-stat-lbl">Active Bettors</span>
        </div>
        <div className="hero-stat-item">
          <span className="hero-stat-num">5</span>
          <span className="hero-stat-lbl">Sports Covered</span>
        </div>
      </div>
    </section>
  );
}

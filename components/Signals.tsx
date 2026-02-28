import SignalCard, { SignalCardProps } from "./SignalCard";

const signals: SignalCardProps[] = [
  { matchup: "Yankees vs Red Sox", sport: "MLB", time: "Tonight 7:05 PM", betType: "O/U",    confidence: 89, locked: false },
  { matchup: "Chiefs vs Ravens",   sport: "NFL", time: "Sunday 4:25 PM",  betType: "ML",     confidence: 91, locked: false },
  { matchup: "Lakers vs Warriors", sport: "NBA", time: "Tonight 10:30 PM",betType: "Spread", confidence: 76, locked: false },
  { matchup: "Bruins vs Maple Leafs", sport: "NHL", time: "Tonight 7:00 PM", betType: "ML", confidence: 82, locked: true  },
  { matchup: "Dodgers vs Cubs",    sport: "MLB", time: "Tonight 8:10 PM", betType: "RL",     confidence: 77, locked: true  },
];

export default function Signals() {
  return (
    <section className="signals-section">
      {/* Left — copy */}
      <div className="signals-copy">
        <span className="signals-label">// The Terminal</span>

        <h2 className="signals-heading">
          Every Signal.<br />
          Every Sport.<br />
          <em className="signals-heading-accent">Scored.</em>
        </h2>

        <p className="signals-description">
          Each pick is assigned a confidence rating 0–100. Higher confidence = more points required.
          The model's performance is fully transparent — no cherry-picking, no selective memory.
        </p>

        <a href="/packs" className="signals-cta">
          Unlock All Signals →
        </a>
      </div>

      {/* Right — signal cards panel */}
      <div className="signals-panel">
        <div className="signals-cards">
          {signals.map((signal, i) => (
            <SignalCard key={i} {...signal} />
          ))}
        </div>

        <div className="signals-panel-footer">
          + 47 more signals locked — Buy points to unlock
        </div>
      </div>
    </section>
  );
}

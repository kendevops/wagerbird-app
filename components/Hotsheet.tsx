export default function Hotsheet() {
  return (
    <section className="hotsheet-section">
      {/* Left — copy */}
      <div className="hotsheet-content">
        <span className="hotsheet-label">// Hotsheet</span>

        <h2 className="hotsheet-heading">
          The Cheat
          <br />
          Code.{" "}
          <em className="hotsheet-heading-accent">Built</em>
          <br />
          To Hit.
        </h2>

        <p className="hotsheet-description">
          Top daily picks sent directly to your phone before game time. Every
          play is scored by confidence — always know what to bet and how hard
          to bet it.
        </p>

        <p className="hotsheet-perks">
          $2/day&nbsp;&nbsp;·&nbsp;&nbsp;Cancel anytime&nbsp;&nbsp;·&nbsp;&nbsp;No commitment
        </p>

        <a href="/hotsheet" className="hotsheet-cta">
          Get Hotsheet →
        </a>
      </div>

      {/* Right — video */}
      <div className="hotsheet-video-panel">
        {/* Replace `src` with your actual video URL */}
        <video
          className="hotsheet-video"
          src={undefined}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hotsheet preview"
        />
      </div>
    </section>
  );
}

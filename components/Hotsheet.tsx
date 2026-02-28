import { motion } from "framer-motion";

export default function Hotsheet() {
  return (
    <section className="hotsheet-section">
      {/* Left — copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hotsheet-content"
      >
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
      </motion.div>

      {/* Right — video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hotsheet-video-panel"
      >
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
      </motion.div>
    </section>
  );
}

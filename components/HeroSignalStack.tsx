"use client";

import { motion } from "framer-motion";

// ─── SVG Sport Court Illustrations ──────────────────────────────────────────

const BasketballCourt = () => (
  <svg viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hss-court" aria-hidden="true">
    <rect x="2" y="2" width="276" height="166" rx="4" stroke="rgba(228,242,34,0.25)" strokeWidth="1.5" fill="rgba(228,242,34,0.02)"/>
    {/* Center line */}
    <line x1="140" y1="2" x2="140" y2="168" stroke="rgba(228,242,34,0.22)" strokeWidth="1.2"/>
    {/* Center circle */}
    <circle cx="140" cy="85" r="28" stroke="rgba(228,242,34,0.22)" strokeWidth="1.2" fill="none"/>
    {/* Left key */}
    <rect x="2" y="51" width="58" height="68" stroke="rgba(228,242,34,0.22)" strokeWidth="1.2" fill="none"/>
    {/* Left free-throw arc */}
    <path d="M60,51 Q88,85 60,119" stroke="rgba(228,242,34,0.22)" strokeWidth="1.2" fill="none"/>
    {/* Left 3-pt arc */}
    <path d="M2,22 Q100,85 2,148" stroke="rgba(228,242,34,0.18)" strokeWidth="1.2" fill="none"/>
    {/* Right key */}
    <rect x="220" y="51" width="58" height="68" stroke="rgba(228,242,34,0.22)" strokeWidth="1.2" fill="none"/>
    {/* Right free-throw arc */}
    <path d="M220,51 Q192,85 220,119" stroke="rgba(228,242,34,0.22)" strokeWidth="1.2" fill="none"/>
    {/* Right 3-pt arc */}
    <path d="M278,22 Q180,85 278,148" stroke="rgba(228,242,34,0.18)" strokeWidth="1.2" fill="none"/>
    {/* Player silhouette — dunking */}
    <ellipse cx="228" cy="50" rx="10" ry="10" fill="rgba(228,242,34,0.55)"/>
    <line x1="228" y1="60" x2="220" y2="80" stroke="rgba(228,242,34,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="228" y1="60" x2="238" y2="70" stroke="rgba(228,242,34,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="220" y1="80" x2="212" y2="96" stroke="rgba(228,242,34,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="220" y1="80" x2="232" y2="94" stroke="rgba(228,242,34,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="238" y1="70" x2="248" y2="52" stroke="rgba(228,242,34,0.55)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="248" cy="46" r="5" fill="rgba(228,242,34,0.7)"/>
    {/* Hoop */}
    <line x1="258" y1="44" x2="274" y2="44" stroke="rgba(228,242,34,0.6)" strokeWidth="2" strokeLinecap="round"/>
    <rect x="272" y="30" width="3" height="28" fill="rgba(228,242,34,0.4)"/>
    {/* Labels */}
    <text x="22" y="165" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace" letterSpacing="1">Offense</text>
    <text x="218" y="165" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace" letterSpacing="1">Defense</text>
  </svg>
);

const HockeyRink = () => (
  <svg viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hss-court" aria-hidden="true">
    <rect x="2" y="14" width="276" height="142" rx="30" stroke="rgba(228,242,34,0.28)" strokeWidth="1.5" fill="rgba(228,242,34,0.02)"/>
    {/* Center line */}
    <line x1="140" y1="14" x2="140" y2="156" stroke="rgba(228,242,34,0.5)" strokeWidth="2"/>
    {/* Center circle */}
    <circle cx="140" cy="85" r="22" stroke="rgba(228,242,34,0.28)" strokeWidth="1.2" fill="none"/>
    <circle cx="140" cy="85" r="2" fill="rgba(228,242,34,0.6)"/>
    {/* Left blue line */}
    <line x1="70" y1="14" x2="70" y2="156" stroke="rgba(60,120,255,0.4)" strokeWidth="1.5"/>
    {/* Right blue line */}
    <line x1="210" y1="14" x2="210" y2="156" stroke="rgba(60,120,255,0.4)" strokeWidth="1.5"/>
    {/* Left goal line */}
    <line x1="34" y1="20" x2="34" y2="150" stroke="rgba(255,50,50,0.35)" strokeWidth="1.5"/>
    {/* Right goal line */}
    <line x1="246" y1="20" x2="246" y2="150" stroke="rgba(255,50,50,0.35)" strokeWidth="1.5"/>
    {/* Left faceoff circles */}
    <circle cx="72" cy="56" r="14" stroke="rgba(228,242,34,0.2)" strokeWidth="1.2" fill="none"/>
    <circle cx="72" cy="56" r="2" fill="rgba(228,242,34,0.4)"/>
    <circle cx="72" cy="114" r="14" stroke="rgba(228,242,34,0.2)" strokeWidth="1.2" fill="none"/>
    <circle cx="72" cy="114" r="2" fill="rgba(228,242,34,0.4)"/>
    {/* Right faceoff circles */}
    <circle cx="208" cy="56" r="14" stroke="rgba(228,242,34,0.2)" strokeWidth="1.2" fill="none"/>
    <circle cx="208" cy="56" r="2" fill="rgba(228,242,34,0.4)"/>
    <circle cx="208" cy="114" r="14" stroke="rgba(228,242,34,0.2)" strokeWidth="1.2" fill="none"/>
    <circle cx="208" cy="114" r="2" fill="rgba(228,242,34,0.4)"/>
    {/* Goals */}
    <rect x="14" y="73" width="12" height="24" stroke="rgba(228,242,34,0.45)" strokeWidth="1.2" fill="rgba(228,242,34,0.06)" rx="1"/>
    <rect x="254" y="73" width="12" height="24" stroke="rgba(228,242,34,0.45)" strokeWidth="1.2" fill="rgba(228,242,34,0.06)" rx="1"/>
    {/* Player 1 */}
    <circle cx="160" cy="78" r="5" fill="rgba(228,242,34,0.6)"/>
    <line x1="160" y1="83" x2="157" y2="96" stroke="rgba(228,242,34,0.5)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="157" y1="88" x2="148" y2="85" stroke="rgba(228,242,34,0.5)" strokeWidth="2" strokeLinecap="round"/>
    {/* Player 2 */}
    <circle cx="122" cy="90" r="5" fill="rgba(60,120,255,0.5)"/>
    <line x1="122" y1="95" x2="119" y2="108" stroke="rgba(60,120,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
    {/* Puck trail */}
    <path d="M148,85 Q138,82 130,85 Q122,90 116,84" stroke="rgba(228,242,34,0.4)" strokeWidth="1" strokeDasharray="3 2" fill="none"/>
    <circle cx="113" cy="83" r="3" fill="rgba(228,242,34,0.7)"/>
    {/* Labels */}
    <text x="22" y="165" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace" letterSpacing="1">Offense</text>
    <text x="218" y="165" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace" letterSpacing="1">Defense</text>
  </svg>
);

const BaseballDiamond = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hss-court hss-court--square" aria-hidden="true">
    {/* Outfield arc */}
    <path d="M14,196 Q110,14 206,196" stroke="rgba(228,242,34,0.18)" strokeWidth="1.5" fill="rgba(228,242,34,0.02)"/>
    {/* Foul lines */}
    <line x1="110" y1="176" x2="14" y2="196" stroke="rgba(228,242,34,0.18)" strokeWidth="1.2"/>
    <line x1="110" y1="176" x2="206" y2="196" stroke="rgba(228,242,34,0.18)" strokeWidth="1.2"/>
    {/* Diamond */}
    <polygon points="110,46 176,110 110,174 44,110" stroke="rgba(228,242,34,0.4)" strokeWidth="1.5" fill="rgba(228,242,34,0.03)"/>
    {/* Bases */}
    <rect x="103" y="40" width="14" height="14" fill="rgba(228,242,34,0.55)" rx="2"/>
    <rect x="170" y="103" width="14" height="14" fill="rgba(228,242,34,0.45)" rx="2"/>
    <rect x="103" y="166" width="14" height="14" fill="rgba(228,242,34,0.45)" rx="2"/>
    <rect x="36" y="103" width="14" height="14" fill="rgba(228,242,34,0.45)" rx="2"/>
    {/* Pitcher mound */}
    <circle cx="110" cy="110" r="6" stroke="rgba(228,242,34,0.3)" strokeWidth="1.2" fill="rgba(228,242,34,0.08)"/>
    {/* Ball trajectory arc */}
    <path d="M110,110 Q80,70 43,110" stroke="rgba(228,242,34,0.5)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" strokeLinecap="round"/>
    {/* Arrow at end */}
    <path d="M40,106 L43,110 L47,106" stroke="rgba(228,242,34,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Glow dot on trajectory */}
    <circle cx="75" cy="78" r="4" fill="rgba(228,242,34,0.9)"/>
    <circle cx="75" cy="78" r="9" fill="rgba(228,242,34,0.15)"/>
  </svg>
);

const FootballField = () => (
  <svg viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hss-court" aria-hidden="true">
    <rect x="2" y="2" width="276" height="166" stroke="rgba(228,242,34,0.25)" strokeWidth="1.5" fill="rgba(228,242,34,0.02)"/>
    {/* End zones */}
    <rect x="2" y="2" width="36" height="166" stroke="rgba(228,242,34,0.18)" strokeWidth="1" fill="rgba(228,242,34,0.04)"/>
    <rect x="242" y="2" width="36" height="166" stroke="rgba(228,242,34,0.18)" strokeWidth="1" fill="rgba(228,242,34,0.04)"/>
    {/* Yard lines */}
    {[74, 110, 140, 170, 206].map((x, i) => (
      <line key={i} x1={x} y1="2" x2={x} y2="168" stroke="rgba(228,242,34,0.15)" strokeWidth="1"/>
    ))}
    {/* Center line */}
    <line x1="140" y1="2" x2="140" y2="168" stroke="rgba(228,242,34,0.32)" strokeWidth="1.5"/>
    {/* Hash marks */}
    {[74, 110, 140, 170, 206].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="68" x2={x + 8} y2="68" stroke="rgba(228,242,34,0.18)" strokeWidth="1"/>
        <line x1={x} y1="100" x2={x + 8} y2="100" stroke="rgba(228,242,34,0.18)" strokeWidth="1"/>
      </g>
    ))}
    {/* Play — crossing routes */}
    <path d="M140,128 L140,90 L104,58" stroke="rgba(228,242,34,0.65)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" strokeLinecap="round"/>
    <path d="M140,128 L140,90 L176,58" stroke="rgba(228,242,34,0.45)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" strokeLinecap="round"/>
    {/* Arrow heads */}
    <path d="M100,62 L104,58 L108,62" stroke="rgba(228,242,34,0.65)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M172,62 L176,58 L180,62" stroke="rgba(228,242,34,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Snap dot */}
    <circle cx="140" cy="128" r="5" fill="rgba(228,242,34,0.7)"/>
    <circle cx="140" cy="128" r="10" fill="rgba(228,242,34,0.12)"/>
    {/* Goalposts */}
    <line x1="258" y1="28" x2="258" y2="60" stroke="rgba(228,242,34,0.4)" strokeWidth="1.5"/>
    <line x1="248" y1="28" x2="268" y2="28" stroke="rgba(228,242,34,0.4)" strokeWidth="1.5"/>
    <line x1="248" y1="28" x2="248" y2="42" stroke="rgba(228,242,34,0.35)" strokeWidth="1.2"/>
    <line x1="268" y1="28" x2="268" y2="42" stroke="rgba(228,242,34,0.35)" strokeWidth="1.2"/>
    {/* Labels */}
    <text x="14" y="165" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace" letterSpacing="1">Offense</text>
    <text x="220" y="165" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace" letterSpacing="1">Defense</text>
  </svg>
);

// ─── Individual Signal Card ──────────────────────────────────────────────────

interface StackCardProps {
  sport: string;
  matchup: string;
  market: string;
  confidence: number;
  min: number;
  max: number;
  court: React.ReactNode;
  locked?: boolean;
  unlockHref?: string;
}

function StackCard({ sport, matchup, market, confidence, min, max, court, locked, unlockHref }: StackCardProps) {
  const barPct = max === min ? 100 : ((confidence - min) / (max - min)) * 100;

  return (
    <div className={`hss-card${locked ? " hss-card--locked" : ""}`}>
      {/* Left: signal data */}
      <div className="hss-card__info">
        <div className="hss-card__sport-label">{sport}</div>
        <div className="hss-card__matchup">{matchup}</div>
        <div className="hss-card__market-row">
          <span className="hss-card__market-kicker">MARKET:</span>
          <span className="hss-card__market-value">{market}</span>
        </div>
        <div className="hss-card__conf-label">CONFIDENCE SCORE</div>
        <div className="hss-card__score-row">
          <div className="hss-card__score-bar-track">
            <div className="hss-card__score-bar-fill" style={{ width: `${barPct}%` }} />
          </div>
          <span className="hss-card__score-badge">{confidence}</span>
          <span className="hss-card__score-max">{max}</span>
        </div>
        <div className="hss-card__range-row">
          <span className="hss-card__range-min">{min}</span>
        </div>
      </div>

      {/* Right: court or unlock */}
      <div className="hss-card__visual">
        {locked ? (
          <div className="hss-card__unlock-wrap">
            {/* Baseball outline behind */}
            <div className="hss-card__unlock-court">{court}</div>
            {/* Glowing unlock button */}
            <a
              href={unlockHref ?? "/packs"}
              className="hss-card__unlock-btn"
            >
              UNLOCK SIGNAL
            </a>
          </div>
        ) : (
          court
        )}
      </div>
    </div>
  );
}

// ─── Stack Container ─────────────────────────────────────────────────────────

const CARDS: StackCardProps[] = [
  {
    sport: "NBA:",
    matchup: "Lakers vs Warriors",
    market: "Over/Under",
    confidence: 76,
    min: 72,
    max: 78,
    court: <BasketballCourt />,
  },
  {
    sport: "NHL:",
    matchup: "Rangers vs Deviis",
    market: "Moneyline",
    confidence: 85,
    min: 85,
    max: 85,
    court: <HockeyRink />,
  },
  {
    sport: "GAME:",
    matchup: "Braves vs Padres",
    market: "Spread",
    confidence: 89,
    min: 82,
    max: 87,
    locked: true,
    unlockHref: "/packs",
    court: <BaseballDiamond />,
  },
  {
    sport: "NFL:",
    matchup: "Chiefs vs Ravens",
    market: "Spread",
    confidence: 87,
    min: 72,
    max: 87,
    court: <FootballField />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSignalStack() {
  return (
    <motion.div
      className="hss-root"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient glow */}
      <div className="hss-ambient" aria-hidden="true" />

      <div className="hss-stack">
        {CARDS.map((card, i) => (
          <motion.div
            key={i}
            className="hss-card-wrap"
            variants={cardVariants}
            animate={{
              y: [0, i % 2 === 0 ? -4 : -2, 0],
            }}
            transition={{
              y: {
                duration: 3.5 + i * 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              },
            }}
          >
            <StackCard {...card} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

import PriceCard from "./PriceCard";

export default function Packs() {
  return (
    <section className="packs-section">
      {/* Header */}
      <PacksHeader />

      {/* Cards grid */}
      <div className="packs-grid">
        <PriceCard
          name="Starter Pack"
          points="600 Points"
          goodFor="~7–9 Premium Picks"
          price={39}
          ctaLabel="Get Instant Access"
        />
        <PriceCard
          name="Core Pack"
          points="1,700 Points"
          goodFor="~20–26 Premium Picks"
          price={99}
          ctaLabel="Get Core Pack"
          popular
        />
        <PriceCard
          name="Advanced Pack"
          points="3,600 Points"
          goodFor="~42–55 Premium Picks"
          price={199}
          ctaLabel="Get Advanced Pack"
        />
      </div>

      {/* Footnote */}
      <p className="packs-footnote">
        Points act as credits to unlock signals (<strong>Picks</strong>). Each signal's cost is based
        on its confidence rating. You can also use points to access{" "}
        <strong className="packs-footnote-brand">WAGERVISION</strong>{" "}
        (live in-game signals).
      </p>
    </section>
  );
}

function PacksHeader() {
  return (
    <div className="packs-header">
      <span className="packs-label">// Choose Your Pack</span>
      <h2 className="packs-heading">
        Points Never Expire.
        <br />
        <em className="packs-heading-accent">Buy Once. Win Forever.</em>
      </h2>
      <p className="packs-subtext">
        All customers see the same transparent pricing. The more you buy
        upfront, the lower your per-point cost.
      </p>
    </div>
  );
}

"use client";

import SpotlightCard from "./animations/SpotlightCard";

export interface SportsbookCardProps {
  name: string;
  brandColor: string;
  description: string;
  pointsPack?: string;
  ctaHref: string;
  states: string[];
}

export default function SportsbookCard({
  name,
  brandColor,
  description,
  pointsPack = "+1 FREE POINTS PACK ($39)",
  ctaHref,
}: SportsbookCardProps) {
  return (
    <SpotlightCard className="sb-card" spotlightColor="rgba(255, 255, 255, 0.1)">
      <div className="sb-card-header" style={{ backgroundColor: brandColor }}>
        <span className="sb-card-header-name">{name}</span>
      </div>
      <div className="sb-card-body">
        <h3 className="sb-card-name">{name}</h3>
        <p className="sb-card-description">{description}</p>
        <div className="sb-card-pack-badge">{pointsPack}</div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="sb-card-cta"
        >
          Open Account →
        </a>
      </div>
    </SpotlightCard>
  );
}

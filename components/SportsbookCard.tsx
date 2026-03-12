"use client";

import Image from "next/image";
import SpotlightCard from "./animations/SpotlightCard";
import { trackInitiateCheckout } from "@/lib/tracking";

export interface SportsbookCardProps {
  name: string;
  logo?: string;
  brandColor: string;
  description: string;
  pointsPack?: string;
  ctaHref: string;
  states: string[];
  showDescription?: boolean;
  showPointsPack?: boolean;
}

export default function SportsbookCard({
  name,
  logo,
  brandColor,
  description,
  pointsPack = "+1 FREE POINTS PACK ($39)",
  ctaHref,
  showDescription = true,
  showPointsPack = true,
}: SportsbookCardProps) {
  return (
    <SpotlightCard
      className="sb-card"
      spotlightColor="rgba(255, 255, 255, 0.1)"
    >
      <div className="sb-card-header" style={{ backgroundColor: brandColor }}>
        <span className="sb-card-header-name">{name}</span>
      </div>
      <div className="sb-card-body">
        <div className="flex items-center gap-2">
          {logo && (
            <Image
              src={logo}
              alt=""
              width={32}
              height={32}
              className="sb-card-header-logo"
            />
          )}
          <h3 className="sb-card-name">{name}</h3>
        </div>
        {showDescription && (
          <p className="sb-card-description">{description}</p>
        )}
        {showPointsPack && pointsPack && (
          <div className="sb-card-pack-badge">{pointsPack}</div>
        )}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout("sportsbook_card", name)}
          className="sb-card-cta"
          data-cursor-label="GO"
        >
          OPEN ACCOUNT →
        </a>
      </div>
    </SpotlightCard>
  );
}

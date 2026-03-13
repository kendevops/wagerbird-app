"use client";

import Image from "next/image";
import SpotlightCard from "./animations/SpotlightCard";
import { trackInitiateCheckout } from "@/lib/tracking";

export interface StateOfferOverride {
  states?: string[];
  ctaHref?: string;
  offerText?: string;
  pointsPack?: string;
  features?: string[];
  detailText?: string;
  legalText?: string;
  disclaimer?: string;
}

export interface SportsbookCardProps {
  name: string;
  logo?: string;
  brandColor: string;
  description: string;
  pointsPack?: string;
  ctaHref: string;
  states: string[];
   // Hidden category used for tab filtering (Sportsbooks vs DFS/Sweeps)
  type?: "sportsbook" | "dfs_sweeps";
  showDescription?: boolean;
  showPointsPack?: boolean;
  currentOffer?: string;
  features?: string[];
  stateOffers?: StateOfferOverride[];
}

export interface SportsbookCardComponentProps extends SportsbookCardProps {
  onOpenAccount?: (sportsbook: SportsbookCardProps) => void;
}

export default function SportsbookCard({
  name,
  logo,
  brandColor,
  description,
  pointsPack = "+1 FREE POINTS PACK ($39)",
  ctaHref,
  states,
  showDescription = true,
  showPointsPack = true,
  onOpenAccount,
  ...rest
}: SportsbookCardComponentProps) {
  const sportsbook: SportsbookCardProps = {
    name,
    logo,
    brandColor,
    description,
    pointsPack,
    ctaHref,
    states,
    showDescription,
    showPointsPack,
    ...rest,
  };

  const handleClick = () => {
    trackInitiateCheckout("sportsbook_card", name);
    if (onOpenAccount) {
      onOpenAccount(sportsbook);
    } else {
      window.open(ctaHref, "_blank", "noopener,noreferrer");
    }
  };

  const CtaElement = onOpenAccount ? "button" : "a";
  const ctaProps = onOpenAccount
    ? { type: "button" as const, onClick: handleClick }
    : {
        href: ctaHref,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: handleClick,
      };

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
        <CtaElement
          className="sb-card-cta"
          data-cursor-label="GO"
          {...ctaProps}
        >
          OPEN ACCOUNT →
        </CtaElement>
      </div>
    </SpotlightCard>
  );
}

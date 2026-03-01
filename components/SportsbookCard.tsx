"use client";

import { motion } from "framer-motion";

export interface SportsbookCardProps {
  name: string;
  logoUrl: string;
  offer: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function SportsbookCard({
  name,
  logoUrl,
  offer,
  ctaLabel,
  ctaHref,
}: SportsbookCardProps) {
  return (
    <div className="group relative bg-[#0A0A15] border border-white/5 p-[24px] md:p-[32px] transition-all hover:border-brand-yellow/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-[1] flex flex-col h-full gap-[24px]">
        <div className="h-[48px] flex items-center">
          {logoUrl ? (
            <img src={logoUrl} alt={name} className="h-full w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-all" />
          ) : (
            <span className="font-display text-[24px] font-bold text-white/50">{name}</span>
          )}
        </div>

        <div className="flex flex-col gap-[8px]">
          <span className="font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text/45">Current Offer</span>
          <p className="font-display text-[20px] md:text-[24px] font-bold text-nav-text group-hover:text-brand-yellow transition-colors leading-tight">
            {offer}
          </p>
        </div>

        <a 
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center px-[24px] py-[12px] bg-white/5 border border-white/10 font-mono text-[11px] font-bold tracking-[1.5px] uppercase text-nav-text transition-all hover:bg-brand-yellow hover:text-black hover:border-brand-yellow"
        >
          {ctaLabel} →
        </a>
      </div>
    </div>
  );
}

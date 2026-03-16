"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/tracking";

import SplitText from "./animations/SplitText";
import HeroSignalStack from "./HeroSignalStack";

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 flex flex-col justify-center items-center md:items-start gap-[8px] py-[28px] px-[28px]"
    >
      <span className="font-display text-[clamp(32px,4vw,48px)] font-bold text-brand-yellow leading-none tracking-[-0.01em]">
        {value}
      </span>
      <span className="font-mono text-[10px] font-400 tracking-[2.5px] uppercase text-nav-text/45">
        {label}
      </span>
    </motion.div>
  );
}

interface HeroProps {
  tickerText?: string;
  badgeText?: string;
  title: React.ReactNode;
  description: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageUrl?: string;
  videoUrl?: string;
  rightWord?: string;
  titleText?: string;
  stats?: StatItemProps[];
}

export default function Hero({
  tickerText = "WAGERBIRD Terminal — Confidence-Scored Signals",
  badgeText = "MLB · NBA · NFL · NHL — All Sports Covered",
  title = (
    <>
      Access
      <br />
      The <em className="text-brand-yellow italic font-bold">Edge.</em>
      <br />
      Trade
      <br />
      The Game.
    </>
  ),
  description = "Signals scored by confidence. Priced by conviction. Stop guessing — start winning with the model on your side.",
  primaryCtaLabel = "Buy a Pack →",
  primaryCtaHref = "/pricing#packs",
  secondaryCtaLabel = "Free Picks via Email",
  secondaryCtaHref = "/picks",
  // imageUrl = "https://api.builder.io/api/v1/image/assets/TEMP/e7a48826f4f3592b62edc4a4adaa3da19d8075e3",
  videoUrl,
  rightWord,
  titleText,
  stats,
}: HeroProps) {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    setDateStr(
      now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-[#050510] flex flex-col overflow-hidden">
      {/* Blue radial glow — only when no video is present */}
      {!videoUrl && (
        <div
          className="absolute right-0 top-0 w-[58%] h-full bg-[radial-gradient(ellipse_at_55%_40%,rgba(32,95,255,0.38)_0%,rgba(10,10,100,0.18)_45%,transparent_72%)] pointer-events-none z-0"
          aria-hidden="true"
        />
      )}

      {/* Ticker bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-b border-white/5 bg-black/25 relative z-1 shrink-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center px-[20px] md:px-[48px] py-[8px] md:py-[10px] gap-2 sm:gap-0">
          <span className="font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text text-center sm:text-left">
            {tickerText}
          </span>
          <div className="flex items-center justify-center gap-[8px] text-white min-w-0 sm:min-w-[200px] font-mono text-[10px] font-400 tracking-[1.5px] uppercase">
            <span
              className="w-[6px] h-[6px] rounded-full bg-brand-yellow shrink-0 animate-[live-pulse_2.5s_cubic-bezier(0.4,0,0.6,1)_infinite]"
              aria-hidden="true"
            />
            Live Signals Active
          </div>
          <span className="hidden sm:block font-mono text-[10px] font-500 tracking-[1.5px] uppercase text-nav-text text-right">
            {dateStr}
          </span>
        </div>
      </motion.div>

      {/* Two-column main */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 relative z-1 min-h-0 before:hidden md:before:block before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:bg-white/5 before:z-2">
        {/* Left column */}
        <div className="flex flex-col justify-center px-[20px] md:px-[48px] py-[40px] md:py-[60px] pb-[32px] md:pb-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-[10px] px-[16px] py-[8px] border border-brand-yellow/25 bg-brand-yellow/4 mb-[20px] md:mb-[32px] w-fit cursor-target"
          >
            <span
              className="w-[5px] h-[5px] rounded-full bg-brand-yellow shrink-0"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] font-400 tracking-[1.5px] uppercase text-nav-text/85">
              <SplitText text={badgeText} />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-heading m-0 mb-[20px] md:mb-[32px]"
          >
            {titleText ? (
              <SplitText text={titleText} />
            ) : typeof title === "string" ? (
              <SplitText text={title} />
            ) : (
              title
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-2 border-brand-yellow pl-[20px] mb-[48px]"
          >
            <p className="font-mono text-[13px] font-400 leading-[1.95] text-nav-text/55 m-0 max-w-[360px]">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] md:gap-[20px]"
          >
            <a
              href={primaryCtaHref}
              {...(primaryCtaHref?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-cursor-label="BUY"
              onClick={() =>
                primaryCtaHref?.startsWith("http") &&
                trackInitiateCheckout("hero_primary")
              }
              className="w-full sm:w-auto inline-flex items-center justify-center px-[32px] py-[15px] bg-brand-yellow font-mono text-[11px] font-bold tracking-[1.5px] uppercase text-black whitespace-nowrap transition-all hover:bg-white hover:-translate-y-px cursor-target clip-btn"
            >
              {primaryCtaLabel}
            </a>
            {secondaryCtaLabel && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                {...(secondaryCtaHref.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-cursor-label="FREE"
                className="w-full sm:w-auto inline-flex items-center justify-center px-[32px] py-[14px] border border-nav-text/15 font-mono text-[11px] font-400 tracking-[1.5px] uppercase text-nav-text/55 whitespace-nowrap transition-all hover:border-nav-text/40 hover:text-white hover:bg-white/3 cursor-target"
              >
                {secondaryCtaLabel}
              </a>
            )}
          </motion.div>
        </div>

        {/* Right column — rightWord, video, or animated signal stack */}
        {rightWord || videoUrl ? (
          <div
            className={`relative overflow-hidden items-center justify-center bg-[#050510] min-h-[280px] md:min-h-0 ${
              videoUrl ? "flex" : "hidden md:flex"
            }`}
          >
            {videoUrl && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute inset-0 w-full h-full -scale-x-100"
              >
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-[90%_50%]"
                />
                {/* Subtle left-edge gradient fade to blend with left panel */}
                <div
                  className="absolute inset-y-0 left-0 w-[120px] bg-linear-to-r from-[#050510] to-transparent pointer-events-none z-10"
                  aria-hidden="true"
                />
              </motion.div>
            )}

            {rightWord && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative z-20 flex items-center justify-center"
                aria-hidden="true"
              >
                {/* Subtle yellow radial glow behind the word — only when no video or as light overlay */}
                {!videoUrl && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(228,242,34,0.07)_0%,transparent_65%)] pointer-events-none" />
                )}
                <motion.span
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hero-right-word select-none"
                >
                  {rightWord}
                </motion.span>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex relative overflow-hidden items-center justify-center">
            <HeroSignalStack />
          </div>
        )}
      </div>

      {/* Bottom stats */}
      {stats && stats.length > 0 && (
        <div className="flex flex-col md:flex-row items-center md:items-stretch relative z-1 shrink-0 border-t border-white/8 bg-[#050510] min-h-[104px]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center md:items-stretch flex-1"
            >
              <StatItem value={stat.value} label={stat.label} />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px self-stretch bg-white/8 shrink-0 m-0" />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

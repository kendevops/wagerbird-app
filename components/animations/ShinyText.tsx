"use client";

import React, { useMemo, CSSProperties } from "react";

export interface ShinyTextProps {
  text: string;
  color?: string;
  shineColor?: string;
  speed?: number;
  delay?: number;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  color = "#b5b5b5",
  shineColor = "#ffffff",
  speed = 2,
  delay = 0,
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  disabled = false,
  className = "",
  style,
}) => {
  const gradient = useMemo(() => {
    const angle = spread;
    return `linear-gradient(${direction === "left" ? angle : -angle}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`;
  }, [color, shineColor, spread, direction]);

  const animationName = useMemo(() => `shine-${Math.random().toString(36).slice(2, 7)}`, []);
  const duration = `${speed}s`;
  const delayMs = `${delay}s`;

  const keyframes = `
    @keyframes ${animationName} {
      0% { background-position: -150% center; }
      50% { background-position: 150% center; }
      100% { background-position: ${yoyo ? "-150%" : "150%"} center; }
    }
  `;

  const hoverPause = pauseOnHover ? `{ animation-play-state: paused; }` : ``;

  const rootStyle: CSSProperties = {
    backgroundImage: gradient,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    lineHeight: 1.1,
    fontWeight: 500,
    backgroundSize: "200% 100%",
    animation: `${animationName} ${duration} linear ${delayMs} infinite`,
    ...(style || {}),
  };

  const cls = ["shiny-text", className, disabled ? "disabled" : ""].filter(Boolean).join(" ");

  return (
    <>
      <style>{keyframes}</style>
      <span
        className={cls}
        style={rootStyle}
        aria-label={text}
      >
        {text}
      </span>

      <style>
        {`
          .${cls}:hover {
            ${hoverPause}
          }

          .${cls}.disabled {
            animation: none;
            background: none;
            -webkit-background-clip: initial;
            background-clip: initial;
            color: ${color};
            background-image: none;
          }
        `}
      </style>
    </>
  );
};

export default ShinyText;

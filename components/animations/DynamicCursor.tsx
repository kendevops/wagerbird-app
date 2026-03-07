"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/** Relative luminance (0–1). Samples first opaque background up the tree. */
function parseBgAndLuminance(el: Element | null): number {
  const defaultLum = 0.05;
  let current: Element | null = el;

  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    const bg = style.backgroundColor;
    if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") {
      current = current.parentElement;
      continue;
    }
    const rgba = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgba) {
      const a = rgba[4] != null ? parseFloat(rgba[4]) : 1;
      if (a < 0.15) { current = current.parentElement; continue; }
      const r = +rgba[1], g = +rgba[2], b = +rgba[3];
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    const hex = bg.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
    if (hex) {
      let r: number, g: number, b: number;
      if (hex[1].length === 3) {
        r = parseInt(hex[1][0] + hex[1][0], 16);
        g = parseInt(hex[1][1] + hex[1][1], 16);
        b = parseInt(hex[1][2] + hex[1][2], 16);
      } else {
        r = parseInt(hex[1].slice(0, 2), 16);
        g = parseInt(hex[1].slice(2, 4), 16);
        b = parseInt(hex[1].slice(4, 6), 16);
      }
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    current = current.parentElement;
  }
  return defaultLum;
}

/**
 * Custom Dynamic Cursor with background-aware colors.
 * Samples background under cursor and switches to high-contrast colors.
 */
export default function DynamicCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const [label, setLabel] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const updateFromPoint = useCallback((x: number, y: number) => {
    const el = document.elementFromPoint(x, y);
    const bgLum = parseBgAndLuminance(el);
    setIsLightBg(bgLum > 0.4);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      updateFromPoint(e.clientX, e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("a, button, [role='button'], .cursor-target") as HTMLElement;

      if (cursorTarget) {
        setIsHovering(true);
        const newLabel = cursorTarget.getAttribute("data-cursor-label") || cursorTarget.getAttribute("data-label") || "";
        if (label !== newLabel) setLabel(newLabel);
      } else {
        setIsHovering(false);
        if (label !== "") setLabel("");
      }
      updateFromPoint(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, label, updateFromPoint]);

  return (
    <>
      {/* Central Dot */}
      <motion.div
        id="cd"
        className={`${isHovering ? "h" : ""} ${isLightBg ? "l" : ""}`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        id="cr"
        className={`${isHovering ? "h" : ""} ${isLightBg ? "l" : ""} ${label ? "sl" : ""}`}
        data-label={label}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <style>{`
        /* Cursor colors: solid high-contrast (no mix-blend-mode) */
        :root {
          --cursor-dot-dark: #FFFFFF;
          --cursor-dot-light: #07070F;
          --cursor-ring-dark: #FFFFFF;
          --cursor-ring-light: #07070F;
        }

        body, a, button, [role="button"], .cursor-target {
          cursor: none;
        }

        #cd {
          position: fixed;
          pointer-events: none;
          z-index: 99999;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cursor-dot-dark);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.3);
          transition: width .25s cubic-bezier(.16,1,.3,1), height .25s, opacity .25s, background .25s;
          will-change: transform;
        }

        #cd.h {
          width: 4px;
          height: 4px;
          opacity: .6;
        }

        #cd.l {
          background: var(--cursor-dot-light);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
        }

        #cr {
          position: fixed;
          pointer-events: none;
          z-index: 99998;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid var(--cursor-ring-dark);
          background: rgba(255,255,255,0.03);
          transition: width .45s cubic-bezier(.16,1,.3,1), height .45s, border-color .25s, background .25s;
          will-change: transform;
        }

        #cr.h {
          width: 64px;
          height: 64px;
          border-color: var(--cursor-ring-dark);
          background: rgba(255,255,255,0.06);
        }

        #cr.l {
          border-color: var(--cursor-ring-light);
          background: rgba(7,7,15,0.03);
        }

        #cr.l.h {
          border-color: var(--cursor-ring-light);
          background: rgba(7,7,15,0.06);
        }

        #cr::after {
          content: attr(data-label);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-space-mono), 'Space Mono', monospace;
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--cursor-ring-dark);
          white-space: nowrap;
          opacity: 0;
          transition: opacity .2s;
          pointer-events: none;
          font-weight: 600;
        }

        #cr.sl::after {
          opacity: 1;
        }

        #cr.l::after {
          color: var(--cursor-ring-light);
        }

        @media (hover: none) and (pointer: coarse) {
          #cd, #cr { display: none; }
          body, a, button, [role="button"], .cursor-target { cursor: auto; }
        }
      `}</style>
    </>
  );
}

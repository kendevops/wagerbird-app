"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * Custom Dynamic Cursor component based on provided design specs.
 * Features a central dot (#cd) and an outer ring (#cr).
 * Handles hovering states and dynamic labels.
 */
export default function DynamicCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isBlue, setIsBlue] = useState(false);
  const [label, setLabel] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth movement for both elements
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Look for elements that should trigger hover state or have custom labels
      const cursorTarget = target.closest("a, button, [role='button'], .cursor-target") as HTMLElement;

      if (cursorTarget) {
        setIsHovering(true);
        // Extract label from data-cursor-label or data-label
        const newLabel = cursorTarget.getAttribute("data-cursor-label") || cursorTarget.getAttribute("data-label") || "";
        if (label !== newLabel) setLabel(newLabel);

        // Detect if we should use the "light/blue" theme
        const blueTrigger = cursorTarget.classList.contains("cursor-blue") ||
                            !!cursorTarget.closest(".bg-white, .section-light, .theme-light, .cta-section, .hiw-section, .map-section, .email-capture-section, .access-models-section");
        if (isBlue !== blueTrigger) setIsBlue(blueTrigger);
      } else {
        setIsHovering(false);
        if (label !== "") setLabel("");
        // Reset to default blue state based on section
        const blueTrigger = !!target.closest(".bg-white, .section-light, .theme-light, .cta-section, .hiw-section, .map-section, .email-capture-section, .access-models-section");
        if (isBlue !== blueTrigger) setIsBlue(blueTrigger);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Central Dot */}
      <motion.div
        id="cd"
        className={`${isHovering ? "h" : ""} ${isBlue ? "l" : ""}`}
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
        className={`${isHovering ? "h" : ""} ${isBlue ? "l" : ""} ${label ? "sl" : ""}`}
        data-label={label}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <style>{`
        :root {
          /* Local overrides using brand variables */
          --y: var(--color-yellow, #E4F222);
          --b: var(--color-dark-blue, #0025E1);
        }

        /* Hide default cursor globally */
        body, a, button, [role="button"], .cursor-target {
          cursor: none;
        }

        /* Cursor Dot (#cd) */
        #cd {
          position: fixed;
          pointer-events: none;
          z-index: 99999;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--y);
          mix-blend-mode: difference;
          transition: 
            width .25s cubic-bezier(.16,1,.3,1), 
            height .25s, 
            opacity .25s, 
            background .25s;
          will-change: transform;
        }

        #cd.h {
          width: 4px;
          height: 4px;
          opacity: .4;
        }

        #cd.l {
          background: var(--b);
        }

        /* Cursor Ring (#cr) */
        #cr {
          position: fixed;
          pointer-events: none;
          z-index: 99998;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(228, 242, 34, .5);
          mix-blend-mode: difference;
          transition:
            width .45s cubic-bezier(.16,1,.3,1),
            height .45s,
            border-color .3s,
            background .3s;
          will-change: transform;
        }

        #cr.h {
          width: 64px;
          height: 64px;
          border-color: var(--y);
          background: rgba(228, 242, 34, .06);
        }

        #cr.l {
          border-color: rgba(0, 37, 225, .4);
        }

        #cr.l.h {
          border-color: var(--b);
          background: rgba(0, 37, 225, .06);
        }

        /* Label inside ring */
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
          color: var(--y);
          white-space: nowrap;
          opacity: 0;
          transition: opacity .2s;
          pointer-events: none;
          mix-blend-mode: difference;
        }

        #cr.sl::after {
          opacity: 1;
        }

        #cr.l::after {
          color: var(--b);
        }

        /* Responsive handling for touch devices */
        @media (hover: none) and (pointer: coarse) {
          #cd, #cr {
            display: none;
          }
          body, a, button, [role="button"], .cursor-target {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function TargetCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const sizeX = useSpring(useMotionValue(40), springConfig);
  const sizeY = useSpring(useMotionValue(40), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("a, button, [role='button'], .cursor-target") as HTMLElement;

      if (cursorTarget) {
        setIsHovering(true);
        const rect = cursorTarget.getBoundingClientRect();
        setTargetRect(rect);
        
        // Lock to target center or expand to cover?
        // Let's expand to cover with some padding
        const padding = 8;
        sizeX.set(rect.width + padding * 2);
        sizeY.set(rect.height + padding * 2);
        mouseX.set(rect.left + rect.width / 2);
        mouseY.set(rect.top + rect.height / 2);
      } else {
        setIsHovering(false);
        setTargetRect(null);
        sizeX.set(40);
        sizeY.set(40);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, sizeX, sizeY]);

  return (
    <div className="target-cursor-wrapper">
      <motion.div
        className="target-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          width: sizeX,
          height: sizeY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Four corners */}
        <div className="corner top-left" />
        <div className="corner top-right" />
        <div className="corner bottom-left" />
        <div className="corner bottom-right" />
        
        {/* Central dot (optional) */}
        {!isHovering && <div className="center-dot" />}
      </motion.div>

      <style>
        {`
          .target-cursor-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 10000;
          }

          .target-cursor {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.3s ease;
            mix-blend-mode: difference;
          }

          .corner {
            position: absolute;
            width: 8px;
            height: 8px;
            border-color: #FFFFFF;
            border-style: solid;
          }

          .top-left {
            top: 0;
            left: 0;
            border-width: 2px 0 0 2px;
          }

          .top-right {
            top: 0;
            right: 0;
            border-width: 2px 2px 0 0;
          }

          .bottom-left {
            bottom: 0;
            left: 0;
            border-width: 0 0 2px 2px;
          }

          .bottom-right {
            bottom: 0;
            right: 0;
            border-width: 0 2px 2px 0;
          }

          .center-dot {
            width: 4px;
            height: 4px;
            background: #FFFFFF;
            border-radius: 50%;
          }

          /* Hide default cursor globally */
          body {
            cursor: none;
          }

          a, button, [role="button"], .cursor-target {
            cursor: none;
          }

          @media (hover: none) and (pointer: coarse) {
            .target-cursor-wrapper {
              display: none;
            }
            body {
              cursor: auto;
            }
          }
        `}
      </style>
    </div>
  );
}

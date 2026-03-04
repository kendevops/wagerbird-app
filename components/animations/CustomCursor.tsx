"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollHue, setScrollHue] = useState(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth out the movement
  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleScroll = () => {
      // Change color based on scroll position
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / scrollHeight;
      setScrollHue(scrollPercentage * 360);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Initial check for scroll position
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <motion.div
      className="custom-cursor-container"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: `hsl(${scrollHue}, 100%, 50%)`,
      }}
    >
      <motion.div
        className="custom-cursor-circle"
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <style>
        {`
          .custom-cursor-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            will-change: transform;
            transition: background-color 0.2s ease;
          }
          
          .custom-cursor-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: inherit;
          }

          @media (hover: none) and (pointer: coarse) {
            .custom-cursor-container {
              display: none;
            }
          }
        `}
      </style>
    </motion.div>
  );
}

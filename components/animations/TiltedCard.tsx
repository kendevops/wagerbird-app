"use client";

import React, { useRef, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  rotateDegree?: number;
  scale?: number;
  perspective?: number;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = '',
  rotateDegree = 15,
  scale = 1.05,
  perspective = 1000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateDegree, -rotateDegree]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateDegree, rotateDegree]), springConfig);
  const scaleSpring = useSpring(1, springConfig);

  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    containerRef.current.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
    containerRef.current.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);

    setOpacity(0.6);
  };

  const handleMouseEnter = () => {
    scaleSpring.set(scale);
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    scaleSpring.set(1);
    x.set(0);
    y.set(0);
    setOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ perspective }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {children}
        {/* Shine effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1), transparent 80%)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default TiltedCard;

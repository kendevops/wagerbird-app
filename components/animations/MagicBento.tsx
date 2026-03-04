"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

// ─── Types ───────────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface MagicBentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
  enableParticles?: boolean;
  style?: React.CSSProperties;
}

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
  enableSpotlight?: boolean;
  glowColor?: string;
}

// ─── BentoCard ───────────────────────────────────────────
export const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  children,
  className = '',
  glowColor = '228, 242, 34',
  enableTilt = true,
  enableParticles = true,
  style,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const isHoveredRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  // Tilt spring physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { damping: 20, stiffness: 250 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { damping: 20, stiffness: 250 });
  const scaleSpring = useSpring(1, { damping: 20, stiffness: 250 });

  // ── Particle animation loop ──
  const runParticles = useCallback(() => {
    if (!isHoveredRef.current) return;

    if (!cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();

    setParticles(prev => {
      // Age existing particles
      const alive = prev
        .map(p => ({ ...p, life: p.life - 1, x: p.x + p.vx, y: p.y + p.vy, vy: p.vy + 0.05 }))
        .filter(p => p.life > 0);

      // Spawn new ones if hovered
      if (isHoveredRef.current && alive.length < 20) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 30 + Math.random() * 30,
          maxLife: 60,
          size: 2 + Math.random() * 3,
        };
        return [...alive, newParticle];
      }
      return alive;
    });

    animFrameRef.current = requestAnimationFrame(runParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    if (enableTilt) {
      mouseX.set(x);
      mouseY.set(y);
    }
    // Update glow CSS vars
    cardRef.current.style.setProperty('--glow-x', `${x * 100}%`);
    cardRef.current.style.setProperty('--glow-y', `${y * 100}%`);
    cardRef.current.style.setProperty('--glow-intensity', '1');
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (enableTilt) scaleSpring.set(1.03);
    if (enableParticles) runParticles();
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    mouseX.set(0.5);
    mouseY.set(0.5);
    scaleSpring.set(1);
    if (cardRef.current) {
      cardRef.current.style.setProperty('--glow-intensity', '0');
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    // Let existing particles fade naturally
    setTimeout(() => setParticles([]), 500);
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`magic-bento-card ${className}`}
      style={{
        ...style,
        ['--glow-color' as string]: glowColor,
        perspective: enableTilt ? 800 : undefined,
      }}
    >
      <motion.div
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          scale: scaleSpring,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </motion.div>

      {/* Border glow overlay */}
      <div className="magic-bento-card__glow" aria-hidden="true" />

      {/* Particles */}
      {enableParticles && particles.map(p => (
        <div
          key={p.id}
          className="magic-bento-particle"
          aria-hidden="true"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.life / p.maxLife,
          }}
        />
      ))}
    </div>
  );
};

// ─── Global Spotlight ─────────────────────────────────────
const GlobalSpotlight: React.FC<{
  containerRef: React.RefObject<HTMLDivElement | null>;
  glowColor?: string;
}> = ({ containerRef, glowColor = '228, 242, 34' }) => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isInside = false;

    const onMove = (e: MouseEvent) => {
      if (!spotRef.current || !isInside) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      spotRef.current.style.opacity = '1';
    };

    const onEnter = () => { isInside = true; };
    const onLeave = () => {
      isInside = false;
      if (spotRef.current) spotRef.current.style.opacity = '0';
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [containerRef]);

  return (
    <div
      ref={spotRef}
      className="magic-bento-spotlight"
      aria-hidden="true"
      style={{
        background: `radial-gradient(circle, rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.06) 20%, rgba(${glowColor}, 0.02) 40%, transparent 65%)`,
        opacity: 0,
      }}
    />
  );
};

// ─── MagicBento (container) ───────────────────────────────
export const MagicBento: React.FC<MagicBentoProps> = ({
  children,
  className = '',
  enableSpotlight = true,
  glowColor = '228, 242, 34',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`magic-bento-grid ${className}`} style={{ position: 'relative' }}>
      {enableSpotlight && (
        <GlobalSpotlight containerRef={containerRef} glowColor={glowColor} />
      )}
      {children}
    </div>
  );
};

export default MagicBento;

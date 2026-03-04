"use client";

import { useEffect, useState, useRef } from 'react';

/**
 * DecryptedText
 * A React + TypeScript component that simulates a decryption/scramble effect.
 *
 * Props:
 * - text: string (required) - The final text to reveal
 * - speed: number (default: 50) - Speed of the scramble in ms
 * - maxIterations: number (default: 10) - How many times to scramble each char
 * - sequential: boolean (default: false) - Whether to reveal characters one by one
 * - revealDirection: 'start' | 'end' | 'center' (default: 'start') - Direction of reveal
 * - useOriginalCharsOnly: boolean (default: false) - Scramble using only the target chars
 * - characters: string (default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+')
 * - className: string - Class for the final text
 * - encryptedClassName: string - Class for the scrambled text
 * - parentClassName: string - Class for the container
 * - animateOn: 'view' | 'hover' | 'both' (default: 'view')
 */

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover' | 'both';
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
  className = '',
  encryptedClassName = '',
  parentClassName = '',
  animateOn = 'view',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const targetChars = useOriginalCharsOnly ? text : characters;

  useEffect(() => {
    let observer: IntersectionObserver;
    if (animateOn === 'view' || animateOn === 'both') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isAnimating) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
    }
    return () => observer?.disconnect();
  }, [text, animateOn]);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        const result = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            // Logic for revealing characters
            let shouldReveal = false;
            if (sequential) {
              if (revealDirection === 'start') shouldReveal = iteration > index * (maxIterations / 3);
              if (revealDirection === 'end') shouldReveal = iteration > (text.length - index) * (maxIterations / 3);
              if (revealDirection === 'center') {
                const center = text.length / 2;
                const dist = Math.abs(index - center);
                shouldReveal = iteration > (center - dist) * (maxIterations / 3);
              }
            } else {
              shouldReveal = iteration >= maxIterations;
            }

            if (shouldReveal) return char;
            return targetChars[Math.floor(Math.random() * targetChars.length)];
          })
          .join('');
        return result;
      });

      iteration++;
      if (iteration > maxIterations + (sequential ? text.length : 0)) {
        clearInterval(interval);
        setIsAnimating(false);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    if (isHovering && (animateOn === 'hover' || animateOn === 'both')) {
      startAnimation();
    }
  }, [isHovering]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={isAnimating ? encryptedClassName : className}>
        {displayText || text}
      </span>
    </span>
  );
};

export default DecryptedText;

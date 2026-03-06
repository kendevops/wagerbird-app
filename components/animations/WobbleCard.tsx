"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

const WobbleCard: React.FC<WobbleCardProps> = ({
  children,
  containerClassName = "",
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovering ? mousePosition.y * 12 : 0,
        rotateY: isHovering ? -mousePosition.x * 12 : 0,
        scale: isHovering ? 1.03 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full overflow-hidden ${containerClassName}`}
    >
      <motion.div
        animate={{
          x: isHovering ? -mousePosition.x * 20 : 0,
          y: isHovering ? -mousePosition.y * 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
        style={{
            transformStyle: "preserve-3d",
        }}
        className={`h-full ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default WobbleCard;

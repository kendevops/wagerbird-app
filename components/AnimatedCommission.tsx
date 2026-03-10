"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function AnimatedCommission() {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView && mounted) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(0, 30, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value).toString() + "%";
          },
        });

        return () => controls.stop();
      }
    }
  }, [inView, mounted]);

  return (
    <motion.span
      ref={nodeRef}
      className="aff-commission-value"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      0%
    </motion.span>
  );
}

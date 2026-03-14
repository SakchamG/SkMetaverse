"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SnakeCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  // Faster spring configuration for more responsiveness
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <motion.div
        className="absolute rounded-full border-2 border-primary"
        style={{
          left: smoothX,
          top: smoothY,
          width: 24,
          height: 24,
          x: "-50%",
          y: "-50%",
          backgroundColor: "transparent",
        }}
      />
      <motion.div
        className="absolute rounded-full bg-primary"
        style={{
          left: mouseX,
          top: mouseY,
          width: 8,
          height: 8,
          x: "-50%",
          y: "-50%",
        }}
      />
    </div>
  );
}

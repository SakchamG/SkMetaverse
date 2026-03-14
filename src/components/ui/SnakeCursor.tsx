"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SnakeCursor() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [enabled, mouseX, mouseY]);

  // Faster spring configuration for more responsiveness
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  if (!enabled) return null;

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

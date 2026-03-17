 "use client";
 
 import { MotionConfig } from "framer-motion";
 import { useEffect, useState } from "react";
 
 export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
 
   useEffect(() => {
     const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const apply = () => setIsMobile(mq.matches);
     apply();
     mq.addEventListener("change", apply);
     return () => mq.removeEventListener("change", apply);
   }, []);
 
   return (
    <MotionConfig
      reducedMotion="user"
      transition={isMobile ? { duration: 0.28, ease: "easeOut" } : { duration: 0.45, ease: "easeOut" }}
    >
       {children}
     </MotionConfig>
   );
 }
 

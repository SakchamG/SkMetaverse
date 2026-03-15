 "use client";
 
 import { MotionConfig } from "framer-motion";
 import { useEffect, useState } from "react";
 
 export function MotionProvider({ children }: { children: React.ReactNode }) {
   const [reduce, setReduce] = useState(false);
 
   useEffect(() => {
     const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
     const apply = () => setReduce(mq.matches);
     apply();
     mq.addEventListener("change", apply);
     return () => mq.removeEventListener("change", apply);
   }, []);
 
   return (
     <MotionConfig reducedMotion={reduce ? "always" : "user"}>
       {children}
     </MotionConfig>
   );
 }
 

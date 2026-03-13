"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, Layout, TrendingUp, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

const steps = [
  { icon: Search, title: "Discovery", desc: "We dive deep into your business goals and user needs." },
  { icon: Layout, title: "Strategy", desc: "We plan the architecture and user journey for success." },
  { icon: PenTool, title: "Design", desc: "We craft beautiful, intuitive, and engaging interfaces." },
  { icon: Code2, title: "Development", desc: "We build scalable solutions using cutting-edge tech." },
  { icon: ShieldCheck, title: "Testing", desc: "We ensure bug-free performance and security." },
  { icon: Rocket, title: "Launch", desc: "We deploy your product and monitor its performance." },
  { icon: TrendingUp, title: "Growth", desc: "We help you scale with marketing and updates." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-wider uppercase text-sm"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6"
          >
            Our Proven Process
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY, transformOrigin: "top" }} 
               className="w-full h-full bg-gradient-to-b from-[#23CED9] to-[#2563EB]"
             />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-[#23CED9] z-20 shadow-[0_0_20px_rgba(35,206,217,0.5)]" />

                {/* Content Card */}
                <div className={`w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
                }`}>
                   <div className="group relative">
                      <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-[1px] bg-border ${
                        index % 2 === 0 ? "-right-16" : "-left-16"
                      }`} />
                      
                      <Card className="p-6 card-hover-gradient border-border bg-card relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                         <div className={`absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl font-heading transition-opacity group-hover:opacity-20`}>
                           0{index + 1}
                         </div>
                         <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary ${
                           index % 2 === 0 ? "ml-auto" : "mr-auto"
                         }`}>
                           <step.icon size={24} />
                         </div>
                         <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                         <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </Card>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

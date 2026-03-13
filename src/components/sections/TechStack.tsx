"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Cpu, Cloud, Globe, Layers, Server } from "lucide-react";

// Split into 2 curated rows for a cleaner look
const row1 = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Three.js", "React Native", "Expo", "Swift", "Kotlin", "Vue.js", "Html 5", "JavaScript"
];

const row2 = [
  "Node.js", "Python", "PostgreSQL", "Supabase", "OpenAI", 
  "AWS", "Docker", "GraphQL", "Redis", "LangChain", "FastAPI", "PythonAnyWhere"
];

const MarqueeRow = ({ items, direction, speed }: { items: string[], direction: number, speed: number }) => {
  return (
    <div className="relative flex overflow-hidden py-6 group">
      {/* Gradient Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: direction === 1 ? [0, "-50%"] : ["-50%", 0] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {/* Quadruple items for smoother infinite loop on wide screens */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div 
            key={i}
            className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors cursor-default select-none"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function TechStack() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Technology</span>
                <h2 className="text-4xl md:text-6xl font-bold font-heading mt-4 mb-6">
                    Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Precision</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    We utilize a cutting-edge stack to deliver robust and scalable solutions.
                </p>
            </motion.div>
        </div>

        <div className="flex flex-col gap-4">
            <MarqueeRow 
                items={row1} 
                direction={1} 
                speed={60} // Slower speed (higher duration)
            />
            <MarqueeRow 
                items={row2} 
                direction={-1} 
                speed={60} // Slower speed (higher duration)
            />
        </div>
    </section>
  );
}

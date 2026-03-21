"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Skmetaverse", },
  { name: "Skmetaverse", },
  { name: "Skmetaverse", },
];

export function TrustBar() {
  const duplicatedBrands = [...brands, ...brands]; // Duplicate for seamless infinite loop

  return (
    <section className="py-16 md:py-24 border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm relative overflow-hidden">
      {/* Subtle Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 dark:opacity-100" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-[0.3em]"
        >
          Skmetaverse — Empowering Digital Realities
        </motion.p>

        {/* Marquee Container with edge fading masks */}
        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)' }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex items-center w-max gap-12 md:gap-24 pr-12 md:pr-24"
          >
            {duplicatedBrands.map((brand, i) => {
              return (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex items-center gap-3 text-muted-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src="/logo.png"
                    alt="Skmetaverse Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300 object-contain rounded-full"
                  />
                  <span className="text-xl md:text-2xl font-bold font-heading tracking-tight">{brand.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

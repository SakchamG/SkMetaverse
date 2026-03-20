"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { teamMembers } from "@/content/team";
import { Card } from "@/components/ui/Card";

export function Founder() {
  const containerRef = useRef<HTMLDivElement>(null);

  const team = teamMembers;
  const [base, setBase] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<typeof teamMembers[number] | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const next = () => setBase((b) => (b + 1) % team.length);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  useEffect(() => {
    if (paused || isMobile) return;
    const id = setInterval(() => setBase((b) => (b + 1) % team.length), 3500);
    return () => clearInterval(id);
  }, [paused, isMobile, team.length]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Visionary Leadership
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#23CED9] dark:from-[#23CED9] dark:via-[#F472B6] dark:to-[#8B5CF6] drop-shadow-sm">Future of Digital.</span>
            </h2>
            
            <div className="relative mb-12">
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed px-4 sm:px-8">
                    &ldquo;SkMetaverse isn&apos;t just an agency; it&apos;s a launchpad for the next generation of unicorns. We bridge the gap between ambitious ideas and technical reality.&rdquo;
                </blockquote>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                We believe that every startup deserves world-class design and engineering. We&apos;re not just a service provider; we&apos;re your technical partner in growth, committed to turning your ambitious ideas into reality.
              </p>
              <p>
                Our team combines creative design with robust engineering to deliver products that not only look amazing but perform flawlessly at scale.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                    <h4 className="text-3xl sm:text-4xl font-bold text-foreground drop-shadow-[0_0_22px_rgba(124,58,237,0.55)]">50+</h4>
                    <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl sm:text-4xl font-bold text-foreground drop-shadow-[0_0_22px_rgba(217,70,239,0.55)]">98%</h4>
                    <p className="text-sm text-muted-foreground mt-1">Client Retention</p>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl sm:text-4xl font-bold text-foreground drop-shadow-[0_0_22px_rgba(35,206,217,0.55)]">24/7</h4>
                    <p className="text-sm text-muted-foreground mt-1">Support</p>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 sm:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Core Team</span>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mt-2">Meet the People</h3>
            </div>
            <div className="hidden sm:flex gap-3">
              <button
                onClick={() => setPaused((p) => !p)}
                className="h-10 px-4 rounded-full border border-border hover:bg-primary/10 transition text-sm"
                aria-label="Toggle auto slide"
              >
                {paused ? "Play" : "Stop"}
              </button>
              <button
                onClick={next}
                className="h-10 w-10 rounded-full border border-border hover:bg-primary/10 transition"
                aria-label="Next card"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0,1,2].map((col) => {
              const m = team[(base + col) % team.length];
              return (
                <motion.div
                  key={col}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.4, delay: col * 0.05 }}
                >
                  <div
                    className="neon-card h-[22rem] rounded-2xl cursor-pointer"
                    onClick={() => setSelected(m)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="neon-inner">
                      <div className="relative h-full w-full">
                        <Image src={m.imageSrc} alt={m.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="text-xl font-bold">{m.name}</div>
                          <div className="text-sm text-white/80 drop-shadow-sm">{m.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="sm:hidden grid grid-cols-2 gap-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.32, delay: i * 0.03 }}
              >
                <Card
                  className="overflow-hidden border border-border bg-card/80 cursor-pointer"
                  onClick={() => setSelected(m)}
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image src={m.imageSrc} alt={m.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-sm font-bold leading-tight">{m.name}</div>
                      <div className="text-[11px] text-white/80 leading-snug">{m.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-none sm:backdrop-blur-sm flex items-center justify-center"
              onClick={() => setSelected(null)}
            >
              <div
                className="relative w-full max-w-xl mx-4 rounded-2xl overflow-hidden border border-white/10 bg-card"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80 w-full">
                  <Image src={selected.imageSrc} alt={selected.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-6 text-foreground">
                  <h3 className="text-2xl font-heading font-bold">{selected.name}</h3>
                  <p className="text-primary font-medium mt-1">{selected.role}</p>
                  <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Dedicated team member at SkMetaverse contributing to high‑impact projects across design and engineering.
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="#" className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

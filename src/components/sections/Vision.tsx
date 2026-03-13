"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
  Sparkles,
  Target,
  Layers,
  ShieldCheck,
  Rocket,
  BrainCircuit,
} from "lucide-react";

export function Vision() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Innovate With Purpose",
      desc:
        "At SK Metaverse we merge creativity with deep engineering to build digital products that feel magical, intuitive, and deliver measurable business value.",
    },
    {
      icon: Target,
      title: "Human-Centered Design",
      desc:
        "Great technology starts with people. Every interface we design prioritizes usability, accessibility, and delightful user experience across all devices.",
    },
    {
      icon: Layers,
      title: "Built To Scale",
      desc:
        "From startup MVPs to enterprise platforms, we architect systems designed for performance, security, and long-term scalability.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible AI",
      desc:
        "We integrate AI responsibly with transparency, data privacy, and ethical standards that strengthen trust between businesses and their customers.",
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      desc:
        "We help founders transform bold ideas into real products with rapid prototyping, product strategy, and scalable technology infrastructure.",
    },
    {
      icon: BrainCircuit,
      title: "AI-Driven Innovation",
      desc:
        "Our expertise in artificial intelligence enables businesses to automate workflows, analyze data intelligently, and unlock new opportunities.",
    },
  ];

  return (
    <section id="vision" className="py-28 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Our Vision
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-5">
            Designing The Future Of Digital Experiences
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            At <span className="text-foreground font-medium">SK Metaverse</span>,
            our mission is to empower ambitious companies with elegant digital
            products, scalable technology, and AI-driven innovation that create
            meaningful real-world impact.
          </p>
        </motion.div>

        {/* Vision pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full group">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-[#7C3AED]/25 via-[#D946EF]/20 to-[#23CED9]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative h-full p-7 bg-card/80 border-border hover:border-primary/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <p.icon size={20} />
                    </div>

                    <h3 className="font-heading font-semibold text-lg">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statement + stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center"
        >
          <div className="lg:col-span-2">
            <Card className="p-10 bg-gradient-to-br from-purple-500/10 via-violet-500/10 to-indigo-500/10 border-border">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                We believe the best products feel inevitable — thoughtfully
                designed, technically excellent, and laser-focused on solving
                real problems for real people. That’s the standard we hold for
                every product we build.
              </p>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-foreground drop-shadow-[0_0_18px_rgba(124,58,237,0.55)]">
                50+
              </h4>
              <p className="text-sm text-muted-foreground">
                Projects Delivered
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-foreground drop-shadow-[0_0_18px_rgba(217,70,239,0.5)]">
                98%
              </h4>
              <p className="text-sm text-muted-foreground">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-foreground drop-shadow-[0_0_18px_rgba(35,206,217,0.5)]">
                24/7
              </h4>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

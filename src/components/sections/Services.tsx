"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Cpu, TrendingUp, Briefcase, Zap, Video, Camera, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  { 
    id: "scaling",
    icon: Zap, 
    title: "Business Scaling", 
    desc: "Helping companies scale from scratch to the next level.",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  { 
    id: "web",
    icon: Code, 
    title: "Web Development", 
    desc: "High-performance websites using Next.js & React.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  { 
    id: "mobile",
    icon: Smartphone, 
    title: "Mobile Apps", 
    desc: "Native iOS & Android apps with React Native.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2 lg:row-span-2",
    className: "h-full flex flex-col justify-between"
  },
  { 
    id: "uiux",
    icon: Palette, 
    title: "UI/UX Design", 
    desc: "Stunning interfaces that users love.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  { 
    id: "ai",
    icon: Cpu, 
    title: "AI Integration", 
    desc: "Custom AI solutions with OpenAI & LangChain.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  { 
    id: "hotel-ai",
    icon: Phone, 
    title: "Hotel AI Integration", 
    desc: "AI call agents for bookings, FAQs, and guest support automation.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  { 
    id: "marketing",
    icon: TrendingUp, 
    title: "Digital Marketing", 
    desc: "SEO, Ads & Social Media growth strategies.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  { 
    id: "consulting",
    icon: Briefcase, 
    title: "Consulting", 
    desc: "Expert advice for startups and businesses.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  {
    id: "ai-animation",
    icon: Video,
    title: "AI Animation",
    desc: "Cutting-edge AI-powered animation & motion graphics.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  {
    id: "video-editing",
    icon: Camera,
    title: "Video Editing",
    desc: "Professional editing for high-impact content.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  },
  {
    id: "photo-editing",
    icon: Camera,
    title: "Photo Editing",
    desc: "Professional editing for high-impact content.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.02]" />
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-wider uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We combine creativity and technology to build products that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              className={cn(service.colSpan, service.rowSpan)}
            >
              <Link href={`/start-project?service=${service.id}`} className="block h-full">
                <Card className={cn(
                  "h-full group card-hover-gradient border border-border bg-card p-8 flex flex-col items-start transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20",
                  service.className
                )}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-6 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-accent/30 group-hover:scale-110">
                    <service.icon size={28} />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors">{service.desc}</p>
                  </div>

                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

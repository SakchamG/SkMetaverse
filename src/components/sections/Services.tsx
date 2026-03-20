"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { servicesCatalog } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.02]" />
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mt-4 mb-5"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg"
          >
            We combine creativity and technology to build products that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:auto-rows-[minmax(180px,auto)]">
          {servicesCatalog.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px" }}
              className={cn(service.colSpan, service.rowSpan)}
            >
              <Link href={`/start-project?service=${service.id}`} className="block h-full">
                <Card className={cn(
                  "h-full group card-hover-gradient border border-border bg-card p-4 sm:p-6 md:p-8 flex flex-col items-start transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20",
                  service.className
                )}>
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-3 sm:mb-6 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-accent/30 group-hover:scale-110 flex-shrink-0">
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-sm sm:text-xl md:text-2xl font-bold font-heading mb-1.5 sm:mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2 sm:line-clamp-none">{service.title}</h3>
                    <p className="text-muted-foreground leading-snug sm:leading-relaxed text-[10px] sm:text-sm md:text-base group-hover:text-foreground/80 transition-colors line-clamp-3 sm:line-clamp-none">{service.desc}</p>
                  </div>

                  <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
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

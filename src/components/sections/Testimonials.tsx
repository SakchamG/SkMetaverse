"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jevith",
    title: "CEO",
    company: "WhisperField",
    companyUrl: "https://www.whisperfield.in/",
    content: "A platform where anyone can come and message anonymously. Got the perfection needed",
  },
  {
    name: "Prof. Narayan",
    title: "Founder",
    company: "Pariksha Parikrama",
    companyUrl: "https://www.parikshaparikrama.com/",
    content: "The team delivered our MVP in record time. The UI is stunning and the service is top-notch.",
  },

  {
    name: "Dr. Ravin",
    title: "Marketing Director",
    company: "Confidential Consultancy",
    companyUrl: "",
    content: "Ongoing engagement under NDA: discovery complete and MVP build in progress with weekly milestones.",
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading mt-4"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Visionaries</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="mt-auto">
                <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  <span className="text-primary/90">{testimonial.title}</span>
                  <span className="mx-2 text-white/20">•</span>
                  {testimonial.companyUrl ? (
                    <a
                      href={testimonial.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground/90 hover:text-primary transition-colors"
                    >
                      {testimonial.company}
                      <ArrowUpRight size={14} className="opacity-70" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      {testimonial.company}
                      <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary">
                        Ongoing • NDA
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

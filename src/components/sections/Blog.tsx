"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    title: "The Future of AI in Web Development",
    category: "AI Trends",
    date: "Mar 15, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "How artificial intelligence is reshaping the way we build and interact with websites.",
  },
  {
    title: "10 Steps to Launch Your MVP Faster",
    category: "Startup Growth",
    date: "Mar 10, 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "A comprehensive guide for startups to validate their ideas and get to market quickly.",
  },
  {
    title: "Why Next.js is the Best Choice for 2026",
    category: "Web Development",
    date: "Mar 05, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "Exploring the new features of Next.js and why it remains the top React framework.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Latest Insights</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">
              From Our Blog
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Read All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              className="group"
            >
              <Card className="p-0 overflow-hidden border-0 h-full flex flex-col card-hover-gradient border-border bg-card">
                <div className="relative h-56 overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                    {post.category}
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Button variant="link" className="px-0 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline">Read All Articles</Button>
        </div>
      </div>
    </section>
  );
}

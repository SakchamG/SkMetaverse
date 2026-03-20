"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "DCET Study Tracker",
    category: "Mobile + AI Dashboard",
    image:
      "https://images.unsplash.com/photo-1584697964403-c5f6a4c4b0c5?auto=format&fit=crop&w=1200&q=80",
    desc:
      "A productivity mobile app to track DCET preparation with progress analytics, topic tracking, confusion notes, and remaining exam countdown.",
    tech: ["React Native", "Expo", "Python Backend", "Charts"],
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Unified Productivity Dashboard",
    category: "Full Stack Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    desc:
      "A smart dashboard that reduces app overload by combining notifications, tasks, communications, and productivity tools into one unified interface.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "AI Automation"],
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "AI Content & Automation",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    desc:
      "AI powered platform that generates marketing content, automates workflows, and integrates GPT APIs for intelligent business tools.",
    tech: ["OpenAI API", "Python", "FastAPI", "LangChain"],
    color: "from-indigo-500 to-cyan-500",
  },
  {
    title: "WhisperField Platform",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    desc:
      "An AI powered system designed to automate communication workflows, intelligent responses, and smart assistant integrations for modern businesses.",
    tech: ["Python", "OpenAI API", "FastAPI", "AI Automation"],
    color: "from-purple-500 to-indigo-500",
  },

  {
    title: "Parikrama Parikshama",
    category: "E-Learning Platform",
    image:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1200&q=80",
    desc:
      "A digital spiritual platform designed to help devotees explore pilgrimage routes, sacred places, and religious journeys with structured guidance.",
    tech: ["Next.js", "Tailwind", "Node.js"],
    color: "from-orange-500 to-yellow-500",
  },

  {
    title: "Navmenta ",
    category: "Job Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    desc:
      "An intelligent AI system designed to simplify learning, productivity tracking, and smart information organization for students and professionals.",
    tech: ["Python", "FastAPI", "Next.js", "AI"],
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Charity Trust Platform",
    category: "NGO Platform",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    desc:
      "A digital platform developed for charity organizations to manage donations, volunteers, and social initiatives with transparency.",
    tech: ["Next.js", "Firebase", "Stripe"],
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "Business Consultancy Website",
    category: "Corporate Website",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    desc:
      "A modern corporate consulting website designed for business strategy services, client onboarding, and digital transformation consulting.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    color: "from-gray-700 to-gray-900",
  },

  {
    title: "AI Animation",
    category: "AI Creative Tools",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    desc:
      "A creative AI platform that generates dynamic animations, motion graphics, and interactive visuals using artificial intelligence models.",
    tech: ["Python", "AI Models", "WebGL"],
    color: "from-pink-500 to-purple-500",
  }
];

interface ProjectProps {
  project: {
    title: string;
    category: string;
    image: string;
    desc: string;
    tech: string[];
    color: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative flex flex-col h-full min-h-[400px] w-full rounded-3xl bg-neutral-950 border border-white/10 overflow-hidden p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Subtle glow effect */}
      <div
        className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.color} opacity-20 blur-3xl rounded-full transition-opacity duration-500 group-hover:opacity-40`}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">

        <div className="flex justify-between items-start mb-6">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}
          >
            {project.category}
          </span>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">

      {/* background blur lights */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-20 max-w-3xl">

          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Selected Works
          </span>

          <h2 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Projects
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We build powerful digital products including AI platforms,
            SaaS systems, mobile apps, and futuristic web experiences.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
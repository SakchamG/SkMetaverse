"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { MouseEvent, useRef, useState, useEffect } from "react";

export function Hero() {
  const [typingState, setTypingState] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    activeSegment: 1,
  });

  useEffect(() => {
    const isCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const fullText1 = "Building Digital ";
    const fullText2 = "Experiences";
    const fullText3 = " That ";
    const fullText4 = "Power the Future";

    if (isCoarse) {
      setTypingState({
        text1: fullText1,
        text2: fullText2,
        text3: fullText3,
        text4: fullText4,
        activeSegment: 5,
      });
      return;
    }

    let idx = 0;
    let seg = 1;
    let timeoutId: NodeJS.Timeout;

    const typeChar = () => {
      setTypingState((prev) => {
        const newState = { ...prev };
        if (seg === 1) newState.text1 = fullText1.slice(0, idx + 1);
        else if (seg === 2) newState.text2 = fullText2.slice(0, idx + 1);
        else if (seg === 3) newState.text3 = fullText3.slice(0, idx + 1);
        else if (seg === 4) newState.text4 = fullText4.slice(0, idx + 1);
        newState.activeSegment = seg;
        return newState;
      });

      let finished = false;
      if (seg === 1) {
        if (idx < fullText1.length - 1) idx++;
        else { seg++; idx = 0; }
      } else if (seg === 2) {
        if (idx < fullText2.length - 1) idx++;
        else { seg++; idx = 0; }
      } else if (seg === 3) {
        if (idx < fullText3.length - 1) idx++;
        else { seg++; idx = 0; }
      } else if (seg === 4) {
        if (idx < fullText4.length - 1) idx++;
        else { seg = 5; finished = true; }
      }

      if (!finished) {
        const speed = 50 + Math.random() * 30;
        timeoutId = setTimeout(typeChar, speed);
      } else {
        setTypingState((prev) => ({ ...prev, activeSegment: 5 }));
      }
    };

    timeoutId = setTimeout(typeChar, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  const Cursor = () => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block w-[0.08em] h-[1em] bg-primary ml-1 align-middle"
    />
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 group"
    >
      {/* 1. Video/Gradient Layer (Revealed by Spotlight) - Default Hidden */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden sm:block">
        {/* Shared Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Dark Mode Overlays */}
        <div className="absolute inset-0 hidden dark:block">
          {/* Deep Space Gradient Overlay (Semi-transparent to show video) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/30 via-[#1e1b4b]/20 to-[#2e1065]/30 mix-blend-multiply" />

          {/* Moving Glowing Orbs for Depth (Kept for extra effect) */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-fuchsia-600/10 rounded-full blur-[100px]"
          />

          {/* Glass Frosting & Grain (Reduced for visibility) */}
          <div className="absolute inset-0 bg-white/5" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        </div>

        {/* Light Mode Overlays */}
        <div className="absolute inset-0 block dark:hidden">
          {/* Light fade to ensure text readability over video */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />

          {/* Vibrant Orbs for Light Mode */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[60%] h-[60%] bg-cyan-400/20 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-purple-400/20 rounded-full blur-[80px]"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden sm:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      {/* 3. Content Layer (Top - Always Visible) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="relative overflow-hidden py-1 px-4 rounded-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:bg-none dark:bg-black/80 border border-slate-300 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-white mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(148,163,184,0.6)] dark:shadow-[0_0_20px_rgba(0,0,0,0.8)] group hidden sm:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-2">✨ Transforming Ideas into Digital Reality</span>
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent w-full"
            />
          </motion.div>

          <div className="relative inline-flex overflow-hidden py-1 px-4 rounded-full bg-black/20 border border-white/10 text-sm font-medium text-foreground mb-6 sm:hidden">
            <span className="relative z-10 flex items-center gap-2">✨ Transforming Ideas into Digital Reality</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-2">
            SkMetaverse - AI & Web Development Company
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-7">
            Official website of SkMetaverse
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-8 leading-tight min-h-[160px] sm:min-h-[140px] md:min-h-[220px] hidden sm:block">
            <span>
              {typingState.text1}
              {typingState.activeSegment === 1 && <Cursor />}
            </span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#7C3AED] dark:from-[#23CED9] dark:via-[#F472B6] dark:to-[#8B5CF6] animate-gradient bg-300% drop-shadow-sm">
              {typingState.text2}
            </span>
            {typingState.activeSegment === 2 && <Cursor />}
            <span>
              {typingState.text3}
              {typingState.activeSegment === 3 && <Cursor />}
            </span>
            <br className="hidden sm:block md:hidden lg:block" />
            <span>
              {typingState.text4}
              {typingState.activeSegment === 4 && <Cursor />}
            </span>
            {typingState.activeSegment === 5 && <Cursor />}
          </h2>

          <h2 className="text-4xl font-bold font-heading tracking-tight mb-8 leading-tight sm:hidden">
            Building Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#7C3AED] dark:from-[#23CED9] dark:via-[#F472B6] dark:to-[#8B5CF6]">
              Experiences
            </span>{" "}
            That Power the Future
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={typingState.activeSegment === 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
          >
            We help startups and businesses build powerful websites, applications, and AI-powered digital products that scale globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={typingState.activeSegment === 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/start-project">
              <Button variant="gradient" size="lg" className="group text-lg h-14 px-8">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer btn-glass rounded-full group text-lg h-14 px-8" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              View Our Work
              <div className="ml-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator Removed as per request */}
    </section>
  );
}

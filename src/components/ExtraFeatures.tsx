"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion, AnimatePresence } from "framer-motion";

export function ExtraFeatures() {
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "assistant" | "user"; text: string }>>([
    { role: "assistant", text: "Hello! I'm SkMetaverse Assistant. Ask me about services, pricing, tech stack, timelines, or start a project. For anything else, I can share our contact info." },
  ]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showChat]);
  
  function classifyAndReply(q: string): string {
    const query = q.toLowerCase();
    const contactInfo = "You can reach us at contact@skmetaverse.com or +1 (555) 123-4567. You can also use the Contact section on this site.";
    const linkStart = "To get started, open Start Project (top right) or go to /start-project.";
    if (/(start|project|quote|estimate|build|begin)/.test(query)) {
      return `Great! ${linkStart} Share your goals, features, and timeline—our team will respond quickly.`;
    }
    if (/(price|pricing|cost|budget|rate)/.test(query)) {
      return "Our pricing depends on scope. Typical MVPs start at $5k–$15k; larger products vary. Share your scope in Start Project and we’ll provide a tailored estimate.";
    }
    if (/(service|offer|what do you do|do you build|capability)/.test(query)) {
      return "We design & build web apps, mobile apps, and AI-powered products using Next.js, React Native, and modern backends. We also handle UI/UX, integrations, and cloud deployments.";
    }
    if (/(tech|stack|tools|framework|next\\.js|react|ai|openai|langchain)/.test(query)) {
      return "Our stack: Next.js/React, Tailwind, React Native, Node/Python, FastAPI, PostgreSQL, Supabase, and OpenAI/LangChain for AI. We deploy to Vercel/AWS as needed.";
    }
    if (/(timeline|how long|delivery|when)/.test(query)) {
      return "Timelines vary by scope. Small websites: 1–2 weeks. MVP web apps: 3–6 weeks. Larger products: 8–12+ weeks. Send your scope via Start Project for a precise plan.";
    }
    // Fallback for out-of-scope
    return `That seems outside our assistant’s scope. ${contactInfo}`;
  }
  
  function handleSend() {
    const text = input.trim();
    if (!text) return;
    
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: classifyAndReply(text) }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400); // 600-1000ms delay
  }
  
  // Voice greeting implementation (commented out to avoid browser policy issues/bad UX without interaction)
  /*
  useEffect(() => {
    const handleInteraction = () => {
      const msg = new SpeechSynthesisUtterance("Welcome to SkMetaverse.");
      window.speechSynthesis.speak(msg);
      window.removeEventListener('click', handleInteraction);
    };
    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);
  */

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-primary/10">
              <div className="font-bold font-heading flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                AI Assistant
              </div>
              <button onClick={() => setShowChat(false)} className="hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>
            <div ref={scrollerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[85%] text-sm shadow-sm ${m.role === "assistant" ? "bg-primary/10 rounded-2xl rounded-tl-sm p-3 border border-primary/20 backdrop-blur-sm" : "ml-auto bg-white/10 dark:bg-white/20 border border-white/10 rounded-2xl rounded-tr-sm p-3 backdrop-blur-sm text-foreground"}`}
                >
                  {m.text}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-primary/10 rounded-2xl rounded-tl-sm p-3 border border-primary/20 self-start w-fit flex gap-1 items-center h-10 shadow-sm backdrop-blur-sm"
                >
                   <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                   <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                   <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                </motion.div>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                <button onClick={() => setInput("What services do you offer?")} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 hover:bg-white/10">Services</button>
                <button onClick={() => setInput("What is your pricing?")} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 hover:bg-white/10">Pricing</button>
                <button onClick={() => setInput("What tech stack do you use?")} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 hover:bg-white/10">Tech Stack</button>
                <a href="/start-project" className="px-3 py-1 rounded-full text-xs bg-primary/10 border border-white/10 hover:bg-primary/20">Start Project</a>
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="relative">
                <Input 
                  placeholder="Ask me anything..." 
                  className="pr-10 h-10" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
                />
                <button onClick={handleSend} className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80" aria-label="Send">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setShowChat(!showChat)}
        size="icon"
        className="h-14 w-14 rounded-full shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] hover:scale-110 transition-transform bg-gradient-to-br from-primary to-secondary border-2 border-white/20"
      >
        {showChat ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
    </div>
  );
}

 "use client";
 
 import { useEffect, useRef } from "react";
 
 declare global {
   interface Window {
     turnstile?: {
       render: (el: HTMLElement, options: Record<string, unknown>) => string;
       remove: (widgetId: string) => void;
       reset: (widgetId: string) => void;
     };
   }
 }
 
 type TurnstileProps = {
   siteKey: string;
   onToken: (token: string) => void;
 };
 
 export function Turnstile({ siteKey, onToken }: TurnstileProps) {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const widgetIdRef = useRef<string | null>(null);
 
   useEffect(() => {
     const existing = document.getElementById("turnstile-script");
     if (!existing) {
       const script = document.createElement("script");
       script.id = "turnstile-script";
       script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
       script.async = true;
       script.defer = true;
       document.head.appendChild(script);
     }
   }, []);
 
   useEffect(() => {
     let cancelled = false;
 
     const tryRender = () => {
       if (cancelled) return;
       if (!containerRef.current) return;
       if (!window.turnstile) return;
       if (widgetIdRef.current) return;
 
       const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
       widgetIdRef.current = window.turnstile.render(containerRef.current, {
         sitekey: siteKey,
         theme,
         callback: (token: string) => onToken(token),
         "error-callback": () => onToken(""),
         "expired-callback": () => onToken(""),
       });
     };
 
     const interval = window.setInterval(tryRender, 200);
     tryRender();
 
     return () => {
       cancelled = true;
       window.clearInterval(interval);
       if (widgetIdRef.current && window.turnstile) {
         window.turnstile.remove(widgetIdRef.current);
         widgetIdRef.current = null;
       }
     };
   }, [onToken, siteKey]);
 
   return <div ref={containerRef} className="min-h-[65px]" />;
 }
 

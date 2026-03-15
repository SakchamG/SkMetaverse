 "use client";
 
 import { useSyncExternalStore } from "react";
 import { Button } from "@/components/ui/Button";
 import Link from "next/link";
 
 export function CookieConsent() {
   const visible = useSyncExternalStore(
     (onStoreChange) => {
       const handler = () => onStoreChange();
       window.addEventListener("cookie-consent-change", handler);
       window.addEventListener("storage", handler);
       return () => {
         window.removeEventListener("cookie-consent-change", handler);
         window.removeEventListener("storage", handler);
       };
     },
     () => {
       try {
         return !localStorage.getItem("cookie-consent");
       } catch {
         return true;
       }
     },
     () => false
   );
 
   const accept = () => {
     try {
       localStorage.setItem("cookie-consent", "accepted");
     } catch {}
     window.dispatchEvent(new Event("cookie-consent-change"));
   };
   const reject = () => {
     try {
       localStorage.setItem("cookie-consent", "rejected");
     } catch {}
     window.dispatchEvent(new Event("cookie-consent-change"));
   };
 
   if (!visible) return null;
 
   return (
     <div className="fixed bottom-4 left-4 right-4 z-[70]">
       <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-background/90 backdrop-blur-none sm:backdrop-blur-md shadow-lg p-4 sm:p-5">
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
           <div className="text-sm text-muted-foreground">
             We use cookies to improve your experience, analyze traffic, and personalize content. 
             See our <Link href="/cookies" className="text-primary hover:underline">Cookies Policy</Link>.
           </div>
           <div className="flex gap-3">
             <Button variant="outline" size="sm" onClick={reject}>Reject</Button>
             <Button variant="gradient" size="sm" onClick={accept}>Accept</Button>
           </div>
         </div>
       </div>
     </div>
   );
 }
 

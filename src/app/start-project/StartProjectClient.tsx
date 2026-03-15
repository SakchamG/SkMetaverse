 "use client";
 
 import { useMemo, useState } from "react";
 import { motion } from "framer-motion";
 import { Card } from "@/components/ui/Card";
 import { Button } from "@/components/ui/Button";
 import { Input } from "@/components/ui/Input";
 import { Textarea } from "@/components/ui/Textarea";
 import { ArrowRight, Check } from "lucide-react";
 import { useRouter, useSearchParams } from "next/navigation";
 import Link from "next/link";
 import { startProjectServices } from "@/content/services";
 import { Turnstile } from "@/components/ui/Turnstile";
 
 export default function StartProjectClient() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [step, setStep] = useState(1);
   const preselectedServices = useMemo(() => {
     const raw = searchParams.get("service") || searchParams.get("services");
     if (!raw) return [] as string[];
     const valid = new Set(startProjectServices.map((s) => s.id));
     return raw
       .split(",")
       .map((s) => s.trim())
       .filter((s) => s.length > 0 && valid.has(s));
   }, [searchParams]);
   const [selectedServices, setSelectedServices] = useState<string[] | null>(null);
   const effectiveSelectedServices = selectedServices ?? preselectedServices;
   const [submitting, setSubmitting] = useState(false);
   const [captchaToken, setCaptchaToken] = useState("");
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     company: "",
     phone: "",
     location: "",
     currency: "USD",
     budget: "",
     timeline: "",
     tech: "",
     details: ""
   });
 
   const toggleService = (id: string) => {
     setSelectedServices((prev) => {
       const base = prev ?? preselectedServices;
       return base.includes(id) ? base.filter((s) => s !== id) : [...base, id];
     });
   };
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
     if (siteKey && !captchaToken) {
       alert("Please complete the captcha.");
       return;
     }
     setSubmitting(true);
     fetch("/api/enquiry", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify({
         source: "start-project",
         services: effectiveSelectedServices,
         ...formData,
         captchaToken,
       }),
     })
       .then(async (r) => {
         if (!r.ok) {
           const j = await r.json().catch(() => null);
           throw new Error(j?.error || "Failed to submit enquiry");
         }
         alert("Project request submitted! We will contact you shortly.");
         router.push("/");
       })
       .catch(() => {
         alert("Could not submit right now. Please try again or use Call/WhatsApp.");
       })
       .finally(() => {
         setSubmitting(false);
         setCaptchaToken("");
       });
   };
 
   return (
     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
 
       <div className="max-w-3xl mx-auto relative z-10">
         <div className="text-center mb-10">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4"
           >
             Step {step} of 2
           </motion.div>
           <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
             {step === 1 ? "What can we build for you?" : "Tell us about your project"}
           </h1>
           <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
             {step === 1
               ? "Select the services you need. You can choose multiple options."
               : "Share your vision and requirements so we can help you better."}
           </p>
         </div>
 
         <motion.div
           key={step}
           initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.3 }}
         >
           {step === 1 ? (
             <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {startProjectServices.map((service) => (
                   <Card
                     key={service.id}
                     onClick={() => toggleService(service.id)}
                     className={`cursor-pointer p-4 transition-all duration-200 border-2 hover:border-primary/50 relative overflow-hidden group ${
                       effectiveSelectedServices.includes(service.id)
                         ? "border-primary bg-primary/5 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                         : "border-transparent bg-card"
                     }`}
                   >
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                       effectiveSelectedServices.includes(service.id) ? "bg-primary text-white" : "bg-secondary/10 text-secondary group-hover:bg-primary/10 group-hover:text-primary"
                     }`}>
                       <service.icon size={20} />
                     </div>
                     <h3 className="font-bold text-sm mb-1">{service.title}</h3>
                     <p className="text-xs text-muted-foreground">{service.desc}</p>
 
                     {effectiveSelectedServices.includes(service.id) && (
                       <div className="absolute top-3 right-3 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center">
                         <Check size={12} />
                       </div>
                     )}
                   </Card>
                 ))}
               </div>
 
               <div className="flex justify-end">
                 <Button
                   variant="gradient"
                   size="lg"
                   onClick={() => setStep(2)}
                   disabled={effectiveSelectedServices.length === 0}
                   className="w-full sm:w-auto"
                 >
                   Continue
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
               </div>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
               <Card className="p-6 md:p-8 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
                     <Input
                       required
                       placeholder="Your Name"
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       className="bg-background/50"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                     <Input
                       required
                       type="email"
                       placeholder="your@email.com"
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       className="bg-background/50"
                     />
                   </div>
                 </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company</label>
                     <Input
                       placeholder="Company Name (Optional)"
                       value={formData.company}
                       onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                       className="bg-background/50"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone</label>
                     <Input
                       placeholder="Contact Number"
                       value={formData.phone}
                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                       className="bg-background/50"
                     />
                   </div>
                 </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Currency</label>
                     <select
                       className="flex h-10 w-full rounded-xl border border-border bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                       value={formData.currency}
                       onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                     >
                       <option value="USD">USD</option>
                       <option value="EUR">EUR</option>
                       <option value="GBP">GBP</option>
                       <option value="INR">INR</option>
                       <option value="AED">AED</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Budget Range</label>
                     <select
                       className="flex h-10 w-full rounded-xl border border-border bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                       value={formData.budget}
                       onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                     >
                       <option value="">Select a range</option>
                       <option value="5k-10k">5,000 - 10,000</option>
                       <option value="10k-25k">10,000 - 25,000</option>
                       <option value="25k-50k">25,000 - 50,000</option>
                       <option value="50k+">50,000+</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Timeline</label>
                     <select
                       className="flex h-10 w-full rounded-xl border border-border bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                       value={formData.timeline}
                       onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                     >
                       <option value="">Select timeline</option>
                       <option value="ASAP">ASAP</option>
                       <option value="1-2 weeks">1–2 weeks</option>
                       <option value="1-2 months">1–2 months</option>
                       <option value="3+ months">3+ months</option>
                     </select>
                   </div>
                 </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</label>
                     <Input
                       placeholder="City, Country"
                       value={formData.location}
                       onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                       className="bg-background/50"
                     />
                   </div>
                 </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Preferred Tech Stack</label>
                     <Input
                       placeholder="e.g., Next.js, React Native, FastAPI"
                       value={formData.tech}
                       onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                       className="bg-background/50"
                     />
                   </div>
                 </div>
 
                 <div className="space-y-2">
                   <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Project Details</label>
                   <Textarea
                     required
                     placeholder="Tell us about your goals, features, and timeline..."
                     className="min-h-[150px] bg-background/50"
                     value={formData.details}
                     onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                   />
                 </div>
               {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
                 <Turnstile
                   siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                   onToken={setCaptchaToken}
                 />
               ) : null}
               </Card>
 
               <div className="flex flex-col sm:flex-row gap-4 justify-between">
                 <Button
                   type="button"
                   variant="ghost"
                   onClick={() => setStep(1)}
                   className="text-muted-foreground"
                 >
                   Back
                 </Button>
                 <Button
                   type="submit"
                   variant="gradient"
                   size="lg"
                   className="w-full sm:w-auto"
                   disabled={submitting}
                 >
                   {submitting ? "Submitting..." : "Submit Request"}
                 </Button>
               </div>
 
               <div className="mt-6">
                 <Card className="p-4 bg-background/60 border-border flex items-center justify-between gap-4 flex-col sm:flex-row">
                   <div className="text-sm text-muted-foreground">
                     Connect now to get instant support and help.
                   </div>
                   <div className="flex flex-wrap gap-3">
                     <a href="tel:+918095151212">
                       <Button variant="outline" size="sm">Call Now</Button>
                     </a>
                     <a href="https://wa.me/15551234567?text=Hi%20SkMetaverse%2C%20I%20want%20to%20start%20a%20project" target="_blank" rel="noopener">
                       <Button variant="glow" size="sm">WhatsApp</Button>
                     </a>
                     <Link href="/#contact">
                       <Button variant="link" size="sm" className="text-primary">Contact Form</Button>
                     </Link>
                   </div>
                 </Card>
                 <p className="mt-3 text-xs text-muted-foreground">
                   Note: If your request has been sent, please wait 2–3 hours to receive a callback.
                 </p>
               </div>
             </form>
           )}
         </motion.div>
       </div>
     </div>
   );
 }
 

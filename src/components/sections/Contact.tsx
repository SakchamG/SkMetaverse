"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Calendar, Send } from "lucide-react";
import { useState } from "react";
import { Turnstile } from "@/components/ui/Turnstile";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
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
        source: "contact",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        budget: formData.budget,
        details: `Project Type: ${formData.projectType}\nMessage: ${formData.message}`,
        captchaToken,
      }),
    })
      .then(async (r) => {
        if (!r.ok) {
          const j = await r.json().catch(() => null);
          throw new Error(j?.error || "Failed to submit enquiry");
        }
        setFormData({ name: "", email: "", company: "", projectType: "", budget: "", message: "" });
        setCaptchaToken("");
        alert("Message sent! We'll get back to you soon.");
      })
      .catch(() => {
        alert("Could not send right now. Please try again later.");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your project? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-50px" }}
          >
             <div className="space-y-8">
               <Card className="p-8">
                 <h3 className="text-xl font-bold font-heading mb-6">Contact Information</h3>
                 <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <Mail size={24} />
                     </div>
                     <div>
                       <div className="text-sm text-muted-foreground">Email Us</div>
                       <div className="font-medium">contact@skmetaverse.com</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <Phone size={24} />
                     </div>
                     <div>
                       <div className="text-sm text-muted-foreground">Call Us</div>
                       <div className="font-medium">+1 (555) 123-4567</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <MapPin size={24} />
                     </div>
                     <div>
                       <div className="text-sm text-muted-foreground">Visit Us</div>
                       <div className="font-medium">123 Tech Avenue, Silicon Valley, CA</div>
                     </div>
                   </div>
                 </div>
               </Card>

               <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                 <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                   <Calendar size={24} className="text-primary" />
                   Book a Meeting
                 </h3>
                 <p className="text-muted-foreground mb-6">
                   Schedule a free 30-minute consultation with our experts to discuss your project.
                 </p>
                 <Button variant="glow" className="w-full">
                   Schedule via Calendly
                 </Button>
               </Card>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <Card className="p-8">
              <h3 className="text-xl font-bold font-heading mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={submit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      required
                      placeholder="your@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <Input
                      placeholder="e.g. Web Development, Mobile App, AI"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Range</label>
                    <Input
                      placeholder="e.g. $5k - $10k"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    required
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onToken={setCaptchaToken}
                  />
                ) : null}
                <Button variant="glow" className="w-full" size="lg" type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

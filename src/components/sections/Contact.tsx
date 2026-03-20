"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DatePicker } from "@/components/ui/DatePicker";
import { Mail, Phone, MapPin, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleScheduleClick = () => {
    if (!selectedDate || !selectedTime) return;
    const digits = siteConfig.whatsappE164.replace(/[^\d]/g, "");
    
    // Format the date properly for message
    const dateStr = selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    
    const text = encodeURIComponent(
      `Hi ${siteConfig.name}, I would like to schedule a meeting on ${dateStr} at ${selectedTime}.`
    );
    window.open(`https://wa.me/${digits}?text=${text}`, "_blank");
    setShowDatePicker(false);
    setSelectedDate(null);
    setSelectedTime("");
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
                      <div className="font-medium">
                        <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                          {siteConfig.email}
                        </a>
                      </div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <Phone size={24} />
                     </div>
                     <div>
                       <div className="text-sm text-muted-foreground">Call Us</div>
                      <div className="font-medium">
                        <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-primary transition-colors">
                          {siteConfig.phoneDisplay}
                        </a>
                      </div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <MapPin size={24} />
                     </div>
                     <div>
                       <div className="text-sm text-muted-foreground">Visit Us</div>
                      <div className="font-medium">{siteConfig.addressLine}</div>
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
                 {!showDatePicker ? (
                   <Button variant="glow" className="w-full" onClick={() => setShowDatePicker(true)}>
                     Pick a Date & Time
                   </Button>
                 ) : (
                   <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                     <DatePicker 
                       date={selectedDate} 
                       setDate={setSelectedDate} 
                       time={selectedTime} 
                       setTime={setSelectedTime} 
                     />
                     <div className="flex gap-4">
                       <Button 
                         variant="outline" 
                         className="w-1/3 border-border hover:bg-card-hover" 
                         onClick={() => setShowDatePicker(false)}
                       >
                         Cancel
                       </Button>
                       <Button 
                         variant="glow" 
                         className="w-2/3"
                         disabled={!selectedDate || !selectedTime}
                         onClick={handleScheduleClick}
                       >
                         Confirm Meeting
                       </Button>
                     </div>
                   </div>
                 )}
               </Card>
             </div>
          </motion.div>

          {/* Quick Connect Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <Card className="p-8 h-full flex flex-col justify-center bg-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-500 group-hover:bg-primary/10" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Start Your Journey</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Skip the traditional forms. Connect with our team instantly to discuss your vision, requirements, and get started on building your digital reality.
                </p>
                
                <div className="space-y-4">
                  <Link href="/start-project" className="block">
                    <Button variant="gradient" size="lg" className="w-full text-lg h-14 group/btn">
                      Start a Project
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm uppercase tracking-wider font-medium">or</span>
                    <div className="flex-grow border-t border-border"></div>
                  </div>
                  
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" size="lg" className="w-full text-lg h-14 border-border hover:bg-white/5 hover:border-primary/30 group/wa shadow-sm transition-all duration-300">
                      <MessageCircle className="mr-2 w-5 h-5 text-[#25D366] group-hover/wa:scale-110 transition-transform" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

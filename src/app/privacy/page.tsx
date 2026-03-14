 export default function Privacy() {
   return (
     <section className="py-24 bg-background">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
         <h1 className="text-4xl font-heading font-bold">Privacy Policy</h1>
         <p className="text-muted-foreground">
           This Privacy Policy explains how SkMetaverse collects, uses, and safeguards your information when you visit our website or engage our services.
         </p>
 
         <div className="space-y-6">
           <div>
             <h2 className="text-xl font-semibold">Information We Collect</h2>
             <ul className="list-disc pl-6 text-muted-foreground space-y-2">
               <li>Contact details such as name, email, phone, and company.</li>
               <li>Project information you submit via forms.</li>
               <li>Usage data including pages viewed and interactions.</li>
               <li>Technical data such as IP address, browser, and device type.</li>
             </ul>
           </div>
           <div>
             <h2 className="text-xl font-semibold">How We Use Information</h2>
             <ul className="list-disc pl-6 text-muted-foreground space-y-2">
               <li>To respond to inquiries and deliver services.</li>
               <li>To improve website performance and user experience.</li>
               <li>To send service updates and relevant communications.</li>
               <li>To meet legal, regulatory, and security obligations.</li>
             </ul>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Cookies</h2>
             <p className="text-muted-foreground">
               We use cookies and similar technologies to analyze traffic and personalize content. You can control cookies through your browser settings.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Data Retention</h2>
             <p className="text-muted-foreground">
               We retain your data only as long as necessary for the purposes outlined above or as required by law.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Third‑Party Services</h2>
             <p className="text-muted-foreground">
               We may use trusted third‑party providers for hosting, analytics, and communication. These providers process data in accordance with applicable laws.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Security</h2>
             <p className="text-muted-foreground">
               We implement administrative, technical, and physical safeguards to protect your information. No method of transmission is 100% secure.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Your Rights</h2>
             <ul className="list-disc pl-6 text-muted-foreground space-y-2">
               <li>Access, correct, or delete your data.</li>
               <li>Withdraw consent to marketing communications.</li>
               <li>Request portability where applicable.</li>
             </ul>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Contact</h2>
             <p className="text-muted-foreground">
               For privacy requests, contact us at contact@skmetaverse.com or +1 (555) 123‑4567.
             </p>
           </div>
           <p className="text-xs text-muted-foreground">
             Last updated: {new Date().getFullYear()}
           </p>
         </div>
       </div>
     </section>
   );
 }
 

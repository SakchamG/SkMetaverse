 export default function Cookies() {
   return (
     <section className="py-24 bg-background">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
         <h1 className="text-4xl font-heading font-bold">Cookies Policy</h1>
         <p className="text-muted-foreground">
           This Cookies Policy explains how SkMetaverse uses cookies and similar technologies on our website.
         </p>
 
         <div className="space-y-6">
           <div>
             <h2 className="text-xl font-semibold">What Are Cookies?</h2>
             <p className="text-muted-foreground">
               Cookies are small text files stored on your device. They help websites function, remember preferences, and understand how you use the site.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Types Of Cookies We Use</h2>
             <ul className="list-disc pl-6 text-muted-foreground space-y-2">
               <li><span className="font-medium">Essential:</span> Required for core functionality such as page navigation.</li>
               <li><span className="font-medium">Performance:</span> Help us analyze usage and improve the site.</li>
               <li><span className="font-medium">Functional:</span> Remember preferences like theme or language.</li>
               <li><span className="font-medium">Marketing:</span> Used to deliver relevant content and measure campaign effectiveness.</li>
             </ul>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Managing Cookies</h2>
             <p className="text-muted-foreground">
               You can accept or reject non‑essential cookies via our consent banner. You can also manage cookies in your browser settings. Disabling some cookies may affect website performance.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Consent</h2>
             <p className="text-muted-foreground">
               By continuing to use our site after seeing the banner, you consent to our use of non‑essential cookies. You may withdraw consent at any time by clearing cookies or adjusting preferences.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Updates</h2>
             <p className="text-muted-foreground">
               We may update this Cookies Policy from time to time. The latest version will always be available on this page.
             </p>
           </div>
           <div>
             <h2 className="text-xl font-semibold">Contact</h2>
             <p className="text-muted-foreground">
               Questions? Contact us at contact@skmetaverse.com or +1 (555) 123‑4567.
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
 

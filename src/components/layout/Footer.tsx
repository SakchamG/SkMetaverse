import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { servicesCatalog } from "@/content/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                Sk
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                SkMetaverse
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Building powerful digital experiences that help businesses scale globally with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesCatalog.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/start-project?service=${service.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </li>
              <li>contact@skmetaverse.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Avenue, Silicon Valley, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} SkMetaverse. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

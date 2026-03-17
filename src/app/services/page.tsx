import type { Metadata } from "next";
import Link from "next/link";
import { Services } from "@/components/sections/Services";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SkMetaverse services: AI development, web development, mobile apps, futuristic UI/UX, and digital automation for modern businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight">
            AI + Web Development Solutions
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            SkMetaverse is a web development agency building futuristic UI, AI tools, and scalable digital products.
            From Next.js websites to automation and integrations, we help startups and enterprises ship faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/start-project">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <Link href="/#portfolio">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Services />
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">Why Choose Us</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-semibold">Fast Delivery</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Rapid prototyping and clean execution with clear milestones and weekly updates.
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-semibold">Scalable Engineering</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Production-ready architecture focused on performance, security, and maintainability.
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-semibold">Modern AI Integration</div>
              <div className="mt-2 text-sm text-muted-foreground">
                AI automation, assistants, and workflow intelligence built responsibly for real business value.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


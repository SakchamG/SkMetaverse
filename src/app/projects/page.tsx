import type { Metadata } from "next";
import Link from "next/link";
import { Portfolio } from "@/components/sections/Portfolio";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore SkMetaverse projects: AI platforms, SaaS systems, mobile apps, and futuristic web experiences built with modern stacks.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight">
            Case Studies & Projects
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            We build powerful digital products including AI tools, SaaS systems, mobile apps, and next‑gen websites.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/start-project">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                Get a Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Portfolio />
    </div>
  );
}


import type { Metadata } from "next";
import { Founder } from "@/components/sections/Founder";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet SkMetaverse — a team building futuristic AI tools, web applications, and digital experiences for startups and enterprises.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Founder />
      <Vision />
      <Contact />
    </div>
  );
}


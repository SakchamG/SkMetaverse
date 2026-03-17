import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SkMetaverse for AI development, web development, and futuristic digital experiences.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}


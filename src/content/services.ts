import type { LucideIcon } from "lucide-react";
import { Briefcase, Camera, Code, Cpu, Palette, Phone, Smartphone, TrendingUp, Video, Zap } from "lucide-react";

export type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  colSpan?: string;
  rowSpan?: string;
  className?: string;
};

export const servicesCatalog: ServiceItem[] = [
  {
    id: "scaling",
    icon: Zap,
    title: "Business Scaling",
    desc: "Helping companies scale from scratch to the next level.",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    desc: "High-performance websites using Next.js & React.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native iOS & Android apps with React Native.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2 lg:row-span-2",
    className: "h-full flex flex-col justify-between",
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Stunning interfaces that users love.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Integration",
    desc: "Custom AI solutions with OpenAI & LangChain.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "hotel-ai",
    icon: Phone,
    title: "Hotel AI Integration",
    desc: "AI call agents for bookings, FAQs, and guest support automation.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, Ads & Social Media growth strategies.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Consulting",
    desc: "Expert advice for startups and businesses.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "ai-animation",
    icon: Video,
    title: "AI Animation",
    desc: "Cutting-edge AI-powered animation & motion graphics.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "video-editing",
    icon: Camera,
    title: "Video Editing",
    desc: "Professional editing for high-impact content.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
  {
    id: "photo-editing",
    icon: Camera,
    title: "Photo Editing",
    desc: "Professional editing for high-impact content.",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1 lg:row-span-1",
  },
];

export const startProjectServices = servicesCatalog.map(({ id, icon, title, desc }) => ({
  id,
  icon,
  title,
  desc,
}));


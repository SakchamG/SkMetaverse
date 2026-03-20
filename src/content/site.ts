export const siteConfig = {
  name: "SkMetaverse",
  domain: "skmetaverse.space",
  url: "https://skmetaverse.space",
  email: "skmetaverse01@gmail.com",
  phoneE164: "+919343334003",
  phoneDisplay: "+91 93433 34003",
  whatsappE164: "+919343334003",
  whatsappMessage: "Hi SkMetaverse, I want to start a project.",
  addressLine: "Remote-first • Serving clients worldwide",
  calendlyUrl: "",
  socials: {
    twitter: "",
    instagram: "",
    linkedin: "",
    github: "",
  },
} as const;

export function getWhatsAppUrl() {
  const digits = siteConfig.whatsappE164.replace(/[^\d]/g, "");
  const text = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${digits}?text=${text}`;
}


export const siteConfig = {
  name: "SkMetaverse",
  domain: "skmetaverse.space",
  url: "https://skmetaverse.space",
  email: "contact@skmetaverse.com",
  phoneE164: "+918095151212",
  phoneDisplay: "+91 80951 51212",
  whatsappE164: "+918095151212",
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


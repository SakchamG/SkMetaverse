import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExtraFeatures } from "@/components/ExtraFeatures";
import { SnakeCursor } from "@/components/ui/SnakeCursor";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { MotionProvider } from "@/components/MotionProvider";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://skmetaverse.space"),
  title: {
    default: "SkMetaverse | AI & Web Development Company",
    template: "%s | SkMetaverse",
  },
  description:
    "Official website of SkMetaverse — an AI & web development company building futuristic websites, AI tools, and digital experiences.",
  keywords: [
    "AI website",
    "web development",
    "futuristic UI",
    "metaverse",
    "Next.js developer",
  ],
  authors: [{ name: "Sakcham", url: "https://skmetaverse.space" }],
  creator: "SkMetaverse",
  publisher: "SkMetaverse",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SkMetaverse | AI & Web Development Company",
    description: "Official SkMetaverse website for AI tools, web development, and futuristic digital experiences.",
    url: "https://skmetaverse.space",
    siteName: "SkMetaverse",
    images: [
      {
        url: "https://skmetaverse.space/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkMetaverse | AI & Web Development Company",
    description: "Official SkMetaverse website for AI tools, web development, and futuristic digital experiences.",
    images: ["https://skmetaverse.space/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30`}
      >
        <SnakeCursor />
        <Providers>
          <MotionProvider>
            <Navbar />
            <main className="min-h-screen relative z-10">
              {children}
            </main>
            <CookieConsent />
            <Footer />
            <ExtraFeatures />
          </MotionProvider>
        </Providers>
      </body>
    </html>
  );
}

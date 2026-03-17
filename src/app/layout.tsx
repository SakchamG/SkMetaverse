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

export const metadata: Metadata = {
  metadataBase: new URL("https://skmetaverse.space"),
  title: {
    default: "SkMetaverse | Futuristic AI & Web Solutions",
    template: "%s | SkMetaverse",
  },
  description:
    "SkMetaverse builds futuristic websites, AI tools, and digital experiences. Explore next-gen design, development, and innovation.",
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
    title: "SkMetaverse - Premium Digital Agency",
    description: "Futuristic AI-powered digital experiences.",
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
    title: "SkMetaverse - Premium Digital Agency",
    description: "Futuristic AI-powered digital experiences.",
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
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkMetaverse",
    url: "https://skmetaverse.space",
    logo: "https://skmetaverse.space/logo.png",
    sameAs: [],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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

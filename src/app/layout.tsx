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
    default: "SkMetaverse | AI, Web Development & Digital Innovation",
    template: "%s | SkMetaverse",
  },
  description:
    "SkMetaverse is a premium digital agency building AI solutions, futuristic websites, and innovative digital products for startups and enterprises worldwide.",
  keywords: [
    "SkMetaverse",
    "AI development",
    "web development",
    "digital agency",
    "startup technology",
    "AI tools",
    "Next.js development",
    "software development",
    "India tech startup",
  ],
  authors: [{ name: "Sakcham", url: "https://skmetaverse.space" }],
  creator: "SkMetaverse",
  publisher: "SkMetaverse",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SkMetaverse - Premium Digital Agency",
    description: "We build powerful AI tools, websites, and digital experiences for modern startups.",
    url: "https://skmetaverse.space",
    siteName: "SkMetaverse",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkMetaverse - Premium Digital Agency",
    description: "AI, Web Development and Digital Innovation for modern businesses.",
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
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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

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

export const metadata: Metadata = {
  title: "SkMetaverse - Premium Digital Agency",
  description: "Building powerful digital experiences for startups and enterprises globally.",
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
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <CookieConsent />
          <Footer />
          <ExtraFeatures />
        </Providers>
      </body>
    </html>
  );
}

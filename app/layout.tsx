import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Adcelerate360 - White-Label Excellence for Agencies, Global Growth for Brands",
  description: "Strategic growth partner for Amazon, Walmart, Target, and beyond. AI-powered PPC, advanced SEO, and brand consultancy services across US, EU, UK, and GCC markets.",
  keywords: "Amazon PPC, Walmart advertising, Target marketplace, e-commerce SEO, brand strategy, white-label agency, cross-border expansion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Force hardware acceleration for all animations */
            * {
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-perspective: 1000;
              perspective: 1000;
            }
          `
        }} />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

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
  keywords: [
    "Amazon PPC management",
    "Walmart advertising services",
    "Target marketplace optimization",
    "e-commerce SEO",
    "marketplace PPC agency",
    "brand strategy consulting",
    "white-label agency services",
    "cross-border expansion",
    "Amazon advertising agency",
    "multi-platform PPC",
    "marketplace management",
    "AI-powered advertising",
    "e-commerce growth agency",
    "Amazon SEO optimization",
    "global marketplace expansion"
  ],
  authors: [{ name: "Adcelerate360" }],
  creator: "Adcelerate360",
  publisher: "Adcelerate360",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.adcelerate360.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.adcelerate360.com',
    title: "Adcelerate360 - White-Label Excellence for Agencies, Global Growth for Brands",
    description: "Strategic growth partner for Amazon, Walmart, Target, and beyond. AI-powered PPC, advanced SEO, and brand consultancy services across US, EU, UK, and GCC markets.",
    siteName: 'Adcelerate360',
    images: [
      {
        url: 'https://www.adcelerate360.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adcelerate360 - Marketplace Growth Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Adcelerate360 - White-Label Excellence for Agencies, Global Growth for Brands",
    description: "Strategic growth partner for Amazon, Walmart, Target, and beyond. AI-powered PPC, advanced SEO, and brand consultancy services.",
    images: ['https://www.adcelerate360.com/images/og-image.jpg'],
    creator: '@adcelerate360',
    site: '@adcelerate360',
  },
  verification: {
    google: 'ZMGKlWK-R02_oyfRuqDS5GbbV3YIsthjCkjfmHMpXPo',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'E-commerce & Digital Marketing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ background: '#0f172a', minHeight: '100%' }}>
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
            /* Ensure no white space on any browser */
            html, body, #__next {
              min-height: 100vh;
              background: #0f172a;
              margin: 0;
              padding: 0;
            }
          `
        }} />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WNS8T1KTST"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WNS8T1KTST');
            `,
          }}
        />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Adcelerate360",
              "legalName": "Adcelerate360",
              "url": "https://www.adcelerate360.com",
              "logo": "https://www.adcelerate360.com/logos/adcelaratelogo.png",
              "description": "Strategic growth partner for Amazon, Walmart, Target, and beyond. AI-powered PPC, advanced SEO, and brand consultancy services across US, EU, UK, and GCC markets.",
              "foundingDate": "2014",
              "email": "Info@adcelerate360.com",
              "telephone": "+1-737-437-0802",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "",
                  "addressLocality": "Sheridan",
                  "addressRegion": "WY",
                  "postalCode": "",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Islamabad",
                  "addressCountry": "PK"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/adcelerate360",
                "https://www.twitter.com/adcelerate360",
                "https://www.linkedin.com/company/adcelerate360",
                "https://www.instagram.com/adcelerate360"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-737-437-0802",
                "contactType": "Customer Service",
                "email": "Info@adcelerate360.com",
                "areaServed": ["US", "EU", "UK", "GCC"],
                "availableLanguage": ["English"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Adcelerate360",
              "image": "https://www.adcelerate360.com/logos/adcelaratelogo.png",
              "url": "https://www.adcelerate360.com",
              "telephone": "+1-737-437-0802",
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sheridan",
                "addressRegion": "WY",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.7975",
                "longitude": "-106.9561"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Place",
                  "name": "European Union"
                },
                {
                  "@type": "Place",
                  "name": "GCC Countries"
                }
              ]
            })
          }}
        />

        {/* Structured Data - Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "E-commerce Marketing & Marketplace Management",
              "provider": {
                "@type": "Organization",
                "name": "Adcelerate360"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "44.7975",
                  "longitude": "-106.9561"
                },
                "geoRadius": "999999"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "E-commerce Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered PPC Management",
                      "description": "Advanced marketplace PPC management across Amazon, Walmart, and Target with AI-driven optimization and real-time bid adjustments."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-Commerce SEO",
                      "description": "Data-driven SEO strategies to dominate marketplace search results and increase organic visibility across all platforms."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brand Strategy Consulting",
                      "description": "Comprehensive brand consultancy and account governance to position your brand as a market leader."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cross-Border Expansion",
                      "description": "Expert guidance for expanding into US, EU, UK, and GCC markets with localized strategies and compliance support."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "White-Label Solutions",
                      "description": "Specialized e-commerce teams that integrate seamlessly into your agency operations."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketplace Management",
                      "description": "Full-service marketplace management covering Amazon, Walmart, Target, and beyond."
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Adcelerate360",
              "url": "https://www.adcelerate360.com",
              "description": "Strategic growth partner for Amazon, Walmart, Target, and beyond.",
              "publisher": {
                "@type": "Organization",
                "name": "Adcelerate360"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.adcelerate360.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${dmSans.variable} antialiased`} style={{ background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)', minHeight: '100vh' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

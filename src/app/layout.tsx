import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://deltaconstructionltd.co.uk"),
  title: {
    default: "Builders in Hounslow & West London | Delta Construction",
    template: "%s | Delta Construction",
  },
  description:
    "Hounslow and West London builders for extensions, loft conversions, roofing, brickwork and renovations. Free site survey and clearly scoped quote.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "construction company London",
    "builders London",
    "house extensions London",
    "loft conversions London",
    "roofing London",
    "brickwork London",
    "Delta Construction",
  ],
  authors: [{ name: "Delta Construction Ltd UK" }],
  creator: "Delta Construction Ltd UK",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://deltaconstructionltd.co.uk",
    siteName: "Delta Construction",
    title: "Builders in Hounslow & West London | Delta Construction",
    description:
      "Director-led builders in Hounslow and West London for extensions, loft conversions, roofing, brickwork and complete renovations.",
    images: [
      {
        url: "/assets/01-kitchen-navy.jpg",
        alt: "Bespoke kitchen completed by Delta Construction in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Builders in Hounslow & West London | Delta Construction",
    description:
      "Director-led building services across Hounslow and West London.",
    images: ["/assets/01-kitchen-navy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Add when you have it
  },
  // NOTE: Do NOT set a site-wide canonical here. In the App Router, metadata
  // merges down the tree, so a canonical set in the root layout is inherited by
  // every page that doesn't override it — which made all sub-pages canonicalise
  // to the homepage and dropped them from Google's index. Each page now sets its
  // own self-referencing canonical via `alternates.canonical`.
  other: {
    "geo.region": "GB-ENG",
    "geo.placename": "Hounslow",
    "geo.position": "51.4685;-0.3654",
    ICBM: "51.4685, -0.3654",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}

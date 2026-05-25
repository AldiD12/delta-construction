import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://deltaconstructionltd.co.uk"),
  title: {
    default: "Delta Construction — Building London Since 2019",
    template: "%s | Delta Construction",
  },
  description:
    "Delta Construction Ltd UK — premium residential and commercial construction across London. Extensions, loft conversions, roofing, brickwork and landscaping. Director-led, fixed-price, guaranteed.",
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
    title: "Delta Construction — Building London Since 2019",
    description:
      "Premium residential and commercial construction across London. Director-led, fixed-price, guaranteed.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Delta Construction — Building London Since 2019",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Construction — Building London Since 2019",
    description:
      "Premium residential and commercial construction across London.",
    images: ["/assets/og-image.jpg"],
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
  alternates: {
    canonical: "https://deltaconstructionltd.co.uk",
  },
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

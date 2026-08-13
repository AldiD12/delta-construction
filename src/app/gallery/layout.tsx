import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Project Gallery",
  description:
    "View completed extensions, renovations, kitchens, bathrooms, roofing, brickwork and joinery projects by Delta Construction across London.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

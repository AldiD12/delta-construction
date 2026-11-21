import type { Metadata } from "next";
import RoofingQuickPage from "@/components/RoofingQuickPage";

export const metadata: Metadata = {
  title: { absolute: "Roofers in Hounslow | Free Roof Assessment | Delta Construction" },
  description:
    "Local roofers in Hounslow and West London. Free roof assessment, written price before any work. 5.0 from 18 Google reviews.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function RoofingQuotePage() {
  return <RoofingQuickPage />;
}

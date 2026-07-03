import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import RoofingClient from "./RoofingClient";

export const metadata: Metadata = {
  title: "Roofing London | Repairs, Reroofing, Slate, Tile & Flat Roofs",
  description:
    "Roofing across West London — repairs, full reroofs, slate and tile, flat roofs, leadwork and chimney work. Honest repair-vs-replace advice, free assessment, workmanship guaranteed.",
  keywords: [
    "roofing london",
    "roof repair london",
    "reroofing london",
    "slate roof london",
    "flat roof london",
    "roofers hounslow",
    "leadwork london",
  ],
  alternates: { canonical: "/roofing" },
  openGraph: {
    title: "Roofing London | Delta Construction",
    description:
      "Repairs, reroofs, slate & tile, flat roofs, leadwork and chimney work across West London. Free assessment, guaranteed.",
    type: "website",
    url: "https://deltaconstructionltd.co.uk/roofing",
    images: [{ url: "/uploads/project-03.jpg", width: 1200, height: 630, alt: "New slate roof with leadwork by Delta Construction" }],
  },
};

const faqs = [
  {
    question: "Should I repair or replace my roof?",
    answer:
      "It depends on age and extent. A few slipped or broken tiles on an otherwise sound roof is a repair. But if the roof is 60+ years old, the felt has perished, or you're getting repeated leaks, a full reroof is usually more cost-effective than patching. We give honest advice after a free assessment — we won't sell you a new roof you don't need.",
  },
  {
    question: "How much does a new roof cost?",
    answer:
      "A typical reroof on a London semi or terrace ranges from around £6,000–£15,000 depending on size, pitch, access and whether you choose concrete tiles, clay or natural slate. Repairs are far less. We provide a fixed-price quote after inspecting the roof.",
  },
  {
    question: "How long does a reroof take?",
    answer:
      "A standard semi or terrace reroof usually takes 5–8 working days, weather permitting. We scaffold, strip the old covering, replace felt and battens, and lay the new tiles or slate, with leadwork and ridge finished properly.",
  },
  {
    question: "Do you do flat roofs?",
    answer:
      "Yes — EPDM rubber, felt and fibreglass (GRP) flat roofs for extensions, dormers, garages and outriggers, with proper falls and detailing so they drain and last.",
  },
  {
    question: "Is the work guaranteed?",
    answer:
      "Yes — our workmanship carries a guarantee, and roofing materials come with their own manufacturer warranties (typically 15–30 years depending on the tile or membrane). We're fully insured with £2M public liability.",
  },
];

export default function RoofingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[{ name: "Roofing", url: "https://deltaconstructionltd.co.uk/roofing" }]}
      />
      <ServiceSchema
        name="Roofing"
        description="Roof repairs, reroofing, slate and tile roofs, flat roofs, leadwork and chimney work across West London."
        areaServed="London"
      />
      <FAQSchema faqs={faqs} />
      <RoofingClient />
    </>
  );
}

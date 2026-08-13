import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import KitchensBathroomsClient from "./KitchensBathroomsClient";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Renovations London",
  description:
    "Kitchen and bathroom renovations across London, including design, fitting, plumbing, tiling, wet rooms and open-plan kitchens. Free site survey.",
  keywords: [
    "kitchen fitting london",
    "kitchen extension london",
    "bathroom installation london",
    "en-suite fitting",
    "wet room installation",
    "bathroom fitters london",
  ],
  alternates: { canonical: "/kitchens-bathrooms" },
  openGraph: {
    title: "Kitchens & Bathrooms London | Delta Construction",
    description:
      "Kitchen and bathroom design, supply and installation across London. Open-plan kitchens, en-suites, wet rooms and tiling. Director-led, guaranteed.",
    type: "website",
    url: "https://deltaconstructionltd.co.uk/kitchens-bathrooms",
    images: [{ url: "/uploads/project-15.jpg", width: 1200, height: 630, alt: "Finished open-plan kitchen with marble island by Delta Construction" }],
  },
};

const faqs = [
  {
    question: "Do you supply the kitchen and bathroom, or just fit?",
    answer:
      "Both. We can design, supply and install a complete kitchen or bathroom, or fit units and suites you've bought elsewhere. Doing it under one roof means the building work, plumbing, electrics and finishing all line up — no gaps between trades.",
  },
  {
    question: "Can you build a kitchen extension at the same time?",
    answer:
      "Yes — most of our kitchens are part of a rear or side-return extension that opens the space into an open-plan kitchen-diner. We handle the structural work, the extension and the kitchen fit as one coordinated project.",
  },
  {
    question: "How long does a kitchen or bathroom take?",
    answer:
      "A bathroom refit is usually 2–3 weeks; a kitchen fit 2–4 weeks depending on complexity. Combined with an extension, the kitchen is fitted in the final weeks of the build. We give a clear programme in your quote.",
  },
  {
    question: "Do you do wet rooms and en-suites?",
    answer:
      "Yes — fully tanked and waterproofed wet rooms, and en-suites for loft conversions and master bedrooms, including all the plumbing, tiling and waterproofing done to standard.",
  },
  {
    question: "Is the work guaranteed?",
    answer:
      "Yes — a 1-year workmanship guarantee, £2M public liability insurance, and building-regulations sign-off where structural or notifiable electrical/plumbing work is involved.",
  },
];

export default function KitchensBathroomsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[{ name: "Kitchens & Bathrooms", url: "https://deltaconstructionltd.co.uk/kitchens-bathrooms" }]}
      />
      <ServiceSchema
        name="Kitchens & Bathrooms"
        description="Kitchen and bathroom design, supply and installation across London — open-plan kitchen extensions, bespoke joinery, en-suites, wet rooms and tiling."
        areaServed="London"
      />
      <FAQSchema faqs={faqs} />
      <KitchensBathroomsClient />
    </>
  );
}

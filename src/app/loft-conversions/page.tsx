import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import LoftConversionsClient from "./LoftConversionsClient";

export const metadata: Metadata = {
  title: "Loft Conversions Hounslow & West London",
  description:
    "Loft conversions in Hounslow and West London — dormer, hip-to-gable, L-shape and mansard. Planning, structural design and building-regulations sign-off managed.",
  keywords: [
    "loft conversions london",
    "loft conversions west london",
    "loft conversions hounslow",
    "dormer loft conversion",
    "l shape loft conversion",
    "mansard loft conversion",
    "hip to gable loft conversion",
    "loft conversion builders london",
  ],
  alternates: { canonical: "/loft-conversions" },
  openGraph: {
    title: "Loft Conversions Hounslow & West London | Delta Construction",
    description:
      "Dormer, hip-to-gable, L-shape and mansard loft conversions across London. Director-led, fixed-price, guaranteed.",
    type: "website",
    url: "https://deltaconstructionltd.co.uk/loft-conversions",
    images: [{ url: "/assets/residential-extension-project.jpg", width: 1200, height: 630, alt: "Loft conversion under construction by Delta Construction" }],
  },
};

const faqs = [
  {
    question: "How much does a loft conversion cost in London?",
    answer:
      "A loft conversion in London typically costs £30,000–£110,000 depending on type — rooflight from £30k, dormer £45–70k, hip-to-gable £55–80k, L-shape £60–95k, mansard £65–110k. See our full loft conversion cost guide for the breakdown.",
  },
  {
    question: "Which loft conversion suits my house?",
    answer:
      "It depends on your roof shape and head height. Victorian and Edwardian terraces usually suit a rear dormer or L-shape; 1930s semis suit a hip-to-gable; conservation-area homes often need a mansard or rooflight. We assess the best option at a free survey.",
  },
  {
    question: "Do I need planning permission for a loft conversion?",
    answer:
      "Many loft conversions are permitted development within volume limits (40m³ terraced, 50m³ semi/detached), but flats, maisonettes and most conservation-area properties need a full application. We check and handle it, and always secure a Lawful Development Certificate.",
  },
  {
    question: "How long does a loft conversion take?",
    answer:
      "A dormer or hip-to-gable takes about 6–9 weeks on site, a mansard 8–12 weeks, plus 6–10 weeks beforehand for design, structural calculations and approvals. You can usually stay living in the house throughout.",
  },
  {
    question: "Are you insured and guaranteed?",
    answer:
      "Yes — 1-year workmanship guarantee, £2M public liability insurance, and building-regulations completion sign-off (including the fire-safety and structural requirements) as standard.",
  },
];

export default function LoftConversionsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[{ name: "Loft Conversions", url: "https://deltaconstructionltd.co.uk/loft-conversions" }]}
      />
      <ServiceSchema
        name="Loft Conversions"
        description="Dormer, hip-to-gable, L-shape and mansard loft conversions across London. Structural design, planning, party-wall and building-regs sign-off managed end to end."
        areaServed="Hounslow and West London"
      />
      <FAQSchema faqs={faqs} />
      <LoftConversionsClient />
    </>
  );
}

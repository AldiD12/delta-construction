import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import CarpentryClient from "./CarpentryClient";

export const metadata: Metadata = {
  title: "Carpentry & Joinery London | Bespoke Cabinetry, Doors & Staircases",
  description:
    "Carpentry and bespoke joinery across London — fitted wardrobes, media units, alcove storage, staircases, doors, skirting and second-fix carpentry. Made to measure, fitted properly. Free quote.",
  keywords: [
    "carpentry london",
    "bespoke joinery london",
    "fitted wardrobes london",
    "media unit joinery",
    "alcove units",
    "staircase joinery",
    "second fix carpenter",
  ],
  alternates: { canonical: "/carpentry" },
  openGraph: {
    title: "Carpentry & Joinery London | Delta Construction",
    description:
      "Bespoke fitted furniture, media units, alcove storage, staircases and second-fix carpentry across London. Made to measure, guaranteed.",
    type: "website",
    url: "https://deltaconstructionltd.co.uk/carpentry",
    images: [{ url: "/uploads/project-08.jpg", width: 1200, height: 630, alt: "Bespoke slatted feature wall with backlit oak joinery by Delta Construction" }],
  },
};

const faqs = [
  {
    question: "Do you make bespoke furniture, or just fit it?",
    answer:
      "We make and fit bespoke joinery to measure — fitted wardrobes, alcove units, media walls, window seats and shelving designed for your exact space. We can also install flat-pack or supplied units where you prefer.",
  },
  {
    question: "Can you build fitted furniture into a loft or extension?",
    answer:
      "Yes — bespoke storage is often the perfect finishing touch to a loft conversion or extension: eaves storage in a loft, an island or larder in a new kitchen, or a media wall in the new living space. We build it in as part of the project.",
  },
  {
    question: "Do you do doors, skirting and second-fix carpentry?",
    answer:
      "Yes — hanging doors, architrave, skirting, staircases and all the second-fix carpentry that makes a renovation feel finished rather than functional. It's the detail that separates a good job from an average one.",
  },
  {
    question: "What materials do you work in?",
    answer:
      "Whatever suits the design — painted MDF for a crisp modern finish, real oak and hardwoods for warmth and grain, veneers, and slatted timber for feature walls. We'll advise on what gives the look you want within budget.",
  },
  {
    question: "Is the work guaranteed?",
    answer:
      "Yes — a 1-year workmanship guarantee and £2M public liability insurance on all our work.",
  },
];

export default function CarpentryPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[{ name: "Carpentry & Joinery", url: "https://deltaconstructionltd.co.uk/carpentry" }]}
      />
      <ServiceSchema
        name="Carpentry & Joinery"
        description="Bespoke joinery, fitted furniture, media units, alcove storage, staircases, doors and second-fix carpentry across London."
        areaServed="London"
      />
      <FAQSchema faqs={faqs} />
      <CarpentryClient />
    </>
  );
}

import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import BrickworkClient from "./BrickworkClient";

export const metadata: Metadata = {
  title: "Brickwork & Repointing London | Structural Openings & Garden Walls",
  description:
    "Brickwork and repointing across London — structural openings with steel, garden and retaining walls, period brick restoration and blockwork. Matched brickwork, done properly. Free quote.",
  keywords: [
    "brickwork london",
    "repointing london",
    "bricklayers london",
    "garden wall builder",
    "retaining wall",
    "structural opening steel beam",
    "period brick restoration",
  ],
  alternates: { canonical: "/brickwork-pointing" },
  openGraph: {
    title: "Brickwork & Repointing London | Delta Construction",
    description:
      "Structural openings, repointing, garden and retaining walls and period brick restoration across London. Matched brickwork, guaranteed.",
    type: "website",
    url: "https://deltaconstructionltd.co.uk/brickwork-pointing",
    images: [{ url: "/uploads/project-11.jpg", width: 1200, height: 630, alt: "Brick retaining wall and sandstone paving by Delta Construction" }],
  },
};

const faqs = [
  {
    question: "What is repointing and does my house need it?",
    answer:
      "Repointing is replacing the worn mortar between bricks. If the mortar is crumbling, receding or letting water in — common on older London properties — repointing protects the wall from damp and frost damage. Left too long, failing pointing lets water into the brickwork and can lead to spalling and structural issues.",
  },
  {
    question: "Can you match existing brick and mortar?",
    answer:
      "Yes — matching brick type, colour and mortar mix is exactly what makes brickwork look right, especially on extensions and period repairs. We source matching or reclaimed bricks and mix mortar to match the colour and (on older walls) use lime where appropriate.",
  },
  {
    question: "Do you form structural openings and install steel?",
    answer:
      "Yes — knocking through walls for open-plan layouts, bifold doors or extensions means inserting a properly sized steel beam (RSJ), designed by a structural engineer and installed with the right padstones and support. We handle the design, the steel and the making-good.",
  },
  {
    question: "Do you build garden and retaining walls?",
    answer:
      "Yes — brick and block garden walls, boundary walls, retaining walls and planters, with proper foundations, damp-proofing and drainage where needed so they last.",
  },
  {
    question: "Are you insured and guaranteed?",
    answer:
      "Yes — 1-year workmanship guarantee and £2M public liability insurance. Structural work is designed by a qualified engineer and signed off under building regulations.",
  },
];

export default function BrickworkPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[{ name: "Brickwork & Pointing", url: "https://deltaconstructionltd.co.uk/brickwork-pointing" }]}
      />
      <ServiceSchema
        name="Brickwork & Repointing"
        description="Brickwork, repointing, structural openings with steel, garden and retaining walls, period brick restoration and blockwork across London."
        areaServed="London"
      />
      <FAQSchema faqs={faqs} />
      <BrickworkClient />
    </>
  );
}

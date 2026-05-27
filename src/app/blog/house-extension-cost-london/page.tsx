import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import ExtensionCostClient from "./ExtensionCostClient";

export const metadata: Metadata = {
  title: "How Much Does a House Extension Cost in London? (2026 Guide)",
  description:
    "Real London extension costs in 2026: single-storey from £2,800/m², double-storey from £2,200/m², kitchen extensions, side-returns and more. Prices from actual projects by Delta Construction.",
  keywords: [
    "house extension cost london",
    "extension cost per m2 uk",
    "how much does an extension cost",
    "single storey extension cost",
    "rear extension cost london",
    "kitchen extension cost",
    "side return extension cost",
    "double storey extension cost",
    "extension cost calculator",
    "house extension cost uk 2026",
  ],
  openGraph: {
    title: "How Much Does a House Extension Cost in London? (2026 Guide)",
    description:
      "Real prices from real London projects. Single-storey, double-storey, side-return and kitchen extension costs broken down by type, size and specification.",
    type: "article",
    url: "https://deltaconstructionltd.co.uk/blog/house-extension-cost-london",
    images: [
      {
        url: "/uploads/extension-kitchen-glass-roof.jpeg",
        width: 1200,
        height: 630,
        alt: "Completed kitchen extension with glass roof by Delta Construction in West London",
      },
    ],
  },
  alternates: {
    canonical: "https://deltaconstructionltd.co.uk/blog/house-extension-cost-london",
  },
};

const faqs = [
  {
    question: "How much does a house extension cost in London in 2026?",
    answer:
      "A house extension in London costs between £2,200 and £4,500+ per square metre in 2026, depending on the type and specification. A typical 20m² single-storey rear extension costs £65,000–£95,000, while a 40m² double-storey extension costs £110,000–£170,000. London prices are 30–40% above the UK national average.",
  },
  {
    question: "How much does a single-storey extension cost per m² in London?",
    answer:
      "A single-storey extension in London costs £2,800–£4,500 per m² depending on specification. A basic spec starts around £2,800/m², a mid-range finish is £3,200–£3,800/m², and a high-end specification with underfloor heating, bespoke joinery and premium finishes reaches £4,000–£4,500/m².",
  },
  {
    question: "What is included in extension cost per m²?",
    answer:
      "Extension cost per m² typically includes foundations, structural walls, roof, windows and doors, internal plastering, electrics, plumbing, flooring prep, and decoration. It usually excludes kitchen/bathroom fittings, furniture, landscaping, party wall surveyor fees, planning application fees, and architect/structural engineer fees.",
  },
  {
    question: "Is a double-storey extension cheaper per m² than a single-storey?",
    answer:
      "Yes. A double-storey extension is typically 15–25% cheaper per m² than a single-storey because the foundations and roof (the most expensive elements) are shared across two floors. You get roughly double the floor area for only 50–65% more cost than a single-storey.",
  },
  {
    question: "How long does a house extension take in London?",
    answer:
      "A typical single-storey rear extension takes 10–14 weeks from breaking ground. A double-storey extension takes 14–20 weeks. Side-return extensions are usually 8–12 weeks. Add 6–10 weeks before construction for planning permission (if required), building regulations approval, and party wall agreements.",
  },
  {
    question: "Do I need planning permission for an extension in London?",
    answer:
      "Many single-storey rear extensions fall under permitted development and do not need planning permission, provided they meet size and height limits. However, if your property is in a conservation area, is a flat/maisonette, or has been previously extended, you may need to apply. We recommend checking with your local council or reading our companion guide on permitted development rules.",
  },
];

export default function ExtensionCostPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Blog", url: "https://deltaconstructionltd.co.uk/blog" },
          {
            name: "House Extension Cost London",
            url: "https://deltaconstructionltd.co.uk/blog/house-extension-cost-london",
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How Much Does a House Extension Cost in London? (2026 Guide)",
            description:
              "Real London extension costs in 2026 broken down by type, size and specification from actual projects.",
            author: {
              "@type": "Organization",
              name: "Delta Construction Ltd UK",
              url: "https://deltaconstructionltd.co.uk",
            },
            publisher: {
              "@type": "Organization",
              name: "Delta Construction Ltd UK",
              logo: {
                "@type": "ImageObject",
                url: "https://deltaconstructionltd.co.uk/assets/logo.png",
              },
            },
            datePublished: "2026-05-27",
            dateModified: "2026-05-27",
            image:
              "https://deltaconstructionltd.co.uk/uploads/extension-kitchen-glass-roof.jpeg",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://deltaconstructionltd.co.uk/blog/house-extension-cost-london",
            },
          }),
        }}
      />
      <ExtensionCostClient />
    </>
  );
}

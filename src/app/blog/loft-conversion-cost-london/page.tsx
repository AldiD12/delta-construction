import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import LoftConversionClient from "./LoftConversionClient";

export const metadata: Metadata = {
  title: "How Much Does a Loft Conversion Cost in London? (2026 Guide)",
  description:
    "London loft conversion costs in 2026 by type: rooflight from £30k, dormer £45–70k, hip-to-gable £55–80k, L-shape £60–95k, mansard £65–110k. Plus planning, building regs and what really drives the price.",
  keywords: [
    "loft conversion cost london",
    "loft conversion london",
    "dormer loft conversion cost",
    "mansard loft conversion cost",
    "l shape dormer cost",
    "hip to gable loft conversion",
    "how much is a loft conversion",
    "loft conversion planning permission",
    "loft conversion cost 2026",
    "do i need planning permission for a loft conversion",
  ],
  openGraph: {
    title: "How Much Does a Loft Conversion Cost in London? (2026 Guide)",
    description:
      "Every loft conversion type priced for London 2026 — rooflight, dormer, hip-to-gable, L-shape and mansard — plus the planning rules, building regs and the real cost drivers most guides skip.",
    type: "article",
    url: "https://deltaconstructionltd.co.uk/blog/loft-conversion-cost-london",
    images: [
      {
        url: "/assets/residential-extension-project.jpg",
        width: 1200,
        height: 630,
        alt: "Loft conversion structural frame under construction by Delta Construction in North London",
      },
    ],
  },
  alternates: {
    canonical:
      "https://deltaconstructionltd.co.uk/blog/loft-conversion-cost-london",
  },
};

const faqs = [
  {
    question: "How much does a loft conversion cost in London in 2026?",
    answer:
      "A loft conversion in London costs between £30,000 and £110,000 in 2026 depending on type. A simple rooflight (Velux) conversion starts around £30,000–£45,000, a rear dormer is £45,000–£70,000, a hip-to-gable is £55,000–£80,000, an L-shape dormer is £60,000–£95,000, and a mansard reaches £65,000–£110,000. Expressed per square metre, most London loft conversions work out at £1,500–£2,400/m².",
  },
  {
    question: "Which loft conversion is the cheapest?",
    answer:
      "A rooflight (Velux) conversion is the cheapest because it adds no new structure to the roof — you simply convert the existing loft and fit windows into the slope. It is only possible where you already have enough head height (around 2.2–2.4m at the ridge). If you need more headroom or floor area, a dormer is the next step up in both space and cost.",
  },
  {
    question: "Do I need planning permission for a loft conversion in London?",
    answer:
      "Many loft conversions fall under permitted development and do not need a planning application, provided the new roof volume stays within 40m³ for a terraced house or 50m³ for a semi or detached house, doesn't extend beyond the front roof plane, and isn't higher than the existing ridge. Permitted development rights are removed for flats, maisonettes, and often in conservation areas, where a full planning application is usually required. We always recommend securing a Lawful Development Certificate even when permission isn't needed.",
  },
  {
    question: "How much head height do you need for a loft conversion?",
    answer:
      "As a rule of thumb you need at least 2.2m–2.4m of head height at the highest point of the existing loft for a conversion to work without major structural changes. Building regulations require a minimum of 2.0m of headroom over the staircase. If you're short on height, options include a dormer (to gain volume), lowering the ceilings below, or a mansard — each adds cost.",
  },
  {
    question: "How long does a loft conversion take?",
    answer:
      "Construction of a typical dormer or hip-to-gable loft conversion takes 6–9 weeks. A mansard, which involves rebuilding the rear roof structure, takes 8–12 weeks. Add 6–10 weeks beforehand for design, structural calculations, building control approval, and a party wall award if you share walls with neighbours. You can usually live in the house throughout — most of the work happens above you.",
  },
  {
    question: "Does a loft conversion add value to my home?",
    answer:
      "Yes — a loft conversion is one of the highest-return home improvements in London. Adding a double bedroom with an en-suite can increase a property's value by roughly 15–25%, often exceeding the cost of the work in higher-value London postcodes. The exact uplift depends on your area's price per square foot and whether the conversion adds a bedroom the property's price bracket rewards.",
  },
];

export default function LoftConversionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Blog", url: "https://deltaconstructionltd.co.uk/blog" },
          {
            name: "Loft Conversion Cost London",
            url: "https://deltaconstructionltd.co.uk/blog/loft-conversion-cost-london",
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
              "How Much Does a Loft Conversion Cost in London? (2026 Guide)",
            description:
              "London loft conversion costs in 2026 broken down by type, plus planning rules, building regulations and the real cost drivers.",
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
            datePublished: "2026-06-23",
            dateModified: "2026-06-23",
            image:
              "https://deltaconstructionltd.co.uk/assets/residential-extension-project.jpg",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://deltaconstructionltd.co.uk/blog/loft-conversion-cost-london",
            },
          }),
        }}
      />
      <LoftConversionClient />
    </>
  );
}

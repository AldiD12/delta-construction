import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import PermittedDevClient from "./PermittedDevClient";

export const metadata: Metadata = {
  title: "Permitted Development Rules for Extensions in London (2026 Guide)",
  description:
    "What you can build without planning permission in London in 2026. Size limits, height rules, conservation areas, and when you need to apply. Practical guide from London builders.",
  keywords: [
    "permitted development",
    "permitted development extension",
    "do i need planning permission for an extension",
    "how far can i extend without planning permission",
    "single storey extension permitted development",
    "permitted development rules 2026",
    "planning permission loft conversion",
    "building regulations for extensions",
    "extension without planning permission",
    "permitted development london",
  ],
  openGraph: {
    title: "Permitted Development Rules for Extensions in London (2026 Guide)",
    description:
      "What you can build without planning permission in London. Size limits, height rules, and when you need to apply.",
    type: "article",
    url: "https://deltaconstructionltd.co.uk/blog/permitted-development-london",
    images: [
      {
        url: "/assets/modern-extension-exterior.png",
        width: 1200,
        height: 630,
        alt: "Modern brick extension built under permitted development in London",
      },
    ],
  },
  alternates: {
    canonical: "https://deltaconstructionltd.co.uk/blog/permitted-development-london",
  },
};

const faqs = [
  {
    question: "Do I need planning permission for a single-storey rear extension in London?",
    answer:
      "In most cases, no. A single-storey rear extension on a detached, semi-detached or terraced house in London can be built under permitted development rights, provided it does not extend more than 3 metres from the rear wall (6 metres for detached houses), does not exceed 4 metres in height, and covers no more than 50% of the garden area. However, conservation areas, Article 4 directions, listed buildings, and flats/maisonettes are excluded.",
  },
  {
    question: "How far can I extend without planning permission?",
    answer:
      "Under standard permitted development, you can extend 3 metres from the rear wall of a semi-detached or terraced house, or 4 metres from a detached house (single-storey). Under the larger home extension scheme (prior approval), these limits increase to 6 metres (semi/terrace) or 8 metres (detached). Side extensions are limited to half the width of the original house and a maximum 4 metres height.",
  },
  {
    question: "What is the larger home extension scheme?",
    answer:
      "The larger home extension scheme allows single-storey rear extensions of up to 6 metres (semi-detached/terraced) or 8 metres (detached) without full planning permission. Instead, you submit a prior approval application (£120 fee). The council then notifies your neighbours, who have 21 days to comment. If no objections are raised, or the council determines the impact is acceptable, you can proceed.",
  },
  {
    question: "Can I build an extension in a conservation area without planning permission?",
    answer:
      "Permitted development rights are reduced in conservation areas. You cannot add cladding to the exterior, and side extensions or two-storey rear extensions are not permitted. Single-storey rear extensions may still be allowed under PD, but any extension visible from a public highway will likely need planning permission. Always check with your local planning authority.",
  },
  {
    question: "Do I need building regulations approval even if I don't need planning permission?",
    answer:
      "Yes, always. Building regulations and planning permission are two separate legal requirements. Even if your extension falls under permitted development and does not need planning permission, it must still comply with building regulations covering structural safety, fire safety, insulation, drainage, ventilation and electrical safety. You will need building regulations approval before starting work.",
  },
  {
    question: "What is a lawful development certificate and do I need one?",
    answer:
      "A lawful development certificate (LDC) is an optional document from your local council that confirms your extension is lawful under permitted development. It costs £117 and typically takes 8 weeks to obtain. While not legally required, we strongly recommend getting one — it protects you when selling the property, as solicitors and mortgage lenders routinely ask for proof that extensions were built lawfully.",
  },
];

export default function PermittedDevPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Blog", url: "https://deltaconstructionltd.co.uk/blog" },
          {
            name: "Permitted Development London",
            url: "https://deltaconstructionltd.co.uk/blog/permitted-development-london",
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
              "Permitted Development Rules for Extensions in London (2026 Guide)",
            description:
              "What you can build without planning permission in London in 2026 — size limits, height rules, and when you need to apply.",
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
              "https://deltaconstructionltd.co.uk/assets/modern-extension-exterior.png",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://deltaconstructionltd.co.uk/blog/permitted-development-london",
            },
          }),
        }}
      />
      <PermittedDevClient />
    </>
  );
}

import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import ExtensionsClient from "./ExtensionsClient";

export const metadata: Metadata = {
  title: "House Extensions Hounslow & West London",
  description:
    "House extensions in Hounslow and West London. Rear, side-return, wrap-around and double-storey builds with planning and building regulations managed.",
  keywords: [
    "house extensions london",
    "house extensions hounslow",
    "house extensions west london",
    "rear extension london",
    "side return extension",
    "double storey extension",
    "wrap around extension",
    "kitchen extension london",
    "single storey extension",
    "builders for extensions london",
  ],
  alternates: { canonical: "/extensions" },
  openGraph: {
    title: "House Extensions Hounslow & West London | Delta Construction",
    description:
      "Single-storey rear, side-return, wrap-around and double-storey extensions across London. Director-led, fixed-price, guaranteed.",
    type: "website",
    url: "https://deltaconstructionltd.co.uk/extensions",
    images: [{ url: "/uploads/project-17.jpg", width: 1200, height: 630, alt: "Completed modern brick rear extension by Delta Construction" }],
  },
};

const faqs = [
  {
    question: "How much does a house extension cost in London?",
    answer:
      "A single-storey rear extension in London typically costs £45,000–£95,000, a side-return £55,000–£90,000, and a double-storey £80,000–£170,000 depending on size and specification — roughly £2,200–£4,500 per m². We give a fixed-price quote after a free survey. See our full house extension cost guide for the breakdown.",
  },
  {
    question: "Do I need planning permission for an extension?",
    answer:
      "Many single-storey rear and side-return extensions fall under permitted development and need no planning application, provided they meet size and height limits. Conservation areas, flats and previously-extended homes usually need to apply. We check your address and handle the application or permitted-development certificate either way.",
  },
  {
    question: "How long does an extension take to build?",
    answer:
      "A single-storey rear extension takes around 10–14 weeks on site, a side-return 8–12 weeks, and a double-storey 14–20 weeks. Add 6–10 weeks beforehand for design, structural calculations, building control and any party-wall awards.",
  },
  {
    question: "Do you handle planning, structural design and party wall?",
    answer:
      "Yes — we manage the whole process: architectural drawings, structural engineer's calculations, planning or permitted-development certificates, party-wall awards with neighbours, and building-regulations sign-off. It's all coordinated under one roof so nothing falls between trades.",
  },
  {
    question: "Are you insured and guaranteed?",
    answer:
      "Every project carries a 1-year workmanship guarantee and £2M public liability insurance, with building-regulations completion sign-off included as standard. Certificates are available on request.",
  },
];

export default function ExtensionsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[{ name: "Extensions", url: "https://deltaconstructionltd.co.uk/extensions" }]}
      />
      <ServiceSchema
        name="House Extensions"
        description="Single-storey rear, side-return, wrap-around and double-storey house extensions across London. Design, planning, structural engineering, party-wall and build managed end to end."
        areaServed="Hounslow and West London"
      />
      <FAQSchema faqs={faqs} />
      <ExtensionsClient />
    </>
  );
}

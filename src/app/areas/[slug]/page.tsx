import type { Metadata } from "next";
import { locations } from "@/data/locations";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
} from "@/components/Schema";
import LocationClient from "./LocationClient";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `Builders in ${location.name} — Delta Construction`,
    description: location.description,
    other: {
      "geo.region": location.region,
      "geo.placename": location.name,
      "geo.position": `${location.lat};${location.lng}`,
      ICBM: `${location.lat}, ${location.lng}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return null;

  const faqs = [
    {
      question: `Do you cover ${location.name}?`,
      answer: `Yes, ${location.name} is one of our core areas. A director will visit your property for a free survey and fixed-price quote.`,
    },
    {
      question: "Are you fully insured?",
      answer:
        "Yes, we carry £2 million public liability insurance for complete peace of mind.",
    },
    {
      question: "Do you provide a guarantee?",
      answer:
        "Yes, every project comes with a 1-year workmanship guarantee as standard.",
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "Areas",
            url: "https://deltaconstructionltd.co.uk/areas",
          },
          {
            name: location.name,
            url: `https://deltaconstructionltd.co.uk/areas/${location.slug}`,
          },
        ]}
      />
      <ServiceSchema
        name="Construction Services"
        description={location.description}
        areaServed={location.name}
      />
      <FAQSchema faqs={faqs} />
      <LocationClient location={location} />
    </>
  );
}

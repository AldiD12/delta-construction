import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  if (!location) notFound();

  return {
    title: `Builders in ${location.name}`,
    description: location.metaDescription ?? location.description,
    keywords: [
      `builders ${location.name}`,
      `builders in ${location.name}`,
      `house extensions ${location.name}`,
      `loft conversions ${location.name}`,
      `roofers ${location.name}`,
    ],
    alternates: { canonical: `/areas/${location.slug}` },
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
  if (!location) notFound();

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
      <FAQSchema faqs={location.faqs} />
      <LocationClient location={location} />
    </>
  );
}

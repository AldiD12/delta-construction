export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    // Short brand-form is the `name` (what people search and see on the logo).
    // Legal and alternate forms below give Google the disambiguation signals it
    // was missing — see brand-slip analysis 24 Jul 2026: short-form "delta
    // construction" was volatile (pos 6→29→8) while long-form terms stayed
    // rock-steady at pos 1–2. That's an entity ambiguity signal, not a trust
    // one. These fields explicitly link all the name variants to one entity.
    name: "Delta Construction",
    legalName: "Delta Construction Ltd UK",
    alternateName: [
      "Delta Construction Ltd",
      "Delta Construction Ltd UK",
      "Delta Construction Limited",
      "Delta Construction Limited UK Ltd",
      "Delta Builders",
    ],
    image: "https://deltaconstructionltd.co.uk/assets/logo.png",
    url: "https://deltaconstructionltd.co.uk",
    telephone: "+447479389996",
    email: "info@deltaconstructionltd.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 Southland Way",
      addressLocality: "Hounslow",
      postalCode: "TW3 2RH",
      addressRegion: "London",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4685,
      longitude: -0.3654,
    },
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    priceRange: "££-££££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "16",
      bestRating: "5",
    },
    foundingDate: "2019",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 15,
    },
    // Entity-linking signals — Google uses sameAs to reconcile the business
    // across the web. Only include URLs the business genuinely owns/controls.
    sameAs: [
      "https://www.facebook.com/p/Delta-Construction-Limited-UK-100032452644596/",
      "https://www.instagram.com/deltaconstructionuk/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Delta Construction Ltd UK",
      url: "https://deltaconstructionltd.co.uk",
    },
  };

  if (areaServed) {
    schema.areaServed = {
      "@type": "Place",
      name: areaServed,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

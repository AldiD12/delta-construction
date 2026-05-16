import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Delta Construction",
  description:
    "Founded in 2019 by a project manager and building specialist. Delta Construction delivers premium residential and commercial builds across London.",
};

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "About",
            url: "https://deltaconstructionltd.co.uk/about",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aldi D.",
            jobTitle: "Founder & Director",
            worksFor: {
              "@type": "Organization",
              name: "Delta Construction Ltd UK",
            },
          }),
        }}
      />
      <AboutClient />
    </>
  );
}

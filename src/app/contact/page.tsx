import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Delta Construction",
  description:
    "Request a free quote from Delta Construction. We reply within one working day. Call +44 7479 389 996 or fill in our quick form.",
  other: {
    "geo.region": "GB-ENG",
    "geo.placename": "Hounslow",
    "geo.position": "51.4685;-0.3654",
    ICBM: "51.4685, -0.3654",
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "Contact",
            url: "https://deltaconstructionltd.co.uk/contact",
          },
        ]}
      />
      <ContactClient />
    </>
  );
}

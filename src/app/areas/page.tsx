import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import AreasClient from "./AreasClient";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Delta Construction serves West London, Twickenham, Richmond, Hounslow, Ealing and surrounding areas. Director-led construction with fixed-price quotes.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "Areas",
            url: "https://deltaconstructionltd.co.uk/areas",
          },
        ]}
      />
      <AreasClient />
    </>
  );
}

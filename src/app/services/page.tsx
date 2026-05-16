import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services — Delta Construction",
  description:
    "From extensions and loft conversions to roofing, brickwork and landscaping. Full-service construction across London — director-led, fixed-price, guaranteed.",
};

export default function ServicesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "Services",
            url: "https://deltaconstructionltd.co.uk/services",
          },
        ]}
      />
      <ServiceSchema
        name="Extensions"
        description="Single and double-storey rear extensions, side-returns and wrap-arounds across London. Steel design, party-wall awards, glazing schedule, underfloor heating and full kitchen fit-out."
        areaServed="London"
      />
      <ServiceSchema
        name="Loft Conversions"
        description="Mansard, dormer, hip-to-gable and L-shape loft conversions. Planning applications, steel-frame design, sprinkler systems, building-regs sign-off and full second-fix joinery."
        areaServed="London"
      />
      <ServiceSchema
        name="Roofing"
        description="Roof repairs and full reroofs. Natural Welsh slate, clay tile, single-ply membrane, GRP flat roof and Code 5 leadwork including flashings, valleys, parapets and chimney rebuilds."
        areaServed="London"
      />
      <ServiceSchema
        name="Brickwork"
        description="Structural openings, full repointing in lime or sand-cement, garden walls and restoration of period facades. London-stock and reclaimed yellow stock matching."
        areaServed="London"
      />
      <ServiceSchema
        name="Landscaping"
        description="Hard landscaping including porcelain, stone and clay paving, resin-bound and block-paved driveways, retaining walls, planters, pergolas and outdoor lighting."
        areaServed="London"
      />
      <ServicesClient />
    </>
  );
}

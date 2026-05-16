import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Reviews — Delta Construction",
  description:
    "Read what our clients say. 16 five-star Google reviews from homeowners across London. Delta Construction — rated 5.0 on Google.",
};

export default function ReviewsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "Reviews",
            url: "https://deltaconstructionltd.co.uk/reviews",
          },
        ]}
      />
      <ReviewsClient />
    </>
  );
}

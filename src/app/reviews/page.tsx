import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what our clients say. 18 five-star Google reviews for Delta Construction, rated 5.0 on Google.",
  alternates: { canonical: "/reviews" },
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

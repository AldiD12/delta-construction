import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog — Delta Construction",
  description:
    "Expert guides on house extension costs, permitted development rules, loft conversions and more. Practical advice from London builders with real project experience.",
};

export default function BlogPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Blog", url: "https://deltaconstructionltd.co.uk/blog" },
        ]}
      />
      <BlogIndexClient />
    </>
  );
}

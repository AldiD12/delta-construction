import { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deltaconstructionltd.co.uk";

  const staticPages = [
    { url: `${baseUrl}/`, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/extensions`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/loft-conversions`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/roofing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/kitchens-bathrooms`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/brickwork-pointing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/carpentry`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/gallery`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/reviews`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/areas`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/loft-conversion-cost-london`, lastModified: "2026-05-27", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog/house-extension-cost-london`, lastModified: "2026-05-27", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog/permitted-development-london`, lastModified: "2026-05-27", changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const locationPages = locations.map((loc) => ({
    url: `${baseUrl}/areas/${loc.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages];
}

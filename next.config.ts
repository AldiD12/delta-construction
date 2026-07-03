import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // 301/308 redirects from the PREVIOUS site's URLs (still indexed & ranking in
  // Google) to their closest equivalent on this site. Without these, those old
  // ranking URLs 404 and their accumulated equity is lost. Extend this list as
  // more old URLs surface in the Search Console "Pages" report.
  async redirects() {
    return [
      // Legacy URLs that map to an existing page rather than a dedicated rebuild:
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      // NOTE: /roofing, /extensions, /kitchens-bathrooms, /loft-conversions,
      // /brickwork-pointing and /carpentry are now real dedicated pages that
      // reclaim the legacy URLs' equity directly, so they are NOT redirected.
    ];
  },
};

export default nextConfig;

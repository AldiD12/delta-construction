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
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/roofing", destination: "/services", permanent: true },
      { source: "/extensions", destination: "/services", permanent: true },
      { source: "/carpentry", destination: "/services", permanent: true },
      { source: "/kitchens-bathrooms", destination: "/services", permanent: true },
      { source: "/brickwork-pointing", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;

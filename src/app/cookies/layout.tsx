import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for the Delta Construction website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Website terms and conditions for Delta Construction Limited UK Ltd.",
  alternates: { canonical: "/terms" },
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

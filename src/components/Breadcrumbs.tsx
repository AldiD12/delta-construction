import Link from "next/link";
import { BreadcrumbSchema } from "./Schema";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: `https://deltaconstructionltd.co.uk${item.href}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        aria-label="Breadcrumb"
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11.5px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--mute)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
          padding: "24px 0 0",
        }}
      >
        <Link
          href="/"
          style={{
            color: "var(--mute)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          Home
        </Link>
        {items.map((item, i) => (
          <span key={item.href} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "var(--rule)", userSelect: "none" }}>/</span>
            {i === items.length - 1 ? (
              <span style={{ color: "var(--ink)" }}>{item.name}</span>
            ) : (
              <Link
                href={item.href}
                style={{
                  color: "var(--mute)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

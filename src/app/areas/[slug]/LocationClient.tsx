"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations, type Location } from "@/data/locations";

const anchorFormats = [
  (name: string) => `Builders in ${name}`,
  (name: string) => `${name} construction services`,
  (name: string) => `Our ${name} team`,
  (name: string) => `Recent work in ${name}`,
  (name: string) => `Serving ${name}`,
  (name: string) => `${name} building projects`,
];

function getAnchorText(slug: string, name: string, index: number): string {
  // Simple hash based on slug characters + index for deterministic but varied results
  let hash = index;
  for (let i = 0; i < slug.length; i++) {
    hash = hash + slug.charCodeAt(i);
  }
  return anchorFormats[hash % anchorFormats.length](name);
}

const serviceCards = [
  {
    name: "Extensions",
    description:
      "Single and double-storey rear extensions, side-returns and wrap-arounds.",
  },
  {
    name: "Loft Conversions",
    description:
      "Mansard, dormer, hip-to-gable and L-shape loft conversions with full sign-off.",
  },
  {
    name: "Roofing",
    description:
      "Repairs, reroofs, slate, tile, flat roof and leadwork.",
  },
  {
    name: "Brickwork",
    description:
      "Structural openings, repointing, garden walls and period restoration.",
  },
  {
    name: "Landscaping",
    description:
      "Paving, driveways, retaining walls, planters, pergolas and lighting.",
  },
];

export default function LocationClient({
  location,
}: {
  location: Location;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const nearbyLocations = location.nearby
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean) as Location[];

  const faqs = [
    {
      question: `Do you cover ${location.name}?`,
      answer: `Yes, ${location.name} is one of our core areas. A director will visit your property for a free survey and fixed-price quote.`,
    },
    {
      question: "Are you fully insured?",
      answer:
        "Yes, we carry £2 million public liability insurance for complete peace of mind.",
    },
    {
      question: "Do you provide a guarantee?",
      answer:
        "Yes, every project comes with a 1-year workmanship guarantee as standard.",
    },
  ];

  return (
    <>
      <SharedNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Areas", href: "/areas" },
              { name: location.name, href: `/areas/${location.slug}` },
            ]}
          />
          <h1
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginTop: "32px",
              color: "var(--ink)",
            }}
          >
            Builders in {location.name}
          </h1>
          <p
            className="reveal d1"
            style={{
              marginTop: "20px",
              maxWidth: "56ch",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--ink-2)",
            }}
          >
            {location.description}
          </p>
        </div>
      </section>

      {/* Services in this area */}
      <section
        style={{
          padding: "96px 0",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginBottom: "48px",
            }}
          >
            Services in {location.name}
          </h2>
          <div
            className="services-mini-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {serviceCards.map((svc) => (
              <Link
                key={svc.name}
                href="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="reveal service-mini-card"
                  style={{
                    border: "1px solid var(--rule)",
                    padding: "24px",
                    borderRadius: "2px",
                    transition: "border-color 0.2s",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: "var(--ink)",
                      marginBottom: "8px",
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "var(--ink-2)",
                      margin: 0,
                    }}
                  >
                    {svc.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-areas */}
      <section
        style={{
          padding: "96px 0",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginBottom: "32px",
            }}
          >
            Areas we cover in {location.name}
          </h2>
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {location.subAreas.map((area) => (
              <span
                key={area}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "14px",
                  color: "var(--ink-2)",
                  border: "1px solid var(--rule)",
                  padding: "8px 16px",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      {nearbyLocations.length > 0 && (
        <section
          style={{
            padding: "96px 0",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <div className="container">
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "var(--ink)",
                marginBottom: "32px",
              }}
            >
              Nearby areas
            </h2>
            <div
              className="reveal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {nearbyLocations.map((neighbor, i) => (
                <Link
                  key={neighbor.slug}
                  href={`/areas/${neighbor.slug}`}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "15px",
                    color: "var(--ink)",
                    textDecoration: "none",
                    border: "1px solid var(--rule)",
                    padding: "12px 20px",
                    borderRadius: "2px",
                    transition: "border-color 0.2s",
                  }}
                  className="nearby-link"
                >
                  {getAnchorText(neighbor.slug, neighbor.name, i)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section
        style={{
          padding: "96px 0",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginBottom: "40px",
            }}
          >
            Frequently asked questions
          </h2>
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="reveal faq-item"
              style={{
                borderBottom: "1px solid var(--rule)",
                padding: "0",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "17px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  cursor: "pointer",
                  padding: "20px 0",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {faq.question}
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "20px",
                    color: "var(--mute)",
                    marginLeft: "16px",
                    flexShrink: 0,
                  }}
                  className="faq-icon"
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  paddingBottom: "20px",
                  margin: 0,
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "96px 0",
          textAlign: "center",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginBottom: "16px",
            }}
          >
            Start your project in {location.name}
          </h2>
          <p
            className="reveal d1"
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--ink-2)",
              maxWidth: "50ch",
              margin: "0 auto 32px",
            }}
          >
            Send us the address and a rough brief — a director will reply within
            one working day with a free, no-obligation quote.
          </p>
          <div className="reveal d2">
            <a className="btn" href="/contact">
              Get a free quote <span className="arr"></span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />

      <style>{`
        .service-mini-card:hover,
        .nearby-link:hover {
          border-color: var(--accent) !important;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-item[open] .faq-icon {
          transform: rotate(45deg);
        }
        .faq-icon {
          transition: transform 0.2s;
        }
        @media (max-width: 1024px) {
          .services-mini-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-mini-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

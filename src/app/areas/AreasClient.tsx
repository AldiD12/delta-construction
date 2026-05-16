"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const areas = [
  {
    name: "West London",
    href: "/areas/west-london",
    subAreas: "Ealing, Chiswick, Hammersmith, Shepherd's Bush, Acton",
  },
  {
    name: "Twickenham & Richmond",
    href: "/areas/twickenham-richmond",
    subAreas: "Twickenham, Richmond, Kingston, Hampton, Teddington",
  },
  {
    name: "Hounslow",
    href: "/areas/hounslow",
    subAreas: "Hounslow, Isleworth, Brentford, Feltham, Heston",
  },
  {
    name: "North London",
    href: "/areas/north-london",
    subAreas: "Barnet, Enfield, Finchley, Muswell Hill, Crouch End",
  },
  {
    name: "South West London",
    href: "/areas/south-west-london",
    subAreas: "Wimbledon, Putney, Wandsworth, Clapham, Battersea",
  },
  {
    name: "Central London",
    href: "/areas/central-london",
    subAreas: "Westminster, Kensington, Chelsea, Mayfair, Marylebone",
  },
];

export default function AreasClient() {
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
          <Breadcrumbs items={[{ name: "Areas", href: "/areas" }]} />
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
            Areas we serve
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
            Based in Hounslow, working across London and the Home Counties.
          </p>
        </div>
      </section>

      {/* Map section */}
      <section
        style={{
          padding: "80px 0",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <div
            className="reveal"
            style={{
              width: "100%",
              height: "420px",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid var(--rule)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120000!2d-0.3654!3d51.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgb"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delta Construction service area — Greater London"
            />
          </div>
        </div>
      </section>

      {/* Area grid */}
      <section
        style={{
          padding: "96px 0",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="areas-grid"
          >
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="reveal area-card"
                  style={{
                    border: "1px solid var(--rule)",
                    padding: "28px",
                    borderRadius: "2px",
                    transition: "border-color 0.2s",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: "var(--ink)",
                      marginBottom: "10px",
                    }}
                  >
                    {area.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "var(--mute)",
                      margin: 0,
                    }}
                  >
                    {area.subAreas}
                  </p>
                </div>
              </Link>
            ))}
          </div>
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
            Don&apos;t see your area?
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
            We work across the whole of London and the Home Counties. Get in
            touch to discuss your project.
          </p>
          <div className="reveal d2">
            <a className="btn" href="/contact">
              Get in touch <span className="arr"></span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />

      <style>{`
        .area-card:hover {
          border-color: var(--accent) !important;
        }
        @media (max-width: 1024px) {
          .areas-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .areas-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

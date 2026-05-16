"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const values = [
  {
    title: "Director-led",
    text: "A founding director is on every site, every week. No middlemen, no surprises.",
  },
  {
    title: "Fixed-price quotes",
    text: "The price we quote is the price you pay. No hidden extras, no last-minute add-ons.",
  },
  {
    title: "Clean sites",
    text: "Daily rubbish removal, dust sheets on every surface, trades in uniform. Your home stays liveable.",
  },
  {
    title: "Guaranteed work",
    text: "Every project backed by our 1-year workmanship guarantee and £2M public liability insurance.",
  },
];

const accreditations = [
  "NHBC Registered",
  "Federation of Master Builders",
  "CHAS",
  "TrustMark",
  "Build UK",
  "ISO 9001:2015",
  "£2M Public Liability Insurance",
];

export default function AboutClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close menu on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Reveal-on-scroll observer */
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

  return (
    <>
      <SharedNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      </div>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1
            className="display reveal"
            style={{ fontFamily: "var(--serif)", marginTop: "24px" }}
          >
            Building London since&nbsp;2019
          </h1>
          <p
            className="reveal d1"
            style={{
              marginTop: "24px",
              maxWidth: "56ch",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--mute)",
            }}
          >
            Founded by a project manager and a building specialist with 10+
            years combined experience across the UK&nbsp;&amp;&nbsp;Europe.
          </p>
        </div>
      </section>

      {/* Story — two columns */}
      <section className="about-story">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div className="reveal">
            <img
              src="/assets/interior-renovation-progress.jpg"
              alt="Interior renovation in progress — Delta Construction site"
              style={{ width: "100%", borderRadius: "2px", display: "block" }}
            />
          </div>
          <div className="reveal d1">
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "28px",
                lineHeight: 1.25,
                marginBottom: "24px",
              }}
            >
              From two builders to a full-service team
            </h2>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.7,
                color: "var(--mute)",
                marginBottom: "16px",
              }}
            >
              Delta Construction began in 2019 with a straightforward ambition:
              deliver considered, meticulous building work across London without
              the usual headaches. What started as loft conversions and
              single-storey extensions quickly grew into whole-house
              refurbishments, new-build projects, and high-end interior
              fit-outs.
            </p>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.7,
                color: "var(--mute)",
                marginBottom: "16px",
              }}
            >
              Every project remains director-led — a founding principal is
              present on site each week, overseeing quality at every stage from
              groundworks to final snagging. We believe in craftsmanship over
              shortcuts, and long-term relationships over one-off transactions.
            </p>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.7,
                color: "var(--mute)",
              }}
            >
              We deliberately limit our workload to three or four projects at
              any one time. That constraint is by design — it means every build
              receives our full attention, and every client has direct access to
              the team making the decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Values — dark background */}
      <section
        className="about-values invert"
        style={{ padding: "80px 0", marginTop: "64px" }}
      >
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "28px",
              lineHeight: 1.25,
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            What we stand for
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal d${i + 1}`}
                style={{
                  padding: "32px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "2px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    marginBottom: "12px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                  }}
                >
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ padding: "64px 0" }}>
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "28px",
              lineHeight: 1.25,
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Accreditations&nbsp;&amp;&nbsp;insurance
          </h2>
          <div
            className="reveal d1"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            {accreditations.map((a) => (
              <span
                key={a}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11.5px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "8px 18px",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  color: "var(--mute)",
                  whiteSpace: "nowrap",
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="about-cta"
        style={{
          textAlign: "center",
          padding: "80px 0",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "28px",
              lineHeight: 1.25,
              marginBottom: "16px",
            }}
          >
            Ready to discuss your project?
          </h2>
          <p
            className="reveal d1"
            style={{
              fontSize: "16px",
              color: "var(--mute)",
              marginBottom: "32px",
            }}
          >
            We reply within one working day.
          </p>
          <a href="/contact" className="btn reveal d2">
            Get in touch <span className="arr"></span>
          </a>
        </div>
      </section>

      <SharedFooter />

      {/* Responsive overrides */}
      <style>{`
        .about-hero { padding: 120px 0 48px; }
        .about-story { padding: 48px 0; }

        @media (max-width: 768px) {
          .about-hero { padding: 100px 0 32px; }
          .about-story .container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-values .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .about-values .container > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

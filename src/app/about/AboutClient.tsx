"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const values = [
  {
    title: "Director-led",
    text: "A founding director is on every site, every week — not once a month. You get Aldi’s direct number, a WhatsApp group with daily photo updates, and weekly progress meetings. No project managers relaying messages. The person making decisions is the person on your site.",
  },
  {
    title: "Fixed-price quotes",
    text: "The price we quote is the price you pay. Our quotations are fully itemised by trade — structural, electrical, plumbing, joinery, decorating — so you can see exactly where every pound goes. No provisional sums, no allowances, no surprise invoices at the end.",
  },
  {
    title: "Clean sites",
    text: "We lay dust sheets before the first drill turns on. Rubbish is cleared every day, not at the end of the week. All trades wear Delta uniform. We’ve had clients tell us their children walked through an active site without getting a speck of dust on them. That’s the standard.",
  },
  {
    title: "Guaranteed work",
    text: "Every project is backed by our 1-year workmanship guarantee and £2M public liability insurance. You receive a full handover pack including building regulations certificates, electrical certificates, gas safe records, and warranty documents. If something we built develops a fault within twelve months, we return and fix it at no cost.",
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

const stats = [
  { figure: "80+", label: "Projects completed" },
  { figure: "5.0", label: "Google rating (16 reviews)" },
  { figure: "2019", label: "Year founded" },
  { figure: "£2M", label: "Public liability insurance" },
];

const testimonials = [
  {
    quote:
      "Aldi is a true professional. Our rear extension was a big project but Delta handled it brilliantly from planning to completion.",
    name: "Mark Stevens",
  },
  {
    quote:
      "Every room was finished with care and precision. Aldi kept us informed at every stage.",
    name: "Omar A",
  },
  {
    quote:
      "Great communication throughout and the attention to detail was superb.",
    name: "J Paterson",
  },
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
              Delta Construction started in 2019 when Aldi — a project manager
              with experience across residential and commercial builds in the UK
              and Europe — decided London homeowners deserved better. Better
              communication, better site management, and a finish that matched
              the prices being charged. The first year was extensions and loft
              conversions in Hounslow, working directly with homeowners who were
              tired of missed deadlines and disappearing tradesmen.
            </p>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.7,
                color: "var(--mute)",
                marginBottom: "16px",
              }}
            >
              By 2021 the workload had grown beyond what two people could handle.
              We brought on dedicated teams for roofing, brickwork, and interior
              fit-out — tradespeople we'd worked alongside for years and trusted
              with our own reputation. That decision to grow slowly and
              deliberately, hiring only people we knew, is why our quality has
              stayed consistent even as project values have climbed from £15k
              loft conversions to £300k whole-house refurbishments.
            </p>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.7,
                color: "var(--mute)",
                marginBottom: "16px",
              }}
            >
              Today the team runs three to four projects simultaneously. That's a
              deliberate cap — it means a founding director is physically on
              every site every week, not managing from a phone screen. You'll
              have Aldi's mobile number, a dedicated WhatsApp group with daily
              photo updates, and a level of transparency most contractors avoid
              because it holds them accountable.
            </p>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.7,
                color: "var(--mute)",
              }}
            >
              We've delivered over 80 projects across London — from emergency
              roof repairs completed in a day to 28-week whole-house
              transformations. The brief changes, but the standard doesn't:
              fixed-price quotes with no hidden extras, daily site clearance,
              trades in uniform, and a 1-year workmanship guarantee on every job.
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

      {/* Our numbers — stats */}
      <section style={{ padding: "64px 0" }}>
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
            Our numbers
          </h2>
          <div
            className="about-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`reveal d${i + 1}`}
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: "24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "36px",
                    lineHeight: 1.1,
                    marginBottom: "8px",
                  }}
                >
                  {s.figure}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                  }}
                >
                  {s.label}
                </div>
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

      {/* Testimonials */}
      <section style={{ padding: "64px 0", borderTop: "1px solid var(--rule)" }}>
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
            What clients say about working with&nbsp;us
          </h2>
          <div
            className="about-testimonials-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal d${i + 1}`}
                style={{
                  padding: "32px",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--mute)",
                    fontStyle: "italic",
                    margin: "0 0 16px 0",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
              </div>
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
          .about-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-testimonials-grid {
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

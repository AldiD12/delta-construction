"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const services = [
  {
    id: "extensions",
    title: "Extensions",
    media: { type: "video" as const, src: "/assets/site-video-02.mp4" },
    paragraphs: [
      "Single and double-storey rears, side-returns and wrap-arounds. Steel design coordinated with the structural engineer, party-wall awards handled in-house, glazing schedule managed end-to-end.",
      "Wet underfloor heating and full kitchen fit-out delivered under the same contract.",
    ],
    timeline: "18–28 weeks",
    price: "From £185k",
  },
  {
    id: "loft-conversions",
    title: "Loft Conversions",
    media: {
      type: "video" as const,
      src: "/assets/construction-site-walkthrough.mp4",
    },
    paragraphs: [
      "Mansard, dormer, hip-to-gable, L-shape. Planning and permitted-development applications handled. Steel-frame design, sprinkler systems, building-regs sign-off, full second-fix joinery included.",
    ],
    timeline: "14–20 weeks",
    price: "From £82k",
  },
  {
    id: "roofing",
    title: "Roof Repairs & Reroofs",
    media: { type: "image" as const, src: "/assets/02-roofing-slate.jpg" },
    paragraphs: [
      "From a slipped tile to a full strip-and-reroof. Natural Welsh slate, clay tile, single-ply membrane, GRP flat roof. Code 5 leadwork — flashings, valleys, parapets, chimney rebuilds.",
    ],
    timeline: "1–4 weeks",
    price: "From £480",
  },
  {
    id: "brickwork",
    title: "Brickwork",
    media: {
      type: "image" as const,
      src: "/assets/concrete-framework-construction.jpg",
    },
    paragraphs: [
      "Structural openings, full repointing in lime or sand-cement, garden walls, restoration of period facades. London-stock and reclaimed yellow stock matched on conservation-area builds.",
    ],
    timeline: "1–6 weeks",
    price: "From £1,200",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    media: {
      type: "image" as const,
      src: "/assets/modern-extension-exterior.png",
    },
    paragraphs: [
      "Hard landscaping to the same standard as the build it sits next to. Porcelain, stone and clay paving, resin-bound and block-paved driveways, retaining walls, planters, pergolas and outdoor lighting.",
    ],
    timeline: "2–6 weeks",
    price: "From £6k",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Survey & quote",
    description:
      "We visit, measure, and return a fixed-price, itemised quote within 48 hours.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "A founding director is on site weekly. You get a dedicated WhatsApp group for real-time updates.",
  },
  {
    number: "03",
    title: "Handover",
    description:
      "Formal snagging walkthrough, all certifications handed over, 1-year guarantee activated.",
  },
];

export default function ServicesClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll state for nav */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Reveal animations via IntersectionObserver */
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

  /* Body scroll lock when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close menu on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
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
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
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
            What we build
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
            Five core trades delivered under one contract — from foundations to
            finishing touches.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      {services.map((svc, i) => {
        const reversed = i % 2 !== 0;

        const mediaElement =
          svc.media.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2px",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src={svc.media.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={svc.media.src}
              alt={svc.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "2px",
                objectFit: "cover",
                display: "block",
              }}
            />
          );

        return (
          <section
            key={svc.id}
            id={svc.id}
            className="service-block reveal"
            style={{
              padding: "80px 0",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Image / Video column */}
              <div
                style={{
                  order: reversed ? 2 : 1,
                  overflow: "hidden",
                  borderRadius: "2px",
                  minHeight: "320px",
                }}
              >
                {mediaElement}
              </div>

              {/* Text column */}
              <div style={{ order: reversed ? 1 : 2 }}>
                <h2
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                    marginBottom: "20px",
                  }}
                >
                  {svc.title}
                </h2>

                {svc.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.65,
                      color: "var(--ink-2)",
                      marginBottom: pi < svc.paragraphs.length - 1 ? "14px" : "24px",
                      maxWidth: "52ch",
                    }}
                  >
                    {p}
                  </p>
                ))}

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-2)",
                      border: "1px solid var(--rule)",
                      padding: "6px 12px",
                      display: "inline-block",
                      borderRadius: "2px",
                    }}
                  >
                    {svc.timeline}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-2)",
                      border: "1px solid var(--rule)",
                      padding: "6px 12px",
                      display: "inline-block",
                      borderRadius: "2px",
                    }}
                  >
                    {svc.price}
                  </span>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process mini-section */}
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
              marginBottom: "56px",
              textAlign: "center",
            }}
          >
            How every project runs
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "48px",
            }}
          >
            {processSteps.map((step) => (
              <div key={step.number} className="reveal">
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {step.number}
                </span>
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
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--ink-2)",
                    maxWidth: "38ch",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta invert"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <div className="cta-bg" aria-hidden="true">
          <img src="/assets/interior-renovation-progress.jpg" alt="" />
        </div>
        <div className="cta-inner">
          <span className="eyebrow reveal">Ready to start?</span>
          <h2 className="reveal d1">
            Let&apos;s build something that <em>outlasts us.</em>
          </h2>
          <p
            className="reveal d2"
            style={{
              fontSize: "17px",
              maxWidth: "50ch",
              textAlign: "center",
              color: "#cfc8bb",
            }}
          >
            Send the drawings, the address, and a rough budget — a director will
            reply within one working day.
          </p>
          <div
            className="reveal d3"
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a className="btn" href="/contact">
              Start your project <span className="arr"></span>
            </a>
            <a className="btn ghost" href="/">
              Back to homepage <span className="arr"></span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

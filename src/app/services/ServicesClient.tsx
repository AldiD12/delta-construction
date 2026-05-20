"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const services = [
  {
    id: "extensions",
    title: "Extensions",
    media: { type: "video" as const, src: "/uploads/site-video-01.mp4" },
    paragraphs: [
      "Most extension projects fail not because of bad builders, but because of poor coordination between trades. The steelwork arrives late, the glazing schedule slips, the kitchen fitter blames the electrician, and suddenly your twelve-week build is running into month six. At Delta, every trade — structural, mechanical, electrical, plumbing, joinery, decorating — works under one contract and one programme, managed by a founding director who is on your site every single week.",
      "Our scope covers the full build from foundations to finishing touches: structural engineer coordination and steel beam design, party-wall surveyor liaison and award management, building control applications, glazing schedules, wet underfloor heating throughout, full kitchen fit-out, complete electrical rewire to BS 7671, and plumbing first and second fix. Nothing is subcontracted out to firms we haven't worked with for years.",
      "We specify materials that match the calibre of the homes we work in. Aluminium bifold and sliding door systems from Schuco or equivalent, Porcelanosa wall and floor tiling, Quooker boiling-water taps, and fully integrated appliance packages from Siemens, Miele, or Neff. Every specification is agreed before we break ground, so there are no provisional sums and no surprises at final account.",
      "Every extension is backed by our 1-year workmanship guarantee, £2M public liability insurance, and full building regulations sign-off. You receive all certification — structural completion, electrical, gas safe, and building control — in a branded handover pack on the day we leave.",
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
      "A loft conversion is the single most cost-effective way to add a bedroom and bathroom to a London home — if it's done properly. Poor structural detailing, inadequate fire strategy, or a staircase that fails Part K compliance can turn what should be a straightforward permitted-development build into a planning nightmare. Delta manages the entire process from initial feasibility through to building regulations sign-off.",
      "We deliver every conversion type: Mansard conversions for maximum headroom and floor area (typically requiring full planning permission), rear dormers that usually fall under permitted development, hip-to-gable conversions for semi-detached properties, and L-shape dormers for Victorian terraced houses. We handle planning applications, permitted-development certificates, and party-wall notices so you deal with one firm, not four consultants.",
      "The build includes a fully engineered steel frame, bespoke staircase design compliant with Part K and Part B, fire door upgrades to all storeys, sprinkler system installation where the property exceeds three storeys, Velux or dormer windows to your specification, full en-suite plumbing with hot and cold feeds from the existing system, and complete electrical certification to BS 7671.",
      "Finish quality is where we separate ourselves. Plastering to a Level 5 finish throughout, bespoke joinery for awkward eaves storage that turns dead space into fitted wardrobes, and underfloor heating as standard on every bathroom. The result is a new floor that feels as though it has always been part of the house, not an afterthought bolted on above it.",
    ],
    timeline: "14–20 weeks",
    price: "From £82k",
  },
  {
    id: "roofing",
    title: "Roof Repairs & Reroofs",
    media: { type: "image" as const, src: "/assets/02-roofing-slate.jpg" },
    paragraphs: [
      "Our roofing division handles everything from an emergency leak repair on a Friday evening to a complete strip-and-reroof of a four-storey Victorian terrace. Whether the job takes a day or a month, the same standards apply: proper breathable membrane, correct batten gauge, appropriate fixings for exposure zone, and a clean, methodical approach that protects your property throughout.",
      "We work with the full range of roofing materials and select the right system for the building, the budget, and the conservation context. Natural Welsh slate from Penrhyn and Cwt-y-Bugail quarries, handmade clay tiles for period properties, Marley Modern concrete tiles for cost-effective durability, single-ply EPDM and TPO membrane systems for flat roofs, GRP fibreglass for balconies and small flat sections, and Code 4 and Code 5 lead for flashings, valleys, and bays.",
      "Our specialist capabilities include full chimney rebuilds and re-rendering, parapet capping and coping stone replacement, valley and hip re-leading, and heritage roof restoration for listed buildings and properties in conservation areas. Every stage of work is photographed and documented, giving you a full visual record of what was done, what was found underneath, and how it was resolved.",
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
      "London brickwork demands London expertise. Matching the right brick is not simply a matter of colour — it requires an understanding of size, texture, firing method, and regional provenance. We source and match London stock, yellow stock, and reclaimed imperial bricks for conservation-area projects, working with specialist salvage yards and manufacturers to achieve an indistinguishable blend with the existing facade.",
      "Our brickwork scope covers structural openings formed with needle and prop, RSJ and steel beam installation with padstones, full repointing in lime mortar (NHL 3.5) or sand-cement depending on the building's age and substrate, garden boundary walls and piers, structural retaining walls with adequate drainage and waterproofing, and decorative features including banding, corbelling, soldier courses, and bullnose detailing.",
      "We've restored facades on Victorian terraces in Richmond, Edwardian semis in Ealing, and Georgian townhouses in Mayfair — always matching the original bond pattern, mortar colour, and brick coursing. Where original bricks are unavailable, we work with specialist brick-matching services and, where appropriate, commission bespoke runs from heritage brickmakers to ensure an authentic restoration.",
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
      "Landscaping is the final ten percent of a project, but it accounts for the entire first impression. A beautifully finished extension deserves an outdoor space that meets it at the threshold with the same level of thought and craftsmanship. We deliver hard landscaping to the same specification as the build it sits beside — because it is part of the build, not an afterthought.",
      "Our hard landscaping portfolio includes 20mm outdoor-rated porcelain paving in large format, natural stone in York stone, Indian sandstone, and granite setts, resin-bound surfacing for driveways and pathways, block paving with proper sub-base and edge restraint, and concrete sleeper retaining walls for level changes and tiered gardens. Every installation is laid on a fully engineered sub-base with correct falls for drainage.",
      "We also design and build bespoke timber pergolas in treated softwood or Western red cedar, composite or hardwood decking with hidden fixings, outdoor lighting schemes using 12V LED systems with bollards, uplighters, and step lights, automated irrigation preparation for planting beds, and raised planters constructed in matching brick or sleeper to tie the landscape back to the architecture of the house.",
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
      "We visit your property, take precise measurements, and discuss your vision in detail. Within 48 hours you receive a fixed-price, fully itemised quotation — broken down by trade so you can see exactly where every pound goes. No surprises, no provisional sums.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "A founding director visits site every week and you get a dedicated WhatsApp group with daily photo updates. We coordinate all trades in-house — structural, mechanical, electrical, plumbing, joinery, decorating — so nothing falls between the cracks.",
  },
  {
    number: "03",
    title: "Handover",
    description:
      "We conduct a formal snagging walkthrough together, item by item. You receive all building regulations certificates, electrical certificates, gas safe records, and warranty documents in a branded handover pack. Your 1-year workmanship guarantee starts from the date you sign off.",
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

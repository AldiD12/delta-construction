"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
      <section className="svc-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
          <h1 className="svc-hero-title reveal">What we build</h1>
          <p className="svc-hero-sub reveal d1">
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
              className="svc-media-asset"
            >
              <source src={svc.media.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={svc.media.src}
              alt={svc.title}
              loading="lazy"
              className="svc-media-asset"
            />
          );

        return (
          <section
            key={svc.id}
            id={svc.id}
            className="svc-block reveal"
          >
            <div className={`container svc-grid ${reversed ? "svc-grid-reversed" : ""}`}>
              <div className="svc-media">
                {mediaElement}
              </div>

              <div className="svc-text">
                <h2 className="svc-title">{svc.title}</h2>

                {svc.paragraphs.map((p, pi) => (
                  <p key={pi} className="svc-paragraph">{p}</p>
                ))}

                <div className="svc-meta">
                  <span className="svc-tag">{svc.timeline}</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="svc-process">
        <div className="container">
          <h2 className="svc-process-title reveal">How every project runs</h2>
          <div className="svc-process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className="svc-step reveal">
                <span className="svc-step-num">{step.number}</span>
                <h3 className="svc-step-title">{step.title}</h3>
                <p className="svc-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta invert" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="cta-bg" aria-hidden="true">
          <img src="/assets/interior-renovation-progress.jpg" alt="" />
        </div>
        <div className="cta-inner">
          <span className="eyebrow reveal">Ready to start?</span>
          <h2 className="reveal d1">
            Let&apos;s build something that <em>outlasts us.</em>
          </h2>
          <p className="reveal d2" style={{ fontSize: "17px", maxWidth: "50ch", textAlign: "center", color: "#cfc8bb" }}>
            Send the drawings, the address, and a rough budget — a director will
            reply within one working day.
          </p>
          <div className="reveal d3" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link className="btn" href="/contact">
              Start your project <span className="arr"></span>
            </Link>
            <Link className="btn ghost" href="/">
              Back to homepage <span className="arr"></span>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />

      <style>{`
        /* ===== Services Page Styles ===== */
        .svc-hero {
          padding: 140px 0 80px;
          border-bottom: 1px solid var(--rule);
        }
        .svc-hero-title {
          font-family: var(--serif);
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-top: 32px;
          color: var(--ink);
        }
        .svc-hero-sub {
          margin-top: 20px;
          max-width: 56ch;
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-2);
        }

        /* Service blocks */
        .svc-block {
          padding: 80px 0;
          border-bottom: 1px solid var(--rule);
        }
        .svc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .svc-grid-reversed .svc-media { order: 2; }
        .svc-grid-reversed .svc-text { order: 1; }

        .svc-media {
          overflow: hidden;
          border-radius: 2px;
          min-height: 320px;
        }
        .svc-media-asset {
          width: 100%;
          height: 100%;
          border-radius: 2px;
          object-fit: cover;
          display: block;
        }

        .svc-title {
          font-family: var(--serif);
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin-bottom: 20px;
        }
        .svc-paragraph {
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-2);
          margin-bottom: 14px;
          max-width: 52ch;
        }
        .svc-paragraph:last-of-type {
          margin-bottom: 24px;
        }
        .svc-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .svc-tag {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-2);
          border: 1px solid var(--rule);
          padding: 6px 12px;
          display: inline-block;
          border-radius: 2px;
        }

        /* Process */
        .svc-process {
          padding: 96px 0;
          border-bottom: 1px solid var(--rule);
        }
        .svc-process-title {
          font-family: var(--serif);
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin-bottom: 56px;
          text-align: center;
        }
        .svc-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        .svc-step-num {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--mute);
          display: block;
          margin-bottom: 12px;
        }
        .svc-step-title {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          line-height: 1.3;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .svc-step-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-2);
          max-width: 38ch;
        }

        /* ===== Tablet ===== */
        @media (max-width: 980px) {
          .svc-hero {
            padding: 110px 0 56px;
          }
          .svc-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .svc-grid-reversed .svc-media { order: 1; }
          .svc-grid-reversed .svc-text { order: 2; }
          .svc-media {
            min-height: 260px;
            max-height: 400px;
          }
          .svc-block {
            padding: 56px 0;
          }
          .svc-process-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .svc-process {
            padding: 64px 0;
          }
          .svc-process-title {
            margin-bottom: 40px;
          }
          .svc-step-desc {
            max-width: none;
          }
        }

        /* ===== Mobile ===== */
        @media (max-width: 640px) {
          .svc-hero {
            padding: 100px 0 40px;
          }
          .svc-hero-title {
            margin-top: 20px;
          }
          .svc-hero-sub {
            margin-top: 14px;
            font-size: 16px;
          }
          .svc-block {
            padding: 40px 0;
          }
          .svc-grid {
            gap: 24px;
          }
          .svc-media {
            min-height: 220px;
            max-height: 300px;
            border-radius: 6px;
          }
          .svc-media-asset {
            border-radius: 6px;
          }
          .svc-title {
            font-size: clamp(24px, 7vw, 32px);
            margin-bottom: 16px;
          }
          .svc-paragraph {
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 12px;
            max-width: none;
          }
          .svc-process {
            padding: 48px 0;
          }
          .svc-process-title {
            font-size: clamp(24px, 7vw, 32px);
            margin-bottom: 32px;
            text-align: left;
          }
          .svc-process-grid {
            gap: 32px;
          }
          .svc-step {
            padding-left: 20px;
            border-left: 2px solid var(--rule);
          }
          .svc-step-title {
            font-size: 20px;
          }
          .svc-step-desc {
            font-size: 14.5px;
          }
        }
      `}</style>
    </>
  );
}

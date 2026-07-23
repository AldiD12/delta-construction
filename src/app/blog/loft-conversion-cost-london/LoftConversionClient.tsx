"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import PriceDisclaimer from "@/components/PriceDisclaimer";

export default function LoftConversionClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SharedNav scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Loft Conversion Cost London", href: "/blog/loft-conversion-cost-london" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Loft Conversions</span>
              <span className="blog-tag">Costs</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">How Much Does a Loft Conversion Cost&nbsp;in&nbsp;London? <em>(2026&nbsp;Guide)</em></h1>
            <p className="blog-article-subtitle reveal in d1">The loft is the cheapest square metre you&apos;ll ever add to a London home — the structure&apos;s already there, the footprint costs nothing, and you skip the foundations that make extensions expensive. Here&apos;s what each type actually costs, what drives the price, and where the planning and building-regs traps hide.</p>
            <div className="blog-article-meta reveal in d2">
              <span>By Delta Construction</span>
              <span>23 June 2026</span>
              <span>11 min read</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/assets/residential-extension-project.jpg" alt="Loft conversion structural frame mid-build by Delta Construction in North London" />
        </div>

        <div className="container blog-article-body">

          {/* ── Quick-reference table ── */}
          <div className="blog-callout reveal">
            <h2>Quick cost summary — London 2026</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Conversion type</th>
                    <th>Typical cost</th>
                    <th>Space added</th>
                    <th>Build time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Rooflight / Velux</td><td>£30,000–£45,000</td><td>15–25 m²</td><td>4–6 weeks</td></tr>
                  <tr><td>Rear dormer</td><td>£45,000–£70,000</td><td>20–30 m²</td><td>6–8 weeks</td></tr>
                  <tr><td>Hip-to-gable</td><td>£55,000–£80,000</td><td>25–32 m²</td><td>7–9 weeks</td></tr>
                  <tr><td>L-shape dormer</td><td>£60,000–£95,000</td><td>30–40 m²</td><td>8–10 weeks</td></tr>
                  <tr><td>Mansard</td><td>£65,000–£110,000</td><td>30–45 m²</td><td>8–12 weeks</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: "14px", fontSize: "14px", color: "var(--ink-2)" }}>Figures are typical London ranges for a completed conversion including a double bedroom and en-suite, finished to a mid-range specification. Per square metre, that&apos;s roughly £1,500–£2,400/m² — around a third less than a ground-floor extension, because there are no foundations and no roof to build from scratch.</p>
            <p style={{ marginTop: "10px", fontSize: "13px", color: "var(--ink-2)", fontStyle: "italic" }}><strong>*</strong> Ranges are starting points for typical projects. Premium postcodes (prime central London, high-value SW postcodes), high-end specifications and larger footprints can add £20–40k or more. A big or complex loft can comfortably exceed the top of these ranges — see &ldquo;What pushes the price up&rdquo; below.</p>
          </div>

          {/* ── Intro ── */}
          <section className="reveal">
            <h2>Why the loft is the smartest space in the house</h2>
            <p>Every other way of gaining space in London fights against something. An extension eats your garden and needs new foundations. A basement means digging out beneath a live building. The loft is the one volume in the house you&apos;ve already paid for and aren&apos;t using — the walls, the roof and the footprint are all in place. You&apos;re buying carpentry, steel, insulation and finishes, not groundworks.</p>
            <p>That&apos;s why, pound for pound, a loft conversion is consistently the highest-return improvement we&apos;re asked to build across London — and why a converted loft with a double bedroom and en-suite can lift a property&apos;s value by 15–25% in the right postcode. The question is rarely <em>whether</em> to convert. It&apos;s <strong>which type</strong> your roof can take.</p>
          </section>

          {/* ── Which type ── */}
          <section className="reveal">
            <h2>The five loft conversions, and which one your roof can take</h2>
            <p>The type you can build is decided by two things: how much head height you already have, and the shape of your roof. Here&apos;s how to read your own roof.</p>

            <h3>Rooflight (Velux) — the purist&apos;s conversion</h3>
            <p>No change to the roof shape at all — you fit windows flush into the existing slope and convert the space below. It&apos;s the cheapest and the least disruptive, and it keeps the roofline pristine (which is why it&apos;s often the <em>only</em> thing allowed in a conservation area). The catch: you need the head height already there, roughly 2.4m at the ridge. Common on Edwardian and 1930s houses with steep roofs.</p>

            <h3>Dormer — the London workhorse</h3>
            <p>A box-shaped structure projecting from the rear slope, adding both headroom and floor area with vertical walls you can actually stand against. The rear dormer is the single most common conversion on London&apos;s Victorian and Edwardian terraces because it usually sits under permitted development and faces away from the street. If a guide quotes you &ldquo;a typical loft conversion,&rdquo; this is almost always what they mean.</p>

            <h3>Hip-to-gable — for the semi and the end-of-terrace</h3>
            <p>If your roof slopes inwards on a side (a &ldquo;hipped&rdquo; end), this converts that slope into a vertical gable wall, reclaiming the triangle of space that was previously unusable. Most powerful on 1930s semis and end-of-terrace houses. It&apos;s frequently combined with a rear dormer for maximum space.</p>

            <h3>L-shape dormer — the family-maker</h3>
            <p>Two dormers joined in an L, taking in both the main rear roof and the back-addition (the &ldquo;outrigger&rdquo;) that runs over the original kitchen on Victorian terraces. This is the conversion that turns a loft into a proper suite — typically a double bedroom <em>and</em> a separate bathroom, sometimes two rooms. The defining project for North and South West London terraces.</p>

            <h3>Mansard — the most space, the most build</h3>
            <p>The rear (or both) roof slopes are rebuilt almost vertical, with a shallow top, creating an entire new storey with near-full head height across the floor. It yields the most usable space of any conversion and looks deliberately architectural — but you&apos;re rebuilding the roof structure, so it&apos;s the most expensive and almost always needs full planning permission. The standard in Central London conservation areas, where its form is often the only one councils accept.</p>
          </section>

          {/* ── Cost drivers ── */}
          <section className="reveal">
            <h2>What actually drives the price</h2>
            <p>Two identical-looking lofts can differ by £30,000. Here&apos;s where the money really goes — so you can read a quote and know what you&apos;re paying for.</p>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Cost driver</th><th>Why it matters</th><th>Budget impact</th></tr>
                </thead>
                <tbody>
                  <tr><td>Conversion type</td><td>Rooflight vs mansard is the single biggest variable — structure added vs none</td><td>£££</td></tr>
                  <tr><td>The staircase</td><td>Where the new stairs land steals space from the floor below; a bespoke or tight stair costs more</td><td>££</td></tr>
                  <tr><td>En-suite / bathroom</td><td>New soil pipe runs, waterproofing, and pumping waste up to roof level all add up</td><td>££</td></tr>
                  <tr><td>Structural steel</td><td>Steels carry the new floor and dormer; long spans on wide rooms need heavier beams</td><td>££</td></tr>
                  <tr><td>Head height</td><td>If you&apos;re short, lowering ceilings below or a mansard is the fix — both expensive</td><td>£££</td></tr>
                  <tr><td>Specification</td><td>Underfloor heating, bespoke joinery, premium glazing and sanitaryware lift the finish</td><td>££</td></tr>
                  <tr><td>Party wall</td><td>Terraces and semis need a Party Wall Award with each adjoining neighbour</td><td>£</td></tr>
                </tbody>
              </table>
            </div>
            <p>The honest version most quotes won&apos;t spell out: the <strong>staircase position</strong> is the decision that quietly shapes the whole project. Land it badly and you lose a bedroom below; land it well and the conversion feels like it was always there. Get that drawn properly before you fall in love with a price.</p>
          </section>

          {/* ── What pushes the price up ── */}
          <section className="reveal">
            <h2>What pushes the price up</h2>
            <p>Two lofts that look identical from the outside can be £30–50k apart. Here&apos;s where the money really goes — so you can read a quote (or a rival&apos;s quote) and know what you&apos;re paying for.</p>
            <ul>
              <li><strong>Location.</strong> Prime central and high-value West/SW London postcodes carry a real premium — parking suspensions, restricted delivery windows, tight access and higher labour rates. The same dormer in Zone 1 vs outer London can be 20–30% apart before anything else changes.</li>
              <li><strong>Size &amp; layout.</strong> A modest single-bedroom rear dormer is a different job to an L-shape that spans the main roof and the back addition. More floor area, more roof structure, more finishes.</li>
              <li><strong>Specification.</strong> Bespoke joinery, underfloor heating, premium sanitaryware, engineered oak flooring, integrated AV and lighting control all lift the finish — and the price.</li>
              <li><strong>En-suite complexity.</strong> A basic en-suite is one thing; a walk-in wet room with double vanity, waterproofed and tanked properly, is another. Soil pipe routing on higher floors also adds cost.</li>
              <li><strong>Structural work.</strong> Longer steel spans, unusual roof geometry, lowering the ceiling below to gain head height, or a mansard rebuild all push structural cost up sharply.</li>
              <li><strong>Staircase.</strong> A bespoke or tight staircase — especially where it eats into a bedroom below and needs re-planning — costs more than a standard flight.</li>
              <li><strong>Planning &amp; heritage.</strong> Conservation areas, listed buildings and mansard requirements often mean full planning, heritage-grade materials and specialist detailing.</li>
              <li><strong>Party wall.</strong> Terraces and semis need Party Wall Awards with each adjoining neighbour — surveyor fees are per neighbour.</li>
              <li><strong>Access.</strong> A rear-only access, narrow side alley or no drive means more manual handling, crane hire and staged deliveries.</li>
            </ul>
            <p>The published ranges assume a <em>typical</em> London loft — mid-spec, standard access, no unusual constraints. When two or three of the factors above stack up, it&apos;s completely reasonable for a real quote to land well above the range. That&apos;s not a builder overcharging — it&apos;s the actual project.</p>
          </section>

          {/* ── Planning ── */}
          <section className="reveal">
            <h2>Planning: when you need it, and when you don&apos;t</h2>
            <p>Most loft conversions in London are built under <strong>permitted development</strong> — meaning no planning application — but the rules are specific, and getting them wrong is the kind of mistake that surfaces years later when you try to sell. Your conversion likely qualifies as permitted development if it meets all of these:</p>
            <ul>
              <li>The new roof volume stays within <strong>40m³ for a terraced house</strong> or <strong>50m³ for a semi-detached or detached house</strong> (this includes any previous additions).</li>
              <li>It doesn&apos;t extend beyond the plane of the existing roof slope on the <strong>principal elevation</strong> — i.e. nothing bulging out towards the street.</li>
              <li>No part is <strong>higher than the highest part of the existing roof</strong>.</li>
              <li>Materials are <strong>similar in appearance</strong> to the existing house.</li>
              <li>Side-facing windows are <strong>obscure-glazed and non-opening</strong> below 1.7m from the floor.</li>
              <li>The roof addition is <strong>set back at least 20cm</strong> from the original eaves where possible.</li>
            </ul>
            <p>Permitted development rights <strong>do not apply</strong> to flats and maisonettes, and they&apos;re commonly removed in <strong>conservation areas</strong> and on other designated land — which is exactly why mansards and rooflights dominate in places like Kensington, Chelsea and the Richmond conservation areas. If any of the above is in doubt, you need a full householder planning application (typically an 8-week decision).</p>
            <div className="blog-callout" style={{ marginTop: "20px" }}>
              <p style={{ margin: 0 }}><strong>Always get a Lawful Development Certificate.</strong> Even when your conversion is permitted development and needs no permission, apply to your council for a Lawful Development Certificate. It&apos;s formal proof the work was legal — and your buyer&apos;s solicitor <em>will</em> ask for it. It&apos;s the cheapest insurance in the whole project. For the full rules, read our <Link href="/blog/permitted-development-london">guide to permitted development in London</Link>.</p>
            </div>
          </section>

          {/* ── Building regs ── */}
          <section className="reveal">
            <h2>Building regulations: the part that keeps you safe (and legal)</h2>
            <p>Planning controls what your loft looks like from outside. <strong>Building regulations</strong> control whether it&apos;s safe to live in — and unlike planning, they apply to <em>every</em> loft conversion, with no exceptions. Adding a third storey to a house changes its fire-safety requirements, which surprises most homeowners. The essentials your conversion must meet:</p>
            <ul>
              <li><strong>Fire escape &amp; protected stairway.</strong> Turning a two-storey house into three storeys means the staircase becomes a protected escape route to the front door — with fire-rated (FD30) doors to the habitable rooms that open onto it.</li>
              <li><strong>Mains-wired, interlinked smoke alarms</strong> on every floor.</li>
              <li><strong>Structural floor.</strong> The existing ceiling joists weren&apos;t designed to be a floor — new joists or steel beams, designed by a structural engineer, carry the load.</li>
              <li><strong>Minimum 2.0m head height over the staircase.</strong></li>
              <li><strong>Insulation</strong> to current U-values, and adequate ventilation to prevent condensation in the new roof.</li>
              <li><strong>Escape windows</strong> sized and positioned to building-control standards (or a sprinkler system on some layouts).</li>
            </ul>
            <p>Building control sign-off is the certificate that makes your loft a legal, sellable bedroom rather than &ldquo;a room in the roof.&rdquo; We include it as standard on every project — it should never be an optional extra.</p>
          </section>

          {/* ── Timeline ── */}
          <section className="reveal">
            <h2>How long does a loft conversion take?</h2>
            <p>The build is quicker than people expect — it&apos;s the approvals beforehand that set the real timeline. Plan from first call, not from the day the scaffold goes up:</p>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Phase</th><th>Duration</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  <tr><td>Design &amp; structural calcs</td><td>2–4 weeks</td><td>Drawings, staircase position, engineer&apos;s steel design</td></tr>
                  <tr><td>Planning (if required)</td><td>8 weeks</td><td>Skip entirely if permitted development</td></tr>
                  <tr><td>Party wall awards</td><td>2–6 weeks</td><td>One per adjoining neighbour; can run in parallel</td></tr>
                  <tr><td>Construction</td><td>4–12 weeks</td><td>Rooflight at the short end, mansard at the long</td></tr>
                  <tr><td>Building control &amp; handover</td><td>1–2 weeks</td><td>Final inspection, certificate, sign-off</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Total:</strong> roughly 3–5 months from first call to moving in, most of it before the build even starts. The good news — because the work happens above you, you can usually stay living in the house throughout, with the scaffold and a crane doing the heavy lifting from outside.</p>
          </section>

          {/* ── FAQ ── */}
          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>

            <details>
              <summary>How much does a loft conversion cost in London in 2026?</summary>
              <p>A loft conversion in London costs between £30,000 and £110,000 in 2026 depending on type — rooflight from £30k, rear dormer £45–70k, hip-to-gable £55–80k, L-shape dormer £60–95k, and mansard £65–110k. Per square metre that&apos;s roughly £1,500–£2,400, around a third cheaper than a ground-floor extension.</p>
            </details>

            <details>
              <summary>Which loft conversion is the cheapest?</summary>
              <p>A rooflight (Velux) conversion, because it adds no new structure — you convert the existing loft and fit windows into the slope. It only works where you already have around 2.4m of head height at the ridge. The next step up is a dormer, which adds both headroom and floor area.</p>
            </details>

            <details>
              <summary>Do I need planning permission for a loft conversion?</summary>
              <p>Often not. Many loft conversions are permitted development if the new roof volume stays within 40m³ (terraced) or 50m³ (semi/detached), doesn&apos;t extend past the front roof plane and isn&apos;t higher than the existing ridge. Flats, maisonettes and most conservation-area properties need full planning permission. Always secure a Lawful Development Certificate — see our <Link href="/blog/permitted-development-london">permitted development guide</Link>.</p>
            </details>

            <details>
              <summary>How much head height do I need?</summary>
              <p>Around 2.2–2.4m at the highest point of the existing loft for a straightforward conversion. Building regs require at least 2.0m over the staircase. If you&apos;re short on height, a dormer adds volume, or a mansard rebuilds the roof for near-full headroom — both add cost.</p>
            </details>

            <details>
              <summary>Will a loft conversion add value to my home?</summary>
              <p>Yes — adding a double bedroom with en-suite typically lifts a property&apos;s value by 15–25%, and in higher-value London postcodes the uplift often exceeds the build cost. It&apos;s consistently one of the best-return improvements you can make.</p>
            </details>

            <details>
              <summary>Can I live in the house during the work?</summary>
              <p>Usually yes. Most of a loft conversion happens above you, accessed from external scaffold, so the disruption inside is limited mainly to the few days of staircase installation. We protect all areas and clean up daily.</p>
            </details>
          </section>

          {/* ── Related ── */}
          <section className="reveal">
            <h2>Keep reading</h2>
            <ul>
              <li><Link href="/blog/house-extension-cost-london">How much does a house extension cost in London? (2026 guide)</Link></li>
              <li><Link href="/blog/permitted-development-london">Permitted development rules for extensions and lofts in London</Link></li>
              <li><Link href="/services">Our construction services — loft conversions, extensions &amp; refurbishments</Link></li>
            </ul>
          </section>

          {/* ── CTA ── */}
          <section className="reveal blog-cta-inline">
            <h2>Get a fixed-price quote for your loft</h2>
            <p>Send us your address and a rough idea of what you want from the space — a director will reply within one working day with an honest view on which conversion your roof can take, what it&apos;ll cost, and how long it&apos;ll run. No obligation, no sales pitch.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>

        </div>
      </article>

      <SharedFooter />
      <PriceDisclaimer />
    </>
  );
}

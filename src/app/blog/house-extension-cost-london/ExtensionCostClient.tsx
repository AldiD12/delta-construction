"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ExtensionCostClient() {
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
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Extension Cost London", href: "/blog/house-extension-cost-london" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Extensions</span>
              <span className="blog-tag">Costs</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">How Much Does a House Extension Cost&nbsp;in&nbsp;London? <em>(2026&nbsp;Guide)</em></h1>
            <p className="blog-article-subtitle reveal in d1">Real prices from real London projects — not national averages pulled from a database. We break down costs by extension type, size, and specification so you can budget with confidence.</p>
            <div className="blog-article-meta reveal in d2">
              <span>By Delta Construction</span>
              <span>27 May 2026</span>
              <span>12 min read</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/uploads/extension-kitchen-glass-roof.jpeg" alt="Completed kitchen extension with glass roof and Crittall-style doors by Delta Construction in West London" />
        </div>

        <div className="container blog-article-body">

          {/* ── Quick-reference table ── */}
          <div className="blog-callout reveal">
            <h2>Quick cost summary — London 2026</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Extension type</th>
                    <th>Cost per m²</th>
                    <th>Typical project cost</th>
                    <th>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Single-storey rear (20–30 m²)</td><td>£2,800–£4,500</td><td>£65,000–£95,000</td><td>10–14 weeks</td></tr>
                  <tr><td>Double-storey (35–50 m²)</td><td>£2,200–£3,500</td><td>£110,000–£170,000</td><td>14–20 weeks</td></tr>
                  <tr><td>Side-return (8–15 m²)</td><td>£3,000–£4,200</td><td>£30,000–£55,000</td><td>8–12 weeks</td></tr>
                  <tr><td>Kitchen extension (15–25 m²)</td><td>£3,200–£4,800</td><td>£55,000–£110,000</td><td>10–16 weeks</td></tr>
                  <tr><td>Wrap-around (25–40 m²)</td><td>£2,800–£4,200</td><td>£85,000–£160,000</td><td>12–18 weeks</td></tr>
                </tbody>
              </table>
            </div>
            <p className="blog-table-note">Prices include construction costs. Kitchen/bathroom fitting, professional fees (architect, structural engineer, party wall surveyor) and VAT are additional. Based on Delta Construction project data 2024–2026.</p>
          </div>


          {/* ── Introduction ── */}
          <section className="reveal">
            <h2>Why London extension costs are different</h2>
            <p>If you&apos;ve been Googling &ldquo;house extension cost UK&rdquo; and seeing figures of £1,500–£2,000 per m², those numbers are national averages that bear almost no relation to what you&apos;ll actually pay in London. Construction costs in the capital are consistently <strong>30–40% higher</strong> than the rest of the UK — driven by higher labour rates, more expensive materials transport, tighter site access, stricter planning requirements, and the sheer complexity of building in a dense city.</p>
            <p>Every figure in this guide comes from projects we&apos;ve completed or quoted in London boroughs between 2024 and 2026. We haven&apos;t averaged out a database — these are the prices our clients have actually paid.</p>
          </section>


          {/* ── Single-storey ── */}
          <section className="reveal">
            <h2>Single-storey rear extension cost</h2>
            <p>A single-storey rear extension is the most common project we build in London. It typically adds 20–30 m² to the back of a terraced or semi-detached home, creating an open-plan kitchen-diner that opens into the garden.</p>

            <h3>What drives the cost?</h3>
            <p>The biggest cost factors for a single-storey extension are the <strong>foundations</strong> (especially if you&apos;re near trees or on clay soil — common across South and West London), the <strong>roof type</strong> (a flat roof with rooflights costs less than a pitched roof with a structural ridge beam), and the <strong>glazing</strong> (bi-fold or Crittall-style doors can add £8,000–£15,000 to the build).</p>

            <h3>Specification breakdown</h3>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Specification</th><th>Cost per m²</th><th>What&apos;s included</th></tr>
                </thead>
                <tbody>
                  <tr><td>Basic</td><td>£2,800–£3,200</td><td>Standard blockwork, flat roof, basic electrics, plaster finish, painted walls, standard kitchen-ready plumbing</td></tr>
                  <tr><td>Mid-range</td><td>£3,200–£3,800</td><td>Above + underfloor heating, rooflights, bi-fold doors, engineered oak flooring, LED downlights, USB sockets</td></tr>
                  <tr><td>High-end</td><td>£4,000–£4,500</td><td>Above + structural glazed roof, Crittall-style steelwork, bespoke joinery, polished concrete floor, smart home wiring</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <h4>Real project: West London kitchen extension</h4>
              <p>We completed a 25 m² single-storey rear extension in West London in early 2026. The project included a full glass roof section, Crittall-style glazed doors, underfloor heating, and was built to a mid-to-high specification. The construction cost was approximately <strong>£92,000</strong> (excluding the kitchen fit-out). Build time was 13 weeks.</p>
            </div>
          </section>


          {/* ── Double-storey ── */}
          <section className="reveal">
            <h2>Double-storey extension cost</h2>
            <p>A double-storey extension is significantly better value per square metre than a single-storey because the most expensive parts — foundations and the roof — are shared across two floors. You&apos;re essentially getting two rooms for 50–65% more than the cost of one.</p>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Size</th><th>Cost range</th><th>What you get</th></tr>
                </thead>
                <tbody>
                  <tr><td>35 m² (2 × 17.5 m²)</td><td>£90,000–£120,000</td><td>Kitchen-diner below, bedroom/office above</td></tr>
                  <tr><td>50 m² (2 × 25 m²)</td><td>£130,000–£170,000</td><td>Large kitchen-living space below, master bedroom with en-suite above</td></tr>
                </tbody>
              </table>
            </div>

            <p><strong>Important:</strong> double-storey extensions almost always require planning permission (they don&apos;t fall under permitted development for most properties). Budget an additional 8–12 weeks and £2,000–£5,000 for the planning process before construction begins.</p>
          </section>


          {/* ── Side-return ── */}
          <section className="reveal">
            <h2>Side-return extension cost</h2>
            <p>The side-return — that narrow alley down the side of a Victorian or Edwardian terraced house — is one of the most cost-effective ways to add usable space. A side-return extension typically adds 8–15 m² and transforms a narrow galley kitchen into a proper working space.</p>
            <p>Expect to pay <strong>£30,000–£55,000</strong> for a side-return extension in London. The cost per m² tends to be higher than a standard rear extension (£3,000–£4,200/m²) because the structural steelwork required to open up the side wall is proportionally expensive relative to the small floor area gained.</p>
          </section>


          {/* ── Kitchen extension ── */}
          <section className="reveal">
            <h2>Kitchen extension cost</h2>
            <p>When we say &ldquo;kitchen extension&rdquo; we mean the full package: the structural extension itself plus a new kitchen fitted inside it. This is the project most of our clients are actually doing — they want to extend and fit a new kitchen in one go.</p>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Component</th><th>Cost range</th></tr>
                </thead>
                <tbody>
                  <tr><td>Extension build (20 m², mid-spec)</td><td>£65,000–£80,000</td></tr>
                  <tr><td>Kitchen supply &amp; install (mid-range)</td><td>£12,000–£25,000</td></tr>
                  <tr><td>Appliances (integrated)</td><td>£3,000–£8,000</td></tr>
                  <tr><td>Worktops (quartz/granite)</td><td>£3,000–£6,000</td></tr>
                  <tr><td><strong>Total project</strong></td><td><strong>£83,000–£119,000</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <h4>Real project: Ealing open-plan renovation</h4>
              <p>A full open-plan kitchen-diner renovation in Ealing, combining a rear extension with internal wall removal and a new kitchen installation. The finished space included a large island, integrated appliances, engineered oak flooring and underfloor heating throughout. Total project cost was approximately <strong>£105,000</strong>.</p>
            </div>
          </section>


          {/* ── What's included / excluded ── */}
          <section className="reveal">
            <h2>What&apos;s included (and what&apos;s not) in the per-m² price</h2>
            <div className="blog-two-col">
              <div className="blog-col">
                <h3>Typically included</h3>
                <ul>
                  <li>Foundations and groundworks</li>
                  <li>Structural walls (blockwork or timber frame)</li>
                  <li>Steelwork (RSJs, lintels)</li>
                  <li>Roof structure and waterproofing</li>
                  <li>Windows and external doors</li>
                  <li>Internal plastering and rendering</li>
                  <li>First-fix electrics and plumbing</li>
                  <li>Flooring prep (screed)</li>
                  <li>Decoration (painting)</li>
                  <li>Building regulations compliance</li>
                </ul>
              </div>
              <div className="blog-col">
                <h3>Usually excluded</h3>
                <ul>
                  <li>Architect fees (£3,000–£8,000)</li>
                  <li>Structural engineer (£1,000–£3,000)</li>
                  <li>Party wall surveyor (£1,000–£3,000 per neighbour)</li>
                  <li>Planning application fee (£258 for householder)</li>
                  <li>Kitchen or bathroom fit-out</li>
                  <li>Furniture and appliances</li>
                  <li>Garden landscaping/reinstatement</li>
                  <li>VAT (if contractor is VAT-registered)</li>
                </ul>
              </div>
            </div>
          </section>


          {/* ── Hidden costs ── */}
          <section className="reveal">
            <h2>Hidden costs to budget for</h2>
            <p>These are the costs that catch people off guard. We always advise our clients to keep a <strong>10–15% contingency</strong> on top of the quoted construction price.</p>
            <ul>
              <li><strong>Party wall agreements</strong> — if your extension is on or near a shared boundary, you&apos;ll need a party wall agreement under the Party Wall Act 1996. Budget £1,000–£3,000 per neighbour (you pay for both surveyors).</li>
              <li><strong>Thames Water build-over agreement</strong> — if a public sewer runs under or near the extension footprint, Thames Water must approve the work. This is very common in London. Cost: £0 for the application, but potential design changes can add £2,000–£5,000.</li>
              <li><strong>Tree protection</strong> — if mature trees are within influencing distance of the foundations, you may need deeper piled foundations (adding £5,000–£12,000) or specialist root protection measures.</li>
              <li><strong>Asbestos removal</strong> — common in pre-1990s properties. If found during demolition, licensed removal costs £500–£3,000 depending on extent.</li>
              <li><strong>Skip permits and parking suspensions</strong> — councils like Hounslow, Ealing and Richmond charge £30–£100 per week for skip permits. If you need a parking bay suspended for materials delivery, that&apos;s another £150–£300.</li>
            </ul>
          </section>


          {/* ── How to reduce costs ── */}
          <section className="reveal">
            <h2>How to keep extension costs down</h2>
            <p>We&apos;re not going to pretend that extensions are cheap — but there are legitimate ways to reduce the bill without compromising quality:</p>
            <ol>
              <li><strong>Build under permitted development</strong> — avoiding a planning application saves £258 in fees and, more importantly, 8–12 weeks of waiting time (time = money if you&apos;re renting elsewhere). Read our <Link href="/blog/permitted-development-london">guide to permitted development rules in London</Link>.</li>
              <li><strong>Go flat-roof, not pitched</strong> — a flat roof with rooflights is typically £4,000–£8,000 cheaper than a pitched roof on a single-storey extension.</li>
              <li><strong>Standardise your glazing</strong> — standard bi-fold doors are half the price of bespoke Crittall-style steelwork. If the budget is tight, standard aluminium bi-folds from a reputable manufacturer look great.</li>
              <li><strong>Phase the kitchen separately</strong> — you can move in to the extension with a temporary kitchen setup and fit the permanent kitchen a few months later when cash flow allows.</li>
              <li><strong>Get a fixed-price quote</strong> — provisional sums and &ldquo;allowances&rdquo; in a quote are where costs spiral. At Delta, every quote is fully itemised with no provisional sums.</li>
            </ol>
          </section>


          {/* ── Timeline ── */}
          <section className="reveal">
            <h2>How long does a house extension take?</h2>
            <p>The build itself is only part of the timeline. Here&apos;s the full picture from first phone call to moving the furniture in:</p>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Phase</th><th>Duration</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  <tr><td>Design &amp; drawings</td><td>2–4 weeks</td><td>Architect produces plans; structural calcs prepared</td></tr>
                  <tr><td>Planning permission</td><td>8–12 weeks</td><td>If required — skip if under permitted development</td></tr>
                  <tr><td>Party wall &amp; building regs</td><td>2–6 weeks</td><td>Can run in parallel with planning</td></tr>
                  <tr><td>Tender &amp; contractor selection</td><td>2–4 weeks</td><td>Get 3 quotes; check references</td></tr>
                  <tr><td>Construction</td><td>10–20 weeks</td><td>Depends on extension type (see table above)</td></tr>
                  <tr><td>Snagging &amp; handover</td><td>1–2 weeks</td><td>Final inspections, certificates, sign-off</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Total timeline:</strong> roughly 6–10 months from first call to completion. The design and approval phase is almost always longer than people expect — start planning early.</p>
          </section>


          {/* ── FAQ ── */}
          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>

            <details>
              <summary>How much does a house extension cost in London in 2026?</summary>
              <p>A house extension in London costs between £2,200 and £4,500+ per square metre in 2026, depending on the type and specification. A typical 20 m² single-storey rear extension costs £65,000–£95,000, while a 40 m² double-storey extension costs £110,000–£170,000. London prices are 30–40% above the UK national average.</p>
            </details>

            <details>
              <summary>How much does a single-storey extension cost per m² in London?</summary>
              <p>A single-storey extension in London costs £2,800–£4,500 per m² depending on specification. A basic spec starts around £2,800/m², a mid-range finish is £3,200–£3,800/m², and a high-end specification with underfloor heating, bespoke joinery and premium finishes reaches £4,000–£4,500/m².</p>
            </details>

            <details>
              <summary>What is included in extension cost per m²?</summary>
              <p>Extension cost per m² typically includes foundations, structural walls, roof, windows and doors, internal plastering, electrics, plumbing, flooring prep, and decoration. It usually excludes kitchen/bathroom fittings, furniture, landscaping, party wall surveyor fees, planning application fees, and architect/structural engineer fees.</p>
            </details>

            <details>
              <summary>Is a double-storey extension cheaper per m² than a single-storey?</summary>
              <p>Yes. A double-storey extension is typically 15–25% cheaper per m² than a single-storey because the foundations and roof (the most expensive elements) are shared across two floors. You get roughly double the floor area for only 50–65% more cost than a single-storey.</p>
            </details>

            <details>
              <summary>How long does a house extension take in London?</summary>
              <p>A typical single-storey rear extension takes 10–14 weeks from breaking ground. A double-storey extension takes 14–20 weeks. Side-return extensions are usually 8–12 weeks. Add 6–10 weeks before construction for planning permission (if required), building regulations approval, and party wall agreements.</p>
            </details>

            <details>
              <summary>Do I need planning permission for an extension in London?</summary>
              <p>Many single-storey rear extensions fall under permitted development and do not need planning permission, provided they meet size and height limits. However, if your property is in a conservation area, is a flat/maisonette, or has been previously extended, you may need to apply. Read our <Link href="/blog/permitted-development-london">guide to permitted development rules in London</Link>.</p>
            </details>
          </section>


          {/* ── CTA ── */}
          <section className="reveal blog-cta-inline">
            <h2>Get a fixed-price quote for your extension</h2>
            <p>Send us your drawings (or even a sketch), the address, and a rough idea of what you want — a director will reply within one working day with an honest assessment of cost and timeline. No obligation, no sales pitch.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>

        </div>
      </article>

      <SharedFooter />
    </>
  );
}

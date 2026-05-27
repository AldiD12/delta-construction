"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PermittedDevClient() {
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
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Permitted Development London", href: "/blog/permitted-development-london" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Planning</span>
              <span className="blog-tag">Extensions</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">Permitted Development Rules for Extensions&nbsp;in&nbsp;London <em>(2026&nbsp;Guide)</em></h1>
            <p className="blog-article-subtitle reveal in d1">What you can build without planning permission, how far you can extend, and when you definitely need to apply. A practical guide from builders who deal with London councils every week.</p>
            <div className="blog-article-meta reveal in d2">
              <span>By Delta Construction</span>
              <span>27 May 2026</span>
              <span>10 min read</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/assets/modern-extension-exterior.png" alt="Modern brick rear extension built under permitted development in Notting Hill, London" />
        </div>

        <div className="container blog-article-body">

          {/* ── Quick-reference ── */}
          <div className="blog-callout reveal">
            <h2>Permitted development at a glance</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Extension type</th>
                    <th>Max depth (from rear wall)</th>
                    <th>Max height</th>
                    <th>Planning needed?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Single-storey rear (semi/terrace)</td><td>3 m (or 6 m via prior approval)</td><td>4 m</td><td>No (if within limits)</td></tr>
                  <tr><td>Single-storey rear (detached)</td><td>4 m (or 8 m via prior approval)</td><td>4 m</td><td>No (if within limits)</td></tr>
                  <tr><td>Two-storey rear</td><td>3 m</td><td>As existing roof</td><td>No (if within limits)</td></tr>
                  <tr><td>Side extension</td><td>Half the width of original house</td><td>4 m / single storey only</td><td>No (if within limits)</td></tr>
                  <tr><td>Loft conversion (dormer)</td><td>N/A</td><td>40 m³ (terrace) / 50 m³ (detached/semi)</td><td>Usually no</td></tr>
                  <tr><td>Any extension in a conservation area</td><td>Varies</td><td>Varies</td><td>Often yes — check</td></tr>
                </tbody>
              </table>
            </div>
            <p className="blog-table-note">These are simplified summaries. The full rules have additional conditions around boundary distances, materials, and existing extensions. Always confirm with your local planning authority or architect before starting work.</p>
          </div>


          {/* ── What is PD ── */}
          <section className="reveal">
            <h2>What is permitted development?</h2>
            <p>Permitted development (PD) is a set of national rules, defined by the Town and Country Planning (General Permitted Development) Order 2015 (as amended), that allow certain building works to go ahead <strong>without needing planning permission</strong> from your local council.</p>
            <p>Think of it as a pre-approved right to extend your home — provided you stay within specific size, height, and position limits. The rules were designed to let homeowners make reasonable improvements to their properties without the cost and delay of a full planning application.</p>
            <p><strong>Key point:</strong> permitted development only applies to <em>houses</em> (detached, semi-detached, terraced). Flats, maisonettes, and commercial properties do not have PD rights for extensions.</p>
          </section>


          {/* ── Single-storey rear ── */}
          <section className="reveal">
            <h2>Single-storey rear extension rules</h2>
            <p>This is the most common type of extension in London, and the one that most often qualifies for permitted development. Here are the key limits:</p>
            <ul>
              <li><strong>Maximum depth from the original rear wall:</strong> 3 metres for semi-detached and terraced houses, 4 metres for detached houses.</li>
              <li><strong>Maximum height:</strong> 4 metres overall. If within 2 metres of a boundary, the eaves height must not exceed 3 metres.</li>
              <li><strong>Maximum coverage:</strong> the extension (plus any other buildings in the garden) must not cover more than 50% of the garden area.</li>
              <li><strong>Materials:</strong> must be similar in appearance to the existing house.</li>
              <li><strong>No balconies, verandas, or raised platforms</strong> over 300 mm above ground level.</li>
            </ul>

            <div className="blog-example">
              <h4>The &ldquo;original&rdquo; rear wall</h4>
              <p>This is a common source of confusion. The &ldquo;original&rdquo; rear wall means the rear wall of the house as it was first built, or as it stood on 1 July 1948 — whichever is later. If a previous owner already extended the house by 2 metres, your 3-metre allowance is measured from the <em>original</em> wall, not the existing one. In practice, this means you may only be able to extend a further 1 metre under PD.</p>
            </div>
          </section>


          {/* ── Larger home extension scheme ── */}
          <section className="reveal">
            <h2>The larger home extension scheme (prior approval)</h2>
            <p>The larger home extension scheme doubles the permitted depth for single-storey rear extensions: up to <strong>6 metres</strong> for semi-detached/terraced houses and <strong>8 metres</strong> for detached houses. This is not &ldquo;planning permission&rdquo; — it uses a simpler process called <strong>prior approval</strong>.</p>

            <h3>How prior approval works</h3>
            <ol>
              <li>You submit a prior approval application to your council (£120 fee).</li>
              <li>The council notifies your immediate neighbours by letter.</li>
              <li>Neighbours have <strong>21 days</strong> to comment.</li>
              <li>The council has <strong>42 days</strong> from the application date to decide.</li>
              <li>If no objections are raised, or the council determines the impact is acceptable, you receive prior approval.</li>
              <li>If the council does not respond within 42 days, approval is <strong>deemed granted</strong> by default.</li>
            </ol>
            <p>This scheme is popular in London because many terraced houses need more than 3 metres to create a meaningful open-plan living space. In our experience, prior approval applications succeed roughly 75–80% of the time in London boroughs.</p>
          </section>


          {/* ── Two-storey rear ── */}
          <section className="reveal">
            <h2>Two-storey rear extension rules</h2>
            <p>Two-storey rear extensions can be built under PD, but the rules are stricter:</p>
            <ul>
              <li><strong>Maximum depth:</strong> 3 metres from the original rear wall (no larger-home extension scheme for two-storey).</li>
              <li><strong>Must be at least 7 metres</strong> from the rear boundary.</li>
              <li><strong>Maximum eaves and ridge height</strong> must not exceed the existing house.</li>
              <li><strong>Roof pitch</strong> must match the existing house as closely as practicable.</li>
              <li><strong>No balconies or windows</strong> in the side elevation overlooking neighbours (or they must be obscure-glazed and non-opening below 1.7 m).</li>
            </ul>
            <p>In practice, the 7-metre rule from the rear boundary makes two-storey rear PD extensions difficult on small London plots. Many London gardens are only 8–12 metres deep, leaving almost no room after the 7-metre setback. This is why most two-storey extensions in London require full planning permission.</p>
          </section>


          {/* ── Side extensions ── */}
          <section className="reveal">
            <h2>Side extension rules</h2>
            <p>Side extensions (often used to extend a kitchen along a side-return alley) are allowed under PD with these conditions:</p>
            <ul>
              <li><strong>Single storey only.</strong></li>
              <li><strong>Maximum width:</strong> no more than half the width of the original house.</li>
              <li><strong>Maximum height:</strong> 4 metres.</li>
              <li><strong>Must not extend forward</strong> of the principal elevation (front of the house) facing a highway.</li>
              <li>If in a conservation area or other designated land, side extensions are <strong>not permitted</strong> under PD.</li>
            </ul>
          </section>


          {/* ── Loft conversions ── */}
          <section className="reveal">
            <h2>Loft conversion permitted development rules</h2>
            <p>Loft conversions are a separate category of permitted development. The rules are based on <strong>volume added</strong>, not floor area:</p>
            <ul>
              <li><strong>Terraced houses:</strong> up to 40 m³ of additional roof space.</li>
              <li><strong>Detached and semi-detached houses:</strong> up to 50 m³.</li>
              <li>Dormers must not be higher than the existing ridge.</li>
              <li>Side-facing windows must be obscure-glazed and non-opening below 1.7 m.</li>
              <li>Dormer windows on the front (street-facing) elevation are <strong>not permitted</strong> under PD.</li>
              <li>Materials must be similar in appearance to the existing house.</li>
            </ul>
            <p>Most standard dormer loft conversions in London fall within these limits. Hip-to-gable conversions on semi-detached houses are also usually permitted, as they add volume efficiently.</p>
          </section>


          {/* ── Conservation areas ── */}
          <section className="reveal">
            <h2>Conservation areas and Article 4 directions</h2>
            <p>London has hundreds of conservation areas, and if your property is in one, your permitted development rights are <strong>significantly reduced</strong>:</p>
            <ul>
              <li><strong>No side extensions</strong> under PD.</li>
              <li><strong>No two-storey rear extensions</strong> under PD.</li>
              <li><strong>No rear dormers</strong> visible from a highway.</li>
              <li><strong>No cladding</strong> of the exterior.</li>
              <li>Single-storey rear extensions are usually still permitted under PD, unless an <strong>Article 4 direction</strong> has removed those rights.</li>
            </ul>
            <p>An Article 4 direction is a specific order made by the council that removes certain PD rights in a defined area. Some London boroughs (particularly Kensington &amp; Chelsea, Westminster, and Camden) use Article 4 directions extensively. If an Article 4 is in place, you need planning permission for almost everything.</p>

            <div className="blog-example">
              <h4>How to check if you&apos;re in a conservation area</h4>
              <p>Every London borough has an interactive map on their planning department website showing conservation area boundaries. Search for &ldquo;[your borough] conservation area map&rdquo; — for example, &ldquo;Hounslow conservation area map&rdquo; or &ldquo;Ealing conservation area map.&rdquo; You can also check on the <strong>Planning Portal</strong> at planningportal.co.uk.</p>
            </div>
          </section>


          {/* ── Building regs ── */}
          <section className="reveal">
            <h2>Building regulations: a separate requirement</h2>
            <p>This is the single most misunderstood point in home extensions: <strong>permitted development does NOT mean you can skip building regulations.</strong> They are two completely separate legal requirements.</p>
            <ul>
              <li><strong>Planning permission</strong> — governs what you can build (size, position, appearance). PD exempts you from this.</li>
              <li><strong>Building regulations</strong> — govern how you build it (structural safety, fire escape, insulation, drainage, electrics). You <strong>always</strong> need building regulations approval, whether or not you need planning permission.</li>
            </ul>
            <p>You can apply for building regulations approval through your local council&apos;s building control team, or through a private Approved Inspector. At Delta, we typically use Approved Inspectors as they offer faster turnaround and more flexible site inspection schedules.</p>
          </section>


          {/* ── LDC ── */}
          <section className="reveal">
            <h2>Lawful development certificates: why you should get one</h2>
            <p>A lawful development certificate (LDC) is a document from your council confirming that your extension is lawful under permitted development. It costs <strong>£117</strong> and takes approximately 8 weeks to obtain.</p>
            <p>Technically it&apos;s optional — but we strongly recommend getting one for every PD extension. Here&apos;s why:</p>
            <ul>
              <li><strong>Property sale protection</strong> — when you sell your home, the buyer&apos;s solicitor will ask for proof that all extensions were built lawfully. Without an LDC, you may face delays or be asked to buy indemnity insurance.</li>
              <li><strong>Mortgage lender requirements</strong> — many lenders now require evidence that extensions comply with planning law.</li>
              <li><strong>Certainty before you start</strong> — an LDC confirms the council agrees your plans fall within PD before you spend money on construction.</li>
            </ul>
          </section>


          {/* ── Party wall ── */}
          <section className="reveal">
            <h2>Party wall agreements</h2>
            <p>If your extension involves work on or near a shared boundary wall, you&apos;ll need to comply with the <strong>Party Wall etc. Act 1996</strong>. This applies regardless of whether you need planning permission.</p>
            <p>You must serve a party wall notice on your neighbours at least <strong>two months</strong> before starting work that involves:</p>
            <ul>
              <li>Building on the boundary line</li>
              <li>Cutting into a party wall (e.g. inserting a beam)</li>
              <li>Excavating within 3 metres of a neighbour&apos;s structure (or 6 metres if the excavation goes deeper than their foundations)</li>
            </ul>
            <p>If your neighbour agrees in writing (a &ldquo;consent&rdquo;), no surveyor is needed and there&apos;s no cost. If they dissent or don&apos;t respond within 14 days, both parties appoint surveyors to prepare a Party Wall Award. Budget <strong>£1,000–£3,000 per neighbour</strong> — you (the building owner) pay for both surveyors.</p>
          </section>


          {/* ── Checklist ── */}
          <section className="reveal">
            <h2>Your pre-build checklist</h2>
            <ol>
              <li><strong>Check if you&apos;re in a conservation area</strong> — search your borough&apos;s planning map.</li>
              <li><strong>Check for Article 4 directions</strong> — some areas have PD rights removed entirely.</li>
              <li><strong>Measure from the original rear wall</strong> — not the current one if the house was already extended.</li>
              <li><strong>Apply for a lawful development certificate</strong> (£117) — optional but strongly recommended.</li>
              <li><strong>Consider prior approval</strong> if you need more than 3 m depth (semi/terrace) or 4 m (detached).</li>
              <li><strong>Submit building regulations application</strong> — this is mandatory regardless of planning status.</li>
              <li><strong>Serve party wall notices</strong> — at least 2 months before starting if the work affects shared boundaries.</li>
              <li><strong>Check for public sewers</strong> — Thames Water build-over agreements may be needed.</li>
              <li><strong>Get quotes from builders</strong> — see our <Link href="/blog/house-extension-cost-london">guide to extension costs in London</Link> for realistic figures.</li>
            </ol>
          </section>


          {/* ── FAQ ── */}
          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>

            <details>
              <summary>Do I need planning permission for a single-storey rear extension in London?</summary>
              <p>In most cases, no. A single-storey rear extension can be built under permitted development rights, provided it does not extend more than 3 metres from the rear wall (6 metres via prior approval for semi/terraced, or 4/8 metres for detached), does not exceed 4 metres in height, and covers no more than 50% of the garden. Conservation areas, Article 4 directions, listed buildings, and flats are excluded.</p>
            </details>

            <details>
              <summary>How far can I extend without planning permission?</summary>
              <p>Under standard PD: 3 metres (semi/terraced) or 4 metres (detached) for single-storey rear extensions. Under the larger home extension scheme (prior approval): 6 metres (semi/terraced) or 8 metres (detached). Side extensions are limited to half the width of the original house.</p>
            </details>

            <details>
              <summary>What is the larger home extension scheme?</summary>
              <p>It allows larger single-storey rear extensions (up to 6 m or 8 m) without full planning permission. You submit a prior approval application (£120), neighbours are notified and have 21 days to comment, and the council decides within 42 days. If no decision is made, approval is deemed granted.</p>
            </details>

            <details>
              <summary>Can I build an extension in a conservation area without planning permission?</summary>
              <p>PD rights are reduced in conservation areas. Side extensions, two-storey rear extensions, and visible dormers are not permitted under PD. Single-storey rear extensions may still qualify, but check for Article 4 directions which can remove all PD rights.</p>
            </details>

            <details>
              <summary>Do I need building regulations even without planning permission?</summary>
              <p>Yes, always. Building regulations cover structural safety, fire safety, insulation, drainage, ventilation and electrical safety. They are a separate legal requirement from planning permission and must be obtained for every extension.</p>
            </details>

            <details>
              <summary>What is a lawful development certificate and do I need one?</summary>
              <p>An LDC is a council document confirming your extension is lawful under PD. It costs £117 and takes about 8 weeks. While not legally required, it protects you when selling the property — solicitors and mortgage lenders routinely ask for proof that extensions were built lawfully.</p>
            </details>
          </section>


          {/* ── CTA ── */}
          <section className="reveal blog-cta-inline">
            <h2>Not sure if your project needs planning permission?</h2>
            <p>Send us the address and a rough idea of what you want to build. We&apos;ll check the planning constraints on your property and let you know whether your project falls under permitted development — no charge, no obligation.</p>
            <Link className="btn" href="/contact">Get a free planning check <span className="arr"></span></Link>
          </section>

        </div>
      </article>

      <SharedFooter />
    </>
  );
}

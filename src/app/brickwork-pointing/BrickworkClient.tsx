"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BrickworkClient() {
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
      <Breadcrumbs items={[{ name: "Brickwork & Pointing", href: "/brickwork-pointing" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Brickwork</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">Brickwork &amp; Repointing&nbsp;in&nbsp;London</h1>
            <p className="blog-article-subtitle reveal in d1">From matched brickwork on a new extension to repointing a tired Victorian wall and cutting in a steel beam for open-plan living — brickwork is where a build looks either right or wrong. We get it right.</p>
            <div className="blog-article-meta reveal in d2">
              <span>Delta Construction</span>
              <span>Building London since 2019</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/uploads/project-11.jpg" alt="Brick retaining wall and sandstone paving by Delta Construction" />
        </div>

        <div className="container blog-article-body">
          <section className="reveal">
            <h2>What we do</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead><tr><th>Service</th><th>What it covers</th></tr></thead>
                <tbody>
                  <tr><td>Brickwork</td><td>New and matched brickwork for extensions, repairs and rebuilds</td></tr>
                  <tr><td>Repointing</td><td>Replacing worn mortar to protect walls from damp and frost</td></tr>
                  <tr><td>Structural openings</td><td>Knock-throughs and openings with engineer-designed steel beams</td></tr>
                  <tr><td>Garden &amp; retaining walls</td><td>Boundary walls, retaining walls and planters, properly founded</td></tr>
                  <tr><td>Period brick restoration</td><td>Sympathetic repair and lime mortar on older properties</td></tr>
                  <tr><td>Blockwork</td><td>Structural blockwork for extensions and new builds</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="reveal">
            <h2>Why matched brickwork matters</h2>
            <p>The fastest way to spot a cheap extension is the brickwork: the wrong brick, the wrong mortar colour, joints that don&apos;t line through. Getting it right means sourcing brick that matches the existing house — reclaimed where needed — and mixing mortar to the right colour and mix. On older London walls that often means lime mortar, which lets the wall breathe rather than trapping moisture the way modern cement can. It&apos;s a detail most people can&apos;t name but everyone notices.</p>
          </section>

          <section className="reveal">
            <h2>Repointing: protect the wall before it fails</h2>
            <p>Mortar is sacrificial — it&apos;s meant to weather so the bricks don&apos;t. When the pointing crumbles, recedes or cracks, water gets into the wall, and in a London winter freeze-thaw does the rest: bricks spall, faces blow, and a cosmetic job becomes a structural one. Repointing at the right time is cheap insurance. We rake out the failed mortar and repoint to match, using lime on period walls where it belongs.</p>
          </section>

          <section className="reveal">
            <h2>Structural openings &amp; steel</h2>
            <p>Opening up the ground floor — removing the wall between kitchen and diner, or forming a wide opening for bifold doors — means carrying the load above on a steel beam. That&apos;s not a job to eyeball: the beam is sized by a structural engineer, sat on proper padstones, and the surrounding brickwork made good. We handle the engineer&apos;s design, the steel, and the finish, signed off under building regulations.</p>
          </section>

          <section className="reveal">
            <h2>What good brickwork looks like</h2>
            <p>Matched brickwork is one of the fastest ways to spot a cheap build — the wrong brick, the wrong mortar colour, joints that don&apos;t line through the elevation. We source matching or reclaimed bricks, mix mortar to the correct colour AND to the correct period spec (lime on older London walls where it belongs, cement where cement is right), and any load-bearing work is designed by a structural engineer, sat on proper padstones, and signed off under building regulations. Every job is fixed-price and carries our 1-year workmanship guarantee, backed by £2M public liability insurance.</p>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>What is repointing and does my house need it?</summary><p>Repointing replaces worn mortar between bricks. If it&apos;s crumbling or receding, repointing protects the wall from damp and frost damage before it becomes structural.</p></details>
            <details><summary>Can you match existing brick and mortar?</summary><p>Yes — we source matching or reclaimed brick and mix mortar to match the colour and (on older walls) use lime where appropriate.</p></details>
            <details><summary>Do you form structural openings and install steel?</summary><p>Yes — engineer-designed steel beams for knock-throughs, open-plan layouts and bifold openings, with proper padstones and making-good, signed off under building regs.</p></details>
            <details><summary>Do you build garden and retaining walls?</summary><p>Yes — brick and block garden, boundary and retaining walls with proper foundations and drainage.</p></details>
            <details><summary>Are you insured and guaranteed?</summary><p>Yes — 1-year workmanship guarantee and £2M public liability insurance.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/extensions">House extensions</Link> · <Link href="/roofing">Roofing</Link> · <Link href="/carpentry">Carpentry &amp; joinery</Link></li>
              <li><Link href="/areas">Areas we cover</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a fixed-price quote</h2>
            <p>Whether it&apos;s repointing, a garden wall, a structural opening or brickwork for an extension — send us the address and details and a director will reply within one working day.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}

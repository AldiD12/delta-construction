"use client";

import { useEffect, useState, useCallback } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const h2: React.CSSProperties = {
    fontFamily: "var(--serif)",
    fontSize: "22px",
    lineHeight: 1.3,
    marginTop: "48px",
    marginBottom: "12px",
  };

  const p: React.CSSProperties = {
    fontFamily: "var(--sans)",
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--mute)",
    maxWidth: "680px",
    margin: "0 auto 20px",
  };

  return (
    <>
      <SharedNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      <div className="container">
        <Breadcrumbs
          items={[{ name: "Terms & Conditions", href: "/terms" }]}
        />
      </div>

      <section style={{ padding: "120px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <h1
            className="display"
            style={{ fontFamily: "var(--serif)", marginTop: "24px" }}
          >
            Terms &amp; Conditions
          </h1>
          <p
            style={{
              ...p,
              marginTop: "16px",
              fontStyle: "italic",
            }}
          >
            Last updated: May 2026
          </p>

          <h2 style={h2}>1. Use of this website</h2>
          <p style={p}>
            This website is operated by Delta Construction Ltd UK. By accessing
            and using this site you agree to these terms. If you do not agree,
            please do not use the website. We reserve the right to update these
            terms at any time without notice.
          </p>

          <h2 style={h2}>2. Intellectual property</h2>
          <p style={p}>
            All content on this website &mdash; including text, images,
            photographs, logos and design &mdash; is the property of Delta
            Construction Ltd UK or its licensors and is protected by copyright
            law. You may not reproduce, distribute or republish any material
            without our prior written consent.
          </p>

          <h2 style={h2}>3. Quotations &amp; estimates</h2>
          <p style={p}>
            All quotations provided by Delta Construction are valid for 30 days
            from the date of issue unless otherwise stated. Quotations are
            subject to a site survey and may be revised if the scope of work
            changes. Final pricing is confirmed in writing before work begins.
          </p>

          <h2 style={h2}>4. Limitation of liability</h2>
          <p style={p}>
            While we take every care to ensure the accuracy of information on
            this website, we make no warranties or representations about its
            completeness or reliability. Delta Construction Ltd UK shall not be
            liable for any indirect, incidental or consequential loss arising
            from your use of this website. Nothing in these terms excludes
            liability for death or personal injury caused by negligence, or any
            other liability that cannot be excluded by law.
          </p>

          <h2 style={h2}>5. External links</h2>
          <p style={p}>
            This website may contain links to third-party sites. We have no
            control over the content of those sites and accept no responsibility
            for them or for any loss or damage arising from your use of them.
          </p>

          <h2 style={h2}>6. Governing law</h2>
          <p style={p}>
            These terms are governed by and construed in accordance with the
            laws of England and Wales. Any disputes arising from these terms or
            your use of this website shall be subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>

          <h2 style={h2}>Contact</h2>
          <p style={p}>
            If you have any questions about these terms, please contact us at{" "}
            <a
              href="mailto:info@deltaconstructionltd.co.uk"
              style={{ color: "var(--accent)" }}
            >
              info@deltaconstructionltd.co.uk
            </a>
            .
          </p>
        </div>
      </section>

      <SharedFooter />

      <style>{`
        @media (max-width: 768px) {
          section { padding: 100px 0 48px !important; }
        }
      `}</style>
    </>
  );
}

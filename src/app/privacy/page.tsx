"use client";

import { useEffect, useState, useCallback } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPage() {
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

  const ul: React.CSSProperties = {
    fontFamily: "var(--sans)",
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--mute)",
    maxWidth: "680px",
    margin: "0 auto 20px",
    paddingLeft: "24px",
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
        <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      </div>

      <section style={{ padding: "120px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <h1
            className="display"
            style={{ fontFamily: "var(--serif)", marginTop: "24px" }}
          >
            Privacy Policy
          </h1>
          <p style={{ ...p, marginTop: "16px", fontStyle: "italic" }}>
            Last updated: May 2026
          </p>

          <h2 style={h2}>1. Who we are</h2>
          <p style={p}>
            Delta Construction Ltd UK (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) is a construction company registered in England.
            Our registered address is 7 Southland Way, Hounslow TW3 2RH. We are
            the data controller responsible for your personal data.
          </p>

          <h2 style={h2}>2. What data we collect</h2>
          <p style={p}>
            When you use our contact form or get in touch by phone or email, we
            may collect:
          </p>
          <ul style={ul}>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postcode or address</li>
            <li>Details of the work you are enquiring about</li>
          </ul>
          <p style={p}>
            We also collect anonymised usage data through Google Analytics (see
            our Cookie Policy for details).
          </p>

          <h2 style={h2}>3. How we use your data</h2>
          <p style={p}>We use your personal data to:</p>
          <ul style={ul}>
            <li>Respond to your enquiry</li>
            <li>Provide a quotation for work</li>
            <li>Arrange and carry out a site survey</li>
            <li>Communicate with you about an ongoing project</li>
          </ul>
          <p style={p}>
            We will never sell your data to third parties or use it for
            unrelated marketing.
          </p>

          <h2 style={h2}>4. Legal basis for processing</h2>
          <p style={p}>
            We process your data on the basis of <strong>legitimate interest</strong>{" "}
            (responding to your enquiry and providing our services) and{" "}
            <strong>consent</strong> (when you voluntarily submit a contact
            form). You may withdraw consent at any time by contacting us.
          </p>

          <h2 style={h2}>5. Data retention</h2>
          <p style={p}>
            We retain enquiry data for up to 2 years from the date of your last
            contact. Project records are retained for 6 years in line with
            construction industry best practice and legal requirements.
          </p>

          <h2 style={h2}>6. Third parties</h2>
          <p style={p}>
            Your data may be shared with the following third-party services that
            help us operate our website:
          </p>
          <ul style={ul}>
            <li>
              <strong>Formspree</strong> &mdash; processes contact form
              submissions on our behalf
            </li>
            <li>
              <strong>Google Analytics</strong> &mdash; collects anonymised
              website usage statistics
            </li>
          </ul>
          <p style={p}>
            These providers act as data processors and are bound by their own
            privacy policies and GDPR obligations.
          </p>

          <h2 style={h2}>7. Your rights</h2>
          <p style={p}>
            Under the UK General Data Protection Regulation (UK GDPR) you have
            the right to:
          </p>
          <ul style={ul}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>
              Lodge a complaint with the Information Commissioner&rsquo;s Office
              (ICO)
            </li>
          </ul>

          <h2 style={h2}>8. Contact us</h2>
          <p style={p}>
            To exercise any of your rights or for questions about this policy,
            please contact us at:
          </p>
          <p style={p}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@deltaconstructionltd.co.uk"
              style={{ color: "var(--accent)" }}
            >
              info@deltaconstructionltd.co.uk
            </a>
            <br />
            <strong>Address:</strong> Delta Construction Ltd UK, 7 Southland
            Way, Hounslow TW3 2RH
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

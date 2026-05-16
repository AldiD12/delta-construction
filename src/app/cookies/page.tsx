"use client";

import { useEffect, useState, useCallback } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CookiesPage() {
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
        <Breadcrumbs items={[{ name: "Cookie Policy", href: "/cookies" }]} />
      </div>

      <section style={{ padding: "120px 0 80px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <h1
            className="display"
            style={{ fontFamily: "var(--serif)", marginTop: "24px" }}
          >
            Cookie Policy
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

          <h2 style={h2}>What are cookies?</h2>
          <p style={p}>
            Cookies are small text files placed on your device when you visit a
            website. They help the site remember your preferences and understand
            how you use it. Cookies are widely used across the internet and are
            essential for many website features to work properly.
          </p>

          <h2 style={h2}>Essential cookies</h2>
          <p style={p}>
            These cookies are necessary for the website to function and cannot
            be switched off. They are usually set in response to actions you
            take, such as setting your privacy preferences or filling in forms.
          </p>
          <ul style={ul}>
            <li>Session cookies &mdash; keep you connected as you browse</li>
            <li>
              Preference cookies &mdash; remember your settings (e.g. cookie
              consent choice)
            </li>
          </ul>

          <h2 style={h2}>Analytics cookies</h2>
          <p style={p}>
            We use Google Analytics to understand how visitors interact with our
            website. These cookies collect information in an anonymised form,
            including the number of visitors, where they came from and which
            pages they viewed. This helps us improve the site for future
            visitors.
          </p>
          <ul style={ul}>
            <li>
              <strong>_ga / _ga_*</strong> &mdash; Google Analytics, used to
              distinguish users. Expires after 2 years.
            </li>
            <li>
              <strong>_gid</strong> &mdash; Google Analytics, used to
              distinguish users. Expires after 24 hours.
            </li>
          </ul>
          <p style={p}>
            IP addresses are anonymised before being stored by Google Analytics.
          </p>

          <h2 style={h2}>Third-party cookies</h2>
          <p style={p}>
            Some pages on our site embed content from third-party services,
            which may set their own cookies:
          </p>
          <ul style={ul}>
            <li>
              <strong>Google Maps</strong> &mdash; embedded maps on our contact
              and area pages may set cookies to operate correctly
            </li>
            <li>
              <strong>Formspree</strong> &mdash; our contact form processor may
              use cookies to prevent spam submissions
            </li>
          </ul>

          <h2 style={h2}>How to manage cookies</h2>
          <p style={p}>
            You can control and delete cookies through your browser settings.
            Most browsers allow you to refuse cookies or delete existing ones.
            Please note that disabling cookies may affect the functionality of
            this and other websites you visit.
          </p>
          <p style={p}>
            For more information on managing cookies, visit{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}
            >
              aboutcookies.org
            </a>
            .
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            If you have any questions about our use of cookies, please contact
            us at{" "}
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

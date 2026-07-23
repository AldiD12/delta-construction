"use client";

import { useEffect, useState } from "react";

/**
 * Sticky footnote shown on cost-guide pages. Sets a calm expectation that
 * published ranges are typical starting points — so a serious buyer reads
 * the guide with the right frame, and a bargain-hunter can't wave the low
 * end at a quote. Not dismissible on purpose: it belongs to the numbers.
 */
export default function PriceDisclaimer() {
  const [visible, setVisible] = useState(false);

  // Show only after the reader is past the hero and into the content —
  // so it doesn't compete with the headline on first paint.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.35s ease",
        pointerEvents: visible ? "auto" : "none",
        background: "var(--ink, #1a1a1a)",
        color: "var(--paper, #f5f2ec)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "var(--sans)",
          fontSize: "13px",
          lineHeight: 1.5,
        }}
      >
        <span aria-hidden="true" style={{ fontSize: "16px", opacity: 0.85 }}>*</span>
        <p style={{ margin: 0, color: "inherit" }}>
          <strong style={{ fontWeight: 600 }}>A note on the prices:</strong>{" "}
          ranges are for typical mid-specification projects in London. Premium postcodes,
          high-end finishes, larger footprints and complex structural work can be significantly
          higher. Every quote is bespoke to your property — the only way to know your number is a survey.
        </p>
      </div>
    </div>
  );
}

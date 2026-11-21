"use client";

import { useEffect, useState } from "react";
import AdsConversionLink from "./AdsConversionLink";
import { TrackedLink } from "./TrackingBits";
import styles from "./QuickQuotePage.module.css";

// Phone-only sticky "Call now | Free assessment" bar. It hides while the quote
// form is on screen, so it can never cover the problem buttons, the fields or
// the Send button (the header keeps a call button visible meanwhile).
export default function StickyContactBar({
  service,
  phoneHref,
}: {
  service: string;
  phoneHref: string;
}) {
  const [formOnScreen, setFormOnScreen] = useState(false);

  useEffect(() => {
    const form = document.getElementById("quote");
    if (!form || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setFormOnScreen(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.mobileBar} ${formOnScreen ? styles.mobileBarHidden : ""}`}
      aria-label="Quick contact"
      inert={formOnScreen}
    >
      <AdsConversionLink href={phoneHref} service={service} placement="mobile_bar">
        Call now
      </AdsConversionLink>
      <TrackedLink href="#quote" event="assessment_tap_mobile_bar">
        Free assessment
      </TrackedLink>
    </nav>
  );
}

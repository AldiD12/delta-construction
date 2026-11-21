"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { track } from "@/lib/track";

/** Fires `event` once when this marker scrolls into view. */
export function SeenMarker({ event }: { event: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        track(event);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [event]);

  return <span ref={ref} aria-hidden="true" style={{ display: "block", height: 1 }} />;
}

/** Tags the visit (ad click or not, campaign, device) and records the landing. */
export function LandingTracker({ service }: { service: string }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    track("page_landed", {
      service,
      landing_page: window.location.pathname,
      from_google_ad: params.get("gclid") ? "yes" : "no",
      utm_campaign: params.get("utm_campaign") || "none",
      utm_term: params.get("utm_term") || "none",
      device: window.matchMedia("(max-width: 860px)").matches ? "phone" : "desktop",
    });
  }, [service]);

  return null;
}

/** A plain link that records a tap before following it. */
export function TrackedLink({
  href,
  event,
  className,
  external = false,
  children,
}: {
  href: string;
  event: string;
  className?: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track(event)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

"use client";

import { ReactNode } from "react";
import { track } from "@/lib/track";

type AdsConversionLinkProps = {
  href: string;
  service: string;
  placement: string;
  children: ReactNode;
  className?: string;
  target?: "_blank";
};

export default function AdsConversionLink({
  href,
  service,
  placement,
  children,
  className,
  target,
}: AdsConversionLinkProps) {
  // e.g. call_tap_header, call_tap_mobile_bar, whatsapp_tap_hero
  const trackIntent = () => {
    const kind = href.startsWith("tel:") ? "call_tap" : "whatsapp_tap";
    track(`${kind}_${placement}`, { service });
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={trackIntent}
    >
      {children}
    </a>
  );
}

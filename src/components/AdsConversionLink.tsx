"use client";

import { ReactNode } from "react";

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
  const trackIntent = () => {
    const trackingWindow = window as Window & {
      dataLayer?: Array<Record<string, string>>;
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({
      event: href.startsWith("tel:") ? "ads_phone_click" : "ads_whatsapp_click",
      service,
      placement,
    });
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

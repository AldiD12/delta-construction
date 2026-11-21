import Script from "next/script";
import { CLARITY_PROJECT_ID, CLARITY_SNIPPET } from "@/lib/track";

// Loads Microsoft Clarity site-wide, cookieless (see src/lib/track.ts).
export default function ClarityScript() {
  if (!CLARITY_PROJECT_ID) return null;
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {CLARITY_SNIPPET(CLARITY_PROJECT_ID)}
    </Script>
  );
}

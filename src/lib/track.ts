// Visitor-step tracking with Microsoft Clarity, run WITHOUT cookies.
//
// UK visitors: Clarity runs in no-consent mode (no cookies, one ID per page
// view). We also send an explicit "denied" consent signal first, so Clarity
// never sets cookies here even if the project setting changes. Form inputs are
// masked by Clarity in every mode, and the forms also carry data-clarity-mask.
// No names, phone numbers or emails are ever passed to track().

// Delta's Clarity project ID (clarity.microsoft.com -> Settings -> Setup).
// Empty = Clarity is not loaded and track() only writes to window.dataLayer.
export const CLARITY_PROJECT_ID = "zhay9kwzto"; // project "delta", created 21 Nov 2026

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[] };
type TrackingWindow = Window & { dataLayer?: unknown[]; clarity?: ClarityFn };

const DENIED = { ad_Storage: "denied", analytics_Storage: "denied" };

function clarity(): ClarityFn | undefined {
  if (!CLARITY_PROJECT_ID) return undefined;
  const w = window as TrackingWindow;
  if (typeof w.clarity !== "function") {
    // Same queue stub the official snippet creates; the snippet keeps it.
    const stub: ClarityFn = (...args: unknown[]) => {
      (stub.q = stub.q ?? []).push(args);
    };
    w.clarity = stub;
    stub("consentv2", DENIED);
  }
  return w.clarity;
}

export function track(event: string, tags: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as TrackingWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...tags });

  const c = clarity();
  if (!c) return;
  for (const [key, value] of Object.entries(tags)) c("set", key, value);
  c("event", event);
}

export const CLARITY_SNIPPET = (id: string) =>
  `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};` +
  `t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;` +
  `y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);` +
  `})(window,document,"clarity","script",${JSON.stringify(id)});` +
  `window.clarity("consentv2",${JSON.stringify(DENIED)});`;

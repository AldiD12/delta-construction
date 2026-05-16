import type { Metadata } from "next";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/Schema";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — Delta Construction",
  description:
    "Common questions about our construction services, pricing, timelines, insurance and guarantees. Delta Construction — London's trusted builder.",
};

const faqs = [
  {
    question: "How do I get a quote?",
    answer:
      "Call us on +44 7479 389 996, email info@deltaconstructionltd.co.uk, or fill in our online form. A director will arrange a free site survey and return a fixed-price, itemised quote within 48 hours.",
  },
  {
    question: "Do you charge for surveys?",
    answer:
      "No. Your initial site survey and quote are completely free with no obligation.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We are based in Hounslow and work across the whole of London and the Home Counties — West London, Twickenham, Richmond, North London, South West London and Central London.",
  },
  {
    question: "Will a director be on site?",
    answer:
      "Yes. A founding director visits every site, every week. You also get a dedicated WhatsApp group for real-time updates and photo progress reports.",
  },
  {
    question: "How do you keep the site clean?",
    answer:
      "Our team clears all rubbish daily, lays dust sheets on every surface, and all trades wear uniform. Your home stays liveable throughout the build.",
  },
  {
    question: "Do I need to move out during the work?",
    answer:
      "In most cases, no. We plan the build in phases so you can continue living in your home. For whole-house refurbishments, we will discuss the best arrangement during the survey.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Timelines depend on scope. As a guide: extensions 18–28 weeks, loft conversions 14–20 weeks, roofing 1–4 weeks, brickwork 1–6 weeks, landscaping 2–6 weeks. We provide a strict timeline in your quote and stick to it.",
  },
  {
    question: "Are your quotes fixed-price?",
    answer:
      "Yes. The price we quote is the price you pay. No hidden extras, no last-minute add-ons. Any variations are agreed in writing before work begins.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We typically work to a staged payment schedule linked to project milestones. The exact terms are set out in your contract before work starts.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes, we carry £2 million public liability insurance. Certificates are available on request.",
  },
  {
    question: "Do you provide a guarantee?",
    answer:
      "Every project comes with our 1-year workmanship guarantee as standard. If anything we built develops a fault within that period, we return and fix it at no cost.",
  },
  {
    question: "Do you handle building regulations sign-off?",
    answer:
      "Yes. We manage the full building regulations process from application to final inspection and certification.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Absolutely. Visit our gallery page or ask us for case studies relevant to your project type.",
  },
];

export default function FAQPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "FAQ",
            url: "https://deltaconstructionltd.co.uk/faq",
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <FAQClient />
    </>
  );
}

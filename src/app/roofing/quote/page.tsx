import type { Metadata } from "next";
import AdsLandingPage, {
  type AdsLandingConfig,
} from "@/components/AdsLandingPage";

export const metadata: Metadata = {
  title: { absolute: "Roof Repairs & Reroofing Quote | Delta Construction" },
  description:
    "Request a roof assessment in Hounslow and West London. Clear diagnosis, written scope and an honest repair-or-replace recommendation.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const config: AdsLandingConfig = {
  service: "roofing",
  eyebrow: "Roof repairs & reroofing · Hounslow & West London",
  headline: "A roof problem assessed properly — and quoted clearly.",
  subheadline:
    "Delta Construction handles leaks, slate and tile roofs, flat roofing, leadwork and chimney repairs. We inspect the cause, explain the options and provide a written scope before work begins.",
  offer: "Request a free roof assessment",
  heroImage: "/uploads/project-03.jpg",
  heroAlt:
    "Delta Construction roofers installing membrane and slate on a pitched roof",
  heroBullets: [
    "The cause is inspected — not only the visible symptom",
    "A repair-versus-replacement recommendation you can question",
    "A written scope and price before work is agreed",
  ],
  issueLabel: "What help do you need?",
  issueOptions: [
    "Roof leak or water ingress",
    "Pitched roof repair",
    "Flat roof repair or replacement",
    "Full slate or tile reroof",
    "Chimney or leadwork repair",
    "Gutters, fascias or soffits",
    "Not sure — I need an assessment",
  ],
  formHeading: "Tell us about the roof",
  submitLabel: "Request my assessment",
  proofItems: [
    { value: "Hounslow", label: "Local, established team" },
    { value: "£2 million", label: "Public liability cover" },
    { value: "1 year", label: "Workmanship guarantee" },
    { value: "5.0 / 5", label: "From 18 Google reviews" },
  ],
  serviceHeading: "The right scope for the actual roof problem",
  serviceIntro:
    "The page and enquiry form are specific to roofing, so the first conversation starts with the job you searched for—not a generic building-services pitch.",
  serviceCards: [
    {
      title: "Leaks & roof repairs",
      text: "Investigation and targeted repairs for damaged tiles, slipped slates, failed details and water ingress.",
    },
    {
      title: "Slate & tile reroofing",
      text: "Strip and renew pitched roofs when repair is no longer the sensible long-term option.",
    },
    {
      title: "Flat roofing",
      text: "Assessment, repair and replacement of failing flat-roof coverings and junctions.",
    },
    {
      title: "Leadwork & chimneys",
      text: "Repair of flashings, valleys, chimney details and other common water-entry points.",
    },
    {
      title: "Fascias, soffits & gutters",
      text: "Roofline repairs and replacement where drainage or deteriorated timber is contributing to damage.",
    },
    {
      title: "Repair-or-replace assessment",
      text: "A practical recommendation based on condition, likely lifespan and the economics of repeated repair.",
    },
  ],
  processHeading: "From first call to a weather-tight finish",
  process: [
    {
      title: "Brief call and postcode check",
      text: "We confirm the problem, location, access and whether Delta is a suitable fit for the job.",
    },
    {
      title: "Roof assessment",
      text: "The team inspects the visible failure and the surrounding details that may be causing it.",
    },
    {
      title: "Written scope and quote",
      text: "You receive the recommended work, price and relevant assumptions before deciding.",
    },
    {
      title: "Agreed work and handover",
      text: "Work starts only after the scope is agreed, with the area left tidy at completion.",
    },
  ],
  projectImage: "/uploads/project-03.jpg",
  projectAlt: "Pitched roof works completed by Delta Construction in West London",
  projectCaption:
    "Real Delta Construction roofing work—not a stock image or an invented case study.",
  review: {
    quote:
      "I have used Delta twice now for rental properties. Both times got a good roof repair carried out at short notice. Very pleasant to deal with, would use again.",
    name: "Annmarie Flynn",
  },
  costHeading: "Useful figures before you enquire",
  costIntro:
    "A roof repair cannot be responsibly priced from a keyword alone. These figures set expectations without pretending every roof has the same access, area or condition.",
  costItems: [
    {
      title: "Targeted roof repair",
      value: "Quoted after inspection",
      note: "The price depends on the failure, access, materials and how far damage has travelled.",
    },
    {
      title: "Typical London semi or terrace reroof",
      value: "£6,000–£15,000",
      note: "A guide, not a fixed promise; scaffolding, roof size and specification can change it.",
    },
    {
      title: "Typical reroof programme",
      value: "5–8 working days",
      note: "Weather, access and unforeseen substrate repairs can affect the programme.",
    },
  ],
  faqs: [
    {
      question: "Do I need a repair or a complete reroof?",
      answer:
        "That depends on the age and overall condition of the covering, not only the current leak. Delta will explain whether a local repair is credible or whether replacement is likely to be better value.",
    },
    {
      question: "Can you quote from photographs?",
      answer:
        "Photographs help with triage, but many leaks travel before appearing indoors. A reliable scope will normally require an inspection of the affected roof and its junctions.",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "Delta is based in Hounslow and works across West London and nearby areas. Send the project postcode and the team will confirm coverage before arranging a visit.",
    },
    {
      question: "Are you insured and is the work guaranteed?",
      answer:
        "Delta Construction carries £2 million public liability insurance and provides a one-year workmanship guarantee.",
    },
  ],
};

export default function RoofingQuotePage() {
  return <AdsLandingPage config={config} />;
}

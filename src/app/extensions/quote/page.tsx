import type { Metadata } from "next";
import AdsLandingPage, {
  type AdsLandingConfig,
} from "@/components/AdsLandingPage";

export const metadata: Metadata = {
  title: { absolute: "House Extension Quote | Delta Construction" },
  description:
    "Request a house extension survey in Hounslow and West London. Clear scope, realistic budget guidance and an itemised quote before construction.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const config: AdsLandingConfig = {
  service: "house_extensions",
  eyebrow: "House extensions · Hounslow & West London",
  headline: "More space, with the scope and price made clear before work starts.",
  subheadline:
    "From rear and side-return extensions to larger two-storey projects, Delta Construction coordinates the build around a defined scope, realistic budget and the approvals your project needs.",
  offer: "Request a free extension survey",
  heroImage: "/uploads/project-17.jpg",
  heroAlt:
    "Completed modern rear extension built by Delta Construction with large glazed doors",
  heroBullets: [
    "Director-led from the first survey through the build",
    "Planning, structural and building-control requirements considered",
    "An itemised fixed-price quote before construction is agreed",
  ],
  issueLabel: "What kind of extension are you considering?",
  issueOptions: [
    "Single-storey rear extension",
    "Side-return extension",
    "Wraparound extension",
    "Double-storey extension",
    "Kitchen extension",
    "I need planning or budget advice first",
    "Not sure yet",
  ],
  formHeading: "Tell us about the space",
  submitLabel: "Request my free survey",
  proofItems: [
    { value: "Hounslow", label: "Local, established team" },
    { value: "£2 million", label: "Public liability cover" },
    { value: "1 year", label: "Workmanship guarantee" },
    { value: "5.0 / 5", label: "From 18 Google reviews" },
  ],
  serviceHeading: "A buildable extension—not just a promising sketch",
  serviceIntro:
    "Good extension work connects design, permissions, structure, services and finishing. The scope below makes that coordination visible before you commit.",
  serviceCards: [
    {
      title: "Rear extensions",
      text: "Single-storey additions designed to improve living space, kitchen layout and connection to the garden.",
    },
    {
      title: "Side-return extensions",
      text: "Use narrow side space to widen the ground floor and unlock a more practical internal layout.",
    },
    {
      title: "Wraparound extensions",
      text: "Combine rear and side-return space where the site, design and approvals support the larger footprint.",
    },
    {
      title: "Double-storey extensions",
      text: "Add ground- and first-floor accommodation with the structural and planning implications coordinated together.",
    },
    {
      title: "Kitchen extensions",
      text: "Coordinate structural openings, utilities, finishes and installation around the intended kitchen design.",
    },
    {
      title: "Design & approvals coordination",
      text: "Help account for planning, structural design, party-wall matters and building-control stages relevant to the project.",
    },
  ],
  processHeading: "A defined route from idea to handover",
  process: [
    {
      title: "Free survey and brief",
      text: "A director reviews the property, priorities, likely budget range and whether the project is a suitable fit.",
    },
    {
      title: "Design and approvals",
      text: "The required planning, structural and building-control information is identified before construction.",
    },
    {
      title: "Itemised fixed-price build",
      text: "The agreed specification is translated into a clear quote so inclusions and assumptions can be checked.",
    },
    {
      title: "Construction and handover",
      text: "The build is coordinated through inspections, finishes and final handover against the agreed scope.",
    },
  ],
  projectImage: "/uploads/project-17.jpg",
  projectAlt:
    "Contemporary rear extension completed by Delta Construction in West London",
  projectCaption:
    "A completed Delta Construction extension—not a stock render or invented project.",
  review: {
    quote:
      "We were very skeptical to using someone we didn't know even though recommended. Our usual builder unfortunately couldn't assist. I am extremely happy that we decided to go ahead. Full house renovation and we also extended the ground floor. Everything was great and high quality work. So easy to talk to and they accommodated all our requests and amendments. Highly recommend.",
    name: "Elena Tsela",
  },
  costHeading: "Realistic London extension ranges",
  costIntro:
    "These published guide ranges help qualify the conversation. The survey and specification are still necessary because structure, access, finishes and professional fees materially affect the final price.",
  costItems: [
    {
      title: "Single-storey rear extension",
      value: "£45,000–£95,000",
      note: "Indicative range before a measured survey and agreed specification.",
    },
    {
      title: "Side-return extension",
      value: "£55,000–£90,000",
      note: "Structure, drainage, glazing and kitchen requirements can shift the total.",
    },
    {
      title: "Double-storey extension",
      value: "£80,000–£170,000",
      note: "The range depends heavily on size, structure, finishes and planning constraints.",
    },
  ],
  faqs: [
    {
      question: "Do I need planning permission?",
      answer:
        "Some extensions may fall within permitted development, while others need a planning application. The property, previous additions, dimensions and local constraints must be checked rather than assumed.",
    },
    {
      question: "What should be decided before a reliable quote?",
      answer:
        "A useful quote needs the approximate size, structural approach, openings, glazing, services and finish level. Unknown items should be stated as assumptions instead of hidden in a headline price.",
    },
    {
      question: "Can you coordinate the whole project?",
      answer:
        "Delta offers design-and-build and project-management support, including coordination around planning, party-wall matters, structural information and building control where required.",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "Delta is based in Hounslow and works across West London and nearby areas. Send the project postcode and the team will confirm coverage before arranging a survey.",
    },
  ],
};

export default function ExtensionsQuotePage() {
  return <AdsLandingPage config={config} />;
}

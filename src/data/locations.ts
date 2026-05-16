export interface Location {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  subAreas: string[];
  nearby: string[];
  propertyTypes: string;
  typicalProjects: string;
  localContext: string;
  faqs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: "west-london",
    name: "West London",
    region: "GB-LND",
    lat: 51.5074,
    lng: -0.2901,
    description:
      "Premium construction services across West London — from double-storey rear extensions in Ealing's tree-lined avenues to full refurbishments of Victorian terraces in Chiswick and side-return extensions in Hammersmith's conservation areas.",
    subAreas: [
      "Ealing",
      "Chiswick",
      "Hammersmith",
      "Shepherd's Bush",
      "Acton",
      "Brentford",
    ],
    nearby: ["hounslow", "twickenham-richmond", "central-london"],
    propertyTypes:
      "West London is defined by its Edwardian and Victorian terraced housing, 1930s semis on the Ealing borders, and period conversions around Chiswick High Road. Many properties here have untouched lofts and narrow galley kitchens — both prime candidates for conversion.",
    typicalProjects:
      "Our most common projects in West London are rear extensions with bifold doors opening onto the garden, loft conversions adding a master suite, and full ground-floor reconfigurations knocking through to create open-plan kitchen-diners. We regularly work alongside architects on planning applications in the Chiswick and Bedford Park conservation areas.",
    localContext:
      "Families are the driving force behind renovation in West London. Schools like Chiswick School and Ealing Green draw young families who buy period homes and need more space. The typical brief is: bigger kitchen, extra bedroom, and a proper family bathroom upstairs.",
    faqs: [
      {
        question: "Do you work in conservation areas like Bedford Park?",
        answer:
          "Yes. We have completed multiple projects in the Bedford Park and Chiswick House conservation areas. We understand the additional planning requirements and work with heritage officers when needed.",
      },
      {
        question: "Can you handle party wall agreements?",
        answer:
          "We coordinate party wall surveyors as part of our service. Most terraced extensions in West London require a Party Wall Award — we manage the entire process so it doesn't delay your start date.",
      },
      {
        question:
          "How long does a typical rear extension take in West London?",
        answer:
          "A single-storey rear extension typically takes 14–18 weeks from breaking ground to handover. Double-storey rears are 20–28 weeks. We provide a detailed timeline in your quote.",
      },
      {
        question: "Do you provide a guarantee?",
        answer:
          "Every project comes with our 1-year workmanship guarantee and £2M public liability insurance. Building regulations sign-off is included as standard.",
      },
    ],
  },
  {
    slug: "twickenham-richmond",
    name: "Twickenham & Richmond",
    region: "GB-RIC",
    lat: 51.4479,
    lng: -0.3254,
    description:
      "Period-property specialists serving Twickenham, Richmond, Kingston and surrounding areas. From mansard loft conversions on Richmond Hill to full refurbishments of Strawberry Hill Victorians — delivered with meticulous attention to heritage detail.",
    subAreas: [
      "Twickenham",
      "Richmond",
      "Kingston",
      "Hampton",
      "Teddington",
      "Strawberry Hill",
    ],
    nearby: ["west-london", "hounslow", "south-west-london"],
    propertyTypes:
      "The Richmond borough is known for its Georgian and early Victorian villas, riverfront properties, and 1930s housing around Hampton and Teddington. Many homes here are large but dated — ripe for sympathetic modernisation that preserves the character while adding contemporary comfort.",
    typicalProjects:
      "Mansard loft conversions are our most requested project in Richmond and Twickenham — they maximise headroom and often add two rooms. We also deliver full-house refurbishments for families upgrading period properties, and high-specification kitchen extensions with underfloor heating and bespoke joinery.",
    localContext:
      "Richmond borough attracts families and professionals who value period architecture and green space. Renovation here is often about modernising a characterful home without losing what made it special — sash windows restored rather than replaced, cornices preserved, lime mortar used where it should be.",
    faqs: [
      {
        question: "Do you have experience with listed buildings?",
        answer:
          "Yes. We have worked on Grade II listed properties in Richmond. Listed building consent adds complexity, but our team is experienced with heritage specifications including lime plastering, sash window restoration, and matching original materials.",
      },
      {
        question:
          "What type of loft conversion suits Richmond homes?",
        answer:
          "Most detached and semi-detached homes in Richmond suit a mansard or hip-to-gable conversion. Victorian terraces in Twickenham typically get an L-shape dormer. We assess the best option during your free site survey.",
      },
      {
        question: "Do you handle planning applications?",
        answer:
          "Yes. We prepare and submit planning applications and permitted development certificates as part of our service. We know the Richmond planning team's expectations well.",
      },
      {
        question: "Are you fully insured?",
        answer:
          "Yes — £2 million public liability insurance, employer's liability, and professional indemnity. Certificates available on request.",
      },
    ],
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    region: "GB-HNS",
    lat: 51.4685,
    lng: -0.3654,
    description:
      "Our home borough — we know every street. Roofing, brickwork, extensions and full refurbishments across Hounslow, Isleworth, Brentford, Feltham and Heston. Shorter travel times mean lower overheads and faster response for Hounslow clients.",
    subAreas: [
      "Hounslow",
      "Isleworth",
      "Brentford",
      "Feltham",
      "Heston",
      "Cranford",
    ],
    nearby: ["west-london", "twickenham-richmond"],
    propertyTypes:
      "Hounslow is predominantly 1930s semi-detached and terraced housing, post-war council stock, and newer developments around the Great West Quarter in Brentford. The older housing stock frequently needs roof repairs, repointing, and modernisation of ground-floor layouts.",
    typicalProjects:
      "Roofing and brickwork are our bread and butter in Hounslow — many 1930s properties need a full strip-and-reroof or chimney rebuild after 80+ years. We also deliver a high volume of single-storey rear extensions, converting compact kitchens into open-plan family spaces.",
    localContext:
      "Hounslow is a value market — homeowners here are typically spending to improve rather than move. A well-executed extension or loft conversion adds significant value relative to the cost, making it one of the strongest ROI areas in outer London.",
    faqs: [
      {
        question: "Being local, can you respond to emergencies?",
        answer:
          "Yes. Our yard is in Hounslow, so for urgent roofing repairs or storm damage we can often attend the same day. Call us on +44 7479 389 996.",
      },
      {
        question: "Do you offer free quotes in Hounslow?",
        answer:
          "Every quote is free, but for Hounslow clients we can often visit the same week you call. Being local means less scheduling overhead.",
      },
      {
        question:
          "My 1930s semi needs a full reroof — what should I expect?",
        answer:
          "Most 1930s semis need the existing tiles stripped, felt and battens replaced, and new tiles laid. We typically recommend concrete interlocking tiles or natural slate depending on budget. A standard semi reroof takes 5–8 working days.",
      },
      {
        question: "Do you provide a guarantee?",
        answer:
          "Every project comes with our 1-year workmanship guarantee. Roofing materials carry their own manufacturer warranties — typically 15–30 years depending on the tile.",
      },
    ],
  },
  {
    slug: "north-london",
    name: "North London",
    region: "GB-LND",
    lat: 51.5882,
    lng: -0.1543,
    description:
      "Loft conversions, extensions and structural work across North London — from L-shape dormers on Victorian terraces in Crouch End to double-storey rears in Barnet's 1930s semis and full refurbishments of Edwardian villas in Muswell Hill.",
    subAreas: [
      "Barnet",
      "Enfield",
      "Finchley",
      "Muswell Hill",
      "Crouch End",
      "Highgate",
    ],
    nearby: ["central-london", "west-london"],
    propertyTypes:
      "North London has enormous variety — grand Edwardian detached houses in Muswell Hill and Highgate, tight Victorian terraces in Crouch End and Finchley, sprawling 1930s semis across Barnet and Enfield. Each type demands a different approach to gaining space.",
    typicalProjects:
      "L-shape dormer loft conversions are the signature project in North London's Victorian terraces. In Muswell Hill and Highgate, we more often deliver full-house refurbishments and basement excavations. Barnet and Enfield clients typically want rear extensions and garage conversions.",
    localContext:
      "North London families face a classic dilemma — they love their neighbourhood and their children's school, but the house is too small. A well-designed loft conversion or extension lets them stay put. It's the most common brief we hear.",
    faqs: [
      {
        question:
          "Can you do an L-shape loft on a Victorian terrace?",
        answer:
          "Yes — it's our most common loft project across Crouch End, Finchley and Muswell Hill terraces. An L-shape dormer typically adds a double bedroom and en-suite bathroom, gaining 25–35sqm of usable floor space.",
      },
      {
        question:
          "Do you need planning permission for a loft conversion in Barnet?",
        answer:
          "Most loft conversions in Barnet fall under permitted development rights, meaning no planning application is needed. However, we always check and secure a Lawful Development Certificate to protect your investment.",
      },
      {
        question:
          "What's the typical cost of a loft conversion in North London?",
        answer:
          "An L-shape dormer loft in North London typically starts from £82k including VAT. The final price depends on the en-suite specification, staircase design and any structural complications. We provide a fixed-price quote after survey.",
      },
      {
        question: "How disruptive is a loft conversion?",
        answer:
          "Most of the work happens above you. The main disruption is during staircase installation (2–3 days) and first-fix electrical work. You can live in the house throughout — we protect all areas and clean up daily.",
      },
    ],
  },
  {
    slug: "south-west-london",
    name: "South West London",
    region: "GB-LND",
    lat: 51.4416,
    lng: -0.2065,
    description:
      "Side-returns, rear extensions and full refurbishments across South West London's most desirable postcodes. From Clapham's Victorian terraces to Wimbledon's Edwardian villas — precision building for homeowners who expect the best.",
    subAreas: [
      "Wimbledon",
      "Putney",
      "Wandsworth",
      "Clapham",
      "Battersea",
      "Balham",
    ],
    nearby: ["central-london", "twickenham-richmond", "hounslow"],
    propertyTypes:
      "South West London is dominated by Victorian terraced housing with untapped side-return potential, Edwardian semis and detached villas in Wimbledon, and converted mansion flats in Battersea and Clapham. The classic project here is opening up the ground floor.",
    typicalProjects:
      "Side-return extensions are the defining project of South West London — knocking through the galley kitchen, extending into the side return, and creating an open-plan kitchen-diner with roof lights and bifold doors to the garden. We also deliver a high volume of loft conversions in Wandsworth and Battersea terraces.",
    localContext:
      "South West London is one of the most competitive renovation markets in the city. Homeowners here are design-conscious, often working with architects, and expect a contractor who can execute complex details — flush thresholds, shadow gaps, concealed services. That's exactly what we do.",
    faqs: [
      {
        question: "What is a side-return extension?",
        answer:
          "A side-return extension fills the narrow alley that runs along the side of a Victorian terrace. It's typically 1–1.5 metres wide but transforms a cramped galley kitchen into a wide, light-filled open-plan space. Most are permitted development, so no planning needed.",
      },
      {
        question: "Do you work with architects?",
        answer:
          "Regularly. Many South West London clients come to us with architect-designed plans. We're comfortable with complex specifications and can value-engineer details that keep the design intent while managing budget.",
      },
      {
        question: "How much does a side-return extension cost?",
        answer:
          "A typical side-return infill with new kitchen in SW London starts from around £95k–£130k depending on length, specification, and whether structural steel is needed. We provide an exact fixed-price quote after survey.",
      },
      {
        question: "Can you do basement conversions?",
        answer:
          "Yes. We have completed basement excavations in Wandsworth and Clapham. Basement work requires specialist waterproofing (we use Type C cavity drain membranes) and structural underpinning — both within our capability.",
      },
    ],
  },
  {
    slug: "central-london",
    name: "Central London",
    region: "GB-LND",
    lat: 51.5074,
    lng: -0.1278,
    description:
      "High-specification refurbishments and structural work in Central London's most prestigious postcodes. From lateral apartment reconfigurations in Mayfair to full townhouse renovations in Chelsea — delivered with the discretion and precision these properties demand.",
    subAreas: [
      "Westminster",
      "Kensington",
      "Chelsea",
      "Mayfair",
      "Marylebone",
      "Belgravia",
    ],
    nearby: ["west-london", "south-west-london", "north-london"],
    propertyTypes:
      "Central London is defined by period townhouses (Georgian and Victorian), mansion block apartments, mews houses, and high-end lateral flats. These properties demand specialist knowledge — lime plastering, heritage joinery, lead roofing, and working within the constraints of listed building consent.",
    typicalProjects:
      "Full interior refurbishments are our primary scope in Central London — stripping back to shell, replastering in lime, rewiring, replumbing, and fitting out to an exacting specification. We also deliver structural alterations for lateral conversions, roof terrace construction, and heritage roof repairs using Code 5 lead.",
    localContext:
      "Central London projects require a different discipline. Access is restricted, skips need permits, deliveries must be timed precisely, and building management imposes strict working hours. We're experienced with all of this — our site managers coordinate logistics so the build runs quietly and on schedule.",
    faqs: [
      {
        question:
          "Can you work within building management restrictions?",
        answer:
          "Yes. Most Central London mansion blocks and estates have strict rules on working hours, deliveries, noise, and use of communal areas. We submit a detailed logistics plan to building management before starting and assign a site manager to coordinate compliance.",
      },
      {
        question:
          "Do you have experience with listed buildings in Central London?",
        answer:
          "We have completed work on listed properties in Kensington and Marylebone. We understand the requirements around heritage materials, reversible alterations, and coordination with conservation officers.",
      },
      {
        question:
          "How do you handle parking and deliveries in Central London?",
        answer:
          "We arrange parking bay suspensions with the local council, schedule deliveries for early morning or off-peak slots, and use smaller vehicles where needed. All materials are staged to minimise disruption to neighbours.",
      },
      {
        question:
          "What specification do you typically work to in Central London?",
        answer:
          "Our Central London projects are typically specified to a high residential standard — lime plaster, bespoke joinery, underfloor heating throughout, integrated AV/lighting control, and premium sanitaryware. We work to whatever specification you and your designer set.",
      },
    ],
  },
];

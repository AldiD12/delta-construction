export interface Location {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  subAreas: string[];
  nearby: string[]; // slugs of nearby locations
}

export const locations: Location[] = [
  {
    slug: "west-london",
    name: "West London",
    region: "GB-LND",
    lat: 51.5074,
    lng: -0.2901,
    description:
      "Premium construction services across West London — extensions, loft conversions, roofing and brickwork in Ealing, Chiswick, Hammersmith and beyond.",
    subAreas: [
      "Ealing",
      "Chiswick",
      "Hammersmith",
      "Shepherd's Bush",
      "Acton",
      "Brentford",
    ],
    nearby: ["hounslow", "twickenham-richmond", "central-london"],
  },
  {
    slug: "twickenham-richmond",
    name: "Twickenham & Richmond",
    region: "GB-RIC",
    lat: 51.4479,
    lng: -0.3254,
    description:
      "Extensions, lofts and refurbishments in Twickenham, Richmond, Kingston and Hampton. Period-property specialists with conservation-area experience.",
    subAreas: [
      "Twickenham",
      "Richmond",
      "Kingston",
      "Hampton",
      "Teddington",
      "Strawberry Hill",
    ],
    nearby: ["west-london", "hounslow", "south-west-london"],
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    region: "GB-HNS",
    lat: 51.4685,
    lng: -0.3654,
    description:
      "Our home borough. Roofing, brickwork, extensions and full refurbishments across Hounslow, Isleworth, Brentford, Feltham and Heston.",
    subAreas: [
      "Hounslow",
      "Isleworth",
      "Brentford",
      "Feltham",
      "Heston",
      "Cranford",
    ],
    nearby: ["west-london", "twickenham-richmond"],
  },
  {
    slug: "north-london",
    name: "North London",
    region: "GB-LND",
    lat: 51.5882,
    lng: -0.1543,
    description:
      "Loft conversions, extensions and structural work across North London — Barnet, Enfield, Finchley, Muswell Hill and Crouch End.",
    subAreas: [
      "Barnet",
      "Enfield",
      "Finchley",
      "Muswell Hill",
      "Crouch End",
      "Highgate",
    ],
    nearby: ["central-london", "west-london"],
  },
  {
    slug: "south-west-london",
    name: "South West London",
    region: "GB-LND",
    lat: 51.4416,
    lng: -0.2065,
    description:
      "Side-returns, rear extensions and full refurbishments in Wimbledon, Putney, Wandsworth, Clapham and Battersea.",
    subAreas: [
      "Wimbledon",
      "Putney",
      "Wandsworth",
      "Clapham",
      "Battersea",
      "Balham",
    ],
    nearby: ["central-london", "twickenham-richmond", "hounslow"],
  },
  {
    slug: "central-london",
    name: "Central London",
    region: "GB-LND",
    lat: 51.5074,
    lng: -0.1278,
    description:
      "High-specification refurbishments and structural work in Westminster, Kensington, Chelsea, Mayfair and Marylebone.",
    subAreas: [
      "Westminster",
      "Kensington",
      "Chelsea",
      "Mayfair",
      "Marylebone",
      "Belgravia",
    ],
    nearby: ["west-london", "south-west-london", "north-london"],
  },
];

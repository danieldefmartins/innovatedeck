export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  location?: string;
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Composite Decks",
  "Wood Decks",
  "Pergolas",
  "Porches",
  "Outdoor Kitchens",
  "Railings",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const portfolioImages: PortfolioImage[] = [
  {
    id: "portfolio-01",
    src: "",
    alt: "Multi-level Trex Transcend composite deck with built-in bench seating in Hingham, MA",
    category: "Composite Decks",
    location: "Hingham, MA",
  },
  {
    id: "portfolio-02",
    src: "",
    alt: "Natural ipe hardwood deck with herringbone inlay pattern overlooking the ocean in Marblehead, MA",
    category: "Wood Decks",
    location: "Marblehead, MA",
  },
  {
    id: "portfolio-03",
    src: "",
    alt: "Custom cedar pergola with string lights and outdoor dining area in Wellesley, MA",
    category: "Pergolas",
    location: "Wellesley, MA",
  },
  {
    id: "portfolio-04",
    src: "",
    alt: "Three-season screened porch with tongue-and-groove cedar ceiling in Chatham, MA",
    category: "Porches",
    location: "Chatham, MA",
  },
  {
    id: "portfolio-05",
    src: "",
    alt: "Built-in outdoor kitchen with granite countertops, grill station, and bar seating in Newport, RI",
    category: "Outdoor Kitchens",
    location: "Newport, RI",
  },
  {
    id: "portfolio-06",
    src: "",
    alt: "Stainless steel cable railing system with LED post cap lighting on composite deck in Nashua, NH",
    category: "Railings",
    location: "Nashua, NH",
  },
  {
    id: "portfolio-07",
    src: "",
    alt: "Large TimberTech composite deck with fire pit area and lounge furniture in Andover, MA",
    category: "Composite Decks",
    location: "Andover, MA",
  },
  {
    id: "portfolio-08",
    src: "",
    alt: "Western red cedar deck with custom planter boxes and built-in storage in Brookline, MA",
    category: "Wood Decks",
    location: "Brookline, MA",
  },
  {
    id: "portfolio-09",
    src: "",
    alt: "Motorized louvered pergola over outdoor living area with ceiling fan in Newton, MA",
    category: "Pergolas",
    location: "Newton, MA",
  },
  {
    id: "portfolio-10",
    src: "",
    alt: "Four-season enclosed porch with sliding glass panels and radiant floor heating in Portsmouth, NH",
    category: "Porches",
    location: "Portsmouth, NH",
  },
  {
    id: "portfolio-11",
    src: "",
    alt: "Outdoor kitchen island with built-in smoker, sink, and stone veneer base in Plymouth, MA",
    category: "Outdoor Kitchens",
    location: "Plymouth, MA",
  },
  {
    id: "portfolio-12",
    src: "",
    alt: "Tempered glass panel railing system on elevated waterfront deck in Rye, NH",
    category: "Railings",
    location: "Rye, NH",
  },
];

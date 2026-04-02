// ---------------------------------------------------------------------------
// Centralized image references for the Innovate Deck website.
// All images are real project photos from /images/portfolio/
// ---------------------------------------------------------------------------

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  location: string;
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Composite Decks",
  "Wood Decks",
  "Railings & Stairs",
  "Waterfront",
  "Outdoor Living",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

// ---------------------------------------------------------------------------
// Hero background images used across landing pages
// ---------------------------------------------------------------------------
export const HERO_IMAGES: Record<string, string> = {
  home: "/images/portfolio/deck-30.jpg",         // Pool deck, landscape - much better hero
  services: "/images/portfolio/deck-15.jpg",     // Beautiful composite stairs with white risers
  portfolio: "/images/portfolio/deck-45.jpeg",   // Waterfront deck at sunset
  about: "/images/portfolio/deck-40.jpeg",       // Waterfront deck with cable railings, sunset
  contact: "/images/portfolio/deck-100.jpg",     // Finished wood deck with furniture, lush backyard
  cta: "/images/portfolio/deck-98.jpg",          // Ipe deck with furniture
  story: "/images/portfolio/deck-90.jpg",        // Ipe herringbone pattern detail - craftsmanship
  blog: "/images/portfolio/deck-30.jpg",         // Pool deck with wood railings
};

// ---------------------------------------------------------------------------
// Area landing page hero images (keyed by area slug)
// ---------------------------------------------------------------------------
export const AREA_IMAGES: Record<string, string> = {
  boston: "/images/portfolio/deck-25.jpeg",           // Rooftop deck with harbor view
  "north-shore": "/images/portfolio/deck-45.jpeg",   // Waterfront sunset
  "south-shore": "/images/portfolio/deck-80.jpeg",   // Gray composite, coastal marshland
  "cape-cod": "/images/portfolio/deck-40.jpeg",      // Waterfront cable railings
  metrowest: "/images/portfolio/deck-100.jpg",       // Wood deck with furniture, backyard
  worcester: "/images/portfolio/deck-5.jpg",         // Composite with white PVC railings
  "merrimack-valley": "/images/portfolio/deck-105.jpg", // Deck with wide stairs
  "new-hampshire": "/images/portfolio/deck-70.jpeg", // Ipe with pergola
  "seacoast-nh": "/images/portfolio/deck-30.jpg",    // Pool deck
  "rhode-island": "/images/portfolio/deck-85.jpeg",  // Dark composite with cable railings
  "southern-maine": "/images/portfolio/deck-60.jpeg", // Elevated deck with cable railings
};

// ---------------------------------------------------------------------------
// Blog post images (keyed by blog post slug)
// ---------------------------------------------------------------------------
export const BLOG_IMAGES: Record<string, string> = {
  "composite-vs-wood-decking": "/images/portfolio/deck-10.jpg",         // Composite stairs
  "deck-cost-massachusetts-2026": "/images/portfolio/deck-104.jpg",     // Composite stairs with white risers
  "deck-permit-massachusetts": "/images/portfolio/deck-55.jpeg",        // Elevated deck construction
  "best-deck-materials-new-england": "/images/portfolio/deck-90.jpg",   // Ipe herringbone detail
  "deck-design-ideas-small-backyards": "/images/portfolio/deck-65.jpeg", // Gray composite, cable railings
};

// ---------------------------------------------------------------------------
// Service card images (keyed by service slug)
// ---------------------------------------------------------------------------
export const SERVICE_IMAGES: Record<string, string> = {
  "composite-decking": "/images/portfolio/deck-5.jpg",           // Composite deck with white PVC railings
  "wood-decking": "/images/portfolio/deck-1.jpeg",               // Mahogany/ipe railing on hardwood deck
  "deck-repair-restoration": "/images/portfolio/deck-25.jpeg",   // Rooftop deck with harbor view
  "pergolas-shade-structures": "/images/portfolio/deck-70.jpeg", // Ipe deck with pergola overhead
  "porches-screened-porches": "/images/portfolio/deck-35.jpeg",  // Deck with residential setting
  "outdoor-kitchens-living": "/images/portfolio/deck-120.jpeg",  // Patio with pavers and seating
  "railings-stairs": "/images/portfolio/deck-50.jpeg",           // Deck with cable railings
};

// ---------------------------------------------------------------------------
// Portfolio gallery images (full data for the Portfolio page)
// ---------------------------------------------------------------------------
export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    id: "portfolio-01",
    src: "/images/portfolio/deck-70.jpeg",
    alt: "Ipe hardwood deck with custom pergola and cable railings on modern home",
    title: "Ipe Deck with Pergola",
    category: "Wood Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-02",
    src: "/images/portfolio/deck-45.jpeg",
    alt: "Waterfront deck with cable railings at sunset over the lake",
    title: "Waterfront Sunset Deck",
    category: "Waterfront",
    location: "Massachusetts",
  },
  {
    id: "portfolio-03",
    src: "/images/portfolio/deck-90.jpg",
    alt: "Ipe hardwood deck with herringbone inlay pattern and teak furniture",
    title: "Ipe Herringbone Deck",
    category: "Wood Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-04",
    src: "/images/portfolio/deck-5.jpg",
    alt: "Composite deck with white PVC railings and gazebo",
    title: "Composite Deck & Gazebo",
    category: "Composite Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-05",
    src: "/images/portfolio/deck-15.jpg",
    alt: "Composite deck stairs with white risers and paver walkway",
    title: "Custom Deck Stairs",
    category: "Railings & Stairs",
    location: "Massachusetts",
  },
  {
    id: "portfolio-06",
    src: "/images/portfolio/deck-30.jpg",
    alt: "Wood deck with black metal balusters overlooking pool area",
    title: "Poolside Deck",
    category: "Wood Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-07",
    src: "/images/portfolio/deck-40.jpeg",
    alt: "Cedar deck with cable railings on waterfront property at sunset",
    title: "Waterfront Cable Railing Deck",
    category: "Waterfront",
    location: "Massachusetts",
  },
  {
    id: "portfolio-08",
    src: "/images/portfolio/deck-50.jpeg",
    alt: "Pressure-treated deck with cable railing system on residential home",
    title: "Cable Railing System",
    category: "Railings & Stairs",
    location: "Massachusetts",
  },
  {
    id: "portfolio-09",
    src: "/images/portfolio/deck-60.jpeg",
    alt: "Elevated deck with cable railings and wood post system",
    title: "Elevated Cable Railing Deck",
    category: "Railings & Stairs",
    location: "Massachusetts",
  },
  {
    id: "portfolio-10",
    src: "/images/portfolio/deck-80.jpeg",
    alt: "Gray composite deck with black metal posts on coastal property",
    title: "Coastal Composite Deck",
    category: "Composite Decks",
    location: "Cape Cod, MA",
  },
  {
    id: "portfolio-11",
    src: "/images/portfolio/deck-100.jpg",
    alt: "Wood deck with traditional railings and outdoor furniture in lush backyard",
    title: "Backyard Wood Deck",
    category: "Wood Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-12",
    src: "/images/portfolio/deck-95.jpg",
    alt: "Ipe hardwood stairs with cable railings descending to green lawn",
    title: "Ipe Stairs & Cable Railings",
    category: "Railings & Stairs",
    location: "Massachusetts",
  },
  {
    id: "portfolio-13",
    src: "/images/portfolio/deck-85.jpeg",
    alt: "Dark composite deck with cable railing system and neighborhood views",
    title: "Composite Deck with Cable Railings",
    category: "Composite Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-14",
    src: "/images/portfolio/deck-65.jpeg",
    alt: "Gray composite deck with white cable railing and wood cap rail",
    title: "Gray Composite & Cable Railing",
    category: "Composite Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-15",
    src: "/images/portfolio/deck-75.jpeg",
    alt: "Multi-level white deck structure with stairs and painted railings",
    title: "Multi-Level Deck Structure",
    category: "Railings & Stairs",
    location: "Massachusetts",
  },
  {
    id: "portfolio-16",
    src: "/images/portfolio/deck-120.jpeg",
    alt: "Patio area with pavers, composite privacy fence, and outdoor seating",
    title: "Patio & Privacy Fence",
    category: "Outdoor Living",
    location: "Massachusetts",
  },
  {
    id: "portfolio-17",
    src: "/images/portfolio/deck-104.jpg",
    alt: "Composite deck stairs with elegant white risers and paver patio",
    title: "Composite Stairs & Patio",
    category: "Composite Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-18",
    src: "/images/portfolio/deck-105.jpg",
    alt: "Wood deck with wide stairs and outdoor dining furniture",
    title: "Deck with Wide Stairs",
    category: "Wood Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-19",
    src: "/images/portfolio/deck-55.jpeg",
    alt: "Elevated deck with cable railings on waterfront home",
    title: "Elevated Waterfront Deck",
    category: "Waterfront",
    location: "Massachusetts",
  },
  {
    id: "portfolio-20",
    src: "/images/portfolio/deck-25.jpeg",
    alt: "Rooftop deck with dark composite railings and harbor city views",
    title: "Rooftop Deck with Harbor Views",
    category: "Composite Decks",
    location: "Boston, MA",
  },
  {
    id: "portfolio-21",
    src: "/images/portfolio/deck-20.jpg",
    alt: "Wood deck with traditional railings, wicker furniture under construction",
    title: "Wood Deck & Railings",
    category: "Wood Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-22",
    src: "/images/portfolio/deck-35.jpeg",
    alt: "Composite deck with cable railings on a charming residential property",
    title: "Residential Cable Railing Deck",
    category: "Composite Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-23",
    src: "/images/portfolio/deck-10.jpg",
    alt: "Composite deck stairs with white PVC railings and mixed balusters",
    title: "Composite Stairs & Railings",
    category: "Composite Decks",
    location: "Massachusetts",
  },
  {
    id: "portfolio-24",
    src: "/images/portfolio/deck-1.jpeg",
    alt: "Close-up of mahogany wood railing with balusters on hardwood deck",
    title: "Mahogany Railing Detail",
    category: "Wood Decks",
    location: "Massachusetts",
  },
];

// ---------------------------------------------------------------------------
// Miscellaneous / shared images
// ---------------------------------------------------------------------------
export const MISC_IMAGES = {
  aboutTeam: "/images/portfolio/deck-100.jpg",
  ctaBackground: "/images/portfolio/deck-95.jpg",
  testimonialsBg: "/images/portfolio/deck-70.jpeg",
  notFound: "/images/portfolio/deck-40.jpeg",
  ogDefault: "/images/portfolio/deck-70.jpeg",
} as const;

// ---------------------------------------------------------------------------
// Helpers with fallbacks
// ---------------------------------------------------------------------------
export function getServiceImage(slug: string): string {
  return SERVICE_IMAGES[slug] ?? HERO_IMAGES.home;
}

export function getAreaImage(slug: string): string {
  return AREA_IMAGES[slug] ?? HERO_IMAGES.home;
}

export function getBlogImage(slug: string): string {
  return BLOG_IMAGES[slug] ?? HERO_IMAGES.blog;
}

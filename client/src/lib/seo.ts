// Per-route <title>, description and JSON-LD. Used by the build-time prerender
// (scripts/prerender.mjs) and by the client router when the visitor navigates.
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { blogPosts } from "@/data/blog";
import { COMPANY } from "@/lib/constants";

export const SITE_URL = "https://innovatedeck.com";
const OG_IMAGE = `${SITE_URL}/images/portfolio/deck-30.jpg`;

type Meta = { title: string; description: string };

const serviceOG: Record<string, Meta> = {
  "composite-decking": {
    title: "Composite Decking | Trex, TimberTech & Azek | Innovate Deck",
    description: "Premium composite decking installation in New England. Trex, TimberTech & Azek certified. Low maintenance, beautiful results. Free estimates.",
  },
  "wood-decking": {
    title: "Wood Decking | Cedar, Ipe & Pressure-Treated | Innovate Deck",
    description: "Natural wood deck construction — pressure-treated, cedar, ipe, and mahogany. Expert craftsmanship for New England homes. Free estimates.",
  },
  "deck-repair-restoration": {
    title: "Deck Repair & Restoration | Innovate Deck",
    description: "Professional deck repair, board replacement, structural fixes, and complete restoration. Serving MA, NH, RI & ME. Free assessments.",
  },
  "pergolas-shade-structures": {
    title: "Pergolas & Shade Structures | Innovate Deck",
    description: "Custom pergolas, shade structures, and outdoor living additions. Attached, freestanding, and louvered options. Free design consultations.",
  },
  "porches-screened-porches": {
    title: "Porches & Screened Porches | 3 & 4 Season | Innovate Deck",
    description: "Custom porch construction — screened porches, 3-season rooms, and 4-season enclosures. Extend your living space year-round. Free estimates.",
  },
  "outdoor-kitchens-living": {
    title: "Outdoor Kitchens & Living Spaces | Innovate Deck",
    description: "Custom outdoor kitchens, bars, counters, and fire features. Create your dream entertainment space. Serving New England.",
  },
  "railings-stairs": {
    title: "Deck Railings & Stairs | Cable, Composite & Aluminum | Innovate Deck",
    description: "Premium deck railing and stair installation. Cable, composite, aluminum, and wood options. Code-compliant, beautiful results.",
  },
};

const staticOG: Record<string, Meta> = {
  "/services": {
    title: "Deck Building Services | Innovate Deck — MA, NH, RI & ME",
    description: "Full range of deck building services — composite decking, wood decks, pergolas, porches, outdoor kitchens, railings & more. Free estimates.",
  },
  "/portfolio": {
    title: "Deck Building Portfolio | Innovate Deck — See Our Work",
    description: "Browse our portfolio of custom deck builds, pergolas, porches, and outdoor living spaces across New England.",
  },
  "/about": {
    title: "About Innovate Deck | 25+ Years of Premium Deck Building",
    description: "Learn about Innovate Deck — 25+ years building premium decks and outdoor living spaces across MA, NH, RI & ME. Licensed & insured.",
  },
  "/contact": {
    title: "Contact Innovate Deck | Free Estimates | (781) 528-0069",
    description: "Get a free deck building estimate. Contact Innovate Deck — serving MA, NH, RI & Southern Maine. Call (781) 528-0069.",
  },
  "/blog": {
    title: "Deck Building Blog | Expert Advice & Guides | Innovate Deck",
    description: "Expert deck building advice, cost guides, material comparisons, and design inspiration for New England homeowners.",
  },
};

staticOG["/"] = {
  title: "Innovate Deck | Deck Builders in MA, NH, RI & Southern Maine",
  description:
    "Custom composite and wood decks, deck repair, railings, porches and pergolas across Massachusetts, New Hampshire, Rhode Island and Southern Maine. Free estimates.",
};
staticOG["/areas"] = {
  title: "Areas We Serve | Deck Builders in MA, NH, RI & ME | Innovate Deck",
  description:
    "Innovate Deck builds and repairs decks across Greater Boston, the North and South Shore, Cape Cod, MetroWest, Worcester, New Hampshire, Rhode Island and Southern Maine.",
};
staticOG["/privacy"] = {
  title: "Privacy Policy | Innovate Deck",
  description: "How Innovate Deck handles estimate requests, contact details and optional SMS text message consent.",
};
staticOG["/terms"] = {
  title: "Terms & Conditions and SMS Terms | Innovate Deck",
  description: "Website terms and the optional SMS text messaging program terms for Innovate Deck customers.",
};

export type RouteSeo = Meta & { path: string; type: "website" | "article"; jsonLd: object[]; found: boolean };

const business = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: `${SITE_URL}/`,
  telephone: `+${COMPANY.phone.tel}`,
  email: COMPANY.email,
  image: OG_IMAGE,
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Massachusetts" },
    { "@type": "State", name: "New Hampshire" },
    { "@type": "State", name: "Rhode Island" },
    { "@type": "State", name: "Maine" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
  ],
};

function crumbs(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"] as [string, string], ...items].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
};

const STATIC_LABELS: Record<string, string> = {
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/areas": "Areas We Serve",
  "/privacy": "Privacy Policy",
  "/terms": "Terms & Conditions",
};

export function seoFor(rawPath: string): RouteSeo {
  const path = rawPath.replace(/\/+$/, "") || "/";
  const base = { path, type: "website" as const, found: true };
  if (staticOG[path]) {
    const jsonLd: object[] = [business];
    if (path !== "/") jsonLd.push(crumbs([[STATIC_LABELS[path], path]]));
    return { ...base, ...staticOG[path], jsonLd };
  }
  let m = path.match(/^\/services\/([^/]+)$/);
  if (m) {
    const s = services.find((x) => x.slug === m![1]);
    if (s) {
      const meta = serviceOG[s.slug] ?? { title: `${s.title} | Innovate Deck`, description: s.shortDescription };
      return {
        ...base,
        ...meta,
        jsonLd: [
          business,
          crumbs([["Services", "/services"], [s.title, path]]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.shortDescription,
            serviceType: s.title,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: business.areaServed,
            url: `${SITE_URL}${path}`,
          },
        ],
      };
    }
  }
  m = path.match(/^\/areas\/([^/]+)$/);
  if (m) {
    const a = areas.find((x) => x.slug === m![1]);
    if (a)
      return {
        ...base,
        title: a.metaTitle,
        description: a.metaDescription,
        jsonLd: [business, crumbs([["Areas We Serve", "/areas"], [a.name, path]])],
      };
  }
  m = path.match(/^\/blog\/([^/]+)$/);
  if (m) {
    const b = blogPosts.find((x) => x.slug === m![1]);
    if (b)
      return {
        ...base,
        type: "article",
        title: b.metaTitle,
        description: b.metaDescription,
        jsonLd: [
          business,
          crumbs([["Blog", "/blog"], [b.title, path]]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: b.title,
            description: b.metaDescription,
            datePublished: b.date,
            dateModified: b.date,
            image: OG_IMAGE,
            mainEntityOfPage: `${SITE_URL}${path}`,
            author: { "@type": "Organization", name: COMPANY.name, url: `${SITE_URL}/` },
            publisher: { "@id": `${SITE_URL}/#business` },
          },
        ],
      };
  }
  return {
    path,
    type: "website",
    found: false,
    title: "Page Not Found | Innovate Deck",
    description: "This page doesn't exist. Find deck building services, areas we serve, or get a free estimate.",
    jsonLd: [],
  };
};

/** Every prerendered route. */
export function allRoutes(): string[] {
  return [
    "/",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
    "/blog",
    "/areas",
    "/privacy",
    "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...areas.map((a) => `/areas/${a.slug}`),
    ...blogPosts.map((b) => `/blog/${b.slug}`),
  ];
};

export { OG_IMAGE };

import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Read index.html at startup
const indexPath = path.join(__dirname, "public", "index.html");
let indexHtml = "";
try {
  indexHtml = fs.readFileSync(indexPath, "utf-8");
} catch {
  console.error("Could not read index.html — build may not be complete");
}

// OG tag data
const SITE_URL = "https://innovatedeck.com";
const DEFAULT_OG = {
  title: "Innovate Deck — Premium Deck Building | MA, NH, RI & ME",
  description: "New England's trusted deck builder with 25+ years of experience. Composite & wood decking, pergolas, porches, outdoor kitchens. Licensed & insured. Free estimates.",
  image: "",
};

const serviceOG: Record<string, { title: string; description: string }> = {
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
  "deck-staining-sealing": {
    title: "Deck Staining & Sealing | Protect Your Investment | Innovate Deck",
    description: "Professional deck staining, sealing, and maintenance services. Protect your deck from New England weather. Free estimates.",
  },
};

const areaOG: Record<string, { title: string; description: string }> = {
  boston: {
    title: "Boston Deck Builder | Innovate Deck — 25+ Years Experience",
    description: "Greater Boston's trusted deck builder. Custom composite & wood decks, pergolas, porches. Licensed & insured. Free estimates. (781) 528-0069.",
  },
  "north-shore": {
    title: "North Shore MA Deck Builder | Salem, Marblehead, Beverly | Innovate Deck",
    description: "Deck building on the North Shore — Salem, Marblehead, Beverly, Gloucester & more. 25+ years. Licensed & insured. Free estimates.",
  },
  "south-shore": {
    title: "South Shore MA Deck Builder | Hingham, Scituate, Plymouth | Innovate Deck",
    description: "Custom decks on the South Shore — Hingham, Scituate, Duxbury, Plymouth. Coastal-grade materials. Free estimates. (781) 528-0069.",
  },
  "cape-cod": {
    title: "Cape Cod Deck Builder | Innovate Deck — Licensed & Insured",
    description: "Cape Cod's premier deck builder. Salt-resistant materials, coastal expertise. Barnstable, Falmouth, Chatham & more. Free estimates.",
  },
  metrowest: {
    title: "MetroWest MA Deck Builder | Framingham, Natick, Wellesley | Innovate Deck",
    description: "MetroWest deck building — Framingham, Natick, Wellesley, Needham, Newton. Premium materials, expert craftsmanship. Free estimates.",
  },
  worcester: {
    title: "Worcester MA Deck Builder | Innovate Deck — 25+ Years",
    description: "Worcester area deck builder. Custom composite & wood decks, pergolas, outdoor living. Licensed & insured. Free estimates.",
  },
  "merrimack-valley": {
    title: "Merrimack Valley Deck Builder | Lowell, Andover, Haverhill | Innovate Deck",
    description: "Deck building in the Merrimack Valley — Lowell, Lawrence, Andover, Haverhill. 25+ years experience. Free estimates.",
  },
  "new-hampshire": {
    title: "NH Deck Builder | Innovate Deck — Licensed & Insured",
    description: "New Hampshire's trusted deck builder. Manchester, Nashua, Concord, Portsmouth. Composite & wood decks. Free estimates.",
  },
  "seacoast-nh": {
    title: "Seacoast NH Deck Builder | Portsmouth, Hampton, Exeter | Innovate Deck",
    description: "Custom decks on the NH Seacoast — Portsmouth, Hampton, Exeter, Dover. Coastal-grade materials. Free estimates.",
  },
  "rhode-island": {
    title: "Rhode Island Deck Builder | Providence, Newport | Innovate Deck",
    description: "Rhode Island deck builder — Providence, Newport, Warwick, Cranston. 25+ years. Licensed & insured. Free estimates.",
  },
  "southern-maine": {
    title: "Southern Maine Deck Builder | Portland, Kennebunk | Innovate Deck",
    description: "Southern Maine deck building — Portland, Kennebunk, York, Kittery. Weather-resistant materials. Free estimates.",
  },
};

const blogOG: Record<string, { title: string; description: string }> = {
  "composite-vs-wood-decking": {
    title: "Composite vs Wood Decking: Which Is Right for New England? | Innovate Deck",
    description: "Complete comparison of composite vs wood decking for New England homes. Cost, maintenance, durability & our expert recommendation.",
  },
  "deck-cost-massachusetts-2026": {
    title: "How Much Does a Deck Cost in MA? 2026 Price Guide | Innovate Deck",
    description: "Detailed 2026 deck cost guide for Massachusetts. Per-square-foot pricing by material, region-specific rates, and money-saving tips.",
  },
  "deck-permit-massachusetts": {
    title: "Deck Permits in Massachusetts: Complete Guide | Innovate Deck",
    description: "Everything you need to know about deck building permits in MA. Requirements, costs, process, and building code compliance.",
  },
  "best-deck-materials-new-england": {
    title: "Best Deck Materials for New England Weather | Innovate Deck",
    description: "Expert guide to choosing deck materials that withstand New England's harsh climate. Ranked by durability, maintenance & value.",
  },
  "deck-design-ideas-small-backyards": {
    title: "Top 10 Deck Design Ideas for Small Backyards | Innovate Deck",
    description: "Creative deck design ideas to maximize small outdoor spaces. Multi-level, built-in seating, floating decks & more.",
  },
};

const staticOG: Record<string, { title: string; description: string }> = {
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

function buildOGTags(ogData: { title: string; description: string; image?: string }, url: string): string {
  const image = ogData.image || DEFAULT_OG.image;
  return `
    <title>${ogData.title}</title>
    <meta name="description" content="${ogData.description}" />
    <meta property="og:title" content="${ogData.title}" />
    <meta property="og:description" content="${ogData.description}" />
    <meta property="og:url" content="${SITE_URL}${url}" />
    <meta property="og:type" content="website" />
    ${image ? `<meta property="og:image" content="${image}" />` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ogData.title}" />
    <meta name="twitter:description" content="${ogData.description}" />
    ${image ? `<meta name="twitter:image" content="${image}" />` : ""}
  `;
}

// Decode URI middleware
app.use((req, res, next) => {
  try {
    decodeURIComponent(req.path);
    next();
  } catch {
    res.status(400).send("Bad Request");
  }
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// All routes — inject OG tags
app.get("*", (req, res) => {
  if (!indexHtml) {
    return res.status(500).send("Server not ready");
  }

  let ogData = DEFAULT_OG;
  const reqPath = req.path;

  // Match route to OG data
  if (staticOG[reqPath]) {
    ogData = { ...DEFAULT_OG, ...staticOG[reqPath] };
  } else if (reqPath.startsWith("/services/")) {
    const slug = reqPath.replace("/services/", "");
    if (serviceOG[slug]) {
      ogData = { ...DEFAULT_OG, ...serviceOG[slug] };
    }
  } else if (reqPath.startsWith("/areas/")) {
    const slug = reqPath.replace("/areas/", "");
    if (areaOG[slug]) {
      ogData = { ...DEFAULT_OG, ...areaOG[slug] };
    }
  } else if (reqPath.startsWith("/blog/")) {
    const slug = reqPath.replace("/blog/", "");
    if (blogOG[slug]) {
      ogData = { ...DEFAULT_OG, ...blogOG[slug] };
    }
  }

  const ogTags = buildOGTags(ogData, reqPath);

  // Inject OG tags and analytics before </head>
  const html = indexHtml.replace(
    "</head>",
    `${ogTags}\n</head>`
  );

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Innovate Deck server running on port ${PORT}`);
});

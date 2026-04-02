export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "composite-vs-wood-decking",
    title: "Composite vs Wood Decking: Which Is Right for Your New England Home?",
    excerpt:
      "Choosing between composite and wood decking is one of the biggest decisions you'll make when building a new deck. We break down the pros, cons, costs, and long-term value of each option so you can make the right choice for your home, lifestyle, and budget in the New England climate.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Materials",
    metaTitle: "Composite vs Wood Decking in New England | 2026 Comparison Guide | Innovate Deck",
    metaDescription:
      "Composite vs wood decking: which is better for New England homes? Compare Trex, TimberTech, cedar, ipe costs, maintenance, lifespan & ROI. Expert guide from Innovate Deck.",
  },
  {
    slug: "deck-cost-massachusetts-2026",
    title: "How Much Does a Deck Cost in Massachusetts? 2026 Price Guide",
    excerpt:
      "Wondering what a new deck costs in Massachusetts? From budget-friendly pressure-treated builds to premium composite and hardwood installations, we break down the real costs per square foot, including materials, labor, permits, and design. Updated for 2026 pricing across the Greater Boston area.",
    date: "2026-02-28",
    readTime: "10 min read",
    category: "Cost & Planning",
    metaTitle: "Deck Cost in Massachusetts 2026 | Price Per Sq Ft Guide | Innovate Deck",
    metaDescription:
      "How much does a deck cost in Massachusetts in 2026? Detailed pricing for composite, wood, and hardwood decks. Cost per square foot, permits, and labor. Free estimates available.",
  },
  {
    slug: "deck-permit-massachusetts",
    title: "Do You Need a Permit to Build a Deck in MA? Complete Guide",
    excerpt:
      "Building a deck in Massachusetts almost always requires a building permit -- but the rules vary by town, deck size, and height. We explain Massachusetts deck permit requirements, what happens if you build without one, the inspection process, and how we handle permitting for every project we build.",
    date: "2026-02-10",
    readTime: "6 min read",
    category: "Permits & Regulations",
    metaTitle: "Deck Building Permits in Massachusetts | Requirements & Process | Innovate Deck",
    metaDescription:
      "Do you need a permit to build a deck in Massachusetts? Learn MA deck permit requirements, costs, inspection process & what happens without a permit. Complete 2026 guide.",
  },
  {
    slug: "best-deck-materials-new-england",
    title: "Best Deck Materials for New England Weather",
    excerpt:
      "New England's freeze-thaw cycles, heavy snow, intense UV, and coastal salt air put deck materials to the ultimate test. We rank the best decking materials for the region -- from composite brands like Trex and Azek to hardwoods like ipe and cedar -- based on durability, maintenance, appearance, and value.",
    date: "2026-01-22",
    readTime: "9 min read",
    category: "Materials",
    metaTitle: "Best Deck Materials for New England Weather | 2026 Rankings | Innovate Deck",
    metaDescription:
      "What deck materials hold up best in New England? We rank composite, wood, and hardwood decking by durability, maintenance & weather resistance. Expert picks for MA, NH, RI & ME.",
  },
  {
    slug: "deck-design-ideas-small-backyards",
    title: "Top 10 Deck Design Ideas for Small Backyards",
    excerpt:
      "A small backyard doesn't mean you have to settle for a small outdoor living experience. From multi-level platforms and built-in seating to vertical gardens and clever lighting, these 10 deck design ideas prove that smart design can make any space feel larger, more functional, and more inviting.",
    date: "2026-01-08",
    readTime: "7 min read",
    category: "Design & Inspiration",
    metaTitle: "Small Backyard Deck Ideas | 10 Space-Maximizing Designs | Innovate Deck",
    metaDescription:
      "10 creative deck design ideas for small backyards. Multi-level platforms, built-in seating, vertical gardens & more. Maximize your outdoor space with Innovate Deck.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

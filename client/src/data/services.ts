export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroGradient: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "composite-decking",
    title: "Composite Decking",
    shortDescription:
      "Low-maintenance composite decks built with Trex, TimberTech, and Azek for lasting beauty without the upkeep.",
    description:
      "Transform your outdoor space with a premium composite deck that looks stunning year after year. We are certified installers of Trex, TimberTech, and Azek -- the industry's top composite decking brands. Composite decking resists fading, staining, scratching, and mold, giving you a beautiful deck without the annual sanding, staining, and sealing that wood demands. Our team designs and builds custom composite decks throughout Greater Boston, the South Shore, North Shore, Cape Cod, and beyond, tailoring every project to your home's architecture, your lifestyle, and your budget. From multi-level entertainer decks to cozy backyard retreats, we deliver craftsmanship that stands up to New England's toughest weather.",
    heroGradient: "linear-gradient(135deg, #5B3A29 0%, #8B6914 50%, #6B8E23 100%)",
    icon: "Layers",
    features: [
      "Trex, TimberTech, and Azek certified installation",
      "Fade, stain, scratch, and mold resistant materials",
      "25-year to lifetime manufacturer warranties",
      "Hidden fastener systems for a clean, seamless look",
      "Wide range of colors, textures, and board profiles",
      "Engineered substructure for maximum longevity",
    ],
    benefits: [
      "Virtually zero annual maintenance -- no sanding, staining, or sealing",
      "Retains color and beauty for 25+ years even in harsh New England weather",
      "Eco-friendly options made from up to 95% recycled materials",
      "Higher long-term ROI compared to wood decking",
      "Splinter-free surface safe for kids and pets",
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description:
          "We visit your home, discuss your vision, measure the space, and review material samples. You'll receive a 3D rendering so you can see exactly what your new deck will look like.",
      },
      {
        step: 2,
        title: "Material Selection",
        description:
          "Choose from Trex, TimberTech, or Azek product lines. We'll walk you through color options, board profiles, and railing combinations to match your home's style.",
      },
      {
        step: 3,
        title: "Permitting & Preparation",
        description:
          "We handle all municipal permits and engineering plans. Our crew prepares the site, including demolition of any existing structure if needed.",
      },
      {
        step: 4,
        title: "Expert Construction",
        description:
          "Our experienced carpenters build your deck with precision -- from the pressure-treated substructure to the final hidden fastener. Most projects are completed in 1-2 weeks.",
      },
      {
        step: 5,
        title: "Final Walkthrough",
        description:
          "We walk through every detail with you, ensure everything meets our standards and yours, register your manufacturer warranty, and leave the site spotless.",
      },
    ],
    faqs: [
      {
        question: "How long does a composite deck last?",
        answer:
          "Premium composite decking from Trex, TimberTech, and Azek is built to last 25 to 50+ years with minimal maintenance. Most manufacturers back their products with 25-year to lifetime warranties against fading, staining, and structural defects.",
      },
      {
        question: "Is composite decking worth the higher upfront cost?",
        answer:
          "Absolutely. While composite costs more upfront than pressure-treated wood, you save thousands over the deck's lifetime by eliminating annual staining, sealing, and board replacement. Most homeowners break even within 5-7 years and enjoy decades of maintenance-free living.",
      },
      {
        question: "Can composite decking handle New England winters?",
        answer:
          "Yes. Composite decking is engineered to withstand freeze-thaw cycles, heavy snow loads, ice, salt, and intense UV exposure. The capped polymer shell on premium brands prevents moisture absorption, so boards won't crack, warp, or rot like wood can.",
      },
      {
        question: "What colors and styles are available?",
        answer:
          "Today's composite decking comes in a wide range of colors -- from rich walnut and warm teak to cool gray and coastal white. Multi-tonal boards mimic the natural grain patterns of exotic hardwoods. We bring full sample kits to your consultation so you can compare options in your own backyard lighting.",
      },
    ],
    relatedServices: [
      "railings-stairs",
      "pergolas-shade-structures",
      "outdoor-kitchens-living",
    ],
  },
  {
    slug: "wood-decking",
    title: "Wood Decking",
    shortDescription:
      "Classic wood decks crafted from pressure-treated lumber, cedar, ipe, and mahogany for timeless natural beauty.",
    description:
      "Nothing matches the warmth and character of a real wood deck. Whether you prefer the affordability of pressure-treated lumber, the aromatic beauty of Western red cedar, or the unmatched hardness of ipe and mahogany, our team builds wood decks that become the heart of your outdoor living space. We source premium-grade lumber and employ time-tested joinery techniques that keep your deck structurally sound for decades. Every wood deck we build in the Greater Boston area and across New England is designed to complement your home's architecture while maximizing your yard's potential. From intimate balcony decks to sprawling multi-level platforms, we bring your vision to life with old-world craftsmanship and modern engineering.",
    heroGradient: "linear-gradient(135deg, #654321 0%, #A0522D 50%, #8B7355 100%)",
    icon: "TreePine",
    features: [
      "Pressure-treated, cedar, ipe, and mahogany options",
      "Kiln-dried, premium-grade lumber selection",
      "Traditional and modern design styles",
      "Custom built-in seating, planters, and storage",
      "Professional-grade stain and sealant application",
      "Engineered footings and substructure for code compliance",
    ],
    benefits: [
      "Authentic natural warmth and grain patterns no synthetic can replicate",
      "Lower upfront cost -- especially with pressure-treated lumber",
      "Easy to customize, sand, and refinish to change color over time",
      "Exotic hardwoods like ipe rival composite in longevity (40+ years)",
      "Adds significant curb appeal and property value",
    ],
    process: [
      {
        step: 1,
        title: "On-Site Consultation",
        description:
          "We assess your property, discuss wood species options, review design ideas, and take precise measurements. You'll receive a detailed proposal with material specs and a 3D visualization.",
      },
      {
        step: 2,
        title: "Lumber Selection",
        description:
          "We hand-select boards from our trusted suppliers, choosing straight, tight-grained stock. For exotic hardwoods, we source directly from certified sustainable mills.",
      },
      {
        step: 3,
        title: "Permitting & Site Prep",
        description:
          "We pull all necessary permits, prepare structural plans, and get your site ready -- including demolition, grading, and footing installation.",
      },
      {
        step: 4,
        title: "Precision Construction",
        description:
          "Our carpenters frame, deck, and finish your project with meticulous attention to board spacing, fastener patterns, and structural integrity. We use stainless steel hardware on hardwood builds.",
      },
      {
        step: 5,
        title: "Finishing & Protection",
        description:
          "We apply premium stain and sealant to protect your investment from UV, moisture, and mildew. You'll receive a maintenance guide tailored to your wood species.",
      },
    ],
    faqs: [
      {
        question: "What is the best wood for a deck in Massachusetts?",
        answer:
          "It depends on your budget and maintenance preference. Pressure-treated pine is the most affordable and lasts 15-20 years with regular staining. Cedar offers natural rot resistance and a beautiful appearance for 20-25 years. Ipe is the gold standard -- incredibly dense, naturally insect and rot resistant, and can last 40+ years with minimal upkeep.",
      },
      {
        question: "How often does a wood deck need to be stained?",
        answer:
          "In New England's climate, we recommend staining and sealing pressure-treated and cedar decks every 1-2 years. Exotic hardwoods like ipe can go 2-3 years between treatments. Regular maintenance prevents graying, cracking, and moisture damage.",
      },
      {
        question: "Is ipe decking sustainable?",
        answer:
          "Yes, when sourced responsibly. We work with suppliers who carry FSC-certified ipe harvested from sustainably managed forests. Ipe's extraordinary lifespan (40-75 years) also means fewer replacements over time, reducing overall environmental impact.",
      },
    ],
    relatedServices: [
      "deck-repair-restoration",
      "railings-stairs",
      "composite-decking",
    ],
  },
  {
    slug: "deck-repair-restoration",
    title: "Deck Repair & Restoration",
    shortDescription:
      "Expert deck repair, board replacement, structural fixes, and full restoration to bring your aging deck back to life.",
    description:
      "Don't tear down your deck when expert repair and restoration can save it for a fraction of the cost. Our skilled carpenters diagnose and fix structural issues, replace damaged boards, reinforce failing joists and beams, and restore your deck's appearance with professional sanding, staining, and sealing. We work on all deck types -- composite, pressure-treated, cedar, and exotic hardwoods -- throughout Greater Boston and New England. Whether your deck has a few soft boards or needs a complete structural overhaul, we provide honest assessments and transparent pricing. Many decks we inspect have years of life left in their substructure and just need targeted repairs and a fresh finish to look and perform like new.",
    heroGradient: "linear-gradient(135deg, #8B4513 0%, #CD853F 50%, #DAA520 100%)",
    icon: "Wrench",
    features: [
      "Comprehensive structural inspection and assessment",
      "Joist, beam, and ledger board repair or replacement",
      "Individual board replacement with matching materials",
      "Post and footing reinforcement",
      "Railing repair and code compliance upgrades",
      "Complete sanding, staining, and refinishing",
    ],
    benefits: [
      "Save 40-60% compared to full deck replacement",
      "Extend your deck's lifespan by 10-15 years",
      "Bring your deck up to current building codes",
      "Eliminate safety hazards like loose railings and rotting boards",
      "Restore the beauty and value of your outdoor space",
    ],
    process: [
      {
        step: 1,
        title: "Thorough Inspection",
        description:
          "We examine every component of your deck -- footings, posts, beams, joists, ledger connections, decking boards, railings, and stairs. You'll receive a detailed condition report with photos.",
      },
      {
        step: 2,
        title: "Honest Assessment",
        description:
          "We'll tell you exactly what needs repair, what can wait, and whether restoration makes financial sense vs. replacement. No upselling -- just straightforward advice.",
      },
      {
        step: 3,
        title: "Targeted Repairs",
        description:
          "Our crew replaces only what's needed, matching materials and finishes to your existing deck. Structural repairs are engineered to meet or exceed current code requirements.",
      },
      {
        step: 4,
        title: "Refinishing & Protection",
        description:
          "After repairs are complete, we sand, clean, stain, and seal the entire deck surface for a uniform, refreshed appearance that's protected against the elements.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my deck needs repair or full replacement?",
        answer:
          "Key indicators for repair include isolated soft or rotting boards, minor wobbling, surface-level damage, and cosmetic wear. Signs you may need replacement include widespread structural rot (especially at the ledger board and joists), severely leaning posts, multiple code violations, and pervasive insect damage. We provide free inspections and honest recommendations.",
      },
      {
        question: "Can you match my existing deck boards?",
        answer:
          "In most cases, yes. We carry a wide selection of pressure-treated, cedar, composite, and exotic hardwood boards and can closely match the profile, species, and color of your existing decking. For older or discontinued composite lines, we'll find the closest available match or discuss creative solutions.",
      },
      {
        question: "Do I need a permit for deck repairs in Massachusetts?",
        answer:
          "Minor cosmetic repairs like board replacement and staining typically don't require a permit. However, structural work -- replacing joists, beams, posts, or modifying the deck's footprint -- usually does. We handle all permitting so you don't have to worry about compliance.",
      },
    ],
    relatedServices: [
      "wood-decking",
      "railings-stairs",
      "composite-decking",
    ],
  },
  {
    slug: "pergolas-shade-structures",
    title: "Pergolas & Shade Structures",
    shortDescription:
      "Custom pergolas, shade structures, and louvered roofs that extend your outdoor living season and add architectural drama.",
    description:
      "Elevate your deck or patio with a custom pergola or shade structure that defines your outdoor space and provides relief from the summer sun. We design and build attached pergolas that extend from your home, freestanding structures that create distinct outdoor rooms, and motorized louvered roof systems that let you control sunlight and airflow with the touch of a button. Using premium materials -- from cedar and redwood to aluminum and vinyl -- we craft structures that complement your home's architecture and withstand New England's demanding climate. A well-designed pergola adds vertical interest, creates a sense of enclosure, and serves as the perfect framework for climbing plants, string lights, outdoor curtains, and ceiling fans.",
    heroGradient: "linear-gradient(135deg, #2E8B57 0%, #6B8E23 50%, #DAA520 100%)",
    icon: "Sun",
    features: [
      "Attached, freestanding, and cantilevered designs",
      "Motorized louvered roof systems for adjustable shade",
      "Cedar, redwood, aluminum, vinyl, and fiberglass options",
      "Integrated lighting, fan, and speaker wiring",
      "Retractable canopy and shade sail installations",
      "Custom lattice, privacy screens, and curtain tracks",
    ],
    benefits: [
      "Extend your outdoor living season from spring through fall",
      "Create defined outdoor rooms for dining, lounging, and entertaining",
      "Reduce deck surface temperatures by up to 20 degrees in summer",
      "Add dramatic architectural interest and curb appeal",
      "Increase usable outdoor square footage and property value",
    ],
    process: [
      {
        step: 1,
        title: "Design Session",
        description:
          "We visit your property to understand the sun exposure, wind patterns, and sightlines. Together we'll choose the style, size, and material that best fits your space and your vision.",
      },
      {
        step: 2,
        title: "Custom Engineering",
        description:
          "Our team creates detailed structural plans, including foundation requirements and load calculations for your specific location's wind and snow loads.",
      },
      {
        step: 3,
        title: "Permitting",
        description:
          "We secure all necessary building permits and ensure your pergola design meets local zoning setback requirements and HOA guidelines where applicable.",
      },
      {
        step: 4,
        title: "Construction & Finishing",
        description:
          "We install footings, erect the structure, and complete all finishing details including stain, hardware, and optional electrical for lights and fans. Most pergola projects are completed in 3-5 days.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a pergola and a gazebo?",
        answer:
          "A pergola has an open or slatted roof supported by posts, providing partial shade while maintaining an airy, open feel. A gazebo is a fully roofed, freestanding structure -- usually octagonal -- that provides complete weather protection. Pergolas are more versatile and can be attached directly to your home or deck.",
      },
      {
        question: "Do louvered pergolas work in New England winters?",
        answer:
          "Yes. Modern louvered roof systems are engineered to handle significant snow loads (typically 40+ psf) and feature built-in drainage channels. The louvers can be fully closed to shed rain and snow, or opened to let sunlight through. Many homeowners leave them in place year-round.",
      },
      {
        question: "How much does a pergola cost in Massachusetts?",
        answer:
          "A basic cedar pergola typically starts around $5,000-$8,000. Mid-range attached pergolas with premium materials run $10,000-$20,000. Motorized louvered roof systems range from $20,000-$40,000+ depending on size and features. We provide detailed quotes during your free consultation.",
      },
      {
        question: "Do I need a permit to build a pergola?",
        answer:
          "In most Massachusetts towns, yes -- especially for attached pergolas or structures exceeding a certain size. Building departments typically require engineered plans showing footings, connections, and load calculations. We handle the entire permitting process for you.",
      },
    ],
    relatedServices: [
      "composite-decking",
      "outdoor-kitchens-living",
      "porches-screened-porches",
    ],
  },
  {
    slug: "porches-screened-porches",
    title: "Porches & Screened Porches",
    shortDescription:
      "Three-season, four-season, and fully enclosed porches that let you enjoy the outdoors year-round, bug-free.",
    description:
      "Expand your living space with a custom porch or screened porch that bridges the gap between indoors and out. Our three-season porches keep you comfortable from early spring through late fall with screened walls and a solid roof overhead. Four-season porches add insulation, windows, and optional heating so you can enjoy the space even in January. Fully enclosed porches with sliding glass panels give you the flexibility to open up on beautiful days and close down when the weather turns. We design every porch to integrate seamlessly with your home's existing roofline, siding, and trim, so it looks like it was always part of the original construction. Whether you want a cozy reading nook, a bug-free dining room, or a year-round sunroom, we make it happen.",
    heroGradient: "linear-gradient(135deg, #4A6741 0%, #8B7D6B 50%, #C4A35A 100%)",
    icon: "Home",
    features: [
      "Three-season, four-season, and convertible designs",
      "Seamless roofline and trim integration with existing architecture",
      "Retractable screens and sliding glass panel systems",
      "Tongue-and-groove ceiling options (pine, cedar, PVC)",
      "Ceiling fan, lighting, and electrical rough-in",
      "Insulated floors and walls for four-season comfort",
    ],
    benefits: [
      "Enjoy outdoor living 365 days a year without bugs or harsh weather",
      "Add significant heated or semi-heated square footage to your home",
      "Create a versatile space for dining, entertaining, or relaxing",
      "Boost your home's resale value with one of the highest-ROI renovations",
      "Reduce energy costs with a thermal buffer zone between indoors and outdoors",
    ],
    process: [
      {
        step: 1,
        title: "Concept & Consultation",
        description:
          "We evaluate your home's structure, discuss how you'll use the space, and determine the best porch type for your needs and budget. You'll see preliminary sketches and 3D renderings before any work begins.",
      },
      {
        step: 2,
        title: "Architectural Design",
        description:
          "Our designer creates detailed plans that integrate the porch with your home's roofline, siding, and foundation. We ensure the addition looks original, not tacked-on.",
      },
      {
        step: 3,
        title: "Permitting & Engineering",
        description:
          "We prepare and submit all building permit applications, structural engineering plans, and any required zoning variance requests. We handle communication with your local building department.",
      },
      {
        step: 4,
        title: "Construction",
        description:
          "From foundation to finish, our crew builds your porch with careful attention to weatherproofing, structural integrity, and aesthetic detail. Most porch projects take 2-4 weeks depending on complexity.",
      },
      {
        step: 5,
        title: "Final Details",
        description:
          "We complete all electrical, install screens or windows, apply final finishes, and conduct a thorough walkthrough. You'll receive maintenance guidelines and warranty documentation.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a three-season and four-season porch?",
        answer:
          "A three-season porch has a solid roof, screened or windowed walls, and is comfortable from roughly April through November in New England. A four-season porch adds insulation, dual-pane windows, and a heating source (baseboard, mini-split, or radiant floor) so you can use it year-round, even in the coldest months.",
      },
      {
        question: "Can you add a screened porch to my existing deck?",
        answer:
          "In many cases, yes. If your deck's substructure is in good condition and meets current code requirements, we can frame walls, add a roof, and install screens right on top of your existing deck platform. We'll inspect the structure and let you know if any reinforcement is needed.",
      },
      {
        question: "How much does a screened porch cost in the Boston area?",
        answer:
          "A basic screened porch (three-season) typically ranges from $20,000 to $40,000 depending on size and finishes. Four-season porches with insulation, windows, and heating run $40,000 to $80,000+. Costs vary based on your home's existing structure, the porch size, and the materials and finishes you select.",
      },
      {
        question: "Will a porch addition require a building permit?",
        answer:
          "Yes. Porch additions are considered structural modifications in every Massachusetts, New Hampshire, Rhode Island, and Maine municipality. A building permit, structural plans, and inspections are required. We manage the entire permitting process from application to final inspection.",
      },
    ],
    relatedServices: [
      "composite-decking",
      "pergolas-shade-structures",
      "railings-stairs",
    ],
  },
  {
    slug: "outdoor-kitchens-living",
    title: "Outdoor Kitchens & Living Spaces",
    shortDescription:
      "Custom outdoor kitchens, bars, fire features, and entertainment areas that turn your backyard into a resort.",
    description:
      "Take your outdoor entertaining to the next level with a custom-designed outdoor kitchen and living space. We build everything from compact grilling stations with granite countertops to full outdoor kitchens with refrigeration, sinks, pizza ovens, and built-in bars. Add a fire pit or gas fireplace to create a year-round gathering spot, or incorporate a TV mounting area and sound system for the ultimate game-day setup. Our team handles the full scope -- from structural design and utility connections to stone veneer, countertop fabrication, and finish carpentry. We work with your existing deck or patio, or build a new foundation specifically designed to support your outdoor kitchen vision. Every project is custom-built to your specifications and engineered for New England's climate.",
    heroGradient: "linear-gradient(135deg, #8B4513 0%, #B8860B 50%, #CD853F 100%)",
    icon: "ChefHat",
    features: [
      "Built-in grills, smokers, and pizza ovens",
      "Granite, quartz, and concrete countertop fabrication",
      "Outdoor bars with kegerators and ice makers",
      "Fire pits, fire tables, and gas fireplaces",
      "Weatherproof cabinetry and storage solutions",
      "Gas, electric, and plumbing utility connections",
    ],
    benefits: [
      "Create a complete outdoor entertainment destination",
      "Eliminate trips back and forth to the indoor kitchen during gatherings",
      "Extend the entertaining season with fire features and heating elements",
      "Increase your home's value with one of the most sought-after outdoor upgrades",
      "Customize every element to match your cooking style and hosting needs",
    ],
    process: [
      {
        step: 1,
        title: "Lifestyle Consultation",
        description:
          "We discuss how you entertain, what you love to cook, and how you envision using the space. We'll review your property's utility access, grade, and orientation to optimize the layout.",
      },
      {
        step: 2,
        title: "Custom Design",
        description:
          "You'll receive detailed plans and 3D renderings showing your outdoor kitchen layout, appliance placement, material selections, and utility routing. We refine the design until it's perfect.",
      },
      {
        step: 3,
        title: "Utility Coordination",
        description:
          "We coordinate with licensed plumbers, electricians, and gas fitters to run all necessary utilities to your outdoor kitchen location. All work is permitted and inspected.",
      },
      {
        step: 4,
        title: "Construction & Installation",
        description:
          "Our team builds the structural framework, installs stone or block veneer, fabricates and sets countertops, mounts appliances, and completes all finish work. Most outdoor kitchens take 2-4 weeks.",
      },
      {
        step: 5,
        title: "Commissioning",
        description:
          "We fire up every appliance, test all plumbing and electrical, walk you through operation and maintenance, and make sure everything works perfectly before your first cookout.",
      },
    ],
    faqs: [
      {
        question: "Can I build an outdoor kitchen on my existing deck?",
        answer:
          "It depends on the deck's structural capacity. Outdoor kitchens with stone, concrete countertops, and appliances are heavy. We'll inspect your deck's framing and footings to determine if it can support the load, and if necessary, we'll reinforce the structure or build a dedicated pad adjacent to the deck.",
      },
      {
        question: "What happens to an outdoor kitchen in the winter?",
        answer:
          "We design every outdoor kitchen for New England's climate. Weatherproof cabinetry, marine-grade hardware, and freeze-resistant plumbing are standard. We'll provide winterization instructions for appliances and plumbing lines, and many homeowners continue using their grills and fire features throughout the winter.",
      },
      {
        question: "Do I need a gas line for an outdoor kitchen?",
        answer:
          "A natural gas line is ideal for built-in grills, burners, and fire features -- it eliminates the hassle of propane tank refills. However, propane, electric, and charcoal options are available for every appliance category. We coordinate all gas line installation with licensed fitters.",
      },
    ],
    relatedServices: [
      "composite-decking",
      "pergolas-shade-structures",
      "porches-screened-porches",
    ],
  },
  {
    slug: "railings-stairs",
    title: "Railings & Stairs",
    shortDescription:
      "Custom deck railings and stairs in cable, composite, aluminum, glass, and wood -- where safety meets style.",
    description:
      "Railings and stairs are more than a code requirement -- they define your deck's character and are the first thing people notice. We design and install custom railing systems in every material and style: sleek stainless steel cable railings that preserve your view, low-maintenance composite railings that match your decking, powder-coated aluminum systems in dozens of colors, tempered glass panels for a modern look, and classic wood railings with turned or square balusters. Our stair builds include straight runs, L-shaped landings, curved designs, and floating stair systems with integrated lighting. Every railing and stair project we complete meets or exceeds Massachusetts, New Hampshire, Rhode Island, and Maine building codes for height, spacing, and structural load requirements.",
    heroGradient: "linear-gradient(135deg, #4A4A4A 0%, #8B7355 50%, #A0522D 100%)",
    icon: "Fence",
    features: [
      "Cable, composite, aluminum, glass, and wood railing systems",
      "Custom stair designs with landing configurations",
      "LED stair and post cap lighting integration",
      "Code-compliant baluster spacing and railing heights",
      "ADA-accessible ramp and handrail options",
      "Matching gate systems for pool code compliance",
    ],
    benefits: [
      "Transform your deck's appearance with a signature railing style",
      "Maintain unobstructed views with cable or glass railing options",
      "Ensure the safety of children, pets, and guests",
      "Meet all current building code and pool fencing requirements",
      "Add nighttime ambiance and safety with integrated LED lighting",
    ],
    process: [
      {
        step: 1,
        title: "Style Consultation",
        description:
          "We review your deck's style, your home's architecture, and your personal preferences to recommend the best railing system. We bring physical samples so you can see and feel the materials.",
      },
      {
        step: 2,
        title: "Measurement & Design",
        description:
          "We take precise field measurements and create a layout showing railing runs, post locations, stair configurations, gate placements, and lighting positions.",
      },
      {
        step: 3,
        title: "Fabrication & Ordering",
        description:
          "Custom components are fabricated or ordered to your exact specifications. Cable systems are measured and cut on-site for a perfect fit.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Our crew installs posts, rails, balusters or cables, gates, and lighting with precision. Most railing projects are completed in 1-3 days depending on scope.",
      },
    ],
    faqs: [
      {
        question: "What are the railing code requirements in Massachusetts?",
        answer:
          "Massachusetts building code requires railings on any deck surface 30 inches or more above grade. Railing height must be at least 36 inches (42 inches for commercial). Baluster spacing cannot exceed 4 inches, and the railing must withstand a 200-pound lateral load. We ensure every installation meets or exceeds these standards.",
      },
      {
        question: "Are cable railings allowed by code?",
        answer:
          "Yes, cable railings are code-compliant in Massachusetts and throughout New England, provided the cable spacing meets the 4-inch sphere rule (a 4-inch sphere cannot pass between cables). Our cable railing installations use properly tensioned stainless steel cables that meet all spacing and deflection requirements.",
      },
      {
        question: "Can you replace my railings without replacing the entire deck?",
        answer:
          "Absolutely. Railing replacement is one of our most popular standalone services. We remove your old railing system, inspect and reinforce post connections as needed, and install a brand-new railing system -- all without disturbing your existing decking surface.",
      },
      {
        question: "How much do deck railings cost per linear foot?",
        answer:
          "Costs vary by material: pressure-treated wood railings start around $30-$50/lf, composite railings run $50-$80/lf, aluminum systems cost $60-$100/lf, and cable railing systems range from $80-$150/lf. Glass panel railings are the premium option at $100-$200+/lf. These prices include posts, rails, balusters/cables, and installation.",
      },
    ],
    relatedServices: [
      "composite-decking",
      "wood-decking",
      "deck-repair-restoration",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

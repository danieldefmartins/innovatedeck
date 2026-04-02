export interface Area {
  slug: string;
  name: string;
  state: string;
  phoneKey: string;
  headline: string;
  description: string;
  heroGradient: string;
  neighborhoods: string[];
  zipCodes: string[];
  localContent: string;
  nearbyAreas: string[];
  metaTitle: string;
  metaDescription: string;
}

export const areas: Area[] = [
  {
    slug: "boston",
    name: "Greater Boston",
    state: "MA",
    phoneKey: "BOSTON",
    headline: "Premium Deck Building in Greater Boston, MA",
    description:
      "From historic brownstones in Back Bay to modern homes in the suburbs, Greater Boston homeowners trust Innovate Deck for custom deck construction, repair, and outdoor living projects. We understand the unique challenges of building in one of America's oldest and most architecturally diverse cities.",
    heroGradient: "linear-gradient(135deg, #2C3E50 0%, #8B6914 50%, #6B8E23 100%)",
    neighborhoods: [
      "Back Bay",
      "Beacon Hill",
      "South End",
      "Brookline",
      "Cambridge",
      "Somerville",
      "Jamaica Plain",
      "Dorchester",
      "Charlestown",
      "South Boston",
      "Newton",
      "Arlington",
    ],
    zipCodes: ["02108", "02116", "02118", "02130", "02138", "02139", "02143", "02445", "02127", "02129"],
    localContent:
      "Building decks in Greater Boston presents unique opportunities and challenges that require deep local expertise. Many Boston-area homes sit on compact urban lots where creative design is essential to maximize outdoor space -- think rooftop decks in Southie, multi-level platforms in Jamaica Plain, and elegant rear-yard retreats in Brookline. The city's strict building codes, historic district regulations, and zoning setback requirements demand a contractor who knows how to navigate the permitting process efficiently. Boston's weather is famously demanding: hot, humid summers followed by freezing winters with heavy snow and ice mean your deck's materials and construction methods must be engineered for extreme temperature swings and moisture exposure. We've been building decks across Greater Boston for over 25 years, and we know exactly which materials, fasteners, and finishing techniques deliver the longest-lasting results in this climate.",
    nearbyAreas: ["north-shore", "south-shore", "metrowest"],
    metaTitle: "Deck Builders in Boston, MA | Custom Decks & Outdoor Living | Innovate Deck",
    metaDescription:
      "Top-rated deck builder serving Greater Boston, MA. Custom composite & wood decks, pergolas, porches, and outdoor kitchens. 25+ years experience. Free estimates. Call (781) 528-0069.",
  },
  {
    slug: "north-shore",
    name: "North Shore",
    state: "MA",
    phoneKey: "NORTH_SHORE",
    headline: "Custom Deck Building on the North Shore, MA",
    description:
      "The North Shore's coastal charm and historic seaside communities deserve deck craftsmanship that matches the surroundings. Innovate Deck serves Salem, Marblehead, Beverly, Gloucester, Newburyport, and every town in between with premium deck construction and outdoor living services.",
    heroGradient: "linear-gradient(135deg, #1B4F72 0%, #5B8C5A 50%, #D4A745 100%)",
    neighborhoods: [
      "Salem",
      "Marblehead",
      "Beverly",
      "Gloucester",
      "Newburyport",
      "Rockport",
      "Ipswich",
      "Danvers",
      "Peabody",
      "Swampscott",
      "Manchester-by-the-Sea",
      "Essex",
    ],
    zipCodes: ["01970", "01945", "01915", "01930", "01950", "01966", "01938", "01923", "01960", "01907"],
    localContent:
      "North Shore homeowners face a unique set of considerations when building or replacing a deck. Coastal properties in Marblehead, Swampscott, Gloucester, and Rockport are exposed to salt air, high winds, and intense moisture -- conditions that can destroy an improperly built deck in just a few years. We specify marine-grade stainless steel hardware, composite or exotic hardwood decking with superior moisture resistance, and reinforced post-to-beam connections designed to handle coastal wind loads. Many North Shore communities, particularly Marblehead and Newburyport, have historic district commissions that regulate exterior alterations, including deck construction. Our team has extensive experience working within these guidelines to design decks that satisfy both homeowners and preservation boards. Whether you're overlooking the harbor in Salem or enjoying a wooded lot in Ipswich, we design and build decks that enhance your North Shore lifestyle.",
    nearbyAreas: ["boston", "merrimack-valley", "seacoast-nh"],
    metaTitle: "Deck Builders on the North Shore, MA | Salem, Marblehead, Beverly | Innovate Deck",
    metaDescription:
      "Expert deck building on the North Shore of Massachusetts. Serving Salem, Marblehead, Beverly, Gloucester & Newburyport. Coastal-grade construction. Free estimates.",
  },
  {
    slug: "south-shore",
    name: "South Shore",
    state: "MA",
    phoneKey: "SOUTH_SHORE",
    headline: "Expert Deck Builders on the South Shore, MA",
    description:
      "From waterfront properties in Hingham and Scituate to family homes in Plymouth and Braintree, South Shore homeowners choose Innovate Deck for quality craftsmanship and reliable service. We build decks designed to withstand nor'easters and look beautiful doing it.",
    heroGradient: "linear-gradient(135deg, #2E6B4E 0%, #8B7D6B 50%, #C4A35A 100%)",
    neighborhoods: [
      "Hingham",
      "Scituate",
      "Duxbury",
      "Plymouth",
      "Marshfield",
      "Cohasset",
      "Norwell",
      "Hanover",
      "Weymouth",
      "Braintree",
      "Quincy",
      "Hull",
    ],
    zipCodes: ["02043", "02066", "02332", "02360", "02050", "02025", "02061", "02339", "02188", "02184"],
    localContent:
      "The South Shore's beautiful coastline and established residential neighborhoods make outdoor living a cornerstone of the lifestyle here. Homeowners in towns like Hingham, Cohasset, and Duxbury often have properties with stunning ocean or marsh views that a well-designed deck can frame perfectly -- cable railings and glass panel systems are particularly popular for preserving these sightlines. South Shore communities are exposed to powerful nor'easters that bring driving rain, heavy snow, and strong winds off the Atlantic, so structural engineering and material selection are critical. We use hurricane-rated connectors, specify footings that extend below the frost line (typically 48 inches in this area), and recommend composite or ipe decking for maximum weather resistance. Inland towns like Hanover, Norwell, and Braintree offer larger lots that lend themselves to expansive multi-level decks with built-in outdoor kitchens, fire pits, and pergolas. No matter where you are on the South Shore, we deliver decks built for this environment.",
    nearbyAreas: ["boston", "cape-cod", "metrowest"],
    metaTitle: "Deck Builders on the South Shore, MA | Hingham, Scituate, Plymouth | Innovate Deck",
    metaDescription:
      "South Shore MA deck builder serving Hingham, Scituate, Duxbury, Plymouth & more. Custom composite & wood decks engineered for coastal New England. Free consultations.",
  },
  {
    slug: "cape-cod",
    name: "Cape Cod",
    state: "MA",
    phoneKey: "CAPE_COD",
    headline: "Cape Cod Deck Building & Outdoor Living Experts",
    description:
      "Cape Cod's unique coastal environment demands specialized deck construction expertise. Innovate Deck builds beautiful, durable decks across the Cape -- from Sandwich to Provincetown -- using materials and techniques specifically chosen to handle salt air, sand, and ocean weather.",
    heroGradient: "linear-gradient(135deg, #1E6091 0%, #87CEEB 30%, #F4E4C1 70%, #DAA520 100%)",
    neighborhoods: [
      "Barnstable",
      "Falmouth",
      "Chatham",
      "Wellfleet",
      "Brewster",
      "Dennis",
      "Yarmouth",
      "Sandwich",
      "Orleans",
      "Provincetown",
      "Harwich",
      "Mashpee",
    ],
    zipCodes: ["02601", "02540", "02633", "02667", "02631", "02638", "02664", "02563", "02653", "02657"],
    localContent:
      "Building decks on Cape Cod is a specialty that requires understanding the peninsula's unique environmental conditions. The Cape's sandy soil requires deeper, wider footings to achieve structural stability, and the ever-present salt air accelerates corrosion on standard hardware -- we exclusively use stainless steel and hot-dipped galvanized connectors on every Cape project. Many Cape Cod homeowners use their properties seasonally, which means decks must withstand months of unattended exposure to winter storms and summer sun. We recommend capped composite decking or naturally rot-resistant tropical hardwoods like ipe for maximum durability with minimal maintenance. Cape Cod's building regulations are also unique: the Cape Cod Commission, Conservation Commission wetland buffer zones, and individual town bylaws all add layers of permitting complexity that we navigate regularly. Whether you're building a wraparound deck on a Chatham captain's house or a waterfront platform in Wellfleet, we bring Cape-specific expertise to every project.",
    nearbyAreas: ["south-shore", "rhode-island"],
    metaTitle: "Cape Cod Deck Builders | Falmouth, Chatham, Barnstable | Innovate Deck",
    metaDescription:
      "Cape Cod's trusted deck builder. Coastal-grade composite & wood decks built to withstand salt air and ocean weather. Serving Barnstable to Provincetown. Free estimates.",
  },
  {
    slug: "metrowest",
    name: "MetroWest",
    state: "MA",
    phoneKey: "METROWEST",
    headline: "Premium Deck Builders in MetroWest, MA",
    description:
      "MetroWest's beautiful suburban neighborhoods and wooded lots are perfect for expansive outdoor living spaces. Innovate Deck serves Framingham, Natick, Wellesley, Needham, Newton, and surrounding communities with custom deck construction and outdoor living solutions.",
    heroGradient: "linear-gradient(135deg, #3B5E3B 0%, #7D9B6B 50%, #C4A35A 100%)",
    neighborhoods: [
      "Framingham",
      "Natick",
      "Wellesley",
      "Needham",
      "Newton",
      "Sudbury",
      "Wayland",
      "Ashland",
      "Hopkinton",
      "Westborough",
      "Sherborn",
      "Dover",
    ],
    zipCodes: ["01701", "01760", "02482", "02492", "02459", "01776", "01778", "01721", "01748", "01581"],
    localContent:
      "MetroWest Massachusetts is one of the most desirable residential areas in the state, with established neighborhoods, excellent schools, and generous lot sizes that are ideal for ambitious outdoor living projects. Homeowners in towns like Wellesley, Needham, Dover, and Sherborn often invest in large-scale deck and outdoor living installations that include multi-level decks, pergolas, outdoor kitchens, and fire features. The wooded, gently rolling terrain common across MetroWest creates natural elevation changes that lend themselves to dramatic multi-level deck designs with walkout lower levels. Local building departments in this region are thorough and detail-oriented -- especially in towns like Wellesley and Newton -- requiring comprehensive structural plans, engineered stamp drawings, and multiple inspections. We have strong working relationships with building departments across MetroWest and understand each town's specific requirements. The area's mature tree canopy means many decks are partially shaded, which influences material selection and impacts considerations like moss and moisture management.",
    nearbyAreas: ["boston", "worcester", "south-shore"],
    metaTitle: "Deck Builders in MetroWest, MA | Natick, Wellesley, Needham, Newton | Innovate Deck",
    metaDescription:
      "MetroWest MA's premier deck builder. Custom composite & wood decks, pergolas, and outdoor kitchens in Framingham, Natick, Wellesley, Needham & Newton. Free estimates.",
  },
  {
    slug: "worcester",
    name: "Worcester Area",
    state: "MA",
    phoneKey: "WORCESTER",
    headline: "Quality Deck Construction in the Worcester Area",
    description:
      "Central Massachusetts homeowners in Worcester, Shrewsbury, Holden, and surrounding towns trust Innovate Deck for affordable, high-quality deck building. We bring the same premium craftsmanship and materials to Worcester County that we're known for across the region.",
    heroGradient: "linear-gradient(135deg, #5B3A29 0%, #7D6B4E 50%, #8B8B00 100%)",
    neighborhoods: [
      "Worcester",
      "Shrewsbury",
      "Holden",
      "Auburn",
      "Grafton",
      "Millbury",
      "West Boylston",
      "Leicester",
      "Paxton",
      "Rutland",
    ],
    zipCodes: ["01602", "01604", "01545", "01520", "01501", "01519", "01527", "01583", "01612", "01543"],
    localContent:
      "The Worcester area offers tremendous value for homeowners looking to enhance their outdoor living space with a quality deck. Property sizes tend to be larger and more affordable than closer to Boston, giving Worcester-area homeowners the room to build expansive decks and outdoor living areas that would be impractical on smaller urban lots. Central Massachusetts experiences some of the state's most extreme temperature swings -- summer highs near 100 degrees and winter lows well below zero -- which places extraordinary demands on deck materials and construction. We select materials rated for these conditions and specify deep footings (48 inches minimum) to ensure stability through freeze-thaw cycles. The Worcester area's hilly terrain often creates opportunities for dramatic elevated decks with walkout lower levels, built-in storage underneath, and tiered designs that follow the natural grade. Local building departments in Worcester, Shrewsbury, and surrounding towns require standard building permits for deck construction, and we handle the entire process from application to final inspection.",
    nearbyAreas: ["metrowest", "merrimack-valley", "boston"],
    metaTitle: "Deck Builders in Worcester, MA | Shrewsbury, Holden, Auburn | Innovate Deck",
    metaDescription:
      "Worcester area deck builder serving Central Massachusetts. Custom composite & wood decks, pergolas, and outdoor living. Affordable pricing, premium quality. Free estimates.",
  },
  {
    slug: "merrimack-valley",
    name: "Merrimack Valley",
    state: "MA",
    phoneKey: "MERRIMACK_VALLEY",
    headline: "Deck Builders in the Merrimack Valley, MA",
    description:
      "From Lowell to Haverhill, the Merrimack Valley's growing communities deserve top-quality outdoor living spaces. Innovate Deck builds custom decks, pergolas, and porches for homeowners across Andover, Chelmsford, Billerica, Tewksbury, and the entire valley.",
    heroGradient: "linear-gradient(135deg, #4A5D3B 0%, #8B7355 50%, #B8860B 100%)",
    neighborhoods: [
      "Lowell",
      "Lawrence",
      "Andover",
      "Haverhill",
      "Methuen",
      "North Andover",
      "Dracut",
      "Chelmsford",
      "Billerica",
      "Tewksbury",
    ],
    zipCodes: ["01851", "01840", "01810", "01830", "01844", "01845", "01826", "01824", "01821", "01876"],
    localContent:
      "The Merrimack Valley is one of the fastest-growing regions in Massachusetts, with a mix of historic mill cities, charming suburban towns, and new residential developments that all benefit from quality outdoor living spaces. Towns like Andover and North Andover feature established neighborhoods with mature landscaping where decks need to complement the existing aesthetic, while newer developments in Chelmsford, Billerica, and Tewksbury offer opportunities for outdoor living spaces designed from scratch. The Merrimack Valley sits far enough from the coast to avoid salt air concerns but still experiences the full force of New England weather, including heavy snowfall -- the area averages 50-60 inches per year. We engineer every deck to handle substantial snow loads and specify proper drainage to prevent ice dam formation where decks attach to the house. Many Merrimack Valley homeowners commute to Boston and want their backyard to be a retreat -- multi-level decks with integrated grilling stations, fire pits, and pergolas are among our most popular builds in this area.",
    nearbyAreas: ["north-shore", "boston", "new-hampshire"],
    metaTitle: "Deck Builders in Merrimack Valley, MA | Andover, Chelmsford, Lowell | Innovate Deck",
    metaDescription:
      "Merrimack Valley deck builder serving Lowell, Andover, Chelmsford, Billerica & beyond. Custom decks, pergolas, and outdoor kitchens. 25+ years experience. Free estimates.",
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    state: "NH",
    phoneKey: "NEW_HAMPSHIRE",
    headline: "New Hampshire's Trusted Deck Building Company",
    description:
      "From Manchester and Nashua to the Lakes Region, Innovate Deck brings premium craftsmanship to New Hampshire homeowners. We build decks engineered for the Granite State's demanding four-season climate and stunning natural landscapes.",
    heroGradient: "linear-gradient(135deg, #2F4F4F 0%, #3B7A57 50%, #CD853F 100%)",
    neighborhoods: [
      "Manchester",
      "Nashua",
      "Concord",
      "Portsmouth",
      "Dover",
      "Rochester",
      "Keene",
      "Laconia",
      "Lebanon",
      "Derry",
      "Salem NH",
      "Londonderry",
    ],
    zipCodes: ["03101", "03060", "03301", "03801", "03820", "03867", "03431", "03246", "03766", "03038"],
    localContent:
      "New Hampshire's breathtaking landscapes -- from the seacoast to the Lakes Region to the White Mountains foothills -- make outdoor living an essential part of the Granite State lifestyle. NH homeowners face some of the most demanding weather conditions in the Northeast: average snowfall ranges from 60 inches in the southern tier to over 100 inches in the north, and winter temperatures regularly plunge below zero. We engineer every New Hampshire deck for these extremes, specifying frost-depth footings (48-60 inches depending on location), heavy-duty snow load ratings, and materials with superior freeze-thaw resistance. New Hampshire's building code is adopted at the state level but enforced locally, and requirements can vary significantly between municipalities. Many NH towns also have wetland buffer zones, shoreland protection requirements, and conservation district regulations that affect deck placement and design. We work with building departments across the state to ensure full compliance. New Hampshire's no-sales-tax advantage also means your decking materials cost less here than in Massachusetts, making it an excellent value.",
    nearbyAreas: ["seacoast-nh", "merrimack-valley", "southern-maine"],
    metaTitle: "Deck Builders in New Hampshire | Manchester, Nashua, Concord | Innovate Deck",
    metaDescription:
      "New Hampshire's premier deck builder. Custom decks, pergolas, and outdoor living in Manchester, Nashua, Concord & the Lakes Region. Built for NH weather. Free estimates.",
  },
  {
    slug: "seacoast-nh",
    name: "Seacoast NH",
    state: "NH",
    phoneKey: "SEACOAST_NH",
    headline: "Seacoast NH Deck Building & Outdoor Living",
    description:
      "The New Hampshire Seacoast's charming coastal communities deserve deck construction that's built to handle the salt air and ocean weather. Innovate Deck specializes in coastal-grade deck building from Portsmouth to Hampton and every town between.",
    heroGradient: "linear-gradient(135deg, #1B5E7D 0%, #6B8E6B 50%, #D4AA7D 100%)",
    neighborhoods: [
      "Portsmouth",
      "Hampton",
      "Exeter",
      "Dover",
      "Durham",
      "Rye",
      "Stratham",
      "Newmarket",
      "Greenland",
      "New Castle",
    ],
    zipCodes: ["03801", "03842", "03833", "03820", "03824", "03870", "03885", "03857", "03840", "03854"],
    localContent:
      "New Hampshire's Seacoast region is a stunning stretch of coastline and tidal estuary communities where outdoor living is central to the lifestyle. From historic Portsmouth's rooftop decks overlooking the Piscataqua River to oceanfront properties in Rye and Hampton, Seacoast homeowners need deck construction that can handle the harsh marine environment. Salt spray, high humidity, and coastal winds accelerate corrosion and wood degradation far faster than inland conditions. We specify marine-grade stainless steel fasteners, coastal-rated composite decking, and reinforced structural connections on every Seacoast project. The Seacoast region also has some of New Hampshire's strictest building and environmental regulations, including the Shoreland Water Quality Protection Act, which restricts construction within 250 feet of public waters. Wetland buffers, tidal zone setbacks, and historic district guidelines in Portsmouth and Exeter add additional layers of complexity. We navigate these regulations regularly and maintain excellent relationships with local building and conservation officials. Seacoast properties often command premium values, and a well-built deck or outdoor living space is one of the highest-ROI improvements you can make.",
    nearbyAreas: ["new-hampshire", "north-shore", "southern-maine"],
    metaTitle: "Deck Builders in Seacoast NH | Portsmouth, Hampton, Exeter | Innovate Deck",
    metaDescription:
      "Seacoast NH deck builder specializing in coastal-grade construction. Serving Portsmouth, Hampton, Rye, Exeter & Dover. Marine-grade materials. Free consultations.",
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    state: "RI",
    phoneKey: "RHODE_ISLAND",
    headline: "Rhode Island Deck Building & Outdoor Living",
    description:
      "From Providence's urban neighborhoods to Newport's waterfront estates, Innovate Deck serves Rhode Island homeowners with premium deck construction, pergolas, and outdoor living spaces designed for the Ocean State's lifestyle.",
    heroGradient: "linear-gradient(135deg, #1A5276 0%, #5B8A72 50%, #D4A745 100%)",
    neighborhoods: [
      "Providence",
      "Newport",
      "Warwick",
      "Cranston",
      "East Greenwich",
      "Barrington",
      "Bristol",
      "Narragansett",
      "Westerly",
      "Jamestown",
    ],
    zipCodes: ["02903", "02840", "02886", "02920", "02818", "02806", "02809", "02882", "02891", "02835"],
    localContent:
      "Rhode Island may be the smallest state, but its incredible coastline, charming historic towns, and vibrant communities create exceptional demand for quality outdoor living spaces. Waterfront properties in Newport, Narragansett, and Jamestown benefit enormously from well-designed decks that capture Narragansett Bay views, and we specialize in the coastal-grade construction these locations demand. Providence and Cranston offer urban and suburban settings where rooftop decks, compact entertainment platforms, and screened porches maximize limited outdoor space. Rhode Island's building code is based on the International Residential Code with state-specific amendments, and the Coastal Resources Management Council (CRMC) adds additional regulations for properties near the shoreline. CRMC setback requirements, FEMA flood zone designations, and local zoning ordinances can significantly impact deck design and placement -- our team navigates these requirements routinely. Rhode Island's slightly milder coastal climate (compared to inland New England) extends the outdoor living season, making decks, pergolas, and screened porches especially valuable additions for Ocean State homeowners.",
    nearbyAreas: ["cape-cod", "south-shore"],
    metaTitle: "Deck Builders in Rhode Island | Providence, Newport, Warwick | Innovate Deck",
    metaDescription:
      "Rhode Island's trusted deck builder. Custom decks, pergolas, and outdoor living in Providence, Newport, Warwick & beyond. Coastal-grade construction. Free estimates.",
  },
  {
    slug: "southern-maine",
    name: "Southern Maine",
    state: "ME",
    phoneKey: "SOUTHERN_MAINE",
    headline: "Deck Builders in Southern Maine",
    description:
      "Southern Maine's stunning coastline and charming communities are the perfect setting for outdoor living. Innovate Deck builds custom decks, porches, and pergolas for homeowners from Kittery to Portland and beyond, engineered for Maine's rugged four-season climate.",
    heroGradient: "linear-gradient(135deg, #1B4D3E 0%, #2E8B57 50%, #B8860B 100%)",
    neighborhoods: [
      "Portland",
      "Kennebunk",
      "York",
      "Kittery",
      "Scarborough",
      "Cape Elizabeth",
      "Falmouth ME",
      "Saco",
      "Biddeford",
      "Old Orchard Beach",
      "Wells",
      "Kennebunkport",
    ],
    zipCodes: ["04101", "04043", "03909", "03904", "04074", "04107", "04105", "04072", "04005", "04064"],
    localContent:
      "Southern Maine combines dramatic Atlantic coastline, picturesque villages, and a thriving food and culture scene that draws both year-round residents and seasonal homeowners who demand exceptional outdoor living spaces. Portland's neighborhoods -- from the West End to Munjoy Hill -- feature compact urban lots where rooftop decks and multi-level rear-yard platforms maximize every square foot of outdoor space. Coastal communities like Kennebunk, Kennebunkport, Cape Elizabeth, and York offer waterfront and ocean-view properties where deck design must frame spectacular scenery while withstanding relentless marine exposure. Maine's climate is the most demanding in our service area: the southern coast averages 65-75 inches of snowfall, and winter temperatures regularly dip below zero. We engineer every Maine deck for heavy snow loads, deep frost lines (minimum 48 inches), and extreme freeze-thaw cycling. Maine's Shoreland Zoning Act regulates construction within 250 feet of coastal wetlands, rivers, and significant water bodies, adding important environmental considerations to deck projects near the water. We work closely with local code enforcement officers and conservation commissions across Southern Maine to ensure every project meets all applicable state and local regulations.",
    nearbyAreas: ["seacoast-nh", "new-hampshire"],
    metaTitle: "Deck Builders in Southern Maine | Portland, Kennebunk, York | Innovate Deck",
    metaDescription:
      "Southern Maine deck builder serving Portland, Kennebunk, York, Kittery & beyond. Decks engineered for Maine's coastal climate. 25+ years experience. Free estimates.",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

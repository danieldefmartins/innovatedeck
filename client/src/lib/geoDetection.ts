const CITY_TO_AREA: Record<string, string> = {
  // Boston metro
  boston: "boston", cambridge: "boston", somerville: "boston", brookline: "boston",
  "jamaica plain": "boston", dorchester: "boston", charlestown: "boston",
  quincy: "boston", medford: "boston", malden: "boston", everett: "boston",
  revere: "boston", chelsea: "boston", winthrop: "boston", watertown: "boston",
  arlington: "boston", belmont: "boston", waltham: "boston",

  // North Shore
  salem: "north-shore", marblehead: "north-shore", beverly: "north-shore",
  gloucester: "north-shore", newburyport: "north-shore", rockport: "north-shore",
  ipswich: "north-shore", danvers: "north-shore", peabody: "north-shore",
  swampscott: "north-shore", lynn: "north-shore", saugus: "north-shore",

  // South Shore
  hingham: "south-shore", scituate: "south-shore", duxbury: "south-shore",
  plymouth: "south-shore", marshfield: "south-shore", cohasset: "south-shore",
  norwell: "south-shore", hanover: "south-shore", weymouth: "south-shore",
  braintree: "south-shore", rockland: "south-shore", abington: "south-shore",

  // Cape Cod
  barnstable: "cape-cod", falmouth: "cape-cod", chatham: "cape-cod",
  wellfleet: "cape-cod", brewster: "cape-cod", dennis: "cape-cod",
  yarmouth: "cape-cod", sandwich: "cape-cod", orleans: "cape-cod",
  provincetown: "cape-cod", mashpee: "cape-cod", harwich: "cape-cod",
  hyannis: "cape-cod", "west yarmouth": "cape-cod",

  // MetroWest
  framingham: "metrowest", natick: "metrowest", wellesley: "metrowest",
  needham: "metrowest", newton: "metrowest", sudbury: "metrowest",
  wayland: "metrowest", ashland: "metrowest", hopkinton: "metrowest",
  westborough: "metrowest", marlborough: "metrowest",

  // Worcester
  worcester: "worcester", shrewsbury: "worcester", holden: "worcester",
  auburn: "worcester", grafton: "worcester", millbury: "worcester",
  "west boylston": "worcester", leicester: "worcester", paxton: "worcester",

  // Merrimack Valley
  lowell: "merrimack-valley", lawrence: "merrimack-valley",
  andover: "merrimack-valley", haverhill: "merrimack-valley",
  methuen: "merrimack-valley", "north andover": "merrimack-valley",
  dracut: "merrimack-valley", chelmsford: "merrimack-valley",
  billerica: "merrimack-valley", tewksbury: "merrimack-valley",

  // New Hampshire
  manchester: "new-hampshire", nashua: "new-hampshire", concord: "new-hampshire",
  keene: "new-hampshire", laconia: "new-hampshire", lebanon: "new-hampshire",
  derry: "new-hampshire", londonderry: "new-hampshire", hudson: "new-hampshire",
  merrimack: "new-hampshire", bedford: "new-hampshire", goffstown: "new-hampshire",

  // Seacoast NH
  portsmouth: "seacoast-nh", hampton: "seacoast-nh", exeter: "seacoast-nh",
  dover: "seacoast-nh", durham: "seacoast-nh", rye: "seacoast-nh",
  stratham: "seacoast-nh", newmarket: "seacoast-nh",

  // Rhode Island
  providence: "rhode-island", newport: "rhode-island", warwick: "rhode-island",
  cranston: "rhode-island", "east greenwich": "rhode-island",
  barrington: "rhode-island", bristol: "rhode-island",
  narragansett: "rhode-island", westerly: "rhode-island", pawtucket: "rhode-island",

  // Southern Maine
  portland: "southern-maine", kennebunk: "southern-maine", york: "southern-maine",
  kittery: "southern-maine", scarborough: "southern-maine",
  "cape elizabeth": "southern-maine", saco: "southern-maine",
  biddeford: "southern-maine", "old orchard beach": "southern-maine",
  wells: "southern-maine", ogunquit: "southern-maine",
};

const REGION_TO_AREA: Record<string, string> = {
  massachusetts: "boston",
  "new hampshire": "new-hampshire",
  "rhode island": "rhode-island",
  maine: "southern-maine",
  connecticut: "boston", // closest
};

export async function detectGeoLocation(): Promise<string | null> {
  const stored = sessionStorage.getItem("geo_location_code");
  if (stored) return stored;

  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return null;
    const data = await res.json();

    const city = (data.city || "").toLowerCase();
    const region = (data.region || "").toLowerCase();

    const area = CITY_TO_AREA[city] || REGION_TO_AREA[region] || null;

    if (area) {
      sessionStorage.setItem("geo_location_code", area);
    }

    return area;
  } catch {
    return null;
  }
}

export function getStoredLocation(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem("geo_location_code");
}

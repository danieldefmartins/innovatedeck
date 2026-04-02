import { useEffect, useState } from "react";
import { PHONE_NUMBERS } from "./constants";
import { getStoredLocation } from "./geoDetection";

const AREA_TO_PHONE_KEY: Record<string, string> = {
  boston: "BOSTON",
  "north-shore": "NORTH_SHORE",
  "south-shore": "SOUTH_SHORE",
  "cape-cod": "CAPE_COD",
  metrowest: "METROWEST",
  worcester: "WORCESTER",
  "merrimack-valley": "MERRIMACK_VALLEY",
  "new-hampshire": "NEW_HAMPSHIRE",
  "seacoast-nh": "SEACOAST_NH",
  "rhode-island": "RHODE_ISLAND",
  "southern-maine": "SOUTHERN_MAINE",
};

export function useLocalPhone(areaSlug?: string) {
  const [phone, setPhone] = useState(PHONE_NUMBERS.MAIN);

  useEffect(() => {
    // Priority 1: explicit area slug (from route)
    if (areaSlug && AREA_TO_PHONE_KEY[areaSlug]) {
      const key = AREA_TO_PHONE_KEY[areaSlug];
      setPhone(PHONE_NUMBERS[key] || PHONE_NUMBERS.MAIN);
      return;
    }

    // Priority 2: geo-detected location
    const geo = getStoredLocation();
    if (geo && AREA_TO_PHONE_KEY[geo]) {
      const key = AREA_TO_PHONE_KEY[geo];
      setPhone(PHONE_NUMBERS[key] || PHONE_NUMBERS.MAIN);
      return;
    }

    // Fallback
    setPhone(PHONE_NUMBERS.MAIN);
  }, [areaSlug]);

  return phone;
}

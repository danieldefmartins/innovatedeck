import { useEffect } from "react";
import { detectGeoLocation } from "@/lib/geoDetection";

export default function GeoRedirect() {
  useEffect(() => {
    // Only detect on first visit, don't redirect — just store for phone/badge
    const alreadyDetected = sessionStorage.getItem("geo_location_code");
    if (!alreadyDetected) {
      detectGeoLocation();
    }
  }, []);

  return null;
}

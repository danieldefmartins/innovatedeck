import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { getStoredLocation } from "@/lib/geoDetection";

const SERVICES = [
  { name: "Composite Decking", slug: "composite-decking" },
  { name: "Wood Decking", slug: "wood-decking" },
  { name: "Deck Repair & Restoration", slug: "deck-repair-restoration" },
  { name: "Pergolas & Shade Structures", slug: "pergolas-shade-structures" },
  { name: "Porches & Screened Porches", slug: "porches-screened-porches" },
  { name: "Outdoor Kitchens & Living", slug: "outdoor-kitchens-living" },
  { name: "Railings & Stairs", slug: "railings-stairs" },
];

const AREAS = [
  {
    state: "Massachusetts",
    regions: [
      { name: "Boston", slug: "boston" },
      { name: "North Shore", slug: "north-shore" },
      { name: "South Shore", slug: "south-shore" },
      { name: "Cape Cod", slug: "cape-cod" },
      { name: "MetroWest", slug: "metrowest" },
      { name: "Worcester", slug: "worcester" },
      { name: "Merrimack Valley", slug: "merrimack-valley" },
    ],
  },
  {
    state: "New Hampshire",
    regions: [
      { name: "Statewide", slug: "new-hampshire" },
      { name: "Seacoast NH", slug: "seacoast-nh" },
    ],
  },
  {
    state: "Rhode Island",
    regions: [{ name: "Statewide", slug: "rhode-island" }],
  },
  {
    state: "Southern Maine",
    regions: [{ name: "Statewide", slug: "southern-maine" }],
  },
];

const AREA_LABELS: Record<string, string> = {
  boston: "Greater Boston",
  "north-shore": "North Shore, MA",
  "south-shore": "South Shore, MA",
  "cape-cod": "Cape Cod",
  metrowest: "MetroWest, MA",
  worcester: "Worcester, MA",
  "merrimack-valley": "Merrimack Valley",
  "new-hampshire": "New Hampshire",
  "seacoast-nh": "Seacoast NH",
  "rhode-island": "Rhode Island",
  "southern-maine": "Southern Maine",
};

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [geoArea, setGeoArea] = useState<string | null>(null);

  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const areasTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loc = getStoredLocation();
    if (loc) {
      setGeoArea(AREA_LABELS[loc] || loc);
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
    setAreasOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const handleAreasEnter = () => {
    if (areasTimeout.current) clearTimeout(areasTimeout.current);
    setAreasOpen(true);
    setServicesOpen(false);
  };

  const handleAreasLeave = () => {
    areasTimeout.current = setTimeout(() => setAreasOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        {geoArea && (
          <div className="bg-primary text-primary-foreground text-xs py-1">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-1.5">
              <MapPin className="h-3 w-3" />
              <span>Serving {geoArea}</span>
            </div>
          </div>
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex-shrink-0">
              <span className="font-display font-bold text-xl lg:text-2xl text-primary tracking-wide">
                INNOVATE DECK
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive(link.href)
                            ? "text-primary"
                            : "text-foreground/70 hover:text-primary"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {servicesOpen && (
                        <div className="absolute top-full left-0 pt-2">
                          <div className="bg-white rounded-lg shadow-xl border border-border/50 py-2 w-64">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.label === "Areas We Serve") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleAreasEnter}
                      onMouseLeave={handleAreasLeave}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive("/areas")
                            ? "text-primary"
                            : "text-foreground/70 hover:text-primary"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${
                            areasOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {areasOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                          <div className="bg-white rounded-lg shadow-xl border border-border/50 py-4 px-6 w-[480px]">
                            <div className="grid grid-cols-2 gap-6">
                              {AREAS.map((area) => (
                                <div key={area.state}>
                                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                    {area.state}
                                  </h4>
                                  <div className="space-y-1">
                                    {area.regions.map((region) => (
                                      <Link
                                        key={region.slug}
                                        href={`/areas/${region.slug}`}
                                        className="block text-sm text-foreground/70 hover:text-primary transition-colors py-1"
                                      >
                                        {region.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <PhoneLink className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                {COMPANY.phone.display}
              </PhoneLink>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/contact">Free Estimate</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-out panel — SCROLLABLE */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            {/* Fixed header area */}
            <div className="h-16 flex items-center justify-end px-4 shrink-0">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8">
              {geoArea && (
                <div className="flex items-center gap-1.5 text-xs text-primary mb-4 pb-4 border-b border-border/30">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Serving {geoArea}</span>
                </div>
              )}

              <div className="space-y-1">
                {NAV_LINKS.map((link) => {
                  if (link.label === "Services") {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-md transition-colors ${
                            isActive(link.href)
                              ? "text-primary bg-primary/5"
                              : "text-foreground/80 hover:text-primary hover:bg-muted"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary/10 pl-3">
                            <Link
                              href="/services"
                              className="block px-3 py-2 text-sm font-medium text-primary"
                            >
                              All Services
                            </Link>
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (link.label === "Areas We Serve") {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                          className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-md transition-colors ${
                            isActive("/areas")
                              ? "text-primary bg-primary/5"
                              : "text-foreground/80 hover:text-primary hover:bg-muted"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              mobileAreasOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileAreasOpen && (
                          <div className="ml-4 mt-1 border-l-2 border-primary/10 pl-3">
                            {AREAS.map((area) => (
                              <div key={area.state} className="mb-3">
                                <h4 className="px-3 pt-2 text-xs font-semibold text-primary uppercase tracking-wider">
                                  {area.state}
                                </h4>
                                {area.regions.map((region) => (
                                  <Link
                                    key={region.slug}
                                    href={`/areas/${region.slug}`}
                                    className="block px-3 py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                                  >
                                    {region.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                        isActive(link.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/80 hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-border/30 space-y-4">
                <PhoneLink className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <Phone className="h-4 w-4 text-primary" />
                  {COMPANY.phone.display}
                </PhoneLink>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="/contact">Get a Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

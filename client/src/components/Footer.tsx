import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";
import FadeIn from "@/components/FadeIn";

const SERVICES = [
  { name: "Composite Decking", slug: "composite-decking" },
  { name: "Wood Decking", slug: "wood-decking" },
  { name: "Deck Repair & Restoration", slug: "deck-repair-restoration" },
  { name: "Pergolas & Shade Structures", slug: "pergolas-shade-structures" },
  { name: "Porches & Screened Porches", slug: "porches-screened-porches" },
  { name: "Outdoor Kitchens & Living", slug: "outdoor-kitchens-living" },
  { name: "Railings & Stairs", slug: "railings-stairs" },
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const SERVICE_AREAS = [
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

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <FadeIn className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display font-bold text-xl text-white tracking-wide">
                INNOVATE DECK
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Premium deck building and outdoor living solutions across New England.
              Quality craftsmanship that transforms your outdoor space.
            </p>
            <div className="space-y-3">
              <PhoneLink className="flex items-center gap-2.5 text-sm text-white/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                {COMPANY.phone.display}
              </PhoneLink>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-white/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Serving MA, NH, RI &amp; Southern ME</span>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={200}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Service Areas */}
          <FadeIn delay={300}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Service Areas
            </h3>
            <div className="space-y-4">
              {SERVICE_AREAS.map((area) => (
                <div key={area.state}>
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {area.state}
                  </h4>
                  <ul className="space-y-2">
                    {area.regions.map((region) => (
                      <li key={region.slug}>
                        <Link
                          href={`/areas/${region.slug}`}
                          className="text-sm text-white/70 hover:text-accent transition-colors"
                        >
                          {region.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Innovate Deck. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span>Licensed &amp; Insured</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>MA, NH, RI, ME</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { SERVICE_IMAGES, PORTFOLIO_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const stats = [
  { label: "Years Experience", value: "25+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Licensed & Insured", value: "100%" },
  { label: "Free Estimates", value: "Always" },
];

const differentiators = [
  {
    icon: Clock,
    title: "25+ Years Experience",
    description:
      "Hundreds of projects completed across New England. Fewer surprises, better results.",
  },
  {
    icon: Leaf,
    title: "Premium Materials",
    description:
      "Certified Trex, TimberTech, and Azek installers with manufacturer-backed warranties.",
  },
  {
    icon: MapPin,
    title: "Built for Our Climate",
    description:
      "Engineered for freeze-thaw cycles, coastal salt air, and heavy New England snow loads.",
  },
  {
    icon: Shield,
    title: "Guaranteed Work",
    description:
      "Every project backed by our craftsmanship warranty. We stand behind what we build.",
  },
];

const serviceAreas: { state: string; areas: { name: string; slug: string }[] }[] = [
  {
    state: "Massachusetts",
    areas: [
      { name: "Greater Boston", slug: "boston" },
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
    areas: [
      { name: "Statewide", slug: "new-hampshire" },
      { name: "Seacoast NH", slug: "seacoast-nh" },
    ],
  },
  {
    state: "Rhode Island",
    areas: [{ name: "Statewide", slug: "rhode-island" }],
  },
  {
    state: "Maine",
    areas: [{ name: "Southern Maine", slug: "southern-maine" }],
  },
];

// Filter out deck-staining-sealing from homepage services
const homepageServices = services.filter((s) => s.slug !== "deck-staining-sealing");

// Curated portfolio images for the homepage grid (uniform cards)
const homepagePortfolio = [
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-06")!, // Poolside Deck (deck-30)
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-03")!, // Ipe Herringbone (deck-90)
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-11")!, // Backyard Wood Deck (deck-100)
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-18")!, // Deck with Wide Stairs (deck-105)
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-05")!, // Custom Deck Stairs (deck-15)
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-01")!, // Ipe Deck with Pergola (deck-70)
].filter(Boolean);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[85vh] flex items-center">
        <img
          src="/images/portfolio/deck-30.jpg"
          alt="Premium pool deck with wood railings built by Innovate Deck"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="container relative z-10 py-24 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              New England's Trusted Deck Builders
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
              Build Your Dream
              <br />
              <span className="text-accent">Outdoor Space</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
              Premium deck building, pergolas, porches, and outdoor living spaces
              crafted for New England homeowners. Licensed, insured, and trusted
              for over 25 years.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link href="/contact">
                  <CalendarCheck className="w-5 h-5" />
                  Get Free Estimate
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
                asChild
              >
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Stats Bar ───────── */}
      <section className="bg-primary py-10 lg:py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services Grid ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our Services
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              From composite decks and wood decking to pergolas, porches, and
              outdoor kitchens — we handle every aspect of your outdoor
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Photo */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={SERVICE_IMAGES[service.slug] || ""}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Why Choose Us ───────── */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              The Innovate Deck Difference
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Why Choose Us
            </h2>
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
              When you hire us, you get more than a contractor — you get a
              dedicated partner committed to building something exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl mx-auto">
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Portfolio Preview ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Our Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              See Our Work
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Browse a selection of our recent projects across New England.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homepagePortfolio.map((item) => (
              <Link key={item.id} href="/portfolio">
                <div className="group cursor-pointer rounded-xl overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle gradient only at bottom for text */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">
                        {item.title}
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Client Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.slice(0, 4).map((t, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-8 shadow-sm flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                  {t.text}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.location} &middot; {t.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Service Areas ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Where We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Proudly Serving New England
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Licensed and insured across four states. Wherever you are in
              southern New England, we're ready to build.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
              {serviceAreas.map((group) => (
                <div key={group.state}>
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    {group.state}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.areas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Button variant="outline" size="lg" asChild>
              <Link href="/areas">
                All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <section className="relative py-20 lg:py-28">
        <img
          src="/images/portfolio/deck-98.jpg"
          alt="Beautiful ipe deck with outdoor furniture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="container relative z-10 text-center">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
            Start Your Project Today
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/75 leading-relaxed max-w-xl mx-auto mb-10">
            Get a free, no-obligation estimate from New England's trusted deck
            building experts. Call us today or schedule your consultation online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">
                <CalendarCheck className="w-5 h-5" />
                Get Free Estimate
              </Link>
            </Button>
            <a
              href={`tel:+${COMPANY.phone.tel}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

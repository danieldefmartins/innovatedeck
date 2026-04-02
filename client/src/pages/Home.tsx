import { Link } from "wouter";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Leaf,
  MapPin,
  Phone,
  Quote,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/PhoneLink";
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
    title: "25+ Years of Experience",
    description:
      "Over two decades of building premium decks and outdoor living spaces across New England. Our experience means fewer surprises and better results.",
  },
  {
    icon: Leaf,
    title: "Quality Materials",
    description:
      "Certified installers of Trex, TimberTech, and Azek. We use only premium-grade lumber and materials backed by industry-leading warranties.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "We build for New England weather. Freeze-thaw cycles, coastal salt air, heavy snow loads — our designs and materials are chosen to last in our climate.",
  },
  {
    icon: Shield,
    title: "Workmanship Warranty",
    description:
      "Every project is backed by our craftsmanship guarantee. We stand behind our work because we know it's built to last.",
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
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background image — deck-30.jpg pool deck, landscape */}
        <img
          src="/images/portfolio/deck-30.jpg"
          alt="Premium pool deck with wood railings built by Innovate Deck"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="container relative z-10 py-24 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-5">
              New England's Trusted Deck Builders
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-8">
              Build Your Dream
              <br />
              <span className="text-accent">Outdoor Space</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl">
              Premium deck building, pergolas, porches, and outdoor living spaces
              crafted for New England homeowners. Licensed, insured, and trusted
              for over 25 years across Massachusetts, New Hampshire, Rhode Island,
              and Maine.
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
      <section className="bg-primary">
        <div className="container py-8 lg:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70 mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services Grid ───────── */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From composite decks and wood decking to pergolas, porches, and
              outdoor kitchens — we handle every aspect of your outdoor
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img
                    src={SERVICE_IMAGES[service.slug] || ""}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <h3 className="font-display text-xl font-bold text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium mt-3 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
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
      <section className="py-24 lg:py-36 bg-muted">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              The Innovate Deck Difference
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              When you hire us, you get more than a contractor — you get a
              dedicated partner committed to building something exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 shadow-md shadow-accent/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Portfolio Preview ───────── */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Our Portfolio
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See Our Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Browse a selection of our recent projects across New England. Every
              build reflects our commitment to craftsmanship and quality.
            </p>
          </div>

          {/* Uniform height grid — clean 3-col on desktop, 2-col on tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepagePortfolio.map((item) => (
              <Link key={item.id} href="/portfolio">
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <h3 className="font-display text-lg font-bold text-white transition-transform duration-500 translate-y-1 group-hover:translate-y-0">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      {item.location}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                      View Project <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
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
      <section className="py-24 lg:py-36 bg-muted">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Client Testimonials
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Real feedback from homeowners who trusted us with their outdoor
              living projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500 relative flex flex-col"
              >
                {/* Decorative quote mark */}
                <Quote className="w-10 h-10 text-accent/15 absolute top-6 right-6" />

                {/* Star rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-foreground text-sm leading-relaxed mb-6 relative z-10 flex-1">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-border/50">
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

          <div className="text-center mt-14">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">
                Read More Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Service Areas ───────── */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Where We Work
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proudly Serving New England
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Licensed and insured across four states. Wherever you are in
              southern New England, we're ready to build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((group) => (
              <div
                key={group.state}
                className="bg-card rounded-2xl p-7 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.state}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2.5 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300 flex-shrink-0" />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
      <section className="relative py-28 lg:py-40">
        {/* Background image — deck-98.jpg ipe deck with furniture */}
        <img
          src="/images/portfolio/deck-98.jpg"
          alt="Beautiful ipe deck with outdoor furniture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="container relative z-10 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-5">
            Start Your Project Today
          </p>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
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
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
              asChild
            >
              <PhoneLink className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {COMPANY.phone.display}
              </PhoneLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

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
import { HERO_IMAGES, SERVICE_IMAGES, PORTFOLIO_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";

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

export default function Home() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGES.home})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              New England's Trusted Deck Builders
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Build Your Dream
              <br />
              <span className="text-accent">Outdoor Space</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Premium deck building, pergolas, porches, and outdoor living spaces
              crafted for New England homeowners. Licensed, insured, and trusted
              for over 25 years across Massachusetts, New Hampshire, Rhode Island,
              and Maine.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
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

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-center border border-white/10 transition-all duration-500 hover:bg-white/15 hover:border-white/20"
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services Grid (Photo Cards) ───────── */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From composite decks and wood decking to pergolas, porches, and
              outdoor kitchens — we handle every aspect of your outdoor
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Background image with zoom */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${SERVICE_IMAGES[service.slug] || ""})`,
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
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
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              The Innovate Deck Difference
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              When you hire us, you get more than a contractor — you get a
              dedicated partner committed to building something exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Portfolio Preview (Photo Grid) ───────── */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Our Portfolio
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
              See Our Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Browse a selection of our recent projects across New England. Every
              build reflects our commitment to craftsmanship and quality.
            </p>
          </div>

          {/* 3-column masonry-style grid with varied heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_IMAGES.slice(0, 6).map((item, index) => (
              <Link key={item.id} href="/portfolio">
                <div
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                    index % 3 === 0
                      ? "h-72 lg:h-80"
                      : index % 3 === 1
                        ? "h-64 lg:h-72"
                        : "h-72 lg:h-96"
                  }`}
                >
                  {/* Image with zoom */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay - darker on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />
                  {/* Text content - visible on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-display text-xl font-bold text-white transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
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
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Client Testimonials
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Real feedback from homeowners who trusted us with their outdoor
              living projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative"
              >
                {/* Decorative quote mark */}
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />

                {/* Star rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
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

          <div className="text-center mt-12">
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
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Where We Work
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Proudly Serving New England
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Licensed and insured across four states. Wherever you are in
              southern New England, we're ready to build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((group) => (
              <div
                key={group.state}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.state}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
      <section className="relative py-24 lg:py-36">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGES.cta})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="container relative z-10 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Start Your Project Today
          </p>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
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

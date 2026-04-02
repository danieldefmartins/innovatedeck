import { Link } from "wouter";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Leaf,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import PhoneLink from "@/components/PhoneLink";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
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

const portfolioItems = [
  { label: "Composite Deck", gradient: "linear-gradient(135deg, #5B3A29 0%, #8B6914 100%)" },
  { label: "Cedar Pergola", gradient: "linear-gradient(135deg, #2E8B57 0%, #DAA520 100%)" },
  { label: "Screened Porch", gradient: "linear-gradient(135deg, #4A6741 0%, #C4A35A 100%)" },
  { label: "Outdoor Kitchen", gradient: "linear-gradient(135deg, #8B4513 0%, #CD853F 100%)" },
  { label: "Cable Railings", gradient: "linear-gradient(135deg, #4A4A4A 0%, #A0522D 100%)" },
  { label: "Deck Restoration", gradient: "linear-gradient(135deg, #D2691E 0%, #F5DEB3 100%)" },
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
    areas: [
      { name: "Statewide", slug: "rhode-island" },
    ],
  },
  {
    state: "Maine",
    areas: [
      { name: "Southern Maine", slug: "southern-maine" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section
        className="relative py-20 lg:py-32"
        style={{
          background:
            "linear-gradient(135deg, #5C3D2E 0%, #7A5A42 30%, #D4A853 70%, #8B6914 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Your Dream
              <br />
              Outdoor Space
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              Premium deck building, pergolas, porches, and outdoor living spaces
              crafted for New England homeowners. Licensed, insured, and trusted
              for over 25 years across Massachusetts, New Hampshire, Rhode Island,
              and Maine.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="accent" size="xl" asChild>
                <Link href="/contact">
                  <CalendarCheck className="w-5 h-5" />
                  Get Free Estimate
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
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
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/15"
              >
                <p className="font-display text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/75 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services Grid ───────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From composite decks and wood decking to pergolas, porches, and
              outdoor kitchens — we handle every aspect of your outdoor
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                heroGradient={service.heroGradient}
              />
            ))}
          </div>

          <div className="text-center mt-10">
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
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Innovate Deck
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              When you hire us, you get more than a contractor — you get a
              dedicated partner committed to building something exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
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

      {/* ───────── Portfolio Preview ───────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              See Our Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse a selection of our recent projects across New England. Every
              build reflects our commitment to craftsmanship and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Link key={item.label} href="/portfolio">
                <div
                  className="group relative h-56 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
                  style={{ background: item.gradient }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-white/90 text-foreground text-sm font-medium px-3 py-1.5 rounded-md">
                      {item.label}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
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
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from homeowners who trusted us with their outdoor
              living projects.
            </p>
          </div>

          <Testimonials testimonials={testimonials} limit={3} />

          <div className="text-center mt-10">
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
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Proudly Serving New England
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Licensed and insured across four states. Wherever you are in
              southern New England, we're ready to build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((group) => (
              <div key={group.state}>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  {group.state}
                </h3>
                <ul className="space-y-2">
                  {group.areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
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
      <section
        className="py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, #5C3D2E 0%, #3D2820 50%, #2D5A3D 100%)",
        }}
      >
        <div className="container text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
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
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
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

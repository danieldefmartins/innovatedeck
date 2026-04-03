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
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { SERVICE_IMAGES, PORTFOLIO_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const differentiators = [
  {
    icon: Clock,
    title: "25+ Years Experience",
    description: "Hundreds of projects completed across New England.",
  },
  {
    icon: Leaf,
    title: "Premium Materials",
    description: "Certified Trex, TimberTech, and Azek installers.",
  },
  {
    icon: MapPin,
    title: "Built for Our Climate",
    description: "Engineered for New England freeze-thaw and coastal salt air.",
  },
  {
    icon: Shield,
    title: "Guaranteed Work",
    description: "Every project backed by our craftsmanship warranty.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Free Consultation",
    description:
      "We visit your home, discuss your vision, and explore material options together.",
  },
  {
    num: "02",
    title: "Custom Design",
    description:
      "Our team creates plans tailored to your home, lifestyle, and budget.",
  },
  {
    num: "03",
    title: "Expert Build",
    description:
      "We handle permits, inspections, and build with meticulous attention to detail.",
  },
  {
    num: "04",
    title: "Final Walkthrough",
    description:
      "We review every detail together and register all warranties.",
  },
];

const homepageServices = services.filter((s) => s.slug !== "deck-staining-sealing");

const homepagePortfolio = [
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-06")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-03")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-11")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-18")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-05")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-01")!,
].filter(Boolean);

const featuredTestimonial = testimonials[0];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <>
      {/* ───────── 1. Hero ───────── */}
      <section className="relative min-h-[90vh] flex items-center">
        <img
          src="/images/portfolio/deck-30.jpg"
          alt="Premium pool deck with wood railings built by Innovate Deck"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="container relative z-10 pt-28 lg:pt-40 py-32 lg:py-44">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                New England's Trusted Deck Builders
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Build Your Dream
                <br />
                <span className="text-accent">Outdoor Space</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                Premium decks, pergolas, and outdoor living — crafted for New
                England homeowners for over 25 years.
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
          </FadeIn>
        </div>
      </section>

      {/* ───────── 2. Trust & Stats Bar ───────── */}
      <section className="bg-muted py-8">
        <div className="container">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                Certified Trex & TimberTech Installers
              </span>
              <span className="hidden md:block w-px h-6 bg-border" />
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div>
                  <span className="font-display text-2xl font-bold text-primary">
                    25+
                  </span>
                  <span className="text-sm text-muted-foreground ml-1.5">
                    Years
                  </span>
                </div>
                <div>
                  <span className="font-display text-2xl font-bold text-primary">
                    500+
                  </span>
                  <span className="text-sm text-muted-foreground ml-1.5">
                    Projects
                  </span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Licensed & Insured
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 3. Services Grid ───────── */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-14">
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
                What We Do
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Services
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homepageServices.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 80}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full bg-card border border-border/40">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[service.slug] || ""}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-5 py-4 flex items-center justify-between">
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 4. Why Choose Us — Split Layout ───────── */}
      <section className="py-20 lg:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <img
                  src="/images/portfolio/deck-30.jpg"
                  alt="Premium outdoor deck project by Innovate Deck"
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn direction="right">
                <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
                  The Innovate Deck Difference
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
                  Why Choose Us
                </h2>
              </FadeIn>

              <div className="space-y-8">
                {differentiators.map((item, i) => (
                  <FadeIn key={item.title} direction="right" delay={i * 100}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 5. How We Work ───────── */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-14">
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
                Our Process
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                How We Work
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 150}>
                <div className="text-center">
                  <span className="font-display text-5xl lg:text-6xl font-bold text-accent/20 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 6. Portfolio Preview ───────── */}
      <section className="py-20 lg:py-24 bg-muted">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-14">
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
                Our Portfolio
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                See Our Work
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homepagePortfolio.map((item, i) => (
              <FadeIn key={item.id} delay={i * 80}>
                <Link href="/portfolio">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-medium text-sm">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View Full Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 7. Featured Testimonial ───────── */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-display text-7xl lg:text-8xl text-accent/30 leading-none block mb-6">
                &ldquo;
              </span>
              <p className="text-xl md:text-2xl italic text-foreground leading-relaxed mb-8">
                {featuredTestimonial.text}
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {featuredTestimonial.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {featuredTestimonial.location}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 8. Final CTA ───────── */}
      <section className="relative py-20 lg:py-28">
        <img
          src="/images/portfolio/deck-98.jpg"
          alt="Beautiful ipe deck with outdoor furniture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Get a free, no-obligation estimate from New England's trusted
              deck building experts.
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}

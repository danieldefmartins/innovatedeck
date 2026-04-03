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
    description:
      "Hundreds of projects completed across New England with a proven track record of quality craftsmanship.",
  },
  {
    icon: Leaf,
    title: "Premium Materials",
    description:
      "Certified Trex, TimberTech, and Azek installers — we use only the best products available.",
  },
  {
    icon: MapPin,
    title: "Built for Our Climate",
    description:
      "Engineered for New England's freeze-thaw cycles and coastal salt air conditions.",
  },
  {
    icon: Shield,
    title: "Guaranteed Work",
    description:
      "Every project backed by our craftsmanship warranty. Licensed and insured across four states.",
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

// 6 services for a clean 3x2 grid
const homepageServices = services
  .filter((s) => s.slug !== "deck-staining-sealing" && s.slug !== "railings-stairs")
  .slice(0, 6);

const homepagePortfolio = [
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-06")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-03")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-11")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-18")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-05")!,
  PORTFOLIO_IMAGES.find((p) => p.id === "portfolio-01")!,
].filter(Boolean);

const featuredTestimonial = testimonials[2]; // David R. - shorter, punchy quote

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="container relative z-10 pt-40 lg:pt-52 pb-24 lg:pb-32">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-4">
                New England's Trusted Deck Builders
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Build Your Dream
                <br />
                <span className="text-accent">Outdoor Space</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
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
                  className="border-white/50 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm bg-white/5"
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
      <section className="bg-primary py-6 lg:py-8">
        <div className="container">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
              <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">
                Certified Trex & TimberTech Installers
              </span>
              <span className="hidden md:block w-px h-8 bg-white/20" />
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-accent">
                    25+
                  </span>
                  <span className="text-sm text-white/70">Years</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-accent">
                    500+
                  </span>
                  <span className="text-sm text-white/70">Projects</span>
                </div>
                <span className="text-sm font-medium text-white/70">
                  Licensed & Insured
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 3. Services Grid ───────── */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-3">
                What We Do
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Our Services
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {homepageServices.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 60}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full bg-card border border-border/40">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[service.slug] || ""}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-6 py-5 flex items-center justify-between">
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
            <div className="text-center mt-12">
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
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <img
                  src="/images/portfolio/deck-30.jpg"
                  alt="Premium outdoor deck project by Innovate Deck"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn direction="right">
                <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-3">
                  The Innovate Deck Difference
                </p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                  Why Choose Us
                </h2>
              </FadeIn>

              <div className="space-y-10">
                {differentiators.map((item, i) => (
                  <FadeIn key={item.title} direction="right" delay={i * 80}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold mb-1.5">
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
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-3">
                Our Process
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                How We Work
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 120}>
                <div className="text-center">
                  <span className="font-display text-5xl font-bold text-accent/20 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
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
      <section className="py-20 lg:py-28">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-3">
                Our Portfolio
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                See Our Work
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepagePortfolio.map((item, i) => (
              <FadeIn key={item.id} delay={i * 60}>
                <Link href="/portfolio">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <p className="text-white font-display font-bold text-lg md:text-xl drop-shadow-lg">
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
            <div className="text-center mt-12">
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
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-6">
                What Our Clients Say
              </p>
              <span className="font-display text-5xl text-white/15 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-base md:text-lg italic text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
                {featuredTestimonial.text}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-display font-bold text-accent text-sm">
                    {featuredTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-xs text-white/50">
                    {featuredTestimonial.location}
                  </p>
                </div>
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
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
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
              <Button
                variant="outline"
                size="xl"
                className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm"
                asChild
              >
                <a href={`tel:+${COMPANY.phone.tel}`}>
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone.display}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

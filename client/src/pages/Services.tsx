import { Link } from "wouter";
import {
  CalendarCheck,
  Phone,
  ClipboardList,
  Ruler,
  HardHat,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import PhoneLink from "@/components/PhoneLink";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/constants";
import { HERO_IMAGES } from "@/data/images";

const processSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Free Consultation",
    description:
      "We visit your home, discuss your vision, take measurements, and review material options. You'll receive a detailed proposal with 3D renderings so you can see exactly what we'll build.",
  },
  {
    step: 2,
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Our team creates custom plans tailored to your home's architecture, your lifestyle, and your budget. We handle all engineering calculations and code compliance.",
  },
  {
    step: 3,
    icon: HardHat,
    title: "Permitting & Build",
    description:
      "We pull all municipal permits, coordinate inspections, and build your project with meticulous attention to detail. Most projects are completed in 1-4 weeks.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Final Walkthrough",
    description:
      "We walk through every detail together, ensure everything exceeds your expectations, register warranties, and leave your property spotless.",
  },
  {
    step: 5,
    icon: Sparkles,
    title: "Enjoy Your Space",
    description:
      "Step out onto your new outdoor living area. We provide maintenance guides and stand behind our work with our craftsmanship warranty.",
  },
];

export default function Services() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES.services})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

        <div className="container relative z-10 text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            What We Build
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 max-w-4xl mx-auto">
            Premium Deck Building & Outdoor Living
          </h1>
          <p className="text-lg leading-relaxed text-white/85 max-w-xl mx-auto">
            From composite and hardwood decks to pergolas, porches, outdoor
            kitchens, and expert restoration — custom-designed, permitted, and
            built by our experienced team.
          </p>
        </div>
      </section>

      {/* ───────── Company Intro ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Comprehensive Solutions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Everything Your Outdoor Space Needs
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {COMPANY.name} delivers comprehensive deck building and outdoor
              living solutions across New England. With {COMPANY.experience}{" "}
              years of experience and over 500 completed projects, every build is
              backed by expert craftsmanship and industry-leading warranties. We
              handle design, permitting, construction, and finishing — so you can
              focus on enjoying your new outdoor space.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Services Grid ───────── */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our Services
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Explore our full range of services. Click any card for details,
              features, and pricing information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
        </div>
      </section>

      {/* ───────── Our Process ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our Process
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              From first call to final walkthrough, we make building your dream
              outdoor space simple, transparent, and enjoyable.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative flex gap-6 lg:gap-8">
                {/* Vertical line connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 lg:left-8 top-16 bottom-0 w-px bg-border" />
                )}

                {/* Step number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-12 lg:pb-16">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-bold text-sm uppercase tracking-wide">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES.cta})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80" />

        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you know exactly what you want or need help exploring
            options, our team is here to guide you. Get a free, no-obligation
            estimate for your deck or outdoor living project today.
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
                Call {COMPANY.phone.display}
              </PhoneLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

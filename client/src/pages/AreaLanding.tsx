import { useState } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import AreaHero from "@/components/AreaHero";
import ServiceCard from "@/components/ServiceCard";
import PhoneLink from "@/components/PhoneLink";
import FadeIn from "@/components/FadeIn";
import { getAreaBySlug, areas } from "@/data/areas";
import { services } from "@/data/services";
import { HERO_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";
import { useLocalPhone } from "@/lib/useLocalPhone";
import {
  MapPin,
  Phone,
  Shield,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const trustSignals = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for residential and commercial projects. Your investment is protected.",
  },
  {
    icon: Clock,
    title: `${COMPANY.experience} Years Experience`,
    description:
      "Decades of local deck building expertise means we know the codes, the climate, and the craftsmanship required.",
  },
  {
    icon: CheckCircle,
    title: "Certified Installers",
    description:
      "Authorized installers for Trex, TimberTech, and Azek with manufacturer-backed warranties on every project.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "We know your town's building department, permit requirements, and the unique challenges of building in your area.",
  },
];

export default function AreaLanding() {
  const params = useParams<{ slug: string }>();
  const area = getAreaBySlug(params.slug);
  const phone = useLocalPhone(params.slug);
  const [showZips, setShowZips] = useState(false);

  if (!area) {
    return (
      <section className="pt-24 lg:pt-32 py-24">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Area Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The service area you're looking for doesn't exist or may have been
            moved.
          </p>
          <Button size="lg" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <AreaHero
        name={area.name}
        state={area.state}
        headline={area.headline}
        description={area.description}
        heroGradient={area.heroGradient}
        phone={phone}
        slug={area.slug}
      />

      {/* ── Why Choose Us ── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Why Choose {COMPANY.name} in {area.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We're not just another contractor. We're your neighbors, with deep
                roots in the {area.name} community and a reputation built on
                quality work.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, i) => (
              <FadeIn key={signal.title} delay={i * 100}>
                <div className="group bg-background rounded-xl p-6 text-center border border-border/60 hover:border-accent/40 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/10 transition-colors">
                    <signal.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Available ── */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Deck Building Services in {area.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We offer our full range of deck building and outdoor living
                services to homeowners in {area.name}, {area.state} and
                surrounding communities.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 80}>
                <ServiceCard
                  slug={service.slug}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  icon={service.icon}
                  heroGradient={service.heroGradient}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      {area.neighborhoods && area.neighborhoods.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <FadeIn>
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                    Neighborhoods & Communities We Serve
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    Our team builds decks and outdoor living spaces throughout{" "}
                    {area.name} and these surrounding communities.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {area.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3.5 border border-border/50 hover:border-accent/30 hover:bg-accent/5 transition-all"
                    >
                      <MapPin className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ── Local Content (SEO prose) ── */}
      {area.localContent && (
        <section className="py-24 lg:py-32 bg-muted/50">
          <div className="container">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border/50 shadow-sm">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Deck Building in {area.name}, {area.state}
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed prose-p:text-muted-foreground">
                    <p>{area.localContent}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── ZIP Codes (collapsible) ── */}
      {area.zipCodes && area.zipCodes.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => setShowZips(!showZips)}
                  className="w-full flex items-center justify-between bg-muted/50 rounded-xl px-6 py-4 border border-border/50 hover:border-accent/30 transition-all group"
                >
                  <span className="font-display font-semibold text-lg">
                    ZIP Codes We Serve in {area.name}
                  </span>
                  {showZips ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  )}
                </button>
                {showZips && (
                  <div className="mt-4 px-6 pb-2">
                    <div className="flex flex-wrap gap-2">
                      {area.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="inline-flex items-center rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground border border-border/50"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Nearby Areas ── */}
      {area.nearbyAreas && area.nearbyAreas.length > 0 && (
        <section className="py-24 lg:py-32 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                    Nearby Areas We Serve
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    In addition to {area.name}, we proudly serve homeowners across
                    these nearby regions.
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {area.nearbyAreas.map((slug, i) => {
                  const nearby = areas.find((a) => a.slug === slug);
                  if (!nearby) return null;
                  return (
                    <FadeIn key={slug} delay={i * 80}>
                      <Link
                        href={`/areas/${slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-border/50 bg-background px-6 py-5 hover:border-accent/40 hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                          <MapPin className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <div className="text-left">
                          <span className="font-display font-semibold block group-hover:text-accent transition-colors">
                            {nearby.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {nearby.state}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </Link>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA with background image ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img
          src={HERO_IMAGES.cta}
          alt="Beautiful deck project"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Get Your Free Deck Estimate in {area.name}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                {COMPANY.experience} years of experience building decks and
                outdoor living spaces in {area.name}, {area.state}. Licensed,
                insured, and ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="accent" asChild>
                  <Link href="/contact">Get Your Free Estimate</Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <PhoneLink phone={phone}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {phone.display}
                  </PhoneLink>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

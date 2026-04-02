import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import AreaHero from "@/components/AreaHero";
import ServiceCard from "@/components/ServiceCard";
import PhoneLink from "@/components/PhoneLink";
import { getAreaBySlug, areas } from "@/data/areas";
import { services } from "@/data/services";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { useLocalPhone } from "@/lib/useLocalPhone";
import { MapPin, Phone, Shield, Clock, CheckCircle } from "lucide-react";

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

  if (!area) {
    return (
      <section className="py-24 lg:py-32">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Area Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
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
      {/* Hero */}
      <AreaHero
        name={area.name}
        state={area.state}
        headline={area.headline}
        description={area.description}
        heroGradient={area.heroGradient}
        phone={phone}
      />

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Why Choose {COMPANY.name} in {area.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're not just another contractor. We're your neighbors, with deep
              roots in the {area.name} community and a reputation built on
              quality work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="bg-muted rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Deck Building Services in {area.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer our full range of deck building and outdoor living
              services to homeowners in {area.name}, {area.state} and surrounding
              communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

      {/* Neighborhoods */}
      {area.neighborhoods && area.neighborhoods.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-center">
                Neighborhoods & Communities We Serve
              </h2>
              <p className="text-muted-foreground text-lg text-center mb-10 leading-relaxed">
                Our team builds decks and outdoor living spaces throughout{" "}
                {area.name} and these surrounding communities.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {area.neighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-muted rounded-md px-4 py-3"
                  >
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Content (SEO) */}
      {area.localContent && (
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Deck Building in {area.name}, {area.state}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>{area.localContent}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ZIP Codes */}
      {area.zipCodes && area.zipCodes.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-center">
                ZIP Codes We Serve in {area.name}
              </h2>
              <p className="text-muted-foreground text-lg text-center mb-8">
                We provide deck building and outdoor living services to the
                following ZIP codes in and around {area.name}.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {area.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium border border-border"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nearby Areas */}
      {area.nearbyAreas && area.nearbyAreas.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Nearby Areas We Serve
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                In addition to {area.name}, we proudly serve homeowners across
                these nearby regions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {area.nearbyAreas.map((slug) => {
                  const nearby = areas.find((a) => a.slug === slug);
                  if (!nearby) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/areas/${slug}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {nearby.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-16 lg:py-24"
        style={{ background: area.heroGradient }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Get Your Free Deck Estimate in {area.name}
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
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
        </div>
      </section>
    </>
  );
}

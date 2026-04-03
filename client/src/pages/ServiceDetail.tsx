import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard";
import PhoneLink from "@/components/PhoneLink";
import FadeIn from "@/components/FadeIn";
import { getServiceBySlug, services } from "@/data/services";
import { SERVICE_IMAGES, HERO_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";
import { Check, Phone, ArrowRight, Shield, Star } from "lucide-react";

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <section className="pt-24 lg:pt-32 py-24">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Service Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist or may have been moved.
          </p>
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>
    );
  }

  const heroImage = SERVICE_IMAGES[service.slug];
  const relatedServiceData = service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* ── Hero with background image ── */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        {heroImage && (
          <img
            src={heroImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-6 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                All Services
              </Link>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
                {service.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="accent" asChild>
                  <Link href="/contact">Get Your Free Estimate</Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <PhoneLink>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {COMPANY.phone.display}
                  </PhoneLink>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  About This Service
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <p className="text-muted-foreground text-base leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-20 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                  What's Included
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  Every project includes these features as standard, ensuring
                  quality and completeness.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border/50 hover:border-accent/30 hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Why Choose {service.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                The advantages that make this service a smart investment for your
                home.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="group bg-background rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-md transition-all">
                  <span className="inline-block font-display text-4xl font-bold text-accent/80 mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-20 lg:py-24 bg-muted/50">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Our Process
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                A clear, proven approach from first conversation to final
                walkthrough.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent via-primary to-secondary hidden md:block" />

              <div className="space-y-10">
                {service.process.map((step, i) => (
                  <FadeIn key={step.step} delay={i * 100}>
                    <div className="relative flex gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0 relative z-10 shadow-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {step.step}
                      </div>
                      <div className="flex-1 bg-background rounded-xl p-6 border border-border/50 shadow-sm group-hover:shadow-md group-hover:border-accent/30 transition-all -mt-1">
                        <h3 className="font-display text-lg font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
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

      {/* ── FAQ Accordion ── */}
      {service.faqs.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    Common questions about {service.title.toLowerCase()} answered
                    by our team.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {service.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-muted/50 rounded-xl border border-border/50 px-6 data-[state=open]:border-accent/30 data-[state=open]:shadow-sm transition-all"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Services ── */}
      {relatedServiceData.length > 0 && (
        <section className="py-20 lg:py-24 bg-muted/50">
          <div className="container">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                  Related Services
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  Explore other services that pair well with{" "}
                  {service.title.toLowerCase()}.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedServiceData.map(
                (related, i) =>
                  related && (
                    <FadeIn key={related.slug} delay={i * 80}>
                      <Link
                        href={`/services/${related.slug}`}
                        className="group block"
                      >
                        <div className="relative rounded-xl overflow-hidden h-64 mb-4">
                          {SERVICE_IMAGES[related.slug] ? (
                            <img
                              src={SERVICE_IMAGES[related.slug]}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div
                              className="w-full h-full"
                              style={{ background: related.heroGradient }}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="font-display text-xl font-bold text-white mb-1">
                              {related.title}
                            </h3>
                            <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-accent group-hover:gap-2 transition-all">
                              Learn More <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA with background image ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <img
          src={HERO_IMAGES.cta}
          alt="Beautiful deck project"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-white/70 text-sm font-medium">
                  Licensed & Insured
                </span>
                <span className="text-white/30">|</span>
                <Star className="w-5 h-5 text-accent" />
                <span className="text-white/70 text-sm font-medium">
                  {COMPANY.experience} Years Experience
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Get a free, no-obligation estimate for your{" "}
                {service.title.toLowerCase()} project. {COMPANY.experience} years
                of experience. Licensed and insured.
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
                  <PhoneLink>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {COMPANY.phone.display}
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

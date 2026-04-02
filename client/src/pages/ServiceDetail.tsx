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
import { getServiceBySlug, services } from "@/data/services";
import { COMPANY } from "@/lib/constants";
import { Check, Phone, ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <section className="py-24 lg:py-32">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Service Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The service you're looking for doesn't exist or may have been moved.
          </p>
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>
    );
  }

  const relatedServiceData = service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28"
        style={{ background: service.heroGradient }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              All Services
            </Link>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
              About This Service
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-background rounded-lg p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Why Choose {service.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              The advantages that make this service a smart investment for your
              home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-muted rounded-lg p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A clear, proven approach from first conversation to final
              walkthrough.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {service.process.map((step) => (
                  <div key={step.step} className="relative flex gap-6">
                    {/* Step number */}
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0 relative z-10">
                      {step.step}
                    </div>
                    {/* Content */}
                    <div className="pb-2 pt-1">
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-lg">
                  Common questions about {service.title.toLowerCase()} answered
                  by our team.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Related Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore other services that pair well with{" "}
                {service.title.toLowerCase()}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedServiceData.map(
                (related) =>
                  related && (
                    <ServiceCard
                      key={related.slug}
                      slug={related.slug}
                      title={related.title}
                      shortDescription={related.shortDescription}
                      icon={related.icon}
                      heroGradient={related.heroGradient}
                    />
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-16 lg:py-24"
        style={{ background: service.heroGradient }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Get a free, no-obligation estimate for your {service.title.toLowerCase()}{" "}
              project. {COMPANY.experience} years of experience.
              Licensed and insured.
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
        </div>
      </section>
    </>
  );
}

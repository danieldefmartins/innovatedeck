import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";
import { Phone } from "lucide-react";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, #5C3D2E 0%, #3D2820 50%, #2D5A3D 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
              From premium composite and natural wood decks to pergolas, porches,
              outdoor kitchens, and expert repair &mdash; {COMPANY.name} delivers
              comprehensive deck building and outdoor living solutions across
              New England. Every project is custom-designed, permitted, and built
              by our experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              What We Build
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our full range of deck building and outdoor living
              services. Each project is backed by {COMPANY.experience} years
              of craftsmanship and industry-leading warranties.
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

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you know exactly what you want or need help exploring
              options, our team is here to guide you. Get a free, no-obligation
              estimate for your deck or outdoor living project today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
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

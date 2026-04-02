import { MapPin, Phone, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "./PhoneLink";
import { AREA_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";

interface AreaHeroProps {
  name: string;
  state: string;
  headline: string;
  description: string;
  heroGradient: string;
  phone: { display: string; tel: string; label: string };
  slug: string;
}

export default function AreaHero({
  name,
  state,
  headline,
  description,
  heroGradient,
  phone,
  slug,
}: AreaHeroProps) {
  const bgImage = AREA_IMAGES[slug];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image or gradient fallback */}
      {bgImage ? (
        <img
          src={bgImage}
          alt={`Deck building in ${name}, ${state}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: heroGradient }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              {name}, {state}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
            {headline}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="xl" variant="accent" asChild>
              <a href="/contact">Get Your Free Estimate</a>
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

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <span className="flex items-center gap-2 text-white/70 text-sm bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Shield className="w-4 h-4 text-accent" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2 text-white/70 text-sm bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Clock className="w-4 h-4 text-accent" />
              {COMPANY.experience} Years Experience
            </span>
            <span className="flex items-center gap-2 text-white/70 text-sm bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Star className="w-4 h-4 text-accent" />
              5-Star Rated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

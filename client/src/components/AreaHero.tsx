import { MapPin, Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "./PhoneLink";

interface AreaHeroProps {
  name: string;
  state: string;
  headline: string;
  description: string;
  heroGradient: string;
  phone: { display: string; tel: string; label: string };
}

export default function AreaHero({ name, state, headline, description, heroGradient, phone }: AreaHeroProps) {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{ background: heroGradient }}
    >
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-white/80 font-medium">
              {name}, {state}
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="xl" variant="accent" asChild>
              <a href="/contact">Get Your Free Estimate</a>
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <PhoneLink phone={phone}>
                <Phone className="w-5 h-5 mr-2" />
                Call {phone.display}
              </PhoneLink>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 25+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

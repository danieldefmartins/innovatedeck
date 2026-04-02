import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Star,
  CheckCircle,
} from "lucide-react";
import GHLForm from "@/components/GHLForm";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY } from "@/lib/constants";
import { HERO_IMAGES } from "@/data/images";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: null, // Will render PhoneLink
    sub: "Mon-Sat, 7am-6pm",
  },
  {
    icon: Mail,
    title: "Email",
    content: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    sub: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    content: "MA, NH, RI & Southern Maine",
    sub: "Licensed across four states",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 7am-6pm\nSat: 8am-4pm",
    sub: "Sunday: Closed",
  },
];

const serviceAreas = [
  "Greater Boston",
  "North Shore",
  "South Shore",
  "Cape Cod",
  "MetroWest",
  "Merrimack Valley",
  "New Hampshire",
  "Seacoast NH",
  "Rhode Island",
  "Southern Maine",
];

const trustBadges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed in MA, NH, RI & ME",
  },
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Trusted since day one",
  },
  {
    icon: Star,
    title: "500+ Projects Completed",
    description: "Proven track record",
  },
  {
    icon: CheckCircle,
    title: "Free Estimates",
    description: "No obligation, no pressure",
  },
];

export default function Contact() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES.contact})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

        <div className="container relative z-10 text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Start Your Deck Project Today
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your outdoor space? Get a free, no-obligation
            estimate. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ───────── Form + Contact Info (Side by Side) ───────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form (wider) */}
            <div className="lg:col-span-2">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
                Free Estimate
              </p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-muted-foreground mb-8 text-[17px]">
                Fill out the form below and we'll get back to you with a
                detailed quote for your project.
              </p>
              <GHLForm />
            </div>

            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">
                        {item.title}
                      </p>
                      {item.title === "Phone" ? (
                        <PhoneLink className="text-primary hover:underline font-medium text-[15px]" />
                      ) : item.href ? (
                        <a
                          href={item.href}
                          className="text-primary hover:underline font-medium text-[15px] break-all"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-foreground text-[15px] whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Service Area Badges */}
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-block bg-card text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border/50"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Trust Badges ───────── */}
      <section className="py-20 lg:py-24 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-white/70">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Map / Location Section ───────── */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">
              Our Coverage
            </p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Proudly Serving All of Southern New England
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From Boston to Cape Cod, the Seacoast of New Hampshire to Southern
              Maine, and throughout Rhode Island — wherever you are, we're ready
              to build.
            </p>
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {["Massachusetts", "New Hampshire", "Rhode Island", "Maine"].map(
                  (state) => (
                    <div key={state}>
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">
                        {state}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

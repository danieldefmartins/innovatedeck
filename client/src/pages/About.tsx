import { Link } from "wouter";
import {
  CalendarCheck,
  Hammer,
  Lightbulb,
  Phone,
  Shield,
  Snowflake,
  ThermometerSun,
  Users,
  Waves,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY } from "@/lib/constants";
import { HERO_IMAGES } from "@/data/images";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Decks Built" },
  { value: "4", label: "States Served" },
  { value: "100%", label: "Licensed & Insured" },
];

const values = [
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    description:
      "Every joint is tight, every board is level, every fastener is hidden. We build outdoor spaces the way they should be built — with precision, patience, and pride in every detail.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your vision drives our work. We listen carefully, communicate clearly, and keep you informed at every stage. When you call, a real person answers.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest assessments, transparent pricing, and no surprises. If something doesn't need to be replaced, we'll tell you. Our reputation is built on trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve on materials, techniques, and design trends. From motorized louvered roofs to cutting-edge composite technology, we bring the best solutions to every project.",
  },
];

const weatherChallenges = [
  {
    icon: Snowflake,
    title: "Heavy Snow Loads",
    description:
      "New England roofs and decks must support significant snow accumulation. We engineer every structure to exceed local snow load requirements, using properly sized joists, beams, and footings that won't buckle under winter's weight.",
  },
  {
    icon: ThermometerSun,
    title: "Freeze-Thaw Cycles",
    description:
      "Repeated freezing and thawing can crack footings, warp boards, and loosen fasteners. We select materials and fastening systems specifically rated for freeze-thaw durability, and we set footings below the frost line every time.",
  },
  {
    icon: Waves,
    title: "Coastal Salt Air",
    description:
      "For our coastal clients from Cape Cod to Southern Maine, salt air accelerates corrosion and material degradation. We use marine-grade stainless steel hardware, salt-resistant composites, and specialized coatings to protect your investment.",
  },
  {
    icon: FileCheck,
    title: "Building Codes",
    description:
      "Building codes vary from town to town and state to state. We're intimately familiar with the permitting requirements, zoning regulations, and structural codes across Massachusetts, New Hampshire, Rhode Island, and Maine.",
  },
];

export default function About() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES.about})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

        <div className="container relative z-10 text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Who We Are
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 max-w-4xl mx-auto">
            Crafting New England's Finest Outdoor Spaces
          </h1>
          <p className="text-lg leading-relaxed text-white/85 max-w-xl mx-auto">
            For over 25 years, we've been building premium outdoor living spaces
            for homeowners across Massachusetts, New Hampshire, Rhode Island, and
            Maine.
          </p>
        </div>
      </section>

      {/* ───────── Our Story (Split Layout) ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                From a Small Carpentry Shop to New England's Trusted Builder
              </h2>
              <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
                <p>
                  Innovate Deck was founded with a simple belief: every homeowner
                  deserves an outdoor space that feels like an extension of their
                  home — a place to gather, relax, and create lasting memories.
                  What started as a small carpentry operation driven by a passion
                  for outdoor living has grown into one of New England's most
                  trusted deck building companies.
                </p>
                <p>
                  Over the past 25 years, we've built more than 500 decks,
                  porches, pergolas, and outdoor kitchens across four states.
                  Each project has reinforced the values we were founded on:
                  meticulous craftsmanship, honest communication, and an
                  unwavering commitment to doing the job right — even when no one
                  is watching.
                </p>
                <p>
                  We're a family-oriented company that treats every client's home
                  with the same care and attention we'd give our own. Our crew
                  members are experienced carpenters — many have been with us for
                  over a decade — and they take genuine pride in the work they
                  do.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMAGES.story}
                  alt="Innovate Deck team completing a premium outdoor living project"
                  className="w-full h-80 lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-primary text-white rounded-xl p-5 shadow-xl">
                <p className="font-display text-3xl font-bold">25+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Continued story text */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-base leading-relaxed">
              Today, we continue to innovate. We stay at the forefront of
              material technology, design trends, and building science. From
              premium composites like Trex and TimberTech to exotic hardwoods
              like ipe, from classic screened porches to motorized louvered
              pergolas — we bring the best of what's possible to every project we
              take on.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="py-10 lg:py-14 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <div className="w-12 h-1 bg-accent mx-auto mb-3 rounded-full" />
                <p className="text-white/75 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Our Values ───────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              What We Stand For
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              These aren't just words on a page. They're the principles that
              guide every decision we make, from the materials we select to the
              way we treat your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-card rounded-xl border border-border/60 p-6 lg:p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Built for New England ───────── */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
              Local Expertise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Built for New England
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Building a deck in New England isn't like building one in
              California. Our climate demands specialized knowledge, materials,
              and engineering. That's what 25 years of local experience gives
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {weatherChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="group bg-card rounded-xl border border-border/60 p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/15 transition-colors">
                  <challenge.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
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
            Let's Build Something Great Together
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're envisioning a new composite deck, a cozy screened
            porch, or a full outdoor living area — we'd love to hear about your
            project. Reach out for a free consultation and estimate.
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
                {COMPANY.phone.display}
              </PhoneLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

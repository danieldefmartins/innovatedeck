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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY } from "@/lib/constants";

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
];

export default function About() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section
        className="relative py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(135deg, #5C3D2E 0%, #7A5A42 40%, #D4A853 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              About Innovate Deck
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
              For over 25 years, we've been building premium outdoor living
              spaces for homeowners across Massachusetts, New Hampshire, Rhode
              Island, and Maine. Learn what makes us New England's trusted
              choice for decks, porches, and outdoor living.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Our Story ───────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
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
                porches, pergolas, and outdoor kitchens across four states. Each
                project has reinforced the values we were founded on:
                meticulous craftsmanship, honest communication, and an
                unwavering commitment to doing the job right — even when no one
                is watching.
              </p>
              <p>
                We're a family-oriented company that treats every client's home
                with the same care and attention we'd give our own. Our crew
                members are experienced carpenters — many have been with us for
                over a decade — and they take genuine pride in the work they do.
                When you walk out onto a deck we built, you should feel the
                quality in every board, every railing, and every perfectly
                aligned corner.
              </p>
              <p>
                Today, we continue to innovate. We stay at the forefront of
                material technology, design trends, and building science. From
                premium composites like Trex and TimberTech to exotic hardwoods
                like ipe, from classic screened porches to motorized louvered
                pergolas — we bring the best of what's possible to every project
                we take on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 lg:p-8 text-center shadow-sm"
              >
                <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Our Values ───────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These aren't just words on a page. They're the principles that
              guide every decision we make, from the materials we select to the
              way we treat your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Why New England ───────── */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for New England
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building a deck in New England isn't like building one in
              California. Our climate demands specialized knowledge, materials,
              and engineering. That's what 25 years of local experience gives
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {weatherChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-card rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                  <challenge.icon className="w-7 h-7 text-secondary" />
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

          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              We Know the Codes Inside and Out
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Building codes vary from town to town and state to state. We're
              intimately familiar with the permitting requirements, zoning
              regulations, and structural codes across Massachusetts, New
              Hampshire, Rhode Island, and Maine. From Boston's historic district
              restrictions to New Hampshire's frost depth requirements to Rhode
              Island's coastal building standards, we handle every detail so you
              don't have to. We pull all permits, coordinate inspections, and
              ensure your project is fully compliant from the first footing to
              the final railing post.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section
        className="py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, #5C3D2E 0%, #3D2820 50%, #2D5A3D 100%)",
        }}
      >
        <div className="container text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
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

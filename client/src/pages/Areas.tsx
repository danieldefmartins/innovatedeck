import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import EstimateSection from "@/components/EstimateSection";
import { areas } from "@/data/areas";

const STATES: { code: string; name: string }[] = [
  { code: "MA", name: "Massachusetts" },
  { code: "NH", name: "New Hampshire" },
  { code: "RI", name: "Rhode Island" },
  { code: "ME", name: "Southern Maine" },
];

export default function Areas() {
  return (
    <>
      <section className="pt-32 lg:pt-44 pb-12 lg:pb-16 bg-background">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span aria-current="page">Areas We Serve</span>
          </nav>
          <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-3">Areas We Serve</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 max-w-3xl">
            Deck builders across Massachusetts, New Hampshire, Rhode Island and Southern Maine
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Pick your region to see the towns we cover, the local building conditions we plan for and the services we
            offer there.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container space-y-14">
          {STATES.map((st) => {
            const list = areas.filter((a) => a.state === st.code);
            if (!list.length) return null;
            return (
              <div key={st.code}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">{st.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {list.map((a) => (
                    <FadeIn key={a.slug}>
                      <Link
                        href={`/areas/${a.slug}`}
                        className="group block h-full rounded-2xl border border-border/60 bg-card p-6 hover:border-accent/40 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="w-5 h-5 text-accent" />
                          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                            {a.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.description}</p>
                        <p className="text-xs text-muted-foreground mb-4">
                          Including {a.neighborhoods.slice(0, 6).join(", ")}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Decks in {a.name} <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <EstimateSection idPrefix="areas" />
    </>
  );
}

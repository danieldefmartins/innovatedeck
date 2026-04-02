import { useState } from "react";
import { ArrowRight, Eye, MapPin, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY } from "@/lib/constants";
import {
  HERO_IMAGES,
  PORTFOLIO_IMAGES,
  PORTFOLIO_CATEGORIES,
  type PortfolioImage,
} from "@/data/images";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioImage | null>(null);

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_IMAGES
      : PORTFOLIO_IMAGES.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={HERO_IMAGES.portfolio}
          alt="Beautiful outdoor deck and living space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/70 uppercase tracking-widest text-sm font-medium mb-3">
              Our Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Browse our collection of custom deck builds, pergolas, porches,
              and outdoor living spaces across New England.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter + Gallery ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-full rounded-xl overflow-hidden cursor-pointer text-left block"
                >
                  <div
                    className="relative overflow-hidden aspect-[4/3]"
                  >
                    {/* Image */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category label (always visible, bottom-left) */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <h3 className="text-white font-semibold text-base mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/70 text-sm mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium">
                        <Eye className="w-4 h-4" />
                        View Project
                      </span>
                    </div>
                  </div>
                </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox Dialog ── */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
          <DialogTitle className="sr-only">
            {selectedItem?.title}
          </DialogTitle>

          {/* Close button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          {selectedItem && (
            <div className="relative">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              {/* Info bar */}
              <div className="bg-background p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {selectedItem.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-muted-foreground">
                      {selectedItem.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedItem.location}
                    </span>
                  </div>
                </div>
                <Button variant="accent" size="sm" asChild>
                  <a href="/contact" className="inline-flex items-center gap-2">
                    Get a Similar Build
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ── CTA with background image ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image */}
        <img
          src={HERO_IMAGES.cta}
          alt="Outdoor living space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Every project in our portfolio started with a free consultation.
            Let's discuss your vision and bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" asChild>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-base"
              >
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <PhoneLink className="inline-flex items-center gap-2 text-base">
                <Phone className="w-4 h-4" />
                Call {COMPANY.phone.display}
              </PhoneLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

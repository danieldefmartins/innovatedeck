import { useState } from "react";
import { Camera, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY } from "@/lib/constants";

const CATEGORIES = [
  "All",
  "Composite Decks",
  "Wood Decks",
  "Pergolas",
  "Porches",
  "Outdoor Kitchens",
  "Railings",
] as const;

// Placeholder portfolio items until real photos are added
const PORTFOLIO_ITEMS = [
  { id: "1", category: "Composite Decks", title: "Trex Composite Deck", location: "Boston, MA", gradient: "linear-gradient(135deg, #8B6914 0%, #5C3D2E 100%)" },
  { id: "2", category: "Composite Decks", title: "TimberTech Multi-Level", location: "Newton, MA", gradient: "linear-gradient(135deg, #6B4226 0%, #D4A853 100%)" },
  { id: "3", category: "Wood Decks", title: "Cedar Deck with Planters", location: "Hingham, MA", gradient: "linear-gradient(135deg, #5C3D2E 0%, #2D5A3D 100%)" },
  { id: "4", category: "Wood Decks", title: "Ipe Hardwood Deck", location: "Newport, RI", gradient: "linear-gradient(135deg, #3D2820 0%, #6B4226 100%)" },
  { id: "5", category: "Pergolas", title: "Attached Pergola", location: "Portsmouth, NH", gradient: "linear-gradient(135deg, #2D5A3D 0%, #D4A853 100%)" },
  { id: "6", category: "Pergolas", title: "Freestanding Louvered Pergola", location: "Cape Cod, MA", gradient: "linear-gradient(135deg, #D4A853 0%, #5C3D2E 100%)" },
  { id: "7", category: "Porches", title: "Screened-In Porch", location: "Wellesley, MA", gradient: "linear-gradient(135deg, #5C3D2E 0%, #8B6914 100%)" },
  { id: "8", category: "Porches", title: "Four-Season Porch", location: "Portland, ME", gradient: "linear-gradient(135deg, #2D5A3D 0%, #3D2820 100%)" },
  { id: "9", category: "Outdoor Kitchens", title: "Outdoor Kitchen & Bar", location: "Andover, MA", gradient: "linear-gradient(135deg, #6B4226 0%, #2D5A3D 100%)" },
  { id: "10", category: "Railings", title: "Cable Railing System", location: "Scituate, MA", gradient: "linear-gradient(135deg, #3D2820 0%, #D4A853 100%)" },
  { id: "11", category: "Composite Decks", title: "Azek Pool Deck", location: "Warwick, RI", gradient: "linear-gradient(135deg, #D4A853 0%, #2D5A3D 100%)" },
  { id: "12", category: "Railings", title: "Aluminum Railing with Lights", location: "Salem, MA", gradient: "linear-gradient(135deg, #5C3D2E 0%, #D4A853 50%, #2D5A3D 100%)" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

  const filtered = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #5C3D2E 0%, #2D5A3D 100%)" }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg text-white/80">
              Browse our collection of custom deck builds, pergolas, porches, and outdoor living spaces
              across New England.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer text-left"
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: item.gradient }}
                />
                {/* Placeholder overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Camera className="w-10 h-10 text-white/40 mb-2" />
                  <span className="text-white/40 text-sm">Photo Coming Soon</span>
                </div>
                {/* Info overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.location}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="font-display text-xl">{selectedItem?.title}</DialogTitle>
          <div
            className="aspect-video rounded-md flex items-center justify-center"
            style={{ background: selectedItem?.gradient }}
          >
            <div className="text-center">
              <Camera className="w-16 h-16 text-white/30 mx-auto mb-3" />
              <p className="text-white/50">Photo Coming Soon</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">{selectedItem?.category}</p>
              <p className="text-sm text-muted-foreground">{selectedItem?.location}</p>
            </div>
            <Button variant="accent" size="sm" asChild>
              <a href="/contact">Get a Similar Build</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every project in our portfolio started with a free consultation.
            Let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" asChild>
              <a href="/contact">Get Your Free Estimate</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <PhoneLink className="inline-flex items-center gap-2">
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

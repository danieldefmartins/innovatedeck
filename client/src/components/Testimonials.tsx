import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  limit?: number;
}

export default function Testimonials({ testimonials, limit }: TestimonialsProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((t, i) => (
        <Card key={i} className="bg-card rounded-2xl border-border/50">
          <CardContent className="p-7">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4.5 h-4.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-5 italic leading-relaxed text-base">"{t.text}"</p>
            <div>
              <p className="font-semibold text-base">{t.name}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t.location} &middot; {t.service}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

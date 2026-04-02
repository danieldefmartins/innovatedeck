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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <Card key={i} className="bg-card">
          <CardContent className="p-6">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.location} &middot; {t.service}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

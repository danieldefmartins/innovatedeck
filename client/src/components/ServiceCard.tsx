import { Link } from "wouter";
import { ArrowRight, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICE_IMAGES } from "@/data/images";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroGradient: string;
}

export default function ServiceCard({
  slug,
  title,
  shortDescription,
  heroGradient,
}: ServiceCardProps) {
  const imageUrl = SERVICE_IMAGES[slug];

  return (
    <Link href={`/services/${slug}`}>
      <Card className="group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full border border-border/40 shadow-md rounded-2xl">
        {/* Image area */}
        <div className="relative h-48 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Fallback: gradient + icon when no image available */
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
              style={{ background: heroGradient }}
            >
              <Hammer className="w-12 h-12 text-white/60" />
            </div>
          )}
          {/* Bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {/* Title overlay on image */}
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="font-display text-base font-semibold text-white drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>

        {/* Content area */}
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

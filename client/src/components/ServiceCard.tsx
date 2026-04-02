import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroGradient: string;
}

export default function ServiceCard({ slug, title, shortDescription, icon, heroGradient }: ServiceCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Hammer;

  return (
    <Link href={`/services/${slug}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        <div
          className="h-32 flex items-center justify-center"
          style={{ background: heroGradient }}
        >
          <IconComponent className="w-12 h-12 text-white/90" />
        </div>
        <CardContent className="p-5">
          <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {shortDescription}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

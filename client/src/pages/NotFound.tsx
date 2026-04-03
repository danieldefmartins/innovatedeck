import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <section className="pt-28 lg:pt-40 pb-28 lg:pb-40">
      <div className="container text-center">
        <FadeIn>
          <h1 className="font-display text-8xl lg:text-[10rem] font-bold text-primary/20 mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
            Page Not Found
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

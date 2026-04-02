import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container text-center">
        <h1 className="font-display text-7xl lg:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
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
      </div>
    </section>
  );
}

import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blog";

const CATEGORY_GRADIENTS: Record<string, string> = {
  "Materials": "linear-gradient(135deg, #5C3D2E 0%, #D4A853 100%)",
  "Cost Guide": "linear-gradient(135deg, #2D5A3D 0%, #5C3D2E 100%)",
  "Permits": "linear-gradient(135deg, #3D2820 0%, #2D5A3D 100%)",
  "Design": "linear-gradient(135deg, #D4A853 0%, #5C3D2E 100%)",
  "Maintenance": "linear-gradient(135deg, #5C3D2E 0%, #2D5A3D 100%)",
};

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #2D5A3D 0%, #5C3D2E 100%)" }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Deck Building Blog
            </h1>
            <p className="text-lg text-white/80">
              Expert advice, cost guides, and inspiration for your New England deck project.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ background: CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS["Materials"] }}
                  >
                    <span className="text-white/60 text-sm font-medium px-3 py-1 rounded-full bg-white/10">
                      {post.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

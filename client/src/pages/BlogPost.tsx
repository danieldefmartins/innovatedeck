import { useParams, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/PhoneLink";
import { getBlogPostBySlug } from "@/data/blog";
import { blogContent } from "@/data/blog-content";
import { COMPANY } from "@/lib/constants";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(params.slug || "");
  const Content = post ? blogContent[post.slug] : null;

  if (!post || !Content) {
    return (
      <section className="py-24">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">This blog post doesn't exist.</p>
          <Button variant="accent" asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #5C3D2E 0%, #2D5A3D 100%)" }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white/70 text-xs">
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground">
              <Content />
            </article>

            {/* CTA */}
            <div className="mt-12 p-8 bg-muted rounded-lg text-center">
              <h3 className="font-display text-2xl font-bold mb-3">
                Ready to Start Your Deck Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a free, no-obligation estimate from our team of experienced deck builders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent" asChild>
                  <a href="/contact">Get Free Estimate</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <PhoneLink className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {COMPANY.phone.display}
                  </PhoneLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useParams, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Phone, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/PhoneLink";
import FadeIn from "@/components/FadeIn";
import { getBlogPostBySlug } from "@/data/blog";
import { blogContent } from "@/data/blog-content";
import { BLOG_IMAGES, HERO_IMAGES } from "@/data/images";
import { COMPANY } from "@/lib/constants";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(params.slug || "");
  const Content = post ? blogContent[post.slug] : null;

  if (!post || !Content) {
    return (
      <section className="pt-24 lg:pt-32 py-24">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-bold mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            This blog post doesn't exist.
          </p>
          <Button variant="accent" asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </section>
    );
  }

  const heroImage = BLOG_IMAGES[post.slug];

  return (
    <>
      {/* ── Hero with blog post image ── */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        {heroImage ? (
          <img
            src={heroImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              {/* Category + meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/60">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/60">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15]">
                {post.title}
              </h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Article Content ── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-headings:leading-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:font-medium hover:prose-a:text-accent prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-accent prose-blockquote:text-muted-foreground prose-img:rounded-xl">
                <Content />
              </article>
            </FadeIn>

            {/* ── Professional CTA at bottom ── */}
            <FadeIn>
              <div className="relative mt-16 rounded-2xl overflow-hidden">
                <img
                  src={HERO_IMAGES.cta}
                  alt="Start your deck project"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 p-8 lg:p-12 text-center">
                  <div className="flex items-center justify-center gap-4 mb-5">
                    <span className="flex items-center gap-2 text-white/60 text-sm">
                      <Shield className="w-4 h-4 text-accent" />
                      Licensed & Insured
                    </span>
                    <span className="text-white/30">|</span>
                    <span className="flex items-center gap-2 text-white/60 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      {COMPANY.experience} Years
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Start Your Deck Project?
                  </h3>
                  <p className="text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
                    Get a free, no-obligation estimate from our team of
                    experienced deck builders.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="accent" asChild>
                      <a href="/contact">Get Free Estimate</a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                      asChild
                    >
                      <PhoneLink className="inline-flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {COMPANY.phone.display}
                      </PhoneLink>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

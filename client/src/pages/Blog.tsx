import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/data/blog";
import { HERO_IMAGES, BLOG_IMAGES } from "@/data/images";

export default function Blog() {
  return (
    <>
      {/* ── Hero with background image ── */}
      <section className="relative pt-40 lg:pt-52 pb-16 lg:pb-24 overflow-hidden">
        <img
          src={HERO_IMAGES.blog}
          alt="Deck building blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                Our Blog
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.15]">
                Deck Building Blog
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Expert advice, cost guides, and inspiration for your New England
                deck project.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, i) => {
              const postImage = BLOG_IMAGES[post.slug];
              return (
                <FadeIn key={post.slug} delay={i * 80}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group cursor-pointer h-full bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                      {/* Card image */}
                      <div className="relative h-48 overflow-hidden">
                        {postImage ? (
                          <img
                            src={postImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Card content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="font-display text-lg font-semibold mb-3 group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent group-hover:gap-2.5 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

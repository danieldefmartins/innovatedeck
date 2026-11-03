import type { ReactNode } from "react";
import { Link } from "wouter";

export default function LegalPage({
  eyebrow,
  title,
  effective,
  children,
}: {
  eyebrow: string;
  title: string;
  effective: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-32 lg:pt-44 pb-20 lg:pb-28 bg-background">
      <div className="container">
        <article className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-h2:scroll-mt-28">
          <nav aria-label="Breadcrumb" className="not-prose text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <p className="not-prose text-accent font-semibold tracking-wider uppercase text-xs mb-3">{eyebrow}</p>
          <h1>{title}</h1>
          <p>Effective {effective}</p>
          {children}
        </article>
      </div>
    </section>
  );
}

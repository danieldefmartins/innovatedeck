import { useEffect, useRef } from "react";
import { Switch, Route, Redirect, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import GeoRedirect from "@/components/GeoRedirect";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AreaLanding from "@/pages/AreaLanding";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Areas from "@/pages/Areas";
import { seoFor, SITE_URL } from "@/lib/seo";

/** Keep <title>, description and canonical in sync when the visitor navigates client-side. */
function applyHead(path: string) {
  const seo = seoFor(path);
  document.title = seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", seo.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", seo.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`);
}

function ScrollToTop() {
  const [location] = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    window.scrollTo(0, 0);
    applyHead(location);

    // Track page views
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        page_path: location,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <GeoRedirect />
      <ScrollToTop />
      <Navigation />
      <main className="pb-16 lg:pb-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/areas" component={Areas} />
          <Route path="/areas/:slug" component={AreaLanding} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy-policy">{() => <Redirect to="/privacy" replace />}</Route>
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

// Build-time renderer used by scripts/prerender.mjs (vite build --ssr).
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export { seoFor, allRoutes, SITE_URL, OG_IMAGE } from "./lib/seo";

export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <Router ssrPath={path}>
        <App />
      </Router>
    </StrictMode>,
  );
}

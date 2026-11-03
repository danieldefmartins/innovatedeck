// Prerenders every route to static HTML after `vite build` + `vite build --ssr`,
// so crawlers, link previews and carrier (A2P) checks see real content without JavaScript.
// Output: dist/public/<route>.html (served by Workers static assets at /<route>),
// dist/public/index.html for "/", and dist/public/404.html for unknown URLs.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const pub = path.join(root, "dist/public");
const ssr = await import(pathToFileURL(path.join(root, "dist/ssr/entry-server.js")).href);
const template = readFileSync(path.join(pub, "index.html"), "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ldJson = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

function page(route) {
  const seo = ssr.seoFor(route);
  const url = `${ssr.SITE_URL}${seo.path === "/" ? "/" : seo.path}`;
  const body = ssr.render(route);
  if (!body.includes("<h1")) throw new Error(`prerender: ${route} rendered without an <h1>`);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(seo.description)}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(seo.title)}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(seo.description)}"`)
    .replace(/<meta property="og:type" content="[^"]*"/, `<meta property="og:type" content="${seo.type}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
    .replace("<!--seo-->", [
      `<meta name="twitter:title" content="${esc(seo.title)}" />`,
      `<meta name="twitter:description" content="${esc(seo.description)}" />`,
      `<meta name="twitter:image" content="${ssr.OG_IMAGE}" />`,
      ...seo.jsonLd.map((o) => `<script type="application/ld+json">${ldJson(o)}</script>`),
    ].join("\n    "))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (seo.found) html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  else html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, '<meta name="robots" content="noindex" />');
  return html;
}

const routes = ssr.allRoutes();
for (const route of routes) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  mkdirSync(path.dirname(path.join(pub, file)), { recursive: true });
  writeFileSync(path.join(pub, file), page(route));
}
writeFileSync(path.join(pub, "404.html"), page("/__not-found__"));
rmSync(path.join(root, "dist/ssr"), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404.html`);

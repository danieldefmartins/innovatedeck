// Writes client/public/sitemap.xml and client/public/robots.txt from the real
// route list in client/src/App.tsx + the data files that feed the dynamic routes.
// Runs before `vite build` (see package.json), so it can never drift from the data.
import { build } from "esbuild";
import { writeFileSync } from "node:fs";
import path from "node:path";

const SITE = "https://innovatedeck.com";
const root = path.resolve(import.meta.dirname, "..");

// Last real content change for the static pages and the service/area data (git history).
// Update when page content changes.
const PAGES_LASTMOD = "2026-04-03";

async function load(file) {
  const out = await build({
    entryPoints: [path.join(root, file)],
    bundle: true,
    write: false,
    format: "esm",
    platform: "node",
    logLevel: "silent",
  });
  const code = out.outputFiles[0].text;
  return import("data:text/javascript;base64," + Buffer.from(code).toString("base64"));
}

const { services } = await load("client/src/data/services.ts");
const { areas } = await load("client/src/data/areas.ts");
const { blogPosts } = await load("client/src/data/blog.ts");

const urls = [
  ...["/", "/services", "/portfolio", "/about", "/contact", "/blog"].map((p) => [p, PAGES_LASTMOD]),
  ...services.map((s) => [`/services/${s.slug}`, PAGES_LASTMOD]),
  ...areas.map((a) => [`/areas/${a.slug}`, PAGES_LASTMOD]),
  ...blogPosts.map((b) => [`/blog/${b.slug}`, b.date]),
];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(([p, d]) => `  <url>\n    <loc>${SITE}${p === "/" ? "/" : p}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`)
    .join("\n") +
  `\n</urlset>\n`;

// Search engines AND AI assistants are allowed on purpose (premium-website skill).
const robots = `User-agent: *
Allow: /
Disallow: /api/

User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: meta-externalagent
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync(path.join(root, "client/public/sitemap.xml"), xml);
writeFileSync(path.join(root, "client/public/robots.txt"), robots);
console.log(`sitemap.xml: ${urls.length} URLs`);

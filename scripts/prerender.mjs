// Post-build SSG: bakes per-route <head> (title/meta/canonical/OG + JSON-LD) into a
// static HTML file per route, plus sitemap.xml and robots.txt. Run after `vite build`.
// Requires Node >=22.6 (imports the .ts SEO module via --experimental-strip-types).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allRoutes, BASE_URL } from '../src/data/seo.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');

const escAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const setTitle = (html, v) => html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escAttr(v)}</title>`);
const setMeta = (html, name, v, prop = false) => {
  const attr = prop ? 'property' : 'name';
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  return re.test(html) ? html.replace(re, `$1${escAttr(v)}$2`) : html;
};
const setCanonical = (html, v) =>
  html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${escAttr(v)}$2`);

function buildPage(template, seo) {
  let html = template;
  html = setTitle(html, seo.title);
  html = setMeta(html, 'title', seo.title);
  html = setMeta(html, 'description', seo.description);
  if (seo.keywords) html = setMeta(html, 'keywords', seo.keywords);
  if (seo.noindex) html = setMeta(html, 'robots', 'noindex, nofollow');
  html = setCanonical(html, seo.canonical);

  html = setMeta(html, 'og:url', seo.canonical, true);
  html = setMeta(html, 'og:title', seo.title, true);
  html = setMeta(html, 'og:description', seo.description, true);
  if (seo.ogType) html = setMeta(html, 'og:type', seo.ogType, true);
  if (seo.ogImage) html = setMeta(html, 'og:image', seo.ogImage, true);
  html = setMeta(html, 'twitter:url', seo.canonical, true);
  html = setMeta(html, 'twitter:title', seo.title, true);
  html = setMeta(html, 'twitter:description', seo.description, true);
  if (seo.ogImage) html = setMeta(html, 'twitter:image', seo.ogImage, true);

  const ld = (seo.structuredData || [])
    .map((d) => {
      const json = JSON.stringify(d).replace(/</g, '\\u003c');
      return `    <script type="application/ld+json" data-seo-page="true">${json}</script>`;
    })
    .join('\n');
  if (ld) html = html.replace('</head>', `${ld}\n  </head>`);
  return html;
}

async function main() {
  const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
  const routes = allRoutes();

  for (const { url, seo } of routes) {
    const html = buildPage(template, seo);
    const out = url === '/' ? path.join(DIST, 'index.html') : path.join(DIST, url, 'index.html');
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, html);
  }

  const today = new Date().toISOString().split('T')[0];
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`.replace('sitemap.org', 'sitemaps.org') +
    routes
      .map(({ url }) => {
        const loc = `${BASE_URL}${url === '/' ? '/' : url}`;
        const priority = url === '/' ? '1.0' : url.startsWith('/product/') ? '0.8' : '0.5';
        return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
      })
      .join('\n') +
    `\n</urlset>\n`;
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap);

  await fs.writeFile(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`
  );

  console.log(`prerendered ${routes.length} routes + sitemap.xml + robots.txt`);
}
main();

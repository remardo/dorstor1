import fs from 'node:fs';
import path from 'node:path';
import { allRoutes } from '../src/data/seo.ts';
import { products, categories } from '../src/data/products.ts';
import { categoryContent } from '../src/data/categoryContent.ts';

const routes = allRoutes();
const errors = [];
const canonicals = new Set();
const verifications = [];
const titles = new Map();
const descriptions = new Map();

for (const { url, seo } of routes) {
  // 78 is the ceiling productTitle() may reach when a longer title is the only thing
  // separating two near-identical products; anything above that is a bug.
  if (seo.title.length > 78) errors.push(`${url}: title ${seo.title.length}`);
  if (seo.description.length > 160) errors.push(`${url}: description ${seo.description.length}`);
  if (/…/.test(seo.title)) errors.push(`${url}: title truncated mid-word`);
  if (/…/.test(seo.description)) errors.push(`${url}: description truncated mid-word`);
  if (!seo.noindex) {
    if (titles.has(seo.title)) errors.push(`${url}: duplicate title with ${titles.get(seo.title)}`);
    titles.set(seo.title, url);
    if (descriptions.has(seo.description))
      errors.push(`${url}: duplicate description with ${descriptions.get(seo.description)}`);
    descriptions.set(seo.description, url);
  }
  if (canonicals.has(seo.canonical)) errors.push(`${url}: duplicate canonical`);
  canonicals.add(seo.canonical);

  const ld = JSON.stringify(seo.structuredData);
  if (ld.match(/"price":"?0(?:\.0+)?"?/)) errors.push(`${url}: zero price`);
  // HowTo rich results were retired in Sept 2023 — the markup is dead weight.
  if (ld.includes('"HowTo"')) errors.push(`${url}: deprecated HowTo schema`);
  // SVG placeholders are not renderable as og:image and are useless in Product schema.
  if (seo.ogImage?.endsWith('.svg')) errors.push(`${url}: svg og:image`);
  if (ld.includes('.svg')) errors.push(`${url}: svg in structured data`);
  // Placeholder requisites must never reach structured data.
  if (/0000000000|000-00-00/.test(ld)) errors.push(`${url}: placeholder requisites in schema`);

  const file = url === '/' ? 'dist/index.html' : path.join('dist', url, 'index.html');
  if (!fs.existsSync(file)) { errors.push(`${url}: missing prerender`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes('<div id="root"></div>')) errors.push(`${url}: empty root`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) errors.push(`${url}: h1 count`);
  if (!seo.noindex && /000-00-00/.test(html)) errors.push(`${url}: placeholder phone rendered`);
}

const robots = fs.readFileSync('dist/robots.txt', 'utf8');
if (!robots.includes('User-agent: OAI-SearchBot')) errors.push('robots: OAI-SearchBot missing');
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const expectedUrls = routes.filter(({ seo }) => !seo.noindex).length;
if ((sitemap.match(/<loc>/g) || []).length !== expectedUrls) errors.push('sitemap: URL count mismatch');
if (products.some((product) => product.image.startsWith('http'))) errors.push('products: external image remains');
if (!fs.existsSync('dist/serve.json')) errors.push('dist: serve.json (cache headers) missing');
// Verification files must ship; the server serves them verbatim past cleanUrls.
for (const file of fs.readdirSync('dist')) {
  if (/^(google[a-z0-9]+|yandex_[a-z0-9]+)\.html$/i.test(file)) verifications.push(file);
}
if (!verifications.length) errors.push('dist: no search-console verification file');

// Every category page must carry unique editorial content, not just a product grid.
for (const name of categories) {
  if (!categoryContent[name]) errors.push(`category content: ${name} missing`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  `SEO check passed: ${routes.length} prerendered routes, ${expectedUrls} indexable URLs, ` +
    `${products.length} products across ${categories.length} categories, all with unique title+description, ` +
    `${verifications.length} verification file(s).`
);

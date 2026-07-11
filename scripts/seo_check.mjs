import fs from 'node:fs';
import path from 'node:path';
import { allRoutes } from '../src/data/seo.ts';
import { products } from '../src/data/products.ts';
import { categoryContent } from '../src/data/categoryContent.ts';

const routes = allRoutes();
const errors = [];
const canonicals = new Set();

for (const { url, seo } of routes) {
  if (seo.title.length > 65) errors.push(`${url}: title ${seo.title.length}`);
  if (seo.description.length > 160) errors.push(`${url}: description ${seo.description.length}`);
  if (canonicals.has(seo.canonical)) errors.push(`${url}: duplicate canonical`);
  canonicals.add(seo.canonical);
  if (JSON.stringify(seo.structuredData).match(/"price":"?0(?:\.0+)?"?/)) errors.push(`${url}: zero price`);

  const file = url === '/' ? 'dist/index.html' : path.join('dist', url, 'index.html');
  if (!fs.existsSync(file)) { errors.push(`${url}: missing prerender`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes('<div id="root"></div>')) errors.push(`${url}: empty root`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) errors.push(`${url}: h1 count`);
}

const robots = fs.readFileSync('dist/robots.txt', 'utf8');
if (!robots.includes('User-agent: OAI-SearchBot')) errors.push('robots: OAI-SearchBot missing');
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const expectedUrls = routes.filter(({ seo }) => !seo.noindex).length;
if ((sitemap.match(/<loc>/g) || []).length !== expectedUrls) errors.push('sitemap: URL count mismatch');
if (products.some((product) => product.image.startsWith('http'))) errors.push('products: external image remains');
for (const name of ['Доводчики', 'Дверные замки', 'Антипаника', 'Цилиндровые механизмы', 'Дверные петли', 'Двери']) {
  if (!categoryContent[name]) errors.push(`category content: ${name} missing`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`SEO check passed: ${routes.length} prerendered routes, ${expectedUrls} indexable URLs, ${products.length} local product images.`);

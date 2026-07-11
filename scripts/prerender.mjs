// Post-build SSG: bakes per-route <head> (title/meta/canonical/OG + JSON-LD) AND real
// body markup (via the SSR bundle built by `vite build --ssr`) into a static HTML file
// per route, plus sitemap.xml and robots.txt. Run after `vite build && vite build --ssr`.
// Requires Node >=22.6 (imports the .ts SEO module via --experimental-strip-types).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { allRoutes, BASE_URL } from '../src/data/seo.ts';
import { site } from '../src/data/site.ts';
import { categories } from '../src/data/products.ts';
import { categorySlugs } from '../src/data/categories.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const SSR_ENTRY = path.resolve(__dirname, '../dist-ssr/entry-server.js');

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
  const { render } = await import(pathToFileURL(SSR_ENTRY).href);
  const routes = allRoutes();

  for (const { url, seo } of routes) {
    let html = buildPage(template, seo);
    const appHtml = render(url);
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const out = url === '/' ? path.join(DIST, 'index.html') : path.join(DIST, url, 'index.html');
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, html);
  }

  const sitemapRoutes = routes.filter(({ seo }) => !seo.noindex);
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`.replace('sitemap.org', 'sitemaps.org') +
    sitemapRoutes
      .map(({ url, seo }) => {
        const loc = `${BASE_URL}${url === '/' ? '/' : url}`;
        const priority = url === '/' ? '1.0' : url.startsWith('/product/') ? '0.8' : '0.5';
        const lastmod = seo.modified ? `<lastmod>${seo.modified}</lastmod>` : '';
        return `  <url><loc>${loc}</loc>${lastmod}<priority>${priority}</priority></url>`;
      })
      .join('\n') +
    `\n</urlset>\n`;
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap);

  await fs.writeFile(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\n` +
      `Allow: /\n\n` +
      `# AI / GEO crawlers — explicitly allowed for citation in AI answers\n` +
      `User-agent: OAI-SearchBot\nAllow: /\n\n` +
      `User-agent: GPTBot\nAllow: /\n\n` +
      `User-agent: ChatGPT-User\nAllow: /\n\n` +
      `User-agent: ClaudeBot\nAllow: /\n\n` +
      `User-agent: anthropic-ai\nAllow: /\n\n` +
      `User-agent: Claude-Web\nAllow: /\n\n` +
      `User-agent: PerplexityBot\nAllow: /\n\n` +
      `User-agent: Google-Extended\nAllow: /\n\n` +
      `User-agent: YandexGPT\nAllow: /\n\n` +
      `User-agent: Bingbot\nAllow: /\n\n` +
      `Sitemap: ${BASE_URL}/sitemap.xml\n`
  );

  await fs.writeFile(
    path.join(DIST, 'llms.txt'),
    `# DoorStore\n\n` +
      `> B2B поставщик дверной фурнитуры для производственных предприятий и дверных фабрик в России.\n\n` +
      `## Факты\n` +
      `- Профиль: оптовые поставки дверной фурнитуры (доводчики, глазки, цилиндровые механизмы, приводы, антипаника, замки, ручки, петли и др.) и технических дверей.\n` +
      `- Клиенты: юридические лица и ИП (B2B), фабрики и производственные предприятия.\n` +
      `- Бренды: ASSA ABLOY, DORMA, DORMAKABA, NOTEDO, ARMADILLO, APECS, IMPULSE и другие.\n` +
      `- Наличие, цена, минимальный заказ и срок поставки подтверждаются в коммерческом предложении.\n` +
      `- Доставка: по России, способ и срок согласуются для каждого заказа.\n` +
      `- Контакт отдела продаж: ${site.email}.\n\n` +
      `## Категории каталога\n` +
      categories.map((c) => `- ${c}: ${BASE_URL}/category/${categorySlugs[c]}`).join('\n') +
      `\n\n## Ключевые страницы\n` +
      `- Каталог: ${BASE_URL}/\n` +
      `- О компании: ${BASE_URL}/about\n` +
      `- Условия оплаты: ${BASE_URL}/payment\n` +
      `- Доставка: ${BASE_URL}/delivery\n` +
      `- Гарантия и возврат: ${BASE_URL}/warranty\n` +
      `- База знаний: ${BASE_URL}/guides\n`
  );

  console.log(`prerendered ${routes.length} routes + sitemap.xml + robots.txt + llms.txt`);
}
main();

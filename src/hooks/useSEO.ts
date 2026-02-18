import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = 'https://dorren.ru';
const SITE_NAME = 'Доррен';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function removeStructuredData() {
  document.querySelectorAll('script[data-seo-page]').forEach(el => el.remove());
}

function addStructuredData(data: Record<string, unknown> | Record<string, unknown>[]) {
  const items = Array.isArray(data) ? data : [data];
  items.forEach(item => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-page', 'true');
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noindex = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Title
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Basic meta
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonical || `${BASE_URL}${window.location.hash ? '/' : '/'}`;

    // Open Graph
    setMeta('og:type', ogType, true);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', canonical || `${BASE_URL}/`, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'ru_RU', true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:title', fullTitle, true);
    setMeta('twitter:description', description, true);
    setMeta('twitter:image', ogImage, true);

    // Structured data
    removeStructuredData();
    if (structuredData) {
      addStructuredData(structuredData);
    }

    return () => {
      removeStructuredData();
    };
  }, [title, description, keywords, canonical, ogType, ogImage, noindex, structuredData]);
}

// Helper to generate BreadcrumbList structured data
export function generateBreadcrumbs(
  items: { name: string; url?: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `https://dorren.ru${item.url}` } : {}),
    })),
  };
}

// Helper to generate Product structured data
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  brand: string;
  sku: string;
  category: string;
  inStock: boolean;
  url: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || undefined,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    sku: product.sku,
    category: product.category,
    url: `https://dorren.ru${product.url}`,
    offers: {
      '@type': 'Offer',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      priceCurrency: 'RUB',
      price: '0',
      priceValidUntil: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'Доррен',
      },
      itemCondition: 'https://schema.org/NewCondition',
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.brand,
    },
  };
}

// Helper to generate FAQPage structured data
export function generateFAQSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Helper to generate ItemList (for catalog pages)
export function generateItemListSchema(
  products: { name: string; url: string; image: string; position: number }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Каталог дверной фурнитуры Доррен',
    numberOfItems: products.length,
    itemListElement: products.map(p => ({
      '@type': 'ListItem',
      position: p.position,
      name: p.name,
      url: `https://dorren.ru${p.url}`,
      ...(p.image ? { image: p.image } : {}),
    })),
  };
}

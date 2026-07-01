// Single source of SEO metadata for every route.
// Consumed by pages (client-side useSEO) AND scripts/prerender.mjs (build-time baking).
// Keep route meta here so the two never drift.
import type { Product } from './products.ts';
import { products } from './products.ts';
import {
  generateBreadcrumbs,
  generateProductSchema,
  generateItemListSchema,
} from '../hooks/useSEO.ts';

export const BASE_URL = 'https://doorstore.shop';
export const EMAIL = 'b2b@doorstore.shop';

export interface RouteSeo {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  structuredData: Record<string, unknown>[];
}

const abs = (img: string) => (img.startsWith('http') ? img : `${BASE_URL}${img}`);

export function homeSeo(): RouteSeo {
  return {
    title: 'DoorStore — специализированная дверная фурнитура оптом для фабрик | B2B поставщик',
    description:
      'DoorStore — B2B поставщик дверной фурнитуры для производственных предприятий. Доводчики, глазки, цилиндры, приводы от ASSA ABLOY, DORMA, NOTEDO, DORMAKABA. Оптовые поставки по всей России. Отгрузка от 1 рабочего дня.',
    keywords:
      'дверная фурнитура оптом, фурнитура для дверей B2B, доводчики дверные, дверные глазки, цилиндровые механизмы, ASSA ABLOY, DORMA, NOTEDO, DORMAKABA, ARMADILLO, APECS, фурнитура для фабрик, комплектующие для дверей, DoorStore, купить дверную фурнитуру оптом',
    canonical: `${BASE_URL}/`,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }]),
      generateItemListSchema(
        products.slice(0, 20).map((p, i) => ({
          name: p.name,
          url: `/product/${p.slug}`,
          image: abs(p.image),
          position: i + 1,
        }))
      ),
    ],
  };
}

export function productSeo(product: Product): RouteSeo {
  return {
    title: `${product.name} купить оптом — ${product.brand} | ${product.category}`,
    description: `${product.name} — ${product.category.toLowerCase()} бренда ${product.brand}. ${
      product.status === 'in_stock' ? `В наличии ${product.stock} шт.` : 'Поставка под заказ.'
    } Оптовая цена по запросу. Доставка по РФ. B2B поставщик DoorStore.`,
    keywords: `${product.name}, ${product.category}, ${product.brand}, купить ${product.category.toLowerCase()}, ${product.brand} фурнитура, дверная фурнитура оптом, ${product.slug}`,
    canonical: `${BASE_URL}/product/${product.slug}`,
    ogType: 'product',
    ogImage: abs(product.image),
    structuredData: [
      generateBreadcrumbs([
        { name: 'Главная', url: '/' },
        { name: product.category, url: '/' },
        { name: product.name },
      ]),
      generateProductSchema({
        name: product.name,
        description: `${product.name} — ${product.category.toLowerCase()} от бренда ${product.brand}. ${product.description} Купить оптом в интернет-магазине DoorStore с доставкой по РФ.`,
        image: abs(product.image),
        brand: product.brand,
        sku: product.slug,
        category: product.category,
        inStock: product.status === 'in_stock',
        url: `/product/${product.slug}`,
      }),
    ],
  };
}

export const STATIC_SEO: Record<string, RouteSeo> = {
  '/payment': {
    title: 'Условия оплаты — безналичный расчёт, отсрочка платежа для B2B',
    description:
      'Условия оплаты дверной фурнитуры в DoorStore. Безналичный расчёт с НДС и без НДС, отсрочка платежа до 30 дней, предоплата. Полный пакет документов для бухгалтерии. B2B расчёты для юридических лиц и ИП.',
    keywords:
      'оплата дверной фурнитуры, безналичный расчёт, B2B оплата, отсрочка платежа, оплата с НДС, оплата без НДС, счёт на оплату, документооборот, DoorStore оплата',
    canonical: `${BASE_URL}/payment`,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Оплата' }]),
    ],
  },
  '/delivery': {
    title: 'Доставка дверной фурнитуры по России — сроки, способы, логистика',
    description:
      'Доставка дверной фурнитуры от DOORSTORE по всей России: отгрузка со склада, самовывоз в Москве, отправка транспортными компаниями. Прозрачные сроки и сопровождение B2B поставок.',
    keywords:
      'доставка дверной фурнитуры, доставка по россии, самовывоз москва, логистика b2b, отгрузка со склада, doorstore доставка',
    canonical: `${BASE_URL}/delivery`,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Доставка' }]),
    ],
  },
  '/warranty': {
    title: 'Гарантия и возврат дверной фурнитуры — условия, сроки, порядок',
    description:
      'Гарантийные условия на дверную фурнитуру DoorStore. 100% оригинальная продукция. Гарантия производителя до 5 лет (ASSA ABLOY, DORMA). Возврат в течение 14 дней. Обмен, ремонт, рекламации. Прозрачные условия для B2B клиентов.',
    keywords:
      'гарантия дверная фурнитура, возврат фурнитуры, гарантия ASSA ABLOY, гарантия DORMA, гарантия NOTEDO, возврат товара, обмен фурнитуры, рекламация, DoorStore гарантия, оригинальная продукция',
    canonical: `${BASE_URL}/warranty`,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Гарантия и возврат' }]),
    ],
  },
  '/about': {
    title: 'О компании DoorStore — B2B поставщик дверной фурнитуры для фабрик и производств',
    description:
      'DoorStore — поставщик дверной фурнитуры для предприятий и дверных фабрик. Комплексные B2B поставки, стабильный склад, техническая экспертиза и логистика по всей России.',
    keywords:
      'о компании doorstore, b2b поставщик дверной фурнитуры, поставщик фурнитуры для фабрик, дверная фурнитура оптом, doorstore москва',
    canonical: `${BASE_URL}/about`,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'О компании' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DOORSTORE',
        url: `${BASE_URL}/`,
        email: EMAIL,
        telephone: '+7-800-123-45-67',
        areaServed: 'RU',
        description: 'B2B поставщик дверной фурнитуры для производственных предприятий.',
      },
    ],
  },
};

// All routes for sitemap generation.
export function allRoutes(): { url: string; seo: RouteSeo }[] {
  return [
    { url: '/', seo: homeSeo() },
    ...Object.entries(STATIC_SEO).map(([url, seo]) => ({ url, seo })),
    ...products.map((p) => ({ url: `/product/${p.slug}`, seo: productSeo(p) })),
  ];
}

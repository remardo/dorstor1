// Single source of SEO metadata for every route.
// Consumed by pages (client-side useSEO) AND scripts/prerender.mjs (build-time baking).
// Keep route meta here so the two never drift.
import type { Product } from './products.ts';
import { products, categories } from './products.ts';
import { categorySlugs } from './categories.ts';
import {
  generateBreadcrumbs,
  generateProductSchema,
  generateItemListSchema,
  generateFAQSchema,
} from '../hooks/useSEO.ts';
import { site } from './site.ts';
import { categoryContent } from './categoryContent.ts';

export interface FAQItem {
  question: string;
  answer: string;
}

export const PAYMENT_FAQ: FAQItem[] = [
  {
    question: 'Работаете ли вы с НДС?',
    answer: 'Налоговый режим и комплект закрывающих документов будут указаны в счёте и договоре. До загрузки реквизитов уточните условия у менеджера.'
  },
  {
    question: 'Какой минимальный размер заказа?',
    answer: 'Минимальная сумма зависит от состава и условий поставки. Менеджер подтвердит её после получения перечня позиций.'
  },
  {
    question: 'Как быстро выставляется счёт?',
    answer: 'Счёт формируется после согласования состава заявки, наличия и срока поставки. Срок подготовки подтверждает менеджер.'
  },
  {
    question: 'Можно ли получить отсрочку платежа?',
    answer: 'Возможность отсрочки и лимит определяются индивидуально и фиксируются в договоре поставки.'
  },
  {
    question: 'Предоставляете ли вы ЭДО?',
    answer: 'Способ обмена закрывающими документами указывается в договоре. Доступные операторы ЭДО будут подтверждены после загрузки реквизитов.'
  },
];

export const DELIVERY_FAQ: FAQItem[] = [
  {
    question: 'Как быстро вы отгружаете заказ?',
    answer: 'Срок отгрузки зависит от наличия, комплектации и условий оплаты; подтверждённая дата указывается в коммерческом предложении.'
  },
  {
    question: 'Можно ли организовать самовывоз?',
    answer: 'Да, самовывоз доступен со склада в Москве по предварительному согласованию времени и номера машины.'
  },
  {
    question: 'Какими ТК отправляете по России?',
    answer: 'Работаем с основными федеральными перевозчиками и подбираем ТК под ваш регион, срок и бюджет доставки.'
  },
  {
    question: 'Что делать, если груз приехал с повреждением?',
    answer: 'При приемке зафиксируйте повреждение в акте ТК и сразу свяжитесь с менеджером DOORSTORE. Мы оперативно отработаем замену или компенсацию.'
  },
];

export const WARRANTY_FAQ: FAQItem[] = [
  {
    question: 'Как подтвердить покупку для гарантийного обращения?',
    answer: 'Для подтверждения покупки необходимо предоставить товарную накладную (ТОРГ-12), счёт-фактуру или иной документ, подтверждающий приобретение товара у нашей компании. Все документы хранятся в нашей системе, поэтому достаточно сообщить номер заказа.'
  },
  {
    question: 'Можно ли вернуть товар, если он не подошёл по размеру?',
    answer: 'Условия возврата для юридических лиц зависят от договора и основания обращения. Не устанавливайте товар, сохраните упаковку и направьте менеджеру документы по поставке.'
  },
  {
    question: 'Распространяется ли гарантия на товары со скидкой?',
    answer: 'Да, гарантийные условия распространяются на все товары вне зависимости от цены покупки и наличия скидки. Исключение составляют товары, проданные как уценённые по причине выявленных дефектов — о таких случаях клиент уведомляется заранее.'
  },
  {
    question: 'Куда обращаться по гарантии — к вам или производителю?',
    answer: 'Сначала обратитесь в DoorStore с номером поставки и описанием неисправности. Менеджер проверит условия конкретного производителя и согласует дальнейшие действия.'
  },
];

export const BASE_URL = site.baseUrl;
export const EMAIL = site.email;

export interface RouteSeo {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  modified?: string;
  noindex?: boolean;
  structuredData: Record<string, unknown>[];
}

const abs = (img: string) => !img ? '' : img.startsWith('http') ? img : `${BASE_URL}${img}`;
const compact = (value: string, max: number) =>
  value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;

export function homeSeo(): RouteSeo {
  return {
    title: 'Дверная фурнитура оптом для фабрик | DoorStore',
    description:
      'Дверная фурнитура оптом для фабрик и производств: 302 позиции, подбор комплектующих, поставка по России. Цена и срок — по запросу.',
    canonical: `${BASE_URL}/`,
    modified: site.contentUpdatedAt,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        url: BASE_URL,
        email: site.email,
        areaServed: 'RU',
        description: 'B2B поставщик дверной фурнитуры для производственных предприятий.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        url: BASE_URL,
        inLanguage: 'ru-RU',
      },
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

export function categorySeo(category: string): RouteSeo {
  const catProducts = products.filter((p) => p.category === category);
  const slug = categorySlugs[category];
  return {
    title: compact(`${category} оптом — ${catProducts.length} моделей | DoorStore`, 65),
    description: compact(`${category} оптом для дверных фабрик и производств. ${catProducts.length} позиций в наличии и под заказ, технический подбор и поставка по России.`, 160),
    canonical: `${BASE_URL}/category/${slug}`,
    modified: site.contentUpdatedAt,
    structuredData: [
      generateBreadcrumbs([
        { name: 'Главная', url: '/' },
        { name: category },
      ]),
      generateItemListSchema(
        catProducts.slice(0, 20).map((p, i) => ({
          name: p.name,
          url: `/product/${p.slug}`,
          image: abs(p.image),
          position: i + 1,
        }))
      ),
      ...(categoryContent[category] ? [generateFAQSchema(categoryContent[category].faq)] : []),
    ],
  };
}

export function productSeo(product: Product): RouteSeo {
  return {
    title: compact(`${product.name} ${product.brand} оптом | DoorStore`, 65),
    description: compact(`${product.name}, ${product.brand}. ${
      product.status === 'in_stock' ? `В наличии ${product.stock} шт.` : 'Поставка под заказ.'
    } Цена по запросу, подбор совместимых комплектующих и доставка по России.`, 160),
    canonical: `${BASE_URL}/product/${product.slug}`,
    modified: site.contentUpdatedAt,
    ogType: 'product',
    ogImage: abs(product.image),
    structuredData: [
      generateBreadcrumbs([
        { name: 'Главная', url: '/' },
        { name: product.category, url: `/category/${categorySlugs[product.category]}` },
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
    title: 'Оплата дверной фурнитуры для B2B | DoorStore',
    description:
      'Условия оплаты дверной фурнитуры для юридических лиц и ИП: безналичный расчёт, документы и порядок оформления заказа.',
    canonical: `${BASE_URL}/payment`,
    modified: site.contentUpdatedAt,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Оплата' }]),
      generateFAQSchema(PAYMENT_FAQ),
    ],
  },
  '/delivery': {
    title: 'Доставка дверной фурнитуры по России | DoorStore',
    description:
      'Доставка дверной фурнитуры по России: отгрузка со склада, самовывоз и отправка транспортными компаниями для B2B-клиентов.',
    canonical: `${BASE_URL}/delivery`,
    modified: site.contentUpdatedAt,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Доставка' }]),
      generateFAQSchema(DELIVERY_FAQ),
    ],
  },
  '/warranty': {
    title: 'Гарантия и возврат дверной фурнитуры | DoorStore',
    description:
      'Порядок гарантийного обращения, проверки комплектности и возврата дверной фурнитуры для B2B-клиентов DoorStore.',
    canonical: `${BASE_URL}/warranty`,
    modified: site.contentUpdatedAt,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Гарантия и возврат' }]),
      generateFAQSchema(WARRANTY_FAQ),
    ],
  },
  '/about': {
    title: 'О компании — B2B поставщик фурнитуры | DoorStore',
    description:
      'DoorStore — B2B поставщик дверной фурнитуры для предприятий и фабрик: технический подбор, комплектация заказов и доставка по России.',
    canonical: `${BASE_URL}/about`,
    modified: site.contentUpdatedAt,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'О компании' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DOORSTORE',
        url: `${BASE_URL}/`,
        email: EMAIL,
        areaServed: 'RU',
        description: 'B2B поставщик дверной фурнитуры для производственных предприятий.',
      },
    ],
  },
  '/contacts': {
    title: 'Контакты и реквизиты | DoorStore',
    description: 'Контакты отдела B2B-поставок DoorStore для запроса цены, подбора дверной фурнитуры и получения документов.',
    canonical: `${BASE_URL}/contacts`,
    modified: site.contentUpdatedAt,
    noindex: site.detailsAreDummy,
    structuredData: [generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'Контакты' }])],
  },
  '/privacy': {
    title: 'Политика конфиденциальности | DoorStore',
    description: 'Правила обработки персональных и технических данных посетителей сайта DoorStore.',
    canonical: `${BASE_URL}/privacy`,
    modified: site.contentUpdatedAt,
    noindex: true,
    structuredData: [],
  },
  '/terms': {
    title: 'Условия использования сайта | DoorStore',
    description: 'Условия использования каталога и технических материалов сайта DoorStore.',
    canonical: `${BASE_URL}/terms`,
    modified: site.contentUpdatedAt,
    noindex: true,
    structuredData: [],
  },
  '/guides': {
    title: 'База знаний по дверной фурнитуре | DoorStore',
    description: 'Инструкции по подбору дверных доводчиков, замков, цилиндров, антипаники и другой фурнитуры для производства.',
    canonical: `${BASE_URL}/guides`,
    modified: site.contentUpdatedAt,
    structuredData: [generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'База знаний' }])],
  },
  '/guides/kak-vybrat-dovodchik': {
    title: 'Как выбрать дверной доводчик: 5 шагов | DoorStore',
    description: 'Как подобрать дверной доводчик по массе и ширине полотна, условиям эксплуатации, типу тяги и монтажной схеме.',
    canonical: `${BASE_URL}/guides/kak-vybrat-dovodchik`,
    modified: site.contentUpdatedAt,
    structuredData: [
      generateBreadcrumbs([{ name: 'Главная', url: '/' }, { name: 'База знаний', url: '/guides' }, { name: 'Как выбрать доводчик' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как выбрать дверной доводчик: 5 шагов',
        datePublished: site.contentUpdatedAt,
        dateModified: site.contentUpdatedAt,
        author: { '@type': 'Organization', name: site.name },
        publisher: { '@type': 'Organization', name: site.name },
        mainEntityOfPage: `${BASE_URL}/guides/kak-vybrat-dovodchik`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Как подобрать дверной доводчик',
        step: ['Соберите параметры двери', 'Определите условия эксплуатации', 'Выберите монтажную схему', 'Перечислите функции', 'Сверьте паспорт модели'].map((name, index) => ({ '@type': 'HowToStep', position: index + 1, name })),
      },
    ],
  },
  '/cases': {
    title: 'Кейсы комплектации дверных производств | DoorStore',
    description: 'Примеры комплектации дверных производств, монтажных компаний и технических дверей.',
    canonical: `${BASE_URL}/cases`,
    modified: site.contentUpdatedAt,
    noindex: true,
    structuredData: [],
  },
  '/documents': {
    title: 'Документы и инструкции | DoorStore',
    description: 'Сертификаты, декларации и инструкции производителей дверной фурнитуры.',
    canonical: `${BASE_URL}/documents`,
    modified: site.contentUpdatedAt,
    noindex: true,
    structuredData: [],
  },
};

// All routes for sitemap generation.
export function allRoutes(): { url: string; seo: RouteSeo }[] {
  return [
    { url: '/', seo: homeSeo() },
    ...Object.entries(STATIC_SEO).map(([url, seo]) => ({ url, seo })),
    ...categories.map((c) => ({ url: `/category/${categorySlugs[c]}`, seo: categorySeo(c) })),
    ...products.map((p) => ({ url: `/product/${p.slug}`, seo: productSeo(p) })),
  ];
}

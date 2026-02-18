import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Plus, Minus, PackageCheck, PackageX, Tag, Layers,
  Building2, Truck, Shield, ChevronRight, Share2, FileText, Phone
} from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import { useSEO, generateBreadcrumbs, generateProductSchema } from '../hooks/useSEO';

interface ProductPageProps {
  cart: Record<number, number>;
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
}

export function ProductPage({ cart, onAdd, onRemove }: ProductPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'delivery'>('description');

  const product = products.find(p => p.slug === slug);

  // SEO for product page
  const structuredData = useMemo(() => {
    if (!product) return undefined;
    return [
      generateBreadcrumbs([
        { name: 'Главная', url: '/' },
        { name: product.category, url: '/' },
        { name: product.name },
      ]),
      generateProductSchema({
        name: product.name,
        description: `${product.name} — ${product.category.toLowerCase()} от бренда ${product.brand}. ${product.description} Купить оптом в интернет-магазине Доррен с доставкой по РФ.`,
        image: product.image,
        brand: product.brand,
        sku: product.slug,
        category: product.category,
        inStock: product.status === 'in_stock',
        url: `/#/product/${product.slug}`,
      }),
    ];
  }, [product]);

  useSEO({
    title: product
      ? `${product.name} купить оптом — ${product.brand} | ${product.category}`
      : 'Товар не найден',
    description: product
      ? `${product.name} — ${product.category.toLowerCase()} бренда ${product.brand}. ${product.status === 'in_stock' ? `В наличии ${product.stock} шт.` : 'Поставка под заказ.'} Оптовая цена по запросу. Доставка по РФ. B2B поставщик Доррен.`
      : 'Запрашиваемый товар не найден в каталоге. Вернитесь в каталог дверной фурнитуры Доррен.',
    keywords: product
      ? `${product.name}, ${product.category}, ${product.brand}, купить ${product.category.toLowerCase()}, ${product.brand} фурнитура, дверная фурнитура оптом, ${product.slug}`
      : 'дверная фурнитура, каталог',
    canonical: product ? `https://dorren.ru/#/product/${product.slug}` : undefined,
    ogType: 'product',
    ogImage: product?.image || undefined,
    structuredData,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setImgError(false);
    setActiveTab('description');
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
          <PackageX className="w-12 h-12 text-slate-300" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Товар не найден</h1>
        <p className="text-slate-500 mb-6">Возможно, товар был удалён или ссылка устарела</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 h-11 px-6 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const inStock = product.status === 'in_stock';
  const cartQty = cart[product.id] || 0;

  // Related products - same category, excluding current
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Also from brand
  const sameBrand = products
    .filter(p => p.brand === product.brand && p.id !== product.id && p.category !== product.category)
    .slice(0, 4);

  const specs = [
    { label: 'Артикул', value: product.slug, icon: Tag },
    { label: 'Категория', value: product.category, icon: Layers },
    { label: 'Бренд', value: product.brand, icon: Building2 },
    { label: 'Наличие', value: inStock ? `${product.stock} шт. на складе` : 'Поставка под заказ', icon: inStock ? PackageCheck : PackageX },
  ];

  return (
    <article className="bg-white" itemScope itemType="https://schema.org/Product">
      {/* Hidden structured data attributes */}
      <meta itemProp="name" content={product.name} />
      <meta itemProp="description" content={product.description} />
      <meta itemProp="sku" content={product.slug} />
      <meta itemProp="category" content={product.category} />
      <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
        <meta itemProp="name" content={product.brand} />
      </div>
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="availability" content={inStock ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder'} />
        <meta itemProp="priceCurrency" content="RUB" />
        <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
      </div>

      {/* Breadcrumbs */}
      <nav className="bg-slate-50 border-b border-slate-200" aria-label="Хлебные крошки">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500 overflow-x-auto" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-slate-900 transition-colors whitespace-nowrap">
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" /></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-slate-900 transition-colors whitespace-nowrap">
                <span itemProp="name">{product.category}</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" /></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-slate-900 font-medium truncate">{product.name}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Back button mobile */}
      <div className="md:hidden px-4 py-3 border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Назад к каталогу"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </button>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-36">
              <figure className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center">
                {product.image && !imgError ? (
                  <img
                    src={product.image}
                    alt={`${product.name} — ${product.category} ${product.brand}. Фото товара.`}
                    title={product.name}
                    className="w-full h-full object-contain p-8 md:p-12"
                    onError={() => setImgError(true)}
                    itemProp="image"
                    width="600"
                    height="600"
                    loading="eager"
                  />
                ) : (
                  <div className="text-slate-300" role="img" aria-label={`${product.name} — изображение недоступно`}>
                    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                )}
              </figure>

              {/* Status badge on image */}
              <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium shadow-sm ${
                inStock
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-orange-50 text-orange-700 border border-orange-200'
              }`} role="status">
                {inStock ? <PackageCheck className="w-4 h-4" aria-hidden="true" /> : <PackageX className="w-4 h-4" aria-hidden="true" />}
                {inStock ? `В наличии: ${product.stock} шт.` : 'Под заказ'}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Brand badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-200">
                {product.brand}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">{product.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {product.description} Подходит для установки на входные и технические двери. Оптовые поставки для производственных предприятий.
            </p>

            {/* Price section */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl border border-slate-200 p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-slate-500">Цена для B2B клиентов</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">По запросу</div>
              <p className="text-sm text-slate-500">
                Добавьте товар в заявку для получения коммерческого предложения
              </p>
            </div>

            {/* Cart controls */}
            <div className="mb-8">
              {cartQty === 0 ? (
                <button
                  onClick={() => onAdd(product)}
                  disabled={!inStock}
                  className={`w-full h-14 rounded-2xl text-base font-semibold transition-all active:scale-[0.99] flex items-center justify-center gap-3 ${
                    inStock
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label={inStock ? `Добавить ${product.name} в заявку` : `${product.name} нет в наличии`}
                >
                  <Plus className="w-5 h-5" aria-hidden="true" />
                  {inStock ? 'Добавить в заявку' : 'Нет в наличии'}
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onRemove(product.id)}
                      className="h-14 w-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shrink-0"
                      aria-label="Уменьшить количество"
                    >
                      <Minus className="w-5 h-5 text-slate-600" />
                    </button>
                    <div className="flex-1 h-14 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-lg font-bold text-amber-700" aria-live="polite">
                      {cartQty} шт.
                    </div>
                    <button
                      onClick={() => onAdd(product)}
                      disabled={cartQty >= product.stock}
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                        cartQty >= product.stock
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                      aria-label="Увеличить количество"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-center text-sm text-amber-600 font-medium" role="status">
                    ✓ Товар добавлен в заявку
                  </p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-8">
              <a
                href="tel:+78001234567"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-all"
                aria-label="Позвонить для уточнения цены"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Узнать цену
              </a>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-all"
                aria-label="Скопировать ссылку на товар"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
                Поделиться
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Truck className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
                <div className="text-xs">
                  <div className="font-medium text-slate-900">Доставка</div>
                  <div className="text-slate-500">По всей РФ</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Shield className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
                <div className="text-xs">
                  <div className="font-medium text-slate-900">Гарантия</div>
                  <div className="text-slate-500">Оригинал</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <FileText className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
                <div className="text-xs">
                  <div className="font-medium text-slate-900">Документы</div>
                  <div className="text-slate-500">Сертификаты</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs section */}
        <section className="mt-12 md:mt-16 border-t border-slate-200 pt-8" aria-label="Подробная информация о товаре">
          <div className="flex gap-1 border-b border-slate-200 mb-8 overflow-x-auto" role="tablist" aria-label="Информация о товаре">
            {[
              { key: 'description' as const, label: 'Описание' },
              { key: 'specs' as const, label: 'Характеристики' },
              { key: 'delivery' as const, label: 'Доставка и оплата' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-controls={`tabpanel-${tab.key}`}
                id={`tab-${tab.key}`}
                className={`px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" id={`tabpanel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <div className="prose prose-slate prose-sm">
                  <p className="text-slate-600 leading-relaxed text-base mb-4">
                    {product.description}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base mb-4">
                    Данный товар предназначен для профессионального применения в производстве дверных конструкций.
                    Изготовлен из высококачественных материалов, отвечает всем требованиям ГОСТ и техническим регламентам.
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Область применения</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                      <span>Входные двери для жилых помещений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                      <span>Технические двери промышленных объектов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                      <span>Противопожарные дверные конструкции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                      <span>Серийное производство на дверных фабриках</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <dl className="divide-y divide-slate-100">
                  {specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 py-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                        <spec.icon className="w-5 h-5 text-slate-500" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <dt className="text-sm text-slate-500">{spec.label}</dt>
                        <dd className="text-sm font-medium text-slate-900 truncate">{spec.value}</dd>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-slate-500" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <dt className="text-sm text-slate-500">Страна производства</dt>
                      <dd className="text-sm font-medium text-slate-900">Уточняйте у менеджера</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-slate-500" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <dt className="text-sm text-slate-500">Гарантия</dt>
                      <dd className="text-sm font-medium text-slate-900">Гарантия производителя</dd>
                    </div>
                  </div>
                </dl>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                      <Truck className="w-6 h-6 text-amber-500" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Доставка</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-4">
                      <li>• Доставка транспортными компаниями по всей России</li>
                      <li>• Отгрузка со склада от 1 рабочего дня</li>
                      <li>• Самовывоз со склада в Москве</li>
                      <li>• Стоимость доставки рассчитывается индивидуально</li>
                    </ul>
                    <Link
                      to="/delivery"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Подробнее о доставке
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-amber-500" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Оплата</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-4">
                      <li>• Безналичный расчёт для юридических лиц</li>
                      <li>• Работаем с НДС и без НДС</li>
                      <li>• Отсрочка платежа для постоянных клиентов</li>
                      <li>• Полный пакет бухгалтерских документов</li>
                    </ul>
                    <Link
                      to="/payment"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Подробнее об оплате
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Гарантия</h4>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>• Полная гарантия производителя на все товары</li>
                    <li>• Возврат и обмен в течение 14 дней</li>
                    <li>• Оперативное рассмотрение рекламаций</li>
                    <li>• 100% оригинальная сертифицированная продукция</li>
                  </ul>
                  <Link
                    to="/warranty"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Подробнее о гарантии
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-12" aria-label="Похожие товары">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Похожие товары</h2>
              <Link
                to="/"
                className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors flex items-center gap-1"
              >
                Все товары
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map(p => (
                <RelatedCard key={p.id} product={p} cartQty={cart[p.id] || 0} onAdd={onAdd} />
              ))}
            </div>
          </section>
        )}

        {/* Same brand */}
        {sameBrand.length > 0 && (
          <section className="mt-12 border-t border-slate-200 pt-12" aria-label={`Ещё от ${product.brand}`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Ещё от {product.brand}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sameBrand.map(p => (
                <RelatedCard key={p.id} product={p} cartQty={cart[p.id] || 0} onAdd={onAdd} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function RelatedCard({ product, cartQty, onAdd }: { product: Product; cartQty: number; onAdd: (p: Product) => void }) {
  const [imgError, setImgError] = useState(false);
  const inStock = product.status === 'in_stock';

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all overflow-hidden flex flex-col"
      title={`${product.name} — ${product.brand}`}
    >
      <div className="aspect-square bg-slate-50 overflow-hidden relative">
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={`${product.name} — ${product.category} ${product.brand}`}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
            width="300"
            height="300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-200" role="img" aria-label={product.name}>
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
        <div className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-md ${
          inStock ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
        }`}>
          {inStock ? 'В наличии' : 'Под заказ'}
        </div>
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-1">{product.brand}</span>
        <h3 className="text-xs sm:text-sm font-medium text-slate-900 leading-snug line-clamp-2 mb-2 group-hover:text-brand-700 transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto">
          {cartQty > 0 ? (
            <span className="text-xs font-medium text-amber-600">✓ В заявке: {cartQty} шт.</span>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAdd(product);
              }}
              disabled={!inStock}
              className={`w-full h-8 rounded-lg text-xs font-medium transition-all ${
                inStock
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              aria-label={`Добавить ${product.name} в заявку`}
            >
              В заявку
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

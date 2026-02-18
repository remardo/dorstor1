import { useState } from 'react';
import { Filter, X, ChevronDown, SlidersHorizontal, LayoutGrid, List, Package } from 'lucide-react';
import type { Product } from '../data/products';
import { categories, brands } from '../data/products';
import { ProductCard } from './ProductCard';

interface CatalogProps {
  products: Product[];
  cart: Record<number, number>;
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
  catalogRef: React.RefObject<HTMLDivElement | null>;
}

type StockFilter = 'all' | 'in_stock' | 'out_of_stock';

export function Catalog({ products, cart, onAdd, onRemove, catalogRef }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [stockFilter, setStockFilter] = useState<StockFilter>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filtered = products.filter(p => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
    if (stockFilter === 'in_stock' && p.status !== 'in_stock') return false;
    if (stockFilter === 'out_of_stock' && p.status !== 'out_of_stock') return false;
    return true;
  });

  const activeFiltersCount = (selectedCategory ? 1 : 0) + selectedBrands.length + (stockFilter !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrands([]);
    setStockFilter('all');
  };

  const categoryCounts = categories.map(cat => ({
    name: cat,
    count: products.filter(p => p.category === cat).length
  }));

  return (
    <section ref={catalogRef} className="py-12 md:py-16 bg-slate-50/50" aria-label="Каталог дверной фурнитуры" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Каталог продукции</h2>
            <p className="text-slate-500 mt-1">
              {filtered.length} {filtered.length === 1 ? 'позиция' : filtered.length < 5 ? 'позиции' : 'позиций'} в каталоге
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`md:hidden inline-flex items-center gap-2 h-10 px-4 rounded-xl text-sm font-medium transition-all border ${
                showFilters || activeFiltersCount > 0
                  ? 'bg-brand-50 border-brand-200 text-brand-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Фильтры
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-[11px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <div className="hidden md:flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`h-10 w-10 flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`h-10 w-10 flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-6 md:sticky md:top-36">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Фильтры
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-brand-600 hover:text-brand-700 font-medium"
                  >
                    Сбросить все
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Категория</h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      !selectedCategory ? 'bg-slate-900 text-white font-medium' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Все категории
                  </button>
                  {categoryCounts.map(({ name, count }) => (
                    <button
                      key={name}
                      onClick={() => setSelectedCategory(name === selectedCategory ? null : name)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between ${
                        selectedCategory === name ? 'bg-slate-900 text-white font-medium' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">{name}</span>
                      <span className={`text-xs ${selectedCategory === name ? 'text-slate-400' : 'text-slate-400'}`}>{count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <button
                  onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
                  className="flex items-center justify-between w-full mb-3"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Бренд</h4>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${brandDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {brandDropdownOpen && (
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {brands.map(brand => (
                      <label
                        key={brand}
                        className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 accent-brand-600"
                        />
                        <span className="text-sm text-slate-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Stock */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Наличие</h4>
                <div className="space-y-1">
                  {[
                    { value: 'all' as StockFilter, label: 'Все' },
                    { value: 'in_stock' as StockFilter, label: 'В наличии' },
                    { value: 'out_of_stock' as StockFilter, label: 'Под заказ' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setStockFilter(opt.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        stockFilter === opt.value ? 'bg-slate-900 text-white font-medium' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            {/* Active filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 h-8 px-3 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-200">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {selectedBrands.map(brand => (
                  <span key={brand} className="inline-flex items-center gap-1.5 h-8 px-3 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-200">
                    {brand}
                    <button onClick={() => toggleBrand(brand)}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
                {stockFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 h-8 px-3 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-200">
                    {stockFilter === 'in_stock' ? 'В наличии' : 'Под заказ'}
                    <button onClick={() => setStockFilter('all')}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filtered.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {filtered.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      cartQty={cart[product.id] || 0}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map(product => (
                    <ListProductCard
                      key={product.id}
                      product={product}
                      cartQty={cart[product.id] || 0}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Package className="w-16 h-16 text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-1">Ничего не найдено</h3>
                <p className="text-sm text-slate-500 mb-4">Попробуйте изменить параметры фильтрации</p>
                <button
                  onClick={clearFilters}
                  className="h-10 px-5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ListProductCard({ product, cartQty, onAdd, onRemove }: {
  product: Product;
  cartQty: number;
  onAdd: (p: Product) => void;
  onRemove: (id: number) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const inStock = product.status === 'in_stock';

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all p-4 flex items-center gap-4">
      <a
        href={`#/product/${product.slug}`}
        className="w-20 h-20 rounded-lg bg-slate-50 overflow-hidden shrink-0"
      >
        {product.image && !imgError ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2" onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
      </a>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded">{product.brand}</span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500">{product.category}</span>
        </div>
        <a href={`#/product/${product.slug}`} className="text-sm font-medium text-slate-900 truncate block hover:text-brand-700 transition-colors">
          {product.name}
        </a>
      </div>

      <div className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg shrink-0 ${
        inStock ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
      }`}>
        {inStock ? `${product.stock} шт.` : 'Под заказ'}
      </div>

      <div className="shrink-0">
        {cartQty === 0 ? (
          <button
            onClick={() => onAdd(product)}
            disabled={!inStock}
            className={`h-9 px-4 rounded-lg text-xs font-medium transition-all ${
              inStock ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            В заявку
          </button>
        ) : (
          <div className="flex items-center gap-1.5">
            <button onClick={() => onRemove(product.id)} className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">
              <span className="text-sm">−</span>
            </button>
            <span className="w-10 text-center text-sm font-semibold text-amber-700">{cartQty}</span>
            <button
              onClick={() => onAdd(product)}
              disabled={cartQty >= product.stock}
              className={`h-9 w-9 rounded-lg flex items-center justify-center ${
                cartQty >= product.stock ? 'bg-slate-100 text-slate-400' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <span className="text-sm">+</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

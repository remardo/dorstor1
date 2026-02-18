import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, PackageCheck, PackageX, ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  cartQty: number;
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
}

export function ProductCard({ product, cartQty, onAdd, onRemove }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const inStock = product.status === 'in_stock';

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <Link
        to={`/product/${product.slug}`}
        className="relative aspect-square bg-slate-50 overflow-hidden block"
      >
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={`${product.name} — ${product.category} ${product.brand}`}
            title={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
            width="400"
            height="400"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-slate-300">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        )}

        {/* Status badge */}
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${
          inStock
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-slate-100 text-slate-500 border border-slate-200'
        }`}>
          {inStock ? <PackageCheck className="w-3.5 h-3.5" /> : <PackageX className="w-3.5 h-3.5" />}
          {inStock ? `${product.stock} шт.` : 'Под заказ'}
        </div>

        {/* View product link */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <ArrowRight className="w-4 h-4 text-slate-600" />
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
            {product.brand}
          </span>
        </div>
        <Link
          to={`/product/${product.slug}`}
          className="text-sm font-medium text-slate-900 leading-snug mb-1 line-clamp-2 hover:text-brand-700 transition-colors"
        >
          {product.name}
        </Link>
        <p className="text-xs text-slate-500 mb-4">{product.category}</p>

        {/* Cart controls */}
        <div className="mt-auto">
          {cartQty === 0 ? (
            <button
              onClick={() => onAdd(product)}
              disabled={!inStock}
              className={`w-full h-10 rounded-xl text-sm font-medium transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                inStock
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Plus className="w-4 h-4" />
              {inStock ? 'В заявку' : 'Нет в наличии'}
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onRemove(product.id)}
                className="h-10 w-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shrink-0"
              >
                <Minus className="w-4 h-4 text-slate-600" />
              </button>
              <div className="flex-1 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-sm font-semibold text-amber-700">
                {cartQty} шт.
              </div>
              <button
                onClick={() => onAdd(product)}
                disabled={cartQty >= product.stock}
                className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  cartQty >= product.stock
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

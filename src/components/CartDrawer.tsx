import { useState } from 'react';
import { X, Minus, Plus, ShoppingCart, Trash2, Send, CheckCircle } from 'lucide-react';
import type { Product } from '../data/products';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cart: Record<number, number>;
  products: Product[];
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
  onClear: () => void;
}

export function CartDrawer({ open, onClose, cart, products, onAdd, onRemove, onClear }: CartDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  
  const cartItems = Object.entries(cart)
    .map(([id, qty]) => ({
      product: products.find(p => p.id === Number(id))!,
      qty
    }))
    .filter(item => item.product && item.qty > 0);

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClear();
      onClose();
    }, 3000);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-slate-900" />
            <h2 className="text-lg font-semibold text-slate-900">Заявка</h2>
            {totalItems > 0 && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Заявка отправлена!</h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Наш менеджер свяжется с вами в ближайшее время для уточнения деталей и стоимости.
            </p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <ShoppingCart className="w-9 h-9 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-1">Заявка пуста</h3>
            <p className="text-sm text-slate-500">Добавьте товары из каталога</p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cartItems.map(({ product, qty }) => (
                <CartItem
                  key={product.id}
                  product={product}
                  qty={qty}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onClose={onClose}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 p-5 space-y-4 shrink-0 bg-slate-50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Позиций в заявке:</span>
                <span className="font-semibold text-slate-900">{cartItems.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Общее количество:</span>
                <span className="font-semibold text-slate-900">{totalItems} шт.</span>
              </div>

              <div className="text-xs text-slate-500 bg-amber-50 border border-amber-200 rounded-lg p-3">
                💰 Цены для B2B-клиентов предоставляются по запросу. Отправьте заявку, и мы подготовим коммерческое предложение.
              </div>

              <button
                onClick={handleSubmit}
                className="w-full h-12 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Отправить заявку
              </button>

              <button
                onClick={onClear}
                className="w-full h-10 text-sm text-slate-500 hover:text-red-600 flex items-center justify-center gap-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Очистить заявку
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function CartItem({ product, qty, onAdd, onRemove, onClose }: {
  product: Product;
  qty: number;
  onAdd: (p: Product) => void;
  onRemove: (id: number) => void;
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 flex gap-3">
      <a
        href={`#/product/${product.slug}`}
        onClick={onClose}
        className="w-16 h-16 rounded-lg bg-slate-50 overflow-hidden shrink-0 hover:ring-2 hover:ring-brand-200 transition-all"
      >
        {product.image && !imgError ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-1" onError={() => setImgError(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
      </a>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-brand-600 font-medium">{product.brand}</p>
        <a
          href={`#/product/${product.slug}`}
          onClick={onClose}
          className="text-sm font-medium text-slate-900 truncate block hover:text-brand-700 transition-colors"
        >
          {product.name}
        </a>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => onRemove(product.id)} className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50">
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-sm font-semibold text-slate-900 w-8 text-center">{qty}</span>
          <button
            onClick={() => onAdd(product)}
            disabled={qty >= product.stock}
            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
              qty >= product.stock ? 'bg-slate-100 text-slate-400' : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <Plus className="w-3 h-3" />
          </button>
          <span className="text-xs text-slate-400 ml-auto">макс. {product.stock}</span>
        </div>
      </div>
    </div>
  );
}

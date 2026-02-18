import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Phone, Mail, Menu, X, Package } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  onScrollToCatalog: () => void;
}

export function Header({ cartCount, onCartOpen, onSearch, searchQuery, onScrollToCatalog }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60" role="banner">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-amber-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
        Перейти к содержимому
      </a>
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a href="tel:+78001234567" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">8 (800) 123-45-67</span>
            </a>
            <a href="mailto:b2b@dorren.ru" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">b2b@dorren.ru</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400">
            <Package className="w-3.5 h-3.5" />
            <span>B2B поставки для производств</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg md:text-xl tracking-tighter">Д</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">ДОРРЕН</span>
              <span className="text-[10px] md:text-xs text-slate-500 tracking-widest uppercase -mt-0.5">дверная фурнитура</span>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
              />
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={onScrollToCatalog}
              className="h-10 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
            >
              Каталог
            </button>
            <Link
              to="/payment"
              className="h-10 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all flex items-center"
            >
              Оплата
            </Link>
            <Link
              to="/delivery"
              className="h-10 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all flex items-center"
            >
              Доставка
            </Link>
            <Link
              to="/warranty"
              className="h-10 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all flex items-center"
            >
              Гарантия
            </Link>
            <Link
              to="/about"
              className="h-10 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all flex items-center"
            >
              О компании
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onScrollToCatalog}
              className="hidden md:inline-flex lg:hidden items-center gap-2 h-11 px-5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all active:scale-[0.98]"
            >
              Каталог
            </button>

            <button
              onClick={onCartOpen}
              className="relative h-11 w-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 flex items-center justify-center bg-amber-500 text-white text-[11px] font-bold rounded-full shadow-lg shadow-amber-500/30">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-11 w-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              />
            </div>
            <button
              onClick={() => { onScrollToCatalog(); setMobileMenuOpen(false); }}
              className="w-full h-10 bg-slate-900 text-white text-sm font-medium rounded-lg"
            >
              Каталог
            </button>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/payment"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                Оплата
              </Link>
              <Link
                to="/delivery"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                Доставка
              </Link>
              <Link
                to="/warranty"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                Гарантия
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                О компании
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import { useState, useRef, useMemo, useCallback } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { products } from './data/products';
import type { Product } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { ProductPage } from './pages/ProductPage';
import { PaymentPage } from './pages/PaymentPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { WarrantyPage } from './pages/WarrantyPage';
import { AboutPage } from './pages/AboutPage';
import { useSEO, generateBreadcrumbs, generateItemListSchema } from './hooks/useSEO';

function HomePage({
  cart,
  searchQuery,
  onAdd,
  onRemove,
  catalogRef,
}: {
  cart: Record<number, number>;
  searchQuery: string;
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
  catalogRef: React.RefObject<HTMLDivElement | null>;
}) {
  const normalize = (value: string) =>
    value.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalize(searchQuery);
    if (!normalizedQuery) return products;

    const queryTokens = normalizedQuery.split(' ').filter(Boolean);

    return products.filter((p) => {
      const haystack = normalize(`${p.name} ${p.brand} ${p.category} ${p.slug} ${p.description}`);
      return queryTokens.every((token) => haystack.includes(token));
    });
  }, [searchQuery]);

  const structuredData = useMemo(() => [
    generateBreadcrumbs([{ name: 'Главная', url: '/' }]),
    generateItemListSchema(
      products.slice(0, 20).map((p, i) => ({
        name: p.name,
        url: `/#/product/${p.slug}`,
        image: p.image,
        position: i + 1,
      }))
    ),
  ], []);

  useSEO({
    title: 'Доррен — специализированная дверная фурнитура оптом для фабрик | B2B поставщик',
    description: 'Доррен — B2B поставщик дверной фурнитуры для производственных предприятий. Доводчики, глазки, цилиндры, приводы от ASSA ABLOY, DORMA, NOTEDO, DORMAKABA. Оптовые поставки по всей России. Отгрузка от 1 рабочего дня.',
    keywords: 'дверная фурнитура оптом, фурнитура для дверей B2B, доводчики дверные, дверные глазки, цилиндровые механизмы, ASSA ABLOY, DORMA, NOTEDO, DORMAKABA, ARMADILLO, APECS, фурнитура для фабрик, комплектующие для дверей, Доррен, купить дверную фурнитуру оптом',
    canonical: 'https://dorren.ru/',
    structuredData,
  });

  return (
    <>
      <Hero onScrollToCatalog={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />

      {/* Trusted brands section */}
      <section className="bg-white border-b border-slate-200" aria-label="Бренды-партнёры">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="sr-only">Наши бренды-партнёры</h2>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap opacity-40">
            {['ASSA ABLOY', 'DORMA', 'NOTEDO', 'DORMAKABA', 'ARMADILLO', 'APECS', 'IMPULSE'].map(brand => (
              <span key={brand} className="text-sm md:text-base font-bold tracking-wider text-slate-900 whitespace-nowrap">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Catalog
        products={filteredProducts}
        cart={cart}
        onAdd={onAdd}
        onRemove={onRemove}
        catalogRef={catalogRef}
      />
    </>
  );
}

function AppContent() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const current = prev[product.id] || 0;
      if (current >= product.stock) return prev;
      return { ...prev, [product.id]: current + 1 };
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prev => {
      const current = prev[productId] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: current - 1 };
    });
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  );

  const scrollToCatalog = useCallback(() => {
    navigate('/');
    setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, [navigate]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);

    if (!query.trim()) return;

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return;
    }

    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onScrollToCatalog={scrollToCatalog}
      />

      <main className="flex-1" id="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                cart={cart}
                searchQuery={searchQuery}
                onAdd={addToCart}
                onRemove={removeFromCart}
                catalogRef={catalogRef}
              />
            }
          />
          <Route
            path="/product/:slug"
            element={
              <ProductPage
                cart={cart}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            }
          />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        products={products}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  );
}

export function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

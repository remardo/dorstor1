import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Factory, BadgeCheck } from 'lucide-react';

interface HeroProps {
  onScrollToCatalog: () => void;
}

export function Hero({ onScrollToCatalog }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium mb-6 border border-white/10">
            <Factory className="w-4 h-4" />
            B2B поставщик для дверных фабрик
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Специализированная
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              дверная фурнитура
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
            Комплектующие от ведущих брендов для производства входных и технических дверей. Оптовые поставки по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <button
              onClick={onScrollToCatalog}
              className="inline-flex items-center justify-center gap-2 h-13 px-8 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-amber-500/25"
            >
              Перейти в каталог
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+78001234567"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-medium rounded-xl transition-all border border-white/10"
            >
              Связаться с менеджером
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link to="/delivery" className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">Доставка по РФ</div>
                <div className="text-slate-500 text-sm">Отгрузка от 1 дня</div>
              </div>
            </Link>
            <Link to="/warranty" className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">Гарантия качества</div>
                <div className="text-slate-500 text-sm">Оригинальная продукция</div>
              </div>
            </Link>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <BadgeCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Ведущие бренды</div>
                <div className="text-slate-500 text-sm">ASSA ABLOY, DORMA, NOTEDO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

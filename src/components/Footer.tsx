import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-850 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-slate-700/50">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Нужна оптовая поставка?
              </h3>
              <p className="text-slate-400 max-w-lg">
                Свяжитесь с нашим отделом продаж для получения индивидуального коммерческого предложения с учётом объёма заказа.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+78001234567"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                Позвонить
              </a>
              <a
                href="mailto:b2b@dorren.ru"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl transition-all border border-white/10"
              >
                <Mail className="w-4 h-4" />
                Написать
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center border border-slate-600/50">
                <span className="text-white font-bold text-lg">Д</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">ДОРРЕН</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">дверная фурнитура</div>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Специализированный B2B поставщик дверной фурнитуры для производственных предприятий.
            </p>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Каталог</h4>
            <ul className="space-y-2.5">
              {['Доводчики', 'Дверные глазки', 'Цилиндровые механизмы', 'Приводы двери', 'Девиаторы', 'Дверная фурнитура'].map(item => (
                <li key={item}>
                  <Link to="/" className="text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Компания</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/payment" className="text-sm hover:text-white transition-colors">Оплата</Link>
              </li>
              <li>
                <Link to="/delivery" className="text-sm hover:text-white transition-colors">Доставка</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm hover:text-white transition-colors">Гарантия и возврат</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">О компании</Link>
              </li>
              <li>
                <span className="text-sm hover:text-white transition-colors cursor-pointer">Контакты</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <div>
                  <a href="tel:+78001234567" className="text-sm text-white hover:text-amber-400 transition-colors">8 (800) 123-45-67</a>
                  <div className="text-xs text-slate-500">Бесплатно по РФ</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <a href="mailto:b2b@dorren.ru" className="text-sm hover:text-white transition-colors">b2b@dorren.ru</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-sm">г. Москва, ул. Промышленная, д. 10</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-sm">Пн–Пт: 9:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© 2024 ДОРРЕН. Все права защищены.</p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Политика конфиденциальности</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

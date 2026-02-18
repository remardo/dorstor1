import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Building2, Factory, Handshake, ShieldCheck, PackageCheck,
  ArrowRight, Phone, Mail, Users, Truck, Clock3
} from 'lucide-react';
import { useSEO, generateBreadcrumbs } from '../hooks/useSEO';

export function AboutPage() {
  const structuredData = useMemo(() => [
    generateBreadcrumbs([
      { name: 'Главная', url: '/' },
      { name: 'О компании' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ДОРРЕН',
      url: 'https://dorren.ru/',
      email: 'b2b@dorren.ru',
      telephone: '+7-800-123-45-67',
      areaServed: 'RU',
      description: 'B2B поставщик дверной фурнитуры для производственных предприятий.',
    },
  ], []);

  useSEO({
    title: 'О компании Доррен — B2B поставщик дверной фурнитуры для фабрик и производств',
    description: 'Доррен — поставщик дверной фурнитуры для предприятий и дверных фабрик. Комплексные B2B поставки, стабильный склад, техническая экспертиза и логистика по всей России.',
    keywords: 'о компании доррен, b2b поставщик дверной фурнитуры, поставщик фурнитуры для фабрик, дверная фурнитура оптом, доррен москва',
    canonical: 'https://dorren.ru/#/about',
    structuredData,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white">
      <nav className="bg-slate-50 border-b border-slate-200" aria-label="Хлебные крошки">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-slate-900 transition-colors">
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" /></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-slate-900 font-medium">О компании</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium mb-6 border border-white/10">
              <Building2 className="w-4 h-4" />
              О компании
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              ДОРРЕН — поставщик дверной фурнитуры для бизнеса
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Помогаем производственным предприятиям и дверным фабрикам стабильно закупать фурнитуру:
              от массовых позиций до специализированных решений под проект.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 -mx-4">
            {[
              { value: '296+', label: 'Товарных позиций', icon: PackageCheck },
              { value: '85+', label: 'Регионов поставки', icon: Truck },
              { value: '1 день', label: 'Отгрузка со склада', icon: Clock3 },
              { value: 'B2B', label: 'Фокус на предприятия', icon: Factory },
            ].map((item, idx) => (
              <div key={idx} className="px-4 py-8 md:py-10 flex flex-col items-center text-center border-r border-slate-100 last:border-r-0">
                <item.icon className="w-6 h-6 text-amber-500 mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-xs md:text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 md:mb-24">
          {[
            {
              icon: Factory,
              title: 'Работаем с производствами',
              text: 'Понимаем ритм фабрик и комплектуем заказы так, чтобы ваша линия не останавливалась.',
            },
            {
              icon: ShieldCheck,
              title: 'Контроль качества поставок',
              text: 'Проверяем номенклатуру перед отгрузкой, фиксируем партии и сопровождаем документы.',
            },
            {
              icon: Handshake,
              title: 'Долгосрочное партнёрство',
              text: 'Выстраиваем условия под объём, регулярность закупок и ваш внутренний регламент.',
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Кому мы полезны</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Мы работаем с дверными производствами, монтажными компаниями, интеграторами систем доступа,
              строительными подрядчиками и торговыми организациями. Подбираем ассортимент под ваши задачи и график поставок.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Дверные фабрики и цеха',
              'Монтажные и сервисные компании',
              'Системные интеграторы СКУД',
              'Строительные и генподрядные организации',
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Обсудим задачи вашего проекта
            </h3>
            <p className="text-slate-400">
              Отправьте запрос, и мы подготовим подборку позиций с коммерческими условиями под ваш объём.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:+78001234567"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              8 (800) 123-45-67
            </a>
            <a
              href="mailto:b2b@dorren.ru"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl transition-all border border-white/10"
            >
              <Mail className="w-4 h-4" />
              b2b@dorren.ru
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/delivery"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <Truck className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Доставка</h4>
              <p className="text-sm text-slate-500">Сроки и способы отгрузки по России</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
          <Link
            to="/payment"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <Handshake className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Оплата</h4>
              <p className="text-sm text-slate-500">Форматы B2B расчётов и документы</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

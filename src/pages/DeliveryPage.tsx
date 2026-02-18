import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Truck, Clock3, MapPin, PackageCheck, ShieldCheck,
  ArrowRight, Phone, Mail, Route, Warehouse, CheckCircle
} from 'lucide-react';
import { useSEO, generateBreadcrumbs, generateFAQSchema } from '../hooks/useSEO';

const FAQ_ITEMS = [
  {
    question: 'Как быстро вы отгружаете заказ?',
    answer: 'Позиции из складской программы отгружаем от 1 рабочего дня после подтверждения оплаты и комплектации заказа.'
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
    answer: 'При приемке зафиксируйте повреждение в акте ТК и сразу свяжитесь с менеджером ДОРРЕН. Мы оперативно отработаем замену или компенсацию.'
  },
];

export function DeliveryPage() {
  const structuredData = useMemo(() => [
    generateBreadcrumbs([
      { name: 'Главная', url: '/' },
      { name: 'Доставка' },
    ]),
    generateFAQSchema(FAQ_ITEMS),
  ], []);

  useSEO({
    title: 'Доставка дверной фурнитуры по России — сроки, способы, логистика',
    description: 'Доставка дверной фурнитуры от ДОРРЕН по всей России: отгрузка со склада, самовывоз в Москве, отправка транспортными компаниями. Прозрачные сроки и сопровождение B2B поставок.',
    keywords: 'доставка дверной фурнитуры, доставка по россии, самовывоз москва, логистика b2b, отгрузка со склада, доррен доставка',
    canonical: 'https://dorren.ru/#/delivery',
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
              <span itemProp="name" className="text-slate-900 font-medium">Доставка</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium mb-6 border border-white/10">
              <Truck className="w-4 h-4" />
              Логистика
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Доставка по всей России
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Организуем стабильные B2B поставки: от складских отгрузок и самовывоза до межрегиональной доставки
              через транспортные компании.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 -mx-4">
            {[
              { value: 'от 1 дня', label: 'Отгрузка со склада', icon: Clock3 },
              { value: '85+', label: 'Регионов доставки', icon: MapPin },
              { value: '500+', label: 'Отгрузок в месяц', icon: PackageCheck },
              { value: '99.7%', label: 'Поставок без рекламаций', icon: ShieldCheck },
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
              icon: Warehouse,
              title: 'Самовывоз со склада',
              text: 'Скомплектуем заказ и подготовим к выдаче в согласованный слот. Быстро для срочных проектов.',
            },
            {
              icon: Truck,
              title: 'Доставка транспортными компаниями',
              text: 'Отправляем по РФ через проверенных перевозчиков, передаём трек и комплект документов.',
            },
            {
              icon: Route,
              title: 'Маршрут под ваш график',
              text: 'Подбираем схему отгрузки под этапы монтажа, чтобы товар приходил вовремя и без простоев.',
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Как проходит отгрузка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Подтверждение заказа и резерв товара',
              'Комплектация по номенклатуре',
              'Проверка и упаковка перед отправкой',
              'Передача перевозчику и уведомление клиента',
            ].map((step) => (
              <div key={step} className="bg-white rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="bg-slate-50 rounded-xl border border-slate-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="font-semibold text-slate-900 mb-2" itemProp="name">{item.question}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-sm text-slate-600 leading-relaxed" itemProp="text">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Нужна поставка в ваш регион?
            </h3>
            <p className="text-slate-400">
              Напишите нам, и мы предложим оптимальный вариант доставки с учётом сроков и бюджета.
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
            to="/payment"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <ShieldCheck className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Оплата</h4>
              <p className="text-sm text-slate-500">Условия расчётов и документы</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
          <Link
            to="/about"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <Warehouse className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">О компании</h4>
              <p className="text-sm text-slate-500">Подход, экспертиза и формат работы</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

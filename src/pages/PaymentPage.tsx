import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, FileText, Building2, CreditCard, Receipt,
  Clock, CheckCircle, Phone, Mail, ShieldCheck, HandshakeIcon,
  Banknote, FileCheck, ArrowRight
} from 'lucide-react';
import { useSEO, generateBreadcrumbs, generateFAQSchema } from '../hooks/useSEO';

const FAQ_ITEMS = [
  {
    question: 'Работаете ли вы с НДС?',
    answer: 'Да, мы работаем как с НДС 20%, так и по упрощённой системе налогообложения (без НДС). Выбор зависит от конкретного юридического лица нашей компании, уточняйте у менеджера.'
  },
  {
    question: 'Какой минимальный размер заказа?',
    answer: 'Минимальная сумма заказа для оптовых клиентов — от 10 000 рублей. Для постоянных партнёров минимальная сумма может быть снижена по индивидуальному соглашению.'
  },
  {
    question: 'Как быстро выставляется счёт?',
    answer: 'Счёт на оплату формируется и отправляется на вашу электронную почту в течение 1 часа после согласования заявки и подтверждения наличия товара на складе.'
  },
  {
    question: 'Можно ли получить отсрочку платежа?',
    answer: 'Да, для постоянных клиентов с подтверждённой историей закупок мы предоставляем отсрочку платежа до 30 дней. Условия оговариваются в индивидуальном договоре поставки.'
  },
  {
    question: 'Предоставляете ли вы ЭДО?',
    answer: 'Да, мы подключены к системам электронного документооборота. Работаем через Диадок и СБИС. Бумажные оригиналы также предоставляются по запросу.'
  },
];

export function PaymentPage() {
  const structuredData = useMemo(() => [
    generateBreadcrumbs([
      { name: 'Главная', url: '/' },
      { name: 'Оплата' },
    ]),
    generateFAQSchema(FAQ_ITEMS),
  ], []);

  useSEO({
    title: 'Условия оплаты — безналичный расчёт, отсрочка платежа для B2B',
    description: 'Условия оплаты дверной фурнитуры в Доррен. Безналичный расчёт с НДС и без НДС, отсрочка платежа до 30 дней, предоплата. Полный пакет документов для бухгалтерии. B2B расчёты для юридических лиц и ИП.',
    keywords: 'оплата дверной фурнитуры, безналичный расчёт, B2B оплата, отсрочка платежа, оплата с НДС, оплата без НДС, счёт на оплату, документооборот, Доррен оплата',
    canonical: 'https://dorren.ru/#/payment',
    structuredData,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 border-b border-slate-200" aria-label="Хлебные крошки">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-slate-900 transition-colors whitespace-nowrap">
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" /></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-slate-900 font-medium">Оплата</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium mb-6 border border-white/10">
              <CreditCard className="w-4 h-4" />
              B2B расчёты
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Условия оплаты
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Удобные условия расчёта для производственных предприятий и дверных фабрик. Работаем с юридическими лицами и ИП.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Payment methods */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Способы оплаты</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Выберите удобный для вашего предприятия способ расчёта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group bg-white rounded-2xl border-2 border-amber-200 p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Популярный
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Безналичный расчёт</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Оплата по счёту через расчётный счёт вашей организации. Стандартный способ для B2B расчётов.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Работаем с НДС 20%</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Работаем без НДС (УСН)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Счёт выставляется в течение 1 часа</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Полный комплект документов</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                <HandshakeIcon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Отсрочка платежа</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Для постоянных клиентов предоставляем отсрочку платежа по индивидуальным условиям.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Отсрочка до 30 календарных дней</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Для клиентов с историей закупок</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Индивидуальный кредитный лимит</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Оформление по договору</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                <Banknote className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Предоплата</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Частичная или полная предоплата для новых клиентов и крупных заказов нестандартной продукции.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Предоплата от 30% до 100%</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Для заказов под поставку</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Фиксация цены при предоплате</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">Приоритетная отгрузка</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Как оформить заказ</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Простой процесс от заявки до получения товара</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: FileText,
                title: 'Отправьте заявку',
                desc: 'Добавьте нужные товары в заявку на сайте или отправьте список на почту b2b@dorren.ru'
              },
              {
                step: '02',
                icon: Receipt,
                title: 'Получите КП',
                desc: 'Менеджер подготовит коммерческое предложение с индивидуальными ценами и сроками'
              },
              {
                step: '03',
                icon: CreditCard,
                title: 'Оплатите счёт',
                desc: 'Согласуйте условия, подпишите договор и оплатите выставленный счёт удобным способом'
              },
              {
                step: '04',
                icon: CheckCircle,
                title: 'Получите товар',
                desc: 'Забирайте со склада или получайте доставку транспортной компанией по всей России'
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] border-t-2 border-dashed border-slate-200 z-0" />
                )}
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-3xl font-black text-slate-100">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Документооборот</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Предоставляем полный пакет документов для вашей бухгалтерии</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FileCheck, title: 'Счёт на оплату', desc: 'Выставляется в течение 1 часа после подтверждения заявки' },
              { icon: FileText, title: 'Счёт-фактура', desc: 'Формируется автоматически при отгрузке товара со склада' },
              { icon: Receipt, title: 'Товарная накладная', desc: 'ТОРГ-12 предоставляется вместе с товаром при отгрузке' },
              { icon: ShieldCheck, title: 'Акт сверки', desc: 'Формируется по запросу за любой период сотрудничества' },
            ].map((doc, i) => (
              <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 p-5 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                  <doc.icon className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1.5">{doc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-start gap-3" itemProp="name">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">?</span>
                  {item.question}
                </h4>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-sm text-slate-600 leading-relaxed pl-9" itemProp="text">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Остались вопросы по оплате?
            </h3>
            <p className="text-slate-400">
              Свяжитесь с нашим отделом продаж — подберём оптимальные условия для вашего предприятия.
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

        {/* Related pages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/delivery"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <Clock className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Доставка</h4>
              <p className="text-sm text-slate-500">Способы доставки и сроки отгрузки</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
          <Link
            to="/warranty"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <ShieldCheck className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Гарантия</h4>
              <p className="text-sm text-slate-500">Гарантийные условия и возврат</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

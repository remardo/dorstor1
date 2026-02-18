import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Truck, MapPin, Clock, Package, CheckCircle,
  Phone, Mail, ArrowRight, Building2, Warehouse, Timer,
  ShieldCheck, CreditCard, Globe, Route
} from 'lucide-react';
import { useSEO, generateBreadcrumbs, generateFAQSchema } from '../hooks/useSEO';

const FAQ_ITEMS = [
  {
    question: 'Как рассчитать стоимость доставки?',
    answer: 'Стоимость доставки зависит от объёма заказа, веса и удалённости вашего региона. Точный расчёт предоставит менеджер вместе с коммерческим предложением. Также вы можете рассчитать стоимость самостоятельно на сайте транспортной компании.'
  },
  {
    question: 'Можно ли объединить несколько заказов в одну отгрузку?',
    answer: 'Да, мы практикуем консолидацию заказов. Если вы планируете несколько закупок в течение недели, сообщите об этом менеджеру — мы соберём всё в одну отправку для экономии на логистике.'
  },
  {
    question: 'Что делать при повреждении товара при доставке?',
    answer: 'При получении обязательно осмотрите груз в присутствии представителя ТК. При обнаружении повреждений составьте акт и свяжитесь с нами. Мы оперативно организуем замену повреждённого товара.'
  },
  {
    question: 'Доставляете ли вы в страны СНГ?',
    answer: 'Да, мы можем организовать доставку в Казахстан, Беларусь, Узбекистан и другие страны СНГ. Стоимость и сроки рассчитываются индивидуально. Помогаем с оформлением документов для таможни.'
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
    title: 'Доставка дверной фурнитуры по России — сроки, способы, стоимость',
    description: 'Доставка дверной фурнитуры по всей России от 1 дня. Самовывоз со склада в Москве, транспортные компании (Деловые Линии, ПЭК, СДЭК), собственная доставка по Москве и МО. 85+ регионов, 500+ отгрузок в месяц.',
    keywords: 'доставка дверной фурнитуры, доставка по России, самовывоз Москва, транспортная компания, доставка фурнитуры оптом, Деловые Линии, ПЭК, СДЭК, отгрузка со склада, Доррен доставка',
    canonical: 'https://dorren.ru/#/delivery',
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
              <span itemProp="name" className="text-slate-900 font-medium">Доставка</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium mb-6 border border-white/10">
              <Truck className="w-4 h-4" />
              Логистика
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Доставка по всей России
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Оперативная отгрузка со склада в Москве. Доставляем транспортными компаниями в любой регион РФ или организуем самовывоз.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 -mx-4">
            {[
              { value: 'от 1 дня', label: 'Отгрузка со склада', icon: Timer },
              { value: '85+', label: 'Регионов доставки', icon: Globe },
              { value: '500+', label: 'Отгрузок в месяц', icon: Package },
              { value: '99.7%', label: 'Заказов без повреждений', icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="px-4 py-8 md:py-10 flex flex-col items-center text-center border-r border-slate-100 last:border-r-0">
                <stat.icon className="w-6 h-6 text-amber-500 mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Delivery methods */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Способы доставки</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Выберите удобный способ получения заказа</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-8 shadow-sm hover:shadow-lg transition-all relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Бесплатно
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
                <Warehouse className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Самовывоз</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Забирайте заказ со склада в Москве в удобное для вас время. Самый быстрый способ получения.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900">Адрес склада</div>
                    <div className="text-sm text-slate-500">г. Москва, ул. Промышленная, д. 10</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900">Время работы склада</div>
                    <div className="text-sm text-slate-500">Пн–Пт: 9:00–18:00</div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Бесплатно</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Готовность от 1 часа</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Проверка при получении</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Транспортная компания</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Доставка до терминала ТК или до двери вашего предприятия в любом городе России.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-2">
                <div className="text-sm font-medium text-slate-900">Работаем с ТК:</div>
                <div className="flex flex-wrap gap-2">
                  {['Деловые Линии', 'ПЭК', 'СДЭК', 'Байкал Сервис', 'КИТ'].map(tk => (
                    <span key={tk} className="px-2.5 py-1 bg-white rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                      {tk}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Отгрузка от 1 рабочего дня</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Доставка по всей России</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Страхование груза</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                <Route className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Собственная доставка</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Для крупных заказов организуем доставку собственным транспортом по Москве и Московской области.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <div className="text-sm font-medium text-slate-900 mb-1">Зона доставки</div>
                <div className="text-sm text-slate-500">Москва и МО (до 50 км от МКАД)</div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Доставка в день заказа</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Разгрузка силами водителя</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">Для заказов от 30 000 ₽</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delivery timeline */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Сроки доставки по регионам</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Ориентировочные сроки от момента отгрузки со склада</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-900">Регион</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-900">Срок доставки</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-900">Способ</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-slate-900">Примечание</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { region: 'Москва и МО', time: '1 день', method: 'Самовывоз / своя доставка', note: 'В день заказа' },
                  { region: 'Санкт-Петербург', time: '2–3 дня', method: 'ТК', note: 'Деловые Линии / ПЭК' },
                  { region: 'ЦФО (Тула, Рязань, Калуга…)', time: '2–4 дня', method: 'ТК', note: 'До терминала / до двери' },
                  { region: 'ПФО (Казань, Нижний Новгород…)', time: '3–5 дней', method: 'ТК', note: 'До терминала / до двери' },
                  { region: 'ЮФО (Ростов, Краснодар…)', time: '4–6 дней', method: 'ТК', note: 'До терминала' },
                  { region: 'УрФО (Екатеринбург, Челябинск…)', time: '4–7 дней', method: 'ТК', note: 'До терминала' },
                  { region: 'СФО (Новосибирск, Красноярск…)', time: '5–8 дней', method: 'ТК', note: 'До терминала' },
                  { region: 'ДФО (Владивосток, Хабаровск…)', time: '7–14 дней', method: 'ТК', note: 'До терминала' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-sm text-slate-900 font-medium">{row.region}</td>
                    <td className="py-3.5 px-4 text-sm text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 text-amber-700 font-semibold text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {row.time}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-center text-slate-600">{row.method}</td>
                    <td className="py-3.5 px-4 text-sm text-right text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            * Сроки указаны ориентировочно и зависят от транспортной компании. Точный срок уточняйте у менеджера.
          </p>
        </div>

        {/* Packaging */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Упаковка и хранение</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Обеспечиваем сохранность товара на каждом этапе</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Package, title: 'Заводская упаковка', desc: 'Вся продукция поставляется в оригинальной упаковке производителя' },
              { icon: ShieldCheck, title: 'Дополнительная защита', desc: 'Для хрупких товаров используем пупырчатую плёнку и пенопласт' },
              { icon: Building2, title: 'Палетирование', desc: 'Крупные заказы формируем на палетах для удобства разгрузки' },
              { icon: Truck, title: 'Страхование', desc: 'По желанию оформляем страховку груза на полную стоимость' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 p-5 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1.5">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Частые вопросы о доставке</h2>
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
              Нужна доставка крупной партии?
            </h3>
            <p className="text-slate-400">
              Рассчитаем оптимальную логистику и предложим лучшие условия для вашего объёма.
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
            to="/payment"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <CreditCard className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Оплата</h4>
              <p className="text-sm text-slate-500">Способы оплаты и условия расчёта</p>
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

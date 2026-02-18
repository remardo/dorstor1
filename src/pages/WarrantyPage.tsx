import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ShieldCheck, CheckCircle, Phone, Mail, ArrowRight,
  CreditCard, Truck, AlertTriangle, RotateCcw, FileText,
  Clock, BadgeCheck, Award, Wrench, XCircle, Scale, Sparkles
} from 'lucide-react';
import { useSEO, generateBreadcrumbs, generateFAQSchema } from '../hooks/useSEO';

const FAQ_ITEMS = [
  {
    question: 'Как подтвердить покупку для гарантийного обращения?',
    answer: 'Для подтверждения покупки необходимо предоставить товарную накладную (ТОРГ-12), счёт-фактуру или иной документ, подтверждающий приобретение товара у нашей компании. Все документы хранятся в нашей системе, поэтому достаточно сообщить номер заказа.'
  },
  {
    question: 'Можно ли вернуть товар, если он не подошёл по размеру?',
    answer: 'Да, в течение 14 дней вы можете вернуть товар надлежащего качества, если он не подошёл по размеру, цвету или комплектации. Главное условие — товар не должен быть в эксплуатации и должен сохранить оригинальную упаковку.'
  },
  {
    question: 'Распространяется ли гарантия на товары со скидкой?',
    answer: 'Да, гарантийные условия распространяются на все товары вне зависимости от цены покупки и наличия скидки. Исключение составляют товары, проданные как уценённые по причине выявленных дефектов — о таких случаях клиент уведомляется заранее.'
  },
  {
    question: 'Куда обращаться по гарантии — к вам или производителю?',
    answer: 'Обращайтесь к нам — мы являемся авторизованным дистрибьютором и берём на себя все вопросы гарантийного обслуживания. Мы самостоятельно взаимодействуем с производителем для решения вашего вопроса.'
  },
];

export function WarrantyPage() {
  const structuredData = useMemo(() => [
    generateBreadcrumbs([
      { name: 'Главная', url: '/' },
      { name: 'Гарантия и возврат' },
    ]),
    generateFAQSchema(FAQ_ITEMS),
  ], []);

  useSEO({
    title: 'Гарантия и возврат дверной фурнитуры — условия, сроки, порядок',
    description: 'Гарантийные условия на дверную фурнитуру Доррен. 100% оригинальная продукция. Гарантия производителя до 5 лет (ASSA ABLOY, DORMA). Возврат в течение 14 дней. Обмен, ремонт, рекламации. Прозрачные условия для B2B клиентов.',
    keywords: 'гарантия дверная фурнитура, возврат фурнитуры, гарантия ASSA ABLOY, гарантия DORMA, гарантия NOTEDO, возврат товара, обмен фурнитуры, рекламация, Доррен гарантия, оригинальная продукция',
    canonical: 'https://dorren.ru/#/warranty',
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
              <span itemProp="name" className="text-slate-900 font-medium">Гарантия и возврат</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium mb-6 border border-white/10">
              <ShieldCheck className="w-4 h-4" />
              Качество и надёжность
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Гарантия и возврат
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Мы поставляем только оригинальную продукцию ведущих производителей и гарантируем качество каждого изделия. Прозрачные условия возврата и обмена.
            </p>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 -mx-4">
            {[
              { icon: BadgeCheck, title: '100% оригинал', desc: 'Только сертифицированная продукция' },
              { icon: Award, title: 'Гарантия бренда', desc: 'Полная гарантия производителя' },
              { icon: RotateCcw, title: 'Обмен и возврат', desc: '14 дней на возврат' },
              { icon: Scale, title: 'Защита прав', desc: 'По закону о защите прав потребителей' },
            ].map((item, i) => (
              <div key={i} className="px-4 py-8 md:py-10 flex flex-col items-center text-center border-r border-slate-100 last:border-r-0">
                <item.icon className="w-6 h-6 text-amber-500 mb-3" />
                <div className="text-sm font-semibold text-slate-900 mb-1">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Warranty conditions */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Гарантийные условия</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Мы несём полную ответственность за качество поставляемой продукции</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Гарантия производителя</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Вся продукция поставляется с полной гарантией производителя. Сроки гарантии зависят от бренда и категории товара.
              </p>
              <div className="space-y-3">
                {[
                  { brand: 'ASSA ABLOY', period: 'до 5 лет' },
                  { brand: 'DORMA / DORMAKABA', period: 'до 5 лет' },
                  { brand: 'NOTEDO', period: '2 года' },
                  { brand: 'ARMADILLO', period: '2 года' },
                  { brand: 'APECS', period: '1 год' },
                  { brand: 'IMPULSE', period: '2 года' },
                  { brand: 'VANGER', period: '1 год' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="text-sm font-medium text-slate-900">{item.brand}</span>
                    <span className="text-sm text-amber-600 font-semibold bg-amber-50 px-3 py-1 rounded-lg">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Что покрывает гарантия</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Гарантийные обязательства распространяются на заводские дефекты и преждевременный выход из строя при штатной эксплуатации.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Покрывается гарантией:
                  </h4>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Заводской брак и дефекты',
                      'Несоответствие заявленным характеристикам',
                      'Выход из строя при штатной эксплуатации',
                      'Дефекты покрытия (коррозия, отслоение)',
                      'Поломка механизмов в гарантийный период',
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3">
                  <h4 className="text-sm font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Не покрывается гарантией:
                  </h4>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Механические повреждения',
                      'Нарушение правил монтажа',
                      'Естественный износ деталей',
                      'Воздействие агрессивных сред',
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Return policy */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Возврат и обмен</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Прозрачные условия возврата товара надлежащего и ненадлежащего качества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 rounded-2xl border border-amber-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200 flex items-center justify-center">
                  <RotateCcw className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Возврат товара надлежащего качества</h3>
                  <p className="text-sm text-amber-700 font-medium">14 дней с момента получения</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-amber-100">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Условия возврата:</h4>
                  <ul className="space-y-2">
                    {[
                      'Товар не был в эксплуатации',
                      'Сохранена оригинальная упаковка',
                      'Сохранён товарный вид и комплектация',
                      'Наличие документов, подтверждающих покупку',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-amber-100">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Порядок действий:</h4>
                  <ol className="space-y-2">
                    {[
                      'Свяжитесь с менеджером по телефону или email',
                      'Заполните заявление на возврат',
                      'Отправьте товар на наш склад',
                      'Возврат средств в течение 10 рабочих дней',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50/30 rounded-2xl border border-red-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Возврат товара ненадлежащего качества</h3>
                  <p className="text-sm text-red-600 font-medium">В течение гарантийного срока</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-red-100">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Вы имеете право на:</h4>
                  <ul className="space-y-2">
                    {[
                      'Бесплатную замену на аналогичный товар',
                      'Замену на товар другого бренда с перерасчётом',
                      'Безвозмездное устранение дефекта',
                      'Возврат полной стоимости товара',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-red-100">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Для обращения потребуется:</h4>
                  <ul className="space-y-2">
                    {[
                      'Фото/видео выявленного дефекта',
                      'Копия товарной накладной (ТОРГ-12)',
                      'Описание условий эксплуатации',
                      'Заявление на гарантийный возврат/обмен',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <FileText className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claims process */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Рекламационный процесс</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Как оформить гарантийное обращение</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: Phone,
                title: 'Обращение',
                desc: 'Свяжитесь с нами по телефону или email, опишите проблему и приложите фотографии дефекта',
                color: 'bg-blue-50 border-blue-200 text-blue-600',
              },
              {
                step: '02',
                icon: FileText,
                title: 'Экспертиза',
                desc: 'Мы проводим экспертизу товара и определяем причину дефекта в течение 5 рабочих дней',
                color: 'bg-amber-50 border-amber-200 text-amber-600',
              },
              {
                step: '03',
                icon: Wrench,
                title: 'Решение',
                desc: 'По результатам экспертизы принимается решение о замене, ремонте или возврате средств',
                color: 'bg-purple-50 border-purple-200 text-purple-600',
              },
              {
                step: '04',
                icon: CheckCircle,
                title: 'Исполнение',
                desc: 'Замена или возврат осуществляются в течение 10 рабочих дней с момента принятия решения',
                color: 'bg-emerald-50 border-emerald-200 text-emerald-600',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] border-t-2 border-dashed border-slate-200 z-0" />
                )}
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${item.color}`}>
                      <item.icon className="w-6 h-6" />
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

        {/* Important notes */}
        <div className="mb-16 md:mb-24">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Важная информация</h3>
                <ul className="space-y-3">
                  {[
                    'Гарантия действительна только при соблюдении условий эксплуатации и монтажа, указанных в документации производителя.',
                    'При возврате товара надлежащего качества стоимость обратной доставки оплачивается покупателем.',
                    'При возврате товара ненадлежащего качества все расходы на доставку несёт поставщик.',
                    'Срок рассмотрения рекламации — до 10 рабочих дней с момента получения товара на нашем складе.',
                    'Мы оставляем за собой право проведения дополнительной экспертизы при спорных случаях. Срок — до 20 рабочих дней.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Частые вопросы о гарантии</h2>
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
              Нужна консультация по гарантии?
            </h3>
            <p className="text-slate-400">
              Свяжитесь с нашей сервисной службой — поможем разобраться с любым вопросом.
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
            to="/delivery"
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
              <Truck className="w-6 h-6 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Доставка</h4>
              <p className="text-sm text-slate-500">Способы доставки и сроки отгрузки</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

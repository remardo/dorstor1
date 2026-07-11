import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { STATIC_SEO } from '../data/seo';
import { site } from '../data/site';

function Page({ title, lead, children }: { title: string; lead: string; children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <header className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <Link to="/" className="text-sm text-slate-400 hover:text-white">Главная</Link>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">{lead}</p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">{children}</main>
    </div>
  );
}

export function ContactsPage() {
  useSEO(STATIC_SEO['/contacts']);
  return (
    <Page title="Контакты и реквизиты" lead="Отдел B2B-поставок DoorStore: запрос коммерческого предложения, подбор комплектующих и документы.">
      {site.detailsAreDummy && (
        <p className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Временные данные: телефон, адрес и юридические реквизиты нужно заменить перед публикацией.
        </p>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Связаться</h2>
          <dl className="space-y-4 text-sm">
            <div><dt className="text-slate-500">Телефон</dt><dd><a className="font-medium text-brand-700" href={site.phone.href}>{site.phone.display}</a></dd></div>
            <div><dt className="text-slate-500">Email</dt><dd><a className="font-medium text-brand-700" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt className="text-slate-500">Адрес</dt><dd className="font-medium text-slate-900">{site.address}</dd></div>
            <div><dt className="text-slate-500">Режим работы</dt><dd className="font-medium text-slate-900">{site.hours}</dd></div>
          </dl>
        </section>
        <section className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Реквизиты</h2>
          <dl className="space-y-4 text-sm">
            <div><dt className="text-slate-500">Организация</dt><dd className="font-medium text-slate-900">{site.legalName}</dd></div>
            <div><dt className="text-slate-500">ИНН / КПП</dt><dd className="font-medium text-slate-900">{site.legal.inn} / {site.legal.kpp}</dd></div>
            <div><dt className="text-slate-500">ОГРН</dt><dd className="font-medium text-slate-900">{site.legal.ogrn}</dd></div>
          </dl>
        </section>
      </div>
    </Page>
  );
}

export function PrivacyPage() {
  useSEO(STATIC_SEO['/privacy']);
  return (
    <Page title="Политика конфиденциальности" lead="Правила обработки контактных и технических данных посетителей сайта DoorStore.">
      <article className="prose max-w-none text-slate-700 space-y-6">
        <section><h2 className="text-xl font-bold text-slate-900">Какие данные обрабатываются</h2><p>Контактные данные, состав заявки, сведения об организации и техническая информация браузера, которую передаёт пользователь при работе с сайтом.</p></section>
        <section><h2 className="text-xl font-bold text-slate-900">Для чего используются данные</h2><p>Для ответа на запрос, подготовки предложения, исполнения договора, улучшения сайта и выполнения требований законодательства.</p></section>
        <section><h2 className="text-xl font-bold text-slate-900">Аналитика и cookies</h2><p>После подключения счётчика сайт может использовать обезличенную веб-аналитику. Идентификатор аналитики задаётся владельцем сайта через переменную окружения.</p></section>
        <section><h2 className="text-xl font-bold text-slate-900">Обращения</h2><p>Запрос об обработке данных можно направить на <a className="text-brand-700" href={`mailto:${site.email}`}>{site.email}</a>.</p></section>
      </article>
    </Page>
  );
}

export function TermsPage() {
  useSEO(STATIC_SEO['/terms']);
  return (
    <Page title="Условия использования сайта" lead="Информация в каталоге предназначена для предварительного подбора и не является публичной офертой.">
      <article className="space-y-6 text-slate-700">
        <section><h2 className="text-xl font-bold text-slate-900">Каталог</h2><p>Наличие, комплектность, технические параметры, цена и срок поставки подтверждаются менеджером в коммерческом предложении.</p></section>
        <section><h2 className="text-xl font-bold text-slate-900">Технический подбор</h2><p>Материалы сайта не заменяют паспорт производителя, проектную документацию и обязательное согласование специальных дверных блоков.</p></section>
        <section><h2 className="text-xl font-bold text-slate-900">Изображения и обозначения</h2><p>Внешний вид товара может отличаться от изображения. Товарные знаки принадлежат их правообладателям.</p></section>
      </article>
    </Page>
  );
}

export function GuidesPage() {
  useSEO(STATIC_SEO['/guides']);
  const guides = [
    { href: '/guides/kak-vybrat-dovodchik', title: 'Как выбрать дверной доводчик', text: 'Параметры полотна, тип тяги, монтаж и данные для оптового подбора.' },
    { href: '/category/tsilindrovye-mehanizmy', title: 'Как измерить цилиндровый механизм', text: 'Размеры A/B, тип привода и совместимость с защитной фурнитурой.' },
    { href: '/category/antipanika', title: 'Как комплектовать систему антипаника', text: 'Створки, замки, тяги, внешняя ручка и проверка совместимости.' },
  ];
  return (
    <Page title="База знаний по дверной фурнитуре" lead="Короткие инструкции для снабжения, конструкторов и производственных специалистов.">
      <div className="grid md:grid-cols-3 gap-5">
        {guides.map((guide) => <Link key={guide.href} to={guide.href} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg"><h2 className="font-bold text-slate-900 mb-2">{guide.title}</h2><p className="text-sm leading-relaxed text-slate-600">{guide.text}</p></Link>)}
      </div>
    </Page>
  );
}

export function DoorCloserGuidePage() {
  useSEO(STATIC_SEO['/guides/kak-vybrat-dovodchik']);
  const steps = [
    ['Зафиксируйте параметры двери', 'Укажите массу, ширину, высоту, материал полотна и направление открывания.'],
    ['Определите место эксплуатации', 'Отметьте внутреннюю или уличную установку, температурный диапазон и ветровую нагрузку.'],
    ['Выберите монтажную схему', 'Согласуйте сторону монтажа, рычажную или скользящую тягу и доступное место крепления.'],
    ['Перечислите функции', 'Укажите необходимость дохлопа, ветрового тормоза, фиксации и задержки закрывания.'],
    ['Сверьте паспорт модели', 'Проверьте допустимые параметры двери, шаблон крепления и ограничения производителя.'],
  ];
  return (
    <Page title="Как выбрать дверной доводчик" lead="Доводчик выбирают не только по массе: важны ширина полотна, условия эксплуатации, монтажная схема и функции регулировки.">
      <article>
        <p className="rounded-2xl bg-slate-50 p-6 text-lg leading-relaxed text-slate-700">Для точного подбора отправьте параметры дверного блока и количество. Совпадение одного параметра не подтверждает совместимость модели с дверью.</p>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">Пять шагов подбора</h2>
        <ol className="mt-5 space-y-4">{steps.map(([title, text], i) => <li key={title} className="flex gap-4 rounded-xl border border-slate-200 p-5"><span className="font-bold text-brand-700">{i + 1}</span><div><h3 className="font-semibold text-slate-900">{title}</h3><p className="mt-1 text-sm text-slate-600">{text}</p></div></li>)}</ol>
        <h2 className="mt-12 text-2xl font-bold text-slate-900">Данные для заявки</h2>
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200"><table className="w-full text-sm"><tbody className="divide-y divide-slate-200">{[['Количество','Число дверей и запас на объект'],['Полотно','Масса, ширина и материал'],['Эксплуатация','Помещение или улица, температура и поток'],['Монтаж','Сторона установки и тип тяги'],['Функции','Дохлоп, фиксация, торможение и задержка']].map(([a,b]) => <tr key={a}><th className="bg-slate-50 px-4 py-3 text-left">{a}</th><td className="px-4 py-3 text-slate-600">{b}</td></tr>)}</tbody></table></div>
        <p className="mt-8 text-sm text-slate-500">Автор: техническая редакция DoorStore. Обновлено 11.07.2026. Перед заказом сверяйте параметры с актуальным паспортом производителя.</p>
      </article>
    </Page>
  );
}

export function CasesPage() {
  useSEO(STATIC_SEO['/cases']);
  const cases = [
    ['Комплектация дверной фабрики', 'ЦФО', 'Доводчики, замки и цилиндры', 'Данные результата ожидают подтверждения'],
    ['Поставка для монтажной компании', 'Москва', 'Антипаника и ответные части', 'Данные результата ожидают подтверждения'],
    ['Комплектация технических дверей', 'Россия', 'Петли, уплотнения и фурнитура', 'Данные результата ожидают подтверждения'],
  ];
  return (
    <Page title="Кейсы комплектации" lead="Структура раздела готова; карточки закрыты от индексации до загрузки подтверждённых данных клиентов.">
      <div className="space-y-5">{cases.map(([title, region, scope, result]) => <article key={title} className="rounded-2xl border border-slate-200 p-6"><p className="text-xs font-semibold uppercase text-amber-700">Черновик · {region}</p><h2 className="mt-2 text-xl font-bold text-slate-900">{title}</h2><p className="mt-3 text-slate-600">Состав: {scope}.</p><p className="mt-2 text-sm text-slate-500">Результат: {result}.</p></article>)}</div>
    </Page>
  );
}

export function DocumentsPage() {
  useSEO(STATIC_SEO['/documents']);
  return (
    <Page title="Документы и инструкции" lead="Раздел подготовлен для сертификатов, деклараций и инструкций производителей.">
      <p className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">Раздел закрыт от индексации до загрузки подтверждённых документов.</p>
      <a href="/documents/document-placeholder.pdf" className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Открыть шаблон PDF</a>
    </Page>
  );
}

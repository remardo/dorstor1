import { categoryContent } from '../data/categoryContent';

export function CategorySeoContent({ category }: { category?: string }) {
  if (!category) return null;
  const content = categoryContent[category];
  if (!content) return null;

  return (
    <section className="border-t border-slate-200 bg-white" aria-labelledby="category-guide-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-2">Технический подбор</p>
        <h2 id="category-guide-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Как выбрать {category.toLowerCase()} для производства
        </h2>
        <p className="max-w-4xl text-slate-600 leading-relaxed mb-10">{content.answer}</p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Что проверить перед заказом</h3>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-200">
                  {content.checks.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="w-1/3 bg-slate-50 px-4 py-3 text-left font-medium text-slate-900">{row.label}</th>
                      <td className="px-4 py-3 text-slate-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Порядок подбора</h3>
            <ol className="space-y-3">
              {content.steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-4">Частые вопросы</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {content.faq.map((item) => (
            <article key={item.question} className="rounded-xl border border-slate-200 p-5">
              <h4 className="font-semibold text-slate-900 mb-2">{item.question}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-slate-500">Материал проверен редакцией DoorStore 11.07.2026. Точные параметры сверяйте с паспортом производителя и документацией проекта.</p>
      </div>
    </section>
  );
}

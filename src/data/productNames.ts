// Product names arrive from 1C as compressed warehouse strings
// ("Антипан. PHA 2501 арт.446230101 (серый) рычаг д/сплош"). Nobody searches for those,
// and they break H1s, titles and alt text. This module expands the abbreviations and
// splits off the article number so the catalog data itself stays untouched.
//
// Note: JS \b is ASCII-only, so it never fires next to Cyrillic. All boundaries here are
// explicit lookarounds instead — see `word()`.
import { products, type Product } from './products.ts';

const LETTER = 'A-Za-zА-Яа-яЁё0-9';
/** Boundary-safe matcher that also works around Cyrillic. */
const word = (body: string, flags = 'gi') =>
  new RegExp(`(?<![${LETTER}])(?:${body})(?![${LETTER}])`, flags);

// Leading token expansions — first match wins.
const PREFIXES: [RegExp, string][] = [
  [/^Антипан\./i, 'Антипаника'],
  [/^Глазок дв\./i, 'Дверной глазок'],
  [/^Удлинитель полный дв\.\s*глазка/i, 'Удлинитель дверного глазка'],
  [/^(?:Ц\/м|Ц\/М|ЦМ|Цм|Цил\.)(?=\s)/, 'Цилиндровый механизм'],
  [/^Наклад\./i, 'Накладка'],
  [/^Отв\.\s*пл\.\s*прям\./i, 'Ответная планка прямая'],
  [/^Ответ\.\s*планка/i, 'Ответная планка'],
  [/^Наж\.\s*планка/i, 'Нажимная планка'],
  [/^Комплект наж\.\s*ручек/i, 'Комплект нажимных ручек'],
  [/^Упор дверной напольн\./i, 'Упор дверной напольный'],
  [/^Задв\./i, 'Задвижка'],
];

// Applied anywhere in the string.
const INLINE: [RegExp, string][] = [
  [word('нержав\\.?'), 'нерж. сталь'],
  [word('мат\\.\\s*хром'), 'матовый хром'],
  [word('мат\\.\\s*никель'), 'матовый никель'],
  [word('кл/кл'), 'ключ/ключ'],
  [word('кл/верт(?:ушка)?'), 'ключ/вертушка'],
  [word('верт/кл'), 'вертушка/ключ'],
  [word('д/сплош'), 'для сплошных дверей'],
  [word('внутрен\\.'), 'внутренняя'],
  [word('квад\\.|квадрат\\.'), 'квадратная'],
  [word('прям\\.'), 'прямая'],
  [word('поворот\\.'), 'поворотная'],
  [word('автом\\.'), 'автоматический'],
  [word('п/пожарный'), 'противопожарный'],
  [word('э/механ\\.|эл\\.мех\\.'), 'электромеханических'],
  [word('м/контактный'), 'магнитоконтактный'],
  [word('послед\\.\\s*закрыв\\.'), 'последовательного закрывания'],
  [word('шлиф\\.\\s*нерж\\.\\s*стали'), 'шлифованной нерж. стали'],
  [word('нерж\\.\\s*ст\\.'), 'нерж. стали'],
  [word('цил\\.\\s*накл\\.'), 'цилиндровой накладки'],
  [word('круг\\.\\s*основ\\.'), 'круглом основании'],
  [word('пластмас\\.'), 'пластмасса'],
  [word('самоклеющийся'), 'самоклеящийся'],
  [word('анг\\.\\s*замка'), 'английского замка'],
  [word('эл\\.\\s*мех\\.|эл\\.'), 'электро'],
  [word('мат\\.'), 'матовый'],
  [word('мех\\.'), 'механизм'],
  [word('цил\\.'), 'цилиндровый'],
  [word('п/мех'), 'полумеханический'],
  [word('в/цилиндр'), 'врезной цилиндр'],
  [word('врез\\.'), 'врезной'],
  [word('черн\\.'), 'чёрный'],
  [word('дверн\\.'), 'дверной'],
  [word('б/накл'), 'без накладки'],
  [word('двухсистем\\.'), 'двухсистемный'],
  [word('скрыт\\.'), 'скрытый'],
  [word('матиров\\.'), 'матированный'],
  [word('скольз\\.'), 'скользящего'],
  [word('п/пожарная|п/пож'), 'противопожарная'],
  [word('межкомн\\.'), 'межкомнатная'],
  [word('прямоуг\\.'), 'прямоугольная'],
  [word('сатинир\\.'), 'сатинированный'],
  [word('декор\\.'), 'декоративная'],
  [word('электрон\\.'), 'электронный'],
  [word('дв\\.'), 'дверной'],
];

const ARTICLE_RE = /(?:^|[\s(,])арт(?:икул)?\.?\s*№?\s*([A-Za-zА-Яа-я0-9][\w./-]*)/i;

/** Article/SKU printed inside the raw 1C name, if any. */
export function productArticle(product: Product): string | undefined {
  return product.name.match(ARTICLE_RE)?.[1];
}

// 1C strings routinely lose the space between glued tokens ("замкаColombo", "PT13мат.").
const unglue = (value: string) =>
  value
    .replace(/([а-яё])([A-Z])/g, '$1 $2')
    .replace(/(\d)([а-яё]{3,})/g, '$1 $2')
    .replace(/([а-яa-z]\.)([A-ZА-Я])/g, '$1 $2');

function tidy(value: string): string {
  return value
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\(\s*\)/g, '')
    .replace(/\s+,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\s,]+$/, '')
    .trim();
}

/** Human-readable product name for H1, cards, alt text and meta. */
export function displayName(product: Product): string {
  let name = unglue(product.name.trim());

  for (const [re, full] of PREFIXES) {
    if (re.test(name)) {
      name = name.replace(re, full);
      break;
    }
  }
  for (const [re, full] of INLINE) name = name.replace(re, full);

  name = tidy(name.replace(ARTICLE_RE, ' '));
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/** Trim to `max` on a word boundary — never mid-word, never with an ellipsis. */
export function trimWords(value: string, max: number): string {
  if (value.length <= max) return value;
  const cut = value.slice(0, max);
  const space = cut.lastIndexOf(' ');
  return (space > max * 0.4 ? cut.slice(0, space) : cut)
    .replace(/[\s,(–-]+$/, '')
    .replace(/\s+[a-zA-Zа-яёА-ЯЁ]{1,2}$/, ''); // no dangling "… однопольная с" 
}

const TITLE_TAIL = ' оптом | DoorStore';

function titleHead(product: Product): string {
  const name = displayName(product);
  const escaped = product.brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const generic = product.brand === 'Универсальный';
  return generic || word(escaped, 'i').test(name) ? name : `${name} ${product.brand}`;
}

// Truncation can collapse two distinct products onto one title (same prefix, differing
// only in size or hand). Titles are resolved once, in catalog order: the shortest length
// that keeps the title unique wins, so collisions grow the title instead of merging it.
let titleCache: Map<string, string> | undefined;

function buildTitles(): Map<string, string> {
  const short = 60 - TITLE_TAIL.length;
  const long = 78 - TITLE_TAIL.length;
  const counts = new Map<string, number>();
  const heads = products.map((p) => {
    const head = trimWords(titleHead(p), short);
    counts.set(head, (counts.get(head) ?? 0) + 1);
    return head;
  });

  const out = new Map<string, string>();
  const taken = new Set<string>();
  products.forEach((product, i) => {
    let head = heads[i];
    if ((counts.get(head) ?? 0) > 1 || taken.has(head)) {
      const full = titleHead(product);
      for (let room = short + 4; room <= long; room += 4) {
        const candidate = trimWords(full, room);
        if (candidate !== heads[i] && !taken.has(candidate)) {
          head = candidate;
          break;
        }
      }
    }
    taken.add(head);
    out.set(product.slug, `${head}${TITLE_TAIL}`);
  });
  return out;
}

/**
 * Title that keeps the brand suffix and stays unique across the catalog.
 * 60 chars by default, up to 78 only where that is what separates two products.
 */
export function productTitle(product: Product): string {
  titleCache ??= buildTitles();
  return titleCache.get(product.slug) ?? `${trimWords(titleHead(product), 42)}${TITLE_TAIL}`;
}

const stockPhrase = (product: Product) =>
  product.status === 'in_stock' ? `В наличии ${product.stock} шт.` : 'Поставка под заказ.';

// Per-category value proposition, so 302 descriptions stop reading as one template.
const CATEGORY_ANGLE: Record<string, string> = {
  'Антипаника': 'Подбор по ширине полотна и схеме эвакуационного выхода.',
  'Броненакладки': 'Подбор по классу защиты и длине цилиндра.',
  'Цилиндровые механизмы': 'Подбор по размеру, вылету и типу вертушки.',
  'Дверная фурнитура': 'Подбор совместимых комплектующих под дверной блок.',
  'Дверные глазки': 'Подбор по толщине полотна и углу обзора.',
  'Девиаторы': 'Подбор под замок и схему запирания.',
  'Доводчики': 'Подбор по массе и ширине полотна, типу тяги.',
  'Приводы двери': 'Подбор по массе створки и режиму прохода.',
  'Дверные замки': 'Подбор по межосевому расстоянию и типу запирания.',
  'Дверные ручки': 'Подбор по квадрату, покрытию и типу планки.',
  'Защелки': 'Подбор по бэксету и типу язычка.',
  'Накладки': 'Подбор по типу основания и покрытию.',
  'Дверные петли': 'Подбор по нагрузке и типу врезки.',
  'Фиксаторы': 'Подбор по типу монтажа и усилию удержания.',
  'Шпингалеты': 'Подбор по длине штока и типу монтажа.',
  'Двери': 'Подбор по проёму, классу и комплекту фурнитуры.',
  'Уплотнители': 'Подбор по профилю паза и степени притвора.',
  'Дверные пороги': 'Подбор по ширине проёма и требованиям к притвору.',
  'Упоры и ограничители': 'Подбор по типу монтажа и ходу полотна.',
  'Комплектующие для доводчиков': 'Подбор по модели доводчика и монтажной схеме.',
};

const angleFor = (category: string) =>
  CATEGORY_ANGLE[category] ?? 'Технический подбор под ваш дверной блок.';

/**
 * On-page product description, derived instead of stored: one place to improve the copy,
 * a smaller `products.ts`, and no near-duplicate strings baked into the bundle.
 */
export function productDescription(product: Product): string {
  const article = productArticle(product);
  return tidy(
    `${displayName(product)} — ${product.category.toLowerCase()} бренда ${product.brand}` +
      `${article ? `, артикул ${article}` : ''}. ${stockPhrase(product)} ${angleFor(product.category)} ` +
      `Оптовая поставка для дверных фабрик и монтажных компаний, доставка по России.`
  );
}

/**
 * Meta description capped at 160 chars. The tail is built first and the name gets
 * whatever room is left, so the sentence never ends mid-phrase.
 */
export function productMetaDescription(product: Product): string {
  const name = displayName(product);
  const full = ` оптом. ${stockPhrase(product)} ${angleFor(product.category)} Цена по запросу, доставка по РФ.`;
  // Prefer keeping the whole product name — two variants of one model often differ only
  // in the last word, and cutting it makes their descriptions identical.
  const lean = ` оптом. ${stockPhrase(product)} Цена по запросу, подбор и доставка по РФ.`;
  const tail = name.length + full.length <= 160 || name.length + lean.length > 160 ? full : lean;
  return tidy(trimWords(name, 160 - tail.length) + tail);
}

// Single source of company details. While `detailsAreDummy` is true the site must not
// render placeholder phone/INN/OGRN anywhere — fake requisites on a live B2B site are a
// trust/E-E-A-T problem — and /contacts stays noindex.
// To go live: fill phone/address/legal with real data and flip the flag to false.
const detailsAreDummy = true;
const CONTENT_UPDATED_AT = '2026-07-29';

const phone = {
  display: '+7 (495) 000-00-00',
  href: 'tel:+74950000000',
  schema: '+7-495-000-00-00',
} as const;

const email = 'b2b@doorstore.shop';

export const site = {
  name: 'DoorStore',
  legalName: 'ООО «ДОРСТОР»', // ponytail: dummy, заменить вместе с реквизитами ниже
  baseUrl: 'https://doorstore.shop',
  email,
  phone,
  // Primary contact rendered in the UI. Falls back to email until real requisites land,
  // so no call site needs its own `detailsAreDummy` branch.
  contact: detailsAreDummy
    ? { display: email, href: `mailto:${email}`, isPhone: false }
    : { display: phone.display, href: phone.href, isPhone: true },
  address: detailsAreDummy ? 'Москва и область, отгрузка со склада' : 'г. Москва, адрес склада уточняется',
  hours: 'Пн–Пт: 9:00–18:00',
  legal: {
    inn: '0000000000',
    ogrn: '0000000000000',
    kpp: '000000000',
  },
  detailsAreDummy,
  contentUpdatedAt: CONTENT_UPDATED_AT,
  // Same date in the format the pages print, so the visible "проверено" line and the
  // sitemap <lastmod> can never drift apart.
  contentUpdatedAtRu: CONTENT_UPDATED_AT.split('-').reverse().join('.'),
} as const;

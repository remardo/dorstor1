export const site = {
  name: 'DoorStore',
  legalName: 'ООО «ДОРСТОР»', // ponytail: dummy, заменить вместе с реквизитами ниже
  baseUrl: 'https://doorstore.shop',
  email: 'b2b@doorstore.shop',
  phone: {
    display: '+7 (495) 000-00-00',
    href: 'tel:+74950000000',
    schema: '+7-495-000-00-00',
  },
  address: 'г. Москва, адрес склада уточняется',
  hours: 'Пн–Пт: 9:00–18:00',
  legal: {
    inn: '0000000000',
    ogrn: '0000000000000',
    kpp: '000000000',
  },
  detailsAreDummy: true,
  contentUpdatedAt: '2026-07-11',
} as const;

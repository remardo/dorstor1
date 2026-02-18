export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  brand: string;
  stock: number;
  status: 'in_stock' | 'out_of_stock';
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 8,
    slug: 'glazok-apecs-3016-70-110-g-zoloto-8',
    name: 'Глазок APECS 3016/70-110-G-золото',
    category: 'Дверные глазки',
    brand: 'APECS',
    stock: 1,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/707030/1200x800/52382857.jpg',
    description: 'Глазок APECS 3016/70-110-G-золото — дверные глазки для входных и технических дверей.'
  },
  {
    id: 9,
    slug: 'glazok-dv-avers-2216-75-135-chernyy-9',
    name: 'Глазок дв. Аверс 2216/75-135-черный',
    category: 'Дверные глазки',
    brand: 'Универсальный',
    stock: 42,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/13583743/1000x1000/163177795.jpg',
    description: 'Глазок дв. Аверс 2216/75-135-черный — дверные глазки для входных и технических дверей.'
  },
  {
    id: 10,
    slug: 'glazok-dvernoy-apecs-1516-70-130-blm-kvadratnaya-10',
    name: 'Глазок дверной Apecs 1516/70-130-BLM квадратная',
    category: 'Дверные глазки',
    brand: 'APECS',
    stock: 1,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/2019346/1000x1000/54100382.jpg',
    description: 'Глазок дверной Apecs 1516/70-130-BLM квадратная — дверные глазки для входных и технических дверей.'
  },
  {
    id: 11,
    slug: 'glazok-dvernoy-armadillo-dy-pro-3-100-60-z-mat-nik-11',
    name: 'Глазок дверной ARMADILLO DY/PRO 3/100-60/Z мат.ник',
    category: 'Дверные глазки',
    brand: 'ARMADILLO',
    stock: 0,
    status: 'out_of_stock',
    image: '',
    description: 'Глазок дверной ARMADILLO DY/PRO 3/100-60/Z мат.ник — дверные глазки для входных и технических дверей. Поставка под заказ.'
  },
  {
    id: 12,
    slug: 'glazok-dvernoy-armadillo-dy-pro-3-100-60-v-hrom-12',
    name: 'Глазок дверной ARMADILLO DY/PRO 3/100-60/В хром',
    category: 'Дверные глазки',
    brand: 'ARMADILLO',
    stock: 0,
    status: 'out_of_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/8102246/68x60/93928508.jpg',
    description: 'Глазок дверной ARMADILLO DY/PRO 3/100-60/В хром — дверные глазки для входных и технических дверей. Поставка под заказ.'
  },
  {
    id: 13,
    slug: 'glazok-p-pozharnaya-dvernaya-lat-hrom-fp-13',
    name: 'Глазок п/пожарная дверная лат.хром FP',
    category: 'Дверные глазки',
    brand: 'Универсальный',
    stock: 1,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/15740494/1000x1000/178214944.jpg',
    description: 'Глазок п/пожарная дверная лат.хром FP — дверные глазки для входных и технических дверей.'
  },
  {
    id: 14,
    slug: 'glazok-dvernoy-p-pozh-avers-4014-45-75-hrom-14',
    name: 'Глазок дверной п/пож.АВЕРС 4014/45-75-хром',
    category: 'Дверные глазки',
    brand: 'Универсальный',
    stock: 0,
    status: 'out_of_stock',
    image: '',
    description: 'Глазок дверной п/пож.АВЕРС 4014/45-75-хром — дверные глазки для входных и технических дверей. Поставка под заказ.'
  },
  {
    id: 15,
    slug: 'deviator-gardian100-15',
    name: 'Девиатор Гардиан100',
    category: 'Девиаторы',
    brand: 'Универсальный',
    stock: 1,
    status: 'in_stock',
    image: 'https://images.zakupka.com/i3/firms/27/5323/5323892/deviator-gardian-100t_0fb92ce20256423_800x600_1.webp.jpg',
    description: 'Девиатор Гардиан100 — девиаторы для входных и технических дверей.'
  },
  {
    id: 16,
    slug: 'dovodchik-dvernoy-vanger-dc-85-sl-serebro-16',
    name: 'Доводчик дверной Vanger DC-85-SL (серебро)',
    category: 'Доводчики',
    brand: 'VANGER',
    stock: 18,
    status: 'in_stock',
    image: 'https://stroylocks.com/upload/iblock/46d/mu3ciwmd2ujxxb41ndo071lfktbe7zxy.jpg',
    description: 'Доводчик дверной Vanger DC-85-SL (серебро) — доводчики для входных и технических дверей.'
  },
  {
    id: 17,
    slug: 'dovodchik-notedo-dc025-095-serebro-17',
    name: 'Доводчик Notedo DC025-095 (серебро)',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 24,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/9884006/1200x800/181924835.jpg',
    description: 'Доводчик Notedo DC025-095 (серебро) — доводчики для входных и технических дверей.'
  },
  {
    id: 18,
    slug: 'dovodchik-notedo-dc045-155-belyy-18',
    name: 'Доводчик Notedo DC045-155 (белый)',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 8,
    status: 'in_stock',
    image: 'http://notedo.ru/files/gallery/68/big/dc-045-155_sl-ho_white_1650958488.jpg',
    description: 'Доводчик Notedo DC045-155 (белый) — доводчики для входных и технических дверей.'
  },
  {
    id: 19,
    slug: 'dovodchik-notedo-dc055-in-ho-serebro-19',
    name: 'Доводчик Notedo DC055 IN+HO (серебро)',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 4,
    status: 'in_stock',
    image: 'https://doork-shop.ru/image/cache/catalog/notedo/NOTEDO-DC-055-IN-HO-1300x800-product_popup.jpg',
    description: 'Доводчик Notedo DC055 IN+HO (серебро) — доводчики для входных и технических дверей.'
  },
  {
    id: 20,
    slug: 'dovodchik-dvernoy-notedo-dc-080-cerebro-20',
    name: 'Доводчик дверной NOTEDO DC-080 серебро',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 60,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/2002054/1000x1000/54022373.jpg',
    description: 'Доводчик дверной NOTEDO DC-080 серебро — доводчики для входных и технических дверей.'
  },
  {
    id: 21,
    slug: 'dovodchik-dvernoy-notedo-dc-080-chernyy-21',
    name: 'Доводчик дверной NOTEDO DC-080 черный',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 49,
    status: 'in_stock',
    image: 'https://ir.ozone.ru/s3/multimedia-s/c1000/6896866600.jpg',
    description: 'Доводчик дверной NOTEDO DC-080 черный — доводчики для входных и технических дверей.'
  },
  {
    id: 22,
    slug: 'dovodchik-dvernoy-notedo-dc-088-cammode-serebro-22',
    name: 'Доводчик дверной NOTEDO DC-088 CAMMODE серебро',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 0,
    status: 'out_of_stock',
    image: 'http://notedo.ru/files/gallery/308/small/dc-088-188-in-ho-cammode_1673252508.jpg',
    description: 'Доводчик дверной NOTEDO DC-088 CAMMODE серебро — доводчики для входных и технических дверей. Поставка под заказ.'
  },
  {
    id: 23,
    slug: 'dovodchik-dvernoy-notedo-dc-150-legkiy-harakter-serebro-23',
    name: 'Доводчик дверной NOTEDO DC-150 легкий характер, серебро',
    category: 'Доводчики',
    brand: 'NOTEDO',
    stock: 4,
    status: 'in_stock',
    image: 'https://ir.ozone.ru/s3/multimedia-o/c1000/6855836136.jpg',
    description: 'Доводчик дверной NOTEDO DC-150 легкий характер, серебро — доводчики для входных и технических дверей.'
  },
  {
    id: 24,
    slug: 'dovodchik-assa-abloi-dc-140-24',
    name: 'Доводчик ASSA ABLOI DC-140',
    category: 'Доводчики',
    brand: 'ASSA',
    stock: 1,
    status: 'in_stock',
    image: 'https://static.insales-cdn.com/images/products/1/7580/303218076/DC-140_дверной_доводчик_ASSA_ABLO_серебро.jpg',
    description: 'Доводчик ASSA ABLOI DC-140 — доводчики для входных и технических дверей.'
  },
  {
    id: 25,
    slug: 'dovodchik-assa-abloy-dc-500-25',
    name: 'Доводчик ASSA Abloy DC-500',
    category: 'Доводчики',
    brand: 'ASSA ABLOY',
    stock: 22,
    status: 'in_stock',
    image: 'https://ventum.lv/image/cache/catalog/products/1779/full-dc500-1000x1000.jpg',
    description: 'Доводчик ASSA Abloy DC-500 — доводчики для входных и технических дверей.'
  },
  {
    id: 26,
    slug: 'dovodchik-assa-abloy-dc-840-26',
    name: 'Доводчик ASSA ABLOY DC-840',
    category: 'Доводчики',
    brand: 'ASSA ABLOY',
    stock: 2,
    status: 'in_stock',
    image: 'https://pro-locks.ru/image/cache/data/Abloy/fire_door_systems/dc840_g880_assa_abloy-800x800.jpg',
    description: 'Доводчик ASSA ABLOY DC-840 — доводчики для входных и технических дверей.'
  },
  {
    id: 27,
    slug: 'dovodchik-assa-abloi-ds-860-27',
    name: 'Доводчик ASSA ABLOI ДС-860',
    category: 'Доводчики',
    brand: 'ASSA',
    stock: 2,
    status: 'in_stock',
    image: 'https://www.smart-doors.su/upload/iblock/5b3/DC860.jpg',
    description: 'Доводчик ASSA ABLOI ДС-860 — доводчики для входных и технических дверей.'
  },
  {
    id: 28,
    slug: 'dovodchik-dormakaba-silver-p600-ts-match-28',
    name: 'Доводчик Dormakaba Silver P600 TS MATCH',
    category: 'Доводчики',
    brand: 'DORMAKABA',
    stock: 13,
    status: 'in_stock',
    image: 'https://lemonadd.ru/wa-data/public/shop/products/29/13/1329/images/2859/2859.750x0.jpg',
    description: 'Доводчик Dormakaba Silver P600 TS MATCH — доводчики для входных и технических дверей.'
  },
  {
    id: 29,
    slug: 'dovodchik-ts93-v-vs-dc-en-2-5-ral9005-29',
    name: 'Доводчик ТS93 В ВС+DC EN 2-5, RAL9005',
    category: 'Доводчики',
    brand: 'Универсальный',
    stock: 4,
    status: 'in_stock',
    image: 'https://cdn.meesenburg.ru/v1/image/upload/66c78a393438de9506dd5e32/RU/Products/01-00011995/5wDm5Wv4bKJ7qQt5USDve1.jpg?w=775&h=775&fit=inside',
    description: 'Доводчик ТS93 В ВС+DC EN 2-5, RAL9005 — доводчики для входных и технических дверей.'
  },
  {
    id: 30,
    slug: 'dovodchik-ts93-v-v-en-2-5-seryy-art-043020001-30',
    name: 'Доводчик ТS93 В В EN 2-5, серый арт.043020001',
    category: 'Доводчики',
    brand: 'Универсальный',
    stock: 1,
    status: 'in_stock',
    image: 'https://cdn1.ozone.ru/s3/multimedia-1-7/c600/7241213347.jpg',
    description: 'Доводчик ТS93 В В EN 2-5, серый арт.043020001 — доводчики для входных и технических дверей.'
  },
  {
    id: 31,
    slug: 'dovodchik-ts90-impulse-seryy-art-010200401-31',
    name: 'Доводчик TS90 Impulse серый арт.010200401',
    category: 'Доводчики',
    brand: 'IMPULSE',
    stock: 87,
    status: 'in_stock',
    image: 'https://satro-paladin.com/_img/satro/goods/0/632/00-00004632/IM_10200401_TS90IMPULSEEN34_I_188961_web-jpeg.jpg',
    description: 'Доводчик TS90 Impulse серый арт.010200401 — доводчики для входных и технических дверей.'
  },
  {
    id: 32,
    slug: 'dovodchik-ts90-impulse-chernyy-32',
    name: 'Доводчик TS90 Impulse черный',
    category: 'Доводчики',
    brand: 'IMPULSE',
    stock: 40,
    status: 'in_stock',
    image: 'https://videoglaz.ru/imgs/dc/37/12/b6/167922/97505/original.jpg',
    description: 'Доводчик TS90 Impulse черный — доводчики для входных и технических дверей.'
  },
  {
    id: 33,
    slug: 'ev-tsilindr-s-vertushkoy-dorma-cbf-1-80-40-40-nikel-33',
    name: 'Ев/цилиндр с вертушкой Dorma CBF-1 80 (40*40)-никель',
    category: 'Цилиндровые механизмы',
    brand: 'DORMA',
    stock: 3,
    status: 'in_stock',
    image: 'https://static.tbmmarket.com/risunok1024x768/Evrocilindr_s_vertushkoi_DORMA_CBR1_80_40x40V_NIKEL_dormakaba_DRM0186_001.jpg',
    description: 'Ев/цилиндр с вертушкой Dorma CBF-1 80 (40*40)-никель — цилиндровые механизмы для входных и технических дверей.'
  },
  {
    id: 34,
    slug: 'ev-tsilindr-dorma-cbf-1-80-35-45-nikel-34',
    name: 'Ев/цилиндр Dorma CBF-1 80 (35*45)-никель',
    category: 'Цилиндровые механизмы',
    brand: 'DORMA',
    stock: 22,
    status: 'in_stock',
    image: 'https://redmaster.by/upload/iblock/c7a/57dfyygdq5toqs62t80iqf98ltxehxek/evrotsilindr_cbf_1_80_35x45_nikel_angliyskiy_klyuch_dorma_7039000000009.jpg',
    description: 'Ев/цилиндр Dorma CBF-1 80 (35*45)-никель — цилиндровые механизмы для входных и технических дверей.'
  },
  {
    id: 35,
    slug: 'ev-tsilindr-dorma-cbr-1-100-45-55-nikel-35',
    name: 'Ев/цилиндр Dorma CBР-1 100 (45*55)-никель',
    category: 'Цилиндровые механизмы',
    brand: 'DORMA',
    stock: 60,
    status: 'in_stock',
    image: 'https://stroylocks.com/upload/iblock/d23/ty9kzdbqb1j5e5iykbh7g1dejiyc2xvf.jpg',
    description: 'Ев/цилиндр Dorma CBР-1 100 (45*55)-никель — цилиндровые механизмы для входных и технических дверей.'
  },
  {
    id: 36,
    slug: 'ed-100-privod-raspashnoy-dveri-art-29222311-36',
    name: 'ЕD 100 привод распашной двери арт.29222311',
    category: 'Приводы двери',
    brand: 'Универсальный',
    stock: 2,
    status: 'in_stock',
    image: 'https://handyhouse.ru:443/upload/iblock/05d/0jt1m39oxgvgb5byq5qugpj8or0rhvbc.jpg',
    description: 'ЕD 100 привод распашной двери арт.29222311 — приводы двери для входных и технических дверей.'
  },
  {
    id: 37,
    slug: 'ed-bazovaya-kryshka-seraya-art-29241001-37',
    name: 'ЕD базовая крышка, серая арт.29241001',
    category: 'Дверная фурнитура',
    brand: 'Универсальный',
    stock: 2,
    status: 'in_stock',
    image: '',
    description: 'ЕD базовая крышка, серая арт.29241001 — дверная фурнитура для входных и технических дверей.'
  },
  {
    id: 38,
    slug: 'ed-vario-kryshka-2200mm-seraya-art-29242001-38',
    name: 'ЕD VARIO крышка 2200мм серая арт.29242001',
    category: 'Дверная фурнитура',
    brand: 'VARIO',
    stock: 1,
    status: 'in_stock',
    image: 'https://doork-shop.ru/image/cache/catalog/komplect-automatic/ED_VARIO_dorma-500x500-1300x800-product_popup.jpg',
    description: 'ЕD VARIO крышка 2200мм серая арт.29242001 — дверная фурнитура для входных и технических дверей.'
  },
  {
    id: 39,
    slug: 'ed-standartnaya-tyaga-225-mm-art-29271021-39',
    name: 'ED Стандартная тяга 225 мм арт.29271021',
    category: 'Дверная фурнитура',
    brand: 'Универсальный',
    stock: 2,
    status: 'in_stock',
    image: '',
    description: 'ED Стандартная тяга 225 мм арт.29271021 — дверная фурнитура для входных и технических дверей.'
  },
  {
    id: 40,
    slug: 'zavertka-nl-black-40',
    name: 'Завертка NL Black',
    category: 'Дверная фурнитура',
    brand: 'BLACK',
    stock: 4,
    status: 'in_stock',
    image: 'https://cdn.vseinstrumenti.ru/images/goods/krepezh/metizy/10467278/1000x1000/143097692.jpg',
    description: 'Завертка NL Black — дверная фурнитура для входных и технических дверей.'
  }
];

export const categories = [...new Set(products.map(p => p.category))];
export const brands = [...new Set(products.map(p => p.brand))].sort();

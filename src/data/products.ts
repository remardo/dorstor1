export type PropIcon = 'size' | 'leaf' | 'frame' | 'lock' | 'handle' | 'opening' | 'finish' | 'vent';

export interface ProductProp {
  icon: PropIcon;
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  brand: string;
  stock: number;
  status: 'in_stock' | 'out_of_stock';
  image: string;
  props?: ProductProp[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "antipan-pha-2501-art-446230101-seryy-rychag-d-splosh-1",
    name: "Антипан. PHA 2501 арт.446230101 (серый) рычаг д/сплош",
    category: "Антипаника",
    brand: "PHA",
    stock: 6,
    status: 'in_stock',
    image: "/images/1.webp"
  },
  {
    id: 2,
    slug: "antipanika-pha-2501-art-230104-nerzhav-rychagi-2",
    name: "Антипаника PHA 2501 арт.230104 (нержав.) ( рычаги)",
    category: "Антипаника",
    brand: "PHA",
    stock: 2,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 3,
    slug: "antipanika-pha-2560-vb-art-6223304-3",
    name: "Антипаника PHA 2560 VB арт 6223304",
    category: "Антипаника",
    brand: "PHA",
    stock: 2,
    status: 'in_stock',
    image: "/images/3.webp"
  },
  {
    id: 4,
    slug: "antipanika-pha-2570-vb-art-6240304-4",
    name: "Антипаника PHA 2570 VB арт 6240304",
    category: "Антипаника",
    brand: "PHA",
    stock: 2,
    status: 'in_stock',
    image: "/images/4.webp"
  },
  {
    id: 5,
    slug: "bronenakladka-protector-pro-50-27-zoloto-5",
    name: "Броненакладка Protector Pro 50/27 золото",
    category: "Броненакладки",
    brand: "PROTECTOR",
    stock: 1,
    status: 'in_stock',
    image: "/images/5.webp"
  },
  {
    id: 6,
    slug: "bronenakladka-vreznaya-dlya-tsilindra-securemme-25mm-mat-hrom-6",
    name: "Броненакладка врезная для цилиндра Securemme 25мм мат.хром",
    category: "Цилиндровые механизмы",
    brand: "SECUREMME",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/6.webp"
  },
  {
    id: 7,
    slug: "vstavka-dlya-tsil-nakl-apeks-dp-c-blm-chernyy-7",
    name: "Вставка для цил.накл. Апекс DP-C-BLM черный",
    category: "Дверная фурнитура",
    brand: "BLM",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/7.webp"
  },
  {
    id: 8,
    slug: "glazok-apecs-3016-70-110-g-zoloto-8",
    name: "Глазок APECS 3016/70-110-G-золото",
    category: "Дверные глазки",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/8.webp"
  },
  {
    id: 9,
    slug: "glazok-dv-avers-2216-75-135-chernyy-9",
    name: "Глазок дв. Аверс 2216/75-135-черный",
    category: "Дверные глазки",
    brand: "Универсальный",
    stock: 42,
    status: 'in_stock',
    image: "/images/9.webp"
  },
  {
    id: 10,
    slug: "glazok-dvernoy-apecs-1516-70-130-blm-kvadratnaya-10",
    name: "Глазок дверной Apecs 1516/70-130-BLM квадратная",
    category: "Дверные глазки",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/10.webp"
  },
  {
    id: 11,
    slug: "glazok-dvernoy-armadillo-dy-pro-3-100-60-z-mat-nik-11",
    name: "Глазок дверной ARMADILLO DY/PRO 3/100-60/Z мат.ник",
    category: "Дверные глазки",
    brand: "ARMADILLO",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 12,
    slug: "glazok-dvernoy-armadillo-dy-pro-3-100-60-v-hrom-12",
    name: "Глазок дверной ARMADILLO DY/PRO 3/100-60/В хром",
    category: "Дверные глазки",
    brand: "ARMADILLO",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/12.webp"
  },
  {
    id: 13,
    slug: "glazok-p-pozharnaya-dvernaya-lat-hrom-fp-13",
    name: "Глазок п/пожарная дверная лат.хром FP",
    category: "Дверные глазки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/13.webp"
  },
  {
    id: 14,
    slug: "glazok-dvernoy-p-pozh-avers-4014-45-75-hrom-14",
    name: "Глазок дверной п/пож.АВЕРС 4014/45-75-хром",
    category: "Дверные глазки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/14.webp"
  },
  {
    id: 15,
    slug: "deviator-gardian100-15",
    name: "Девиатор Гардиан100",
    category: "Девиаторы",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/15.webp"
  },
  {
    id: 16,
    slug: "dovodchik-dvernoy-vanger-dc-85-sl-serebro-16",
    name: "Доводчик дверной Vanger DC-85-SL ( серебро)",
    category: "Доводчики",
    brand: "VANGER",
    stock: 18,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 17,
    slug: "dovodchik-notedo-dc025-095-serebro-17",
    name: "Доводчик Notedo DC025-095 (серебро)",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 24,
    status: 'in_stock',
    image: "/images/17.webp"
  },
  {
    id: 18,
    slug: "dovodchik-notedo-dc045-155-belyy-18",
    name: "Доводчик Notedo DC045-155 (белый)",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 8,
    status: 'in_stock',
    image: "/images/18.webp"
  },
  {
    id: 19,
    slug: "dovodchik-notedo-dc055-in-ho-serebro-19",
    name: "Доводчик Notedo DC055 IN+HO (серебро)",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 4,
    status: 'in_stock',
    image: "/images/19.webp"
  },
  {
    id: 20,
    slug: "dovodchik-dvernoy-notedo-dc-080-cerebro-20",
    name: "Доводчик дверной NOTEDO DC-080 cеребро",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 60,
    status: 'in_stock',
    image: "/images/20.webp"
  },
  {
    id: 21,
    slug: "dovodchik-dvernoy-notedo-dc-080-chernyy-21",
    name: "Доводчик дверной NOTEDO DC-080 черный",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 49,
    status: 'in_stock',
    image: "/images/21.webp"
  },
  {
    id: 22,
    slug: "dovodchik-dvernoy-notedo-dc-088-cammode-serebro-22",
    name: "Доводчик дверной NOTEDO DC-088 CAMMODE серебро",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/22.webp"
  },
  {
    id: 23,
    slug: "dovodchik-dvernoy-notedo-dc-150-legkiy-harakter-serebro-23",
    name: "Доводчик дверной NOTEDO DC-150 легкий характер, серебро",
    category: "Доводчики",
    brand: "NOTEDO",
    stock: 4,
    status: 'in_stock',
    image: "/images/23.webp"
  },
  {
    id: 24,
    slug: "dovodchik-assa-abloi-dc-140-24",
    name: "Доводчик ASSA ABLOI DC-140",
    category: "Доводчики",
    brand: "ASSA",
    stock: 1,
    status: 'in_stock',
    image: "/images/24.webp"
  },
  {
    id: 25,
    slug: "dovodchik-assa-abloy-dc-500-25",
    name: "Доводчик ASSA Abloy DC-500",
    category: "Доводчики",
    brand: "ASSA ABLOY",
    stock: 22,
    status: 'in_stock',
    image: "/images/25.webp"
  },
  {
    id: 26,
    slug: "dovodchik-assa-abloy-dc-840-26",
    name: "Доводчик ASSA ABLOY DC-840",
    category: "Доводчики",
    brand: "ASSA ABLOY",
    stock: 2,
    status: 'in_stock',
    image: "/images/26.webp"
  },
  {
    id: 27,
    slug: "dovodchik-assa-abloi-ds-860-27",
    name: "Доводчик ASSA ABLOI ДС-860",
    category: "Доводчики",
    brand: "ASSA",
    stock: 2,
    status: 'in_stock',
    image: "/images/27.webp"
  },
  {
    id: 28,
    slug: "dovodchik-dormakaba-silver-p600-ts-match-28",
    name: "Доводчик Dormakaba Silver P600 TS MATCH",
    category: "Доводчики",
    brand: "DORMAKABA",
    stock: 13,
    status: 'in_stock',
    image: "/images/28.webp"
  },
  {
    id: 29,
    slug: "dovodchik-ts93-v-vs-dc-en-2-5-ral9005-29",
    name: "Доводчик ТS93 В ВС+DC EN 2-5,RAL9005",
    category: "Доводчики",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/29.webp"
  },
  {
    id: 30,
    slug: "dovodchik-ts93-v-v-en-2-5-seryy-art-043020001-30",
    name: "Доводчик ТS93 В В EN 2-5,серый арт.043020001",
    category: "Доводчики",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/30.webp"
  },
  {
    id: 31,
    slug: "dovodchik-ts90-impulse-seryy-art-010200401-31",
    name: "Доводчик TS90 Impulse серый арт.010200401",
    category: "Доводчики",
    brand: "IMPULSE",
    stock: 87,
    status: 'in_stock',
    image: "/images/31.webp"
  },
  {
    id: 32,
    slug: "dovodchik-ts90-impulse-chernyy-32",
    name: "Доводчик TS90 Impulse черный",
    category: "Доводчики",
    brand: "IMPULSE",
    stock: 40,
    status: 'in_stock',
    image: "/images/32.webp"
  },
  {
    id: 33,
    slug: "ev-tsilindr-s-vertushkoy-dorma-cbf-1-80-40-40-nikel-33",
    name: "Ев/цилиндр с вертушкой Dorma CBF-1 80 (40*40)-никель",
    category: "Цилиндровые механизмы",
    brand: "DORMA",
    stock: 3,
    status: 'in_stock',
    image: "/images/33.webp"
  },
  {
    id: 34,
    slug: "ev-tsilindr-dorma-cbf-1-80-35-45-nikel-34",
    name: "Ев/цилиндр Dorma CBF-1 80 (35*45)-никель",
    category: "Цилиндровые механизмы",
    brand: "DORMA",
    stock: 22,
    status: 'in_stock',
    image: "/images/34.webp"
  },
  {
    id: 35,
    slug: "ev-tsilindr-dorma-cbr-1-100-45-55-nikel-35",
    name: "Ев/цилиндр Dorma CBР-1 100 (45*55)-никель",
    category: "Цилиндровые механизмы",
    brand: "DORMA",
    stock: 60,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 36,
    slug: "ed-100-privod-raspashnoy-dveri-art-29222311-36",
    name: "ЕD 100 привод распашной двери арт.29222311",
    category: "Приводы двери",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/36.webp"
  },
  {
    id: 37,
    slug: "ed-bazovaya-kryshka-seraya-art-29241001-37",
    name: "ЕD базовая крышка ,серая арт.29241001",
    category: "Комплектующие для доводчиков",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/294.webp"
  },
  {
    id: 38,
    slug: "ed-vario-kryshka-2200mm-seraya-art-29242001-38",
    name: "ЕD VARIO крышка 2200мм серая арт.29242001",
    category: "Комплектующие для доводчиков",
    brand: "VARIO",
    stock: 1,
    status: 'in_stock',
    image: "/images/38.webp"
  },
  {
    id: 39,
    slug: "ed-standartnaya-tyaga-225-mm-art-29271021-39",
    name: "ED Стандартная тяга 225 мм арт.29271021",
    category: "Комплектующие для доводчиков",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/231.webp"
  },
  {
    id: 40,
    slug: "zavertka-nl-black-40",
    name: "Завертка NL Black",
    category: "Дверная фурнитура",
    brand: "BLACK",
    stock: 4,
    status: 'in_stock',
    image: "/images/40.webp"
  },
  {
    id: 41,
    slug: "zaglushka-kvad-80-80-vnutren-ploskaya-belaya-ekonom-41",
    name: "Заглушка квад.80*80 внутрен. Плоская белая эконом",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 30,
    status: 'in_stock',
    image: "/images/41.webp"
  },
  {
    id: 42,
    slug: "zaglushka-pod-protivosem-f24-chernyy-42",
    name: "Заглушка под противосьем Ф24 черный",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 400,
    status: 'in_stock',
    image: "/images/42.webp"
  },
  {
    id: 43,
    slug: "zaglushka-pod-protivosem-f25-t-chernyy-43",
    name: "Заглушка под противосьем Ф25 Т черный",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 180,
    status: 'in_stock',
    image: "/images/43.webp"
  },
  {
    id: 44,
    slug: "zaglushka-dlya-trub-kvadrat-60-60mm-44",
    name: "Заглушка для труб квадрат. 60*60мм",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/44.webp"
  },
  {
    id: 45,
    slug: "zaglushka-dlya-avtoporogov-mini-45",
    name: "Заглушка для автопорогов МИНИ",
    category: "Дверные пороги",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/45.webp"
  },
  {
    id: 46,
    slug: "zadvizhka-vreznaya-apecs-l-0260-hrom-46",
    name: "Задвижка врезная Apecs L 0260 хром",
    category: "Дверная фурнитура",
    brand: "APECS",
    stock: 2,
    status: 'in_stock',
    image: "/images/46.webp"
  },
  {
    id: 47,
    slug: "zamok-apecs-5300r-nis-47",
    name: "Замок Apecs 5300Р-NIS",
    category: "Дверные замки",
    brand: "APECS",
    stock: 30,
    status: 'in_stock',
    image: "/images/47.webp"
  },
  {
    id: 48,
    slug: "zamok-mezhkomn-apecs-5300-wc-ni-48",
    name: "Замок межкомн. Apecs 5300-WC-NI",
    category: "Дверные замки",
    brand: "APECS",
    stock: 35,
    status: 'in_stock',
    image: "/images/48.webp"
  },
  {
    id: 49,
    slug: "zamok-170-wc-78-55-8-8-f-20skr-otv-planka-pod-fiksator-49",
    name: "Замок 170/WC 78/55/8/8 F =20скр+отв.планка под фиксатор",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 33,
    status: 'in_stock',
    image: "/images/49.webp"
  },
  {
    id: 50,
    slug: "zamok-170-wz-72-55-8-8-f-20skr-50",
    name: "Замок 170/WZ 72/55/8/8 F =20скр",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 81,
    status: 'in_stock',
    image: "/images/50.webp"
  },
  {
    id: 51,
    slug: "zamok-geqe-170-pz-72-55-8-f-pod-tsilindr-51",
    name: "Замок Geqe 170 PZ 72/55/8 F под цилиндр",
    category: "Цилиндровые механизмы",
    brand: "GEQE",
    stock: 300,
    status: 'in_stock',
    image: "/images/51.webp"
  },
  {
    id: 52,
    slug: "zamok-geqe-ergo-pz-72-55-8-f-pod-tsilindr-s-plastikovym-yazychkom-52",
    name: "Замок Geqe ERGO PZ 72/55/8 F под цилиндр с пластиковым язычком",
    category: "Цилиндровые механизмы",
    brand: "GEQE",
    stock: 500,
    status: 'in_stock',
    image: "/images/52.webp"
  },
  {
    id: 53,
    slug: "zamok-vreznoy-apecs-30-r-cr-53",
    name: "Замок врезной Apecs 30-R-CR",
    category: "Дверные замки",
    brand: "APECS",
    stock: 2,
    status: 'in_stock',
    image: "/images/53.webp"
  },
  {
    id: 54,
    slug: "zamok-gardian-20-01-t-54",
    name: "Замок Гардиан 20.01 Т",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/54.webp"
  },
  {
    id: 55,
    slug: "zamok-gardian-20-02-nikel-55",
    name: "Замок Гардиан 20.02 никель",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/55.webp"
  },
  {
    id: 56,
    slug: "zamok-gardian-22-12-t-56",
    name: "Замок Гардиан 22.12 Т",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/56.webp"
  },
  {
    id: 57,
    slug: "zamok-gardian-25-12-pod-tsilindr-bez-upakovki-57",
    name: "Замок Гардиан 25.12 под цилиндр (без упаковки)",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 58,
    slug: "zamok-gardian-100-11t-58",
    name: "Замок Гардиан 100.11Т",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 59,
    slug: "zamok-gardian-102-11t-bez-tsil-59",
    name: "Замок Гардиан 102.11Т без цил.",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/59.webp"
  },
  {
    id: 60,
    slug: "zamok-gardian-3001-b-nakl-vreznoy-suvaldnyy-korotkiy-4klyucha-60",
    name: "Замок Гардиан 3001 б/накл врезной,сувальдный короткий 4ключа",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 61,
    slug: "zamok-gardian-3201-b-nakl-pod-tsilindr-61",
    name: "Замок Гардиан 3201 б/накл под цилиндр",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/61.webp"
  },
  {
    id: 62,
    slug: "zamok-gardian-32-11-p-meh-pod-ruchku-62",
    name: "Замок Гардиан 32.11 п/мех под ручку",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 18,
    status: 'in_stock',
    image: "/images/62.webp"
  },
  {
    id: 63,
    slug: "zamok-gardian-32-21-p-meh-pod-ruchku-63",
    name: "Замок Гардиан 32.21 п/мех под ручку",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/63.webp"
  },
  {
    id: 64,
    slug: "zamok-vreznoy-gardian-33-11-levyy-p-meh-pod-ruchku-64",
    name: "Замок врезной Гардиан 33.11 левый п/мех,под ручку",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/64.webp"
  },
  {
    id: 65,
    slug: "zamok-vreznoy-gardian-33-11-pravyy-p-meh-pod-ruchku-65",
    name: "Замок врезной Гардиан 33.11 правый п/мех,под ручку",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/65.webp"
  },
  {
    id: 66,
    slug: "zamok-gardian72-16zt-bez-tsilindra-66",
    name: "Замок Гардиан72.16ZT без цилиндра",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 11,
    status: 'in_stock',
    image: "/images/66.webp"
  },
  {
    id: 67,
    slug: "zamok-gardian-75-14-67",
    name: "Замок Гардиан 75.14",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 12,
    status: 'in_stock',
    image: "/images/67.webp"
  },
  {
    id: 68,
    slug: "zamok-gardian-75-14-t-5kl-68",
    name: "Замок Гардиан 75.14 Т 5кл",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 69,
    slug: "zamok-gardian-seriya-profi-351-24-69",
    name: "Замок Гардиан серия Profi 351/24",
    category: "Дверные замки",
    brand: "PROFI",
    stock: 1,
    status: 'in_stock',
    image: "/images/69.webp"
  },
  {
    id: 70,
    slug: "zamok-gardian-soft-11-m-chernyy-70",
    name: "Замок Гардиан SOFT 11 M черный",
    category: "Дверные замки",
    brand: "SOFT",
    stock: 1,
    status: 'in_stock',
    image: "/images/70.webp"
  },
  {
    id: 71,
    slug: "zamok-gardian-soft-11-m-ni-pod-tsilindr-71",
    name: "Замок Гардиан Soft 11 М Ni под цилиндр",
    category: "Цилиндровые механизмы",
    brand: "SOFT",
    stock: 1,
    status: 'in_stock',
    image: "/images/71.webp"
  },
  {
    id: 72,
    slug: "zamok-magnitnyy-inox-mg9250-72",
    name: "Замок магнитный INOX MG9250",
    category: "Дверные замки",
    brand: "INOX",
    stock: 48,
    status: 'in_stock',
    image: "/images/72.webp"
  },
  {
    id: 73,
    slug: "zamok-elektromehanicheskiy-iseo-5s-24-sht-5d-17sht-73",
    name: "Замок электромеханический ISEO (5S-24 шт,5D-17шт)",
    category: "Дверные замки",
    brand: "ISEO",
    stock: 17,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 74,
    slug: "zamok-border-42-74",
    name: "Замок BORDER 42",
    category: "Дверные замки",
    brand: "BORDER",
    stock: 36,
    status: 'in_stock',
    image: "/images/74.webp"
  },
  {
    id: 75,
    slug: "zamok-dl401-55-pz72-rt-reversivnyy-s-zapor-plankoy-75",
    name: "Замок DL401/55 PZ72 Rt реверсивный с запор.планкой",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/75.webp"
  },
  {
    id: 76,
    slug: "zamok-dl403-55-wc-75-76",
    name: "Замок DL403/55 WC 75",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 37,
    status: 'in_stock',
    image: "/images/76.webp"
  },
  {
    id: 77,
    slug: "zamok-stv-seryy-s-magnitnoy-otvet-plankoy-77",
    name: "Замок STV серый с магнитной ответ.планкой",
    category: "Дверные замки",
    brand: "STV",
    stock: 20,
    status: 'in_stock',
    image: "/images/77.webp"
  },
  {
    id: 78,
    slug: "zamok-s-elektron-ruchkoy-s-vidodomofon-chernyy-78",
    name: "Замок с электрон.ручкой с видодомофон,черный",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/78.webp"
  },
  {
    id: 79,
    slug: "zamok-kale-252r-79",
    name: "Замок Кале 252R",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/79.webp"
  },
  {
    id: 80,
    slug: "zamok-vrez-dvuhsistem-54-j919mj-d-meu-keu-mottura-pravyy-80",
    name: "Замок врез.двухсистем. 54.J919MJ-D Meu Keu Моттура правый",
    category: "Дверные замки",
    brand: "MEU",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/80.webp"
  },
  {
    id: 81,
    slug: "zamok-vrez-dvuhsistem-54-j919mj-d-meu-keu-mottura-levyy-81",
    name: "Замок врез.двухсистем. 54.J919MJ-D Meu Keu Моттура левый",
    category: "Дверные замки",
    brand: "MEU",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/81.webp"
  },
  {
    id: 82,
    slug: "zamok-navesnoy-chaz-vs2a-82",
    name: "Замок навесной ЧАЗ ВС2А",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/82.webp"
  },
  {
    id: 83,
    slug: "zamok-vreznoy-basara-a18-01-r-pravyy-s-pryamoug-rige-hrom-83",
    name: "Замок врезной BASARA A18-01 R правый,с прямоуг. риге. хром",
    category: "Дверные замки",
    brand: "BASARA",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/83.png"
  },
  {
    id: 84,
    slug: "zamok-nakladnoy-kodovyyrim-200-code-sn-mat-nikel-ajax-84",
    name: "Замок накладной кодовыйRIM-200 code SN мат. Никель (AJAX)",
    category: "Дверные замки",
    brand: "AJAX",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/84.webp"
  },
  {
    id: 85,
    slug: "zamok-solenoidnogo-tipa-s-taymerom-smartek-st-db-510-mlt-skud-85",
    name: "Замок соленоидного типа с таймером Смартек ST-DB 510 MLT (скуд)",
    category: "Дверные замки",
    brand: "MLT",
    stock: 2,
    status: 'in_stock',
    image: "/images/85.webp"
  },
  {
    id: 86,
    slug: "zamok-motornyy-iseo-28-x1r-easy-s-litsevoy-plankoy-86",
    name: "Замок моторный ISEO 28 X1R EASY с лицевой планкой",
    category: "Дверные замки",
    brand: "ISEO",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/86.webp"
  },
  {
    id: 87,
    slug: "zaschitnyy-chehol-s-molniey-na-vhodnye-dveri-87",
    name: "Защитный чехол с молнией на входные двери",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 32,
    status: 'in_stock',
    image: "/images/87.webp"
  },
  {
    id: 88,
    slug: "zaschelka-magnitnaya-gardian-soft-1-m-nikel-wc-88",
    name: "Защелка магнитная Гардиан SOFT 1 M никель WC",
    category: "Защелки",
    brand: "SOFT",
    stock: 126,
    status: 'in_stock',
    image: "/images/88.webp"
  },
  {
    id: 89,
    slug: "zaschelka-vreznaya-zsch1-3-pravaya-89",
    name: "Защелка врезная ЗЩ1-3 (правая)",
    category: "Защелки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/89.webp"
  },
  {
    id: 90,
    slug: "illyuminator-iz-nerzh-st-f581-440-mm0-90",
    name: "Иллюминатор из нерж.ст.ф581*440(мм0",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/90.webp"
  },
  {
    id: 91,
    slug: "io-102-15-1-datchik-magnito-kontaktnyy-91",
    name: "ИО 102-15/1(датчик магнито-контактный)",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/91.webp"
  },
  {
    id: 92,
    slug: "io-102-6-izveschatel-magnitokontaktnyy0-gp-92",
    name: "ИО 102-6 (извещатель магнитоконтактный0 (ГП)",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 107,
    status: 'in_stock',
    image: "/images/92.webp"
  },
  {
    id: 93,
    slug: "izveschatel-m-kontaktnyy-st-dm030nc-wt-93",
    name: "Извещатель м/контактный ST-DM030NC-WT",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 10,
    status: 'in_stock',
    image: "/images/93.webp"
  },
  {
    id: 94,
    slug: "izveschatel-m-kontaktnyy-st-dm010no-wt-94",
    name: "Извещатель м/контактный ST-DM010NО-WT",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 10,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 95,
    slug: "kabel-6m-ot-el-meh-zamkov-el-420-el-560-95",
    name: "Кабель 6м от эл.мех.замков EL-420-EL 560",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 32,
    status: 'in_stock',
    image: "/images/95.webp"
  },
  {
    id: 96,
    slug: "kabel-kanal-ku-480-96",
    name: "Кабель канал KU 480",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 51,
    status: 'in_stock',
    image: "/images/96.webp"
  },
  {
    id: 97,
    slug: "kabel-kanal-smartek-dorma-97",
    name: "Кабель канал Smartek DORMA",
    category: "Дверная фурнитура",
    brand: "DORMA",
    stock: 1,
    status: 'in_stock',
    image: "/images/97.webp"
  },
  {
    id: 98,
    slug: "kabel-perehod-kp300-98",
    name: "Кабель переход КП300",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 32,
    status: 'in_stock',
    image: "/images/98.webp"
  },
  {
    id: 99,
    slug: "komplekt-ruchek-dlya-kalitki-1para-nakladok-usilennaya-chernyy-99",
    name: "Комплект ручек для калитки+1пара накладок (усиленная,черный)",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 7,
    status: 'in_stock',
    image: "/images/99.webp"
  },
  {
    id: 100,
    slug: "komplekt-nazh-ruchek-core-8100-6051-6612-tolsch-dv-kv-9mm-nerzh-100",
    name: "Комплект наж.ручек CORE 8100/6051/6612 толщ.дв.кв. 9мм нерж.",
    category: "Дверная фурнитура",
    brand: "CORE",
    stock: 9,
    status: 'in_stock',
    image: "/images/100.webp"
  },
  {
    id: 101,
    slug: "komplekt-nazh-ruchek-oqro-8100-7051k-pz-72-tolsch-dv-kv-8mm-nerzh-101",
    name: "Комплект наж.ручек OQRO 8100/7051K PZ/72 толщ.дв.кв. 8мм нерж.",
    category: "Дверная фурнитура",
    brand: "OQRO",
    stock: 1,
    status: 'in_stock',
    image: "/images/101.webp"
  },
  {
    id: 102,
    slug: "komplekt-poruchni-iz-shlif-nerzh-stali-dlya-dverey-102",
    name: "Комплект поручни из шлиф.нерж. Стали для дверей",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 9,
    status: 'in_stock',
    image: "/images/102.webp"
  },
  {
    id: 103,
    slug: "koordinator-sr-392-650-mm-artikul-47000012-103",
    name: "Координатор SR 392 650 мм артикул 47000012",
    category: "Комплектующие для доводчиков",
    brand: "Универсальный",
    stock: 31,
    status: 'in_stock',
    image: "/images/103.webp"
  },
  {
    id: 104,
    slug: "koordinator-g-gsr-v-seryy-art-064102001-104",
    name: "Координатор G-GSR/V серый арт.064102001",
    category: "Комплектующие для доводчиков",
    brand: "GSR",
    stock: 3,
    status: 'in_stock',
    image: "/images/104.webp"
  },
  {
    id: 105,
    slug: "koordinator-g-gsr-v-bg-seryy-art-64144001-105",
    name: "Координатор G-GSR/V/ BG серый арт.64144001",
    category: "Комплектующие для доводчиков",
    brand: "GSR",
    stock: 4,
    status: 'in_stock',
    image: "/images/105.webp"
  },
  {
    id: 106,
    slug: "koordinator-assa-abloy-fd48-100500-dovodchik-2-h-stv-106",
    name: "Координатор ASSA ABLOY FD48 100500(доводчик 2-х ств)",
    category: "Доводчики",
    brand: "ASSA ABLOY",
    stock: 12,
    status: 'in_stock',
    image: "/images/106.webp"
  },
  {
    id: 107,
    slug: "koordinator-notedo-dlya-2-h-stvorchatyh-dverey-posled-zakryv-107",
    name: "Координатор Notedo для 2-х створчатых дверей послед.закрыв.",
    category: "Комплектующие для доводчиков",
    brand: "NOTEDO",
    stock: 1,
    status: 'in_stock',
    image: "/images/107.webp"
  },
  {
    id: 108,
    slug: "korpus-vreznogo-zamka-tsilindrovyysn-08-ajax-otv-planka-prishli-k-zamku-108",
    name: "Корпус врезного замка цилиндровыйСН-08 (AJAX) + отв планка пришли к замку",
    category: "Цилиндровые механизмы",
    brand: "AJAX",
    stock: 1,
    status: 'in_stock',
    image: "/images/108.webp"
  },
  {
    id: 109,
    slug: "kontaktnaya-gruppa-avk-404-tsvet-chernyy-dlya-e-mehan-zamkov-109",
    name: "Контактная группа АВК-404, цвет: черный, для э/механ. замков",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/109.webp"
  },
  {
    id: 110,
    slug: "latun-110",
    name: "Латунь",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/110.webp"
  },
  {
    id: 111,
    slug: "loktevoy-vyklyuchatel-kft-belyy-111",
    name: "Локтевой выключатель KFT белый",
    category: "Дверная фурнитура",
    brand: "KFT",
    stock: 1,
    status: 'in_stock',
    image: "/images/111.webp"
  },
  {
    id: 112,
    slug: "magnitnoe-kreplenie-s-otverstiem-v20-112",
    name: "Магнитное крепление с отверстием В20",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/112.webp"
  },
  {
    id: 113,
    slug: "montazhnaya-plastina-dlya-ksm-113",
    name: "Монтажная пластина для КСМ",
    category: "Комплектующие для доводчиков",
    brand: "Универсальный",
    stock: 300,
    status: 'in_stock',
    image: "/images/113.webp"
  },
  {
    id: 114,
    slug: "nazh-planka-rna-2105-vb-art-01421050004-nerzhav-114",
    name: "Наж. планка РНА 2105 VB арт. 01421050004 (нержав)",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 49,
    status: 'in_stock',
    image: "/images/114.webp"
  },
  {
    id: 115,
    slug: "naklad-pod-tsil-na-krug-osnov-colombo-cc13-co3-mat-chernyy-115",
    name: "Наклад. под цил. На круг.основ.Colombo CC13-CO3 мат.черный",
    category: "Дверная фурнитура",
    brand: "COLOMBO",
    stock: 20,
    status: 'in_stock',
    image: "/images/115.webp"
  },
  {
    id: 116,
    slug: "nakladka-vertushka-0203-inox-dlya-tualeta-116",
    name: "Накладка вертушка 0203-INOX (для туалета)",
    category: "Накладки",
    brand: "INOX",
    stock: 600,
    status: 'in_stock',
    image: "/images/116.webp"
  },
  {
    id: 117,
    slug: "nakladka-vertushka-nora-m-nf-k-grafit-117",
    name: "Накладка вертушка Нора-М НФ-К графит",
    category: "Накладки",
    brand: "Универсальный",
    stock: 6,
    status: 'in_stock',
    image: "/images/117.webp"
  },
  {
    id: 118,
    slug: "nakladka-dekorativnaya-apecs-dp-15-c-crs-118",
    name: "Накладка декоративная Apecs DP-15-C-CRS",
    category: "Накладки",
    brand: "APECS",
    stock: 44,
    status: 'in_stock',
    image: "/images/118.webp"
  },
  {
    id: 119,
    slug: "nakladka-dekor-pod-tsilindr-abriss-et2101-satinir-zoloto-119",
    name: "Накладка декор. под цилиндр ABRISS ET2101 сатинир.золото",
    category: "Цилиндровые механизмы",
    brand: "ABRISS",
    stock: 2,
    status: 'in_stock',
    image: "/images/119.webp"
  },
  {
    id: 120,
    slug: "nakladka-pod-tsil-colombo-kvadrat-ss13-chernyy-120",
    name: "Накладка под цил.Colombo квадрат.СС13 черный",
    category: "Накладки",
    brand: "COLOMBO",
    stock: 6,
    status: 'in_stock',
    image: "/images/120.webp"
  },
  {
    id: 121,
    slug: "nakladka-dlya-ang-zamkacolombo-rosetta-pt13mat-chernyy-121",
    name: "Накладка для анг.замкаColombo Rosetta PT13мат.черный",
    category: "Накладки",
    brand: "ROSETTA",
    stock: 2,
    status: 'in_stock',
    image: "/images/121.webp"
  },
  {
    id: 122,
    slug: "nakladka-na-ruchku-apecs-dp-0-13-bl-122",
    name: "Накладка на ручку Apecs DP-0-13-BL",
    category: "Дверные ручки",
    brand: "APECS",
    stock: 5,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 123,
    slug: "nakladka-na-tsilindr-nora-m-grafit-123",
    name: "Накладка на цилиндр Нора-М графит",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 109,
    status: 'in_stock',
    image: "/images/123.webp"
  },
  {
    id: 124,
    slug: "nakladka-stopor-colombo-rosetta-pt19-chernyy-124",
    name: "Накладка стопор Colombo Rosetta PT19 черный",
    category: "Накладки",
    brand: "COLOMBO",
    stock: 1,
    status: 'in_stock',
    image: "/images/124.webp"
  },
  {
    id: 125,
    slug: "nakladka-pod-suvald-kl-4300-4000-125",
    name: "Накладка под сувальд.кл. 4300+4000",
    category: "Накладки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/125.webp"
  },
  {
    id: 126,
    slug: "nakladka-4300-4010-dekorat-pod-tsilindr-matovyy-hrom-126",
    name: "Накладка 4300+4010 декорат.под цилиндр (матовый хром)",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/126.webp"
  },
  {
    id: 127,
    slug: "nakladka-suvaldnye-code-deco-dp-22-s-auto-nis-127",
    name: "Накладка сувальдные Code Deco DP-22-S-Auto-NIS",
    category: "Накладки",
    brand: "CODE",
    stock: 2,
    status: 'in_stock',
    image: "/images/127.webp"
  },
  {
    id: 128,
    slug: "nakladka-tsilindrovaya-code-deco-dp-c-14-nis-128",
    name: "Накладка цилиндровая CODE DECO DP-C-14- NIS",
    category: "Цилиндровые механизмы",
    brand: "CODE",
    stock: 9,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 129,
    slug: "nakladka-tsilindrovaya-code-deco-slim-dp-c-30-blm-129",
    name: "Накладка цилиндровая CODE DECO Slim DP-C-30-BLM",
    category: "Цилиндровые механизмы",
    brand: "CODE",
    stock: 4,
    status: 'in_stock',
    image: "/images/129.webp"
  },
  {
    id: 130,
    slug: "nakladka-pod-tsm-dekorativnaya-dp-c-22-blm-mat-chern-130",
    name: "Накладка под цм декоративная DP-C-22-BLM мат.черн.",
    category: "Накладки",
    brand: "BLM",
    stock: 1,
    status: 'in_stock',
    image: "/images/130.webp"
  },
  {
    id: 131,
    slug: "nakladka-dvernaya-pod-tsilindr-apecs-dp-c-02-131",
    name: "Накладка дверная под цилиндр Apecs DP-C-02",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 19,
    status: 'in_stock',
    image: "/images/131.webp"
  },
  {
    id: 132,
    slug: "nakladka-dvernaya-pod-tsilindr-apecs-dp-c-06-hrom-132",
    name: "Накладка дверная под цилиндр Apecs DP-C-06 хром",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 100,
    status: 'in_stock',
    image: "/images/132.webp"
  },
  {
    id: 133,
    slug: "nakladka-dvernaya-pod-tsilindr-kvadrat-forme-chern-mat-133",
    name: "Накладка дверная под цилиндр квадрат.FORME черн.мат.",
    category: "Цилиндровые механизмы",
    brand: "FORME",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/133.webp"
  },
  {
    id: 134,
    slug: "nakonechnik-dlya-tyag-dl1932-134",
    name: "Наконечник для тяг (DL1932)",
    category: "Комплектующие для доводчиков",
    brand: "Универсальный",
    stock: 30,
    status: 'in_stock',
    image: "/images/134.webp"
  },
  {
    id: 135,
    slug: "ognestoykiy-dvern-zamok-eso-gbs-81-nerzhav-st-135",
    name: "Огнестойкий дверн.замок ЕСО GBS 81 нержав.ст.",
    category: "Дверные замки",
    brand: "GBS",
    stock: 1,
    status: 'in_stock',
    image: "/images/270.webp"
  },
  {
    id: 136,
    slug: "ogranichitel-otkryvaniya-460mm-136",
    name: "Ограничитель открывания 460мм",
    category: "Упоры и ограничители",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 137,
    slug: "ogranichitel-dvernoy-ds3-sc-mat-hrom-137",
    name: "Ограничитель дверной DS3 SC мат.хром",
    category: "Упоры и ограничители",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/137.webp"
  },
  {
    id: 138,
    slug: "otvetnaya-planka-magnitnaya-3vm-seraya-138",
    name: "Ответная планка магнитная 3ВМ серая",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 18,
    status: 'in_stock',
    image: "/images/138.webp"
  },
  {
    id: 139,
    slug: "otv-pl-pryam-magnitnaya-dlya-zamka-mg9235-9250-139",
    name: "Отв.пл.прям.магнитная для замка MG9235 9250",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 68,
    status: 'in_stock',
    image: "/images/139.webp"
  },
  {
    id: 140,
    slug: "otvet-planka-020-skr-140",
    name: "Ответ.планка 020 скр",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 58,
    status: 'in_stock',
    image: "/images/140.webp"
  },
  {
    id: 141,
    slug: "otvetnaya-planka-iseo-141",
    name: "Ответная планка ISEO",
    category: "Дверная фурнитура",
    brand: "ISEO",
    stock: 71,
    status: 'in_stock',
    image: "/images/141.webp"
  },
  {
    id: 142,
    slug: "otvetnaya-plastina-nizhney-tyagi-pha2122-0-142",
    name: "Ответная пластина нижней тяги PHA2122-0",
    category: "Дверная фурнитура",
    brand: "PHA",
    stock: 90,
    status: 'in_stock',
    image: "/images/142.webp"
  },
  {
    id: 143,
    slug: "otvetnaya-chast-dlya-porogov-143",
    name: "Ответная часть для порогов",
    category: "Дверные пороги",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/143.webp"
  },
  {
    id: 144,
    slug: "pereklyuchatel-elbow-contact-switch-belyy-144",
    name: "Переключатель ELBOW Contact Switch белый",
    category: "Дверная фурнитура",
    brand: "ELBOW",
    stock: 1,
    status: 'in_stock',
    image: "/images/294.webp"
  },
  {
    id: 145,
    slug: "petli-border-babochka-145",
    name: "Петли BORDER бабочка",
    category: "Дверные петли",
    brand: "BORDER",
    stock: 4735,
    status: 'in_stock',
    image: "/images/145.webp"
  },
  {
    id: 146,
    slug: "petlya-skrytaya-univer-semom-estetic-130-8-3d-8060mat-hr-130kg-146",
    name: "Петля скрытая универ.СЕМОМ ESTETIC 130+8 3D 8060мат.хр.,130кг",
    category: "Дверные петли",
    brand: "ESTETIC",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/146.webp"
  },
  {
    id: 147,
    slug: "petli-vvertnye-apecs-147",
    name: "Петли ввертные Apecs",
    category: "Дверные петли",
    brand: "APECS",
    stock: 120,
    status: 'in_stock',
    image: "/images/147.webp"
  },
  {
    id: 148,
    slug: "petli-nora-m-babochka-148",
    name: "Петли Нора-М бабочка",
    category: "Дверные петли",
    brand: "Универсальный",
    stock: 18,
    status: 'in_stock',
    image: "/images/148.webp"
  },
  {
    id: 149,
    slug: "petli-skrytye-morelli-serye-nn-18-anselmi-s-nakladkami-1-4-149",
    name: "Петли скрытые MORELLI серые НН-18 Anselmi с накладками 1-4",
    category: "Дверные петли",
    brand: "MORELLI",
    stock: 153,
    status: 'in_stock',
    image: "/images/149.webp"
  },
  {
    id: 150,
    slug: "petli-skrytye-morelli-belye-nn-18-anselmi-s-nakladkami-1-4-150",
    name: "Петли скрытые MORELLI белые НН-18 Anselmi с накладками 1-4",
    category: "Дверные петли",
    brand: "MORELLI",
    stock: 183,
    status: 'in_stock',
    image: "/images/150.webp"
  },
  {
    id: 151,
    slug: "petlya-skrytaya-dircode-chernyy-151",
    name: "Петля скрытая Dircode ,черный",
    category: "Дверные петли",
    brand: "DIRCODE",
    stock: 2,
    status: 'in_stock',
    image: "/images/151.webp"
  },
  {
    id: 152,
    slug: "petli-amig-152",
    name: "Петли AMIG",
    category: "Дверные петли",
    brand: "AMIG",
    stock: 6,
    status: 'in_stock',
    image: "/images/152.webp"
  },
  {
    id: 153,
    slug: "petlya-vreznaya-apecs110-30-3d-z-c-rm-153",
    name: "Петля врезная Apecs110*30-3D-Z-C RM",
    category: "Дверные петли",
    brand: "APECS",
    stock: 2,
    status: 'in_stock',
    image: "/images/153.webp"
  },
  {
    id: 154,
    slug: "petlya-vreznaya-apecs115-3d-z-c-rm-154",
    name: "Петля врезная Apecs115-3D-Z-C RM",
    category: "Дверные петли",
    brand: "APECS",
    stock: 2,
    status: 'in_stock',
    image: "/images/154.webp"
  },
  {
    id: 155,
    slug: "petlya-pruzhinnaya-mayatnikovaya-155-50mm-otsink-art-87-aldechi-155",
    name: "Петля пружинная маятниковая 155*50мм оцинк.арт.87 (ALDECHI)",
    category: "Дверные петли",
    brand: "ALDECHI",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/155.webp"
  },
  {
    id: 156,
    slug: "petlya-garazhnaya-s-sharom-140-25-156",
    name: "Петля гаражная с шаром 140*25",
    category: "Дверные петли",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/156.webp"
  },
  {
    id: 157,
    slug: "petlya-garazhnaya-s-sharom-160-25-157",
    name: "Петля гаражная с шаром 160*25",
    category: "Дверные петли",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/157.webp"
  },
  {
    id: 158,
    slug: "petlya-garazhnaya-s-sharom-25-110-158",
    name: "Петля гаражная с шаром 25*110",
    category: "Дверные петли",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/158.webp"
  },
  {
    id: 159,
    slug: "petli-simonswerk-te340-3d-seryy-159",
    name: "Петли SIMONSWERK ТЕ340-3D серый",
    category: "Дверные петли",
    brand: "SIMONSWERK",
    stock: 40,
    status: 'in_stock',
    image: "/images/159.webp"
  },
  {
    id: 160,
    slug: "petlya-skryt-tectus-te-541-3d-seryy-hrom-matovyy-160",
    name: "Петля скрыт.TECTUS TE 541 3D серый (хром матовый)",
    category: "Дверные петли",
    brand: "TECTUS",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/160.webp"
  },
  {
    id: 161,
    slug: "petlya-skryt-tectus-te-640-3d-seryy-161",
    name: "Петля скрыт. TECTUS TE 640 3D серый",
    category: "Дверные петли",
    brand: "TECTUS",
    stock: 6,
    status: 'in_stock',
    image: "/images/161.webp"
  },
  {
    id: 162,
    slug: "petlya-skrytaya-tectus-te-640-3d-okrash-ral9005-matovyy-chernyy-162",
    name: "Петля скрытая TECTUS TE 640 3D (окраш.RAL9005)матовый черный",
    category: "Дверные петли",
    brand: "TECTUS",
    stock: 9,
    status: 'in_stock',
    image: "/images/162.webp"
  },
  {
    id: 163,
    slug: "petlya-skrytaya-vl-band-180-matovyy-hrom-163",
    name: "Петля скрытая VL Band 180 матовый хром",
    category: "Дверные петли",
    brand: "BAND",
    stock: 3,
    status: 'in_stock',
    image: "/images/163.webp"
  },
  {
    id: 164,
    slug: "petlya-skrytaya-otlav-in570-serebro-matovoe-164",
    name: "Петля скрытая OTLAV IN570 серебро матовое",
    category: "Дверные петли",
    brand: "OTLAV",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/164.webp"
  },
  {
    id: 165,
    slug: "petlya-skrytaya-assimetrichnaya-dlya-dverey-tolschinoy-38mm-chernyy-165",
    name: "Петля скрытая ассиметричная ,для дверей толщиной 38мм,черный",
    category: "Дверные петли",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/165.webp"
  },
  {
    id: 166,
    slug: "petlya-ibfm-754-pla2b-166",
    name: "Петля IBFM 754 PLA2B",
    category: "Дверные петли",
    brand: "IBFM",
    stock: 943,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 167,
    slug: "planka-litsevaya-ploskaya-flm25-easy-adapt-artikul-15180925-167",
    name: "Планка лицевая плоская FLM25-Easy Adapt артикул 15180925",
    category: "Дверная фурнитура",
    brand: "EASY",
    stock: 1,
    status: 'in_stock',
    image: "/images/167.webp"
  },
  {
    id: 168,
    slug: "planka-litsevaya-ploskaya-fkm25-xs-easy-adapt-artikul-15180937-168",
    name: "Планка лицевая плоская FКM25 XS -Easy Adapt артикул 15180937",
    category: "Дверная фурнитура",
    brand: "EASY",
    stock: 7,
    status: 'in_stock',
    image: "/images/168.webp"
  },
  {
    id: 169,
    slug: "planka-ploskaya-fkm24-artikul-15180424-169",
    name: "Планка плоская FKМ24 артикул 15180424",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 170,
    slug: "planka-ploskaya-fkh24-artikul-15180324-170",
    name: "Планка плоская FKH24 артикул 15180324",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 63,
    status: 'in_stock',
    image: "/images/231.webp"
  },
  {
    id: 171,
    slug: "planka-litsevaya-ploskaya-fkm25-xs-easy-adapt-25-135-3-171",
    name: "Планка лицевая плоская FКM25 XS -Easy Adapt 25*135*3",
    category: "Дверная фурнитура",
    brand: "EASY",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/171.webp"
  },
  {
    id: 172,
    slug: "planka-zagotovka-172",
    name: "Планка заготовка",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 30,
    status: 'in_stock',
    image: "/images/172.webp"
  },
  {
    id: 173,
    slug: "povorotnik-apecs-tt-0705-8-75-ab-173",
    name: "Поворотник Apecs TT-0705-8/75-AB",
    category: "Дверная фурнитура",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/173.webp"
  },
  {
    id: 174,
    slug: "povorotnik-tt-1403-8-75-nis-code-deco-174",
    name: "Поворотник ТТ-1403-8/75- NIS CODE DECO",
    category: "Дверная фурнитура",
    brand: "NIS",
    stock: 21,
    status: 'in_stock',
    image: "/images/174.webp"
  },
  {
    id: 175,
    slug: "povorotnik-apecs-tt-1516-8-75-cr-175",
    name: "Поворотник Apecs TT-1516-8/75-CR",
    category: "Дверная фурнитура",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/175.webp"
  },
  {
    id: 176,
    slug: "porog-avtom-p-pozharnyy-uplotnitel-176",
    name: "Порог автом.п/пожарный (уплотнитель)",
    category: "Дверные пороги",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/176.webp"
  },
  {
    id: 177,
    slug: "porog-flat-12-20-1020mm-177",
    name: "Порог FLAT (12*20)1020mm",
    category: "Дверные пороги",
    brand: "FLAT",
    stock: 1,
    status: 'in_stock',
    image: "/images/177.webp"
  },
  {
    id: 178,
    slug: "porog-forbsa-mini-12-12-1020mm-178",
    name: "Порог FORBSA MINI (12*12) 1020mm",
    category: "Дверные пороги",
    brand: "FORBSA",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/178.webp"
  },
  {
    id: 179,
    slug: "programnyy-pereklyuchatel-es-vneshniy-art-135602150-179",
    name: "Програмный переключатель ES внешний арт.135602150",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/179.webp"
  },
  {
    id: 180,
    slug: "rolikovyy-fiksator-r-0002-cr-apecs-180",
    name: "Роликовый фиксатор R-0002-CR Apecs",
    category: "Фиксаторы",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/180.webp"
  },
  {
    id: 181,
    slug: "ruchka-komplekt-hoppe-e138z-42kv-kvs-pz-f69-pod-tsil-kvad-8mm-181",
    name: "Ручка комплект HOPPE E138Z/42KV/KVS PZ F69 под цил. Квад.8мм",
    category: "Дверные ручки",
    brand: "HOPPE",
    stock: 16,
    status: 'in_stock',
    image: "/images/181.webp"
  },
  {
    id: 182,
    slug: "ruchka-dvernaya-stalnaya-110mm-182",
    name: "Ручка дверная стальная 110мм",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/182.webp"
  },
  {
    id: 183,
    slug: "ruchka-s-fiksatorom-codedeco-y-14105-a-blm-mat-chern-183",
    name: "Ручка с фиксатором CodeDeco Y-14105 A-BLM мат.черн.",
    category: "Дверные ручки",
    brand: "CODEDECO",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 184,
    slug: "ruchka-dvernaya-code-deko-slim-h-30115-a-blm-chernyy-184",
    name: "Ручка дверная Code Deko Slim H-30115-A-BLM черный",
    category: "Дверные ручки",
    brand: "CODE",
    stock: 4,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 185,
    slug: "ruchka-dvern-v-kompl-fuaro-red-line-rl-ssc-16-chernyy-185",
    name: "Ручка дверн.в компл Fuaro Red Line Rl SSC-16 черный",
    category: "Дверные ручки",
    brand: "FUARO",
    stock: 74,
    status: 'in_stock',
    image: "/images/185.webp"
  },
  {
    id: 186,
    slug: "ruchka-dvernaya-na-korotkoy-naklad-dl038-u-s-otverstiem-dlya-tsilindra-186",
    name: "Ручка дверная на короткой наклад.DL038 /U с отверстием для цилиндра",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 5,
    status: 'in_stock',
    image: "/images/186.webp"
  },
  {
    id: 187,
    slug: "ruchka-dvernaya-na-rozetke-dl-040-f-55-pz-l-doorlock-187",
    name: "Ручка дверная на розетке DL 040/F-55 PZ L Doоrlock",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/187.webp"
  },
  {
    id: 188,
    slug: "ruchka-dvernaya-na-kruglom-rozetke-1230-solaris-q8-r-sb-satin-188",
    name: "Ручка дверная на круглом розетке 1230 Solaris Q8 R/SB сатин",
    category: "Дверные ручки",
    brand: "SOLARIS",
    stock: 1,
    status: 'in_stock',
    image: "/images/188.webp"
  },
  {
    id: 189,
    slug: "ruchka-dvernaya-nora-m-grafit-108-kal-189",
    name: "Ручка дверная Нора-М графит 108 КАL",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 58,
    status: 'in_stock',
    image: "/images/189.webp"
  },
  {
    id: 190,
    slug: "ruchka-dvernaya-apecs-h-0203-bl-dp-c-02chernyy-190",
    name: "Ручка дверная Apecs H-0203-BL(DP-C-02черный)",
    category: "Дверные ручки",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/190.webp"
  },
  {
    id: 191,
    slug: "ruchka-dvernaya-forme-na-kvad-rozetke254-req-chernyy-191",
    name: "Ручка дверная Forme на квад.розетке254 REQ черный",
    category: "Дверные ручки",
    brand: "FORME",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/191.webp"
  },
  {
    id: 192,
    slug: "ruchka-dvernaya-forme-422-rfq-51119-matovaya-bronza-192",
    name: "Ручка дверная Forme 422 RFQ 51119 матовая бронза",
    category: "Дверные ручки",
    brand: "FORME",
    stock: 3,
    status: 'in_stock',
    image: "/images/192.webp"
  },
  {
    id: 193,
    slug: "ruchka-dvernaya-hafele-startec-ldh-2171-193",
    name: "Ручка дверная HAFELE Startec LDH 2171",
    category: "Дверные ручки",
    brand: "HAFELE",
    stock: 5,
    status: 'in_stock',
    image: "/images/193.webp"
  },
  {
    id: 194,
    slug: "ruchka-na-planke-apeks-nr-o-1303-inoks-nerzhav-194",
    name: "Ручка на планке Апекс НР-О-1303-ИНОКС нержав.",
    category: "Дверные ручки",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 195,
    slug: "ruchka-na-planke-pure-8906-7051-dorma-195",
    name: "Ручка на планке PURE 8906/7051 DORMA",
    category: "Дверные ручки",
    brand: "DORMA",
    stock: 32,
    status: 'in_stock',
    image: "/images/195.webp"
  },
  {
    id: 196,
    slug: "ruchka-razdelnaya-apecs-0201-inox-hrom-196",
    name: "Ручка раздельная Apecs 0201-INOX хром",
    category: "Дверные ручки",
    brand: "APECS",
    stock: 13,
    status: 'in_stock',
    image: "/images/196.webp"
  },
  {
    id: 197,
    slug: "ruchka-razdelnaya-pyramide-velox-fix-bronza-mat-s-2-mya-rozetkami-55mm-197",
    name: "Ручка раздельная Pyramide Velox-FIX БРОНЗА МАТ.(С 2-МЯ РОЗеТКАМИ 55ММ)",
    category: "Дверные ручки",
    brand: "PYRAMIDE",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/197.webp"
  },
  {
    id: 198,
    slug: "ruchka-razdelnaya-arena-velox-fix-matovyy-hrom-55mm-198",
    name: "Ручка раздельная Arena Velox-FIX матовый хром.( 55ММ)",
    category: "Дверные ручки",
    brand: "ARENA",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/198.webp"
  },
  {
    id: 199,
    slug: "ruchka-dvern-formani-basics-lb-19-matirov-nerzh-st-199",
    name: "Ручка дверн.Formani BASICS LB -19 матиров.нерж.ст.",
    category: "Дверные ручки",
    brand: "FORMANI",
    stock: 1,
    status: 'in_stock',
    image: "/images/199.webp"
  },
  {
    id: 200,
    slug: "ruchka-povorot-formani-basics-lbwc-50-matirov-nerzh-st-200",
    name: "Ручка поворот..Formani BASICS LBWC 50 матиров.нерж.ст.",
    category: "Дверные ручки",
    brand: "FORMANI",
    stock: 1,
    status: 'in_stock',
    image: "/images/200.webp"
  },
  {
    id: 201,
    slug: "ruchka-fratelli-cattini-nevada-7-mat-hrom-201",
    name: "Ручка Fratelli Cattini Невада-7 мат.хром",
    category: "Дверные ручки",
    brand: "FRATELLI",
    stock: 1,
    status: 'in_stock',
    image: "/images/201.webp"
  },
  {
    id: 202,
    slug: "ruchka-inox-gc-105-na-kruglyh-rozetkah-franfurkt-chernyy-202",
    name: "Ручка INOX GC 105 на круглых розетках Franfurkt черный",
    category: "Дверные ручки",
    brand: "INOX",
    stock: 93,
    status: 'in_stock',
    image: "/images/202.webp"
  },
  {
    id: 203,
    slug: "ruchka-presto-3-16-spets-versiya-203",
    name: "Ручка PRESTO 3-16 спец версия",
    category: "Дверные ручки",
    brand: "PRESTO",
    stock: 3,
    status: 'in_stock',
    image: "/images/203.webp"
  },
  {
    id: 204,
    slug: "ruchka-povorotnaya-vk6-k-zq51-bl-24-chernyy-punto-41069-204",
    name: "Ручка поворотная ВК6.К.ZQ51 BL-24 черный (PUNTO) (41069)",
    category: "Дверные ручки",
    brand: "PUNTO",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/204.webp"
  },
  {
    id: 205,
    slug: "schitok-lh042-205",
    name: "Щиток LH042",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/205.webp"
  },
  {
    id: 206,
    slug: "pokraska-v-tsvet-color-charge-mus-chernyy-206",
    name: "Покраска в цвет COLOR charge Mus (черный)",
    category: "Дверная фурнитура",
    brand: "COLOR",
    stock: 3,
    status: 'in_stock',
    image: "/images/206.webp"
  },
  {
    id: 207,
    slug: "sinhronizator-zakryv-eso-sr-basis-dlya-2-h-stvorchatoy-dveri-koord-207",
    name: "Синхронизатор закрыв. ЕСО SR-Basis для 2-х створчатой двери Коорд.",
    category: "Комплектующие для доводчиков",
    brand: "BASIS",
    stock: 3,
    status: 'in_stock',
    image: "/images/207.webp"
  },
  {
    id: 208,
    slug: "skolzyaschaya-tyaga-assa-abloy-g-143-208",
    name: "Скользящая тяга ASSA Abloy G-143",
    category: "Комплектующие для доводчиков",
    brand: "ASSA ABLOY",
    stock: 1,
    status: 'in_stock',
    image: "/images/208.webp"
  },
  {
    id: 209,
    slug: "skolzyaschaya-tyaga-assa-abloy-g-195-209",
    name: "Скользящая тяга ASSA Abloy G-195",
    category: "Комплектующие для доводчиков",
    brand: "ASSA ABLOY",
    stock: 22,
    status: 'in_stock',
    image: "/images/209.webp"
  },
  {
    id: 210,
    slug: "skolzyaschaya-tyaga-assa-abloy-g-892-210",
    name: "Скользящая тяга ASSA Abloy G-892",
    category: "Комплектующие для доводчиков",
    brand: "ASSA ABLOY",
    stock: 17,
    status: 'in_stock',
    image: "/images/210.webp"
  },
  {
    id: 211,
    slug: "soedinitelnyy-kabel-svp-a-1100-art-070932992-211",
    name: "Соединительный кабель SVP-A 1100 арт.070932992",
    category: "Дверная фурнитура",
    brand: "SVP",
    stock: 39,
    status: 'in_stock',
    image: "/images/211.webp"
  },
  {
    id: 212,
    slug: "tolkatel-assa-abloy-fd101-212",
    name: "Толкатель ASSA Abloy FD101",
    category: "Комплектующие для доводчиков",
    brand: "ASSA ABLOY",
    stock: 13,
    status: 'in_stock',
    image: "/images/212.webp"
  },
  {
    id: 213,
    slug: "udlinitel-polnyy-dvernogo-glazka-ex-dv-1-3-chernaya-plastmas-213",
    name: "Удлинитель полный дверного глазка EX DV-1/3 черная пластмас.",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 635,
    status: 'in_stock',
    image: "/images/213.webp"
  },
  {
    id: 214,
    slug: "udlinitel-polnyy-dv-glazka-hdve-14-30-214",
    name: "Удлинитель полный дв.глазка HDVE-14/30",
    category: "Дверная фурнитура",
    brand: "HDVE",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/214.webp"
  },
  {
    id: 215,
    slug: "udlinyayuschiy-sterzhen-dlya-verhney-tochki-zapiraniya-rna-2160-215",
    name: "Удлиняющий стержень для верхней точки запирания РНА 2160",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/215.webp"
  },
  {
    id: 216,
    slug: "udlinyayuschiy-sterzhen-dlya-nizhney-tochki-zapiraniya-rna-2161-216",
    name: "Удлиняющий стержень для нижней точки запирания РНА 2161",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/216.webp"
  },
  {
    id: 217,
    slug: "uplotnitel-dveri-rg-031-1-v-babine-120m-217",
    name: "Уплотнитель двери РГ-031 ( 1 в бабине 120м )",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 120,
    status: 'in_stock',
    image: "/images/217.webp"
  },
  {
    id: 218,
    slug: "uplotnitel-dveri-rg-127-1-v-babine-180m-218",
    name: "Уплотнитель двери РГ-127 ( 1 в бабине 180м )",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 180,
    status: 'in_stock',
    image: "/images/218.webp"
  },
  {
    id: 219,
    slug: "uplotnitel-chernyy-110-34-r-obraznyy-219",
    name: "Уплотнитель черный 110/34 Р-образный",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/219.webp"
  },
  {
    id: 220,
    slug: "uplotnitel-belyy-110-3-4-220",
    name: "Уплотнитель белый 110/3,4",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 800,
    status: 'in_stock',
    image: "/images/220.webp"
  },
  {
    id: 221,
    slug: "uplotnitel-uk-117f-seryy-uf-i-os-ultrafioleto-i-ozonostoykiy-221",
    name: "Уплотнитель УК-117Ф серый УФ и ОС (ультрафиолето и озоностойкий)",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 185,
    status: 'in_stock',
    image: "/images/221.webp"
  },
  {
    id: 222,
    slug: "uplotnitel-samokleyuschiysya-chernyy-shaper-gn-319-1-po-500m-222",
    name: "Уплотнитель самоклеющийся черный Shaper GN 319 (1 по 500м)",
    category: "Уплотнители",
    brand: "SHAPER",
    stock: 229,
    status: 'in_stock',
    image: "/images/222.webp"
  },
  {
    id: 223,
    slug: "uplotnitel-seryy-shpulya-223",
    name: "Уплотнитель серый Шпуля",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 250,
    status: 'in_stock',
    image: "/images/223.webp"
  },
  {
    id: 224,
    slug: "uplotnitel-chernyy-d-profil-9-8mm-100m-1sht-224",
    name: "Уплотнитель черный D-профиль,9*8мм(100м)-1шт",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 100,
    status: 'in_stock',
    image: "/images/224.webp"
  },
  {
    id: 225,
    slug: "uplotnitelnyy-profil-ograks-p-16-220-0-10-0-3-0-2-0-pog-m-225",
    name: "Уплотнительный профиль Огракс-П №16(220,0*10,0*3,0*2,0) пог.м",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 20,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 226,
    slug: "uplotnitel-termorasshiryayuschiysya-15-1-5-100000-226",
    name: "Уплотнитель терморасширяющийся 15*1,5*100000",
    category: "Уплотнители",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/226.webp"
  },
  {
    id: 227,
    slug: "upor-dvernoy-napoln-stopper-14-ds-14-fuaro-chernyy-227",
    name: "Упор дверной напольн.STOPPER /14(DS-14) (FUARO) черный",
    category: "Упоры и ограничители",
    brand: "FUARO",
    stock: 1,
    status: 'in_stock',
    image: "/images/227.webp"
  },
  {
    id: 228,
    slug: "upor-dvernoy-dl-ds-005-ss-napolnyy-f-60mm-228",
    name: "Упор дверной DL DS 005 SS,напольный Ф 60мм",
    category: "Упоры и ограничители",
    brand: "Универсальный",
    stock: 2,
    status: 'in_stock',
    image: "/images/228.webp"
  },
  {
    id: 229,
    slug: "upor-dvernoy-ds-0014-nis-matovyy-nikel-229",
    name: "Упор дверной DS 0014-NIS матовый никель",
    category: "Упоры и ограничители",
    brand: "NIS",
    stock: 4,
    status: 'in_stock',
    image: "/images/229.webp"
  },
  {
    id: 230,
    slug: "ustroystvo-d-otpechatyvaniya-revilasil-maksi-chernye-230",
    name: "Устройство д/отпечатывания «Ревиласил Макси» черные",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/230.webp"
  },
  {
    id: 231,
    slug: "uderzhivayuschaya-plastina-dlya-ems-600-alh-231",
    name: "Удерживающая пластина для ЕМС 600 ALH",
    category: "Дверная фурнитура",
    brand: "ALH",
    stock: 4,
    status: 'in_stock',
    image: "/images/231.webp"
  },
  {
    id: 232,
    slug: "m-sil-d-otpechatyvaemyh-ustroystv-21-5-11-2-5mm-belye-232",
    name: "М-Сил д/отпечатываемых устройств,21,5*11*2,5мм,белые",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 218,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 233,
    slug: "fiksator-otkrytogo-polozheniya-ts90-233",
    name: "Фиксатор открытого положения TS90",
    category: "Фиксаторы",
    brand: "Универсальный",
    stock: 6,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 234,
    slug: "fiksator-otkrytogo-polozheniya-dlya-skolz-kanala-g96n-fop-234",
    name: "Фиксатор открытого положения для скольз.канала G96N (ФОП)",
    category: "Фиксаторы",
    brand: "Универсальный",
    stock: 46,
    status: 'in_stock',
    image: "/images/234.webp"
  },
  {
    id: 235,
    slug: "fiksator-otkrytogo-polozheniya-dlya-skolz-kanala-g-n-fop-komplekt-235",
    name: "Фиксатор открытого положения для скольз.канала G-N (ФОП) комплект",
    category: "Фиксаторы",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/235.webp"
  },
  {
    id: 236,
    slug: "fiksator-avers-wc-1403-nis-6mm-236",
    name: "Фиксатор Avers WC-1403-Nis -6мм",
    category: "Фиксаторы",
    brand: "AVERS",
    stock: 2,
    status: 'in_stock',
    image: "/images/236.webp"
  },
  {
    id: 237,
    slug: "fiksator-code-deco-wc-2207-crm-cr-237",
    name: "Фиксатор Code Deco WC-2207-CRM/CR",
    category: "Фиксаторы",
    brand: "CODE",
    stock: 1,
    status: 'in_stock',
    image: "/images/237.webp"
  },
  {
    id: 238,
    slug: "tsil-inox-30-30-povorot-knopka-meh-zm-razblok-238",
    name: "Цил.INOX 30*30 поворот. кнопка/мех-зм разблок",
    category: "Цилиндровые механизмы",
    brand: "INOX",
    stock: 41,
    status: 'in_stock',
    image: "/images/238.webp"
  },
  {
    id: 239,
    slug: "tsm-60-2201-22-05-60-30-30-kl-kl-pod-3-gran-k-apecs-239",
    name: "Цм 60 2201.22.05-60 (30*30) кл/кл под 3-гран.к Apecs",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 2,
    status: 'in_stock',
    image: "/images/239.webp"
  },
  {
    id: 240,
    slug: "ts-m-vanger-el-60nikel-kl-vert-25-10-25-240",
    name: "Ц/м Vanger EL-60никель кл/верт 25/10/25",
    category: "Цилиндровые механизмы",
    brand: "VANGER",
    stock: 12,
    status: 'in_stock',
    image: "/images/240.webp"
  },
  {
    id: 241,
    slug: "ts-m-avers-70-30-40hrom25-10-35-241",
    name: "Ц/м Avers 70 30/40хром25/10/35",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 7,
    status: 'in_stock',
    image: "/images/241.webp"
  },
  {
    id: 242,
    slug: "ts-m-avers-80-kl-kl-30-50vert-242",
    name: "Ц/м Avers 80 кл/кл 30/50верт",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/242.webp"
  },
  {
    id: 243,
    slug: "ts-m-avers-80-45-vert-35-kl-243",
    name: "Ц/м Avers 80 45 верт/35 кл",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 1,
    status: 'in_stock',
    image: "/images/243.webp"
  },
  {
    id: 244,
    slug: "ts-m-avers-85-kl-kl-35-50-hrom-244",
    name: "Ц/м Avers 85 кл/кл 35/50 хром",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 320,
    status: 'in_stock',
    image: "/images/244.webp"
  },
  {
    id: 245,
    slug: "ts-m-avers-90-40-50-kl-kl-245",
    name: "Ц/м Аверс 90 40/50 кл/кл",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 3,
    status: 'in_stock',
    image: "/images/245.webp"
  },
  {
    id: 246,
    slug: "ts-m-avers-90-45-45-kl-kl-hrom-246",
    name: "Ц/м Avers 90 45/45 кл/кл хром",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 3,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 247,
    slug: "ts-m-avers-90-45-45-kl-vertushka-hrom-247",
    name: "Ц/М Avers 90 45/45 кл/вертушка хром",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 8,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 248,
    slug: "ts-m-avers-95-30-vert-65-kl-chernyy-248",
    name: "Ц/м Avers 95 30 верт/65 кл черный",
    category: "Цилиндровые механизмы",
    brand: "AVERS",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/248.webp"
  },
  {
    id: 249,
    slug: "tsm-avers-100-45-55-s-kl-vert-hrom-45-55kl-vert-249",
    name: "ЦМ Аверс 100 (45/55 С) кл/верт хром (45/55кл/верт)",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/249.webp"
  },
  {
    id: 250,
    slug: "tsm-avers-120-60-60-kl-vert-250",
    name: "ЦМ Аверс 120 60/60 кл /верт",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 251,
    slug: "tsm-apecs-sm-110-50-60-kl-kl-nikel-251",
    name: "Цм Apecs SM-110 50/60 кл/кл никель",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/251.webp"
  },
  {
    id: 252,
    slug: "tsm-apecs-sm-130-65-65-kl-kl-252",
    name: "Цм Apecs SM-130(65/65 ) кл/кл",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 1,
    status: 'in_stock',
    image: "/images/252.webp"
  },
  {
    id: 253,
    slug: "ts-m-apecs-premier-xp-100-35-65-kl-kl-nikel-253",
    name: "Ц/м Apecs Premier XP-100 35/65 кл/кл никель",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/253.webp"
  },
  {
    id: 254,
    slug: "ts-m-apecs-premier-xp-80-35-45-kl-kl-nikel-254",
    name: "Ц/м Apecs Premier XP-80 35/45 кл/кл никель",
    category: "Цилиндровые механизмы",
    brand: "APECS",
    stock: 6,
    status: 'in_stock',
    image: "/images/254.webp"
  },
  {
    id: 255,
    slug: "ts-m-vettore-80-30-50-kl-kl-25-10-45-255",
    name: "Ц/м VETTORE 80 30/50 кл/кл (25/10/45)",
    category: "Цилиндровые механизмы",
    brand: "VETTORE",
    stock: 295,
    status: 'in_stock',
    image: "/images/255.webp"
  },
  {
    id: 256,
    slug: "ts-m-vettore-100-35-65-kl-kl-256",
    name: "Ц/м VETTORE 100 35/65 кл/кл",
    category: "Цилиндровые механизмы",
    brand: "VETTORE",
    stock: 14,
    status: 'in_stock',
    image: "/images/256.webp"
  },
  {
    id: 257,
    slug: "ts-m-vettore-100-45-55-kl-kl-257",
    name: "Ц/м VETTORE 100 45/55 кл/кл",
    category: "Цилиндровые механизмы",
    brand: "VETTORE",
    stock: 32,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 258,
    slug: "ts-m-vettore-110-55-55-kl-kl-258",
    name: "Ц/м VETTORE 110 55/55 кл/кл",
    category: "Цилиндровые механизмы",
    brand: "VETTORE",
    stock: 57,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 259,
    slug: "ts-m-vettore-120-60-60-kl-kl-259",
    name: "Ц/м VETTORE 120 60/60 кл/кл",
    category: "Цилиндровые механизмы",
    brand: "VETTORE",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/259.webp"
  },
  {
    id: 260,
    slug: "ts-m-fuaro-d-pro5007-8tanq-85-50-10-25-chernyy-260",
    name: "Ц/м Fuaro D-PRO5007-8Tanq 85(50+10+25)-черный",
    category: "Цилиндровые механизмы",
    brand: "FUARO",
    stock: 1,
    status: 'in_stock',
    image: "/images/260.webp"
  },
  {
    id: 261,
    slug: "ts-m-std-al-lp-80-45-35-chernyy-klyuch-klyuch-261",
    name: "Ц/м STD AL-ЛП-80 (45+35) черный, ключ/ключ",
    category: "Цилиндровые механизмы",
    brand: "STD",
    stock: 590,
    status: 'in_stock',
    image: "/images/261.webp"
  },
  {
    id: 262,
    slug: "ts-m-std-al-lpv-100-50-50-chernyy-kl-vert-262",
    name: "Ц/м STD AL-ЛПВ -100 (50/50) черный кл/верт",
    category: "Цилиндровые механизмы",
    brand: "STD",
    stock: 9,
    status: 'in_stock',
    image: "/images/262.webp"
  },
  {
    id: 263,
    slug: "ts-m-std-z-lp-110-60-50-hrom-kl-kl-263",
    name: "Ц/м STD Z ЛП-110(60/50) хром кл/кл",
    category: "Цилиндровые механизмы",
    brand: "STD",
    stock: 3,
    status: 'in_stock',
    image: "/images/263.webp"
  },
  {
    id: 264,
    slug: "ts-m-std-lp-120-60-60-chernyy-kl-kl-264",
    name: "Ц/м STD ЛП-120(60-60) черный кл/кл",
    category: "Цилиндровые механизмы",
    brand: "STD",
    stock: 13,
    status: 'in_stock',
    image: "/images/264.webp"
  },
  {
    id: 265,
    slug: "ts-m-std-lp-120-60-60-chernyy-kl-vert-265",
    name: "Ц/м STD ЛП-120(60-60) черный кл/верт",
    category: "Цилиндровые механизмы",
    brand: "STD",
    stock: 1,
    status: 'in_stock',
    image: "/images/265.webp"
  },
  {
    id: 266,
    slug: "ts-m-gardian-gb-61-31-60sh-g-5kl-klyuch-shtok-tsvet-latun-266",
    name: "Ц/М Гардиан GB (61/31/60SH)G 5кл. (ключ-шток, цвет: латунь)",
    category: "Цилиндровые механизмы",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/266.webp"
  },
  {
    id: 267,
    slug: "shpingalet-avtomaticheskiy-hz43-f24-din-l-lev-art-015199004-267",
    name: "Шпингалет автоматический HZ43-F24 DIN-L (лев.) арт.015199004",
    category: "Шпингалеты",
    brand: "DIN",
    stock: 27,
    status: 'in_stock',
    image: "/images/267.webp"
  },
  {
    id: 268,
    slug: "shpingalet-avtomaticheskiy-hz43-f24-din-r-prav-art-015199005-268",
    name: "Шпингалет автоматический HZ43-F24 DIN-R (прав) арт.015199005",
    category: "Шпингалеты",
    brand: "DIN",
    stock: 9,
    status: 'in_stock',
    image: "/images/268.webp"
  },
  {
    id: 269,
    slug: "shpingalet-vettore-ch-140-ni-269",
    name: "Шпингалет Vettore CH 140 Ni",
    category: "Шпингалеты",
    brand: "VETTORE",
    stock: 60,
    status: 'in_stock',
    image: "/images/269.webp"
  },
  {
    id: 270,
    slug: "shpingalet-avtomaticheskiy-dl-fab-m200-sss-dl-hoda-16mm-pl-26-171-270",
    name: "Шпингалет автоматический DL FAB/M200/SSS,дл.хода 16мм,пл.26*171",
    category: "Шпингалеты",
    brand: "FAB",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/270.webp"
  },
  {
    id: 271,
    slug: "shtok-razdelnyy-8mm-65-65mm-dlya-antipanikovyh-zamkov-271",
    name: "Шток раздельный 8мм/65*65мм для антипаниковых замков",
    category: "Антипаника",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/271.webp"
  },
  {
    id: 272,
    slug: "el-zamok-svp-6257-272",
    name: "Эл.замок SVP 6257",
    category: "Дверные замки",
    brand: "SVP",
    stock: 1,
    status: 'in_stock',
    image: "/images/272.webp"
  },
  {
    id: 273,
    slug: "el-zamok-svp-6258-273",
    name: "Эл.замок SVP 6258",
    category: "Дверные замки",
    brand: "SVP",
    stock: 4,
    status: 'in_stock',
    image: "/images/273.webp"
  },
  {
    id: 274,
    slug: "el-zamok-svp-6277-274",
    name: "Эл.замок SVP 6277",
    category: "Дверные замки",
    brand: "SVP",
    stock: 3,
    status: 'in_stock',
    image: "/images/274.webp"
  },
  {
    id: 275,
    slug: "el-zamok-svp-6278-275",
    name: "Эл.замок SVP 6278",
    category: "Дверные замки",
    brand: "SVP",
    stock: 2,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 276,
    slug: "el-zaschelka-basic-xs-s-ea-12vdc-ho-artikul-15112113-276",
    name: "Эл.защелка Basic-XS S EA 12VDC HO артикул 15112113",
    category: "Защелки",
    brand: "BASIC",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/276.webp"
  },
  {
    id: 277,
    slug: "elektrozaschelka-fire-448-277",
    name: "Электрозащелка Fire 448",
    category: "Защелки",
    brand: "FIRE",
    stock: 11,
    status: 'in_stock',
    image: "/images/277.webp"
  },
  {
    id: 278,
    slug: "elzaschelka-d-putey-evak-tv506-iso-5-art-15150624-278",
    name: "Элзащелка д/путей эвак.TV506 (ISO 5) арт.15150624",
    category: "Защелки",
    brand: "ISO",
    stock: 4,
    status: 'in_stock',
    image: "/images/278.webp"
  },
  {
    id: 279,
    slug: "el-meh-zamok-solenoid-lock-65-24-abloi-el-561-279",
    name: "Эл.мех.замок Solenoid Lock 65/24 ABLOI EL 561",
    category: "Дверные замки",
    brand: "SOLENOID",
    stock: 33,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 280,
    slug: "el-meh-solenoidnyy-zamok-sva-6273-art-70010101-280",
    name: "Эл.мех.соленоидный замок SVA 6273 арт.70010101",
    category: "Дверные замки",
    brand: "SVA",
    stock: 5,
    status: 'in_stock',
    image: "/images/280.webp"
  },
  {
    id: 281,
    slug: "el-meh-zamok-sva-6278-art-70010104-281",
    name: "Эл.мех. замок SVA 6278 арт.70010104",
    category: "Дверные замки",
    brand: "SVA",
    stock: 4,
    status: 'in_stock',
    image: "/images/281.webp"
  },
  {
    id: 282,
    slug: "el-meh-zamok-svz-basic-pzdin-bekset-30mm-282",
    name: "Эл.мех.замок SVZ Basic PZDIN бэксет 30мм",
    category: "Дверные замки",
    brand: "SVZ",
    stock: 82,
    status: 'in_stock',
    image: "/images/282.webp"
  },
  {
    id: 283,
    slug: "el-meh-zamok-svz-6277-6278-283",
    name: "Эл.мех.замок SVZ 6277/6278",
    category: "Дверные замки",
    brand: "SVZ",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/283.webp"
  },
  {
    id: 284,
    slug: "elektromagnitnyy-zamok-al400sm-284",
    name: "Электромагнитный замок AL400SM",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/284.webp"
  },
  {
    id: 285,
    slug: "elektromagnitnyy-zamok-vlagozasch-ip67-ml-350ws-350kg-285",
    name: "Электромагнитный замок влагозащ.IP67 ML-350WS,350кг",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 0,
    status: 'out_of_stock',
    image: "/images/285.webp"
  },
  {
    id: 286,
    slug: "ekstsentrik-tsam-z-06-286",
    name: "Эксцентрик цам Z-06",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 26,
    status: 'in_stock',
    image: "/images/286.webp"
  },
  {
    id: 287,
    slug: "etiketka-nakleyka-bumazhnaya-400-150-287",
    name: "Этикетка -наклейка бумажная 400*150",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 65,
    status: 'in_stock',
    image: "/images/287.webp"
  },
  {
    id: 288,
    slug: "ed-pereklyuchatel-288",
    name: "ED переключатель",
    category: "Комплектующие для доводчиков",
    brand: "Универсальный",
    stock: 1,
    status: 'in_stock',
    image: "/images/288.webp"
  },
  {
    id: 289,
    slug: "led-knopka-steklo-289",
    name: "LED-кнопка,стекло",
    category: "Дверная фурнитура",
    brand: "LED",
    stock: 1,
    status: 'in_stock',
    image: "/images/product-placeholder.svg"
  },
  {
    id: 290,
    slug: "ognestoykiy-korpus-zamka-antipanik-rna-2505-art-476630101-290",
    name: "Огнестойкий корпус замка,антипаник РНА 2505 арт.476630101",
    category: "Антипаника",
    brand: "Универсальный",
    stock: 6,
    status: 'in_stock',
    image: "/images/290.webp"
  },
  {
    id: 291,
    slug: "zamok-vreznoy-antipanika-rna-2575-art-476640101-291",
    name: "Замок врезной антипаника РНА 2575 арт.476640101",
    category: "Дверные замки",
    brand: "Универсальный",
    stock: 15,
    status: 'in_stock',
    image: "/images/294.webp"
  },
  {
    id: 292,
    slug: "zapirayuschee-avtomat-ustroystvo-rna-2301-art-478640101-292",
    name: "Запирающее автомат устройство РНА 2301 арт.478640101",
    category: "Дверная фурнитура",
    brand: "Универсальный",
    stock: 6,
    status: 'in_stock',
    image: "/images/292.webp"
  },
  {
    id: 293,
    slug: "komplekt-dlya-vreznoy-antipaniki-rna-2310-art-478640501-293",
    name: "Комплект для врезной антипаники РНА 2310 арт.478640501",
    category: "Антипаника",
    brand: "Универсальный",
    stock: 7,
    status: 'in_stock',
    image: "/images/293.webp"
  },
  {
    id: 294,
    slug: "otvetnaya-chast-napolnaya-dlya-vrez-antipaniki-rna-2321-art-478640801-294",
    name: "Ответная часть напольная для врез.антипаники РНА 2321 арт.478640801",
    category: "Антипаника",
    brand: "Универсальный",
    stock: 5,
    status: 'in_stock',
    image: "/images/294.webp"
  },
  {
    id: 295,
    slug: "nizhnyaya-napravlyayuschaya-dlya-vreznoy-antipaniki-rna-2311-art-478640601-295",
    name: "Нижняя направляющая для врезной антипаники РНА 2311 арт.478640601",
    category: "Антипаника",
    brand: "Универсальный",
    stock: 4,
    status: 'in_stock',
    image: "/images/294.webp"
  },
  {
    id: 296,
    slug: "verhnyaya-otvetnaya-chast-dlya-vreznoy-antipaniki-rna-2322-art-478640901-296",
    name: "Верхняя ответная часть для врезной антипаники РНА 2322 арт.478640901",
    category: "Антипаника",
    brand: "Универсальный",
    stock: 16,
    status: 'in_stock',
    image: "/images/294.webp"
  },
  {
    id: 297,
    slug: "dver-tehnicheskaya-odnopolnaya-gluhaya-1000-2090-laminat-metallicheskaya-korobka-297",
    name: "Дверь техническая однопольная глухая 1000×2090, ламинат, металлическая коробка",
    category: "Двери",
    brand: "Dorren",
    stock: 56,
    status: 'in_stock',
    image: "/images/door-technical-blind.webp",
    props: [
      { icon: 'size', label: 'Размер проёма', value: '1000 × 2090 мм' },
      { icon: 'leaf', label: 'Полотно', value: 'Глухое, сотовое заполнение' },
      { icon: 'frame', label: 'Коробка', value: 'Металл. телескопическая, до 150 мм' },
      { icon: 'lock', label: 'Замок', value: 'Механический, под цилиндр' },
      { icon: 'handle', label: 'Ручка', value: 'Нажимная, нержавеющая сталь' },
      { icon: 'opening', label: 'Открывание', value: 'Левое / правое' },
      { icon: 'finish', label: 'Отделка', value: 'RAL 7047 + CPL Slotex 1478S' },
    ],
  },
  {
    id: 298,
    slug: "dver-tehnicheskaya-odnopolnaya-s-ventreshetkoy-900-2090-dlya-sanuzla-298",
    name: "Дверь техническая однопольная с вентрешёткой 900×2090 (для санузла)",
    category: "Двери",
    brand: "Dorren",
    stock: 46,
    status: 'in_stock',
    image: "/images/door-technical-blind.webp",
    props: [
      { icon: 'size', label: 'Размер проёма', value: '900 × 2090 мм' },
      { icon: 'leaf', label: 'Полотно', value: 'Глухое, сотовое заполнение' },
      { icon: 'vent', label: 'Вентрешётка', value: '600 × 1500 мм' },
      { icon: 'frame', label: 'Коробка', value: 'Металл. телескопическая, до 150 мм' },
      { icon: 'lock', label: 'Замок', value: 'WC-замок с завёрткой' },
      { icon: 'handle', label: 'Ручка', value: 'Нажимная, нержавеющая сталь' },
      { icon: 'opening', label: 'Открывание', value: 'Левое / правое' },
      { icon: 'finish', label: 'Отделка', value: 'RAL 7047 + CPL Slotex 1478S' },
    ],
  },
  {
    id: 299,
    slug: "dver-tehnicheskaya-odnopolnaya-gluhaya-1200-1990-laminat-metallicheskaya-korobka-299",
    name: "Дверь техническая однопольная глухая 1200×1990, ламинат, металлическая коробка",
    category: "Двери",
    brand: "Dorren",
    stock: 25,
    status: 'in_stock',
    image: "/images/door-technical-blind.webp",
    props: [
      { icon: 'size', label: 'Размер проёма', value: '1200 × 1990 мм' },
      { icon: 'leaf', label: 'Полотно', value: 'Глухое, сотовое заполнение' },
      { icon: 'frame', label: 'Коробка', value: 'Металл. телескопическая, до 190 мм' },
      { icon: 'lock', label: 'Замок', value: 'Механический, под цилиндр' },
      { icon: 'handle', label: 'Ручка', value: 'Нажимная, нержавеющая сталь' },
      { icon: 'opening', label: 'Открывание', value: 'Левое / правое' },
      { icon: 'finish', label: 'Отделка', value: 'RAL 7047 + CPL Slotex 1478S' },
    ],
  },
  {
    id: 300,
    slug: "dver-tehnicheskaya-odnopolnaya-gluhaya-1100-2090-laminat-metallicheskaya-korobka-300",
    name: "Дверь техническая однопольная глухая 1100×2090, ламинат, металлическая коробка",
    category: "Двери",
    brand: "Dorren",
    stock: 20,
    status: 'in_stock',
    image: "/images/door-technical-blind.webp",
    props: [
      { icon: 'size', label: 'Размер проёма', value: '1100 × 2090 мм' },
      { icon: 'leaf', label: 'Полотно', value: 'Глухое, сотовое заполнение' },
      { icon: 'frame', label: 'Коробка', value: 'Металл. телескопическая, до 150 мм' },
      { icon: 'lock', label: 'Замок', value: 'Механический, под цилиндр' },
      { icon: 'handle', label: 'Ручка', value: 'Нажимная, нержавеющая сталь' },
      { icon: 'opening', label: 'Открывание', value: 'Левое / правое' },
      { icon: 'finish', label: 'Отделка', value: 'RAL 7047 + CPL Slotex 1478S' },
    ],
  },
  {
    id: 301,
    slug: "dver-tehnicheskaya-odnopolnaya-gluhaya-1200-2090-laminat-metallicheskaya-korobka-301",
    name: "Дверь техническая однопольная глухая 1200×2090, ламинат, металлическая коробка",
    category: "Двери",
    brand: "Dorren",
    stock: 15,
    status: 'in_stock',
    image: "/images/door-technical-blind.webp",
    props: [
      { icon: 'size', label: 'Размер проёма', value: '1200 × 2090 мм' },
      { icon: 'leaf', label: 'Полотно', value: 'Глухое, сотовое заполнение' },
      { icon: 'frame', label: 'Коробка', value: 'Металл. телескопическая, до 150 мм' },
      { icon: 'lock', label: 'Замок', value: 'Механический, под цилиндр' },
      { icon: 'handle', label: 'Ручка', value: 'Нажимная, нержавеющая сталь' },
      { icon: 'opening', label: 'Открывание', value: 'Левое / правое' },
      { icon: 'finish', label: 'Отделка', value: 'RAL 7047 + CPL Slotex 1478S' },
    ],
  },
  {
    id: 302,
    slug: "dver-tehnicheskaya-odnopolnaya-gluhaya-1100-1990-laminat-metallicheskaya-korobka-302",
    name: "Дверь техническая однопольная глухая 1100×1990, ламинат, металлическая коробка",
    category: "Двери",
    brand: "Dorren",
    stock: 11,
    status: 'in_stock',
    image: "/images/door-technical-blind.webp",
    props: [
      { icon: 'size', label: 'Размер проёма', value: '1100 × 1990 мм' },
      { icon: 'leaf', label: 'Полотно', value: 'Глухое, сотовое заполнение' },
      { icon: 'frame', label: 'Коробка', value: 'Металл. телескопическая, до 190 мм' },
      { icon: 'lock', label: 'Замок', value: 'Механический, под цилиндр' },
      { icon: 'handle', label: 'Ручка', value: 'Нажимная, нержавеющая сталь' },
      { icon: 'opening', label: 'Открывание', value: 'Левое / правое' },
      { icon: 'finish', label: 'Отделка', value: 'RAL 7047 + CPL Slotex 1478S' },
    ],
  }
];

export const categories = [...new Set(products.map(p => p.category))];
export const brands = [...new Set(products.map(p => p.brand))].sort();

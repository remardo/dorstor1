import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_CSV = path.resolve(__dirname, 'data/product_cards.csv');
const OUTPUT_TS = path.resolve(__dirname, '../src/data/products.ts');

function parseCsv(content) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i += 1) {
    const ch = content[i];
    const next = content[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(cell);
      cell = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
      continue;
    }

    cell += ch;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }

  return rows;
}

function toProduct(record, index) {
  const id = Number.parseInt(record.id, 10);
  const stock = Number.parseInt(record.stock, 10);
  const name = (record.name ?? '').trim();
  const category = (record.category ?? '').trim();

  return {
    id: Number.isFinite(id) ? id : index + 1,
    slug: (record.slug ?? `product-${index + 1}`).trim(),
    name,
    category,
    brand: (record.brand ?? 'Универсальный').trim() || 'Универсальный',
    stock: Number.isFinite(stock) ? stock : 0,
    status: record.availability === 'in_stock' ? 'in_stock' : 'out_of_stock',
    image: (record.image_url ?? '').trim(),
  };
}

function renderProduct(product) {
  return `  {
    id: ${product.id},
    slug: ${JSON.stringify(product.slug)},
    name: ${JSON.stringify(product.name)},
    category: ${JSON.stringify(product.category)},
    brand: ${JSON.stringify(product.brand)},
    stock: ${product.stock},
    status: '${product.status}',
    image: ${JSON.stringify(product.image)}${
    product.props ? `,
    props: ${JSON.stringify(product.props)}` : ''
  }
  }`;
}

// `props` are curated by hand in products.ts and have no CSV column, so they are read
// back from the existing file and re-attached instead of being wiped on every sync.
async function existingProps() {
  const previous = await fs.readFile(OUTPUT_TS, 'utf8').catch(() => '');
  const map = new Map();
  for (const block of previous.split(/
  \{/)) {
    const slug = block.match(/slug: "([^"]+)"/)?.[1];
    const props = block.match(/props: (\[[\s\S]*?\])
/)?.[1];
    if (slug && props) map.set(slug, JSON.parse(props));
  }
  return map;
}

async function main() {
  const content = await fs.readFile(INPUT_CSV, 'utf8');
  const keptProps = await existingProps();
  const rows = parseCsv(content);

  if (rows.length < 2) {
    throw new Error('CSV file is empty or malformed');
  }

  const headers = rows[0].map((header) => header.trim());
  const products = rows
    .slice(1)
    .map((values) => {
      const record = Object.fromEntries(headers.map((header, i) => [header, values[i] ?? '']));
      return record;
    })
    .map(toProduct)
    .map((product) => ({ ...product, props: keptProps.get(product.slug) }))
    .sort((a, b) => a.id - b.id);

  const ts = `export type PropIcon = 'size' | 'leaf' | 'frame' | 'lock' | 'handle' | 'opening' | 'finish' | 'vent';

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
${products.map(renderProduct).join(',\n')}
];

export const categories = [...new Set(products.map(p => p.category))];
export const brands = [...new Set(products.map(p => p.brand))].sort();
`;

  await fs.writeFile(OUTPUT_TS, ts, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Generated ${products.length} products in ${OUTPUT_TS}`);
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_CSV = path.resolve(__dirname, '../public/product_cards.csv');
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
  const description = (record.seo_description ?? '').replace(/\s+/g, ' ').trim();

  return {
    id: Number.isFinite(id) ? id : index + 1,
    slug: (record.slug ?? `product-${index + 1}`).trim(),
    name,
    category,
    brand: (record.brand ?? 'Универсальный').trim() || 'Универсальный',
    stock: Number.isFinite(stock) ? stock : 0,
    status: record.availability === 'in_stock' ? 'in_stock' : 'out_of_stock',
    image: (record.image_url ?? '').trim(),
    description:
      description ||
      `${name} — ${category ? category.toLowerCase() : 'дверная фурнитура'} для входных и технических дверей.`,
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
    image: ${JSON.stringify(product.image)},
    description: ${JSON.stringify(product.description)}
  }`;
}

async function main() {
  const content = await fs.readFile(INPUT_CSV, 'utf8');
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
    .sort((a, b) => a.id - b.id);

  const ts = `export interface Product {
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

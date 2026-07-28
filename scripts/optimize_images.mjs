// Converts every product image in public/images to WebP and rewrites the paths in
// src/data/products.ts. Catalog photos were shipped as 23 MB of JPG/PNG (largest 1 MB),
// which is the bulk of what a category page downloads.
// Run once after `npm run sync:products`, or any time new photos land.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES = path.resolve(__dirname, '../public/images');
const PRODUCTS_TS = path.resolve(__dirname, '../src/data/products.ts');

const MAX_EDGE = 1200; // product photos are never displayed larger than 600 CSS px
const QUALITY = 80;

// A few catalog downloads are 24-bit BMPs wearing a .jpg extension. libvips does not read
// BMP, and they are the largest files left on disk, so they get a minimal decoder here
// rather than an exception. Anything else unreadable is reported and left untouched.
function decodeBmp(buffer) {
  if (buffer.readUInt16LE(0) !== 0x4d42 || buffer.readUInt16BE(0) === 0) return null;
  const offset = buffer.readUInt32LE(10);
  const width = buffer.readInt32LE(18);
  const height = buffer.readInt32LE(22);
  const bpp = buffer.readUInt16LE(28);
  const compression = buffer.readUInt32LE(30);
  if (bpp !== 24 || compression !== 0) return null;

  const stride = Math.ceil((width * 3) / 4) * 4;
  const flip = height > 0; // positive height means the rows are stored bottom-up
  const rows = Math.abs(height);
  const out = Buffer.alloc(rows * width * 3);

  for (let y = 0; y < rows; y += 1) {
    const src = offset + (flip ? rows - 1 - y : y) * stride;
    for (let x = 0; x < width; x += 1) {
      const i = src + x * 3;
      const o = (y * width + x) * 3;
      out[o] = buffer[i + 2]; // BMP stores BGR
      out[o + 1] = buffer[i + 1];
      out[o + 2] = buffer[i];
    }
  }
  return { data: out, info: { width, height: rows, channels: 3 } };
}

async function load(src) {
  const buffer = await fs.readFile(src);
  const bmp = decodeBmp(buffer);
  return bmp ? sharp(bmp.data, { raw: bmp.info }) : sharp(buffer);
}

async function main() {
  const files = (await fs.readdir(IMAGES)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  let before = 0;
  let after = 0;
  const renamed = new Map();
  const skipped = [];

  for (const file of files) {
    const src = path.join(IMAGES, file);
    const out = path.join(IMAGES, `${path.parse(file).name}.webp`);
    const original = (await fs.stat(src)).size;

    try {
      await (await load(src))
        .rotate()
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(out);
    } catch {
      // Some downloads carry a .jpg name but are not images at all — leave them alone
      // and let the missing-file reconciliation below flag them.
      skipped.push(file);
      before += original;
      after += original;
      continue;
    }

    const converted = (await fs.stat(out)).size;
    // Keep the original if WebP somehow lost — rare, but real for tiny flat PNGs.
    if (converted >= original) {
      await fs.unlink(out);
      after += original;
      before += original;
      continue;
    }
    await fs.unlink(src);
    renamed.set(`/images/${file}`, `/images/${path.basename(out)}`);
    before += original;
    after += converted;
  }

  let ts = await fs.readFile(PRODUCTS_TS, 'utf8');
  for (const [from, to] of renamed) ts = ts.split(`"${from}"`).join(`"${to}"`);

  // Re-entrant: a run interrupted halfway leaves converted files on disk but stale paths
  // in products.ts, so every referenced image is reconciled against what actually exists.
  const missing = [];
  for (const ref of new Set(ts.match(/\/images\/[^"]+/g) ?? [])) {
    const onDisk = path.join(IMAGES, path.basename(ref));
    if (await fs.stat(onDisk).then(() => true, () => false)) continue;
    const webp = `/images/${path.parse(ref).name}.webp`;
    if (await fs.stat(path.join(IMAGES, path.basename(webp))).then(() => true, () => false)) {
      ts = ts.split(`"${ref}"`).join(`"${webp}"`);
    } else {
      missing.push(ref);
    }
  }
  await fs.writeFile(PRODUCTS_TS, ts);
  if (skipped.length) console.warn(`skipped (not decodable): ${skipped.join(', ')}`);
  if (missing.length) console.warn(`still missing on disk: ${missing.join(', ')}`);

  const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
  console.log(
    `optimized ${renamed.size}/${files.length} images: ${mb(before)} MB -> ${mb(after)} MB ` +
      `(-${Math.round((1 - after / before) * 100)}%)`
  );
}

main();

// Downloads all product images locally and rewrites src/data/products.ts to /images/<id>.<ext>.
// Failures keep the original URL so nothing breaks; rerun to retry only the failed ones.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TS = path.resolve(__dirname, '../src/data/products.ts');
const OUT = path.resolve(__dirname, '../public/images');
const CONCURRENCY = 12;
const TIMEOUT = 15000;

const extFromType = (ct = '') =>
  ct.includes('png') ? 'png' :
  ct.includes('webp') ? 'webp' :
  ct.includes('gif') ? 'gif' :
  ct.includes('svg') ? 'svg' : 'jpg';

async function download(url) {
  const ctrl = AbortSignal.timeout(TIMEOUT);
  const res = await fetch(url, {
    signal: ctrl,
    headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': new URL(url).origin },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get('content-type') || '';
  if (!ct.startsWith('image/')) throw new Error(`not image: ${ct}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) throw new Error('too small');
  return { buf, ext: extFromType(ct) };
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  let src = await fs.readFile(TS, 'utf8');

  // collect {id, url} pairs in source order
  const blocks = [...src.matchAll(/id:\s*(\d+),[\s\S]*?image:\s*"([^"]*)"/g)];
  const jobs = blocks
    .map(m => ({ id: Number(m[1]), url: m[2] }))
    .filter(j => j.url.startsWith('http'));

  const existing = new Set(await fs.readdir(OUT).catch(() => []));
  let ok = 0, skip = 0, fail = 0;
  const failed = [];
  const rewrites = new Map(); // url -> /images/<id>.<ext>

  const queue = [...jobs];
  async function worker() {
    while (queue.length) {
      const { id, url } = queue.shift();
      const hit = [...existing].find(f => f.startsWith(`${id}.`));
      if (hit) { rewrites.set(url, `/images/${hit}`); skip++; continue; }
      try {
        const { buf, ext } = await download(url);
        const name = `${id}.${ext}`;
        await fs.writeFile(path.join(OUT, name), buf);
        rewrites.set(url, `/images/${name}`);
        ok++;
      } catch (e) {
        fail++; failed.push(`${id}\t${url}\t${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  for (const [url, local] of rewrites) {
    src = src.split(`"${url}"`).join(`"${local}"`);
  }
  await fs.writeFile(TS, src);
  if (failed.length) await fs.writeFile(path.join(__dirname, 'image_failures.txt'), failed.join('\n'));

  console.log(`done: ${ok} downloaded, ${skip} cached, ${fail} failed (see scripts/image_failures.txt)`);
}
main();

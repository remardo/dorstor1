// Category URL slugs, derived from products.ts categories.
// Kept separate from products.ts so it survives `npm run sync:products` regeneration.
import { categories } from './products.ts';

const RU_TO_LAT: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e',
  ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm',
  н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u',
  ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch',
  ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};

export function slugifyCategory(name: string): string {
  let out = '';
  for (const ch of name.toLowerCase()) {
    if (ch in RU_TO_LAT) out += RU_TO_LAT[ch];
    else if (/[a-z0-9]/.test(ch)) out += ch;
    else out += '-';
  }
  return out.replace(/-{2,}/g, '-').replace(/^-|-$/g, '');
}

export const categorySlugs: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c, slugifyCategory(c)])
);

export const slugToCategory: Record<string, string> = Object.fromEntries(
  categories.map((c) => [slugifyCategory(c), c])
);

// Doors are a distinct product line from door hardware/fittings — kept as its
// own segment in the catalog sidebar instead of alphabetized with the rest.
export const DOOR_CATEGORY = 'Двери';
export const hardwareCategories = categories.filter((c) => c !== DOOR_CATEGORY);

export { categories };

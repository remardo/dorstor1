// Catalog cards render at roughly 300 CSS px while half the source photos are 800–1200 px
// wide. scripts/optimize_images.mjs writes a `<name>-400.webp` sibling for every raster
// image, so the srcset can be built by naming convention with no per-image metadata.
const CARD_WIDTH = 400;

export interface CardImage {
  src: string;
  srcSet?: string;
  sizes?: string;
}

export function cardImage(image: string, sizes = '(max-width: 640px) 45vw, 300px'): CardImage {
  if (!image.endsWith('.webp')) return { src: image }; // SVG placeholder has no variants
  const card = image.replace(/\.webp$/, `-${CARD_WIDTH}.webp`);
  return { src: card, srcSet: `${card} ${CARD_WIDTH}w, ${image} 1200w`, sizes };
}

/** Main product photo: displayed at ~600 CSS px, so the full asset is the default. */
export function heroImage(image: string): CardImage {
  if (!image.endsWith('.webp')) return { src: image };
  const card = image.replace(/\.webp$/, `-${CARD_WIDTH}.webp`);
  return { src: image, srcSet: `${card} ${CARD_WIDTH}w, ${image} 1200w`, sizes: '(max-width: 1024px) 92vw, 600px' };
}

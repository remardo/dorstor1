// SSG entry — compiled via `vite build --ssr` and run at build time by scripts/prerender.mjs
// to bake real product/category markup into each route's static HTML (not just <head>).
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}

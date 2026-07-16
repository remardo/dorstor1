/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    ym?: ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number };
  }
}

export const YANDEX_METRIKA_ID = 110799654;

export function initAnalytics() {
  if (typeof document === 'undefined') return;

  window.ym = window.ym || ((...args: unknown[]) => {
    window.ym!.a = window.ym!.a || [];
    window.ym!.a.push(args);
  });
  window.ym.l = Date.now();
  window.ym(YANDEX_METRIKA_ID, 'init', {
    accurateTrackBounce: true,
    clickmap: true,
    defer: true,
    trackLinks: true,
    webvisor: true,
  });

  const metrikaScript = document.createElement('script');
  metrikaScript.async = true;
  metrikaScript.src = 'https://mc.yandex.ru/metrika/tag.js';
  document.head.appendChild(metrikaScript);

  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag('js', new Date());
  window.gtag('config', id);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

export const track = (event: string, params?: Record<string, unknown>) => {
  window.gtag?.('event', event, params);
  window.ym?.(YANDEX_METRIKA_ID, 'reachGoal', event, params);
};

export const trackPageView = (path: string) =>
  window.ym?.(YANDEX_METRIKA_ID, 'hit', path, { title: document.title });

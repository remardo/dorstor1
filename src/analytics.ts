/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id || typeof document === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag('js', new Date());
  window.gtag('config', id);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

export const track = (event: string, params?: Record<string, unknown>) =>
  window.gtag?.('event', event, params);

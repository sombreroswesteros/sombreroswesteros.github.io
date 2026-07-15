// Service worker mínimo para Sombreros Westeros ERP.
// NO guarda caché del index.html a propósito: así siempre cargas la última
// versión que subes a GitHub y Firebase sincroniza sin problemas.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  // Red directa siempre. Si no hay internet, deja que el navegador maneje el error.
  e.respondWith(fetch(e.request).catch(() => new Response('', { status: 504 })));
});

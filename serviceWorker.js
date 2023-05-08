/* global importScripts, workbox */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js'
);

if (workbox) {
  console.log(`Workbox is loaded`);
} else {
  console.log(`Workbox didn't load`);
}

const cacheName = 'my-pwa-cache-v1';
const cacheUrls = [
  '/',
  '/index.html',
  '/serviceWorker.js',
  '/src/game-paper-lit.js',
  '/src/home-paper-lit.js'
];

workbox.routing.registerRoute(
  ({ url }) => cacheUrls.includes(url.pathname),
  new workbox.strategies.CacheFirst({
    cacheName,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30
      })
    ]
  })
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

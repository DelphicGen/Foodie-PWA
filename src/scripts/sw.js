import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  clients.claim();
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

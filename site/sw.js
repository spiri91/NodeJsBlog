let cacheName = 'pl-cache';

let filesToCache = [

];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (key !== cacheName) {
        return caches.delete(key);
      }
    })))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if ((e.request.method === "PUT" || e.request.method === "POST") && false === navigator.onLine) {
    new Error('No internet connectivity!');
  } else e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
});
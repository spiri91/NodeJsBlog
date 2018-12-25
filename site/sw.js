let cacheName = 'bz-cache';

let filesToCache = [
  "/",
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

self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  let notification = JSON.parse(event.data.text())

  const title = notification.title;
  const options = {
    body: notification.text,
    icon: 'icon.png',
    badge: 'badge.png'
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});
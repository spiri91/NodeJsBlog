const frontendAddress = self.location.origin + '/#/';
const cacheName = 'bz-cache';

let filesToCache = [
  "/",
  "sw.js",
  "back-arrow.png",
  "next-arrow.png",
  "share.png",
  "icon192x192.png",
  "icon512x512.png",
  "icon144x144.png",
  "darkForest3.jpeg"
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
  if ((e.request.method === "PUT" || e.request.method === "POST") && false === navigator.onLine)
    new Error('No internet connectivity!');
  else 
    e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
});

self.addEventListener('push', (event) => {
  let notification = JSON.parse(event.data.text())

  const title = notification.title;
  const options = {
    body: notification.text,
    icon: 'icon512x512.png',
    badge: 'icon192x192.png'
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  if (event.notification.openApp === 'false') return;

  let smug = event.notification.title.replace(/ /g, '-')
  event.notification.close();

  clients.openWindow(`${frontendAddress}article/${smug}`)
});
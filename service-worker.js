self.addEventListener('install', event => {
//   self.skipWaiting();
});

self.addEventListener('activate', event => {
//   event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // You can add caching logic here if desired
});

self.addEventListener('message', event => {
    console.log('Received message from client:', event.data);
});
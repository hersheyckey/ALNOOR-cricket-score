self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cricket-app').then(cache => {
      return cache.addAll(['./', './index.html']);
    })
  );
});

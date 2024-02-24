self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("haimonvieira-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/skill.html",
        "/about.html",
        "/portfolio.html",
        "/style.css",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

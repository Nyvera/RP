self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ai-chat-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/chat.html",
        "/personas.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});

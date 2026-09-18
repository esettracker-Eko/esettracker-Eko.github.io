const CACHE_NAME = "tally-v1";
const assets = [
  "./index.html",
  "./manifest.json"
];

//安装缓存
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

//读取缓存
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res=> res || fetch(event.request))
  )
});

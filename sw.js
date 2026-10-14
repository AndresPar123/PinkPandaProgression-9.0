const CACHE = "pinkpandaprogression-v10-rest-timer";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-180.png",
"./pandas/power.svg",
"./pandas/ninja.svg",
"./pandas/rockstar.svg",
"./pandas/chef.svg",
"./pandas/pirate.svg",
"./pandas/astronaut.svg",
"./pandas/samurai.svg",
"./pandas/beach.svg",
"./pandas/wizard.svg",
"./pandas/golden.svg",
"./pandas/gamer.svg",
"./pandas/cyber.svg",
"./pandas/dragon.svg",
"./pandas/shadow.svg",
"./pandas/legend.svg"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", event => { if (event.request.method !== "GET") return; event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response; }).catch(()=>cached))); });

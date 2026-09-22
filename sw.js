"use strict";

// Increment this version whenever a precached application-shell file changes.
const CACHE_PREFIX = "yujian-world-shell-";
const LEGACY_CACHE_PREFIX = "travel-vocab-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v55`;
const APP_SHELL = [
  "./",
  "index.html",
  "styles.css",
  "core/content-registry.js",
  "languages/jp-ja/pack.js",
  "languages/us-en/pack.js",
  "languages/kr-ko/pack.js",
  "languages/jp-ja/beginner/data.js",
  "languages/us-en/beginner/data.js",
  "languages/us-en/beginner/audio.js",
  "languages/kr-ko/beginner/data.js",
  "languages/kr-ko/beginner/audio.js",
  "core/beginner-module-registry.js",
  "languages/jp-ja/beginner/module.js",
  "languages/us-en/beginner/module.js",
  "languages/kr-ko/beginner/module.js",
  "core/emergency-card.js",
  "core/favorites.js",
  "app.js",
  "manifest.webmanifest",
  "images/heroes/default-mobile.webp",
  "images/heroes/default-wide.webp",
  "images/heroes/jp-mobile.webp",
  "images/heroes/jp-wide.webp",
  "images/heroes/us-mobile.webp",
  "images/heroes/us-wide.webp",
  "images/heroes/kr-mobile.png",
  "images/heroes/kr-wide.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "icons/flags/jp.png",
  "icons/flags/us.png",
  "icons/flags/kr.png",
  "icons/flags/ru.png",
  "icons/flags/es.png",
  "icons/scenes/airport.png",
  "icons/scenes/transport.png",
  "icons/scenes/hotel.png",
  "icons/scenes/food.png",
  "icons/scenes/shopping.png",
  "icons/scenes/directions.png",
  "icons/scenes/basics.png",
  "icons/scenes/emergency.png",
  "icons/navigation/home.png",
  "icons/navigation/review.png",
  "icons/navigation/tools.png",
  "icons/navigation/me.png",
  "icons/navigation/home-active.png",
  "icons/navigation/review-active.png",
  "icons/navigation/tools-active.png",
  "icons/navigation/me-active.png",
  "icons/ui/review.png",
  "icons/ui/complete.png",
  "icons/ui/exchange.png",
  "icons/ui/checklist.png",
  "icons/ui/trip-map.png",
  "icons/ui/favorite.png",
  "icons/ui/emergency-card.png",
  "icons/ui/translate.png",
  "icons/ui/beginner-reading.png",
  "icons/ui/privacy.png",
  "icons/ui/install.png",
  "icons/ui/delete-data.png",
  "icons/ui/warning.png"
];

const scopeUrl = (path) => new URL(path, self.registration.scope).href;
const shellUrls = new Set(APP_SHELL.map(scopeUrl));
const homeUrl = scopeUrl("./");
const indexUrl = scopeUrl("index.html");
const audioRootUrl = scopeUrl("audio/");

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL.map(scopeUrl)))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) || name.startsWith(LEGACY_CACHE_PREFIX))
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  // Pronunciation audio deliberately keeps normal browser/network behavior.
  if (requestUrl.href.startsWith(audioRootUrl)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request, { ignoreSearch: true })
          || await cache.match(homeUrl)
          || await cache.match(indexUrl);
        return cached || fetch(request);
      })
    );
    return;
  }

  if (shellUrls.has(requestUrl.href)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request, { ignoreSearch: true });
        return cached || fetch(request);
      })
    );
  }
});

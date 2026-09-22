"use strict";

// Keep only the shared shell for offline fallback. Language packs and audio
// load on demand and use the browser's ordinary HTTP cache.
const CACHE_PREFIX = "yujian-world-shell-";
const LEGACY_CACHE_PREFIX = "travel-vocab-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v61`;
const APP_SHELL = [
  "./",
  "index.html",
  "styles.css",
  "core/content-registry.js",
  "core/destinations.js",
  "core/beginner-module-registry.js",
  "core/emergency-card.js",
  "core/favorites.js",
  "app.js",
  "manifest.webmanifest"
];
const scopeUrl = (path) => new URL(path, self.registration.scope).href;
const shellUrls = new Set(APP_SHELL.map(scopeUrl));
const homeUrl = scopeUrl("./");

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL.map(scopeUrl)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names
        .filter((name) => (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) || name.startsWith(LEGACY_CACHE_PREFIX))
        .map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (!shellUrls.has(requestUrl.href) && request.mode !== "navigate") return;

  // Prefer the server so a refresh sees the latest deployment.
  event.respondWith(
    fetch(request, { cache: "no-cache" }).then((response) => {
      if (response.ok && response.type === "basic") {
        const key = request.mode === "navigate" ? homeUrl : request;
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(key, response.clone())));
      }
      return response;
    }).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (request.mode === "navigate" ? await cache.match(homeUrl) : await cache.match(request))
        || Response.error();
    })
  );
});

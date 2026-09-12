"use strict";

// Increment this version whenever a precached application-shell file changes.
const CACHE_PREFIX = "travel-vocab-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v3`;
const APP_SHELL = [
  "./",
  "index.html",
  "styles.css",
  "data.js",
  "app.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png"
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
          .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
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

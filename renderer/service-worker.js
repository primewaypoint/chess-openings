'use strict';

// ChessOpenings offline service worker.
// Everything the app needs is a local static file, so we precache the whole
// app shell on install and then serve cache-first (falling back to the network
// only for things not yet cached). Bump CACHE_VERSION whenever any app file
// changes so returning users pick up the new version.
const CACHE_VERSION = 'chessopenings-v1.5.4';

const PRECACHE = [
  './',
  './index.html',
  './study.html',
  './review.html',
  './stats.html',
  './settings.html',
  './style.css',
  './manifest.webmanifest',
  './date-utils.js',
  './openings.js',
  './deeper-lines.js',
  './sides.js',
  './streak.js',
  './stats.js',
  './stats-page.js',
  './sounds.js',
  './board-theme.js',
  './review-schedule.js',
  './review.js',
  './study.js',
  './app.js',
  './settings.js',
  './pwa.js',
  '../assets/jquery.min.js',
  '../assets/chess.js',
  '../assets/chessboard.js',
  '../assets/chessboard.css',
  '../assets/icon.png',
  '../assets/pieces/wP.png', '../assets/pieces/wN.png', '../assets/pieces/wB.png',
  '../assets/pieces/wR.png', '../assets/pieces/wQ.png', '../assets/pieces/wK.png',
  '../assets/pieces/bP.png', '../assets/pieces/bN.png', '../assets/pieces/bB.png',
  '../assets/pieces/bR.png', '../assets/pieces/bQ.png', '../assets/pieces/bK.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    // ignoreSearch so query-string routes (study.html?id=italian-game) match
    // the cached study.html — otherwise they'd miss the cache and fail offline.
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Runtime-cache same-origin GETs we didn't precache
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          // Offline and not in cache: for a page navigation fall back to the
          // app shell so we never respond with null (which shows a browser error).
          if (req.mode === 'navigate') return caches.match('./index.html');
          return caches.match(req, { ignoreSearch: true });
        });
    })
  );
});

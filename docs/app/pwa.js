'use strict';

// Registers the offline service worker — but ONLY on the web (http/https).
// In the Electron desktop build the pages load over file://, where service
// workers don't apply; guarding on protocol keeps it a harmless no-op there.
(function () {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'https:' && location.protocol !== 'http:') return;
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('service-worker.js').catch(function () {
      /* registration can fail on unsupported/private-mode browsers — ignore */
    });
  });
})();

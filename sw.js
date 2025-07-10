/**
 * Service Worker for PWA functionality
 * Using Workbox library to simplify caching and offline support
 * Caches static assets and song metadata for offline access
 * Audio files are not cached due to potential size constraints
 */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

// Setting up Workbox precaching for static assets
workbox.precaching.precacheAndRoute([
  { url: "/", revision: "1" },
  { url: "/index.html", revision: "1" },
  { url: "/styles.css", revision: "1" },
  { url: "/script.js", revision: "1" },
  { url: "/kk.gif", revision: "1" },
  { url: "/images/icon-192x192.png", revision: "1" },
  // External dependencies
  { url: "https://cdn.tailwindcss.com", revision: null },
  { url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css", revision: null },
  { url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", revision: null },
]);

// Cache song metadata (images) using CacheFirst strategy
workbox.routing.registerRoute(
  ({ url }) => url.pathname.match(/\.(jpg|jpeg|png|webp)$/),
  new workbox.strategies.CacheFirst({
    cacheName: "song-images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

// Handle fetch requests for audio files with NetworkOnly strategy
// Audio files are not cached to avoid excessive storage use
workbox.routing.registerRoute(
  ({ url }) => url.pathname.match(/\.mp3$/),
  new workbox.strategies.NetworkOnly()
);

// Fallback to index.html for navigation requests (SPA behavior)
workbox.routing.registerRoute(
  ({ request }) => request.mode === "navigate",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "pages",
  })
);

// Handle offline page display
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match("/index.html");
    })
  );
});
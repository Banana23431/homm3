self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('hota-cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/angel.jpg',
                '/sword.png',
                '/grass.png',
                '/goldish4.png',
                '/goldish2.png',
                '/goldish3.png',
                '/map1.png',
                '/map2.png',
                '/map3.png',
                '/map4.png',
                '/twitter_white.png',
                '/logo_white_discord.png',
                '/vector.png',
                '/point.png',
                '/vector-1.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
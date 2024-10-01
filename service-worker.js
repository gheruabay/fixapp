const CACHE_NAME = 'my-cache-v1';
const CACHE_ASSETS = [
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/remove-tag.js',
    '/images/icon.png'
];

// Cài đặt Service Worker và cache tài nguyên
self.addEventListener('install', event => {
    console.log('Service Worker installed');
    // @ts-ignore
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching assets');
                return cache.addAll(CACHE_ASSETS);
            })
    );
});

// Xử lý yêu cầu fetch và lấy từ cache nếu có
self.addEventListener('fetch', event => {
    // @ts-ignore
    console.log('Fetching:', event.request.url);
    // @ts-ignore
    event.respondWith(
        // @ts-ignore
        caches.match(event.request).then(response => {
            // @ts-ignore
            return response || fetch(event.request);
        })
    );
});


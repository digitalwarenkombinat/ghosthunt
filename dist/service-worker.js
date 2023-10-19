// Files to cache
const cacheName = 'ghosthunt-v0.1';
const contentToCacheiOS = [
  'index.html',
  'images/bg.jpg',
  'images/menu.jpg',
  'fonts/Creepster/Creepster-Regular.ttf',
  'fonts/para.otf',
  'images/icon.png',
  'videos/intro.1.mp4',
  'models/setup.3/setuup.3.usdz',
  'audio/dist/audio/Voices, Laugh, Male, Mysterious Laughter SND67498.wav',
  'images/holger.png',
  'images/holger.bg.jpg',
  'videos/intro.2.mp4',
  'videos/intro.3.mp4',
  'videos/intro.4.mp4',
  'videos/intro.6.mp4',
  'images/paranormal.jpg',
  'images/cam.jpg',
  'videos/1.1.mp4',
  'models/kapitel.1/kapitel.1.usdz',
  'videos/1.3.mp4',
  'videos/1.5.mp4',
  'models/herbert/herbert.usdz',
  'models/kapitel.2/kapitel.2.usdz',
  'models/rosa/rosa.usdz'
];

const urlsToCacheAndroid = [ 
  'index.html',
  'images/bg.jpg',
  'images/menu.jpg',
  'fonts/Creepster/Creepster-Regular.ttf',
  'fonts/para.otf',
  'images/icon.png',
  'videos/intro.1.mp4',
  'models/setup.3/setuup.3.glb',
  'audio/dist/audio/Voices, Laugh, Male, Mysterious Laughter SND67498.wav',
  'images/holger.png',
  'images/holger.bg.jpg',
  'videos/intro.2.mp4',
  'videos/intro.3.mp4',
  'videos/intro.4.mp4',
  'videos/intro.6.mp4',
  'images/paranormal.jpg',
  'images/cam.jpg',
  'videos/1.1.mp4',
  'models/kapitel.1/kapitel.1.glb',
  'videos/1.3.mp4',
  'videos/1.5.mp4',
  'models/herbert/herbert.glb',
  'models/kapitel.2/kapitel.2.glb',
  'models/rosa/rosa.glb'
  ];

const self = this;

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    // Cache http and https only, skip unsupported chrome-extension:// and file://...
    if (!(
       e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
    )) {
        return; 
    }

  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

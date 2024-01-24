const cacheName = "ghosthunt-v0.3.5";
const urlsToCacheiOS = [
  '/',
  '/index.html',
  '/data/locations.js',
  '/data/mapbox.js',
  '/data/riddles.js',
  '/data/translations.js',
  '/fonts/Averia_Serif_Libre/AveriaSerifLibre-Bold.ttf',
  '/fonts/Creepster/Creepster-Regular.ttf',
  '/fonts/para.otf',
  '/images/android_install.svg',
  '/images/ar_icon.png',
  '/images/bg.jpg',
  '/images/cam.jpg',
  '/images/holger.png',
  '/images/hotspot.jpg',
  '/images/hotspot.splash.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/icon.png',
  '/images/intro.1.png',
  '/images/intro.1.title.png',
  '/images/intro.3.jpg',
  '/images/intro.6.jpg',
  '/images/ios_share.svg',
  '/images/loading.png',
  '/images/menu.jpg',
  '/models/1.hotspot/1.hotspot.ghost.usdz',
  '/models/1.hotspot/1.hotspot.usdz',
  '/models/2.hotspot/2.hotspot.ghost.usdz',
  '/models/2.hotspot/2.hotspot.usdz',
  '/models/3.hotspot/3.hotspot.ghost.usdz',
  '/models/3.hotspot/3.hotspot.usdz',
  '/models/4.hotspot/4.hotspot.ghost.usdz',
  '/models/4.hotspot/4.hotspot.usdz',
  '/models/5.hotspot/5.hotspot.ghost.usdz',
  '/models/5.hotspot/5.hotspot.usdz',
  '/models/6.hotspot/6.hotspot.ghost.usdz',
  '/models/6.hotspot/6.hotspot.usdz',
  '/models/7.hotspot/7.hotspot.ghost.usdz',
  '/models/7.hotspot/7.hotspot.usdz',
  '/models/8.hotspot/8.hotspot.ghost.usdz',
  '/models/8.hotspot/8.hotspot.usdz',
  '/models/9.hotspot/9.hotspot.ghost.usdz',
  '/models/9.hotspot/9.hotspot.usdz',
  '/models/10.hotspot/10.hotspot.ghost.usdz',
  '/models/10.hotspot/10.hotspot.usdz',
  '/models/outro/outro.usdz',
  '/models/setup/setup.camera.usdz',
  '/videos/1.hotspot.intro.mp4',
  '/videos/1.hotspot.outro.mp4',
  '/videos/2.hotspot.intro.mp4',
  '/videos/2.hotspot.outro.mp4',
  '/videos/3.hotspot.intro.mp4',
  '/videos/3.hotspot.outro.mp4',
  '/videos/4.hotspot.intro.mp4',
  '/videos/4.hotspot.outro.mp4',
  '/videos/5.hotspot.intro.mp4',
  '/videos/5.hotspot.outro.mp4',
  '/videos/6.hotspot.intro.mp4',
  '/videos/6.hotspot.outro.mp4',
  '/videos/7.hotspot.intro.mp4',
  '/videos/7.hotspot.outro.mp4',
  '/videos/8.hotspot.intro.mp4',
  '/videos/8.hotspot.outro.mp4',
  '/videos/9.hotspot.intro.mp4',
  '/videos/9.hotspot.outro.mp4',
  '/videos/10.hotspot.intro.mp4',
  '/videos/10.hotspot.outro.mp4',
  '/videos/intro.2.mp4',
  '/videos/intro.3.mp4',
  '/videos/intro.4.mp4',
  '/videos/intro.5.mp4',
  '/videos/intro.7.mp4',
  '/videos/intro.8.mp4',
  '/audio/click.mp4',
  '/audio/ring.mp4',
  '/audio/bg.1.mp4',
];

const urlsToCacheAndroid = [
  '/',
  '/index.html',
  '/data/locations.js',
  '/data/mapbox.js',
  '/data/riddles.js',
  '/data/translations.js',
  '/fonts/Averia_Serif_Libre/AveriaSerifLibre-Bold.ttf',
  '/fonts/Creepster/Creepster-Regular.ttf',
  '/fonts/para.otf',
  '/images/android_install.svg',
  '/images/ar_icon.png',
  '/images/bg.jpg',
  '/images/cam.jpg',
  '/images/holger.png',
  '/images/hotspot.jpg',
  '/images/hotspot.splash.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/icon.png',
  '/images/intro.1.png',
  '/images/intro.1.title.png',
  '/images/intro.3.jpg',
  '/images/intro.6.jpg',
  '/images/ios_share.svg',
  '/images/loading.png',
  '/images/menu.jpg',
  '/models/1.hotspot/1.hotspot.ghost.glb',
  '/models/1.hotspot/1.hotspot.glb',
  '/models/2.hotspot/2.hotspot.ghost.glb',
  '/models/2.hotspot/2.hotspot.glb',
  '/models/3.hotspot/3.hotspot.ghost.glb',
  '/models/3.hotspot/3.hotspot.glb',
  '/models/4.hotspot/4.hotspot.ghost.glb',
  '/models/4.hotspot/4.hotspot.glb',
  '/models/5.hotspot/5.hotspot.ghost.glb',
  '/models/5.hotspot/5.hotspot.glb',
  '/models/6.hotspot/6.hotspot.ghost.glb',
  '/models/6.hotspot/6.hotspot.glb',
  '/models/7.hotspot/7.hotspot.ghost.glb',
  '/models/7.hotspot/7.hotspot.glb',
  '/models/8.hotspot/8.hotspot.ghost.glb',
  '/models/8.hotspot/8.hotspot.glb',
  '/models/9.hotspot/9.hotspot.ghost.glb',
  '/models/9.hotspot/9.hotspot.glb',
  '/models/10.hotspot/10.hotspot.ghost.glb',
  '/models/10.hotspot/10.hotspot.glb',
  '/models/outro/outro.glb',
  '/models/setup/setup.camera.glb',
  '/videos/1.hotspot.intro.mp4',
  '/videos/1.hotspot.outro.mp4',
  '/videos/2.hotspot.intro.mp4',
  '/videos/2.hotspot.outro.mp4',
  '/videos/3.hotspot.intro.mp4',
  '/videos/3.hotspot.outro.mp4',
  '/videos/4.hotspot.intro.mp4',
  '/videos/4.hotspot.outro.mp4',
  '/videos/5.hotspot.intro.mp4',
  '/videos/5.hotspot.outro.mp4',
  '/videos/6.hotspot.intro.mp4',
  '/videos/6.hotspot.outro.mp4',
  '/videos/7.hotspot.intro.mp4',
  '/videos/7.hotspot.outro.mp4',
  '/videos/8.hotspot.intro.mp4',
  '/videos/8.hotspot.outro.mp4',
  '/videos/9.hotspot.intro.mp4',
  '/videos/9.hotspot.outro.mp4',
  '/videos/10.hotspot.intro.mp4',
  '/videos/10.hotspot.outro.mp4',
  '/videos/intro.2.mp4',
  '/videos/intro.3.mp4',
  '/videos/intro.4.mp4',
  '/videos/intro.5.mp4',
  '/videos/intro.7.mp4',
  '/videos/intro.8.mp4',
  '/audio/click.mp4',
  '/audio/ring.mp4',
  '/audio/bg.1.mp4',
  ];

const self = this;

// Populating your cache
const addResourcesToCache = async () => {
  const cache = await caches.open(cacheName);
  const is_safari = navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1 && navigator.userAgent.indexOf("Edg") <= -1 && navigator.userAgent.indexOf('SamsungBrowser') <= - 1;
  console.log('ServiceWorker: Caching files:', is_safari ? urlsToCacheiOS.length : urlsToCacheAndroid.length);

  try {
    await cache.addAll(is_safari ? urlsToCacheiOS : urlsToCacheAndroid);
  } catch (err) {
    console.error('sw: cache.addAll');
    for (let url of is_safari ? urlsToCacheiOS : urlsToCacheAndroid) {
      try {
        await cache.add(url);
      } catch (err) {
        console.warn('sw: cache.add', url);
      }
    }
  }
};

const putInCache = async (request, response) => {
  if (response.status === 200) {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
  } else {
    console.warn('Partial response (status code 206) - not caching:', request.url);
  }
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

// Activate service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((existingCacheName) => {
            if (existingCacheName !== cacheName) {
              return caches.delete(existingCacheName);
            }
          })
        );
      }),
      enableNavigationPreload(),
    ])
  );
});

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache());
});

// Custom responses to requests
self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

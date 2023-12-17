const cacheName = "ghosthunt-v0.3";
const urlsToCacheiOS = [
  '/',
  '/index.html',
  '/fonts/Creepster/Creepster-Regular.ttf',
  '/fonts/para.otf',
  '/images/ar_icon.png',
  '/images/bg.jpg',
  '/images/cam.jpg',
  '/images/holger.png',
  '/images/hotspot.jpg',
  '/images/icon.png',
  '/images/intro.1.png',
  '/images/intro.3.jpg',
  '/images/loading.png',
  '/images/menu.jpg',
  '/models/herbert/herbert.usdz',
  '/models/kapitel.1/kapitel.1.usdz',
  '/models/kapitel.2/kapitel.2.usdz',
  '/models/kapitel.3/kapitel.3.usdz',
  '/models/kapitel.4/kapitel.4.usdz',
  '/models/rosa/rosa.usdz',
  '/models/setup/setup.usdz',
  '/videos/1.hotspot.intro.mp4',
  '/videos/1.hotspot.outro.1.mp4',
  '/videos/1.hotspot.outro.2.mp4',
  '/videos/2.hotspot.outro.1.mp4',
  '/videos/2.hotspot.outro.2.mp4',
  '/videos/2.intro.mp4',
  '/videos/3.hotspot.outro.1.mp4',
  '/videos/3.hotspot.outro.2.mp4',
  '/videos/4.hotspot.outro.1.mp4',
  '/videos/4.hotspot.outro.2.mp4',
  '/videos/4.intro.mp4',
  '/videos/5.intro.mp4',
  '/videos/7.intro.mp4'
];

const urlsToCacheAndroid = [
  '/',
  '/index.html',
  '/fonts/Creepster/Creepster-Regular.ttf',
  '/fonts/para.otf',
  '/images/ar_icon.png',
  '/images/bg.jpg',
  '/images/cam.jpg',
  '/images/holger.png',
  '/images/hotspot.jpg',
  '/images/icon.png',
  '/images/intro.1.png',
  '/images/intro.3.jpg',
  '/images/loading.png',
  '/images/menu.jpg',
  '/models/herbert/herbert.glb',
  '/models/kapitel.1/kapitel.1.glb',
  '/models/kapitel.2/kapitel.2.glb',
  '/models/kapitel.3/kapitel.3.glb',
  '/models/kapitel.4/kapitel.4.glb',
  '/models/rosa/rosa.glb',
  '/models/setup/setup.glb',
  '/videos/1.hotspot.intro.mp4',
  '/videos/1.hotspot.outro.1.mp4',
  '/videos/1.hotspot.outro.2.mp4',
  '/videos/2.hotspot.outro.1.mp4',
  '/videos/2.hotspot.outro.2.mp4',
  '/videos/2.intro.mp4',
  '/videos/3.hotspot.outro.1.mp4',
  '/videos/3.hotspot.outro.2.mp4',
  '/videos/4.hotspot.outro.1.mp4',
  '/videos/4.hotspot.outro.2.mp4',
  '/videos/4.intro.mp4',
  '/videos/5.intro.mp4',
  '/videos/7.intro.mp4'
  ];

  const self = this;

  // Populating your cache
  const addResourcesToCache = async () => {
    const cache = await caches.open(cacheName);
    const is_safari = navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1 && navigator.userAgent.indexOf("Edg") <= -1 && navigator.userAgent.indexOf('SamsungBrowser') <= - 1;
    console.log('ServiceWorker: Caching files:', urlsToCacheAndroid.length);
    // await cache.addAll(is_safari ? urlsToCacheiOS : urlsToCacheAndroid);
    let addedToCache
    try {
      addedToCache = await cache.addAll(is_safari ? urlsToCacheiOS : urlsToCacheAndroid);
    } catch (err) {
      console.error('sw: cache.addAll');
      for (let url of is_safari ? urlsToCacheiOS : urlsToCacheAndroid) {
        try {
          addedToCache = await cache.add(url);
        } catch (err) {
          console.warn('sw: cache.add',url);
        }
      }
    }

    return addedToCache;
  };
  
  const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
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
    event.waitUntil(enableNavigationPreload());
  });

  // Install service worker
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache(),
    );
  });

  // Custom responses to requests
  self.addEventListener("fetch", (event) => {
    event.respondWith(cacheFirst(event.request));
  });
  
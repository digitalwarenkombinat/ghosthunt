const cacheName = "ghosthunt-v0.1";
const urlsToCacheiOS = [
  '/',
  'index.html',
  'fonts/Creepster/Creepster-Regular.ttf',
  'fonts/para.otf',
  'images/bg.jpg',
  'images/cam.jpg',
  'images/holger.bg.jpg',
  'images/holger.png',
  'images/icon.png',
  'images/menu.jpg',
  'images/paranormal.jpg',
  'models/herbert/herbert.usdz',
  'models/kapitel.1/kapitel.1.usdz',
  'models/kapitel.2/kapitel.2.usdz',
  'models/rosa/rosa.usdz',
  'models/setup.3/setup.3.usdz',
  'videos/1.1.mp4',
  'videos/1.3.mp4',
  'videos/1.5.mp4',
  'videos/intro.1.mp4',
  'videos/intro.2.mp4',
  'videos/intro.3.mp4',
  'videos/intro.4.mp4',
  'videos/intro.6.mp4',
];

const urlsToCacheAndroid = [
  '/',
  'index.html',
  'fonts/Creepster/Creepster-Regular.ttf',
  'fonts/para.otf',
  'images/bg.jpg',
  'images/cam.jpg',
  'images/holger.bg.jpg',
  'images/holger.png',
  'images/icon.png',
  'images/menu.jpg',
  'images/paranormal.jpg',
  'models/herbert/herbert.glb',
  'models/kapitel.1/kapitel.1.glb',
  'models/kapitel.2/kapitel.2.glb',
  'models/rosa/rosa.glb',
  'models/setup.3/setup.3.glb',
  'videos/1.1.mp4',
  'videos/1.3.mp4',
  'videos/1.5.mp4',
  'videos/intro.1.mp4',
  'videos/intro.2.mp4',
  'videos/intro.3.mp4',
  'videos/intro.4.mp4',
  'videos/intro.6.mp4',
  ];

  const self = this;

  // Populating your cache
  const addResourcesToCache = async () => {
    const cache = await caches.open(cacheName);
    const is_safari = navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;
    await cache.addAll(is_safari ? urlsToCacheiOS : urlsToCacheAndroid);
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
  
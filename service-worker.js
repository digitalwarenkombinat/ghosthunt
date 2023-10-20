// Files to cache
const cacheName = "ghosthunt-v0.1";
const urlsToCacheiOS = [
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

  // Install SW
  self.addEventListener('install', (event) => {
      event.waitUntil(
          caches.open(CACHE_NAME)
              .then((cache) => {
                  console.log('Opened cache');
  
                  const is_safari = navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;
  
                  return cache.addAll(is_safari ? urlsToCacheiOS : urlsToCacheAndroid);
              })
      )
  });
  
  // Listen for requests
  self.addEventListener('fetch', (event) => {
      event.respondWith(
          caches.match(event.request)
              .then(() => {
                  return fetch(event.request)
                      .catch(() => caches.match('offline.html'))
              })
      )
  });
  
  // Activate the SW
  self.addEventListener('activate', (event) => {
      const cacheWhiteList =[];
      cacheWhiteList.push(CACHE_NAME);
  
      event.waitUntil(
          caches.keys().then((cacheName) => Promise.all(
               cacheName.map((cacheName) => {
                   if(!cacheWhiteList.includes(cacheName)) {
                       return caches.delete(cacheName);
                   }
               })
          ))
      )
  });
  

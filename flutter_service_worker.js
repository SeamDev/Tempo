'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d0c339fd9305a81fdcf3233bf3f8b4b7",
"assets/AssetManifest.bin.json": "e72cde507058ad222f0b43d841c02fec",
"assets/AssetManifest.json": "ef1c03e31c3a4d067aecf6ce876a18ff",
"assets/assets/add.png": "9c296c03fcc10e155e9ecc94c0487101",
"assets/assets/addphoto.png": "a35ffa28a8b0b764fc411ee63670a7f3",
"assets/assets/add_post.png": "a23f49f979a385be57bf12f0c104855f",
"assets/assets/auth_back.png": "0fe829c497dcf3bd8bf9b4f384085870",
"assets/assets/badge.png": "6fce6ce65f589c6383c0cbc1c13c7496",
"assets/assets/Card%2520Image-1.png": "2d0d0195965335ce9e3d0bd93aa0a4c4",
"assets/assets/Card%2520Image-2.png": "1f2fee35eb6ef67faff91812e4852a3c",
"assets/assets/Card%2520Image-3.png": "bced697263d801b27a692995de712104",
"assets/assets/Card%2520Image-5.png": "bab00e3ecbc02937beb48310c884569f",
"assets/assets/Card%2520Image.png": "73d9cfd4861a1c64ee7bf8350ccfcc19",
"assets/assets/Chat.png": "f496488eb337eafc95ef77536508f76b",
"assets/assets/cloud.png": "1ccfe2ca99a74a2c1276fac1bf9b2d61",
"assets/assets/dialog.png": "85b8af2dbfa67d3e6eb80bebdd190c09",
"assets/assets/emoji.png": "81ecb07ee35d7347b71859f245b9be01",
"assets/assets/Frame.png": "3c782ed5621eaf32616c73a1b4fd794e",
"assets/assets/Heart.png": "8546bfd0d424bce0cc613cdc93d2fe3b",
"assets/assets/Heart1.png": "2b3be85f93fbc0507cf257ad6d2aab3c",
"assets/assets/hum.png": "d608d1e0e7beba1008d407599f9fc856",
"assets/assets/loadin.json": "8c1ac511b3e89e0dbbc9a2d1cff802e1",
"assets/assets/loading.lottie": "5fdc64a1160dba3171755cd1484ab461",
"assets/assets/man.png": "d0abcb235c3a0894581a93727cfb9fb7",
"assets/assets/man1.jpg": "0c3b50e6886db74a7ebe968a9856855e",
"assets/assets/man2.jpg": "6a50278ed2e65dd3a547f1c1802c11a9",
"assets/assets/man3.jpg": "114e5ace3c68f181ba9ad6d52094ee5a",
"assets/assets/man_pose.png": "4c532df26480812aaa542bfa8647f232",
"assets/assets/people.png": "c5bee23cbbba9be80718a96f29486b7a",
"assets/assets/point.png": "4bbf1b017029784da9d116421987f6f3",
"assets/assets/rainbow.png": "8c9223b410545c6e54542dcce9d9e434",
"assets/assets/Rectangle%25202-1.png": "30810d748b1ab224557d19cfad516640",
"assets/assets/Rectangle%25202-2.png": "d3f6c9f89acbb1dcbf5ad24b59c5905c",
"assets/assets/Rectangle_2.png": "0b4bf50c2b360c818fa862c579ba9494",
"assets/assets/Send.png": "7df0076072a1e7b42d4214c6483a7070",
"assets/assets/sky.png": "eb60e7a612300502447501b95d57ef09",
"assets/assets/suncloud.png": "f38c1162c82c083db3fc93a32d8c0dec",
"assets/assets/switch.png": "255d2f85c8b8bc5826ba4ed906081249",
"assets/assets/time.png": "13c17c8b3ddbe0053d7ee7f2a8a2a355",
"assets/assets/trophy.png": "755238f28e48f0c3c3e57818a561aaa4",
"assets/assets/weather_bad.png": "1a95148462e8a5161e710a9daf17c96f",
"assets/assets/weather_good.png": "d618be4795daf4edae771a0195133202",
"assets/assets/weather_mid.png": "5bf8d82a088806d59230cd6a4049285f",
"assets/assets/wind.png": "8f053763d3763030486af1ef66b457d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a373a8d8e4008f367688eacfe6419874",
"assets/NOTICES": "5c632be25831943b1ca752ceb20ac281",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3595590177d2c74ac606e79e5e1018cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67dbaa793decd146c2f6adab4a5e8317",
"/": "67dbaa793decd146c2f6adab4a5e8317",
"main.dart.js": "4a07dac26a2f24b9473222450164fc1a",
"manifest.json": "8cd2bab8ce08ce2804895901d4ec8f6d",
"version.json": "5c6f9c2c97ce604b537ad80d63b59f33"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

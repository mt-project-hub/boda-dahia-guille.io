'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "23cc4fe66ec66df2fdb8b4c18df859a3",
"version.json": "20894004c01919815aaf31ddfe8f4454",
"index.html": "68c1ca9011f9b4e0d51509df3c230c15",
"/": "68c1ca9011f9b4e0d51509df3c230c15",
"main.dart.js": "1d9ce2e8f0e5f052b6e1376480b5f386",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3ef06c734090aa44a0600a6df2b5765f",
"assets/AssetManifest.json": "601e08a6800b4df4edb9b6074a50c35c",
"assets/NOTICES": "6f615491e89d70c1631bd14dd7b1e9c6",
"assets/FontManifest.json": "90fdedf7287496b4e7046d1a6d12dec7",
"assets/AssetManifest.bin.json": "0049d4a6c45778fd858ddf7e473ce872",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f87dfd564df9b670fb22c9a903b94a40",
"assets/fonts/Playfair_Display/Playfair_Display/PlayfairDisplay-Bold.ttf": "9b38798112efb7cf6eca1de031cec4ca",
"assets/fonts/Playfair_Display/Playfair_Display/PlayfairDisplay-SemiBold.ttf": "54a87ef71bd558e23e1bdc47b4496bc1",
"assets/fonts/Playfair_Display/Playfair_Display/PlayfairDisplay-Medium.ttf": "42e5edcf78a90b7358c0b95bfc55ce35",
"assets/fonts/Playfair_Display/Playfair_Display/PlayfairDisplay-BoldItalic.ttf": "24356ab9abfd688e49099f41a34e83aa",
"assets/fonts/Playfair_Display/Playfair_Display/PlayfairDisplay-Italic.ttf": "f38e89a44737b67d5dba2d9c860c3b65",
"assets/fonts/Playfair_Display/Playfair_Display/PlayfairDisplay-Regular.ttf": "1a28efdbd2876d90e554a67faabad24b",
"assets/fonts/Dancing_Script/DancingScript-Bold.ttf": "6c5b41b0622681bb6aafb3d4ed2a1171",
"assets/fonts/Dancing_Script/DancingScript-Medium.ttf": "0a4a82df04cdc00d8ef9673b50842e14",
"assets/fonts/Dancing_Script/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/fonts/Dancing_Script/DancingScript-SemiBold.ttf": "2b9651e8ec4681763100fbe7d5e5f4d5",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/curvas01.svg": "68af64249ae1a162418bcdac4b046d09",
"assets/assets/curvas02.svg": "0aea547aa3e1938a2acbd89589965087",
"assets/assets/backflor.png": "5a1222018f04f5a224017f5f990eebb3",
"assets/assets/falta_back1.svg": "4007fea01c7ba3731b1cd02ae262b696",
"assets/assets/falta_back2.png": "e2abad077b9311d332974d31c5086a01",
"assets/assets/heart.png": "9f61111962cc66e53f0c907d4fcc17cb",
"assets/assets/comilla-cierre.svg": "01576806bfd4371742096434551a5bc7",
"assets/assets/table1.png": "7ce22973ad0345dfea282f30c5a5a592",
"assets/assets/andand.png": "77b8d67e525b28a3bb9775bf58e5d83b",
"assets/assets/table2.png": "f637bd11897b701c01988264ba502c02",
"assets/assets/comilla-apertura.svg": "6b32e479fdd446491e154f971af707a2",
"assets/assets/flor.png": "9de659969c25e7cc68385e2fb178f23a",
"assets/assets/fondo.png": "7fe97e39ff70bc61829a13943fc30370",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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

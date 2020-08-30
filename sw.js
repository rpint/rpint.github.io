importScripts("/js/sw-toolbox.js");
var cacheVersion = "-17104";
var staticImageCacheName = "image" + cacheVersion;
var staticAssetsCacheName = "assets" + cacheVersion;
var contentCacheName = "content" + cacheVersion;
var vendorCacheName = "vendor" + cacheVersion; 
var maxEntries = 100; /* 最大缓存数量 */
var maxAgeSeconds = 60*60*24; /* 最大缓存时间，单位(s) */
self.toolbox.router.get("/(.*)", self.toolbox.networkFirst, {
    origin: /noscos.nos-eastchina1\.126\.net/,
    cache: {
        name: staticImageCacheName,
        maxEntries: maxEntries
      }
  });
self.toolbox.router.get("/(.*)", self.toolbox.networkFirst, {
    origin: /www\.tangruiping\.com/,
    cache: {
       name: contentCacheName,
       maxEntries: maxEntries
}
  });

/* 缓存cdn静态资源 */
self.toolbox.router.get("/gh/(.*)", self.toolbox.fastest, {origin: /cdn\.jsdelivr\.net/,});


/* NoCache */
self.toolbox.router.get("/sw.js",self.toolbox.networkFirst);

self.addEventListener("install",
function(event) {return event.waitUntil(self.skipWaiting())
});
self.addEventListener("activate",
function(event) {return event.waitUntil(self.clients.claim())
})
importScripts("https://static-1252739229.cos.ap-chengdu.myqcloud.com/libs/js/sw-toolbox.js");
var cacheVersion = "-17104";
var staticImageCacheName = "image" + cacheVersion;
var staticAssetsCacheName = "assets" + cacheVersion;
var contentCacheName = "content" + cacheVersion;
var vendorCacheName = "vendor" + cacheVersion; 
var maxEntries = 100; /* 最大缓存数量 */
var maxAgeSeconds = 60*60*1; /* 最大缓存时间，单位(s) */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /noscos.nos-eastchina1\.126\.net/,
    cache: {
        name: staticImageCacheName,
        maxEntries: maxEntries
      }
  });


/* 缓存cdn静态资源 */
self.toolbox.router.get("/gh/(.*)", self.toolbox.cacheFirst, {origin: /cdn\.jsdelivr\.net/,});

/* Google Analytics & baidu & Valine */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /(www\.google-analytics\.com|ssl\.google-analytics\.com)/,
    cache: {
        name: vendorCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /hm\.baidu\.com/,
    cache: {
        name: vendorCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /tab\.avoscloud\.com/,
    cache: {
        name: vendorCacheName,
        maxEntries: maxEntries
    }
});


/* NoCache */
self.toolbox.router.get("/sw.js",self.toolbox.cacheFirst);

self.addEventListener("install",
function(event) {return event.waitUntil(self.skipWaiting())
});
self.addEventListener("activate",
function(event) {return event.waitUntil(self.clients.claim())
})
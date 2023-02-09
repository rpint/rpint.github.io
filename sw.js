importScripts("https://code.bdstatic.com/npm/yu6@1.0.2/hexo/sw-toolbox.js");
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
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /gravatar\.loli\.net/,
    cache: {
        name: staticImageCacheName,
        maxEntries: maxEntries
      }
  });



/* 缓存cdn静态资源 */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /file\.myqcloud\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /cdn\.jsdelivr\.net/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /lib\.baomitu\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /cdn\.staticfile\.org/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /unpkg\.zhimg\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /code\.bdstatic\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /npm\.elemecdn\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /github\.elemecdn\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /shadow\.elemecdn\.com/,});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /ae01\.alicdn\.com/,});

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
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /console\.leancloud\.app/,
    cache: {
        name: vendorCacheName,
        maxEntries: maxEntries
    }
});


/* NoCache */
self.toolbox.router.get("/service-worker.js",self.toolbox.cacheFirst);
self.toolbox.router.get("/sw.js",self.toolbox.cacheFirst);

self.addEventListener("install",
function(event) {return event.waitUntil(self.skipWaiting())
});
self.addEventListener("activate",
function(event) {return event.waitUntil(self.clients.claim())
})
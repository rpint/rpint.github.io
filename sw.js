importScripts("/js/sw-toolbox.js");
var cacheVersion = "-17104";
var staticImageCacheName = "image" + cacheVersion;
var staticAssetsCacheName = "assets" + cacheVersion;
var contentCacheName = "content" + cacheVersion;
var vendorCacheName = "vendor" + cacheVersion; 
var maxEntries = 100; /* ��󻺴����� */
var maxAgeSeconds = 60*60*24; /* ��󻺴�ʱ�䣬��λ(s) */
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
self.toolbox.router.get("/css/(.*)", self.toolbox.networkFirst, {origin: /cdn\.jsdelivr\.net/,});
self.toolbox.router.get("/js/(.*)", self.toolbox.networkFirst, {origin: /cdn\.jsdelivr\.net/,});
self.toolbox.router.get("/fonts/(.*)", self.toolbox.networkFirst, {origin: /cdn\.jsdelivr\.net/,});
self.toolbox.router.get("/images/(.*)", self.toolbox.networkFirst, {origin: /cdn\.jsdelivr\.net/,});
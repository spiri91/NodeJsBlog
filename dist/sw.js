parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"NqYy":[function(require,module,exports) {
var n=self.location.origin+"/#/",e="bz-cache",t=["/","sw.js","back-arrow.png","next-arrow.png","share.png","icon192x192.png","icon512x512.png","icon144x144.png","darkForest3.jpeg"];self.addEventListener("install",function(n){n.waitUntil(caches.open(e).then(function(n){return n.addAll(t)}))}),self.addEventListener("activate",function(n){return n.waitUntil(caches.keys().then(function(n){return Promise.all(n.map(function(n){if(n!==e)return caches.delete(n)}))})),self.clients.claim()}),self.addEventListener("fetch",function(n){"PUT"!==n.request.method&&"POST"!==n.request.method||!1!==navigator.onLine?n.respondWith(caches.match(n.request).then(function(e){return e||fetch(n.request)})):new Error("No internet connectivity!")}),self.addEventListener("push",function(n){var e=JSON.parse(n.data.text()),t=e.title,i={body:e.text,icon:"icon512x512.png",badge:"icon192x192.png"};self.registration.showNotification(t,i)}),self.addEventListener("notificationclick",function(e){if("false"!==e.notification.openApp){var t=e.notification.title.replace(/ /g,"-");e.notification.close(),clients.openWindow("".concat(n,"article/").concat(t))}});
},{}]},{},["NqYy"], null)
//# sourceMappingURL=/sw.map
parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"NqYy":[function(require,module,exports) {
var e=self.location.origin+"/#/",t="bz-cache",n=["/"];self.addEventListener("install",function(e){e.waitUntil(caches.open(t).then(function(e){return e.addAll(n)}))}),self.addEventListener("activate",function(e){return e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==t)return caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){"PUT"!==e.request.method&&"POST"!==e.request.method||!1!==navigator.onLine?e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)})):new Error("No internet connectivity!")}),self.addEventListener("push",function(e){console.log("[Service Worker] Push Received."),console.log('[Service Worker] Push had this data: "'.concat(e.data.text(),'"'));var t=JSON.parse(e.data.text()),n=t.title,i={body:t.text,icon:"icon512x512.png",badge:"icon192x192.png"};self.registration.showNotification(n,i)}),self.addEventListener("notificationclick",function(t){if("false"!==t.notification.openApp){var n=t.notification.title.replace(/ /g,"-");t.notification.close(),clients.openWindow("".concat(e,"article/").concat(n))}});
},{}]},{},["NqYy"], null)
//# sourceMappingURL=/sw.map
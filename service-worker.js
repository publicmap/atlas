!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["/client/54e24a9976b26eb1a946/index.1.js","/client/54e24a9976b26eb1a946/index~place.0.js","/client/54e24a9976b26eb1a946/info.2.js","/client/54e24a9976b26eb1a946/main.js","/client/54e24a9976b26eb1a946/place.4.js","/client/54e24a9976b26eb1a946/place_$slug.5.js","/client/54e24a9976b26eb1a946/vendors~index.6.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),o=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1609486295035").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609486295035"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,r=t.host===self.location.host&&o.has(t.pathname),c="only-if-cached"===e.request.cache&&!r;!n||a||c||e.respondWith((async()=>r&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1609486295035");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const a=await t.match(e);if(a)return a;throw n}}(e.request))())})}]);
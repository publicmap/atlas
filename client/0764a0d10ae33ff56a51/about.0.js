(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,c){"use strict";c.r(e);var s=c(0),o=c(3),n=c(1),l=c(7),a=c.n(l);const{document:b}=s.x;function i(t){let e;const c=t[5].default,o=Object(s.o)(c,t,t[4],null);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,c){o&&o.m(t,c),e=!0},p(t,e){o&&o.p&&16&e&&Object(s.Q)(o,c,t,t[4],e,null,null)},i(t){e||(Object(s.O)(o,t),e=!0)},o(t){Object(s.P)(o,t),e=!1},d(t){o&&o.d(t)}}}function r(t){let e,c,o=t[0]&&i(t);return{c(){e=Object(s.s)("div"),o&&o.c(),this.h()},l(t){e=Object(s.j)(t,"DIV",{id:!0,class:!0});var c=Object(s.h)(e);o&&o.l(c),c.forEach(s.r),this.h()},h(){Object(s.e)(e,"id","map"),Object(s.e)(e,"class","svelte-4zwsn0")},m(n,l){Object(s.A)(n,e,l),o&&o.m(e,null),t[6](e),c=!0},p(t,[c]){t[0]?o?(o.p(t,c),1&c&&Object(s.O)(o,1)):(o=i(t),o.c(),Object(s.O)(o,1),o.m(e,null)):o&&(Object(s.y)(),Object(s.P)(o,1,1,()=>{o=null}),Object(s.g)())},i(t){c||(Object(s.O)(o),c=!0)},o(t){Object(s.P)(o),c=!1},d(c){c&&Object(s.r)(e),o&&o.d(),t[6](null)}}}function j(t,e,c){let{$$slots:o={},$$scope:l}=e,{map:b}=e,{settings:i={style:"satellite",worldview:"US",langauge:"en",location:{bounds:[[-10.76,49.864],[1.863,59.479]]}}}=e;a.a.accessToken="pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiY2todmxnbDFyMDFmcDJ5cGthZ2Vqenh3OSJ9.Plw3yyu23yPZFPIiuatpKQ";let r,j={default:"mapbox://styles/mapbox/streets-v11",outdoor:"mapbox://styles/mapbox/outdoors-v11",satellite:"mapbox://styles/mapbox/satellite-v9","satellite-map":"mapbox://styles/mapbox/satellite-streets-v11"},{program:O=function(t){console.log(t)}}=e;return Object(n.e)(()=>{const t=document.createElement("link");t.rel="stylesheet",t.href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css";let e=navigator.language;e.split("-")[0]||i.langauge,e.split("-")[1]||i.worldview;return t.onload=()=>{c(0,b=new a.a.Map({container:r,style:j[i.style],interactive:!0,...void 0})),a.a.setRTLTextPlugin("https://api.mapboxgl.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",null,!0);var t=new a.a.NavigationControl;b.addControl(t,"top-right");var e=new a.a.ScaleControl({maxWidth:80});b.addControl(e,"bottom-right"),b.on("load",(function(){O(b)}))},document.head.appendChild(t),()=>{b.remove(),t.parentNode.removeChild(t)}}),t.$$set=t=>{"map"in t&&c(0,b=t.map),"settings"in t&&c(2,i=t.settings),"program"in t&&c(3,O=t.program),"$$scope"in t&&c(4,l=t.$$scope)},[b,r,i,O,l,o,function(t){s.f[t?"unshift":"push"](()=>{r=t,c(1,r)})}]}class O extends s.a{constructor(t){var e;super(),b.getElementById("svelte-4zwsn0-style")||((e=Object(s.s)("style")).id="svelte-4zwsn0-style",e.textContent="div.svelte-4zwsn0{width:60%;height:100%;position:fixed;right:0}@media(max-width: 1000px){div.svelte-4zwsn0{width:100%;height:60%;position:absolute}}",Object(s.c)(b.head,e)),Object(s.z)(this,t,j,r,s.I,{map:0,settings:2,program:3})}}var u=O;function p(t){let e,c,o,n,l;return{c(){e=Object(s.s)("h1"),c=Object(s.N)("About"),o=Object(s.L)(),n=Object(s.s)("p"),l=Object(s.N)("This is the 'about' page. There's not much here.")},l(t){e=Object(s.j)(t,"H1",{});var a=Object(s.h)(e);c=Object(s.l)(a,"About"),a.forEach(s.r),o=Object(s.k)(t),n=Object(s.j)(t,"P",{});var b=Object(s.h)(n);l=Object(s.l)(b,"This is the 'about' page. There's not much here."),b.forEach(s.r)},m(t,a){Object(s.A)(t,e,a),Object(s.c)(e,c),Object(s.A)(t,o,a),Object(s.A)(t,n,a),Object(s.c)(n,l)},d(t){t&&Object(s.r)(e),t&&Object(s.r)(o),t&&Object(s.r)(n)}}}function h(t){let e,c,n,l,a;return c=new o.a({props:{$$slots:{default:[p]},$$scope:{ctx:t}}}),l=new u({props:{program:d}}),{c(){e=Object(s.L)(),Object(s.n)(c.$$.fragment),n=Object(s.L)(),Object(s.n)(l.$$.fragment),this.h()},l(t){Object(s.G)('[data-svelte="svelte-1myew8g"]',document.head).forEach(s.r),e=Object(s.k)(t),Object(s.i)(c.$$.fragment,t),n=Object(s.k)(t),Object(s.i)(l.$$.fragment,t),this.h()},h(){document.title="About"},m(t,o){Object(s.A)(t,e,o),Object(s.C)(c,t,o),Object(s.A)(t,n,o),Object(s.C)(l,t,o),a=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){a||(Object(s.O)(c.$$.fragment,t),Object(s.O)(l.$$.fragment,t),a=!0)},o(t){Object(s.P)(c.$$.fragment,t),Object(s.P)(l.$$.fragment,t),a=!1},d(t){t&&Object(s.r)(e),Object(s.p)(c,t),t&&Object(s.r)(n),Object(s.p)(l,t)}}}function d(t){console.log(t)}class m extends s.a{constructor(t){super(),Object(s.z)(this,t,null,h,s.I,{})}}e.default=m},3:function(t,e,c){"use strict";var s=c(0);function o(t){let e,c;const o=t[1].default,n=Object(s.o)(o,t,t[0],null);return{c(){e=Object(s.s)("div"),n&&n.c(),this.h()},l(t){e=Object(s.j)(t,"DIV",{id:!0,class:!0});var c=Object(s.h)(e);n&&n.l(c),c.forEach(s.r),this.h()},h(){Object(s.e)(e,"id","panel"),Object(s.e)(e,"class","uk-position-absolute uk-width-1-1 svelte-1bly3ho")},m(t,o){Object(s.A)(t,e,o),n&&n.m(e,null),c=!0},p(t,[e]){n&&n.p&&1&e&&Object(s.Q)(n,o,t,t[0],e,null,null)},i(t){c||(Object(s.O)(n,t),c=!0)},o(t){Object(s.P)(n,t),c=!1},d(t){t&&Object(s.r)(e),n&&n.d(t)}}}function n(t,e,c){let{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&c(0,o=t.$$scope)},[o,s]}class l extends s.a{constructor(t){var e;super(),document.getElementById("svelte-1bly3ho-style")||((e=Object(s.s)("style")).id="svelte-1bly3ho-style",e.textContent="div.svelte-1bly3ho{z-index:2}",Object(s.c)(document.head,e)),Object(s.z)(this,t,n,o,s.I,{})}}e.a=l}}]);
if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/01/笔记/index.html",revision:"899c367cf56bf093b63a4d2269e8f94a"},{url:"2023/07/24/树莓派/index.html",revision:"d771a0f9761786a35c582b37498156a3"},{url:"2023/07/24/电路/index.html",revision:"735b2f45e6e6c00cddd7a72802181f9d"},{url:"2023/07/24/计算机基础/index.html",revision:"31541ccec0797cbe4c6197d56e44ff06"},{url:"2024/09/19/hello-world/index.html",revision:"14e1eee0d874547b54e31094ba877768"},{url:"archives/2023/07/index.html",revision:"d57643ff4592568056fa1a7945f54396"},{url:"archives/2023/index.html",revision:"5cbff9ea16494fda3e3d7ef02912f09b"},{url:"archives/2024/09/index.html",revision:"011ae975a471d6e405c2520453efa82d"},{url:"archives/2024/index.html",revision:"4adc5e885ba681de5869552baaee568f"},{url:"archives/index.html",revision:"0c3a61cd9dc1ac100cf1ee21cc80e0f5"},{url:"css/index.css",revision:"05d0a6f026eb4bac102c89e04d8ecfdf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f1499a62a964b285d4f38d4a2f7259c7"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"ce476407cdf675ad1f57214b692d67d3"},{url:"tags/index.html",revision:"572f8c962f6e6689bdc285237c772cb0"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

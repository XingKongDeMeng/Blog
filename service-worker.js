if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/01/笔记/index.html",revision:"899c367cf56bf093b63a4d2269e8f94a"},{url:"2023/07/24/树莓派/index.html",revision:"d771a0f9761786a35c582b37498156a3"},{url:"2023/07/24/电路/index.html",revision:"735b2f45e6e6c00cddd7a72802181f9d"},{url:"2023/07/24/计算机基础/index.html",revision:"31541ccec0797cbe4c6197d56e44ff06"},{url:"2024/09/19/hello-world/index.html",revision:"352cce22eaddeb5193e053564861b629"},{url:"archives/2023/07/index.html",revision:"6682bd370b74e6cfc64565748bc061ce"},{url:"archives/2023/index.html",revision:"9c18426f46a3fa690aa832cb7bf25747"},{url:"archives/2024/09/index.html",revision:"f6a25491130f6b7faca2d337003e55ee"},{url:"archives/2024/index.html",revision:"deb120b2d39ed85a24d2a015274b7523"},{url:"archives/index.html",revision:"c7263ead60bd2dcec8bcb3fabf684693"},{url:"css/index.css",revision:"05d0a6f026eb4bac102c89e04d8ecfdf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"dd0745933c68ce329647deb4302a47c1"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"46873b5b8bf593983a029d9cce2fb73d"},{url:"tags/index.html",revision:"66d2fe85e2032025bfdc004e57818efd"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

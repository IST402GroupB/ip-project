if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const t=e=>r(e,o),c={module:{uri:o},exports:f,require:t};i[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(n(...e),f)))}}define(["./workbox-1c082513"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0fbaaad2.js",revision:"79677680090fef7e40b9ea828503613b"},{url:"125f6cfd.js",revision:"e8bf7bc3051b4427d5068f8456e34f16"},{url:"338e7e61.js",revision:"37d094a6e2803fa008a7a1d271b14c38"},{url:"4c5e5b97.js",revision:"0d443b73c5918109e914302c9948e868"},{url:"56772143.js",revision:"03d085594eb113214a4baa1d4a91679e"},{url:"aa05e036.js",revision:"d07a57d9bef86c1fad9c4f2b359afd1e"},{url:"f1b9150b.js",revision:"a3a629a3e553c1a4af7983313b801638"},{url:"index.html",revision:"7ef7624e443f6b60e58aa01fe2c88ecd"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map

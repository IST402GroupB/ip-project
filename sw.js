if(!self.define){let e,f={};const i=(i,r)=>(i=new URL(i+".js",r).href,f[i]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=f,document.head.appendChild(e)}else e=i,importScripts(i),f()})).then((()=>{let e=f[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(f[n])return;let o={};const d=e=>i(e,n),t={module:{uri:n},exports:o,require:d};f[n]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-1c082513"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0fbaaad2.js",revision:"79677680090fef7e40b9ea828503613b"},{url:"2faf730b.js",revision:"0d443b73c5918109e914302c9948e868"},{url:"338e7e61.js",revision:"37d094a6e2803fa008a7a1d271b14c38"},{url:"48e977b0.js",revision:"0f00ed96be6b6f7132ea2afd74adc872"},{url:"aa05e036.js",revision:"d07a57d9bef86c1fad9c4f2b359afd1e"},{url:"ea5576f0.js",revision:"2fef46974770b693aac8fe80f56ffed5"},{url:"index.html",revision:"5d067d2fad89ee398b2d9f69f044faf1"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map

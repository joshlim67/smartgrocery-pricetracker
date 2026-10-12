(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(c){if(c.ep)return;c.ep=!0;const i=o(c);fetch(c.href,i)}})();/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=([a,e,o])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",a);return Object.keys(e).forEach(c=>{r.setAttribute(c,String(e[c]))}),o!=null&&o.length&&o.forEach(c=>{const i=wt(c);r.appendChild(i)}),r},Jt=(a,e={})=>{const r={...Et,...e};return wt(["svg",r,a])};/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(...a)=>a.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim();/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=a=>{let e="",o=!1;for(const r of a){if(r==="-"||r==="_"||r<=" "){o=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=o?r.toUpperCase():r,o=!1}return e};/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=a=>{const e=Qt(a);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=a=>Array.from(a.attributes).reduce((e,o)=>(e[o.name]=o.value,e),{}),vt=a=>typeof a=="string"?a:!a||!a.class?"":a.class&&typeof a.class=="string"?a.class.split(" "):a.class&&Array.isArray(a.class)?a.class:"",bt=(a,{nameAttr:e,icons:o,attrs:r})=>{var O;const c=a.getAttribute(e);if(c==null)return;const i=Zt(c),s=o[i];if(!s)return console.warn(`${a.outerHTML} icon name was not found in the provided icons object.`);const u=Xt(a),d=Yt(u)?{}:{"aria-hidden":"true"},h={...Et,"data-lucide":c,...d,...r,...u},w=vt(u),P=vt(r),T=Kt("lucide",`lucide-${c}`,...w,...P);T&&Object.assign(h,{class:T});const I=Jt(s,h);return(O=a.parentNode)==null?void 0:O.replaceChild(I,a)};/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M13 16H8"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M12 17V7"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M16 17h6v-6"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"}],["path",{d:"m16.5 14.5 5-5"}],["path",{d:"m16.5 9.5 5 5"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=({icons:a={},nameAttr:e="data-lucide",attrs:o={},root:r=document,inTemplates:c}={})=>{if(!Object.values(a).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${e}]`)).forEach(s=>bt(s,{nameAttr:e,icons:a,attrs:o})),c&&Array.from(r.querySelectorAll("template")).forEach(u=>Mt({icons:a,nameAttr:e,attrs:o,root:u.content,inTemplates:c})),e==="data-lucide"){const s=r.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(u=>bt(u,{nameAttr:"icon-name",icons:a,attrs:o})))}};var dt={};(function a(e,o,r,c){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",u=(function(){if(!e.OffscreenCanvas)return!1;try{var n=new OffscreenCanvas(1,1),t=n.getContext("2d");t.fillRect(0,0,1,1);var m=n.transferToImageBitmap();t.createPattern(m,"no-repeat")}catch{return!1}return!0})();function d(){}function h(n){var t=o.exports.Promise,m=t!==void 0?t:e.Promise;return typeof m=="function"?new m(n):(n(d,d),null)}var w=(function(n,t){return{transform:function(m){if(n)return m;if(t.has(m))return t.get(m);var y=new OffscreenCanvas(m.width,m.height),f=y.getContext("2d");return f.drawImage(m,0,0),t.set(m,y),y},clear:function(){t.clear()}}})(u,new Map),P=(function(){var n=Math.floor(16.666666666666668),t,m,y={},f=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(v){var b=Math.random();return y[b]=requestAnimationFrame(function g(C){f===C||f+n-1<C?(f=C,delete y[b],v()):y[b]=requestAnimationFrame(g)}),b},m=function(v){y[v]&&cancelAnimationFrame(y[v])}):(t=function(v){return setTimeout(v,n)},m=function(v){return clearTimeout(v)}),{frame:t,cancel:m}})(),T=(function(){var n,t,m={};function y(f){function v(b,g){f.postMessage({options:b||{},callback:g})}f.init=function(g){var C=g.transferControlToOffscreen();f.postMessage({canvas:C},[C])},f.fire=function(g,C,k){if(t)return v(g,null),t;var S=Math.random().toString(36).slice(2);return t=h(function(B){function x(L){L.data.callback===S&&(delete m[S],f.removeEventListener("message",x),t=null,w.clear(),k(),B())}f.addEventListener("message",x),v(g,S),m[S]=x.bind(null,{data:{callback:S}})}),t},f.reset=function(){f.postMessage({reset:!0});for(var g in m)m[g](),delete m[g]}}return function(){if(n)return n;if(!r&&i){var f=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([f])))}catch(v){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",v),null}y(n)}return n}})(),I={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function O(n,t){return t?t(n):n}function G(n){return n!=null}function M(n,t,m){return O(n&&G(n[t])?n[t]:I[t],m)}function H(n){return n<0?0:Math.floor(n)}function Q(n,t){return Math.floor(Math.random()*(t-n))+n}function at(n){return parseInt(n,16)}function At(n){return n.map(Tt)}function Tt(n){var t=String(n).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:at(t.substring(0,2)),g:at(t.substring(2,4)),b:at(t.substring(4,6))}}function St(n){var t=M(n,"origin",Object);return t.x=M(t,"x",Number),t.y=M(t,"y",Number),t}function xt(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function Pt(n){var t=n.getBoundingClientRect();n.width=t.width,n.height=t.height}function Lt(n){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=n,t}function Rt(n,t,m,y,f,v,b,g,C){n.save(),n.translate(t,m),n.rotate(v),n.scale(y,f),n.arc(0,0,1,b,g,C),n.restore()}function $t(n){var t=n.angle*(Math.PI/180),m=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-t+(.5*m-Math.random()*m),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar,flat:n.flat}}function qt(n,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var m=t.tick++/t.totalTicks,y=t.x+t.random*t.tiltCos,f=t.y+t.random*t.tiltSin,v=t.wobbleX+t.random*t.tiltCos,b=t.wobbleY+t.random*t.tiltSin;if(n.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-m)+")",n.beginPath(),s&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))n.fill(Ft(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(v-y)*.1,Math.abs(b-f)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var g=Math.PI/10*t.wobble,C=Math.abs(v-y)*.1,k=Math.abs(b-f)*.1,S=t.shape.bitmap.width*t.scalar,B=t.shape.bitmap.height*t.scalar,x=new DOMMatrix([Math.cos(g)*C,Math.sin(g)*C,-Math.sin(g)*k,Math.cos(g)*k,t.x,t.y]);x.multiplySelf(new DOMMatrix(t.shape.matrix));var L=n.createPattern(w.transform(t.shape.bitmap),"no-repeat");L.setTransform(x),n.globalAlpha=1-m,n.fillStyle=L,n.fillRect(t.x-S/2,t.y-B/2,S,B),n.globalAlpha=1}else if(t.shape==="circle")n.ellipse?n.ellipse(t.x,t.y,Math.abs(v-y)*t.ovalScalar,Math.abs(b-f)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):Rt(n,t.x,t.y,Math.abs(v-y)*t.ovalScalar,Math.abs(b-f)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var E=Math.PI/2*3,R=4*t.scalar,F=8*t.scalar,D=t.x,U=t.y,z=5,_=Math.PI/z;z--;)D=t.x+Math.cos(E)*F,U=t.y+Math.sin(E)*F,n.lineTo(D,U),E+=_,D=t.x+Math.cos(E)*R,U=t.y+Math.sin(E)*R,n.lineTo(D,U),E+=_;else n.moveTo(Math.floor(t.x),Math.floor(t.y)),n.lineTo(Math.floor(t.wobbleX),Math.floor(f)),n.lineTo(Math.floor(v),Math.floor(b)),n.lineTo(Math.floor(y),Math.floor(t.wobbleY));return n.closePath(),n.fill(),t.tick<t.totalTicks}function Ot(n,t,m,y,f){var v=t.slice(),b=n.getContext("2d"),g,C,k=h(function(S){function B(){g=C=null,b.clearRect(0,0,y.width,y.height),w.clear(),f(),S()}function x(){r&&!(y.width===c.width&&y.height===c.height)&&(y.width=n.width=c.width,y.height=n.height=c.height),!y.width&&!y.height&&(m(n),y.width=n.width,y.height=n.height),b.clearRect(0,0,y.width,y.height),v=v.filter(function(L){return qt(b,L)}),v.length?g=P.frame(x):B()}g=P.frame(x),C=B});return{addFettis:function(S){return v=v.concat(S),k},canvas:n,promise:k,reset:function(){g&&P.cancel(g),C&&C()}}}function mt(n,t){var m=!n,y=!!M(t||{},"resize"),f=!1,v=M(t,"disableForReducedMotion",Boolean),b=i&&!!M(t||{},"useWorker"),g=b?T():null,C=m?xt:Pt,k=n&&g?!!n.__confetti_initialized:!1,S=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,B;function x(E,R,F){for(var D=M(E,"particleCount",H),U=M(E,"angle",Number),z=M(E,"spread",Number),_=M(E,"startVelocity",Number),Ht=M(E,"decay",Number),_t=M(E,"gravity",Number),Vt=M(E,"drift",Number),ht=M(E,"colors",At),jt=M(E,"ticks",Number),gt=M(E,"shapes"),Ut=M(E,"scalar"),Wt=!!M(E,"flat"),yt=St(E),ft=D,ot=[],Gt=n.width*yt.x,zt=n.height*yt.y;ft--;)ot.push($t({x:Gt,y:zt,angle:U,spread:z,startVelocity:_,color:ht[ft%ht.length],shape:gt[Q(0,gt.length)],ticks:jt,decay:Ht,gravity:_t,drift:Vt,scalar:Ut,flat:Wt}));return B?B.addFettis(ot):(B=Ot(n,ot,C,R,F),B.promise)}function L(E){var R=v||M(E,"disableForReducedMotion",Boolean),F=M(E,"zIndex",Number);if(R&&S)return h(function(_){_()});m&&B?n=B.canvas:m&&!n&&(n=Lt(F),document.body.appendChild(n)),y&&!k&&C(n);var D={width:n.width,height:n.height};g&&!k&&g.init(n),k=!0,g&&(n.__confetti_initialized=!0);function U(){if(g){var _={getBoundingClientRect:function(){if(!m)return n.getBoundingClientRect()}};C(_),g.postMessage({resize:{width:_.width,height:_.height}});return}D.width=D.height=null}function z(){B=null,y&&(f=!1,e.removeEventListener("resize",U)),m&&n&&(document.body.contains(n)&&document.body.removeChild(n),n=null,k=!1)}return y&&!f&&(f=!0,e.addEventListener("resize",U,!1)),g?g.fire(E,D,z):x(E,D,z)}return L.reset=function(){g&&g.reset(),B&&B.reset()},L}var nt;function pt(){return nt||(nt=mt(null,{useWorker:!0,resize:!0})),nt}function Ft(n,t,m,y,f,v,b){var g=new Path2D(n),C=new Path2D;C.addPath(g,new DOMMatrix(t));var k=new Path2D;return k.addPath(C,new DOMMatrix([Math.cos(b)*f,Math.sin(b)*f,-Math.sin(b)*v,Math.cos(b)*v,m,y])),k}function Dt(n){if(!s)throw new Error("path confetti are not supported in this browser");var t,m;typeof n=="string"?t=n:(t=n.path,m=n.matrix);var y=new Path2D(t),f=document.createElement("canvas"),v=f.getContext("2d");if(!m){for(var b=1e3,g=b,C=b,k=0,S=0,B,x,L=0;L<b;L+=2)for(var E=0;E<b;E+=2)v.isPointInPath(y,L,E,"nonzero")&&(g=Math.min(g,L),C=Math.min(C,E),k=Math.max(k,L),S=Math.max(S,E));B=k-g,x=S-C;var R=10,F=Math.min(R/B,R/x);m=[F,0,0,F,-Math.round(B/2+g)*F,-Math.round(x/2+C)*F]}return{type:"path",path:t,matrix:m}}function Nt(n){var t,m=1,y="#000000",f='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof n=="string"?t=n:(t=n.text,m="scalar"in n?n.scalar:m,f="fontFamily"in n?n.fontFamily:f,y="color"in n?n.color:y);var v=10*m,b=""+v+"px "+f,g=new OffscreenCanvas(v,v),C=g.getContext("2d");C.font=b;var k=C.measureText(t),S=Math.ceil(k.actualBoundingBoxRight+k.actualBoundingBoxLeft),B=Math.ceil(k.actualBoundingBoxAscent+k.actualBoundingBoxDescent),x=2,L=k.actualBoundingBoxLeft+x,E=k.actualBoundingBoxAscent+x;S+=x+x,B+=x+x,g=new OffscreenCanvas(S,B),C=g.getContext("2d"),C.font=b,C.fillStyle=y,C.fillText(t,L,E);var R=1/m;return{type:"bitmap",bitmap:g.transferToImageBitmap(),matrix:[R,0,0,R,-S*R/2,-B*R/2]}}o.exports=function(){return pt().apply(this,arguments)},o.exports.reset=function(){pt().reset()},o.exports.create=mt,o.exports.shapeFromPath=Dt,o.exports.shapeFromText=Nt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),dt,!1);const Ae=dt.exports;dt.exports.create;const N={SAFETY_CAP:"sg_safety_cap_v1",CART:"sg_cart_items_v1",HISTORY:"sg_history_sessions_v1",PREV_CATALOG:"sg_prev_catalog_v1",SOUND_ENABLED:"sg_sound_enabled_v1"},it={"Minyak Goreng 2L":{price:32e3,unit:"liter",category:"Bahan Pokok"},"Beras Ramos 5kg":{price:74e3,unit:"kg",category:"Bahan Pokok"},"Telur Ayam 1kg":{price:28e3,unit:"kg",category:"Bahan Pokok"},"Indomie Goreng (Dus)":{price:112e3,unit:"dus",category:"Makanan & Minuman"},"Susu UHT Full Cream 1L":{price:19500,unit:"liter",category:"Makanan & Minuman"},"Sunlight Jeruk Nipis 700ml":{price:14500,unit:"pack",category:"Perlengkapan Mandi & Cuci"},"Lifebuoy Sabun Mandi 4x110g":{price:23e3,unit:"pack",category:"Perlengkapan Mandi & Cuci"},"Kopi Kapal Api Mix 10s":{price:14e3,unit:"pack",category:"Makanan & Minuman"},"Gula Pasir 1kg":{price:17500,unit:"kg",category:"Bahan Pokok"},"Bawang Merah 500g":{price:2e4,unit:"kg",category:"Bumbu & Dapur"},"Biskuit Roma Kelapa 300g":{price:11500,unit:"pack",category:"Camilan"},"Pasta Gigi Pepsodent 190g":{price:16e3,unit:"pcs",category:"Perlengkapan Mandi & Cuci"}},rt=[{id:"hist_last_month_01",date:"15 September 2026",timestamp:17894568e5,note:"Belanja Awal Bulan September (Superindo)",safetyCap:5e5,totalSpent:388500,totalSaved:34500,itemCount:8,items:[{name:"Beras Ramos 5kg",qty:1,unit:"kg",unitPrice:74e3,finalUnitPrice:74e3,discountType:"none",d1:0,d2:0,finalRowTotal:74e3,normalRowTotal:74e3,savedAmount:0,category:"Bahan Pokok"},{name:"Minyak Goreng 2L",qty:1,unit:"liter",unitPrice:32e3,finalUnitPrice:32e3,discountType:"none",d1:0,d2:0,finalRowTotal:32e3,normalRowTotal:32e3,savedAmount:0,category:"Bahan Pokok"},{name:"Telur Ayam 1kg",qty:1.5,unit:"kg",unitPrice:28e3,finalUnitPrice:28e3,discountType:"none",d1:0,d2:0,finalRowTotal:42e3,normalRowTotal:42e3,savedAmount:0,category:"Bahan Pokok"},{name:"Indomie Goreng (Dus)",qty:1,unit:"dus",unitPrice:112e3,finalUnitPrice:112e3,discountType:"none",d1:0,d2:0,finalRowTotal:112e3,normalRowTotal:112e3,savedAmount:0,category:"Makanan & Minuman"},{name:"Lifebuoy Sabun Mandi 4x110g",qty:1,unit:"pack",unitPrice:23e3,finalUnitPrice:18400,discountType:"single",d1:20,d2:0,finalRowTotal:18400,normalRowTotal:23e3,savedAmount:4600,category:"Perlengkapan Mandi & Cuci"},{name:"Sunlight Jeruk Nipis 700ml",qty:2,unit:"pack",unitPrice:14500,finalUnitPrice:14500,discountType:"none",d1:0,d2:0,finalRowTotal:29e3,normalRowTotal:29e3,savedAmount:0,category:"Perlengkapan Mandi & Cuci"},{name:"Kopi Kapal Api Mix 10s",qty:2,unit:"pack",unitPrice:14e3,finalUnitPrice:14e3,discountType:"none",d1:0,d2:0,finalRowTotal:28e3,normalRowTotal:28e3,savedAmount:0,category:"Makanan & Minuman"},{name:"Biskuit Roma Kelapa 300g",qty:5,unit:"pack",unitPrice:11500,finalUnitPrice:10620,discountType:"tiered",d1:50,d2:20,finalRowTotal:53100,normalRowTotal:57500,savedAmount:29900,category:"Camilan"}]}],ct=[{id:"cart_"+Date.now()+"_1",name:"Minyak Goreng 2L",category:"Bahan Pokok",unit:"liter",qty:1,unitPrice:34500,discountType:"none",d1:0,d2:0},{id:"cart_"+Date.now()+"_2",name:"Telur Ayam 1kg",category:"Bahan Pokok",unit:"kg",qty:2,unitPrice:26500,discountType:"none",d1:0,d2:0},{id:"cart_"+Date.now()+"_3",name:"Lifebuoy Sabun Mandi 4x110g",category:"Perlengkapan Mandi & Cuci",unit:"pack",qty:1,unitPrice:25e3,discountType:"tiered",d1:50,d2:20}],l={safetyCap:5e5,cart:[],history:[],prevCatalog:{},soundEnabled:!0,currentCategoryFilter:"ALL",searchQuery:"",editingItemId:null,activeTab:"view-cart"};class Te{constructor(){this.ctx=null}init(){if(!this.ctx&&(window.AudioContext||window.webkitAudioContext)){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){if(l.soundEnabled&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),o=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),o.gain.setValueAtTime(.12,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.04),e.connect(o),o.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playSuccess(){if(l.soundEnabled&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((r,c)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(r,e+c*.08),s.gain.setValueAtTime(.15,e+c*.08),s.gain.exponentialRampToValueAtTime(.01,e+c*.08+.16),i.connect(s),s.connect(this.ctx.destination),i.start(e+c*.08),i.stop(e+c*.08+.16)})}catch{}}playWarning(){if(l.soundEnabled&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[350,260].forEach((o,r)=>{const c=this.ctx.createOscillator(),i=this.ctx.createGain();c.type="sawtooth",c.frequency.setValueAtTime(o,e+r*.12),i.gain.setValueAtTime(.18,e+r*.12),i.gain.exponentialRampToValueAtTime(.01,e+r*.12+.18),c.connect(i),i.connect(this.ctx.destination),c.start(e+r*.12),c.stop(e+r*.12+.18)})}catch{}}}const A=new Te;function p(a){return isNaN(a)||a===null||a===void 0?"0":Math.round(a).toLocaleString("id-ID")}function W(a){if(!a)return 0;const e=String(a).replace(/[^0-9]/g,"");return parseInt(e,10)||0}function Y(a){const e=parseFloat(a.qty)||0,o=parseFloat(a.unitPrice)||0,r=o*e;let c=o;const i=parseFloat(a.d1)||0,s=parseFloat(a.d2)||0;if(a.discountType==="single"){const h=Math.max(0,1-i/100);c=o*h}else if(a.discountType==="tiered"){const h=Math.max(0,1-i/100),w=Math.max(0,1-s/100);c=o*h*w}const u=Math.round(c*e),d=Math.max(0,r-u);return{normalRowTotal:r,finalUnitPrice:c,finalRowTotal:u,savedAmount:d}}function kt(a,e){if(!a)return{status:"new",diffVal:0,diffPct:0,prevPrice:0};const o=a.trim().toLowerCase();let r=null;for(const[u,d]of Object.entries(l.prevCatalog))if(u.trim().toLowerCase()===o){r=d;break}if(!r||!r.price)return{status:"new",diffVal:0,diffPct:0,prevPrice:0};const c=r.price,i=e-c,s=c>0?(i/c*100).toFixed(1):0;return i>0?{status:"higher",diffVal:i,diffPct:s,prevPrice:c}:i<0?{status:"lower",diffVal:Math.abs(i),diffPct:Math.abs(s),prevPrice:c}:{status:"equal",diffVal:0,diffPct:0,prevPrice:c}}function Se(){try{const a=localStorage.getItem(N.SAFETY_CAP);l.safetyCap=a?parseInt(a,10):5e5;const e=localStorage.getItem(N.PREV_CATALOG);l.prevCatalog=e?JSON.parse(e):{...it};const o=localStorage.getItem(N.HISTORY);l.history=o?JSON.parse(o):[...rt];const r=localStorage.getItem(N.CART);l.cart=r?JSON.parse(r):[...ct];const c=localStorage.getItem(N.SOUND_ENABLED);l.soundEnabled=c!==null?JSON.parse(c):!0}catch(a){console.error("Error loading state from localStorage:",a),l.safetyCap=5e5,l.prevCatalog={...it},l.history=[...rt],l.cart=[...ct],l.soundEnabled=!0}}function V(){try{localStorage.setItem(N.SAFETY_CAP,l.safetyCap),localStorage.setItem(N.CART,JSON.stringify(l.cart)),localStorage.setItem(N.HISTORY,JSON.stringify(l.history)),localStorage.setItem(N.PREV_CATALOG,JSON.stringify(l.prevCatalog)),localStorage.setItem(N.SOUND_ENABLED,JSON.stringify(l.soundEnabled))}catch(a){console.error("Error saving state to localStorage:",a)}}function j(){Mt({icons:{ShoppingCart:fe,History:ue,Wallet:Ie,Volume2:Me,VolumeX:ke,Download:oe,Plus:se,Minus:re,Search:pe,X:Be,PlusCircle:ae,Receipt:de,FileText:ie,Copy:ne,RotateCcw:me,Upload:we,Check:te,CheckCircle2:ee,Tag:be,Percent:ce,TrendingUp:Ee,TrendingDown:Ce,Sparkles:ve,ShieldAlert:he,ShieldCheck:ge,ShoppingBasket:ye,ReceiptText:le}})}function tt(){let a=0,e=0,o=0;l.cart.forEach(M=>{const H=Y(M);a+=H.finalRowTotal,e+=H.savedAmount,o+=parseFloat(M.qty)||0});const r=l.safetyCap||5e5,c=r-a,i=Math.min(100,Math.round(a/r*100)),s=document.getElementById("safety-cap-banner"),u=document.getElementById("budget-meter-fill"),d=document.getElementById("header-remaining-budget"),h=document.getElementById("header-spent-budget"),w=document.getElementById("header-limit-budget"),P=document.getElementById("header-percent-budget"),T=document.getElementById("budget-status-text"),I=document.getElementById("nav-budget-alert");d.textContent=`Rp ${p(Math.max(0,c))}`,h.textContent=`Rp ${p(a)}`,w.textContent=`Rp ${p(r)}`,P.textContent=`${i}%`,u.style.width=`${Math.min(100,a/r*100)}%`,s.classList.remove("state-safe","state-warning","state-danger"),a>r?(s.classList.add("state-danger"),T.textContent="OVERBUDGET! BAHAYA",d.textContent=`- Rp ${p(Math.abs(c))}`,I.classList.remove("hidden"),A.playWarning()):i>=90?(s.classList.add("state-danger"),T.textContent="WASPADALAH: >90% LIMIT",I.classList.remove("hidden")):i>=75?(s.classList.add("state-warning"),T.textContent="MENDEKATI BATAS (75%)",I.classList.add("hidden")):(s.classList.add("state-safe"),T.textContent="ANGGARAN AMAN",I.classList.add("hidden")),document.getElementById("summary-total-qty").textContent=`${l.cart.length} item (${o} qty)`,document.getElementById("summary-total-price").textContent=p(a),document.getElementById("summary-saved-amount").textContent=`Rp ${p(e)}`,document.getElementById("nav-cart-badge").textContent=l.cart.length;const O=document.getElementById("summary-discount-pill");e>0?O.classList.remove("hidden"):O.classList.add("hidden");const G=document.getElementById("hist-current-total");return G&&(G.textContent=`Rp ${p(a)}`),{totalSpent:a,totalSaved:e,remaining:c,totalItemsCount:o}}function $(){const a=document.getElementById("cart-items-container"),e=document.getElementById("cart-empty-state"),o=l.currentCategoryFilter,r=l.searchQuery.trim().toLowerCase(),c=l.cart.filter(i=>{const s=o==="ALL"||i.category===o,u=!r||i.name.toLowerCase().includes(r);return s&&u});if(document.getElementById("count-all").textContent=l.cart.length,l.cart.length===0){a.innerHTML="",e.classList.remove("hidden"),tt();return}else e.classList.add("hidden");if(c.length===0){a.innerHTML=`
      <div class="empty-state-card glass-card">
        <i data-lucide="search" style="width: 32px; height: 32px; color: var(--text-muted);"></i>
        <h3>Tidak ada item yang cocok</h3>
        <p>Coba gunakan kata kunci lain atau pilih filter kategori "Semua".</p>
      </div>
    `,j(),tt();return}a.innerHTML=c.map(i=>{const s=Y(i),u=kt(i.name,i.unitPrice);let d="";u.status==="higher"?d=`
        <span class="comp-badge higher" title="Bulan lalu: Rp ${p(u.prevPrice)}">
          <i data-lucide="trending-up"></i> ↑ +Rp ${p(u.diffVal)} (+${u.diffPct}%)
        </span>
      `:u.status==="lower"?d=`
        <span class="comp-badge lower" title="Bulan lalu: Rp ${p(u.prevPrice)}">
          <i data-lucide="trending-down"></i> ↓ -Rp ${p(u.diffVal)} (-${u.diffPct}%)
        </span>
      `:u.status==="equal"?d=`
        <span class="comp-badge equal" title="Bulan lalu: Rp ${p(u.prevPrice)}">
          <span>=</span> Stabil
        </span>
      `:d=`
        <span class="comp-badge new">
          <i data-lucide="sparkles"></i> Item Baru
        </span>
      `;let h="";i.discountType==="single"&&i.d1>0?h=`<span class="discount-pill-mini">Diskon ${i.d1}%</span>`:i.discountType==="tiered"&&i.d1>0&&(h=`<span class="discount-pill-mini">${i.d1}% + ${i.d2}%</span>`);const w=s.savedAmount>0?`<span class="normal-strike-price">Rp ${p(s.normalRowTotal)}</span>`:"";return`
      <div class="cart-item-card" data-item-id="${i.id}">
        <div class="item-card-top">
          <div class="item-main-info">
            <div class="item-badge-row">
              <span class="badge-category">${i.category}</span>
              ${d}
            </div>
            <h3 class="item-product-name">${i.name}</h3>
            <span class="item-unit-tag">@ Rp ${p(i.unitPrice)} / ${i.unit}</span>
          </div>

          <div class="item-actions-top">
            <button class="btn-card-action btn-edit-item" data-id="${i.id}" aria-label="Edit Item" title="Edit Item">
              <i data-lucide="pencil"></i>
            </button>
            <button class="btn-card-action text-danger btn-delete-item" data-id="${i.id}" aria-label="Hapus Item" title="Hapus Item">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <div class="item-card-bottom">
          <!-- Large Touch Stepper Ramah Jempol -->
          <div class="qty-stepper-control">
            <button type="button" class="btn-stepper btn-cart-step-minus" data-id="${i.id}" aria-label="Kurangi">
              <i data-lucide="minus"></i>
            </button>
            <input type="number" class="cart-qty-direct" data-id="${i.id}" value="${i.qty}" min="0.1" step="1">
            <button type="button" class="btn-stepper btn-cart-step-plus" data-id="${i.id}" aria-label="Tambah">
              <i data-lucide="plus"></i>
            </button>
          </div>

          <!-- Total Row Pricing -->
          <div class="item-price-block">
            ${w}
            <div class="row-total-price">
              Rp ${p(s.finalRowTotal)}
              ${h}
            </div>
            ${s.savedAmount>0?`<span class="unit-price-caption text-emerald">Hemat Rp ${p(s.savedAmount)}</span>`:""}
          </div>
        </div>
      </div>
    `}).join(""),j(),tt(),xe()}function xe(){document.querySelectorAll(".btn-cart-step-plus").forEach(a=>{a.onclick=()=>{const e=a.getAttribute("data-id"),o=l.cart.find(r=>r.id===e);o&&(o.qty=Math.round((parseFloat(o.qty)+1)*10)/10,A.playClick(),V(),$())}}),document.querySelectorAll(".btn-cart-step-minus").forEach(a=>{a.onclick=()=>{const e=a.getAttribute("data-id"),o=l.cart.find(r=>r.id===e);o&&(o.qty>1?o.qty=Math.round((parseFloat(o.qty)-1)*10)/10:l.cart=l.cart.filter(r=>r.id!==e),A.playClick(),V(),$())}}),document.querySelectorAll(".cart-qty-direct").forEach(a=>{a.onchange=()=>{const e=a.getAttribute("data-id"),o=l.cart.find(r=>r.id===e);if(o){const r=parseFloat(a.value)||1;o.qty=Math.max(.1,r),A.playClick(),V(),$()}}}),document.querySelectorAll(".btn-edit-item").forEach(a=>{a.onclick=()=>{const e=a.getAttribute("data-id");st(e)}}),document.querySelectorAll(".btn-delete-item").forEach(a=>{a.onclick=()=>{const e=a.getAttribute("data-id");l.cart=l.cart.filter(o=>o.id!==e),A.playClick(),V(),$()}})}function st(a=null){l.editingItemId=a;const e=document.getElementById("item-modal"),o=document.getElementById("modal-item-title"),r=document.getElementById("btn-save-item-label"),c=document.getElementById("item-id-input"),i=document.getElementById("item-name-input"),s=document.getElementById("item-category-input"),u=document.getElementById("item-unit-input"),d=document.getElementById("item-qty-input"),h=document.getElementById("item-price-input"),w=document.getElementById("input-discount-single"),P=document.getElementById("input-discount-d1"),T=document.getElementById("input-discount-d2");if(Pe(),Le(),a){const I=l.cart.find(O=>O.id===a);if(!I)return;o.textContent="Edit Item Belanja",r.textContent="Simpan Perubahan",c.value=I.id,i.value=I.name,s.value=I.category,u.value=I.unit,d.value=I.qty,h.value=p(I.unitPrice),et(I.category),lt(I.discountType||"none"),w.value=I.d1||0,P.value=I.d1||50,T.value=I.d2||20}else o.textContent="Tambah Item ke Keranjang",r.textContent="Masukkan ke Keranjang",c.value="",i.value="",s.value="Bahan Pokok",u.value="pcs",d.value="1",h.value="",et("Bahan Pokok"),lt("none"),w.value="0",P.value="50",T.value="20";Z(),q(),e.classList.remove("hidden"),j(),i.focus()}function It(){document.getElementById("item-modal").classList.add("hidden"),l.editingItemId=null}function et(a){document.getElementById("item-category-input").value=a,document.querySelectorAll(".cat-chip").forEach(e=>{e.getAttribute("data-cat")===a?e.classList.add("active"):e.classList.remove("active")})}function lt(a){document.querySelectorAll(".mode-btn").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-mode")===a)});const e=document.getElementById("section-discount-single"),o=document.getElementById("section-discount-tiered");a==="single"?(e.classList.remove("hidden"),o.classList.add("hidden")):a==="tiered"?(e.classList.add("hidden"),o.classList.remove("hidden")):(e.classList.add("hidden"),o.classList.add("hidden")),q()}function q(){const a=parseFloat(document.getElementById("item-qty-input").value)||1,e=W(document.getElementById("item-price-input").value),o=document.querySelector(".mode-btn.active"),r=o?o.getAttribute("data-mode"):"none";let c=0,i=0;r==="single"?c=parseFloat(document.getElementById("input-discount-single").value)||0:r==="tiered"&&(c=parseFloat(document.getElementById("input-discount-d1").value)||0,i=parseFloat(document.getElementById("input-discount-d2").value)||0);const s=Y({qty:a,unitPrice:e,discountType:r,d1:c,d2:i});document.getElementById("preview-normal-total").textContent=`Rp ${p(s.normalRowTotal)}`,document.getElementById("preview-discount-saved").textContent=`- Rp ${p(s.savedAmount)}`,document.getElementById("preview-final-total").textContent=`Rp ${p(s.finalRowTotal)}`}function Z(){const a=document.getElementById("item-name-input").value.trim(),e=W(document.getElementById("item-price-input").value),o=document.getElementById("modal-comparator-badge"),r=document.getElementById("preview-comp-title"),c=document.getElementById("preview-comp-desc"),i=document.getElementById("preview-comp-pill"),s=document.getElementById("preview-comp-icon");if(!a||e<=0){o.classList.add("hidden");return}const u=kt(a,e);u.status==="higher"?(o.classList.remove("hidden"),o.style.borderColor="rgba(244, 63, 94, 0.4)",s.innerHTML='<i data-lucide="trending-up" style="color: var(--crimson);"></i>',r.textContent=`Bulan Lalu: Rp ${p(u.prevPrice)}`,c.textContent=`Perhatian: Harga NAIK Rp ${p(u.diffVal)} (+${u.diffPct}%)`,i.textContent=`↑ Lebih Mahal (+${u.diffPct}%)`,i.style.background="var(--crimson-soft)",i.style.color="#fda4af"):u.status==="lower"?(o.classList.remove("hidden"),o.style.borderColor="rgba(16, 185, 129, 0.4)",s.innerHTML='<i data-lucide="trending-down" style="color: var(--emerald-light);"></i>',r.textContent=`Bulan Lalu: Rp ${p(u.prevPrice)}`,c.textContent=`Hemat: Harga TURUN Rp ${p(u.diffVal)} (-${u.diffPct}%)`,i.textContent=`↓ Lebih Hemat (-${u.diffPct}%)`,i.style.background="var(--emerald-soft)",i.style.color="#6ee7b7"):u.status==="equal"?(o.classList.remove("hidden"),o.style.borderColor="rgba(56, 189, 248, 0.3)",s.innerHTML='<i data-lucide="check" style="color: var(--primary);"></i>',r.textContent=`Bulan Lalu: Rp ${p(u.prevPrice)}`,c.textContent="Harga stabil persis sama dengan bulan lalu",i.textContent="= Stabil (Rp 0)",i.style.background="rgba(56, 189, 248, 0.15)",i.style.color="#7dd3fc"):(o.classList.remove("hidden"),o.style.borderColor="rgba(168, 85, 247, 0.3)",s.innerHTML='<i data-lucide="sparkles" style="color: #c084fc;"></i>',r.textContent="Item Baru Terdeteksi",c.textContent="Belum pernah dibeli bulan lalu. Akan dicatat sebagai referensi baru!",i.textContent="🆕 Item Baru",i.style.background="rgba(168, 85, 247, 0.15)",i.style.color="#d8b4fe"),j()}function Pe(){const a=document.getElementById("last-month-datalist");a.innerHTML=Object.keys(l.prevCatalog).map(e=>`<option value="${e}"></option>`).join("")}function Le(){const a=document.getElementById("quick-staples-container"),e=Object.entries(l.prevCatalog).slice(0,7);a.innerHTML=e.map(([o,r])=>`
      <button type="button" class="staple-chip" data-name="${o}" data-unit="${r.unit}" data-cat="${r.category}" data-price="${r.price}">
        + ${o} (Rp ${p(r.price)})
      </button>
    `).join(""),a.querySelectorAll(".staple-chip").forEach(o=>{o.onclick=()=>{document.getElementById("item-name-input").value=o.getAttribute("data-name"),document.getElementById("item-unit-input").value=o.getAttribute("data-unit"),et(o.getAttribute("data-cat")),document.getElementById("item-price-input").value=p(o.getAttribute("data-price")),A.playClick(),Z(),q()}})}function Re(){const a=document.getElementById("item-name-input").value.trim(),e=document.getElementById("item-category-input").value,o=document.getElementById("item-unit-input").value,r=parseFloat(document.getElementById("item-qty-input").value)||1,c=W(document.getElementById("item-price-input").value);if(!a){alert("Nama produk supermarket wajib diisi!");return}if(c<=0){alert("Harga satuan wajib diisi!");return}const i=document.querySelector(".mode-btn.active"),s=i?i.getAttribute("data-mode"):"none";let u=0,d=0;if(s==="single"?u=parseFloat(document.getElementById("input-discount-single").value)||0:s==="tiered"&&(u=parseFloat(document.getElementById("input-discount-d1").value)||0,d=parseFloat(document.getElementById("input-discount-d2").value)||0),l.editingItemId){const h=l.cart.findIndex(w=>w.id===l.editingItemId);h!==-1&&(l.cart[h]={...l.cart[h],name:a,category:e,unit:o,qty:r,unitPrice:c,discountType:s,d1:u,d2:d})}else l.cart.unshift({id:"cart_"+Date.now(),name:a,category:e,unit:o,qty:r,unitPrice:c,discountType:s,d1:u,d2:d});A.playClick(),V(),It(),$()}function $e(){if(l.cart.length===0){alert("Troli belanja masih kosong. Tambahkan barang terlebih dahulu!");return}const a=document.getElementById("checkout-modal"),e=document.getElementById("checkout-receipt-items"),o=document.getElementById("checkout-date-text"),r=document.getElementById("receipt-limit-val"),c=document.getElementById("receipt-total-val"),i=document.getElementById("receipt-saved-val"),s=document.getElementById("receipt-balance-val"),u=document.getElementById("receipt-balance-label"),d=document.getElementById("receipt-verdict-card"),h=document.getElementById("verdict-title"),w=document.getElementById("verdict-desc"),P=new Date,T={day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"};o.textContent=`Waktu: ${P.toLocaleDateString("id-ID",T)}`;let I=0,O=0;e.innerHTML=l.cart.map(H=>{const Q=Y(H);return I+=Q.finalRowTotal,O+=Q.savedAmount,`
      <div class="receipt-item-row">
        <div class="receipt-item-left">
          <span class="receipt-item-name">${H.name}</span>
          <span class="receipt-item-sub">${H.qty} ${H.unit} x Rp ${p(H.unitPrice)}</span>
        </div>
        <div class="receipt-item-price">
          Rp ${p(Q.finalRowTotal)}
        </div>
      </div>
    `}).join("");const G=l.safetyCap||5e5,M=G-I;r.textContent=`Rp ${p(G)}`,c.textContent=`Rp ${p(I)}`,i.textContent=`Rp ${p(O)}`,d.classList.remove("safe","danger"),M>=0?(u.textContent="Sisa Anggaran Dompet:",s.textContent=`Rp ${p(M)}`,s.style.color="var(--emerald-light)",d.classList.add("safe"),h.textContent="🎉 Misi Hemat Berhasil!",w.textContent=`Kamu berhasil berhemat dan masih menyisakan Rp ${p(M)} di dompet!`,Ae({particleCount:80,spread:70,origin:{y:.6}}),A.playSuccess()):(u.textContent="DEFISIT / OVERBUDGET:",s.textContent=`- Rp ${p(Math.abs(M))}`,s.style.color="var(--crimson)",d.classList.add("danger"),h.textContent="⚠️ Anggaran Terlampaui!",w.textContent=`Belanjaan melebihi batas dompet sebesar Rp ${p(Math.abs(M))}. Pertimbangkan kurangi camilan/non-esensial.`,A.playWarning()),a.classList.remove("hidden"),j()}function Bt(){document.getElementById("checkout-modal").classList.add("hidden")}function qe(){if(l.cart.length===0)return;const e=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});let o=0,r=0;const c=l.cart.map(s=>{const u=Y(s);return o+=u.finalRowTotal,r+=u.savedAmount,l.prevCatalog[s.name]={price:s.unitPrice,unit:s.unit,category:s.category,updatedAt:Date.now()},{...s,finalRowTotal:u.finalRowTotal,normalRowTotal:u.normalRowTotal,savedAmount:u.savedAmount}}),i={id:"hist_"+Date.now(),date:e,timestamp:Date.now(),note:`Belanja Supermarket (${l.cart.length} item)`,safetyCap:l.safetyCap,totalSpent:o,totalSaved:r,itemCount:l.cart.length,items:c};l.history.unshift(i),l.cart=[],V(),Bt(),$(),X(),K(),ut("view-history")}function X(){const a=document.getElementById("history-sessions-container"),e=document.getElementById("hist-prev-total");if(l.history.length>0&&(e.textContent=`Rp ${p(l.history[0].totalSpent)}`),l.history.length===0){a.innerHTML=`
      <div class="empty-state-card glass-card">
        <i data-lucide="history" style="width: 32px; height: 32px; color: var(--text-muted);"></i>
        <h3>Belum Ada Riwayat Belanja</h3>
        <p>Selesaikan sesi belanja di Tab Troli untuk mencatat struk pertama kamu.</p>
      </div>
    `,j();return}a.innerHTML=l.history.map(o=>{const r=o.totalSpent<=o.safetyCap,c=r?"safe":"danger",i=r?"Sesuai Anggaran":"Overbudget";return`
      <div class="history-card" data-session-id="${o.id}">
        <div class="history-card-header">
          <div class="hist-date-title">
            <i data-lucide="receipt"></i> ${o.date}
          </div>
          <span class="hist-status-pill ${c}">${i}</span>
        </div>

        <div class="hist-summary-row">
          <span class="hist-items-count">${o.itemCount} macam item dibeli</span>
          <span class="hist-total-amount">Rp ${p(o.totalSpent)}</span>
        </div>

        <div class="hist-card-footer">
          <span>Hemat diskon: <strong class="text-emerald">Rp ${p(o.totalSaved||0)}</strong></span>
          <button type="button" class="btn-text-action btn-view-receipt" data-id="${o.id}">
            Lihat Struk <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `}).join(""),j(),a.querySelectorAll(".btn-view-receipt").forEach(o=>{o.onclick=r=>{r.stopPropagation();const c=o.getAttribute("data-id");Ct(c)}}),a.querySelectorAll(".history-card").forEach(o=>{o.onclick=()=>{const r=o.getAttribute("data-session-id");Ct(r)}})}function Ct(a){const e=l.history.find(i=>i.id===a);if(!e)return;const o=document.getElementById("history-detail-modal"),r=document.getElementById("history-modal-body"),c=document.getElementById("btn-reload-to-cart");r.innerHTML=`
    <div class="receipt-paper glass-card-nested">
      <div class="receipt-header">
        <h3>STRUK BELANJA ARSIP</h3>
        <p>Tanggal: ${e.date}</p>
      </div>

      <div class="receipt-divider"></div>

      <div class="receipt-items-summary">
        ${e.items.map(i=>`
          <div class="receipt-item-row">
            <div class="receipt-item-left">
              <span class="receipt-item-name">${i.name}</span>
              <span class="receipt-item-sub">${i.qty} ${i.unit} x Rp ${p(i.unitPrice)}</span>
            </div>
            <div class="receipt-item-price">
              Rp ${p(i.finalRowTotal)}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="receipt-divider"></div>

      <div class="receipt-totals">
        <div class="receipt-row">
          <span>Batas Dompet:</span>
          <strong>Rp ${p(e.safetyCap)}</strong>
        </div>
        <div class="receipt-row">
          <span>Total Pengeluaran:</span>
          <strong class="text-primary font-lg">Rp ${p(e.totalSpent)}</strong>
        </div>
        <div class="receipt-row text-emerald">
          <span>Penghematan Diskon:</span>
          <strong>Rp ${p(e.totalSaved||0)}</strong>
        </div>
      </div>
    </div>
  `,c.onclick=()=>{if(confirm("Salin semua item dari struk ini ke troli belanja aktif sekarang?")){const i=e.items.map(s=>({id:"cart_"+Date.now()+"_"+Math.random().toString(36).substr(2,5),name:s.name,category:s.category||"Bahan Pokok",unit:s.unit||"pcs",qty:s.qty||1,unitPrice:s.unitPrice||0,discountType:s.discountType||"none",d1:s.d1||0,d2:s.d2||0}));l.cart=[...i,...l.cart],V(),$(),o.classList.add("hidden"),ut("view-cart"),A.playSuccess()}},o.classList.remove("hidden"),j()}function K(){const a=document.getElementById("category-breakdown-bars"),e=document.getElementById("breakdown-items-badge");e.textContent=`${l.cart.length} item aktif`;const o=["Bahan Pokok","Makanan & Minuman","Bumbu & Dapur","Perlengkapan Mandi & Cuci","Camilan","Lainnya"],r={};let c=0;o.forEach(s=>{r[s]=0}),l.cart.forEach(s=>{const u=Y(s),d=s.category||"Lainnya";r[d]=(r[d]||0)+u.finalRowTotal,c+=u.finalRowTotal});const i={"Bahan Pokok":"#10b981","Makanan & Minuman":"#38bdf8","Bumbu & Dapur":"#f59e0b","Perlengkapan Mandi & Cuci":"#6366f1",Camilan:"#ec4899",Lainnya:"#94a3b8"};a.innerHTML=o.map(s=>{const u=r[s]||0,d=c>0?Math.round(u/c*100):0,h=i[s]||"#38bdf8";return`
      <div class="cat-bar-item">
        <div class="cat-bar-meta">
          <span class="cat-bar-name">${s}</span>
          <span class="cat-bar-spent">Rp ${p(u)} (${d}%)</span>
        </div>
        <div class="cat-track">
          <div class="cat-fill" style="width: ${d}%; background: ${h};"></div>
        </div>
      </div>
    `}).join("")}function ut(a){l.activeTab=a,document.querySelectorAll(".app-view").forEach(e=>{e.id===a?(e.classList.remove("hidden"),e.classList.add("active")):(e.classList.add("hidden"),e.classList.remove("active"))}),document.querySelectorAll(".nav-tab-btn").forEach(e=>{const o=e.getAttribute("data-target");e.classList.toggle("active",o===a)}),A.playClick(),a==="view-cart"?$():a==="view-history"?X():a==="view-budget"&&(document.getElementById("input-safety-cap-val").value=p(l.safetyCap),K())}let J=null;function Oe(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(e=>{console.warn("SW registration failed:",e)})});const a=document.getElementById("btn-pwa-install");window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),J=e,a&&a.classList.remove("hidden")}),a&&(a.onclick=async()=>{if(J){J.prompt();const{outcome:e}=await J.userChoice;e==="accepted"&&a.classList.add("hidden"),J=null}}),window.addEventListener("appinstalled",()=>{a&&a.classList.add("hidden"),J=null})}function Fe(){document.querySelectorAll(".nav-tab-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-target");ut(h)}});const a=document.getElementById("btn-sound-toggle"),e=document.getElementById("sound-icon");a.onclick=()=>{l.soundEnabled=!l.soundEnabled,localStorage.setItem(N.SOUND_ENABLED,JSON.stringify(l.soundEnabled)),e.setAttribute("data-lucide",l.soundEnabled?"volume-2":"volume-x"),j(),l.soundEnabled&&A.playClick()},document.getElementById("btn-open-add-modal").onclick=()=>st(),document.getElementById("btn-empty-add").onclick=()=>st(),document.getElementById("btn-close-item-modal").onclick=It,document.getElementById("btn-save-item").onclick=Re,document.querySelectorAll(".filter-pill").forEach(d=>{d.onclick=()=>{document.querySelectorAll(".filter-pill").forEach(h=>h.classList.remove("active")),d.classList.add("active"),l.currentCategoryFilter=d.getAttribute("data-category"),A.playClick(),$()}});const o=document.getElementById("cart-search-input"),r=document.getElementById("cart-search-clear");o.oninput=d=>{l.searchQuery=d.target.value,r.classList.toggle("hidden",!l.searchQuery),$()},r.onclick=()=>{o.value="",l.searchQuery="",r.classList.add("hidden"),$()};const c=document.getElementById("item-qty-input");document.getElementById("btn-qty-plus").onclick=()=>{c.value=(parseFloat(c.value)||0)+1,A.playClick(),q()},document.getElementById("btn-qty-minus").onclick=()=>{const d=parseFloat(c.value)||1;d>1&&(c.value=d-1,A.playClick(),q())},c.oninput=q,document.querySelectorAll(".cat-chip").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-cat");et(h),A.playClick()}});const i=document.getElementById("item-price-input");i.oninput=d=>{const h=W(d.target.value);d.target.value=p(h),Z(),q()},document.querySelectorAll(".btn-price-chip").forEach(d=>{d.onclick=()=>{const h=parseInt(d.getAttribute("data-add"),10)||0,w=W(i.value);i.value=p(w+h),A.playClick(),Z(),q()}}),document.getElementById("item-name-input").oninput=()=>{Z()},document.querySelectorAll(".mode-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-mode");lt(h),A.playClick()}}),document.querySelectorAll(".disc-preset").forEach(d=>{d.onclick=()=>{document.getElementById("input-discount-single").value=d.getAttribute("data-d1"),A.playClick(),q()}}),document.querySelectorAll(".disc-tiered-preset").forEach(d=>{d.onclick=()=>{document.getElementById("input-discount-d1").value=d.getAttribute("data-d1"),document.getElementById("input-discount-d2").value=d.getAttribute("data-d2"),A.playClick(),q()}}),document.getElementById("input-discount-single").oninput=q,document.getElementById("input-discount-d1").oninput=q,document.getElementById("input-discount-d2").oninput=q,document.getElementById("btn-checkout-session").onclick=$e,document.getElementById("btn-close-checkout-modal").onclick=Bt,document.getElementById("btn-confirm-save-receipt").onclick=qe,document.getElementById("btn-close-history-modal").onclick=()=>{document.getElementById("history-detail-modal").classList.add("hidden")};const s=document.getElementById("input-safety-cap-val");s.oninput=d=>{const h=W(d.target.value);d.target.value=p(h)},document.querySelectorAll(".btn-budget-pill").forEach(d=>{d.onclick=()=>{if(d.hasAttribute("data-add")){const h=parseInt(d.getAttribute("data-add"),10),w=W(s.value);s.value=p(w+h)}else if(d.hasAttribute("data-set")){const h=parseInt(d.getAttribute("data-set"),10);s.value=p(h)}A.playClick()}}),document.getElementById("btn-save-safety-cap").onclick=()=>{const d=W(s.value);if(d<1e4){alert("Batas minimal dompet adalah Rp 10.000!");return}l.safetyCap=d,V(),A.playSuccess(),tt(),K(),alert(`Batas anggaran dompet berhasil disimpan: Rp ${p(d)}!`)},document.getElementById("btn-export-data").onclick=()=>{const d={safetyCap:l.safetyCap,cart:l.cart,history:l.history,prevCatalog:l.prevCatalog,exportedAt:new Date().toISOString()},h=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),w=URL.createObjectURL(h),P=document.createElement("a");P.href=w,P.download=`smartgrocery_backup_${Date.now()}.json`,P.click(),URL.revokeObjectURL(w),A.playSuccess()};const u=document.getElementById("file-import-input");document.getElementById("btn-import-trigger").onclick=()=>u.click(),u.onchange=d=>{const h=d.target.files[0];if(!h)return;const w=new FileReader;w.onload=P=>{try{const T=JSON.parse(P.target.result);T.safetyCap&&(l.safetyCap=T.safetyCap),T.cart&&(l.cart=T.cart),T.history&&(l.history=T.history),T.prevCatalog&&(l.prevCatalog=T.prevCatalog),V(),$(),X(),K(),alert("Data berhasil diimpor!"),A.playSuccess()}catch{alert("Format file JSON tidak valid!")}},w.readAsText(h),u.value=""},document.getElementById("btn-reset-demo").onclick=()=>{confirm("Kembalikan ke data demo awal anak rantau? Data kustom kamu saat ini akan di-reset.")&&(l.safetyCap=5e5,l.cart=[...ct],l.history=[...rt],l.prevCatalog={...it},V(),$(),X(),K(),A.playSuccess())}}function De(){Se(),Fe(),Oe(),$(),X(),K(),j()}window.addEventListener("DOMContentLoaded",De);

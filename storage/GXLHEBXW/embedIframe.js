(()=>{"use strict";var e={2002:(e,t,r)=>{r.p="localhost"===window.location.hostname?"/assets/":`${window.guardian.app.data.CAPI.config.frontendAssetsFullURL}assets/`}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.p="",(()=>{r(2002);var e,t,o,n,a=function(e,t,r,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(e,r):n?n.value=r:t.set(e,r),r},s=function(e,t,r,o){if("a"===r&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(e):o?o.value:t.get(e)};class i{constructor(t){e.set(this,void 0);try{const r=(new Date).toString();t.setItem(r,r);const o=t.getItem(r)==r;t.removeItem(r),o&&a(this,e,t,"f")}catch(e){}}isAvailable(){return Boolean(s(this,e,"f"))}get(t){try{var r,o;const{value:n,expires:a}=JSON.parse(null!==(r=null===(o=s(this,e,"f"))||void 0===o?void 0:o.getItem(t))&&void 0!==r?r:"");return a&&new Date>new Date(a)?(this.remove(t),null):n}catch(e){return null}}set(t,r,o){var n;return null===(n=s(this,e,"f"))||void 0===n?void 0:n.setItem(t,JSON.stringify({value:r,expires:o}))}remove(t){var r;return null===(r=s(this,e,"f"))||void 0===r?void 0:r.removeItem(t)}clear(){var t;return null===(t=s(this,e,"f"))||void 0===t?void 0:t.clear()}getRaw(t){var r,o;return null!==(r=null===(o=s(this,e,"f"))||void 0===o?void 0:o.getItem(t))&&void 0!==r?r:null}setRaw(t,r){var o;return null===(o=s(this,e,"f"))||void 0===o?void 0:o.setItem(t,r)}}e=new WeakMap;const c=new(n=class{constructor(){t.set(this,void 0),o.set(this,void 0)}get local(){return a(this,t,s(this,t,"f")||new i(localStorage),"f")}get session(){return a(this,o,s(this,o,"f")||new i(sessionStorage),"f")}},t=new WeakMap,o=new WeakMap,n);var l;const u="gu.logger",d={common:{background:"#052962",font:"#ffffff"},commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"}},f=e=>{const{background:t,font:r}=d[e];return`background: ${t}; color: ${r}; padding: 2px 3px; border-radius:3px`},g=(e,...t)=>{if(!(c.local.get(u)||"").includes(e))return;const r=[f("common"),"",f(e),""];console.log(`%c@guardian%c %c${e}%c`,...r,...t)};"undefined"!=typeof window&&(window.guardian||(window.guardian={}),(l=window.guardian).logger||(l.logger={subscribeTo:e=>{const t=c.local.get(u)?c.local.get(u).split(","):[];t.includes(e)||t.push(e),c.local.set(u,t.join(",")),g(e,"🔔 Subscribed, hello!")},unsubscribeFrom:e=>{g(e,"🔕 Unsubscribed, good-bye!");const t=c.local.get(u).split(",").filter((t=>t!==e));c.local.set(u,t.join(","))},teams:()=>Object.keys(d)}));((e,t,r)=>{const o=()=>{((e,t)=>{const{start:r,end:o}=(e=>{const t=window.performance,r=`${e}-start`,o=`${e}-end`;return t&&t.getEntriesByName?{start:()=>{t.mark(r)},end:()=>{t.mark(o),t.measure(e,r,o),g("dotcom",JSON.stringify(t.getEntriesByName(e)));const n=t.getEntriesByName(e,"measure"),a=n&&n[0]&&n[0].duration||0;return Math.round(a)},clear:()=>{t.clearMarks(r),t.clearMarks(o),t.clearMeasures(e)}}:{start:()=>{},end:()=>0,clear:()=>{}}})(e);r(),t().then((()=>{o()})).catch((()=>{o()}))})("embedIframe",r.bind(null,null))};window.guardian.mustardCut||window.guardian.polyfilled?o():window.guardian.queue.push(o)})(0,0,(()=>(e=>{const t=[].slice.call(document.querySelectorAll(".js-embed__iframe"));return window.addEventListener("message",(e=>{const r=t.find((t=>{try{return t.name===e.source.name}catch(e){return!1}}));if(r)try{const t=JSON.parse(e.data);"set-height"===t.type&&(r.height=t.value)}catch(e){}})),t.forEach((e=>{const t=(e.getAttribute("srcdoc")||"").replace(/<gu-script>/g,"<script>").replace(/<\/gu-script>/g,"<\/script>");e.setAttribute("srcdoc",t)})),Promise.resolve()})()))})()})();
//# sourceMappingURL=embedIframe.5435194305db2d7c6238.js.map
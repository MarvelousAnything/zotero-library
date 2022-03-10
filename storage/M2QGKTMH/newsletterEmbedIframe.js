(()=>{"use strict";var e={2002:(e,t,r)=>{r.p="localhost"===window.location.hostname?"/assets/":`${window.guardian.app.data.CAPI.config.frontendAssetsFullURL}assets/`}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.p="",(()=>{r(2002);var e,t,n,o,a=function(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r},s=function(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};class i{constructor(t){e.set(this,void 0);try{const r=(new Date).toString();t.setItem(r,r);const n=t.getItem(r)==r;t.removeItem(r),n&&a(this,e,t,"f")}catch(e){}}isAvailable(){return Boolean(s(this,e,"f"))}get(t){try{var r,n;const{value:o,expires:a}=JSON.parse(null!==(r=null===(n=s(this,e,"f"))||void 0===n?void 0:n.getItem(t))&&void 0!==r?r:"");return a&&new Date>new Date(a)?(this.remove(t),null):o}catch(e){return null}}set(t,r,n){var o;return null===(o=s(this,e,"f"))||void 0===o?void 0:o.setItem(t,JSON.stringify({value:r,expires:n}))}remove(t){var r;return null===(r=s(this,e,"f"))||void 0===r?void 0:r.removeItem(t)}clear(){var t;return null===(t=s(this,e,"f"))||void 0===t?void 0:t.clear()}getRaw(t){var r,n;return null!==(r=null===(n=s(this,e,"f"))||void 0===n?void 0:n.getItem(t))&&void 0!==r?r:null}setRaw(t,r){var n;return null===(n=s(this,e,"f"))||void 0===n?void 0:n.setItem(t,r)}}e=new WeakMap;const c=new(o=class{constructor(){t.set(this,void 0),n.set(this,void 0)}get local(){return a(this,t,s(this,t,"f")||new i(localStorage),"f")}get session(){return a(this,n,s(this,n,"f")||new i(sessionStorage),"f")}},t=new WeakMap,n=new WeakMap,o);var l;const u="gu.logger",d={common:{background:"#052962",font:"#ffffff"},commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"}},f=e=>{const{background:t,font:r}=d[e];return`background: ${t}; color: ${r}; padding: 2px 3px; border-radius:3px`},g=(e,...t)=>{if(!(c.local.get(u)||"").includes(e))return;const r=[f("common"),"",f(e),""];console.log(`%c@guardian%c %c${e}%c`,...r,...t)};"undefined"!=typeof window&&(window.guardian||(window.guardian={}),(l=window.guardian).logger||(l.logger={subscribeTo:e=>{const t=c.local.get(u)?c.local.get(u).split(","):[];t.includes(e)||t.push(e),c.local.set(u,t.join(",")),g(e,"🔔 Subscribed, hello!")},unsubscribeFrom:e=>{g(e,"🔕 Unsubscribed, good-bye!");const t=c.local.get(u).split(",").filter((t=>t!==e));c.local.set(u,t.join(","))},teams:()=>Object.keys(d)}));const w=["https://www.theguardian.com"];((e,t,r)=>{const n=()=>{((e,t)=>{const{start:r,end:n}=(e=>{const t=window.performance,r=`${e}-start`,n=`${e}-end`;return t&&t.getEntriesByName?{start:()=>{t.mark(r)},end:()=>{t.mark(n),t.measure(e,r,n),g("dotcom",JSON.stringify(t.getEntriesByName(e)));const o=t.getEntriesByName(e,"measure"),a=o&&o[0]&&o[0].duration||0;return Math.round(a)},clear:()=>{t.clearMarks(r),t.clearMarks(n),t.clearMeasures(e)}}:{start:()=>{},end:()=>0,clear:()=>{}}})(e);r(),t().then((()=>{n()})).catch((()=>{n()}))})("newsletterEmbedIframe",r.bind(null,null))};window.guardian.mustardCut||window.guardian.polyfilled?n():window.guardian.queue.push(n)})(0,0,(()=>{const e=[].slice.call(document.querySelectorAll(".email-sub__iframe"));return e.forEach((e=>{e&&e.contentWindow&&e.contentWindow.postMessage("resize","https://www.theguardian.com")})),window.addEventListener("message",(t=>{if(!w.includes(t.origin))return;const r=e.filter((e=>{try{if(null!==e.contentWindow&&null!==t.source)return e.contentWindow===t.source}catch(e){return!1}return!1}));if(0!==r.length)try{const e=JSON.parse(t.data);if(!(e=>{if("[object Object]"!==Object.prototype.toString.call(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t===Object.prototype})(e)||"string"!=typeof e.type)return;"set-height"===e.type&&r.forEach((t=>{if("number"==typeof e.value)t.height=`${e.value}`;else if("string"==typeof e.value){const r=parseInt(e.value,10);Number.isInteger(r)&&(t.height=`${r}`)}}))}catch(e){}})),Promise.resolve()}))})()})();
//# sourceMappingURL=newsletterEmbedIframe.8954fd42b941ffa19f84.js.map
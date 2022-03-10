(()=>{"use strict";var e,t,r={2002:(e,t,r)=>{r.p="localhost"===window.location.hostname?"/assets/":`${window.guardian.app.data.CAPI.config.frontendAssetsFullURL}assets/`}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"shimport.a56b01187b25890eed92.js",n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@guardian/dotcom-rendering:",n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){s=c;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var m=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",(()=>{var e={5384:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,[i,s,l]=r,d=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);l&&l(n)}for(t&&t(r);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0},r=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{n(2002);const e=Object.freeze({initialize:function({modulePath:e=".",importFunctionName:t="__import__"}={}){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,a)=>{const i=new URL(e,o);if(self[t].moduleMap[i])return r(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(l)},onload(){r(self[t].moduleMap[i]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}});var t,r,o,a,i=function(e,t,r,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(e,r):n?n.value=r:t.set(e,r),r},s=function(e,t,r,o){if("a"===r&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(e):o?o.value:t.get(e)};class l{constructor(e){t.set(this,void 0);try{const r=(new Date).toString();e.setItem(r,r);const o=e.getItem(r)==r;e.removeItem(r),o&&i(this,t,e,"f")}catch(e){}}isAvailable(){return Boolean(s(this,t,"f"))}get(e){try{var r,o;const{value:n,expires:a}=JSON.parse(null!==(r=null===(o=s(this,t,"f"))||void 0===o?void 0:o.getItem(e))&&void 0!==r?r:"");return a&&new Date>new Date(a)?(this.remove(e),null):n}catch(e){return null}}set(e,r,o){var n;return null===(n=s(this,t,"f"))||void 0===n?void 0:n.setItem(e,JSON.stringify({value:r,expires:o}))}remove(e){var r;return null===(r=s(this,t,"f"))||void 0===r?void 0:r.removeItem(e)}clear(){var e;return null===(e=s(this,t,"f"))||void 0===e?void 0:e.clear()}getRaw(e){var r,o;return null!==(r=null===(o=s(this,t,"f"))||void 0===o?void 0:o.getItem(e))&&void 0!==r?r:null}setRaw(e,r){var o;return null===(o=s(this,t,"f"))||void 0===o?void 0:o.setItem(e,r)}}t=new WeakMap;const d=new(a=class{constructor(){r.set(this,void 0),o.set(this,void 0)}get local(){return i(this,r,s(this,r,"f")||new l(localStorage),"f")}get session(){return i(this,o,s(this,o,"f")||new l(sessionStorage),"f")}},r=new WeakMap,o=new WeakMap,a);var u;const c="gu.logger",m={common:{background:"#052962",font:"#ffffff"},commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"}},f=e=>{const{background:t,font:r}=m[e];return`background: ${t}; color: ${r}; padding: 2px 3px; border-radius:3px`},p=(e,...t)=>{if(!(d.local.get(c)||"").includes(e))return;const r=[f("common"),"",f(e),""];console.log(`%c@guardian%c %c${e}%c`,...r,...t)};"undefined"!=typeof window&&(window.guardian||(window.guardian={}),(u=window.guardian).logger||(u.logger={subscribeTo:e=>{const t=d.local.get(c)?d.local.get(c).split(","):[];t.includes(e)||t.push(e),d.local.set(c,t.join(",")),p(e,"🔔 Subscribed, hello!")},unsubscribeFrom:e=>{p(e,"🔕 Unsubscribed, good-bye!");const t=d.local.get(c).split(",").filter((t=>t!==e));d.local.set(c,t.join(","))},teams:()=>Object.keys(m)}));((e,t,r)=>{const o=()=>{((e,t)=>{const{start:r,end:o}=(e=>{const t=window.performance,r=`${e}-start`,o=`${e}-end`;return t&&t.getEntriesByName?{start:()=>{t.mark(r)},end:()=>{t.mark(o),t.measure(e,r,o),p("dotcom",JSON.stringify(t.getEntriesByName(e)));const n=t.getEntriesByName(e,"measure"),a=n&&n[0]&&n[0].duration||0;return Math.round(a)},clear:()=>{t.clearMarks(r),t.clearMarks(o),t.clearMeasures(e)}}:{start:()=>{},end:()=>0,clear:()=>{}}})(e);r(),t().then((()=>{o()})).catch((()=>{o()}))})("dynamicImport",r.bind(null,null))};window.guardian.mustardCut||window.guardian.polyfilled?o():window.guardian.queue.push(o)})(0,0,(()=>(window.guardianPolyfilledImport=e=>Promise.reject(new Error(`import not polyfilled; attempted import(${e})`)),window.guardian.mustardCut?Promise.resolve((()=>{try{window.guardianPolyfilledImport=new Function("url","return import(url)")}catch(t){e.initialize({importFunctionName:"guardianPolyfilledImport"})}})()):n.e(5124).then(n.bind(n,1806)).then((e=>{e.initialise(),window.guardianPolyfilledImport=e.load})))))})()})();
//# sourceMappingURL=dynamicImport.eda7126ccd5b2f3b8e50.js.map
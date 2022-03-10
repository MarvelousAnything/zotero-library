(()=>{"use strict";var e,t,n={2002:(e,t,n)=>{n.p="localhost"===window.location.hostname?"/assets/":"".concat(window.guardian.app.data.CAPI.config.frontendAssetsFullURL,"assets/")}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"shimport.legacy.508e5bec566031ca7943.js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@guardian/dotcom-rendering:",o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+a),u.src=n),e[n]=[r];var f=(t,r)=>{u.onerror=u.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",(()=>{var e={5384:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var i=o.p+o.u(t),u=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,u,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);c&&c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0},n=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{o(2002);const e=Object.freeze({initialize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.modulePath,n=void 0===t?".":t,r=e.importFunctionName,o=void 0===r?"__import__":r;try{self[o]=new Function("u","return import(u)")}catch(e){var a=new URL(n,location),i=function(e){URL.revokeObjectURL(e.src),e.remove()};self[o]=function(e){return new Promise((function(t,n){var r=new URL(e,a);if(self[o].moduleMap[r])return t(self[o].moduleMap[r]);var u=new Blob(["import * as m from '".concat(r,"';"),"".concat(o,".moduleMap['").concat(r,"']=m;")],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror:function(){n(new Error("Failed to import: ".concat(e))),i(c)},onload:function(){t(self[o].moduleMap[r]),i(c)}});document.head.appendChild(c)}))},self[o].moduleMap={}}}});function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var a,i,u,c,l=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},s=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},d=function(){function e(n){t(this,e),a.set(this,void 0);try{var r=(new Date).toString();n.setItem(r,r);var o=n.getItem(r)==r;n.removeItem(r),o&&l(this,a,n,"f")}catch(e){}}return r(e,[{key:"isAvailable",value:function(){return Boolean(s(this,a,"f"))}},{key:"get",value:function(e){try{var t,n,r=JSON.parse(null!==(t=null===(n=s(this,a,"f"))||void 0===n?void 0:n.getItem(e))&&void 0!==t?t:""),o=r.value,i=r.expires;return i&&new Date>new Date(i)?(this.remove(e),null):o}catch(e){return null}}},{key:"set",value:function(e,t,n){var r;return null===(r=s(this,a,"f"))||void 0===r?void 0:r.setItem(e,JSON.stringify({value:t,expires:n}))}},{key:"remove",value:function(e){var t;return null===(t=s(this,a,"f"))||void 0===t?void 0:t.removeItem(e)}},{key:"clear",value:function(){var e;return null===(e=s(this,a,"f"))||void 0===e?void 0:e.clear()}},{key:"getRaw",value:function(e){var t,n;return null!==(t=null===(n=s(this,a,"f"))||void 0===n?void 0:n.getItem(e))&&void 0!==t?t:null}},{key:"setRaw",value:function(e,t){var n;return null===(n=s(this,a,"f"))||void 0===n?void 0:n.setItem(e,t)}}]),e}();a=new WeakMap;var f,m=new(c=function(){function e(){t(this,e),i.set(this,void 0),u.set(this,void 0)}return r(e,[{key:"local",get:function(){return l(this,i,s(this,i,"f")||new d(localStorage),"f")}},{key:"session",get:function(){return l(this,u,s(this,u,"f")||new d(sessionStorage),"f")}}]),e}(),i=new WeakMap,u=new WeakMap,c),p="gu.logger",v={common:{background:"#052962",font:"#ffffff"},commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"}},g=function(e){var t=v[e],n=t.background,r=t.font;return"background: ".concat(n,"; color: ").concat(r,"; padding: 2px 3px; border-radius:3px")},w=function(e){var t;if((m.local.get(p)||"").includes(e)){for(var n=[g("common"),"",g(e),""],r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];(t=console).log.apply(t,["%c@guardian%c %c".concat(e,"%c")].concat(n,o))}};"undefined"!=typeof window&&(window.guardian||(window.guardian={}),(f=window.guardian).logger||(f.logger={subscribeTo:function(e){var t=m.local.get(p)?m.local.get(p).split(","):[];t.includes(e)||t.push(e),m.local.set(p,t.join(",")),w(e,"🔔 Subscribed, hello!")},unsubscribeFrom:function(e){w(e,"🔕 Unsubscribed, good-bye!");var t=m.local.get(p).split(",").filter((function(t){return t!==e}));m.local.set(p,t.join(","))},teams:function(){return Object.keys(v)}}));var h,b;h=function(){return window.guardianPolyfilledImport=function(e){return Promise.reject(new Error("import not polyfilled; attempted import(".concat(e,")")))},window.guardian.mustardCut?Promise.resolve(function(){try{window.guardianPolyfilledImport=new Function("url","return import(url)")}catch(t){e.initialize({importFunctionName:"guardianPolyfilledImport"})}}()):o.e(5124).then(o.bind(o,1806)).then((function(e){e.initialise(),window.guardianPolyfilledImport=e.load}))},b=function(){!function(e,t){var n=function(e){var t=window.performance,n="".concat(e,"-start"),r="".concat(e,"-end");return t&&t.getEntriesByName?{start:function(){t.mark(n)},end:function(){t.mark(r),t.measure(e,n,r),w("dotcom",JSON.stringify(t.getEntriesByName(e)));var o=t.getEntriesByName(e,"measure"),a=o&&o[0]&&o[0].duration||0;return Math.round(a)},clear:function(){t.clearMarks(n),t.clearMarks(r),t.clearMeasures(e)}}:{start:function(){},end:function(){return 0},clear:function(){}}}(e),r=n.start,o=n.end;r(),t().then((function(){o()})).catch((function(){o()}))}("dynamicImport",h.bind(null,null))},window.guardian.mustardCut||window.guardian.polyfilled?b():window.guardian.queue.push(b)})()})();
//# sourceMappingURL=dynamicImport.legacy.46ef81c4af0bd250c207.js.map
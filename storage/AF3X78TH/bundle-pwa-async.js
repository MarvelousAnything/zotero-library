"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1258],{211:function(e,r,t){var n=t(78),o=t(0),a=["kind","name","props"];function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=u(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var s=(0,n.ZP)({resolved:{},chunkName:e=>"website-containers-".concat(e.importName,"-index").replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g,"-"),isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:e=>t(100)("./".concat(e.importName,"/index")),requireAsync(e){var r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){var r=this.resolve(e);return t(r)},resolve(e){return t(101).resolve("./".concat(e.importName,"/index"))}},{cacheKey:e=>e.importName}),l=(0,n.ZP)({resolved:{},chunkName:e=>"website-addons-".concat(e.importName,"-index").replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g,"-"),isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:e=>t(102)("./".concat(e.importName,"/index")),requireAsync(e){var r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){var r=this.resolve(e);return t(r)},resolve(e){return t(103).resolve("./".concat(e.importName,"/index"))}},{cacheKey:e=>e.importName}),f=(0,n.ZP)({resolved:{},chunkName:e=>"website-svgs-".concat(e.importName,"-index").replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g,"-"),isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:e=>t(104)("./".concat(e.importName,"/index")),requireAsync(e){var r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){var r=this.resolve(e);return t(r)},resolve(e){return t(105).resolve("./".concat(e.importName,"/index"))}},{cacheKey:e=>e.importName}),p=e=>{var{kind:r,name:t,props:n}=e,u=c(e,a);switch(r){case"containers":return o.createElement(s,i({importName:t,fallback:o.createElement("span",null)},n,u));case"addons":return o.createElement(l,i({importName:t,fallback:o.createElement("span",null)},n,u));case"svgs":return o.createElement(f,i({importName:t,fallback:o.createElement("span",null)},n,u));default:throw new Error("Can only lazy load containers, addons or svgs. Kind ".concat(r," requested."))}};r.Z=p},208:function(e,r,t){t.d(r,{iV:function(){return a},ZR:function(){return i}});var n=t(0),o=(0,n.createContext)({}),a=e=>{var{context:r,children:t}=e;return n.createElement(o.Provider,{value:r},t)},i=()=>(0,n.useContext)(o)},66:function(e,r,t){var n=t(0);r.Z=e=>{var r=(0,n.useRef)();return(0,n.useEffect)((()=>{e&&(window.history.replaceState({},null,e),r.current=e)}),[e]),{previousUrl:r.current}}},239:function(e,r,t){t.r(r);var n=t(0);if(8775==t.j)var o=t(206);if(8775==t.j)var a=t(208);if(8775==t.j)var i=t(207);if(8775==t.j)var c=t(245);if(8775==t.j)var u=t(244);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void t(s)}c.done?r(u):Promise.resolve(u).then(n,o)}var v,d,m=8775==t.j?(v=function*(){var{IsolatedEntry:e}=yield Promise.all([t.e(6326),t.e(1216),t.e(2243)]).then(t.bind(t,83));return r=>{var{containerData:t,requestContext:s={},config:f={},levers:p}=r,{name:v,props:d,importance:m,hasFetcher:h}=t,y=c.Z?(0,u.Z)("__CONTAINER_REQUEST_CONTEXT__"):s,b=c.Z?(0,u.Z)("__CONTAINER_CONFIG__"):f,{mode:O}=y,w=l(l({},d),{},{mode:O});return n.createElement(i.zr,{context:y},n.createElement(a.iV,{context:b},n.createElement(e,{levers:p},n.createElement(o.Z,{name:v,importance:m,hasFetcher:h,fetchParams:w}))))}},d=function(){var e=this,r=arguments;return new Promise((function(t,n){var o=v.apply(e,r);function a(e){p(o,t,n,a,i,"next",e)}function i(e){p(o,t,n,a,i,"throw",e)}a(void 0)}))},function(){return d.apply(this,arguments)}):null;r.default=8775==t.j?m:null},206:function(e,r,t){t.d(r,{Z:function(){return q}});var n=t(211),o=e=>{if(!e)return"";if("object"!=typeof e)return"";var r=Object.keys(e).sort().map((r=>{var t;if("function"!=typeof e[r]&&void 0!==e[r])return null===e[r]?encodeURIComponent(r):"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent("object"==typeof(t=e[r])?JSON.stringify(t):t))})).filter((e=>e)).join("&");return""===r?r:"?".concat(r)},a=t(208),i=()=>({previousUrl:void 0}),c=t(66),u=t(0),s=t(261),l=t(262),f=t(264),p=t(71),v=t(207),d=t(247),m=t(210),h=e=>{var[r,t]=(0,u.useState)(!1),n=(0,u.useRef)(),o=(0,u.useCallback)((()=>{n.current=setInterval((()=>{t(!0)}),15e3)}),[]),a=(0,u.useCallback)((()=>{n.current&&clearInterval(n.current)}),[n]),i=(0,u.useCallback)((()=>{t(!1)}),[]);return(0,u.useEffect)((()=>(e&&!n.current&&o(),a)),[e,n,o,a]),{forceUpdate:r,updateFinished:i,stopPolling:a}};function y(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void t(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){w(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=(e,r,t,n,i)=>{var{data:c}=(0,d.fq)(),{env:b,host:w,mode:g}=(0,v.B)(),{apiUrl:j,cdnHostUrl:P}=(0,a.ZR)(),{forceUpdate:E,updateFinished:S,stopPolling:C}=h(i),x=w&&w.endsWith(".com"),D=r;"liveData"!==g&&(D=O(O({},D),{},{mode:g})),n&&(D=O(O({},D),{},{isPersonalised:n}));var N,R,k=o(D)||"",Z="".concat(e).concat(k);c&&c[Z]&&(N=c[Z].data,R=c[Z].error);var[A,U]=(0,u.useState)(Z),[I,_]=(0,u.useState)(N),[q,T]=(0,u.useState)(R),F=Boolean(t&&!(N||R)),[L,B]=(0,u.useState)(F),H=A===Z;return(0,u.useEffect)((()=>{var e=function(){var e,r=(e=function*(){if(!(!t||I&&H&&!E||q&&H)){var e="".concat(j,"/container/").concat(Z);if(i&&E&&!n&&(e="".concat(P).concat(e)),n&&(0,s.Z)()&&(0,l.w$)())try{yield(0,f.I)({environment:b,isDotCom:x}),e="".concat(j,"/p/container/").concat(Z)}catch(o){p.vU("Unable to fetch data from the personalised Container Data API endpoint")}B(!0),U(Z);try{var r=yield(0,m.Z)(e);r.error&&(T(r.error),i&&C()),_(r),r.error||T(null)}catch(a){T(a),p.vU(a),i&&C()}finally{B(!1)}}},function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){y(a,n,o,i,c,"next",e)}function c(e){y(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();e(),i&&S()}),[I,q,t,n,Z,H,j,b,x,i,P,E,S,C]),{loading:L,data:I,error:q}},j=t(268),P=t(252),E=t(1),S=t(212);class C extends u.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){var{error:e}=this.state,{children:r,required:t,config:n={}}=this.props;if(e&&t){if(n.envelope)throw new Error(e);return S.Z.setPrimaryContainerErrorValue(window.location.pathname),window.location.reload(),null}return e?null:r}}var x=C,D={PRIMARY:{serverSideRender:!0,serverSideFetch:!0,required:!0,allowedToSetCustomPageUrl:!0},SECONDARY:{serverSideRender:!0,serverSideFetch:!0,required:!1,allowedToSetCustomPageUrl:!1},TERTIARY:{serverSideRender:!1,serverSideFetch:!1,required:!1,allowedToSetCustomPageUrl:!1},"RESERVE-AND-FILL":{serverSideRender:!0,serverSideFetch:!1,required:!1,allowedToSetCustomPageUrl:!1}},N=["importance","kind","name","hasFetcher","hasPolling","isPersonalised","props","fetchParams","levers"],R=["shouldRenderNull","kind","name","levers","required","containerData","containerProps","containerError"];function k(){return k=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},k.apply(this,arguments)}function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){U(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function U(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function I(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _=u.memo((e=>{var{shouldRenderNull:r,kind:t,name:o,levers:i,required:c,containerData:s,containerProps:l,containerError:f}=e,p=I(e,R),v=(0,a.ZR)();if(r)return null;var d=u.createElement(n.Z,k({kind:t,name:o,data:s,error:f,props:l},p));return u.createElement(x,{required:c,config:v},i?u.createElement(P.a,{theme:(0,j.g)(i)},d):d)}),((e,r)=>JSON.stringify(e)===JSON.stringify(r))),q=e=>{var r,{importance:t,kind:n="containers",name:a,hasFetcher:s=!1,hasPolling:l=!1,isPersonalised:f=!1,props:p,fetchParams:v,levers:m}=e,h=I(e,N),{data:y,loading:b,error:O}=g(a,v,s,f,l),{secondRenderAttempt:w}=(0,d.fq)(),j=(0,E.Y)(),P=!1,{serverSideRender:S,serverSideFetch:C,required:x,allowedToSetCustomPageUrl:R}=D[t]||D.PRIMARY,Z=!j;if(s){var U=S&&!C;if(!b||y||U||(P=!0),O||y||!(Z&&C||j&&!b&&!U))r=O;else{var q=o(v),T="".concat(a).concat(q);r=new Error("No data returned for ".concat(T))}}!S&&Z&&(P=!0),!x&&r&&(P=!0),w&&!x&&Z&&(P=!0);var F=R?c.Z:i,L=A(A(A({},p),v),{},{useCustomPageUrl:F});return u.createElement(_,k({shouldRenderNull:P,kind:n,name:a,levers:m,required:x,containerData:y,containerProps:L,containerError:r},h))}},295:function(e,r,t){var n=t(0),o=t(211);r.Z=e=>{var{type:r,props:t}=e,[a,i]=r.split(":");return n.createElement(o.Z,{kind:"svgs",name:a,props:{name:i,props:t}})}},207:function(e,r,t){t.d(r,{zr:function(){return a},B:function(){return i}});var n=t(0),o=(0,n.createContext)({}),a=e=>{var{context:r,children:t}=e;return n.createElement(o.Provider,{value:r},t)},i=()=>(0,n.useContext)(o)},84:function(e,r,t){t.d(r,{y3:function(){return n},xe:function(){return o},Hi:function(){return a},be:function(){return i}});var n=400,o=403,a=404,i=500},201:function(e,r,t){t.d(r,{ej:function(){return o},Hg:function(){return a}});var n=t(10),o=e=>{var{name:r}=e;return(0,n.get)(r)},a=()=>document.cookie},209:function(e,r,t){var n=t(10);r.Z=e=>{var{name:r,value:t,expires:o,domain:a,secure:i="http:"!==document.location.protocol}=e;(0,n.set)(r,t,{expires:o,secure:i,domain:a})}},210:function(e,r,t){var n=t(267);function o(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void t(s)}c.done?r(u):Promise.resolve(u).then(n,o)}var a=function(){var e,r=(e=function*(e){if(!e)throw new Error("No URL provided");var r=yield(0,n.Z)(e,{method:"GET",headers:{Accept:"application/json"}});return yield r.json()},function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function c(e){o(i,n,a,c,u,"next",e)}function u(e){o(i,n,a,c,u,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}();r.Z=a},240:function(e,r,t){if(t.r(r),8775==t.j)var n=t(497);if(8775==t.j)var o=t(239);function a(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void t(s)}c.done?r(u):Promise.resolve(u).then(n,o)}var i;r.default=8775==t.j?(i=function*(){var e=yield(0,o.default)();return(0,n.wU)(module)(e)},function(){var e=this,r=arguments;return new Promise((function(t,n){var o=i.apply(e,r);function c(e){a(o,t,n,c,u,"next",e)}function u(e){a(o,t,n,c,u,"throw",e)}c(void 0)}))}):null},306:function(e,r,t){var n,o=t(307);r.Z=()=>(n||(n=(0,o.Z)("https://nav.files.bbci.co.uk/orbit/2.0.0-502.c3ab836/js/require.min.js")),n)},307:function(e,r){r.Z=e=>new Promise(((r,t)=>{var n=document.createElement("script");n.src=e,n.onload=r,n.onerror=t,document.head.appendChild(n)}))},339:function(e,r,t){t.d(r,{V:function(){return i}});var n=t(0),o=t(306),a=(()=>{var e=!1,r=!1,t=[];return(n,a)=>{var i=()=>{var e=n.slice(n.lastIndexOf("/")+1);window.require.config({paths:{[e]:n}}),window.require([e],(e=>{a(e)}))};e?i():t.push(i),r||(r=!0,(0,o.Z)().then((()=>{e=!0,t.forEach((e=>e())),t=[]})))}})(),i=e=>{var[r,t]=(0,n.useState)(null);return(0,n.useEffect)((()=>{a(e,t)}),[e]),r}},71:function(e,r,t){t.d(r,{vU:function(){return o}});var n={},o=e=>{if(n.errors||(n.errors=[]),e.stack){var r={message:e.message,stack:e.stack,name:e.name,code:e.code,signal:e.signal};n.errors.push(r)}else n.errors.push(e)}},3:function(e,r,t){t.d(r,{rU:function(){return w},nY:function(){return m},d0:function(){return j},Ph:function(){return x},BT:function(){return C},TH:function(){return n.TH}});var n=t(82),o=t(0),a=t(248),i=t(247),c=t(11),u=t.n(c),s=741==t.j?["path"]:null;function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var{Consumer:v,Provider:d}=o.createContext({routes:[]}),m=e=>{var{children:r,routes:t}=e;return o.createElement(d,{value:{routes:t.map((e=>{var{path:r}=e,t=p(e,s);return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({pathMatcher:u()(r),path:r},t)}))}},r)},h=v,y=["url","children"];function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function O(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var w=o.forwardRef(((e,r)=>{var{url:t,children:n}=e,c=O(e,y),{page:u}=(0,i.fq)();return null!=u&&u.routeHasCustomCsp?o.createElement("a",b({href:t},c,{ref:r}),n):o.createElement(h,null,(e=>{var{routes:i}=e,u=t&&t.split("?")[0];return i.filter((e=>{var{allowClientSideLink:r}=e;return r})).some((e=>{var{pathMatcher:r}=e;return r.test(u)}))?o.createElement(a.rU,b({to:t},c),n):o.createElement("a",b({href:t},c,{ref:r}),n)}))})),g=t(245).Z?o.useLayoutEffect:()=>{},j=741==t.j?e=>{var{children:r,enabled:t}=e;return g((()=>{!Boolean(window.location.hash)&&t&&window.scrollTo(0,0)}),[t]),r}:null;function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var C=(e,r,t)=>{var n=new URLSearchParams(e);Object.keys(r).forEach((e=>{n.set(e,r[e])})),((e,r)=>{var t="".concat(window.location.pathname).concat(e);r?r.push(t,{path:t}):window.history.pushState({path:t},"",t)})("?".concat(n.toString()),t)},x=(e,r)=>{if(e){var t=new URLSearchParams(e);if(!r)return Array.from(t).reduce(((e,r)=>{var[t,n]=r;return E(E({},e),{},{[t]:n})}),{});if(t.has(r)){var n=t.get(r);return""===n?null:n}}}},212:function(e,r,t){var n=t(245),o=()=>!(!n.Z||!Boolean(window.sessionStorage))&&["setItem","getItem","removeItem"].every((e=>"function"==typeof window.sessionStorage[e])),a="bbc-wc-primary-container-error",i=()=>o()?window.sessionStorage.getItem(a):null;r.Z={setPrimaryContainerErrorValue:e=>o()?window.sessionStorage.setItem(a,e):null,getPrimaryContainerErrorValue:i,clearPrimaryContainerErrorValue:()=>o()?window.sessionStorage.removeItem(a):null,currentPathHasPrimaryContainerError:()=>{if(!o())return null;var e=i(),r=window.location.pathname;return Boolean(e)&&e===r}}}}]);
(()=>{var e,t,n={8602:(e,t,n)=>{var o={"./Branding.importable":[1578,7800,9350,1578],"./CalloutBlockComponent.importable":[8344,7800,9350,1624,4279,5310,8344],"./ChartAtomWrapper.importable":[8748,7800,9350,1624,7576,4279,9311,8748],"./CommentCount.importable":[2051,7800,9350,53,3215],"./CommercialMetrics.importable":[7749,7800,7576,7749],"./DiscussionContainer.importable":[23,7800,9350,1624,53,7912,23],"./DiscussionMeta.importable":[7583,7800,9350,53,7583],"./DocumentBlockComponent.importable":[8108,7800,9350,1624,1376],"./EditionDropdown.importable":[6965,7800,9350,6965],"./EmbedBlockComponent.importable":[9327,7800,9350,1624,9327],"./FilterKeyEventsToggle.importable":[1214,7800,9350,1214],"./FocusStyles.importable":[5096,5096],"./GetMatchNav.importable":[2,7800,9350,53,2],"./GetMatchStats.importable":[2058,7800,9350,53,2058],"./GetMatchTabs.importable":[2949,7800,9350,53,2949],"./GuideAtomWrapper.importable":[8294,7800,9350,1624,7576,4279,9311,8294],"./InstagramBlockComponent.importable":[6992,7800,9350,1624,6992],"./InteractiveBlockComponent.importable":[7793,7800,9350,7881,7793],"./KnowledgeQuizAtomWrapper.importable":[3397,7800,9350,1624,7576,4279,9311,3397],"./LabsHeader.importable":[4813,7800,9350,1624,4813],"./Links.importable":[1924,7800,9350,53,1924],"./Liveness.importable":[3270,7800,9350,1624,53,3270],"./MapEmbedBlockComponent.importable":[9641,7800,9350,1624,9641],"./MostViewedFooterData.importable":[9817,7800,9350,53,8489,9817],"./MostViewedRightWrapper.importable":[6444,7800,9350,53,7576,5747,2879],"./OnwardsLower.importable":[3213,7800,9350,53,5747,3213],"./OnwardsUpper.importable":[8583,7800,9350,53,5747,5431,8583],"./PersonalityQuizAtomWrapper.importable":[6684,7800,9350,1624,7576,4279,9311,6684],"./ProfileAtomWrapper.importable":[4850,7800,9350,1624,7576,4279,9311,4850],"./PulsingDot.importable":[8839,7800,8839],"./QandaAtomWrapper.importable":[5217,7800,9350,1624,7576,4279,9311,5217],"./RichLinkComponent.importable":[7051,7800,9350,53,7051],"./ShareCount.importable":[5356,7800,9350,53,5356],"./SpotifyBlockComponent.importable":[9776,7800,9350,1624,9776],"./StickyVideo.importable":[586,7800,9350,586],"./SubNav.importable":[6348,7800,9350,6348],"./TimelineAtomWrapper.importable":[4576,7800,9350,1624,7576,4279,9311,4576],"./TopRightAdSlot.importable":[4025,7800,7576,4025],"./UnsafeEmbedBlockComponent.importable":[4211,7800,9350,1624,4211],"./VideoFacebookBlockComponent.importable":[5585,7800,9350,1624,5585],"./VineBlockComponent.importable":[8080,7800,9350,1624,8080],"./YoutubeBlockComponent.importable":[2737,7800,9350,1624,7576,4279,9311,2737]};function r(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=8602,e.exports=r},7789:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});var o=n(75);const r=e=>{const t=window.performance,n=`${e}-start`,r=`${e}-end`;return t&&t.getEntriesByName?{start:()=>{t.mark(n)},end:()=>{t.mark(r),t.measure(e,n,r),(0,o.c)("dotcom",JSON.stringify(t.getEntriesByName(e)));const l=t.getEntriesByName(e,"measure"),i=l&&l[0]&&l[0].duration||0;return Math.round(i)},clear:()=>{t.clearMarks(n),t.clearMarks(r),t.clearMeasures(e)}}:{start:()=>{},end:()=>0,clear:()=>{}}}},8673:(e,t,n)=>{"use strict";n.d(t,{$:()=>i});var o=n(75),r=n(473),l=n(7789);const i=(e,t,i)=>{if(i.dataset.guReady)return;const{start:a,end:c}=(0,l.i)(`hydrate-${e}`);a(),n(8602)(`./${e}.importable`).then((n=>{var l;"true"===i.getAttribute("clientOnly")?(null===(l=i.querySelector('[data-name="placeholder"]'))||void 0===l||l.remove(),(0,o.c)("dotcom",`Rendering island ${e}`),(0,r.sY)((0,r.h)(n[e],t),i)):((0,o.c)("dotcom",`Hydrating island ${e}`),(0,r.ZB)((0,r.h)(n[e],t),i)),i.setAttribute("data-gu-ready","true"),c()})).catch((t=>{throw e&&t.message.includes(e)&&console.error(`🚨 Error importing ${e}. Components must live in the root of /components and follow the [MyComponent].importable.tsx naming convention 🚨`),t}))}},8728:(e,t,n)=>{"use strict";n.d(t,{o:()=>o});const o=e=>{const t=e.getAttribute("name");return t||console.error("🚨 Error - no name attribute supplied. We need name to know what component to import 🚨"),t}},222:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=e=>{const t=e.getAttribute("props");let n;try{n=t&&JSON.parse(t)}catch(e){throw console.error(`🚨 Error parsing props. Is this data serialisable? ${t} 🚨`),e}return n}},6697:(e,t,n)=>{"use strict";n.d(t,{G:()=>i});var o=n(8673),r=n(8728),l=n(222);const i=e=>{e.forEach((e=>{if(e instanceof HTMLElement){const n=(0,r.o)(e),i=(0,l.A)(e);if(!n)return;switch(e.getAttribute("deferuntil")){case"idle":t=()=>{(0,o.$)(n,i,e)},"requestIdleCallback"in window?window.requestIdleCallback(t,{timeout:500}):setTimeout(t,300);break;case"visible":((e,t)=>{if("IntersectionObserver"in window){const n=new IntersectionObserver((([e])=>{e.isIntersecting&&(n.disconnect(),t())}));n.observe(e)}else setTimeout((()=>t()),0)})(e,(()=>{(0,o.$)(n,i,e)}));break;default:(0,o.$)(n,i,e)}}var t}))}},2002:(e,t,n)=>{"use strict";n.p="localhost"===window.location.hostname?"/assets/":`${window.guardian.app.data.CAPI.config.frontendAssetsFullURL}assets/`},75:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var o,r=n(3987),l=n(6362);const i="gu.logger",a=r.f,c=e=>{const{background:t,font:n}=a[e];return`background: ${t}; color: ${n}; padding: 2px 3px; border-radius:3px`},s=(e,...t)=>{if(!(l.t.local.get(i)||"").includes(e))return;const n=[c("common"),"",c(e),""];console.log(`%c@guardian%c %c${e}%c`,...n,...t)};"undefined"!=typeof window&&(window.guardian||(window.guardian={}),(o=window.guardian).logger||(o.logger={subscribeTo:e=>{const t=l.t.local.get(i)?l.t.local.get(i).split(","):[];t.includes(e)||t.push(e),l.t.local.set(i,t.join(",")),s(e,"🔔 Subscribed, hello!")},unsubscribeFrom:e=>{s(e,"🔕 Unsubscribed, good-bye!");const t=l.t.local.get(i).split(",").filter((t=>t!==e));l.t.local.set(i,t.join(","))},teams:()=>Object.keys(a)}))},3987:(e,t,n)=>{"use strict";n.d(t,{f:()=>o});const o={common:{background:"#052962",font:"#ffffff"},commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"}}},6362:(e,t,n)=>{"use strict";n.d(t,{t:()=>u});var o,r,l,i,a=function(e,t,n,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?r.call(e,n):r?r.value=n:t.set(e,n),n},c=function(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)};class s{constructor(e){o.set(this,void 0);try{const t=(new Date).toString();e.setItem(t,t);const n=e.getItem(t)==t;e.removeItem(t),n&&a(this,o,e,"f")}catch(e){}}isAvailable(){return Boolean(c(this,o,"f"))}get(e){try{var t,n;const{value:r,expires:l}=JSON.parse(null!==(t=null===(n=c(this,o,"f"))||void 0===n?void 0:n.getItem(e))&&void 0!==t?t:"");return l&&new Date>new Date(l)?(this.remove(e),null):r}catch(e){return null}}set(e,t,n){var r;return null===(r=c(this,o,"f"))||void 0===r?void 0:r.setItem(e,JSON.stringify({value:t,expires:n}))}remove(e){var t;return null===(t=c(this,o,"f"))||void 0===t?void 0:t.removeItem(e)}clear(){var e;return null===(e=c(this,o,"f"))||void 0===e?void 0:e.clear()}getRaw(e){var t,n;return null!==(t=null===(n=c(this,o,"f"))||void 0===n?void 0:n.getItem(e))&&void 0!==t?t:null}setRaw(e,t){var n;return null===(n=c(this,o,"f"))||void 0===n?void 0:n.setItem(e,t)}}o=new WeakMap;const u=new(i=class{constructor(){r.set(this,void 0),l.set(this,void 0)}get local(){return a(this,r,c(this,r,"f")||new s(localStorage),"f")}get session(){return a(this,l,c(this,l,"f")||new s(sessionStorage),"f")}},r=new WeakMap,l=new WeakMap,i)},473:(e,t,n)=>{"use strict";n.d(t,{sY:()=>W,ZB:()=>I,az:()=>m,h:()=>m,HY:()=>v,Vf:()=>h,wA:()=>g,Tm:()=>$,kr:()=>j,bR:()=>S,YM:()=>r});var o,r,l,i,a,c,s,u={},_=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,l,i,a={};for(i in t)"key"==i?r=t[i]:"ref"==i?l=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?o.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return b(e,a,r,l,null)}function b(e,t,n,o,i){var a={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++l:i};return null==i&&null!=r.vnode&&r.vnode(a),a}function h(){return{current:null}}function v(e){return e.children}function g(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function w(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return w(e)}}function k(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!C.__r++||c!==r.debounceRendering)&&((c=r.debounceRendering)||a)(C)}function C(){for(var e;C.__r=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,o,r,l,i;e.__d&&(l=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(o=f({},r)).__v=r.__v+1,D(i,r,o,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[l]:null,n,null==l?y(r):l,r.__h),O(n,r),r.__e!=l&&w(r)))}))}function E(e,t,n,o,r,l,i,a,c,s){var d,f,p,m,h,g,w,k=o&&o.__k||_,C=k.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?b(null,m,null,null,m):Array.isArray(m)?b(v,{children:m},null,null,null):m.__b>0?b(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(p=k[d])||p&&m.key==p.key&&m.type===p.type)k[d]=void 0;else for(f=0;f<C;f++){if((p=k[f])&&m.key==p.key&&m.type===p.type){k[f]=void 0;break}p=null}D(e,m,p=p||u,r,l,i,a,c,s),h=m.__e,(f=m.ref)&&p.ref!=f&&(w||(w=[]),p.ref&&w.push(p.ref,null,m),w.push(f,m.__c||h,m)),null!=h?(null==g&&(g=h),"function"==typeof m.type&&m.__k===p.__k?m.__d=c=A(m,c,e):c=x(e,m,p,k,h,c),"function"==typeof n.type&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=e&&(c=y(p))}for(n.__e=g,d=C;d--;)null!=k[d]&&("function"==typeof n.type&&null!=k[d].__e&&k[d].__e==n.__d&&(n.__d=y(o,d+1)),L(k[d],k[d]));if(w)for(d=0;d<w.length;d++)N(w[d],w[++d],w[++d])}function A(e,t,n){for(var o,r=e.__k,l=0;r&&l<r.length;l++)(o=r[l])&&(o.__=e,t="function"==typeof o.type?A(o,t,n):x(n,o,o,r,o.__e,t));return t}function S(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){S(e,t)})):t.push(e)),t}function x(e,t,n,o,r,l){var i,a,c;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),i=null;else{for(a=l,c=0;(a=a.nextSibling)&&c<o.length;c+=2)if(a==r)break e;e.insertBefore(r,l),i=l}return void 0!==i?i:r.nextSibling}function P(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||d.test(t)?n:n+"px"}function T(e,t,n,o,r){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||P(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||P(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?o||e.addEventListener(t,l?F:M,l):e.removeEventListener(t,l?F:M,l);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function M(e){this.l[e.type+!1](r.event?r.event(e):e)}function F(e){this.l[e.type+!0](r.event?r.event(e):e)}function D(e,t,n,o,l,i,a,c,s){var u,_,d,p,m,b,h,y,w,k,C,A=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,c=t.__e=n.__e,t.__h=null,i=[c]),(u=r.__b)&&u(t);try{e:if("function"==typeof A){if(y=t.props,w=(u=A.contextType)&&o[u.__c],k=u?w?w.props.value:u.__:o,n.__c?h=(_=t.__c=n.__c).__=_.__E:("prototype"in A&&A.prototype.render?t.__c=_=new A(y,k):(t.__c=_=new g(y,k),_.constructor=A,_.render=U),w&&w.sub(_),_.props=y,_.state||(_.state={}),_.context=k,_.__n=o,d=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=A.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=f({},_.__s)),f(_.__s,A.getDerivedStateFromProps(y,_.__s))),p=_.props,m=_.state,d)null==A.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==A.getDerivedStateFromProps&&y!==p&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(y,k),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(y,_.__s,k)||t.__v===n.__v){_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),_.__h.length&&a.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(y,_.__s,k),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(p,m,b)}))}_.context=k,_.props=y,_.state=_.__s,(u=r.__r)&&u(t),_.__d=!1,_.__v=t,_.__P=e,u=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=f(f({},o),_.getChildContext())),d||null==_.getSnapshotBeforeUpdate||(b=_.getSnapshotBeforeUpdate(p,m)),C=null!=u&&u.type===v&&null==u.key?u.props.children:u,E(e,Array.isArray(C)?C:[C],t,n,o,l,i,a,c,s),_.base=t.__e,t.__h=null,_.__h.length&&a.push(_),h&&(_.__E=_.__=null),_.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=B(n.__e,t,n,o,l,i,a,s);(u=r.diffed)&&u(t)}catch(e){t.__v=null,(s||null!=i)&&(t.__e=c,t.__h=!!s,i[i.indexOf(c)]=null),r.__e(e,t,n)}}function O(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function B(e,t,n,r,l,i,a,c){var s,_,d,f=n.props,m=t.props,b=t.type,h=0;if("svg"===b&&(l=!0),null!=i)for(;h<i.length;h++)if((s=i[h])&&(s===e||(b?s.localName==b:3==s.nodeType))){e=s,i[h]=null;break}if(null==e){if(null===b)return document.createTextNode(m);e=l?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),i=null,c=!1}if(null===b)f===m||c&&e.data===m||(e.data=m);else{if(i=i&&o.call(e.childNodes),_=(f=n.props||u).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!c){if(null!=i)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(d||_)&&(d&&(_&&d.__html==_.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||T(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||T(e,l,t[l],n[l],o)}(e,m,f,l,c),d)t.__k=[];else if(h=t.props.children,E(e,Array.isArray(h)?h:[h],t,n,r,l&&"foreignObject"!==b,i,a,i?i[0]:n.__k&&y(n,0),c),null!=i)for(h=i.length;h--;)null!=i[h]&&p(i[h]);c||("value"in m&&void 0!==(h=m.value)&&(h!==e.value||"progress"===b&&!h)&&T(e,"value",h,f.value,!1),"checked"in m&&void 0!==(h=m.checked)&&h!==e.checked&&T(e,"checked",h,f.checked,!1))}return e}function N(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function L(e,t,n){var o,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||N(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&L(o[l],t,"function"!=typeof e.type);n||null==e.__e||p(e.__e),e.__e=e.__d=void 0}function U(e,t,n){return this.constructor(e,n)}function W(e,t,n){var l,i,a;r.__&&r.__(e,t),i=(l="function"==typeof n)?null:n&&n.__k||t.__k,a=[],D(t,e=(!l&&n||t).__k=m(v,null,[e]),i||u,u,void 0!==t.ownerSVGElement,!l&&n?[n]:i?null:t.firstChild?o.call(t.childNodes):null,a,!l&&n?n:i?i.__e:t.firstChild,l),O(a,e)}function I(e,t){W(e,t,I)}function $(e,t,n){var r,l,i,a=f({},e.props);for(i in t)"key"==i?r=t[i]:"ref"==i?l=t[i]:a[i]=t[i];return arguments.length>2&&(a.children=arguments.length>3?o.call(arguments,2):n),b(e.type,a,r||e.key,l||e.ref,null)}function j(e,t){var n={__c:t="__cC"+s++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(k)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}o=_.slice,r={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},l=0,g.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},g.prototype.render=v,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,C.__r=0,s=0}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var l=o[e]={exports:{}};return n[e](l,l.exports,r),l.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+"."+{2:"d7d094dee6d42e245912",23:"89decbe80e5a614f7da4",53:"247cf686487b28c4e7be",586:"72446980a9de541215d7",1214:"8bedc7bc99c4b55b2703",1376:"959294a4c47db33060a4",1578:"5c1f46912226044209fb",1624:"439f372635e1c0ba7a5c",1924:"9a94403703e55e70ddf6",2058:"166cbd9ecd51bc80cb4f",2737:"7e7092789d78b1a18016",2879:"5a477b7ed169639dcb54",2949:"63517e95b162731713a0",3213:"a8bba21bafcbddad7a27",3215:"c7a855e13283bb675dc5",3270:"46c09e0345456c516a4d",3397:"2170da35a746770a785d",4025:"ecf6c13c1da1b09309e6",4211:"0447860526b447f79730",4279:"fd7ae47942a8f8c79d1e",4576:"46460ad3cdb25601577f",4813:"5aea74ded51d08859ee7",4850:"364e984f4378211c77b4",5096:"43e3fc6c20551deaba90",5217:"7b0f7a962162faccea7a",5226:"570f1040c8c9afae6aac",5310:"d333f48e48e1a24471a1",5356:"843de4f08437fa370683",5431:"209b7db366094296d255",5585:"c12dd9c4f072f32dbb54",5747:"c28a83fcf8daa1411340",6348:"cf215597e445ed6316b5",6684:"912b2bebce3b29ada2ac",6965:"98441e856897c2ba9669",6992:"4ada677b3f6d19a89b5d",7051:"934e7bd0c0f4e641df88",7576:"a3aeca4219f4785459dc",7583:"bfe0358d0d8033c52383",7749:"014c21ec2328f442a443",7793:"45771773fcbb94613fec",7800:"fb164865a5a31849c56b",7881:"48fa70412b304881d399",7912:"d00c500185fb0a85f728",8080:"d81b19fda14f8e3fecc7",8294:"086a581cef76c3fff547",8344:"e924dfa0c71e203c2c14",8489:"4a5b8ad9ba488f4e44df",8583:"438db5a508de78f0e2b3",8748:"af3e21e57833624a09c4",8839:"90574c4fdb0add344179",9311:"b4ced06dc58e9d71968a",9327:"8481586726c45876d026",9350:"faeb177e9c2f39ce2d83",9641:"bfa837d56db2aeb17a8a",9776:"f56d70d125841b80bd06",9817:"ff8bb341f264cb0e12b7"}[e]+".js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@guardian/dotcom-rendering:",r.l=(n,o,l,i)=>{if(e[n])e[n].push(o);else{var a,c;if(void 0!==l)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var _=s[u];if(_.getAttribute("src")==n||_.getAttribute("data-webpack")==t+l){a=_;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+l),a.src=n),e[n]=[o];var d=(t,o)=>{a.onerror=a.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(o))),t)return t(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",(()=>{var e={4909:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var l=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=l);var i=r.p+r.u(t),a=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var l=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",a.name="ChunkLoadError",a.type=l,a.request=i,o[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,l,[i,a,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);c&&c(r)}for(t&&t(n);s<i.length;s++)l=i[s],r.o(e,l)&&e[l]&&e[l][0](),e[i[s]]=0},n=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";r(2002);var e=r(7789),t=r(6697);((t,n,o)=>{const r=()=>{((t,n)=>{const{start:o,end:r}=(0,e.i)("islands");o(),n().then((()=>{r()})).catch((()=>{r()}))})(0,o.bind(null,null))};window.guardian.mustardCut||window.guardian.polyfilled?r():window.guardian.queue.push(r)})(0,0,(()=>{const e=document.querySelectorAll("gu-island");return(0,t.G)(e),Promise.resolve()}))})()})();
//# sourceMappingURL=islands.97f9bdc90b39773a6ec7.js.map
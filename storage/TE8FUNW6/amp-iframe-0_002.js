;
(self.AMP=self.AMP||[]).push({m:0,v:"2202230359001",n:"amp-iframe",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function r(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,i)}return r}function i(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function o(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u;function a(){return u||(u=Promise.resolve(void 0))}var s=function(){var t=this;this.promise=new Promise((function(n,r){t.resolve=n,t.reject=r}))};function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,n){if(n&&("object"===l(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var v=Array.isArray;function m(t,n){for(var r=[],i=0,e=0;e<t.length;e++){var o=t[e];n(o,e,t)?r.push(o):(i<e&&(t[i]=o),i++)}return i<t.length&&(t.length=i),r}function d(t,n){var r=t.length-n.length;return r>=0&&t.indexOf(n,r)==r}var p,b,g=Object.prototype;function y(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function w(t,n,r,i,e,o,u,a,s,f,c){return t}function j(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,i=t.stack,e=new Error(r);for(var o in t)e[o]=t[o];return e.stack=i,e}function O(t){for(var n,r=null,i="",e=o(arguments,!0);!(n=e()).done;){var u=n.value;u instanceof Error&&!r?r=j(u):(i&&(i+=" "),i+=u)}return r?i&&(r.message=i+": "+r.message):r=new Error(i),r}function x(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}function S(t){var n=O.apply(null,arguments);setTimeout((function(){throw x(n),n}))}function P(t){try{for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.apply(null,r)}catch(t){S(t)}}function E(t){return JSON.parse(t)}function I(t,n){try{return E(t)}catch(t){return null==n||n(t),null}}function M(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function R(t){return(t.ownerDocument||t).defaultView}function A(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function z(t,n,r,i){for(var e,u,a=o(v(e=t)?e:[e],!0);!(u=a()).done;){var s=u.value,f=n.getAttribute(s);null!==f?r.setAttribute(s,f):i&&r.removeAttribute(s)}}g.hasOwnProperty,g.toString;var T=["Webkit","webkit","Moz","moz","ms","O","o"],k={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function N(t,n,r,i,e){var o=function(t,n,r){if(n.startsWith("--"))return n;b||(b=y());var i=b[n];if(!i||r){if(i=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var r=0;r<T.length;r++){var i=T[r]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[o]&&(i=o)}r||(b[n]=i)}return i}(t.style,n,e);if(o){var u,a=i?r+i:r;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),T.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}function C(t,n){return t.getComputedStyle(n)||k}var F=/vertical/,G=new WeakMap,L=new WeakMap,D=new WeakMap;function _(t){var n=G.get(t);return n||(n=new t.ResizeObserver(B),G.set(t,n)),n}function B(t){for(var n=new Set,r=t.length-1;r>=0;r--){var i=t[r],e=i.target;if(!n.has(e)){n.add(e);var o=L.get(e);if(o){D.set(e,i);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;H(a.type,s,i)}}}}}function H(t,n,r){if(0==t){var i=r.contentRect,e=i.height;P(n,{width:i.width,height:e})}else if(1==t){var o,u=r.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=r.target,c=R(f),l=F.test(C(c,f).writingMode),h=f,v=h.offsetHeight,m=h.offsetWidth;l?(s=m,a=v):(a=m,s=v),o={inlineSize:a,blockSize:s}}P(n,o)}}var $=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,n,r){var i=t.ownerDocument.defaultView;if(i){var e=L.get(t);if(e||(e=[],L.set(t,e),_(i).observe(t)),!e.some((function(t){return t.callback===r&&1===t.type}))){e.push({type:1,callback:r});var o=D.get(t);o&&setTimeout((function(){return H(1,r,o)}))}}}(this.Gn,0,this.Jn)):function(t,n){!function(t,n,r){var i=L.get(t);if(i&&(m(i,(function(t){return t.callback===r&&1===t.type})),0==i.length)){L.delete(t),D.delete(t);var e=t.ownerDocument.defaultView;e&&_(e).unobserve(t)}}(t,0,n)}(this.Gn,this.Jn))},n.Jn=function(t){var n=t.blockSize,r=t.inlineSize>0&&n>0;if(r!==this.Un){this.Un=r;var i=this.Gn;r||i.pause()}},t}(),q=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function J(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}var U=self.AMP_CONFIG||{},X=("string"==typeof U.thirdPartyFrameRegex?new RegExp(U.thirdPartyFrameRegex):U.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,Y=("string"==typeof U.cdnProxyRegex?new RegExp(U.cdnProxyRegex):U.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function W(t){if(!self.document||!self.document.head)return null;if(self.location&&Y.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}var V={thirdParty:U.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:U.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:X,cdn:U.cdnUrl||W("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:Y,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:U.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:U.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:U.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:U.geoApiUrl||W("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z=self.__AMP_LOG;function K(t,n){throw new Error("failed to call initLogConstructor")}function Q(t){return Z.user||(Z.user=tt()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(Z.user.win,t)?Z.userForEmbed||(Z.userForEmbed=tt()):Z.user}function tt(t){return K()}function nt(){return Z.dev||(Z.dev=K())}function rt(t,n,r,i,e,o,u,a,s,f,c){return t}function it(t,n,r,i,e,o,u,a,s,f,c){return Q().assert(t,n,r,i,e,o,u,a,s,f,c)}function et(t,n){return ft(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function ot(t,n){var r=st(at(t));return ht(r,n)?ft(r,n):null}function ut(t,n){return ct(st(t),n)}function at(t){return t.nodeType?(n=R(t),et(n,"ampdoc")).getAmpDoc(t):t;var n}function st(t){var n=at(t);return n.isSingleDoc()?n.win:n}function ft(t,n){rt(ht(t,n));var r=lt(t)[n];return r.obj||(rt(r.ctor),rt(r.context),r.obj=new r.ctor(r.context),rt(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function ct(t,n){var r=lt(t)[n];return r?r.promise?r.promise:(ft(t,n),r.promise=Promise.resolve(r.obj)):null}function lt(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function ht(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}var vt="__AMP__EXPERIMENT_TOGGLES",mt=function(t){return ft(t,"timer")},dt=function(t){return function(t,n,r,i){var e=ut(t,n);if(e)return e;var o=at(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(r);return t?et(o.win,"extensions").waitForExtension(r,t):null})).then((function(r){return r?function(t,n){return function(t,n){var r=ct(t,n);if(r)return r;var i,e,o,u,a=lt(t);return a[n]=(e=(i=new s).promise,o=i.reject,u=i.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:u,reject:o,context:null,ctor:null}),a[n].promise}(st(t),n)}(t,n):null}))}(t,"consentPolicyManager","amp-consent")},pt=function(t){return ot(t,"url")};function bt(t){return t.data}var gt,yt,wt=function(){function t(t){this.Wt=t,this.Kt=0,this.Qt=0,this.Xt=y()}var n=t.prototype;return n.has=function(t){return!!this.Xt[t]},n.get=function(t){var n=this.Xt[t];if(n)return n.access=++this.Qt,n.payload},n.put=function(t,n){this.has(t)||this.Kt++,this.Xt[t]={payload:n,access:this.Qt},this.Yt()},n.Yt=function(){if(!(this.Kt<=this.Wt)){var t,n=this.Xt,r=this.Qt+1;for(var i in n){var e=n[i].access;e<r&&(r=e,t=i)}void 0!==t&&(delete n[t],this.Kt--)}},t}();new Set(["c","v","a","ad"]);var jt="unlisten";function Ot(t,n,r){var i=function(t,n){var r=t.listeningFors;return!r&&n&&(r=t.listeningFors=Object.create(null)),r||null}(t,r);if(!i)return i;var e=i[n];return!e&&r&&(e=i[n]=[]),e||null}function xt(t,n){for(var r=n;r&&r!=r.parent;r=r.parent)if(r==t)return!0;return!1}function St(t){for(var n={"sentinel":jt},r=t.length-1;r>=0;r--){var i=t[r];if(!i.frame.contentWindow){t.splice(r,1);var e=i.events;for(var o in e)e[o].splice(0,1/0).forEach((function(t){t(n)}))}}}function Pt(t,n,r,i,e,o){rt(t.src),rt(!t.parentNode),rt(r);var u=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(bt(n)){var r=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?I(t,(function(t){nt().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",t)}))||null:M(t)?function(t){if(!M(t))return null;var n=t.indexOf("{");return w(-1!=n),I(t.substr(n),(function(n){S(new Error("MESSAGING: Failed to parse message: ".concat(t,"\n").concat(n.message)))}))}(t):null),t}(bt(n));if(r&&r.sentinel){var i=function(t,n,r,i){var e,o=Ot(t,n);if(!o)return o;for(var u=0;u<o.length;u++){var a=o[u],s=a.frame.contentWindow;if(s){if(i==s||xt(s,i)){e=a;break}}else setTimeout(St,0,o)}return e?e.events:null}(t,r.sentinel,n.origin,n.source);if(i){var e=i[r.type];if(e){e=e.slice();for(var o=0;o<e.length;o++)(0,e[o])(r,n.source,n.origin,n)}}}}}))}(u);var a,s,f=function(t,n,r){for(var i,e=Ot(t,Et(n,r),!0),o=0;o<e.length;o++){var u=e[o];if(u.frame===n){i=u;break}}return i||(i={frame:n,events:Object.create(null)},e.push(i)),i.events}(u,t,i),c=(s=t.src,gt||(gt=self.document.createElement("a"),yt=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new wt(100))),function(t,n,r){if(r&&r.has(n))return r.get(n);t.href=n,t.protocol||(t.href=t.href);var i,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),i=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=i;var o=e;return r&&r.put(n,o),o}(gt,s,yt)).origin,l=f[n]||(f[n]=[]),h=function(n,i,u,s){if("amp"==n.sentinel){if(i!=t.contentWindow)return;if(c!=u&&("null"!=u||!o))return}(e||i==t.contentWindow)&&(n.sentinel!=jt?r(n,i,u,s):a())};return l.push(h),a=function(){if(h){var t=l.indexOf(h);t>-1&&l.splice(t,1),h=null,l=null,r=null}}}function Et(t,n){return n?t.getAttribute("data-amp-3p-sentinel"):"amp"}var It=function(){function t(t,n,r,i){var e=this;this.fb=t,this.Ob=r,this.xb=[],this.Pb=Pt(this.fb,n,(function(t,n,r){e.xb.some((function(t){return t.win==n}))||e.xb.push({win:n,origin:r}),i(t,n,r)}),this.Ob,this.Ob)}var n=t.prototype;return n.send=function(t,n){m(this.xb,(function(t){return!t.win.parent})),function(t,n,r,i,e){if(t.contentWindow){i.type=r,i.sentinel=Et(t,e);var o=i;e&&(o="amp-"+JSON.stringify(i));for(var u=0;u<n.length;u++){var a=n[u];a.win.postMessage(o,a.origin)}}}(this.fb,this.xb,t,n,this.Ob)},n.destroy=function(){this.Pb(),this.xb.length=0},t}(),Mt=[[300,250],[320,50],[300,50],[320,100]],Rt=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],At=(Date.now(),function(){function t(t,n){var r=this;this.Eb=t,this.Ib=null,this.Rb=new It(n,"send-intersections",!1,(function(){r.Ab()})),this.Ib=new IntersectionObserver((function(t){r.Rb.send("intersection",{"changes":t.map(zt)})}),{threshold:Rt})}var n=t.prototype;return n.Ab=function(){this.Ib.observe(this.Eb.element)},n.destroy=function(){this.Ib.disconnect(),this.Ib=null,this.Rb.destroy(),this.Rb=null},t}());function zt(t){return{"time":t.time,"rootBounds":t.rootBounds,"boundingClientRect":t.boundingClientRect,"intersectionRect":t.intersectionRect,"intersectionRatio":t.intersectionRatio}}var Tt={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};function kt(t,n){var r=C(n,t).position;return"fixed"==r||"sticky"==r}var Nt="amp-iframe",Ct=["allowfullscreen","allowpaymentrequest","allowtransparency","allow","frameborder","referrerpolicy","scrolling","tabindex","title"],Ft=0,Gt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(s,t);var r,e,u=(r=s,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=c(r);if(e){var i=c(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return h(this,t)});function s(t){var n;return(n=u.call(this,t)).zb=null,n.Tb=!1,n.kb=!1,n.Nb=!1,n.Cb=!1,n.fb=null,n.Fb=!1,n.Gb=null,n.Lb="",n.Db=null,n.iframeSrc=null,n.ft=null,n._b=null,n.Bb=!1,n.yt=new $(n.element),n}var l=s.prototype;return l.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},l.Cs=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=this.element,e=pt(i),o=e.parse(t),u=o.hostname,a=o.origin,s=o.protocol;it(e.isSecure(t)||"data:"==s,"Invalid <amp-iframe> src. Must start with https://. Found %s",i);var f=e.parse(n);return it(!this.Hb(r,"allow-same-origin")||a!=f.origin&&"data:"!=s,"Origin of <amp-iframe> must not be equal to container %s if allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",i),it(!(d(u,".".concat(V.thirdPartyFrameHost))||d(u,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",t),t},l.$b=function(){var t=this.element.getLayoutBox(),n=Math.min(600,.75*this.getViewport().getSize().height);it(t.top>=n,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/main/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",this.element,t.top,n)},l.Hb=function(t,n){return new RegExp("\\s".concat(n,"\\s"),"i").test(" "+t+" ")},l.qb=function(t){if(t){var n,r,i=pt(this.element).parse(t),e=i.hash;return"data:"==i.protocol||e&&"#"!=e?t:(-1==(r=(n=t).indexOf("#"))?n:n.substring(0,r))+"#amp=1"}},l.Jb=function(t,n){if(t)return it(!(" "+n+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element),"data:text/html;charset=utf-8;base64,"+(i=t,r="undefined"!=typeof TextEncoder?(new TextEncoder).encode(i):function(t){for(var n=new Uint8Array(t.length),r=0;r<t.length;r++){var i=t.charCodeAt(r);w(i<=255),n[r]=i}return n}(unescape(encodeURIComponent(i))),btoa(function(t){for(var n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(r)));var r,i},l.preconnectCallback=function(t){var n;this.iframeSrc&&(n=this.win,et(n,"preconnect")).url(this.getAmpDoc(),this.iframeSrc,t)},l.buildCallback=function(){this.Lb=this.element.getAttribute("sandbox");var t=this.qb(this.element.getAttribute("src"))||this.Jb(this.element.getAttribute("srcdoc"),this.Lb);this.iframeSrc=this.Cs(t,window.location.href,this.Lb),this.zb=this.getPlaceholder(),this.Tb=!!this.zb,this.Fb=this.element.hasAttribute("resizable"),this.Fb&&this.element.setAttribute("scrolling","no"),this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0"),this.ft=function(t){if("no"!=t.getAttribute("scrolling")){var n=t.ownerDocument.createElement("i-amphtml-scroll-container");return t.appendChild(n),n}return t}(this.element),this.Ub()},l.onLayoutMeasure=function(){var t=this.element;this.kb=function(t){for(var n=t.getLayoutSize(),r=n.height,i=n.width,e=0;e<Mt.length;e++){var o=Mt[e][0],u=Mt[e][1];if(!(u>r)&&!(o>i)&&r-u<=20&&i-o<=20)return!0}return!1}(t),this.Nb=this.Xb(),this.Cb=this.kb&&!function(t,n){var r=!1,i=0,e=t;do{Tt[e.tagName]?(i++,r=!1):kt(e,n)&&(r=!0),e=e.parentElement}while(e&&"BODY"!=e.tagName);return!r&&i<=1}(t,this.win)},l.Xb=function(){return r=(n=(t=this.element).getLayoutSize()).height,!(n.width>10||r>10||function(t,n){return t.closest?t.closest(".i-amphtml-overlay"):function(t,n,r){var i;for(i=t;i&&void 0!==i;i=i.parentElement)if(n(i))return i;return null}(t,(function(t){return function(t,n){var r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!r&&r.call(t,".i-amphtml-overlay")}(t)}))}(t));var t,n,r},l.layoutCallback=function(){var t=this;if(it(!this.Cb,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead."),this.Tb||this.$b(),this.Fb&&it(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element),!this.iframeSrc)return a();if(this.Nb&&!this.getAmpDoc().registerSingleton(1))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new/choose"),a();var n=this.element.ownerDocument.createElement("iframe");this.fb=n,n.classList.add("i-amphtml-fill-content"),n.name="amp_iframe"+Ft++,this.Tb&&N(n,"zIndex",-1),z(Ct,this.element,n);var r=n.getAttribute("allow")||"";return r=r.replace("autoplay","autoplay-disabled"),n.setAttribute("allow",r),function(t,n,r){var i=r||"";n.setAttribute("sandbox",i)}(this.element,n,this.Lb),n.src=this.iframeSrc,this.Nb||(this.Gb=new At(this,n)),n.onload=function(){n.readyState="complete",t.Yb(),t.Nb&&(t.iframeSrc=null,mt(t.win).promise(5e3).then((function(){A(n),t.element.setAttribute("amp-removed",""),t.fb=null})))},Pt(n,"embed-size",(function(n){t.Wb(n.height,n.width)}),void 0,void 0,!0),this.Db=function(n,r,i,e){var o=n,u=function(n){return t.Vb(n)},a=function(t){try{return u(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}},s=function(){if(void 0!==p)return p;p=!1;try{var t={get capture(){return p=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return p}();return o.addEventListener(r,a,!!s&&e),function(){null==o||o.removeEventListener(r,a,!!s&&e),u=null,o=null,a=null}}(this.win,"message",0,void 0),this.Tb&&Pt(n,"embed-ready",this.Yb.bind(this)),Pt(n,"send-consent-data",(function(n,r,i){t.Zb(r,i)})),this.ft.appendChild(n),this.loadPromise(n).then((function(){t.ft!=t.element&&mt(t.win).delay((function(){t.mutateElement((function(){t.ft.classList.add("amp-active")}))}),1e3),t.yt.updatePlaying(!0)}))},l.Vb=function(t){if(this.fb&&t.source===this.fb.contentWindow){var n=bt(t);if("string"==typeof n&&n.startsWith("pym")){var r=n.split(/xPYMx/);"height"===r[2]?this.Wb(parseInt(r[3],10),void 0):"width"===r[2]?this.Wb(void 0,parseInt(r[3],10)):Q().warn(Nt,"Unsupported Pym.js message: ".concat(n))}}},l.Zb=function(t,r){var e,o,u=this;(e=this.element,o=this.getConsentPolicy(),dt(e).then((function(t){var r={"consentMetadata":t&&t.getConsentMetadataInfo,"consentString":t&&t.getConsentStringInfo,"consentPolicyState":t&&t.whenPolicyResolved,"consentPolicySharedData":t&&t.getMergedSharedData};return t?Promise.all(Object.keys(r).map((function(i){return r[i].call(t,o||"default").then((function(t){return n({},i,t)}))}))).then((function(t){return Object.assign.apply({},t)})):r}))).then((function(n){u.Kb(t,r,i({"sentinel":"amp","type":"consent-data"},n))}))},l.Kb=function(t,n,r){t.postMessage(r,n)},l.unlayoutCallback=function(){return this.Db&&(this.Db(),this.Db=null),this.fb&&(A(this.fb),this.zb&&this.togglePlaceholder(!0),this.fb=null,this.Gb&&(this.Gb.destroy(),this.Gb=null)),this.yt.updatePlaying(!1),!0},l.getLayoutPriority=function(){return this.kb?2:this.Nb?1:t.prototype.getLayoutPriority.call(this)},l.mutatedAttributesCallback=function(t){var n=t.src;void 0!==n&&(this.iframeSrc=this.qb(n),this.fb&&(this.fb.src=this.Cs(this.iframeSrc,window.location.href,this.Lb))),this.fb&&t.title&&z(["title"],this.element,this.fb)},l.unlayoutOnPause=function(){return!0},l.Yb=function(){var t=this;this.zb&&this.getVsync().mutate((function(){t.fb&&(N(t.fb,"zIndex",0),t.togglePlaceholder(!1))}))},l.firstLayoutCompleted=function(){},l.throwIfCannotNavigate=function(){if(!this.Hb(this.Lb,"allow-top-navigation"))throw Q().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".')},l.Wb=function(t,n){var r,i,e=this;this.Fb?t<100?this.user().error(Nt,"Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",this.element):(t=parseInt(t,10),isNaN(t)||(r=Math.max(t+(this.element.offsetHeight-this.fb.offsetHeight),t)),n=parseInt(n,10),isNaN(n)||(i=Math.max(n+(this.element.offsetWidth-this.fb.offsetWidth),n)),void 0!==r||void 0!==i?this.attemptChangeSize(r,i).then((function(){void 0!==r&&e.element.setAttribute("height",r),void 0!==i&&e.element.setAttribute("width",i),e.element.overflowCallback(!1,r,i)}),(function(){})):this.user().error(Nt,"Ignoring embed-size request because no width or height value is provided",this.element)):this.Bb||(this.user().error(Nt,"Ignoring embed-size request because this iframe is not resizable",this.element),this.Bb=!0)},l.Ub=function(){var t,n=this;if("iframe-messaging",t=function(t){var n,r,e,u,a;if(t[vt])return t[vt];t[vt]=y();var s=t[vt];w(s);var f=i(i({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(r=t.AMP_EXP)&&void 0!==r?r:E((null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var c in f){var l=f[c];"number"==typeof l&&l>=0&&l<=1&&(s[c]=Math.random()<l)}var h=null===(u=t.AMP_CONFIG)||void 0===u?void 0:u["allow-doc-opt-in"];if(v(h)&&h.length){var m=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(m)for(var d,p,b=o((null===(d=m.getAttribute("content"))||void 0===d?void 0:d.split(","))||[],!0);!(p=b()).done;){var g=p.value;h.includes(g)&&(s[g]=!0)}}Object.assign(s,function(t){var n,r="";try{var i;"localStorage"in t&&(r=null!==(i=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==i?i:"")}catch(t){nt().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var e,u=(null===(n=r)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],a=y(),s=o(u,!0);!(e=s()).done;){var f=e.value;f&&("-"==f[0]?a[f.substr(1)]=!1:a[f]=!0)}return a}(t));var j=null===(a=t.AMP_CONFIG)||void 0===a?void 0:a["allow-url-opt-in"];if(v(j)&&j.length)for(var O,x=function(t){var n,r=y();if(!t)return r;for(;n=q.exec(t);){var i=J(n[1],n[1]),e=n[2]?J(n[2].replace(/\+/g," "),n[2]):"";r[i]=e}return r}(t.location.originalHash||t.location.hash),S=o(j,!0);!(O=S()).done;){var P=O.value,I=x["e-".concat(P)];"1"==I&&(s[P]=!0),"0"==I&&(s[P]=!1)}return s}(this.win),t["iframe-messaging"]){var r=this.element,e=r.getAttribute("src");if(e&&(this._b=pt(r).parse(e).origin),this.registerAction("postMessage",(function(t){n._b?n.fb.contentWindow.postMessage(t.args,n._b):Q().error(Nt,'"postMessage" action is only allowed with "src"attribute with an origin.')})),this._b){var u=0;this.win.addEventListener("message",(function t(r){if(r.source===n.fb.contentWindow)if(r.origin===n._b){if(!n.Qb())return u++,Q().error(Nt,'"message" event may only be triggered from a user gesture.'),void(u>=10&&(Q().error(Nt,'Too many non-gesture-triggered "message" events; detaching event listener.'),n.win.removeEventListener("message",t)));var i,e=bt(r);try{i=E(JSON.stringify(e))}catch(t){return void Q().error(Nt,'Data from "message" event must be JSON.')}var o=function(t,n,r,i){var e={detail:r};if(Object.assign(e,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,r),o}(n.win,"amp-iframe:message",{"data":i});(function(t){return ot(t,"action")})(n.element).trigger(n.element,"message",o,3)}else Q().error(Nt,'"message" received from unexpected origin: '+r.origin+". Only allowed from: "+n._b)}))}}},l.Qb=function(){if(this.getAmpDoc().getRootNode().activeElement!==this.fb)return!1;var t,n,r=this.win.document.createElement("audio");return t=r,(n=function(){return t.play()},new Promise((function(t){t(n())}))).catch((function(){})),!r.paused},l.setTargetOriginForTesting=function(t){this._b=t},s}(t.BaseElement);t.registerElement(Nt,Gt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-iframe-0.1.js.map
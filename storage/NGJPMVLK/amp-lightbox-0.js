;
(self.AMP=self.AMP||[]).push({m:0,v:"2202230359001",n:"amp-lightbox",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function n(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=function(){var t=this;this.promise=new Promise((function(i,n){t.resolve=i,t.reject=n}))};function o(t,i){return(o=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function h(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&o(t,i)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,i){if(i&&("object"===u(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=e(t);if(i){var s=e(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return a(this,n)}}var c=Array.isArray,l=Object.prototype,v=l.hasOwnProperty;function d(t){var i=Object.create(null);return t&&Object.assign(i,t),i}function p(t,i,n,r,s,o,h,e,u,a,f){return t}function m(t){return(t.ownerDocument||t).defaultView}function b(t){try{t.focus()}catch(t){}}function y(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var o in t)s[o]=t[o];return s.stack=r,s}function g(t){for(var i,r=null,s="",o=n(arguments,!0);!(i=o()).done;){var h=i.value;h instanceof Error&&!r?r=y(h):(s&&(s+=" "),s+=h)}return r?s&&(r.message=s+": "+r.message):r=new Error(s),r}function w(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function x(t){var i=g.apply(null,arguments);setTimeout((function(){throw w(i),i}))}function S(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){x(t)}}l.toString;var k,j,O="i-amphtml-element",A=function(t){return t.unmount()};function E(t,i,n,r){for(var s,o=c(s=t)?s:[s],h=0;h<o.length;h++)M(o[h],i,n,r)}function M(t,i,n,r){if(i&&t.classList.contains(O)){var s=t;if(S(r,s),!n){var o=s.getPlaceholder();return void(o&&M(o,!0,!1,r))}}for(var h=t.getElementsByClassName(O),e=null,u=0;u<h.length;u++){var a=h[u];if(n)S(r,a);else{e=e||[];for(var f=!1,c=0;c<e.length;c++)if(e[c].contains(a)){f=!0;break}f||(e.push(a),S(r,a))}}}function D(t){return function(t,i){p(1===i.length),t.innerHTML=i[0];var n=t.firstElementChild;return p(n),p(!n.nextElementSibling),t.removeChild(n),n}(k,t)}var R=["Webkit","webkit","Moz","moz","ms","O","o"],z={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function C(t){var i=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return R.some((function(t){return i.startsWith(t+"-")}))?"-".concat(i):i}function I(t,i,n){if(i.startsWith("--"))return i;j||(j=d());var r=j[i];if(!r||n){if(r=i,void 0===t[i]){var s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<R.length;n++){var r=R[n]+i;if(void 0!==t[r])return r}return""}(t,s);void 0!==t[o]&&(r=o)}n||(j[i]=r)}return r}function P(t,i){var n=t.style;for(var r in i)n.setProperty(C(I(n,r)),String(i[r]),"important")}function T(t,i,n,r,s){var o=I(t.style,i,s);if(o){var h=r?n+r:n;t.style.setProperty(C(o),h)}}function Y(t,i){for(var n in i)T(t,n,i[n])}function _(t){return"".concat(t,"px")}function X(t){return"display"in t&&function(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];var s=g.apply(null,n);s.name=t||s.name,w(s)}("STYLE","`display` style detected. You must use toggle instead."),t}var L=self.AMP_CONFIG||{},B=("string"==typeof L.thirdPartyFrameRegex?new RegExp(L.thirdPartyFrameRegex):L.thirdPartyFrameRegex,("string"==typeof L.cdnProxyRegex?new RegExp(L.cdnProxyRegex):L.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function H(t){if(!self.document||!self.document.head)return null;if(self.location&&B.test(self.location.origin))return null;var i=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return i&&i.getAttribute("content")||null}L.thirdPartyUrl,L.thirdPartyFrameHost,L.cdnUrl||H("runtime-host"),L.errorReportingUrl,L.betaErrorReportingUrl,L.localDev,L.geoApiUrl||H("amp-geo-api");var U=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function W(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return i}}function G(t){var i=(t||self).location;return function(t){var i,n=d();if(!t)return n;for(;i=U.exec(t);){var r=W(i[1],i[1]),s=i[2]?W(i[2].replace(/\+/g," "),i[2]):"";n[r]=s}return n}(i.originalHash||i.hash)}var V="";function Z(t){var i=t||self;return i.__AMP_MODE?i.__AMP_MODE:i.__AMP_MODE=function(t){return{localDev:!1,development:F(t,G(t)),esm:!1,test:!1,rtvVersion:$(t)}}(i)}function $(t){var i;return V||(V=(null===(i=t.AMP_CONFIG)||void 0===i?void 0:i.v)||"01".concat("2202230359001")),V}function F(t,i){var n=i||G(t);return["1","actions","amp","amp4ads","amp4email"].includes(n.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var N=self.__AMP_LOG;function q(t,i){throw new Error("failed to call initLogConstructor")}function J(t){return N.user||(N.user=K()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(N.user.win,t)?N.userForEmbed||(N.userForEmbed=K()):N.user}function K(t){return q()}function Q(){return N.dev||(N.dev=q())}function tt(t,i,n,r,s,o,h,e,u,a,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(st(rt(t)),i)}function rt(t){return t.nodeType?(i=m(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function st(t){var i=rt(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(ht(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function ht(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var et,ut=function(t){return nt(t,"owners")},at=function(t){return ot(t,"timer")},ft=function(){function t(t,i){var n=this,r=t.win;if(this.t=r,this.Ds=i,this.tD=null,this.wu=null,this.iD=-1,this.nD=null,"function"==typeof r.CloseWatcher)try{this.tD=new r.CloseWatcher}catch(t){Q().error("CloseWatcherImpl","CloseWatcher failed:",t)}this.tD?this.tD.onclose=function(){i(),n.destroy()}:(this.wu=nt(t,"history"),this.wu.push((function(){return i()})).then((function(t){n.iD=t})),this.nD=this.rD.bind(this),r.document.documentElement.addEventListener("keydown",this.nD))}var i=t.prototype;return i.signalClosed=function(){this.tD?this.tD.signalClosed():this.Ds&&((0,this.Ds)(),this.destroy())},i.destroy=function(){this.Ds=null,this.tD?(this.tD.destroy(),this.tD=null):-1!=this.iD&&(tt(this.wu).pop(this.iD),this.iD=-1,this.wu=null,this.t.document.documentElement.removeEventListener("keydown",this.nD))},i.rD=function(t){"Escape"==t.key&&(t.preventDefault(),this.signalClosed())},t}(),ct=function(){function t(){this.Ft=null}var i=t.prototype;return i.add=function(t){var i=this;return this.Ft||(this.Ft=[]),this.Ft.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.Ft&&(n=t,-1!=(r=(i=this.Ft).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.Ft&&(this.Ft.length=0)},i.fire=function(t){if(this.Ft)for(var i,r=n(this.Ft,!0);!(i=r()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.Ft)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),lt=function(){function t(t,i,n){var r=this;this.js=at(t),this.Ds=i,this.zs=n||0,this.Ls=-1,this.Us=0,this.Hn=!1,this.Hs=function(){r.Gs()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Ls},i.schedule=function(t){var i=t||this.zs;this.Hn&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.Us<-10)&&(this.cancel(),this.Us=n,this.Ls=this.js.delay(this.Hs,i),!0)},i.Gs=function(){this.Ls=-1,this.Us=0,this.Hn=!0,this.Ds(),this.Hn=!1},i.cancel=function(){this.isPending()&&(this.js.cancel(this.Ls),this.Ls=-1)},t}(),vt="__AMP_Gestures",dt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},pt=function(){function t(t,i,n){this.Gn=t,this.tM=[],this.tb=[],this.Ai=[],this.iM=[],this.nM=null,this.rM=i,this.sM=n,this.eM=!1,this.Gs=new lt(m(t),this.el.bind(this)),this.hM=new ct,this.oM=Object.create(null),this.aM=this.Km.bind(this),this.uM=this.zv.bind(this),this.fM=this.Qm.bind(this),this.lM=this.ub.bind(this);var r=function(t){if(void 0!==et)return et;et=!1;try{var i={get passive(){return et=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return et}(t.ownerDocument.defaultView);this.Gn.addEventListener("touchstart",this.aM,!!r&&{passive:!0}),this.Gn.addEventListener("touchend",this.uM),this.Gn.addEventListener("touchmove",this.fM,!!r&&{passive:!0}),this.Gn.addEventListener("touchcancel",this.lM),this.cM=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[vt];return s||(s=new t(i,n,r),i[vt]=s),s};var i=t.prototype;return i.cleanup=function(){this.Gn.removeEventListener("touchstart",this.aM),this.Gn.removeEventListener("touchend",this.uM),this.Gn.removeEventListener("touchmove",this.fM),this.Gn.removeEventListener("touchcancel",this.lM),delete this.Gn[vt],this.Gs.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.oM[r];return s||(this.tM.push(n),s=new ct,this.oM[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.oM[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.tM);return!(r<0||(this.tM.splice(r,1),this.Ai.splice(r,1),this.iM.splice(r,1),this.tb.splice(r,1),delete this.oM[i],0))}return!1},i.onPointerDown=function(t){return this.hM.add(t)},i.Km=function(t){var i=Date.now();this.eM=!1,this.hM.fire(t);for(var n=0;n<this.tM.length;n++)this.Ai[n]||(this.iM[n]&&this.iM[n]<i&&this.ob(n),this.tM[n].onTouchStart(t)&&this.hb(n));this.mM(t)},i.Qm=function(t){for(var i=Date.now(),n=0;n<this.tM.length;n++)this.tb[n]&&(this.iM[n]&&this.iM[n]<i?this.ob(n):this.tM[n].onTouchMove(t)||this.ob(n));this.mM(t)},i.zv=function(t){for(var i=Date.now(),n=0;n<this.tM.length;n++)if(this.tb[n])if(this.iM[n]&&this.iM[n]<i)this.ob(n);else{this.tM[n].onTouchEnd(t);var r=!this.iM[n],s=this.iM[n]<i;this.nM==this.tM[n]||!r&&!s||this.ob(n)}this.mM(t)},i.ub=function(t){for(var i=0;i<this.tM.length;i++)this.pM(i);this.mM(t)},i.Vm=function(t,i){if(this.nM)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.tM.length;r++)this.tM[r]==t&&(this.Ai[r]=n+i,this.iM[r]=0);this.cM=!0}},i.vM=function(t,i){if(this.nM)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.tM.length;r++)this.tM[r]==t&&(this.iM[r]=n+i)},i.dM=function(t){this.nM==t&&(this.nM=null,this.eM=!0)},i.gM=function(t,i,n){tt(this.nM==t);var r=this.oM[t.getType()];r&&r.fire(new dt(t.getType(),i,Date.now(),n))},i.mM=function(t){var i=!!this.nM||this.eM;if(this.eM=!1,!i)for(var n=Date.now(),r=0;r<this.tM.length;r++)if(this.Ai[r]||this.iM[r]&&this.iM[r]>=n){i=!0;break}i?(t.stopPropagation(),this.rM||t.preventDefault()):this.sM&&t.stopPropagation(),this.cM&&(this.cM=!1,this.el())},i.el=function(){for(var t=Date.now(),i=-1,n=0;n<this.tM.length;n++)this.Ai[n]?(-1==i||this.Ai[n]>this.Ai[i])&&(i=n):this.iM[n]&&this.iM[n]<t&&this.ob(n);if(-1!=i){for(var r=0,s=0;s<this.tM.length;s++)!this.Ai[s]&&this.tb[s]&&(r=Math.max(r,this.iM[s]-t));r<2?this.bM(i):this.Gs.schedule(r)}},i.bM=function(t){for(var i=this.tM[t],n=0;n<this.tM.length;n++)n!=t&&this.pM(n);this.Ai[t]=0,this.iM[t]=0,this.nM=i,i.acceptStart()},i.hb=function(t){this.tb[t]=!0,this.iM[t]=0},i.ob=function(t){this.tb[t]=!1,this.iM[t]=0,this.Ai[t]||this.tM[t].acceptCancel()},i.pM=function(t){this.Ai[t]=0,this.ob(t)},t}(),mt=function(){function t(t,i){this.wM=t,this.Pw=i}var i=t.prototype;return i.getType=function(){return this.wM},i.signalReady=function(t){this.Pw.Vm(this,t)},i.signalPending=function(t){this.Pw.vM(this,t)},i.signalEnd=function(){this.Pw.dM(this)},i.signalEmit=function(t,i){this.Pw.gM(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function bt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var yt=function(t){h(n,t);var i=f(n);function n(t){return i.call(this,"swipe-xy",t,!0,!0)}return n}(function(t){h(n,t);var i=f(n);function n(t,n,r,s){var o;return(o=i.call(this,t,n)).yM=r,o.xM=s,o.nM=!1,o.MM=0,o.kM=0,o.jM=0,o.AM=0,o.DM=0,o.SM=0,o.oc=0,o.EM=0,o.zM=0,o.IM=0,o.OM=0,o}var r=n.prototype;return r.onTouchStart=function(t){var i=t.touches;return!!(this.nM&&i&&i.length>1)||!(!i||1!=i.length)&&(this.oc=Date.now(),this.MM=i[0].clientX,this.kM=i[0].clientY,!0)},r.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.jM=r,this.AM=s,this.nM)this.PM(!1,!1,t);else{var o=Math.abs(r-this.MM),h=Math.abs(s-this.kM);if(this.yM&&this.xM)(o>=8||h>=8)&&this.signalReady(-10);else if(this.yM){if(o>=8&&o>h)this.signalReady(-10);else if(h>=8)return!1}else{if(!this.xM)return!1;if(h>=8&&h>o)this.signalReady(-10);else if(o>=8)return!1}}return!0}return!1},r.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.RM(t)},r.acceptStart=function(){this.nM=!0,this.DM=this.MM,this.SM=this.kM,this.zM=this.oc,this.MM=this.jM,this.kM=this.AM,this.PM(!0,!1,null)},r.acceptCancel=function(){this.nM=!1},r.PM=function(t,i,n){this.EM=Date.now();var r=this.EM-this.zM;if(!i&&r>4||i&&r>16){var s=bt(this.jM-this.DM,r,this.IM),o=bt(this.AM-this.SM,r,this.OM);(!i||r>32||0!=s||0!=o)&&(this.IM=Math.abs(s)>1e-4?s:0,this.OM=Math.abs(o)>1e-4?o:0),this.DM=this.jM,this.SM=this.AM,this.zM=this.EM}this.signalEmit({first:t,last:i,time:this.EM,deltaX:this.jM-this.MM,deltaY:this.AM-this.kM,startX:this.MM,startY:this.kM,lastX:this.jM,lastY:this.AM,velocityX:this.IM,velocityY:this.OM},n)},r.RM=function(t){this.nM&&(this.nM=!1,this.PM(!1,!0,t),this.signalEnd())},n}(mt));function gt(t){return t.classList.contains("i-amphtml-fie")||!!function(t,i){return t.closest?t.closest(".i-amphtml-fie"):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,".i-amphtml-fie")}(t)}))}(t)}new Set(["c","v","a","ad"]);var wt=['<i-amphtml-ad-close-header role=button tabindex=0 aria-label="Close Ad"><div>Ad</div><i-amphtml-ad-close-button class=amp-ad-close-button></i-amphtml-ad-close-button></i-amphtml-ad-close-header>'],xt="amp-lightbox",St={"fade-in":{openStyle:{"opacity":1},closedStyle:{"opacity":0},durationSeconds:.1},"fly-in-bottom":{openStyle:{"transform":"translate(0, 0)"},closedStyle:{"transform":"translate(0, 100%)"},durationSeconds:.2},"fly-in-top":{openStyle:{"transform":"translate(0, 0)"},closedStyle:{"transform":"translate(0, -100%)"},durationSeconds:.2}};function kt(t){return(n=(i=t).ownerDocument||i,k&&k.ownerDocument===n||(k=n.createElement("div")),D)(wt);var i,n}var jt=function(t){h(n,t);var i=f(n);function n(t){var n;(n=i.call(this,t)).Kt=null,n.ft=null,n.ql=n.win.document,n.Ks=null,n.sD=null,n.oD=!1,n.hD=null,n.eD=null,n.uD=null,n.aD=null,n.fD=!1,n.cD=0,n.lD=0,n.vD=null,n.dD=(t.getAttribute("animate-in")||"fade-in").toLowerCase(),n.pD=null,n.mD=null,n.bD=null;var r=it(n.win,"platform");return n.yD=r.isIos(),n.gD=function(t,i,n){var r=0,s=0,o=null;function h(){r=0;var n,e=500-(t.Date.now()-s);e>0?r=t.setTimeout(h,e):(n=o,o=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),e=0;e<i;e++)n[e]=arguments[e];o=n,r||(r=t.setTimeout(h,500))}}(n.win,(function(){var t=J().assertElement(n.ft,"E#19457 this.container_"),i=ut(n.element);i.scheduleLayout(n.element,t),i.scheduleResume(n.element,t)})),n}var o=n.prototype;return o.buildCallback=function(){var t,i,n,r,s,o=this;this.user().assert((t=St,i=this.dD,v.call(t,i)),"Invalid `animate-in` value %s",this.dD),this.element.classList.add("i-amphtml-overlay"),this.Ks=(n=this.element,r="action",ht(s=st(rt(n)),r)?ot(s,r):null),this.wD(),this.registerDefaultAction((function(t){return o.mL(t.trust,t.caller)}),"open"),this.registerAction("close",(function(t){return o.close(t.trust)})),this.Ks.addToAllowlist("AMP-LIGHTBOX",["open","close"],["email"])},o.xD=function(){var t=this;tt(this.fD),this.SD().forEach((function(i){ut(t.element).setOwner(i,t.element)}))},o.SD=function(){return(t=this.element.getElementsByClassName("i-amphtml-element"))?Array.prototype.slice.call(t):[];var t},o.Is=function(){var t=this;if(!this.ft){var i=this.element;this.fD=i.hasAttribute("scrollable");var n=function(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,h=void 0,e=void 0,"string"==typeof(o=s=r)?h=o:1==(null==(e=o)?void 0:e.nodeType)&&(h=o.tagName),!(h&&h.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,o,h,e;return n}(t)}(this.element);this.ft=i.ownerDocument.createElement("div"),this.fD||function(t,i){t.classList.add("i-amphtml-fill-content")}(this.ft),i.appendChild(this.ft),n.forEach((function(i){t.ft.appendChild(i)})),this.fD&&(this.xD(),i.classList.add("i-amphtml-scrollable"),i.addEventListener("amp:dom-update",(function(){t.xD(),t.kD(t.cD)})),i.addEventListener("scroll",this.om.bind(this))),this.fD||pt.get(i).onGesture(yt,(function(){})),this.jD()}},o.layoutCallback=function(){return r||(r=Promise.resolve(void 0))},o.mL=function(t,i){var n=this;if(!this.oD){this.Is(),this.eD=this.OD.bind(this),this.ql.documentElement.addEventListener("focusin",this.eD),i&&(this.aD=i);var r=new s,o=r.promise,h=r.resolve;return this.getViewport().enterLightboxMode(this.element,o).then((function(){return n.AD(h,t)}))}},o.mutatedAttributesCallback=function(t){var i=t.open;void 0!==i&&(i?this.mL(2,document.activeElement):this.close(2))},o.ED=function(){var t=this.ft.querySelector("[autofocus]");t&&b(t)},o.AD=function(t,i){var n=this,r=this.element,s=this.MD(),o=s.closedStyle,h=s.durationSeconds,e=s.openStyle,u=Object.keys(e).map((function(t){return"".concat(t," ").concat(h,"s ease-in")})).join(",");this.lD++,this.fD&&T(r,"webkitOverflowScrolling","touch"),T(r,"transition",u),Y(r,X(o)),function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(r,!0),this.mutateElement((function(){r.scrollTop=0})),this.ED(),this.mutateElement((function(){Y(r,X(e))}));var a=this.ft;this.fD&&(this.om(),this.kD(this.cD));var f=function(){n.gD(),t()};r.addEventListener("transitionend",f),r.addEventListener("animationend",f),this.setAsContainer();var c=ut(this.element);c.scheduleLayout(this.element,a),c.scheduleResume(this.element,a),this.bE("lightboxOpen",i),this.sD=new ft(this.getAmpDoc(),(function(){return n.close(3)})),this.DD(),this.RD(),this.zD(),this.oD=!0},o.jD=function(){var t=this.element;null!=t.getAttribute("close-button")&&(this.pD=kt(t),t.insertBefore(this.pD,this.ft))},o.DD=function(){var t,i=this;this.pD&&(this.hD=this.CD.bind(this),this.pD.addEventListener("keydown",this.hD),this.measureMutateElement((function(){t=i.pD.getBoundingClientRect().height}),(function(){i.ID(),P(i.ft,{"margin-top":_(t),"min-height":"calc(100vh - ".concat(_(t),")")})})))},o.ID=function(){this.pD.classList.add("amp-ad-close-header")},o.zD=function(){(this.bD||this.pD)&&(this.uD=this.PD.bind(this),this.mD.addEventListener("click",this.uD))},o.TD=function(){(this.bD||this.pD)&&(this.mD.removeEventListener("click",this.uD),this.uD=null,this.pD&&(this.pD.removeEventListener("keydown",this.hD),this.hD=null))},o.MD=function(){return St[this.dD]},o.PD=function(){this.close(3)},o.CD=function(t){"Enter"==t.key&&(t.preventDefault(),this.close(3))},o.close=function(t){var i=this;this.oD&&(this.fD&&T(this.element,"webkitOverflowScrolling",""),this.getViewport().leaveLightboxMode(this.element).then((function(){return i.YD(t)})))},o.YD=function(t){var i=this,n=this.element,r=++this.lD,s=function(){r==i.lD&&(i.collapse(),i.gD())};this._D()?(function(t,i){for(var n=0;n<i.length;n++)T(t,i[n],null)}(n,["transition"]),s()):(n.addEventListener("transitionend",s),n.addEventListener("animationend",s)),Y(n,X(this.MD().closedStyle)),this.sD&&(this.sD.destroy(),this.sD=null),this.ql.documentElement.removeEventListener("focusin",this.eD),this.eD=null,this.TD(),this.removeAsContainer(),function(t){E(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,A)}(this.element,!1),ut(this.element).schedulePause(this.element,this.ft),this.oD=!1,this.bE("lightboxClose",t),this.aD&&b(this.aD)},o._D=function(){return"inabox"==Z(this.win).runtime||gt(this.element)},o.XD=function(){return!!this.element.contains(document.activeElement)},o.OD=function(){this.XD()||this.close(3)},o.RD=function(){this.XD()||(this.mD=this.LD(),this.mD||(this.bD=this.BD(),this.element.insertBefore(this.bD,this.element.firstChild),this.mD=this.bD),b(this.mD))},o.LD=function(){if(this.mD)return this.mD;if(this.pD)return this.pD;for(var t=this.element,i=t.querySelectorAll("[on]"),n=0;n<i.length;n++){var r=i[n];if(this.Ks.hasResolvableActionForTarget(r,"tap",t,tt(r.parentElement)))return r}},o.BD=function(){var t=this.element.getAttribute("data-close-button-aria-label")||"Close the modal",i=this.ql.createElement("button");return i.textContent=t,i.classList.add("i-amphtml-screen-reader"),i.tabIndex=-1,i},o.om=function(){var t=this.element.scrollTop;this.yD&&(0==t?this.element.scrollTop=1:this.element.scrollHeight==t+this.element.offsetHeight&&(this.element.scrollTop=t-1)),this.cD=t,null===this.vD&&this.HD(t)},o.HD=function(t){var i=this;this.vD=at(this.win).delay((function(){Math.abs(t-i.cD)<30?(Q().fine(xt,"slow scrolling: %s - %s",t,i.cD),i.vD=null,i.Fn(i.cD)):(Q().fine(xt,"fast scrolling: %s - %s",t,i.cD),i.HD(i.cD))}),100)},o.Fn=function(t){Q().fine(xt,"update_"),this.kD(t),this.cD=t},o.kD=function(t){var i=this,n=[];this.UD(t,(function(t){n.push(t),ut(i.element).scheduleLayout(i.element,t)}))},o.UD=function(t,i){for(var n=this.WD().height,r=this.SD(),s=0;s<r.length;s++){for(var o=r[s],h=0,e=o;e&&this.element.contains(e);e=e.offsetParent)h+=e.offsetTop;var u=2*n;h+o.offsetHeight>=t-u&&h<=t+u&&i(o)}},o.WD=function(){return this.Kt||(this.Kt={width:this.element.clientWidth,height:this.element.clientHeight}),this.Kt},o.wD=function(){var t=this.element,i=this.win;gt(t)&&Ot(i,i.document.body)},o.bE=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),o}(this.win,"".concat(xt,".").concat(t),{});this.Ks.trigger(this.element,t,n,i)},n}(t.BaseElement);function Ot(t,i){var n,r={},s=function(t){return it(t,"ampdoc")}(t).getAmpDoc(i);(n=s,nt(n,"mutator")).measureMutateElement(i,(function(){r.alreadyTransparent="rgba(0, 0, 0, 0)"==function(t,i){return t.getComputedStyle(i)||z}(t,i)["background-color"]}),(function(){r.alreadyTransparent||J().warn(xt,"The background of the <body> element has been forced to transparent. If you need to set background, use an intermediate container."),P(i,{background:"transparent"})}))}"inabox"==Z().runtime&&Ot(window,tt(document.body)),t.registerElement(xt,jt,'amp-lightbox{display:none;position:fixed!important;z-index:1000;top:0!important;left:0!important;bottom:0!important;right:0!important}amp-lightbox[scrollable]{overflow-y:auto!important;overflow-x:hidden!important}amp-lightbox i-amphtml-ad-close-header{height:60px!important;display:block!important;visibility:visible!important;opacity:0;position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:right!important;justify-content:right!important;transition:opacity 0.1s ease-in}[animate-in=fly-in-bottom]>i-amphtml-ad-close-header,[animate-in=fly-in-top]>i-amphtml-ad-close-header{transition-delay:0.2s}amp-lightbox .amp-ad-close-header{opacity:1!important;box-sizing:border-box;padding:5px;line-height:40px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;cursor:pointer}amp-lightbox .amp-ad-close-header>:first-child{margin-left:auto!important;pointer-events:none!important}amp-lightbox .amp-ad-close-button{display:block!important;background:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23fff"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\') no-repeat;background-position:50%;width:40px;height:40px;pointer-events:none!important;border-radius:40px;margin-left:5px}amp-lightbox .amp-ad-close-header:active>.amp-ad-close-button{background-color:hsla(0,0%,100%,0.3)}\n/*# sourceURL=/extensions/amp-lightbox/0.1/amp-lightbox.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-lightbox-0.1.js.map
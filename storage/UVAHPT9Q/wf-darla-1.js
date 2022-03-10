!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-darla",[],t):"object"==typeof exports?exports["wafer-darla"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-darla"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=window.wafer,u=l.constants,f=l.WaferBaseClass,c=u.ATTR_PREFIX,d=["darla-config"],p=function(e){function t(e){o(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:d}));return r._util=i({},r._util,{"darla-config":e.getAttribute(c+"darla-config")}),r}return a(t,e),s(t,[{key:"stateDidUpdate",value:function(){this._stateDidUpdate()}}]),t}(f);p.events={},t.default=p,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function o(){return l=n(r("./src/base.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),d=window.wafer.utils,p=d.getUrlParameterValueByName,v=window.wafer.controllers.WaferLazyController,w=window.DARLA||null,y=d.bindEvent,b=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root;void 0===r&&document;a(this,t);var n=t.prototype.configs,s=n.selector,u=n.successClass,c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{selector:s,successClass:u,WaferClass:(l||o()).default}));c._options=f({},c._options,{defaultOffsetY:1200,defaultOffsetX:0});var d=c;return(l||o()).default.prototype._stateDidUpdate=function(){var e=this._util.elem;d.loadElement(e).catch(function(){})},c.sync(),c}return s(t,e),c(t,[{key:"makeDarlaCall",value:function(e,t,r,o,n){var a=r.authed,i=void 0===a?"0":a,s=r.rotateAds,l=void 0!==s&&s,f=r.rotateTime,c=void 0===f?3e4:f,d=r.maxRetry,v=void 0===d?5:d,y=r.width,b=void 0===y?300:y,h=r.height,_=void 0===h?250:h,g=r.device,m=void 0===g?"smartphone":g,O=r.intl,j=void 0===O?"us":O,x=r.site,P=void 0===x?"fp":x,A=r.rid,C=void 0===A?"testRid":A,E=r.bucket,T=void 0===E?"testBucket":E,R=r.npv,S=void 0===R||R,k=r.ssl,D=void 0===k||k,z=r.metaSize,M=r.siteAttribute,U=r.includeRapidKey,I=void 0!==U&&U,B=r.supports,L=r.flex,Y=r.meta,K=void 0===Y?{}:Y,V=r.waitDelay,W=void 0===V?350:V,H=r.addAutoEvent,N=void 0!==H&&H,X=r.addCleanContainer,q=void 0!==X&&X;if(e&&t&&w){var F=w.inProgress(),J=w.prefetched(),G=window.vzm&&window.vzm.getPageContext&&window.vzm.getPageContext()||window.YAHOO&&window.YAHOO.context||{},Q="";if(G.ynet&&(t=p("_spaceid",window.location.href)||t,Q=p("atwKV",window.location.href)||Q),(F||J&&J.length>0)&&W>0)return o||(o=0),F&&o===v&&w.abort(),o>v?void(n&&n.style&&(n.style.display="none")):void setTimeout(this.makeDarlaCall.bind(this,e,t,r,o+1,n),o===v?2*W:W);var Z={pg:{device:m,intl:j,property:P,rid:C,test:T}},$='Y-BUCKET="'+T+'"';if(M){var ee=G.authed||i,te="lu:"+ee,re=M.split("pct"),oe=u(re,2),ne=oe[0],ae=oe[1],ie=window.rapidInstance;if(I&&ie&&ie.getRapidAttribute){var se=ie.getRapidAttribute("keys"),le=se.pd,ue=void 0===le?"":le,fe=se.pt,ce=void 0===fe?"":fe,de=se.ver,pe=void 0===de?"":de;te=te+(ue?";pd:"+ue:"")+(ce?";pt:"+ce:"")+(pe?";ver:"+pe:"")}$+=ne&&ae?" "+ne+te+";pct"+ae:" "+M}else"tw"===j&&($+=' rs="lu:'+i+'"');Q&&($+=" "+Q);var ve=e.replace(",","_"),we="wafer_darla_fetch_"+ve;w.add({name:we,autoStart:l,autoRT:c,ps:e,sa:$,sp:t,ref:window.location.href,npv:S,ssl:D,ult:Z});var ye=e.split(","),be=w.evtSettings("AUTO"),he={autoIV:1,autoMax:25,autoRT:"10000"};ye.forEach(function(e){var t=K[e]||{},r=t.width||b,o=t.height||_,n=t.metaSize||z,a=t.supports||B,i=t.flex||L,s=t.css,l={pos:e,dest:"wafer-darla-"+e,w:r,h:o};q&&(l.clean="wafer-darla-clean-"+e),n&&(l.metaSize=n),a&&(l.supports=a),i&&(l.flex=i),s&&(l.css=s),N&&!be.ps[e]&&(be.ps[e]=Object.assign({},{id:e},he)),w.addPos(l)}),N&&w.add(be),w.event(we)}}},{key:"loadElement",value:function(e){var t=this;return new Promise(function(r,o){if(t._shouldLoadElement(e)){var n=t._state.elementInstances,a=n.get(e),i=a.instance,s={};try{s=JSON.parse(i._util["darla-config"])}catch(e){return void o(e)}if(!s)return void o(new Error("config missing"));var l=s,u=l.pos,f=l.spaceid;if(u&&f&&w){var c=w.inProgress(),d=s,p=d.abortDarlaCalls,v=void 0===p?[]:p;c&&Array.isArray(v)&&v.length&&-1!==v.indexOf(c)&&w.abort(),t.makeDarlaCall(u,f,s,0,e),y(e,"load",t._itemLoaded(e))}}r()})}}]),t}(v);b.prototype.configs={selector:".wafer-darla",successClass:"wafer-darla-done"},t.default=b,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function o(){return a=n(r("./src/controller.js"))}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a;t.default=new((a||o()).default)({selector:(a||o()).default.prototype.configs.selector}),e.exports=t.default}})});
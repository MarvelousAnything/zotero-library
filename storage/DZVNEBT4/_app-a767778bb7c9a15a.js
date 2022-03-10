(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6489:function(e,t){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},s=e.split(o),c=i.decode||n,u=0;u<s.length;u++){var l=s[u],f=l.indexOf("=");if(!(f<0)){var p=l.substr(0,f).trim(),d=l.substr(++f,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==r[p]&&(r[p]=a(d,c))}}return r},t.serialize=function(e,t,n){var o=n||{},a=o.encode||r;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!i.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=o.maxAge){var u=o.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");c+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");c+="; Path="+o.path}if(o.expires){if("function"!==typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(c+="; HttpOnly");o.secure&&(c+="; Secure");if(o.sameSite){switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,r=encodeURIComponent,o=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(n){return e}}},1168:function(e){function t(e){this.message=e}t.prototype=new Error,t.prototype.name="InvalidCharacterError",e.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,i=0,a=0,s="";o=n.charAt(a++);~o&&(r=i%4?64*r+o:o,i++%4)?s+=String.fromCharCode(255&r>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s}},4491:function(e,t,n){var r=n(1168);e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(n){return r(t)}}},4579:function(e,t,n){"use strict";var r=n(4491);function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!==typeof e)throw new o("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(r(e.split(".")[n]))}catch(i){throw new o("Invalid token specified: "+i.message)}},e.exports.InvalidTokenError=o},7544:function(e,t,n){e.exports=n(6029)},1752:function(e,t,n){e.exports=n(8027)},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7633)}])},6029:function(e,t,n){"use strict";var r,o=(r=n(4051))&&r.__esModule?r:{default:r};function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.default=void 0;var p=function(e){return e&&e.__esModule?e:{default:e}}(n(7294)),d=n(3794);function h(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){h(i,r,o,a,s,"next",e)}function s(e){h(i,r,o,a,s,"throw",e)}a(void 0)}))}}function v(){return(v=m(o.default.mark((function e(t){var n,r,i;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,d.loadGetInitialProps(n,r);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,r,o=f(s);function s(){return i(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return p.default.createElement(t,Object.assign({},n))}}])&&a(t.prototype,n),r&&a(t,r),s}(p.default.Component);w.origGetInitialProps=g,w.getInitialProps=g,t.default=w},888:function(e,t,n){"use strict";var r=n(5893),o=function(e,t){return"string"===typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):null===t?void 0:t};t.Z=function(e){var t=e.item;return(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,o)}})}},7633:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R},reportWebVitals:function(){return L}});var r=n(5893),o=n(1163),i=n(4298),a=n(1752),s=n(7294),c=n(4141),u=n(3174),l=n(3944),f=n(6317),p=n(6540),d=function(e){var t="undefined"!==typeof window.requestIdleCallback?window.requestIdleCallback:function(){return e()};"complete"===document.readyState?t(e):window.addEventListener("load",(function(){t(e)}))},h=n(9008),m=n(888),v=n(6584),g=n.n(v),w=n(7790),y=n.n(w),b=n(3887),_=n.n(b),x=n(1985),E=n.n(x),A=n(2203),j=n.n(A),O=function(){return(0,r.jsxs)(h.default,{children:[(0,r.jsx)("meta",{property:"og:site_name",content:"The Atlantic"},"og:site_name"),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"},"og:locale"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:description",content:"The Atlantic covers news, politics, culture, technology, health, and more, through its articles, podcasts, videos, and flagship magazine."},"og:description"),(0,r.jsx)("meta",{property:"og:image",content:"https://cdn.theatlantic.com/assets/static/a/theatlantic/img/lacroix-default-thumbnail.png"},"og:image"),(0,r.jsx)("meta",{property:"fb:admins",content:"577048155,17301937"},"fb:admins"),(0,r.jsx)("meta",{property:"fb:app_id",content:"100770816677686"},"fb:app_id"),(0,r.jsx)("meta",{property:"fb:pages",content:"29259828486,1468531833474495,1061579677251147,457711054591520,370457103090695,1631141167169115,148681772342453,1510507419185410,128344747344340,128377530562508,236061986423933"},"fb:pages"),(0,r.jsx)("meta",{name:"p:domain_verify",content:"68e1a0361a557708fefc992f3309ed70"},"p:domain_verify"),(0,r.jsx)("meta",{name:"twitter:site",content:"@theatlantic"},"twitter:site"),(0,r.jsx)("meta",{name:"twitter:domain",content:"theatlantic.com"},"twitter:domain")]})},S={"@type":"SearchAction",target:"https://www.theatlantic.com/search/?q={q}","query-input":"required name=q"},T=function(){return(0,r.jsxs)(h.default,{children:[(0,m.Z)({item:{"@context":"https://schema.org","@type":"WebSite",name:"The Atlantic",url:"https://www.theatlantic.com",inLanguage:"en-US",issn:"1072-7825",potentialAction:S}}),(0,m.Z)({item:{"@context":"https://schema.org","@type":"Organization","@id":"https://www.theatlantic.com/#publisher",name:"The Atlantic",url:"https://www.theatlantic.com",logo:{"@type":"ImageObject",width:{"@type":"QuantitativeValue",unitCode:"E37",value:224},height:{"@type":"QuantitativeValue",unitCode:"E37",value:224},url:"https://cdn.theatlantic.com/assets/media/files/atlantic-logo--224x224.png"},sameAs:["https://www.facebook.com/TheAtlantic","https://twitter.com/theatlantic"]}})]})},C=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.default,{children:[(0,r.jsx)("title",{children:"The Atlantic"}),(0,r.jsx)("meta",{charSet:"utf-8"},"charset"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.jsx)("meta",{name:"description",content:"The Atlantic covers news, politics, culture, technology, health, and more, through its articles, podcasts, videos, and flagship magazine."},"description"),(0,r.jsx)("link",{rel:"icon",href:g()},"favicon"),(0,r.jsx)("link",{rel:"apple-touch-icon",href:y()},"apple-touch-icon-default"),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:_()},"apple-touch-icon-76x76"),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:E()},"apple-touch-icon-120x120"),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:j()},"apple-touch-icon-152x152"),(0,r.jsx)("meta",{name:"application-name",content:"theatlantic"},"application-name"),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#FFFFFF"},"msapplication-TileColor"),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:y()},"msapplication-TileImage"),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"The Atlantic",href:"/feed/all/"},"feed-all"),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"Best of The Atlantic",href:"/feed/best-of/"},"feed-best-of")]}),(0,r.jsx)(O,{}),(0,r.jsx)(T,{})]})};n(957),n(5112),n(7570);function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}var I=(0,a.default)().publicRuntimeConfig,L=function(e){(0,l.z6)().push({event:"performanceMark",performance:e})},R=(0,u.Sh)((function(e){var t=e.Component,n=e.pageProps;return(0,s.useEffect)((function(){return o.default.events.on("routeChangeStart",f.xc),function(){o.default.events.off("routeChangeStart",f.xc)}}),[]),(0,s.useEffect)((function(){t.disableAnalytics||d((function(){(0,l.Sp)()}))}),[t.disableAnalytics]),(0,r.jsxs)(c.v$,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(p.E,{}),(0,r.jsx)(t,k({},n)),(0,r.jsx)(i.default,{src:I.ADS_LIB_URL,strategy:"afterInteractive"})]})}))},903:function(e,t,n){"use strict";var r,o,i,a,s,c,u,l,f,p,d,h,m,v,g;n.d(t,{fh:function(){return o},Bv:function(){return i},o9:function(){return c},vi:function(){return p},ci:function(){return m}}),function(e){e.Hed1="HED1",e.Hed2="HED2",e.Hed3="HED3",e.Hed4="HED4"}(r||(r={})),function(e){e.Center="CENTER",e.Left="LEFT",e.Right="RIGHT",e.Leftgutter="LEFTGUTTER",e.Rightgutter="RIGHTGUTTER",e.Overflow="OVERFLOW",e.Fullbleed="FULLBLEED",e.Rightbleed="RIGHTBLEED",e.Leftbleed="LEFTBLEED"}(o||(o={})),function(e){e.Feature="feature",e.Standard="standard",e.Twocol="twocol"}(i||(i={})),function(e){e.Center="CENTER",e.Left="LEFT",e.Right="RIGHT",e.Full="FULL"}(a||(a={})),function(e){e.Magazine="MAGAZINE",e.Curated="CURATED",e.Editorialproject="EDITORIALPROJECT",e.Categorization="CATEGORIZATION"}(s||(s={})),function(e){e.Magazine="MAGAZINE",e.Curated="CURATED",e.Editorialproject="EDITORIALPROJECT",e.Category="CATEGORY",e.Channel="CHANNEL"}(c||(c={})),function(e){e.Red="RED",e.Blue="BLUE",e.Gray="GRAY"}(u||(u={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(l||(l={})),function(e){e.Manual="MANUAL"}(f||(f={})),function(e){e.Div="DIV",e.Blockquote="BLOCKQUOTE",e.P="P",e.Hr="HR",e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.Figure="FIGURE",e.Aside="ASIDE",e.Ul="UL",e.Ol="OL"}(p||(p={})),function(e){e.Top="TOP",e.Main="MAIN",e.Side="SIDE"}(d||(d={})),function(e){e.Dropcap="DROPCAP"}(h||(h={})),function(e){e.Parsely="PARSELY",e.Datascience="DATASCIENCE",e.Ollie="OLLIE"}(m||(m={})),function(e){e.Email="EMAIL",e.Facebook="FACEBOOK",e.Twitter="TWITTER"}(v||(v={})),function(e){e.H264="H264",e.Vp9="VP9",e.Hevc="HEVC"}(g||(g={}))},4141:function(e,t,n){"use strict";n.d(t,{v$:function(){return b},Ai:function(){return x}});n(4051);var r=n(5893),o=n(7294),i=n(1163),a=n(3944);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var n=new Set(e);return Array.from(t.values()).forEach((function(e){return n.delete(e)})),Array.from(n)}var l={"recirc-source":{id:"MzjERchsQwy7Y7PCiN-RdQ",groups:["control","datascience"]},"books-pos":{id:"YeHovRdLR5uPSA9SHBVYzw",groups:["control","high"]},"lower-meter-limit":{id:"0s_kf6OYQxqCyoioonBpyg",groups:["ctrl","1nudge","0nudge"]}},f={0:"control",6:"recirc-source.datascience",7:"books-pos.high",10:"lower-meter-limit.ctrl",11:"lower-meter-limit.1nudge",12:"lower-meter-limit.0nudge"};!function(e,t){var n=new Set(Array.isArray(t)?t:Array.from(Object.values(t))),r=new Set,o=[];Object.entries(e).forEach((function(e){var t=c(e,2),i=t[0];t[1].groups.forEach((function(e){n.has(e)?o.push(e):r.add("".concat(i,".").concat(e))}))})),o.forEach((function(e){n.delete(e)}));var i=u(r,n),a=u(n,r),s=[],l="OPTIMIZE_EXPERIMENTS",f="OPTIMIZE_BUCKETS";if(i.length&&s.push("groups defined in ".concat(l," but missing from ").concat(f,": ").concat(i.join(", "))),a.length&&s.push("groups in ".concat(f," without definitions in ").concat(l,": ").concat(a.join(", "))),s.length)throw new Error("AB Tests misconfigured: ".concat(s.join("; ")))}(l,f);var p=n(2286);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}var g=function(e,t){var n,r=(null===t||void 0===t||null===(n=t.query)||void 0===n?void 0:n.optimize_experiment)||"",o=Array.isArray(r)?r[0]:r,i=t&&"req"in t?t.req:void 0,a=parseInt((0,p.parseCookies)(i&&{req:i}).atltestbucketv1),s=Array.from(Object.keys(f)).map((function(e){return parseInt(e)})).find((function(e){return o?f[e]===o:i?"1"===i.headers["x-test-bucket-".concat(e)]:e===a}));if(void 0!==s){var c=o||f[s];if(-1===c.indexOf("."))c="".concat(e,".").concat(c);else if(0!==c.indexOf("".concat(e,".")))return;var u=l[e],d=u.id,v=u.groups,g=h(c.split("."),2)[1];return{id:d,value:s,group:c,experiment:e,variant:g,variantIndex:m(v).concat([""]).indexOf(g)}}};var w=(0,o.createContext)({}),y=(0,o.createContext)({clientSideAbTests:{},setClientSideAbTest:function(){}}),b=function(e){var t=e.children,n=(0,o.useState)({}),i=n[0],a=n[1];return(0,r.jsx)(y.Provider,{value:{clientSideAbTests:i,setClientSideAbTest:function(e,t){i[e]=t,a(i)}},children:t})};function _(e){(0,a.z6)().push({event:"Optimize Test",abTest:{experiment_id:e.id,experiment_variant:e.variantIndex,abt_experiment:e.group||null,abt_value:"".concat(e.value)}})}var x=function(e){var t=function(e){var t=(0,o.useContext)(w),n=(0,o.useContext)(y),r=n.clientSideAbTests,a=n.setClientSideAbTest,s=((0,i.useRouter)()||{}).query,c=g(e,{query:s}),u=(null===t||void 0===t?void 0:t.abTest)||r[e]||((null===c||void 0===c?void 0:c.experiment)===e?c:null);return(0,o.useEffect)((function(){if(!(null===t||void 0===t?void 0:t.abTest)&&!(e in r)){var n=u||g(e,{query:s});(null===n||void 0===n?void 0:n.experiment)===e&&(_(n),a(e,n))}}),[t,r,a,u,e,s]),u}(e);return(null===t||void 0===t?void 0:t.group)||null}},6317:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return window.__ads=window.__ads||{},window.__ads.pageview=window.__ads.pageview||[],window.__ads.pause=window.__ads.pause||[],window.__ads.setGlobalTargeting=window.__ads.setGlobalTargeting||[],window.__ads}n.d(t,{fA:function(){return i},Kz:function(){return s},xc:function(){return c}});var i,a={lazy_load:2,datePublished:null,amazon:"3239",globals:{},prebid:"https://www.theatlantic.com/packages/adsjs/prebid.js",perfUrl:"https://data-cdn.theatlantic.com/perf.gif",zone:null,patchEventHandlers:!0,outofpage:!0};function s(e){var t=e.platform,n=void 0===t?"web":t,i=e.channel,s=void 0===i?"web":i,c=e.template,u=e.datePublished,l=e.lazy_load,f=void 0===l?2:l,p=e.globalTargeting,d=void 0===p?{}:p,h=o(),m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},a,{zone:"/4624/theatlantic.".concat(n,"/").concat(s,"/").concat(c),datePublished:u,lazy_load:f,globals:d});h.pageview.push(m)}function c(){o().pause.push(1)}!function(e){e.other_unassigned="other_unassigned",e.article_feature="article_feature",e.article_photo="article_photo",e.article_standard="article_standard",e.article_twocol="article_twocol",e.article_video="article_video",e.homepage="homepage",e.landing_author="landing_author",e.landing_channel="landing_channel",e.landing_custom="landing_custom",e.landing_standard="landing_standard",e.other_crossword="other_crossword",e.other_notes="other_notes",e.other_search="other_search",e.sponsored="sponsored"}(i||(i={}))},3944:function(e,t,n){"use strict";n.d(t,{z6:function(){return m},an:function(){return E},Sp:function(){return v},Zu:function(){return x},mC:function(){return y},Gz:function(){return g},Px:function(){return _}});var r=n(4051),o=n.n(r),i=n(1163),a=n(2286),s=function(e){return!!e.gdprApplies&&!![e.purpose.consents[1],e.purpose.consents[2],e.purpose.consents[3],e.purpose.consents[4],e.purpose.consents[5],e.purpose.consents[6],e.purpose.consents[7],e.purpose.consents[8],e.purpose.consents[9],e.purpose.consents[10]].some((function(e){return!e}))},c=function(){var e=(0,a.parseCookies)(),t=e.atl_ccpa,n=e.is_gdpr;return t?Promise.resolve(!0):"1"===n||window.location.search.match(/debug=gdpr/)?(function(){var e=document.createElement("script"),t="https://quantcast.mgr.consensu.org".concat("/choice/","b0K-eQJGBXxXE","/","theatlantic.com","/choice.js");e.async=!0,e.type="text/javascript",e.src=t,document.body.appendChild(e),function(){for(var e,t="__tcfapiLocator",n=[],r=window;r;){try{if(r.frames.__tcfapiLocator){e=r;break}}catch(o){}if(r===window.top)break;r=r.parent}e||(function e(){var n=r.document,o=!!r.frames.__tcfapiLocator;if(!o)if(n.body){var i=n.createElement("iframe");i.style.cssText="display:none",i.name=t,n.body.appendChild(i)}else setTimeout(e,5);return!o}(),r.__tcfapi=function(){var e,t=arguments;if(!t.length)return n;if("setGdprApplies"===t[0])t.length>3&&2===t[2]&&"boolean"===typeof t[3]&&(e=t[3],"function"===typeof t[2]&&t[2]("set",!0));else if("ping"===t[0]){var r={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"};"function"===typeof t[2]&&t[2](r)}else n.push(t)},r.addEventListener("message",(function(e){var t="string"===typeof e.data,n={};try{n=t?JSON.parse(e.data):e.data}catch(o){}var r=n.__tcfapiCall;r&&window.__tcfapi(r.command,r.version,(function(n,o){var i={__tcfapiReturn:{returnValue:n,success:o,callId:r.callId}};t&&(i=JSON.stringify(i)),e.source.postMessage(i,"*")}),r.parameter)}),!1))}()}(),function(){var e=m(),t=function(t,n){e.push({event:"Consent Updated",consent:{consent_message:"cmp default",consent_object:t,consent_target:"quantcast cmp",consent_value:n?"1":"0"}})};window.__tcfapi("addEventListener",2,(function(e,n){n&&"useractioncomplete"===e.eventStatus&&(t("store_information",e.purpose.consents[1]),t("basic_ads",e.purpose.consents[2]),t("personalized_ads_profile",e.purpose.consents[3]),t("personalized_ads",e.purpose.consents[4]),t("personalized_content_profile",e.purpose.consents[5]),t("personalized_content",e.purpose.consents[6]),t("measure_ad_performance",e.purpose.consents[7]),t("measure_content_performance",e.purpose.consents[8]),t("market_research",e.purpose.consents[9]),t("improve_products",e.purpose.consents[10]),window.__tcfapi("removeEventListener",2,(function(){}),e.listenerId))}))}(),new Promise((function(e){window.__tcfapi("addEventListener",2,(function(t,n){n&&"useractioncomplete"===t.eventStatus&&(e(t),window.__tcfapi("removeEventListener",2,(function(){}),t.listenerId))}))})).then(s)):Promise.resolve(!1)},u=n(1752),l=n(7294),f=n(6317),p=n(6540),d=n(903);function h(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}var m=function(){return window.dataLayer=window.dataLayer||[],window.dataLayer},v=function(){var e,t=(e=o().mark((function e(){var t,n,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof document){e.next=2;break}return e.abrupt("return");case 2:return t=(0,u.default)().publicRuntimeConfig,e.next=5,c();case 5:n=e.sent,r=n?t.GTM_CONTAINER_ID_NONCONSENTED:t.GTM_CONTAINER_ID,n||(0,p.P)(),m().push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),(i=document.createElement("script")).async=!0,i.src="https://www.googletagmanager.com/gtm.js?id=".concat(r),document.body.appendChild(i);case 14:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){h(i,r,o,a,s,"next",e)}function s(e){h(i,r,o,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),g=function(e){var t=e.displayName,n=e.template;m().push({event:"pageview",page:{type:"landing",title:t,template:n}})},w=function(e,t){var n=e.article;m().push({event:"pageview",page:{type:"article",title:n.title,article:n,template:t,layout:"standard"}})},y=function(){m().push({event:"pageview",page:{type:"homepage",template:f.fA.homepage}})};function b(e){return"content"in e}var _=function(e){var t,n=e.article,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(0,i.useRouter)(),s=a&&"/app/webview/[id]"===a.pathname,c=n.categories.map((function(e){return e.slug})),u=n.channels.map((function(e){return e.slug})),p="MagazineArticle"===n.__typename,h="MagazineArticle"===n.__typename?n.issue:void 0;switch(n.layout){case d.Bv.Feature:t=f.fA.article_feature;break;case d.Bv.Twocol:t=f.fA.article_twocol;break;case d.Bv.Standard:t=f.fA.article_standard}(0,l.useEffect)((function(){var e,i,a,l,d;(o&&w({article:n},t),r)&&(0,f.Kz)({platform:s?"android":"web",lazy_load:2,channel:(null===(e=n.primaryChannel)||void 0===e?void 0:e.slug)||"",template:t,datePublished:n.datePublished||"",globalTargeting:{title:n.slug||"",grapeshot_segments:(null===(i=n.grapeshot)||void 0===i?void 0:i.segments)||[],cat:c,rubric:(null===(a=n.primaryChannel)||void 0===a?void 0:a.displayName)||"",id:n.id.split(":")[1],xpost:u,type:p?"mag-reg":"non-mag-reg",iss:(null===h||void 0===h?void 0:h.slug)||void 0,issue_name:(null===h||void 0===h?void 0:h.issueName)||void 0,report:(null===(l=n.editorialProject)||void 0===l?void 0:l.slug)||"",nopromo:(null===(d=n.advertisingInfo)||void 0===d?void 0:d.disableHouseAd.toString())||"false",experiment:b(n)?"swan.release":"swan.control"}})}),[n.id])},x=function(e){var t=e.title,n=e.statusCode;m().push({event:"pageview",page:{type:"error",title:t,statusCode:n}})},E=function(){if("undefined"===typeof document)return"other";var e=document.referrer,t=Object.fromEntries(new URLSearchParams(document.location.search));if(e){var n=new URL(e).hostname;if(n.match(/(?:^|\.)facebook\./))return"facebook";if(n.match(/(?:^|\.)twitter\./)||n.match(/(?:^|\.)t\.co/))return"twitter";if(n.match(/(?:^|\.)flipboard\./))return"flipboard";if(n.match(/(?:^|\.)google\./))return n.includes("news.google")?"google_news":"google_search"}if(t.hasOwnProperty("utm_source")){if("newsletter"===t.utm_source)return"newsletter";if(t.utm_source.includes("pocket"))return"pocket"}return"other"}},3174:function(e,t,n){"use strict";n.d(t,{aC:function(){return g},Sh:function(){return w}});var r=n(4051),o=n.n(r),i=n(5893),a=n(7294),s=n(7544),c=n(2286),u=n(4579),l=n.n(u);function f(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=(0,a.createContext)({}),v=function(e){var t=e.isLoggedIn,n=e.hasPaywallAccess,r=e.children;return(0,i.jsx)(m.Provider,{value:{isLoggedIn:t,hasPaywallAccess:n},children:r})},g=function(){var e=(0,a.useContext)(m);if(void 0===e)throw new Error("useContext must be used within a Provider");return e},w=function(e){var t=function(t){var n=t.isLoggedIn,r=t.hasPaywallAccess,o=h(t,["isLoggedIn","hasPaywallAccess"]);return(0,i.jsx)(v,{isLoggedIn:n,hasPaywallAccess:r,children:(0,i.jsx)(e,d({},o))})};return t.getInitialProps=function(){var e,t=(e=o().mark((function e(t){var n,r,i,a,u,f,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null===(n=t.ctx.res)||void 0===n?void 0:n.getHeader("Vary"),a=Array.isArray(i)?i:"".concat(i||"").split(",").map((function(e){return e.trim()})).filter(Boolean),["X-JWT-State","X-JWT-PaymeterAccess"].forEach((function(e){a.includes(e)||a.push(e)})),null===(r=t.ctx.res)||void 0===r||r.setHeader("Vary",a.join(", ")),e.next=8,s.default.getInitialProps(t);case 8:if(u=e.sent,f=(0,c.parseCookies)(t.ctx).atljwt){e.next=12;break}return e.abrupt("return",d({isLoggedIn:!1,hasPaywallAccess:!1},u));case 12:return p=l()(f),e.abrupt("return",d({isLoggedIn:!0,hasPaywallAccess:p.paymeter_access},u));case 14:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,s,"next",e)}function s(e){f(i,r,o,a,s,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),t}},6540:function(e,t,n){"use strict";n.d(t,{E:function(){return i},P:function(){return a}});var r=n(5893),o=n(9008),i=function(){return(0,r.jsx)(o.default,{children:(0,r.jsx)("style",{id:"_vis_opt_path_hide",children:"".concat("#paywall,#nonMeteredNudge,#gate"," {opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}")},"vwo")})},a=function(){window._vwo_el_style="{}",window._vwo_code=window._vwo_code||function(){var e=!1,t=document,n={use_existing_jquery:function(){return false},library_tolerance:function(){return 2500},finish:function(){if(!e){e=!0;var n=t.getElementById("_vis_opt_path_hide");n&&n.parentNode.removeChild(n)}},finished:function(){return e},load:function(e){var n=t.createElement("script");n.src=e,n.type="text/javascript",n.innerText,n.onerror=function(){_vwo_code.finish()},t.getElementsByTagName("head")[0].appendChild(n)},init:function(){return window.settings_timer=setTimeout((function(){_vwo_code.finish()}),2e3),this.load("https://dev.visualwebsiteoptimizer.com/j.php?a=506588&u="+encodeURIComponent(t.URL)+"&f=1&r="+Math.random()),settings_timer}};return window._vwo_settings_timer=n.init(),n}()}},5112:function(){},7570:function(){},957:function(){},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)},4298:function(e,t,n){e.exports=n(699)},2286:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var o=n(6489),i=n(9328),a=n(1022);function s(e,t){var n,r;return(null===(r=null===(n=null===e||void 0===e?void 0:e.req)||void 0===n?void 0:n.headers)||void 0===r?void 0:r.cookie)?o.parse(e.req.headers.cookie,t):a.isBrowser()?o.parse(document.cookie,t):{}}function c(e,t,n,s){var c,u;if(void 0===s&&(s={}),(null===(c=null===e||void 0===e?void 0:e.res)||void 0===c?void 0:c.getHeader)&&e.res.setHeader){if(null===(u=null===e||void 0===e?void 0:e.res)||void 0===u?void 0:u.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var l=e.res.getHeader("Set-Cookie")||[];"string"===typeof l&&(l=[l]),"number"===typeof l&&(l=[]);var f=i.parse(l,{decodeValues:!1}),p=a.createCookie(t,n,s),d=[];f.forEach((function(e){if(!a.areCookiesEqual(e,p)){var t=o.serialize(e.name,e.value,r({encode:function(e){return e}},e));d.push(t)}})),d.push(o.serialize(t,n,s)),e.res.setHeader("Set-Cookie",d)}if(a.isBrowser()){if(s&&s.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=o.serialize(t,n,s)}return{}}function u(e,t,n){return c(e,t,"",r(r({},n||{}),{maxAge:-1}))}t.parseCookies=s,t.setCookie=c,t.destroyCookie=u,t.default={set:c,get:s,destroy:u}},1022:function(e,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function r(e,t){var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if(e[i]!==t[i])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!==typeof window},t.createCookie=function(e,t,r){var o=r.sameSite;!0===o&&(o="strict"),void 0!==o&&!1!==o||(o="lax");var i=n(n({},r),{sameSite:o});return delete i.encode,n({name:e,value:t},i)},t.hasSameProperties=r,t.areCookiesEqual=function(e,t){var o=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(o=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),r(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&o}},9328:function(e){"use strict";var t={decodeValues:!0,map:!1,silent:!1};function n(e){return"string"===typeof e&&!!e.trim()}function r(e,r){var o=e.split(";").filter(n),i=o.shift().split("="),a=i.shift(),s=i.join("=");r=r?Object.assign({},t,r):t;try{s=r.decodeValues?decodeURIComponent(s):s}catch(u){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+s+"'. Set options.decodeValues to false to disable this feature.",u)}var c={name:a,value:s};return o.forEach((function(e){var t=e.split("="),n=t.shift().trimLeft().toLowerCase(),r=t.join("=");"expires"===n?c.expires=new Date(r):"max-age"===n?c.maxAge=parseInt(r,10):"secure"===n?c.secure=!0:"httponly"===n?c.httpOnly=!0:"samesite"===n?c.sameSite=r:c[n]=r})),c}function o(e,o){if(o=o?Object.assign({},t,o):t,!e)return o.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var i=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];i||!e.headers.cookie||o.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=i}if(Array.isArray(e)||(e=[e]),(o=o?Object.assign({},t,o):t).map){return e.filter(n).reduce((function(e,t){var n=r(t,o);return e[n.name]=n,e}),{})}return e.filter(n).map((function(e){return r(e,o)}))}e.exports=o,e.exports.parse=o,e.exports.parseString=r,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,n,r,o,i,a=[],s=0;function c(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,i=!1;c();)if(","===(n=e.charAt(s))){for(r=s,s+=1,c(),o=s;s<e.length&&"="!==(n=e.charAt(s))&&";"!==n&&","!==n;)s+=1;s<e.length&&"="===e.charAt(s)?(i=!0,s=o,a.push(e.substring(t,r)),t=s):s=r+1}else s+=1;(!i||s>=e.length)&&a.push(e.substring(t,e.length))}return a}},1985:function(e){e.exports=(window.__NEXT_DATA__.assetPrefix||"").replace(/\/$/,"")+"/_next/static/images/apple-touch-icon-120x120-419ba228184c040a691628d3dd82c206.png"},2203:function(e){e.exports=(window.__NEXT_DATA__.assetPrefix||"").replace(/\/$/,"")+"/_next/static/images/apple-touch-icon-152x152-aafde20dd981a38fcd549b29b2b3b785.png"},3887:function(e){e.exports=(window.__NEXT_DATA__.assetPrefix||"").replace(/\/$/,"")+"/_next/static/images/apple-touch-icon-76x76-d5accc11b8265af76495fbfa9d38dd3b.png"},7790:function(e){e.exports=(window.__NEXT_DATA__.assetPrefix||"").replace(/\/$/,"")+"/_next/static/images/apple-touch-icon-default-b504d70343a9438df64c32ce339c7ebc.png"},6584:function(e){e.exports=(window.__NEXT_DATA__.assetPrefix||"").replace(/\/$/,"")+"/_next/static/images/favicon-3888b0e329526a975703e3059a02b92d.ico"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6395),t(6363),t(387)}));var n=e.O();_N_E=n}]);
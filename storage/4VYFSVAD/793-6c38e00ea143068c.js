(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{15394:function(e,t,r){"use strict";r.d(t,{Z:function(){return T}});var a=r(85893),n=r(67294),i=r(94184),s=r.n(i),l=r(83476),o=r(12280),c=r(58437),u=r(72595),d=r(19965),f=r(51127),p=r(45697),h=r.n(p),g=r(63960),m=r.n(g),b=function(e){var t=e.primaryHed,r=e.path,n=e.id,i=r.split("/").reverse()[0]||!1,s=/(blog\/|live-blog\/)/g.test(r),l=/ncrd([0-9]{6,7})/g.test(r);return s&&l&&n===i?(0,a.jsx)("h1",{className:m().cardTitle,children:t}):(0,a.jsx)("h2",{className:m().cardTitle,children:t})};b.defaultProps={primaryHed:"",path:"",id:""},b.propTypes={primaryHed:h().string,path:h().string,id:h().string};var y=b,v=r(29208),x=r.n(v),k=r(3092),P=r(49938);function A(e){var t=e.dateString,r=(0,P.timeFrom)(t),n=(0,P.getFormattedTimeString)(t);return(0,a.jsx)("div",{className:"timestamps founders-mono f2",children:"".concat(k.ZP.t("time_ago",{time:r})," / ").concat(n)})}A.propTypes={dateString:h().string.isRequired};var _=A,j=r(19239),w=function(e){var t=e.authors,r=e.date,n=t&&1===t.length,i=x()(t[0],"person",t[0]);return(0,a.jsxs)("div",{className:"".concat("card-byline"," mb5 df"),children:[n&&(0,a.jsx)(j.jg,{person:i,additionalClasses:"mt1 mr2"}),(0,a.jsxs)("div",{className:"df flex-column",children:[t&&(0,a.jsx)("p",{className:"f4 founders-cond mv0 gray-80",children:(0,a.jsx)(j.qm,{authors:t})}),r&&(0,a.jsx)(_,{dateString:r.publishedAt})]})]})};w.propTypes={authors:h().arrayOf(l.v||l.lB),date:{createdAt:h().string,modifiedAt:h().string,publishedAt:h().string}},w.defaultProps={authors:null,date:null};var I=r(19723);function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){S(e,t,r[t])}))}return e}var O=function(e,t){return e.map((function(e,r){if(!(e&&e.html))return(0,u.x)(e,r,t);var a=C({},e,{html:(0,o.Z)(e.html)});return(0,u.x)(a,r,t)}))},L=function(e){var t=e.cardType,r=e.authors,i=e.content.markupAndEmbeds,l=e.date,o=e.headline.primary,u=e.isHeadlineHidden,p=void 0!==u&&u,h=e.id,g=e.path,m=e.canonicalUrl,b=e.url,v=e.cardData,x=n.useContext(c.Aj),k=s()("live-blog-card","article-body__content","w-100 mh0 mb8 fn overflow-x-hidden"),P=b.primary;if(m)try{var A=m.replace(/\/[A-Za-z]crd[0-9]+/,""),_=new URL(A);_.hash="#".concat(h),P=encodeURIComponent(_.toString())}catch(T){}var j=encodeURIComponent(o),S=(0,I.getSiteConfigs)(x).twitterIntentVia,L={twitterHref:"https://twitter.com/intent/tweet?text=".concat(j,"&via=").concat(S,"&url=").concat(P,"&original_referer=").concat(P),facebookHref:"https://www.facebook.com/sharer/sharer.php?u=".concat(P),emailHref:"mailto:?subject=".concat(o,"&body=").concat(P),classes:"df justify-start mt6 lh-none",tracking:"mbt_navbar_socialShare"};return(0,a.jsxs)("div",{className:k,id:h,children:[(0,a.jsx)("div",{className:s()("live-blog-card__stripes")}),!p&&(0,a.jsx)(y,{primaryHed:o,path:g,id:h}),(0,a.jsx)(w,{authors:r,date:l}),O(i,g),"VIDEO"===t&&(0,a.jsx)(d.Z,{video:v}),(0,a.jsx)(f.Z,C({},L))]},h)};L.propTypes=l.R0;var T=L},51127:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var a=r(85893),n=r(67294),i=r(2031),s=r(94184),l=r.n(s),o=r(45697),c=r.n(o),u=r(99985),d=r(30750),f=r(42232),p=r(54655),h=r.n(p);function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?g(e):t}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=y(e);if(t){var n=y(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v(this,r)}}var A=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(s,e);var t,r,n,i=P(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),b(g(t=i.call(this,e)),"embedClick",(function(e){e.preventDefault();var r,a,n=t.props,i=n.tracking,s=n.href,l=window.location,o=l.protocol,c=l.host;r=i,a="embed",(0,u.Z)("track",r,{platform:a});var d=(0,f.stripLeadingSlash)(s),p=function(e){if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.querySelector(".".concat(h().embedCopyTextarea));try{return t.value=e,t.select(),document.execCommand("copy")}catch(r){}}return!1}('<iframe loading="lazy" width="560" height="315" src="'.concat(o,"//").concat(c,"/").concat(d,'" scrolling="no" frameborder="0" allowfullscreen></iframe>'));p&&(t.setState({embedCopied:!0}),setTimeout((function(){t.setState({embedCopied:!1})}),5e3))})),t.state={embedCopied:!1},t}return t=s,(r=[{key:"render",value:function(){var e=this,t=this.state.embedCopied,r=this.props,n=r.href,i=r.classes;return(0,a.jsxs)("div",{className:"relative dib",children:[(0,a.jsx)("a",{className:"js-embed-link",href:n,onClick:function(t){e.embedClick(t)},children:(0,a.jsx)("span",{className:l()(i)})}),(0,a.jsx)("div",{className:l()(h().embedFeedback,b({},h().embedCopied,t)),children:(0,a.jsx)(d.c,{children:"copied!"})}),(0,a.jsx)("textarea",{className:h().embedCopyTextarea,tabIndex:"-1",readOnly:!0})]})}}])&&m(t.prototype,r),n&&m(t,n),s}(n.Component);b(A,"propTypes",{href:c().string.isRequired,tracking:c().string.isRequired,classes:c().string}),b(A,"defaultProps",{classes:"icon icon-embed"});var _=A;(0,u.Z)("register","mbt_navbar_socialShare");var j=0,w=function(e,t){(0,u.Z)("track",e,{platform:t})},I=function(e){var t=e.enableMenu,r=e.twitterHref,n=e.facebookHref,s=e.emailHref,o=e.embedHref,c=e.smsHref,u=e.displayOptions,d=e.classes,f=e.tracking,p=void 0===f?"mbt_navbar_socialShare":f,h=(0,i.$)().t;j+=1;var g=l()(d,"share-list",{"share-list__is-knockout":u.isKnockout,"share-list__use-colored-icons":u.useColoredIcons,"share-list__is-full-width-mobile":u.isFullWidthMobile},"dn-print");return(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("input",{className:l()("dn",{"share-list__social-menu-checkbox":t}),defaultChecked:!1===t,id:"social-menu-toggle--".concat(j),type:"checkbox",tabIndex:"-1"}),(0,a.jsxs)("ul",{className:l()("share-list__social-list","js-social-share",{"justify-between w-100 w-auto-m":u.isFullWidthMobile}),children:[(0,a.jsx)("li",{className:l()("share-list__social-list-text","founders-mono"),children:"".concat(h("Share this")," -")}),(0,a.jsx)("li",{className:"share-list__social-list-icon",children:(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",onClick:function(){w(p,"facebook")},children:(0,a.jsx)("span",{className:l()("icon icon-facebook","share-list__social-icon")})})}),(0,a.jsx)("li",{className:"share-list__social-list-icon social-share-list__icon--twitter",children:(0,a.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",onClick:function(){w(p,"twitter")},children:(0,a.jsx)("span",{className:l()("icon icon-twitter","share-list__social-icon")})})}),s&&(0,a.jsx)("li",{className:"share-list__social-list-icon",children:(0,a.jsx)("a",{href:s,onClick:function(){w(p,"email")},children:(0,a.jsx)("span",{className:l()("icon icon-email","share-list__social-icon")})})}),c&&(0,a.jsx)("li",{className:l()("share-list__social-list-icon","db dn-m"),children:(0,a.jsx)("a",{className:"js-sms-link",href:c,onClick:function(){w(p,"sms")},children:(0,a.jsx)("span",{className:l()("icon icon-sms","share-list__social-icon")})})}),o&&(0,a.jsx)("li",{className:l()("share-list__social-list-icon","dn db-m"),children:(0,a.jsx)(_,{href:o,tracking:p,classes:l()("icon icon-embed","share-list__social-icon")})})]}),t&&(0,a.jsxs)("label",{className:"share-list__social-menu-expand",htmlFor:"social-menu-toggle--".concat(j),children:[(0,a.jsx)("span",{className:"share-list__social-menu-dot"}),(0,a.jsxs)("svg",{viewBox:"0 0 20 20",className:"share-list__social-menu-close",children:[(0,a.jsx)("line",{x1:"0",x2:"20",y1:"0",y2:"20",className:"share-list__social-menu-close-line"}),(0,a.jsx)("line",{x1:"0",x2:"20",y1:"20",y2:"0",className:"share-list__social-menu-close-line"})]})]})]})};I.propTypes={enableMenu:c().bool,twitterHref:c().string.isRequired,facebookHref:c().string.isRequired,emailHref:c().string,embedHref:c().string,smsHref:c().string,classes:c().string,displayOptions:c().shape({useColoredIcons:c().bool,isKnockout:c().bool,isFullWidthMobile:c().bool}),tracking:c().string},I.defaultProps={enableMenu:!1,emailHref:null,embedHref:null,smsHref:null,classes:null,displayOptions:{},tracking:void 0};var S=I},94646:function(e,t,r){"use strict";r.d(t,{w$:function(){return p},bg:function(){return w},CB:function(){return I}});var a=r(29208),n=r.n(a),i=r(34704),s=r(41549),l=function(e){if(!e.length)return-1;var t,r=e.findIndex((function(e){return e.packages[0]&&"partnerRecirc"===e.packages[0].type}));if(e[r-1]&&"fullWidth"!==e[r-1].type)t=r;else{var a=e.length-1;"fullWidth"!==e[a].type&&(t=a+1)}return t},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"boxinline";return{isCustomAd:!0,sticky:!1,autofill:null,id:e,items:[],manuallyCuratedAd:!1,metadata:{slot:r,packageId:e},name:"",type:"ad",zone:t}},c=JSON.parse('{"news":[{"excludeLayouts":["fullWidth"],"excludePackages":["leadSectionFront"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":true,"interval":2,"adPlacement":0,"type":"boxinline"},{"excludeLayouts":[],"excludePackages":["leadSectionFront"],"excludeFirstPackages":["bigHeadline","embed"],"isRecurring":false,"placeAfterPackage":null,"interval":0,"adPlacement":1,"type":"boxinline"}],"today":[{"excludeLayouts":["fullWidth"],"excludePackages":["collectionTitle","leadRectangle"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":true,"interval":3,"adPlacement":0,"type":"boxinline"},{"excludeLayouts":[],"excludePackages":["leadSectionFront","leadRectangle"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":"teaseList","isRecurring":false,"interval":0,"adPlacement":0,"type":"boxinline"},{"excludeLayouts":[],"excludePackages":["magazineLead","slimLead","showLead","leadSectionFront","leadRectangle"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":false,"interval":0,"adPlacement":2,"type":"boxinline"}],"today:cover":[{"excludeLayouts":["fullWidth"],"excludePackages":["collectionTitle","leadRectangle"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":true,"interval":3,"adPlacement":0,"type":"boxinline"}],"msnbc":[{"excludeLayouts":["fullWidth"],"excludePackages":["leadSectionFront","collectionTitle"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":true,"interval":2,"adPlacement":0,"type":"boxinline"},{"excludeLayouts":[],"excludePackages":["leadSectionFront"],"excludeFirstPackages":["bigHeadline","embed"],"isRecurring":false,"placeAfterPackage":null,"interval":0,"adPlacement":1,"type":"boxinline"}]}');function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function e(t,r,a){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"isLayoutExcluded",(function(e){return u.rule.excludeLayouts.includes(e)})),d(this,"isPackageExcluded",(function(e){return u.rule.excludePackages.includes(e)})),d(this,"isExcludeFirstPackages",(function(e){return u.rule.excludeFirstPackages.includes(e)})),d(this,"isLastLayoutBeforeTaboola",(function(){return u.totalLayoutParsed===u.lastNonFullWidthLayoutIndex})),d(this,"isLastPackageBeforeTaboola",(function(e){var t=u.packages.length-1;return u.isLastLayoutBeforeTaboola()&&("ad"===u.packages[t].type&&t<=e||"ad"!==u.packages[t].type&&t+1<=e)})),d(this,"isValidAdPlacement",(function(e){return e>u.packages.length||u.isLastPackageBeforeTaboola(e)?null:e})),d(this,"setPackage",(function(e){var t;u.currentPackageIndex=0,u.packages=f(e),"today"!==u.vertical&&"msnbc"!==u.vertical||(t=u.todayMsnbcPackageSorting),u.packages=(0,i.XV)(u.packages,(function(e){return e.zone}),t)})),d(this,"todayMsnbcPackageSorting",(function(e,t){return e.value>t.value?-1:e.value<t.value||e.index>t.index?1:e.index<t.index?-1:0})),d(this,"placeAd",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;u.packages.splice(e,0,u.getAd(t)),u.currentPackageIndex=e})),d(this,"placeAdAfterCertainPackage",(function(e){for(var t=u.currentPackageIndex;t<u.packages.length;t+=1){var r=u.packages[t],a=r.type,n=r.zone;if(e===a){if(u.isValidAdPlacement(t+1))return u.placeAd(t+1,n),!0;break}}return!1})),d(this,"placeAdsIntoPackages",(function(){var e=u.rule,t=e.adPlacement,r=e.placeAfterPackage,a=e.excludePackages;if(t&&a.length>0){for(var n=0;n<u.packages.length;n+=1){var i=u.packages[n],s=i.type,l=i.zone;if(0===n&&u.isExcludeFirstPackages(s))break;if(!u.isPackageExcluded(s)){u.placeAd(n+1,l);break}}return!0}return r?u.placeAdAfterCertainPackage(r):(u.placeAd(t),!0)})),d(this,"intervalAdPlacementToPackages",(function(e){for(var t=u.currentPackageIndex;t<u.packages.length;t+=1)if("ad"!==u.packages[t].type&&(u.intervalCounter+=1,u.intervalCounter===e)){var r=u.isValidAdPlacement(t+1);if(u.isPackageExcluded(u.packages[t].type))u.intervalCounter-=1;else{if(!r)break;u.placeAd(r,u.packages[t].zone),u.intervalCounter=0}}return u.packages})),d(this,"addCustomAds",(function(e,t){return u.totalLayoutParsed+=1,u.rules&&!u.isLayoutExcluded(e.type)&&t.length&&["news","today","msnbc"].includes(u.vertical)?(u.setPackage(t),2===u.totalLayoutParsed&&u.addAdToTeaseList(),u.addCustomAdsForVertical()):t})),d(this,"addAdToTeaseList",(function(){var e=u.packages.find((function(e){return"teaseList"===e.type}));if(!e)return!1;if("today"===u.vertical)e.adAboveList=!0,e.adType=s.Z.isSorM()?"boxinline":"boxrail";else{try{e.adAboveList=u.layouts[0].packages.length>0}catch(t){e.adAboveList=!1}e.adType="boxrail"}return!0})),d(this,"addCustomAdsForVertical",(function(){for(;u.rule;){if(u.rule.isRecurring){var e=u.rule.interval;return u.intervalAdPlacementToPackages(e)}if(!u.placeAdsIntoPackages())break;u.rule=u.rules.pop()}return u.packages})),d(this,"getAd",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"boxinline";return u.adIndex+=1,o(u.adIndex.toString(),e,t)})),a||(a=t);var p=n()(c,a);p&&(this.vertical=t,this.rules=f(p),this.layouts=r,this.lastNonFullWidthLayoutIndex=l(r),this.rule=this.rules.pop(),this.totalLayoutParsed=0,this.currentPackageIndex=0,this.intervalCounter=0,this.packages=[],this.adIndex=97897689412)};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){m(e,t,r[t])}))}return e}function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=["entityPage"],x={twoUp:"twoUp",threeUp:"threeUp",fourUp:"fourUp",threeFeatured:"threeFeatured",threeFeaturedPlusList:"threeFeaturedPlusList"},k={videoPkg:"videoPkg",pancake:"pancake",sevenUp:"sevenUp",leadSectionFront:"leadSectionFront",bigStoryTakeoverPlus4:"bigStoryTakeoverPlus4",leadRectanglePlusMosaic:"leadRectanglePlusMosaic",mosaic:"mosaic"},P={globalcitizen:!0},A="threeFeaturedPlusList",_="waffle",j={boxinline:{firstSlot:4,freq:4,min:4,last:!1},boxflex:{firstSlot:3,freq:6,min:4},midresponsive:{firstSlot:27,min:27,freq:1/0,last:!0}},w=function(){function e(t,r,a){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"insertAdsIntoWaffle",(function(e,t){var r=n,a=[],i=j[t],s=i.firstSlot,l=i.freq,c=i.min,u=i.last;return n.pkgLength<c?e:(n.currIdx=0,n.lastAdIdx=-1,e.forEach((function(e){var n=r.currIdx<r.pkgLength-1||u;if(a.push(b({},e)),e&&"ad"!==e.type&&(r.currIdx+=1,r.shouldInsertAd(s,l)&&n)){var i=o(r.currIdx.toString(),1,t);a.push(i),r.lastAdIdx=r.currIdx}})),a)})),m(this,"shouldInsertAd",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return n.currIdx===e&&n.lastAdIdx<0||n.currIdx-n.lastAdIdx===t&&n.lastAdIdx>=0})),this.currIdx=0,this.lastAdIdx=-1,this.vertical=t,this.nonPackageAdsDisabled=v.includes(a),this.addCustomAds=this.parsePackages}var t,r,a;return t=e,r=[{key:"parsePackages",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=this;if(!c[this.vertical]&&!P[this.vertical]||!t.length)return t;var a=[];if(this.currIdx=0,this.lastAdIdx=-1,t[0].type===_){var n=t[0].items;this.pkgLength=n.length;var i=this.insertAdsIntoWaffle(n,"boxflex"),s=this.insertAdsIntoWaffle(i,"boxinline"),l=this.insertAdsIntoWaffle(s,"midresponsive");return[b({},t[0],{items:l})]}return t.forEach((function(e,n){var i=e.type,s=e.zone,l=e.items,c=x[i],u=i===A,d=n===t.length-1,f=[];if(c){var p=u?3:null,h=r.insertAdsIntoPackage(l,p,s,d),g=h.itemsWithAds;h.insertedAd&&(f=g)}else l.length&&(r.currIdx+=1);var m=!f.length&&!d;if(k[i]&&!d||m&&r.shouldInsertAd()){var y=o(r.currIdx.toString(),s);a.push(e,y),r.lastAdIdx=r.currIdx,r.currIdx+=1}else{var v=b({},e,{items:f.length?f:l});"ad"===i&&(v.manuallyCuratedAd=!0),a.push(v)}})),a}},{key:"insertAdsIntoPackage",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0,n=[],i=t?Math.min(t,e.length):e.length,s=!1,l=0;l<i;l+=1){var c=e[l],u=a&&l>=i-1;if(this.shouldInsertAd()&&!u){var d=o(this.currIdx.toString(),r);n.push(d),s=!0,this.lastAdIdx=this.currIdx,this.currIdx+=1}n.push(c),this.currIdx+=1}if(t){var f,p=e.slice(t);(f=n).push.apply(f,y(p))}return{itemsWithAds:n,insertedAd:s}}}],r&&g(t.prototype,r),a&&g(t,a),e}(),I={insertBoxinlineAds:function(e){var t=[];return e.forEach((function(e,r){!r||r%4||t.push({type:"ad",slot:"boxinline",key:"boxinline:".concat(r),offsetViewport:50}),t.push(e)})),t}}},63960:function(e){e.exports={cardTitle:"styles_cardTitle__OnwNs"}},54655:function(e){e.exports={embedCopyTextarea:"styles_embedCopyTextarea__SHh_n",embedFeedback:"styles_embedFeedback__PJHGS",embedCopied:"styles_embedCopied__eBSpy"}}}]);
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[11],{419:function(e,t,n){"use strict";var r=n(25),o=n(14);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=[{id:"gallery-inline-ad-desktop",componentType:"galleryDesktopInlineAd",condition:function(e){return o.a.shouldInjectGalleryInlineAds(u(u({},e),{},{injectAfterCount:e.props.galleryListDesktopAds}))},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return o.a.getConfig({localConfig:i,ruleName:"gallery-inline-ad-desktop",props:t,defaultConfig:r.a.getInlineAdConfig(t)})}},{id:"gallery-inline-ad-mobile",componentType:"galleryMobileInlineAd",condition:function(e){return o.a.shouldInjectGalleryInlineAds(u(u({},e),{},{injectAfterCount:e.props.galleryListMobileAds}))},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return o.a.getConfig({localConfig:i,ruleName:"gallery-inline-ad-mobile",props:t,defaultConfig:r.a.getMobileInlineAdConfig(t)})}}];function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=[].concat(f([{id:"gallery-dianomi-block-mobile",componentType:"galleryItemDianomiBlockMobile",condition:function(e){return o.a.shouldInjectGalleryInlineAds(a(a({},e),{},{injectAfterCount:e.props.galleryBlockMobileAds}))},component:function(e){var t=e.amp,n=e.breakpoints.mobile,i=e.dianomi,a=e.localConfig,c=void 0===a?{}:a;return o.a.getConfig({localConfig:c,ruleName:"gallery-dianomi-block-mobile",props:{amp:t,breakpoint:n,dianomi:i},defaultConfig:r.a.getGalleryDianomiBlockMobileAdConfig({amp:t,breakpoint:n,dianomi:i})})}},{id:"gallery-dianomi-block-desktop",componentType:"galleryItemDianomiBlockDesktop",condition:function(e){return o.a.shouldInjectGalleryInlineAds(a(a({},e),{},{injectAfterCount:e.props.galleryBlockDesktopAds}))},component:function(e){var t=e.breakpoints.desktop,n=e.dianomi,i=e.componentCount,a=e.localConfig,c=void 0===a?{}:a;return o.a.getConfig({localConfig:c,ruleName:"gallery-dianomi-block-desktop",props:{breakpoint:t,dianomi:n,componentCount:i},defaultConfig:r.a.getGalleryDianomiBlockDesktopAdConfig({breakpoint:t,dianomi:n,componentCount:i})})}}]),f(p));function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g;t.a=function(e){if(Array.isArray(e))return b(e)}(g=m)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(g)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},425:function(e,t,n){"use strict";var r=n(14),o=n(25);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=[{id:"list-article-inline-ad-desktop",componentType:"listArticleDesktopInlineAd",condition:function(e){return r.a.shouldInjectListArticleInlineAds(a(a({},e),{},{injectAfterCount:e.props.listArticleListDesktopAds}))},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return r.a.getConfig({localConfig:i,ruleName:"list-article-inline-ad-desktop",props:t,defaultConfig:o.a.getInlineAdConfig(t)})}},{id:"list-article-inline-ad-mobile",componentType:"listArticleMobileInlineAd",condition:function(e){return r.a.shouldInjectListArticleInlineAds(a(a({},e),{},{injectAfterCount:e.props.listArticleListMobileAds}))},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return r.a.getConfig({localConfig:i,ruleName:"list-article-inline-ad-mobile",props:t,defaultConfig:o.a.getMobileInlineAdConfig(t)})}}];function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s;t.a=function(e){if(Array.isArray(e))return u(e)}(s=l)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(s)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},437:function(e,t,n){"use strict";var r=n(14),o=n(25),i=[{id:"newsletter-mobile",componentType:"newsletterMobile",condition:function(e){return r.a.shouldInjectSubscriptionOrNewsletter({options:e,viewport:"mobile",component:"newsletter"})},component:function(e){var t=e.newsletterConfig,n=e.breakpoints,i=e.localConfig,a=void 0===i?{}:i;return r.a.getConfig({localConfig:a,ruleName:"newsletter-mobile",props:{newsletterConfig:t,breakpoints:n,viewport:"mobile"},defaultConfig:o.a.getNewsletterConfig({newsletterConfig:t,breakpoints:n,viewport:"mobile"})})},resetCurrentItemTypeCurrentCounter:!1},{id:"newsletter-desktop",componentType:"newsletterDesktop",condition:function(e){return r.a.shouldInjectSubscriptionOrNewsletter({options:e,viewport:"desktop",component:"newsletter"})},component:function(e){var t=e.newsletterConfig,n=e.breakpoints,i=e.localConfig,a=void 0===i?{}:i;return r.a.getConfig({localConfig:a,ruleName:"newsletter-desktop",props:{newsletterConfig:t,breakpoints:n,viewport:"desktop"},defaultConfig:o.a.getNewsletterConfig({newsletterConfig:t,breakpoints:n,viewport:"desktop"})})},resetCurrentItemTypeCurrentCounter:!1}];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c;t.a=function(e){if(Array.isArray(e))return a(e)}(c=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},438:function(e,t,n){"use strict";var r=n(14),o=n(25),i=[{id:"subscription-mobile",componentType:"subscriptionMobile",condition:function(e){return r.a.shouldInjectSubscriptionOrNewsletter({options:e,viewport:"mobile",component:"subscription"})},component:function(e){var t=e.promoBoxSettings,n=e.breakpoints,i=e.localConfig,a=void 0===i?{}:i;return r.a.getConfig({localConfig:a,ruleName:"subscription-mobile",props:{promoBoxSettings:t,breakpoints:n,viewport:"mobile"},defaultConfig:o.a.getSubscriptionConfig({promoBoxSettings:t,breakpoints:n,viewport:"mobile"})})},resetCurrentItemTypeCurrentCounter:!1},{id:"subscription-desktop",componentType:"subscriptionDesktop",condition:function(e){return r.a.shouldInjectSubscriptionOrNewsletter({options:e,viewport:"desktop",component:"subscription"})},component:function(e){var t=e.promoBoxSettings,n=e.breakpoints,i=e.localConfig,a=void 0===i?{}:i;return r.a.getConfig({localConfig:a,ruleName:"subscription-desktop",props:{promoBoxSettings:t,breakpoints:n,viewport:"desktop"},defaultConfig:o.a.getSubscriptionConfig({promoBoxSettings:t,breakpoints:n,viewport:"desktop"})})},resetCurrentItemTypeCurrentCounter:!1}];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c;t.a=function(e){if(Array.isArray(e))return a(e)}(c=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},439:function(e,t,n){"use strict";var r=n(14),o=n(25),i=[{id:"inline-and-side",componentType:"desktopSideAndInlineAd",condition:function(e){return r.a.shouldInjectInlineAndSideAds(e)},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return r.a.getConfig({localConfig:i,ruleName:"inline-and-side",props:t,defaultConfig:o.a.getDesktopAdsConfig(t)})},resetCurrentItemTypeCurrentCounter:!0},{id:"first-side",componentType:"desktopSideAndInlineAd",condition:function(e){return r.a.shouldInjectFirstSideAd(e)},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return r.a.getConfig({localConfig:i,ruleName:"first-side",props:t,defaultConfig:o.a.getSideAdConfig(t)})}},{id:"final-side",componentType:"desktopSideAndInlineAd",condition:function(e){return r.a.shouldInjectFinalSideAd(e)},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return r.a.getConfig({localConfig:i,ruleName:"final-side",props:t,defaultConfig:o.a.getSideAdConfig(t)})},resetCurrentItemTypeCurrentCounter:!0}];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c;t.a=function(e){if(Array.isArray(e))return a(e)}(c=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},440:function(e,t,n){"use strict";var r=n(14),o=n(25),i=[{id:"digiteka-desktop",componentType:"digitekaDesktop",condition:function(e){return r.a.shouldInjectDigiteka({options:e,viewport:"desktop"})},component:function(e){var t=e.monetising,n=e.breakpoints,i=e.localConfig,a=void 0===i?{}:i;return r.a.getConfig({localConfig:a,ruleName:"digiteka-desktop",props:{monetising:t,breakpoints:n,viewport:"desktop"},defaultConfig:o.a.getDigitekaConfig({monetising:t,breakpoints:n,viewport:"desktop"})})}},{id:"digiteka-mobile",componentType:"digitekaMobile",condition:function(e){return r.a.shouldInjectDigiteka({options:e,viewport:"mobile"})},component:function(e){var t=e.monetising,n=e.breakpoints,i=e.amp,a=e.localConfig,c=void 0===a?{}:a;return r.a.getConfig({localConfig:c,ruleName:"digiteka-mobile",props:{monetising:t,breakpoints:n,viewport:"mobile",amp:i},defaultConfig:o.a.getDigitekaConfig({monetising:t,breakpoints:n,viewport:"mobile",amp:i})})}}];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c;t.a=function(e){if(Array.isArray(e))return a(e)}(c=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},441:function(e,t,n){"use strict";var r=n(14),o=n(25);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return r.a.isBetweenTwoTextBlocks(a({},e))&&function(e){var t=e.currentRuleInjectedComponentCount,n=e.currentRuleComponentTypeWordCount,o=e.props.adSettings,i=o.numberOfWordsBetweenInlineMobileAds,c=o.numberOfWordsForFirstInjectionMobile,l=o.minNumOfWordsAfterLastInlineAdMobile;if(!i&&0!==i||!c&&0!==c||!l&&0!==l)return!1;if(0===t)return n>=c;var u=n>=i,s=r.a.getWordCountFromCurrentIdxToEnd(a({},e));return u&&s>=l}(e)},u=[{id:"mobile-inline-ads",componentType:"mobileInlineAd",condition:function(e){return l(e)},component:function(e){var t=e.componentCount,n=e.localConfig,i=void 0===n?{}:n;return r.a.getConfig({localConfig:i,ruleName:"mobile-inline-ads",props:t,defaultConfig:o.a.getMobileAdsConfig(t)})},resetCurrentItemTypeCurrentCounter:!0}];function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p;t.a=function(e){if(Array.isArray(e))return s(e)}(p=u)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(p)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},442:function(e,t,n){"use strict";var r=n(14),o=[{id:"side-content",componentType:"sideContent",condition:function(e){return function(e){var t=e.currentType,n=e.currentRuleInjectedComponentCount,o=e.injectedArray,i=e.nextType;return r.a.isBetweenTwoTextBlocks({currentType:t,nextType:i})&&function(e){var t=e.injectedArray;return 0===e.sideContentCount&&t.find((function(e){return"DESKTOP_INLINE_ADVERT"===e.type}))}({injectedArray:o,sideContentCount:n})}(e)},component:function(e){var t=e.sideContent,n=e.localConfig,o=void 0===n?{}:n;return r.a.getConfig({localConfig:o,ruleName:"side-content",props:t,defaultConfig:[{type:"SIDE_CONTENT",props:t}]})}}];function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a;t.a=function(e){if(Array.isArray(e))return i(e)}(a=o)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},443:function(e,t,n){"use strict";var r=n(14),o=n(25),i=[{id:"subscription-newsletter-mobile",componentType:"subscriptionNewsletterMobile",condition:function(e){return r.a.shouldInjectSubscriptionAndNewsletter({options:e,viewport:"mobile"})},component:function(e){var t=e.promoBoxSettings,n=e.newsletterConfig,r=e.breakpoints,i=e.localConfig,a=void 0===i?{}:i;return a["subscription-newsletter-mobile"]?a["subscription-newsletter-mobile"]({promoBoxSettings:t,newsletterConfig:n,breakpoints:r,viewport:"mobile"}):o.a.getNewsletterSubscriptionConfig({promoBoxSettings:t,newsletterConfig:n,breakpoints:r,viewport:"mobile"})},resetCurrentItemTypeCurrentCounter:!1},{id:"subscription-newsletter-desktop",componentType:"subscriptionNewsletterDesktop",condition:function(e){return r.a.shouldInjectSubscriptionAndNewsletter({options:e,viewport:"desktop"})},component:function(e){var t=e.promoBoxSettings,n=e.newsletterConfig,i=e.breakpoints,a=e.localConfig,c=void 0===a?{}:a;return r.a.getConfig({localConfig:c,ruleName:"subscription-newsletter-desktop",props:{promoBoxSettings:t,newsletterConfig:n,breakpoints:i,viewport:"desktop"},defaultConfig:o.a.getNewsletterSubscriptionConfig({promoBoxSettings:t,newsletterConfig:n,breakpoints:i,viewport:"desktop"})})},resetCurrentItemTypeCurrentCounter:!1}];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c;t.a=function(e){if(Array.isArray(e))return a(e)}(c=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},444:function(e,t,n){"use strict";var r=n(14),o=n(25),i=[{id:"tead-ads",componentType:"teads",condition:function(e){return function(e){var t=e.amp,n=e.currentRuleInjectedComponentCount,o=e.currentRuleComponentTypeWordCount,i=e.currentType,a=e.nextType,c=e.props;return t&&r.a.isBetweenTwoTextBlocks({currentType:i,nextType:a})&&r.a.isRightNumberOfWordsForTeads({currentWordCount:o,teadsCount:n,props:c})}(e)},component:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.getConfig({localConfig:e,ruleName:"tead-ads",props:{},defaultConfig:o.a.getTeadsAdConfig()})},resetCurrentItemTypeCurrentCounter:!1}];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c;t.a=function(e){if(Array.isArray(e))return a(e)}(c=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7448],{67448:function(e,o,a){"use strict";var l=a(34051),t=a.n(l),i=a(85893),n=a(67294),b=a(36456),m=a(45697),r=a.n(m),c=a(94184),s=a.n(c),p=a(29208),d=a.n(p),u=a(47015),h=a(41549),w=a(91819),f=a.n(w),g=a(46657),B=a(24023),T=a(77192),v=a(55626),A=a.n(v);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,o,a,l,t,i,n){try{var b=e[i](n),m=b.value}catch(r){return void a(r)}b.done?o(m):Promise.resolve(m).then(l,t)}function k(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function F(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function M(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function R(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{},l=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),l.forEach((function(o){M(e,o,a[o])}))}return e}function q(e,o){return!o||"object"!==O(o)&&"function"!==typeof o?y(e):o}function P(e,o){return P=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},P(e,o)}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function V(e){var o=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=C(e);if(o){var t=C(this).constructor;a=Reflect.construct(l,arguments,t)}else a=l.apply(this,arguments);return q(this,a)}}var S={entretenimiento:!0,msnbc:!0,news:!0,noticias:!0,select:!0,shows:!0,telemundo:!0,today:!0},x={default:"nbcnews",entretenimiento:"telemundocom",msnbc:"nbcuniversal-msnbc",news:"nbcnews",noticias:"telemundocom",select:"nbcuniversal-network",shows:"telemundocom",telemundo:"telemundocom",today:"nbc-today"},L={today:{android:"nbctodayappandroid",ios:"nbctodayappios"},news:{android:"nbcnewsappandroid",ios:"nbcnewsappios"},mach:{android:"nbcnewsappandroid",ios:"nbcnewsappios"},better:{android:"nbcnewsappandroid",ios:"nbcnewsappios"},think:{android:"nbcnewsappandroid",ios:"nbcnewsappios"},noticias:{android:"telemundocom-app-android",ios:"telemundocom-app-ios"},entretenimiento:{android:"telemundocom-app-android",ios:"telemundocom-app-ios"},shows:{android:"telemundocom-app-android",ios:"telemundocom-app-ios"},telemundo:{android:"telemundocom-app-android",ios:"telemundocom-app-ios"},default:"nbcnews-app"},j=function(e){!function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&P(e,o)}(b,e);var o,a,l,n=V(b);function b(){var e;return k(this,b),M(y(e=n.apply(this,arguments)),"getChromelessLoaderPublisherID",(function(){var o=e.props.vertical,a=g.Z.Android()?"android":"ios";return L[o]?L[o][a]:L.default})),M(y(e),"getLoader",(function(){var o=e.props,a=o.vertical,l=o.isChromeless,t=o.loaderLoaded,i=o.dispatch;if(!t){var n=l?e.getChromelessLoaderPublisherID():x[a]||x.default,b="loader";return e.shouldShowTaboolaFeedOnChromeless()&&(b="mobile-loader"),i((0,B.gq)()),(0,u.Z)("//cdn.taboola.com/libtrc/".concat(n,"/").concat(b,".js"))}return null})),M(y(e),"getPlacement",(function(){var o=e.getTypeFromPageSection(),a=e.props,l=a.ecommerceEnabled,t=a.isChromeless,i=a.isRail,n=a.isLiveBlog,b=a.vertical;if("today"===b&&g.Z.Android()&&t)return{};var m=e.getBreakpoint();return i&&(m=h.Z.isLorXL()&&!t?"rail":null),"today"!==b||!l||t||i?"article"===o&&n?f().news.liveBlog[m]:e.getSpecificPlacement(b,o,m):"mobile"===m?f().today.article["commerce-mobile"]:f().today.article.commerce})),M(y(e),"getSpecificPlacement",(function(e,o,a){return d()(f(),[e,o,a],null)})),M(y(e),"getTypeFromPageSection",(function(){var o=e.props,a=o.vertical,l=o.pageView,t=o.section;return"front"===l&&S[a]?""===t||("today-cover-redesign"===t||"cover"===t)?"home":"category":"card"===l||"showBlog"===l?"article":l})),M(y(e),"getBreakpoint",(function(){var o=e.props.isChromeless;return e.shouldShowTaboolaFeedOnChromeless()?h.Z.isS()?"chromeless_feed":"chromeless_tablet":o?h.Z.isS()?"chromeless_mobile":"chromeless_tablet":h.Z.isS()?"mobile":"desktop"})),M(y(e),"shouldShowTaboolaFeedOnChromeless",(function(){var o=e.props,a=o.isChromeless,l=o.vertical;return!("today"!==l||!g.Z.iOS()||!a)||"news"===l&&a})),M(y(e),"addConfig",(function(){var o=e.props,a=o.isChromeless,l=o.id,t=o.canonicalUrl,i=o.vertical,n=o.isLiveBlog,b=e.getTypeFromPageSection(),m="recipe"===b?{category:"auto"}:M({},b,"auto");if("article"===b){if(!a){var r=e.getSpecificPlacement(i,b,"rail");if(n&&(r=e.getSpecificPlacement(i,"liveBlog","rail")),r){var c=R({target_type:"mix"},r);c.container=c.container.replace("%id",l),window._taboola.push(c)}}t&&(m.url=t)}e.shouldShowTaboolaFeedOnChromeless()&&(window._taboola.mobile=[],window._taboola.mobile.push({allow_sdkless_load:!0,taboola_view_id:(new Date).getTime(),publisher:e.getChromelessLoaderPublisherID()})),window._taboola.push(m),"article"!==b&&window._taboola.push({flush:!0})})),e}return o=b,a=[{key:"componentDidMount",value:function(){var e,o=this;return(e=t().mark((function e(){var a,l,i,n,b,m,r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.props,l=a.id,i=a.isChromeless,n=a.isRail,b=a.vertical,!g.Z.Android()||"today"!==b||!i){e.next=3;break}return e.abrupt("return");case 3:if(!(m=o.getPlacement())){e.next=16;break}if((r=R({target_type:"mix"},m)).container=m.container.replace("%id",l),o.taboolaContainer.id=r.container,!n){e.next=10;break}return e.abrupt("return");case 10:return window._taboola=window._taboola||[],window._taboola.push(r),o.addConfig(),e.next=15,o.getLoader();case 15:window.performance&&"function"===typeof window.performance.mark&&window.performance.mark("tbl_ic");case 16:case"end":return e.stop()}}),e)})),function(){var o=this,a=arguments;return new Promise((function(l,t){var i=e.apply(o,a);function n(e){_(i,l,t,n,b,"next",e)}function b(e){_(i,l,t,n,b,"throw",e)}n(void 0)}))})()}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this,o=this.props,a=o.adsDisabled,l=o.id,t=o.pkgClassName,n=o.className;return a?null:(0,i.jsx)("div",{className:s()(t,A().taboola,n,"dn-print"),"data-packageid":l,children:(0,i.jsx)("div",{ref:function(o){e.taboolaContainer=o}})})}}],a&&F(o.prototype,a),l&&F(o,l),b}(n.Component);M(j,"propTypes",{dispatch:r().func.isRequired,vertical:r().string.isRequired,id:r().string,pageView:r().string.isRequired,section:r().string,canonicalUrl:r().string,isRail:r().bool,isChromeless:r().bool.isRequired,isLiveBlog:r().bool,loaderLoaded:r().bool.isRequired,className:r().oneOfType([r().string,r().array]),adsDisabled:r().bool,pkgClassName:r().string,ecommerceEnabled:r().bool}),M(j,"contextTypes",{isLiveBlog:r().bool,store:r().shape({})}),M(j,"defaultProps",{id:"1",section:null,canonicalUrl:null,isRail:!1,className:null,adsDisabled:!1,pkgClassName:"pkg taboola",ecommerceEnabled:!1,isLiveBlog:!1}),o.ZP=(0,b.$j)((function(e){var o=e.front,a=e.shared,l=e.article;return{isLiveBlog:(0,T.wr)(l&&l.content[0]),vertical:a.vertical,pageView:"card"===a.pageView?"article":a.pageView,section:a.section,isChromeless:a.isChromeless,loaderLoaded:a.taboolaLoaderLoaded,adsDisabled:o.curation.adsDisabled,taboolaFeed:a.taboolaFeed,ecommerceEnabled:l&&l.content[0]&&l.content[0].ecommerceEnabled}}))(j)},91819:function(e){"use strict";e.exports={news:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},liveBlog:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Live Blog Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},home:{desktop:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Mobile Below Homepage Thumbnails"}},category:{desktop:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"}},video:{desktop:{mode:"thumbnails-feed",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-feed-mobile",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},noticias:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},home:{desktop:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Mobile Below Homepage Thumbnails"}},category:{desktop:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"}},video:{desktop:{mode:"thumbnails-o",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-o",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},entretenimiento:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},home:{desktop:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Mobile Below Homepage Thumbnails"}},category:{desktop:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"}},video:{desktop:{mode:"thumbnails-o",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-o",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},shows:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},home:{desktop:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Mobile Below Homepage Thumbnails"}},category:{desktop:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"}},video:{desktop:{mode:"thumbnails-o",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-o",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},telemundo:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},home:{desktop:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Mobile Below Homepage Thumbnails"}},category:{desktop:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-category-thumbnails",placement:"Below Category Thumbnails"}},video:{desktop:{mode:"thumbnails-o",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-o",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},mach:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed - MACH"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-feed",placement:"Mobile Below Article - Taboola Feed - MACH"},chromeless_mobile:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},video:{desktop:{mode:"thumbnails-feed",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-feed-mobile",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},better:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed - Better"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-feed",placement:"Mobile Below Article - Taboola Feed - Better"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},video:{desktop:{mode:"thumbnails-feed",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-feed-mobile",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},think:{article:{desktop:{mode:"thumbnails-o",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed - Think"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-feed-mobile",placement:"Mobile Below Article - Taboola Feed - Think"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},video:{desktop:{mode:"thumbnails-feed",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-feed-mobile",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},today:{article:{desktop:{mode:"thumbnails-h",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-i",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"},"commerce-mobile":{mode:"thumbnails-i",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed - Commerce"},commerce:{mode:"thumbnails-h",container:"taboola-below-article-feed",placement:"Below Article - Taboola Feed - Commerce"}},home:{desktop:{mode:"thumbnails-h",container:"taboola-below-homepage-thumbnails---bento",placement:"Below Homepage Thumbnails - Bento"},mobile:{mode:"thumbnails-i",container:"taboola-mobile-below-homepage-thumbnails---bento",placement:"Mobile Below Homepage Thumbnails - Bento"}},recipe:{desktop:{mode:"thumbnails-h",container:"taboola-below-recipe---taboola-feed",placement:"Below Recipe - Taboola Feed"},mobile:{mode:"thumbnails-i",container:"taboola-mobile-below-recipe---taboola-feed",placement:"Mobile Below Recipe - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-recipe-thumbnails",placement:"App Below Recipe Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-recipe-thumbnails",placement:"Mobile App Below Recipe Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-recipe-thumbnails",placement:"App tblt Below Recipe Thumbnails"}},video:{desktop:{mode:"thumbnails-feed-4x1",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-feed-mobile",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},msnbc:{article:{desktop:{mode:"thumbnails-feed-2x1",container:"taboola-below-article---taboola-feed",placement:"Below Article - Taboola Feed"},rail:{mode:"thumbnails-rr",container:"taboola-right-rail-thumbnails-%id",placement:"Right Rail Thumbnails - Bento"},mobile:{mode:"thumbnails-feed-2x1",container:"taboola-mobile-below-article---taboola-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}},home:{desktop:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"},mobile:{mode:"thumbnails-q",container:"taboola-below-homepage-thumbnails",placement:"Below Homepage Thumbnails"}},video:{desktop:{mode:"thumbnails-feed",container:"taboola-below-video-thumbnails",placement:"Below Video Taboola Feed"},mobile:{mode:"thumbnails-feed-mobile",container:"taboola-mobile-below-video-thumbnails",placement:"Mobile Below Video Taboola Feed"}}},select:{article:{desktop:{mode:"thumbnails-a",container:"taboola-below-article---taboola-feed---select",placement:"Below Article - Taboola Feed - Select"},mobile:{mode:"thumbnails-p",container:"taboola-below-article-mobile-feed",placement:"Mobile Below Article - Taboola Feed"},chromeless_feed:{mode:"thumbnails-feed-mobile",container:"taboola-app-below-article-thumbnails",placement:"App Below Article Thumbnails"},chromeless_mobile:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"Mobile App Below Article Thumbnails"},chromeless_tablet:{mode:"thumbs-app",container:"taboola-app-below-article-thumbnails",placement:"App tblt Below Article Thumbnails"}}}}},55626:function(e){e.exports={taboola:"styles_taboola__xgzXI"}}}]);
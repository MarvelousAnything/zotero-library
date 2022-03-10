/*
* Version: 1.0.6.3 
* Build: V.1.0.6.3-20200410.1 
*/ 

 window.loaderVersion = "1.0.6.3";

 window.loaderBuild = "V.1.0.6.3-20200410.1";function PluginInitOverride(e,t,r,n){this.plugin=t,this.overrides=e,this.siteCode=r,this.layoutCode=n}PluginInitOverride.prototype.findCurrentPlugin=function(e){if(e&&e.plugins)for(var t=e.plugins.length,r=0;r<t;r++)if(pluginSettings=e.plugins[r],pluginSettings.name==this.plugin.name)return pluginSettings.initOptions;return null},PluginInitOverride.prototype.getTypeInits=function(e,t,r){var n={};if(e&&e[t]&&e[t][r]){var o=this.findCurrentPlugin(e[t][r]);o&&$.extend(!0,n,o)}return n},PluginInitOverride.prototype.getCustomInits=function(){var n={},o=this;return this.overrides.forEach(function(e){var t=o.getTypeInits(e,"siteCodes",o.siteCode),r=o.getTypeInits(e,"customLayouts",o.layoutCode);$.extend(!0,n,t,r)}),n};var MG2Loader=function(a){var u,l,p="0123456789ABCDEFGHIJKLMNOPQabcdefghijklmnopqrstuvwxyz",i=2,s=3,c={ResourceValidationError:"ResourceValidationError",ResourceWasNotLoaded:"ResourceWasNotLoaded",OptionsHaveDuplicateURLs:"OptionsHaveDuplicateURLs",ConfigFileNotFound:"ConfigFileNotFound",JsValidationError:"JsValidationError"},d=null,h={defaultResourceURLs:{FP:"https://fp-cdn.azureedge.net/",DL:"https://g2insights-cdn.azureedge.net/",NXT:"https://cdn.czx5eyk0exbhwp43ya.biz/",FZ:"https://flittz-cdn.azureedge.net/"},fileNames:{FP:"fp",DL:"g2insights",NXT:"t8y9347t",FZ:"Flittz"},blockAttempts:2,environment:"__ENVIRONMENT__",appInsightsKey:"__APP_INSIGHTS_KEY__",globalNames:{FZ:String.fromCharCode.apply(null,[70,108,105,116,116,122]),NXT:String.fromCharCode.apply(null,[67,111,110,110,101,120,116]),FP:String.fromCharCode.apply(null,[70,105,110,103,101,114,112,114,105,110,116]),DL:String.fromCharCode.apply(null,[77,71,50,73,110,115,105,103,104,116,115])}},f={},m=["FP","DL","NXT","FZ"],r="__JSON_URL__",g={localhost:"localhost",dev:"dev",test:"test",test20:"test20",demo:"demo",stage:"stage",preprod:"preprod",prod:"prod"},C={default:1,dynamic:2,predefined:3},y=null,v=null,e=[x,function(e){for(var t,r,n,o,i="",s=0;s<e.length;s++)t=e.substring(s,s+1),r=p.indexOf(t),o=p.substring(n=1^r,1+n),i+=o;return i},function(e){for(var t=ifPC=0,r=0,n="Secret key",o="",i=0;i<n.length;i++)t+=n.charCodeAt(i);maxPCmod=t;for(i=0;i<e.length;i++){r==n.length&&(r=0),maxPCmod<1&&(maxPCmod=t+ifPC);var s=maxPCmod%n.charCodeAt(r),a=e.charCodeAt(i)+s;ifPC+=maxPCmod%n.charCodeAt(r),maxPCmod-=n.charCodeAt(r),r++,o+=parseInt(a/52)+p.charAt(parseInt(a%52))}return o},function(e){return e[0]+e[e.length-1]+e.length+e[e.length-1]+e[0]+"rr"+e.length+"j"},function(e){var t="";if(e.split("").forEach(function(e){t+=String.fromCharCode(e.charCodeAt()+2)+e+String.fromCharCode(e.charCodeAt()-2)}),(t=t.replace(/[^a-z0-9]/gi,"")).length<8)for(var r=t.length;r<8;r++)t+=String.fromCharCode(96+2*r);return t}];function R(e,t){for(var r=e.length,n=0;n<r;n++){var o=e[n].initOptions;if(o&&o.hasOwnProperty(t))return o[t]}return null}function L(e,t){var r,n,o;e.name!=m[i]&&e.name!=m[s]||(r=e,n=t.css,o=a("<link>"),a("head").append(o),o.attr({id:r.name+"_CSS",rel:"stylesheet",type:"text/css",href:n})),e.initOptions.environment!==g.localhost&&(e.initOptions.resourceUrl=t.resourceUrl.path+t.environmentSegment+"/"),t.resourceUrl.saveAsCurrent()}function U(){f.plugins.forEach(function(e){var t=f.globalNames[e.name];window[t]&&window[t].init&&window[t].init(e.initOptions)})}function N(e){this.name="string"==typeof e.name?e.name.toUpperCase():"",this.initOptions=e.initOptions||{},this.environment=this.getEnvironment(),this.version=this.getVersion(),this.minified=this.isMinified(),this.required=!0===e.required,this.fileName=f.fileNames[this.name],this.mode=this.getMode(),this.resourceURLs=[],this.loadAttempts=f.loadAttempts,this.usedLoadAttempts=0,this.nextResourceUrlIndex=0,this.globalName=f.globalNames[this.name],this.mode===C.predefined&&(this.resourceURLs=f.predefinedResourceURLs[this.name]),this.mode===C.dynamic&&(this.resourceURLs=this.generateCDNsByCode(f.xCode)),this.mode===C.default?this.loadAttempts=1:this.loadAttempts=this.loadAttempts||this.resourceURLs.length+1}function O(){this.storageKey="nxt_ldr_rsrc_rls",this.defaulLoaderData={cRs:{},bRs:{},xC:null}}function E(e,t){var r;t=t||{},e=e||"",this.path=(r=e)&&r.lastIndexOf("/")!==r.length-1?r+"/":r,this.index=t.index,this.isDefault=t.isDefault||!1,this.pluginName=t.pluginName}function _(e){if(e||f&&f.appInsightsKey)try{y=function(e){function t(t){u[t]=function(){var e=arguments;u.queue=u.queue||[],u.queue.push(function(){u[t].apply(u,e)})}}var s,a,u={config:e},r=document,n=window,o="AuthenticatedUserContext",i="TrackEvent",l="TrackPage",p=r.createElement("script");p.src=e.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",r.getElementsByTagName("script")[0].parentNode.appendChild(p);try{u.cookie=r.cookie}catch(e){}for(u.queue=[],u.version="1.0",s=["Event","Exception","Metric","PageView","Trace","Dependency"];s.length;)t("track"+s.pop());return t("set"+o),t("clear"+o),t("start"+i),t("stop"+i),t("start"+l),t("stop"+l),t("flush"),e.disableExceptionTracking||(t("_"+(s="onerror")),a=n[s],n[s]=function(e,t,r,n,o){var i=a&&a(e,t,r,n,o);return!0!==i&&u["_"+s](e,t,r,n,o),i}),u}({instrumentationKey:e||f.appInsightsKey,disableExceptionTracking:!0,disableAjaxTracking:!0,maxAjaxCallsPerView:0}),window.appInsights=y}catch(e){y=null}else y=null}function x(e){return btoa(e).replace(/[^a-z0-9]/gi,"")}function A(r){return r.appInsightsKey||delete r.appInsightsKey,"number"!=typeof r.blockAttempts&&null!==r.blockAttempts&&delete r.blockAttempts,"number"!=typeof r.loadAttempts&&null!==r.loadAttempts&&delete r.loadAttempts,"boolean"!=typeof r.randomURLChoosing&&delete r.randomURLChoosing,r.fileNames&&a.each(r.fileNames,function(e,t){r.fileNames[e]||delete r.fileNames[e]}),r.defaultResourceURLs&&a.each(r.defaultResourceURLs,function(e,t){r.defaultResourceURLs[e]||delete r.defaultResourceURLs[e]}),r.predefinedResourceURLs&&(a.each(r.predefinedResourceURLs,function(e,t){r.predefinedResourceURLs&&r.predefinedResourceURLs[e].length||delete r.predefinedResourceURLs[e]}),a.isEmptyObject(r.predefinedResourceURLs)&&(r.predefinedResourceURLs=null)),r}function t(e){return("string"==typeof e||e instanceof String)&&g[e.toLowerCase()]}function o(e){return String.fromCharCode(e)}return N.prototype.getSource=function(){var e=null,t=this.minified?".min":"";e=this.mode===C.default?this.getDefaultResourceUrl():this.getResourceUrl();var r=this.mode!==C.dynamic||e.isDefault?this.environment:x(this.environment),n=this.mode!==C.dynamic||e.isDefault?this.version:x(this.version),o=this.initOptions&&this.initOptions.xCode?this.initOptions.xCode:"";return{resourceUrl:e,js:e.path+r+"/"+n+"/"+this.fileName+t+".js?"+o,css:e.path+r+"/"+n+"/"+this.fileName+t+".css?"+o,environmentSegment:r,versionSegment:n}},N.prototype.getVersion=function(){return this.initOptions.clientCode||this.initOptions.version},N.prototype.getEnvironment=function(){return t(f.environment)?f.environment.toLowerCase():t(this.initOptions.environment)?this.initOptions.environment.toLowerCase():g.prod},N.prototype.getMode=function(){var e=f.predefinedResourceURLs?f.predefinedResourceURLs[this.name]:null;return e&&Array.isArray(e)&&0<e.length?C.predefined:!f.predefinedResourceURLs&&f.xCode?C.dynamic:C.default},N.prototype.isMinified=function(){return this.environment===g.demo||this.environment===g.stage||this.environment===g.prod},N.prototype.validate=function(){this.validateVersion(),this.validateName(),this.validateURLs()},N.prototype.validateVersion=function(){if(!this.initOptions.clientCode&&!this.initOptions.version)throw{name:"nxtError",message:"Please, set clientCode or version property into InitOptins object! Plugin name: "+this.name+". "}},N.prototype.validateName=function(){if(!this.name)throw{name:"nxtError",message:"Please, set name property into plugin options. "}},N.prototype.validateURLs=function(){this.resourceURLs=this.resourceURLs.filter(function(e){return t=e,new RegExp("((http|https)(://))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(/{1}[a-zA-Z0-9]+)*/?","i").test(t);var t});var t=this.resourceURLs.map(function(e){return{count:1,url:e}}).reduce(function(e,t){return e[t.url]=(e[t.url]||0)+t.count,e},{}),e=Object.keys(t).filter(function(e){return 1<t[e]});0<e.length&&y&&y.trackEvent(c.OptionsHaveDuplicateURLs,{plugin:this.name,duplicates:e.toString()})},N.prototype.generateCDNsByCode=function(r){return this.xCodeCDNs=[],e.forEach(function(e){var t="https://cdn."+e(r)+".com/";this.xCodeCDNs.push(t)}.bind(this)),this.xCodeCDNs},N.prototype.getResourceUrl=function(){var e=this.getStoredResourceUrl();return e.path||((e=f.randomURLChoosing?this.resourceURLs.length!=this.usedLoadAttempts?this.getRandomResourceUrl():this.getDefaultResourceUrl():this.getConsistentResourceUrl()).path||(e=this.getDefaultResourceUrl()),e.isDefault&&!e.index&&(e.index=this.resourceURLs.length),this.nextResourceUrlIndex=e.index+1),e},N.prototype.getStoredResourceUrl=function(){v.getStoredData();var e=(v.getStoredData().cRs||{})[this.name],t=void 0!==e?e.charCodeAt():null,r="",n=!1;return t===this.resourceURLs.length?(r=this.getDefaultResourceUrl().path,n=!0):t&&(r=this.resourceURLs[t]),new E(r,{index:t,isDefault:n,pluginName:this.name})},N.prototype.getRandomResourceUrl=function(){for(var e,t,r,n=null,o=0;o<this.resourceURLs.length;o++)if(t=0,r=this.resourceURLs.length-1,e=Math.floor(Math.random()*(r-t+1))+t,!(n=new E(this.resourceURLs[e],{index:e,pluginName:this.name})).checkBlock())return n;return new E},N.prototype.getConsistentResourceUrl=function(){for(var e=null,t=this.nextResourceUrlIndex;t<this.resourceURLs.length;t++)if(!(e=new E(this.resourceURLs[t],{index:t,pluginName:this.name})).checkBlock())return e;return new E},N.prototype.getDefaultResourceUrl=function(){return new E(f.defaultResourceURLs[this.name],{isDefault:!0,pluginName:this.name,index:this.resourceURLs.length})},N.prototype.hasUnblockedUrls=function(){var e=!1;if(this.mode===C.default)return e;for(var t=v.getStoredData().bRs[this.name],r=0;r<this.resourceURLs.length;r++){var n=t?t[o(r)]:null;if(!n||n!==f.blockAttempts){e=!0;break}}return e},O.prototype.getStoredData=function(){try{return JSON.parse(localStorage.getItem(this.storageKey))||this.defaulLoaderData}catch(e){return console.error(e),this.defaulLoaderData}},O.prototype.storeData=function(e){try{localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(e){console.error(e)}},O.prototype.checkUpdates=function(e){var t=this.getStoredData();t.xC!==e&&(t={xC:e,cRs:{},bRs:{}},this.storeData(t))},O.prototype.deleteCurrentResource=function(e){var t=v.getStoredData();t.cRs&&(delete t.cRs[e],v.storeData(t))},E.prototype.saveAsCurrent=function(){var e=v.getStoredData();e.cRs[this.pluginName]=o(this.index),v.storeData(e)},E.prototype.saveAsBlocked=function(){var e=v.getStoredData(),t=o(this.index);e.bRs[this.pluginName]||(e.bRs[this.pluginName]={}),e.bRs[this.pluginName][t]||(e.bRs[this.pluginName][t]=0),e.bRs[this.pluginName][t]+=1,v.storeData(e)},E.prototype.checkBlock=function(){var e=v.getStoredData();return e.bRs&&e.bRs[this.pluginName]&&e.bRs[this.pluginName][o(this.index)]>=f.blockAttempts},{init:function(s){if(!s||!s.plugins||!s.plugins.length)throw{name:"nxtError",message:"Plugins are required for loader. Please, specify at least one plugin for downloading. "};function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return s.appInsightsKey&&_(s.appInsightsKey),d=e()+e()+e()+e()+e()+e()+e()+e(),function(){deferredResources=a.Deferred();var e={url:"https://polyfill.io/v3/polyfill.min.js?flags=gated&features=es5%2CCustomEvent%2CArray.from%2CArray.isArray%2CArray.prototype.filter%2CArray.prototype.find%2CArray.prototype.findIndex%2CArray.prototype.forEach%2CArray.prototype.indexOf%2CArray.prototype.keys%2CArray.prototype.lastIndexOf%2CArray.prototype.map%2CArray.prototype.reduce%2CDate.prototype.toISOString%2CDocumentFragment%2CDocumentFragment.prototype.append%2CDocumentFragment.prototype.prepend%2CElement%2CElement.prototype.after%2CElement.prototype.append%2CElement.prototype.before%2CElement.prototype.classList%2CElement.prototype.cloneNode%2CElement.prototype.closest%2CElement.prototype.dataset%2CElement.prototype.matches%2CElement.prototype.placeholder%2CElement.prototype.prepend%2CElement.prototype.remove%2CElement.prototype.replaceWith%2CElement.prototype.toggleAttribute%2CEvent%2CJSON%2CMap%2CNumber.parseInt%2CNumber.parseFloat%2CObject.assign%2CObject.create%2CObject.defineProperties%2CObject.defineProperty%2CObject.entries%2CObject.getOwnPropertyDescriptor%2CObject.getOwnPropertyNames%2CObject.is%2CObject.keys%2CObject.values%2CPromise%2CPromise.prototype.finally%2CSet%2CString.prototype.trim%2CXMLHttpRequest%2Cdocument.getElementsByClassName%2Cdocument.currentScript%2Cdocument.querySelector%2Cfetch%2CgetComputedStyle%2ClocalStorage%2CArray.prototype.some%2CDate.now%2CEvent.focusin%2CEventSource%2CFunction.prototype.bind%2CFunction.prototype.name%2CHTMLDocument%2CNodeList.prototype.forEach%2CNodeList.prototype.%40%40iterator%2CNode.prototype.contains%2CObject.getPrototypeOf%2CObject.setPrototypeOf%2CRegExp.prototype.flags%2CString.prototype.%40%40iterator%2CString.prototype.startsWith%2Cconsole%2Cconsole.debug%2Cconsole.error%2Cconsole.info%2Cconsole.log%2Cdocument%2Cdocument.head%2Cdocument.visibilityState%2Clocation.origin%2CrequestIdleCallback%2Cscreen.orientation%2CmatchMedia%2CURL",crossOrigin:!0,dataType:"script",cache:!0,ifModified:!0,async:!1,success:function(){deferredResources.resolve()},error:function(e){deferredResources.resolve()}};return a.ajax(e),deferredResources.promise()}().then(function(){return e=s.CONFIG_URL,t=e||r,a.ajax({url:t,cache:!1,ifModified:!0,crossOrigin:!0}).then(function(e){return a.when(e)},function(){return y||_(h.appInsightsKey),y&&y.trackEvent(c.ConfigFileNotFound,{configUrl:t}),a.when({})}).then(function(e){LoaderConfig=e;var n,o,t,i,r=a.extend(!0,f,h,A(e),A(s));return r.plugins=function(i,e){e&&e.forEach(function(e){var t,r,n,o=(t=i,r=e.name,t.forEach(function(e,t){if(e.name==r)return n=t,!1}),n);o&&i&&i[o]&&a.extend(!0,i[o].initOptions,e.initOptions)});return i}(s.plugins,e.plugins),u=R(r.plugins,"siteCode"),l=R(r.plugins,"layoutCode")||u,f=r,y||_(),o=[],(n=f).plugin={},n.plugins.forEach(function(e){var t;e.initOptions.sessionId=d,e.initOptions.siteCode=e.initOptions.siteCode||u,e.initOptions.layoutCode=e.initOptions.layoutCode||l,(t=e)&&t.initOptions&&t.initOptions.environment||(e.initOptions.environment=f.environment);var r=new N(e);try{r.validate(),o.push(r),n.plugin[r.name]=r}catch(e){y&&y.trackEvent(c.ResourceValidationError,{plugin:r.name,attempt:r.usedLoadAttempts})}}),n.plugins=o,(v=new O).checkUpdates(f.xCode),t=f.plugins,i=[],t.forEach(function(e){if(LoaderConfig.overrides&&0<LoaderConfig.overrides.length){var t=new PluginInitOverride(LoaderConfig.overrides,e,u,l).getCustomInits();a.extend(!0,e.initOptions,t)}var r=e.getSource();i.push(function n(o,i,s){s=s||a.Deferred();var e={url:i.js,crossOrigin:!0,dataType:"script",cache:!0,ifModified:!0,success:function(){L(o,i),s.resolve()},error:function(e){if(200==e.status)L(o,i),y&&y.trackEvent(c.JsValidationError,{plugin:o.name,url:i.js}),s.resolve();else{i.resourceUrl.isDefault||0!==e.status||i.resourceUrl.saveAsBlocked(),i.resourceUrl.isDefault&&(o.nextResourceUrlIndex=0),v.deleteCurrentResource(o.name);var t=(!i.resourceUrl.isDefault||i.resourceUrl.isDefault&&o.hasUnblockedUrls())&&o.loadAttempts>o.usedLoadAttempts;if(t){var r=o.getSource();n(o,r,s)}else o.required?s.reject():s.resolve();y&&y.trackEvent(c.ResourceWasNotLoaded,{plugin:o.name,url:i.js,attempt:o.usedLoadAttempts,statusCode:e.status})}}};return a.fn.jquery.split(".")[0]<2&&delete e.dataType,a.ajax(e),o.usedLoadAttempts+=1,s.promise()}(e,r))}),a.when.apply(a,i).then(U)});var e,t})},GetVersionInfo:function(){return"Version: "+window.loaderVersion+", Build: "+window.loaderBuild}}}(jQuery);
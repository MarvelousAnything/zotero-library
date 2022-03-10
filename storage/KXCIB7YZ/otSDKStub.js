var OneTrustStub=function(e){"use strict";var t,o,i,n,a,r,s,l,c,p,u,d,m,h,g,f,b,A,y,v,C,L,S,I,T,D,R,w,B,_,E,P,G,U,O,k,F,V,x,N,H,M,j,z,K,q,W,J,Y,Q,X,Z,$,ee=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.optanonHostData=[],this.genVendorsData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}};(o=t=t||{})[o.Unknown=0]="Unknown",o[o.BannerCloseButton=1]="BannerCloseButton",o[o.ConfirmChoiceButton=2]="ConfirmChoiceButton",o[o.AcceptAll=3]="AcceptAll",o[o.RejectAll=4]="RejectAll",o[o.BannerSaveSettings=5]="BannerSaveSettings",o[o.ContinueWithoutAcceptingButton=6]="ContinueWithoutAcceptingButton",(n=i=i||{})[n.Purpose=1]="Purpose",n[n.SpecialFeature=2]="SpecialFeature",(r=a=a||{}).Legal="legal",r.UserFriendly="user_friendly",(l=s=s||{}).Top="top",l.Bottom="bottom",(p=c=c||{})[p.Banner=0]="Banner",p[p.PrefCenterHome=1]="PrefCenterHome",p[p.VendorList=2]="VendorList",p[p.CookieList=3]="CookieList",(d=u=u||{})[d.RightArrow=39]="RightArrow",d[d.LeftArrow=37]="LeftArrow",(h=m=m||{}).AfterTitle="AfterTitle",h.AfterDescription="AfterDescription",h.AfterDPD="AfterDPD",(f=g=g||{}).PlusMinus="Plusminus",f.Caret="Caret",f.NoAccordion="NoAccordion",(A=b=b||{}).Consent="Consent",A.LI="LI",A.AddtlConsent="AddtlConsent",(v=y=y||{}).Iab1Pub="eupubconsent",v.Iab2Pub="eupubconsent-v2",v.Iab1Eu="euconsent",v.Iab2Eu="euconsent-v2",(L=C=C||{})[L.Disabled=0]="Disabled",L[L.Consent=1]="Consent",L[L.LegInt=2]="LegInt",(I=S=S||{})[I["Banner - Allow All"]=1]="Banner - Allow All",I[I["Banner - Reject All"]=2]="Banner - Reject All",I[I["Banner - Close"]=3]="Banner - Close",I[I["Preference Center - Allow All"]=4]="Preference Center - Allow All",I[I["Preference Center - Reject All"]=5]="Preference Center - Reject All",I[I["Preference Center - Confirm"]=6]="Preference Center - Confirm",(D=T=T||{}).Active="1",D.InActive="0",(w=R=R||{}).Host="Host",w.GenVendor="GenVen",(_=B=B||{})[_.Host=1]="Host",_[_.GenVen=2]="GenVen",_[_.HostAndGenVen=3]="HostAndGenVen",(P=E=E||{})[P.minDays=1]="minDays",P[P.maxDays=30]="maxDays",P[P.maxYear=31536e3]="maxYear",P[P.maxSecToDays=86400]="maxSecToDays",(U=G=G||{})[U.RTL=0]="RTL",U[U.LTR=1]="LTR",(k=O=O||{})[k.GoogleVendor=1]="GoogleVendor",k[k.GeneralVendor=2]="GeneralVendor",(V=F=F||{})[V.Days=1]="Days",V[V.Weeks=7]="Weeks",V[V.Months=30]="Months",V[V.Years=365]="Years",(N=x=x||{}).Checkbox="Checkbox",N.Toggle="Toggle",(M=H=H||{}).SlideIn="Slide_In",M.FadeIn="Fade_In",M.RemoveAnimation="Remove_Animation",(z=j=j||{}).Link="Link",z.Icon="Icon",(q=K=K||{}).consent="consent",q.set="set",(J=W=W||{}).update="update",J.default="default",J.ads_data_redaction="ads_data_redaction",(Q=Y=Y||{}).analytics_storage="analytics_storage",Q.ad_storage="ad_storage",Q.functionality_storage="functionality_storage",Q.personalization_storage="personalization_storage",Q.security_storage="security_storage",Q.region="region",Q.wait_for_update="wait_for_update",(Z=X=X||{}).granted="granted",Z.denied="denied";var te="geo",oe="otpreview",ie=(($={})[F.Days]="PCenterVendorListLifespanDay",$[F.Weeks]="LfSpnWk",$[F.Months]="PCenterVendorListLifespanMonth",$[F.Years]="LfSpnYr",ne.prototype.camelize=function(e){return e.split("-").map(function(e,t){return 0===t?e:e[0].toUpperCase()+e.slice(1)}).join("")},ne.prototype.strToObj=function(e){for(var t={},o=e.split(";").map(function(e){return e.trim()}),i=0,n=void 0;i<o.length;++i)if(/:/.test(o[i])){if(!(n=o[i].split(/:(.+)/))[1])return null;t[this.camelize(n[0])]=n[1].trim()}return t},ne);function ne(){var e=this;this.implementThePolyfill=function(){var n=e,a=Element.prototype.setAttribute;return Element.prototype.setAttribute=function(e,t){if("style"!==e.toLowerCase()&&a.apply(this,[e,t]),"style"===e.toLowerCase()){this.removeAttribute("style");var o=n.strToObj(t);for(var i in o)this.style[i]=o[i]}},!0}}function ae(e,t,o){void 0===o&&(o=!1);function i(e){if(!e)return null;var t=e.trim();return";"!==t.charAt(t.length-1)&&(t+=";"),t.trim()}var a=i(e.getAttribute("style")),r=i(t),n="";n=o&&a?function(){for(var e=a.split(";").concat(r.split(";")).filter(function(e){return 0!==e.length}),t="",o="",i=e.length-1;0<=i;i--){var n=e[i].substring(0,e[i].indexOf(":")).trim();t.indexOf(n)<0&&(t+=n,o+=e[i]+";")}return o}():r,e.setAttribute("style",n)}var re=(se.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.setStubScriptElement(),this.setOTDataLayer(),this.updateGtmMacros(),this.getParam(),this.fetchBannerSDKDependency(),this.captureNonce()},se.prototype.captureNonce=function(){this.nonce=ee.stubScriptElement.nonce||ee.stubScriptElement.getAttribute("nonce")||null},se.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.crossOrigin=ee.stubScriptElement.getAttribute("crossorigin")||null,this.otFetch(ee.bannerDataParentURL,this.getLocation.bind(this))},se.prototype.getLocation=function(e){var t=e&&e.TenantFeatures;if(t&&t.CookieV2CSP&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new ie).implementThePolyfill()),!e.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(e);var o=window;if(o.OneTrust&&o.OneTrust.geolocationResponse){var i=o.OneTrust.geolocationResponse;this.setGeoLocation(i.countryCode,i.stateCode),this.addBannerSDKScript(e)}else{var n=this.readCookieParam(ee.optanonCookieName,ee.geolocationCookiesParam);if(n||e.SkipGeolocation){var a=n.split(";")[0],r=n.split(";")[1];this.setGeoLocation(a,r),this.addBannerSDKScript(e)}else this.getGeoLocation(e)}},se.prototype.getGeolocationURL=function(e){e.TenantFeatures;var t=""+ee.stubScriptElement.getAttribute("src").split(ee.stubFileName)[0]+e.Version;if(new RegExp("^file://","i").test(t)&&e.MobileSDK){var o="/"+e.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js";return ee.storageBaseURL+o}return e.GeolocationUrl},se.prototype.geoLocationJsonCallback=function(e,t){t&&this.setGeoLocation(t.country,t.state),this.addBannerSDKScript(e)},se.prototype.getGeoLocation=function(e){var t=this.getGeolocationURL(e);this.otFetch(t,this.geoLocationJsonCallback.bind(this,e),!0)},se.prototype.setOTDataLayer=function(){var e="data-dLayer-ignore",t=ee.stubScriptElement.hasAttribute(e),o=ee.stubScriptElement.getAttribute(e),i=t&&"true"===o||t&&""===o;this.otDataLayer={ignore:i,name:ee.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},se.prototype.setGeoLocation=function(e,t){void 0===t&&(t=""),ee.userLocation={country:e,state:t}},se.prototype.otFetch=function(e,t,o){if(void 0===o&&(o=!1),new RegExp("^file://","i").test(e))this.otFetchOfflineFile(e,t);else{ee.mobileOnlineURL.push(e);var i=new XMLHttpRequest;i.onload=function(){t(JSON.parse(this.responseText))},i.onerror=function(){t()},i.open("GET",e),o&&i.setRequestHeader("accept","application/json"),i.send()}},se.prototype.otFetchOfflineFile=function(e,t){var o=(e=e.replace(".json",".js")).split("/"),i=o[o.length-1].split(".js")[0];this.jsonp(e,function(){t(window[i])})},se.prototype.jsonp=function(e,t){var o=document.createElement("script");o.setAttribute("src",e),this.nonce&&o.setAttribute("nonce",this.nonce),o.async=!0,o.type="text/javascript",this.crossOrigin&&o.setAttribute("crossorigin",this.crossOrigin),document.getElementsByTagName("head")[0].appendChild(o),new RegExp("^file://","i").test(e)||ee.mobileOnlineURL.push(e),t&&(o.onload=o.onerror=function(){t()})},se.prototype.getRegionSet=function(e){var t,o,i,n=ee.userLocation,a=e.RuleSet.filter(function(e){return!0===e.Default});if(!n.country&&!n.state)return a&&0<a.length?a[0]:null;for(var r=n.state.toLowerCase(),s=n.country.toLowerCase(),l=0;l<e.RuleSet.length;l++)if(!0===e.RuleSet[l].Global)i=e.RuleSet[l];else{var c=e.RuleSet[l].States;if(c[s]&&0<=c[s].indexOf(r)){o=e.RuleSet[l];break}0<=e.RuleSet[l].Countries.indexOf(s)&&(t=e.RuleSet[l])}return o||t||i},se.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData(),this.initializeHostData(),this.initializeGenVenData()},se.prototype.initializeGroupData=function(){var e=this.readCookieParam(ee.optanonCookieName,"groups");e&&(ee.optanonHtmlGroupData=this.deserialiseStringToArray(e))},se.prototype.initializeHostData=function(){var e=this.readCookieParam(ee.optanonCookieName,"hosts");e&&(ee.optanonHostData=this.deserialiseStringToArray(e))},se.prototype.initializeGenVenData=function(){var e=this.readCookieParam(ee.optanonCookieName,"genVendors");e&&(ee.genVendorsData=this.deserialiseStringToArray(e))},se.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},se.prototype.validateIABGlobalScope=function(){var e=this.readCookieParam(ee.optanonCookieName,ee.oneTrustIsIABCrossConsentEnableParam);e?"true"===e?(ee.hasIABGlobalScope=!0,ee.isStubReady=!1):(ee.hasIABGlobalScope=!1,ee.IABCookieValue=this.getCookie(ee.oneTrustIABCookieName)):ee.isStubReady=!1},se.prototype.validateIABGDPRApplied=function(){var e=this.readCookieParam(ee.optanonCookieName,ee.geolocationCookiesParam).split(";")[0];e?this.isBoolean(e)?ee.oneTrustIABgdprAppliesGlobally="true"===e:ee.oneTrustIABgdprAppliesGlobally=0<=ee.EUCOUNTRIES.indexOf(e):ee.isStubReady=!1},se.prototype.isBoolean=function(e){return"true"===e||"false"===e},se.prototype.readCookieParam=function(e,t){var o,i,n,a,r=this.getCookie(e);if(r){for(i={},n=r.split("&"),o=0;o<n.length;o+=1)a=n[o].split("="),i[decodeURIComponent(a[0])]=decodeURIComponent(a[1]).replace(/\+/g," ");return t&&i[t]?i[t]:t&&!i[t]?"":i}return""},se.prototype.getCookie=function(e){if(this.isAmp){var t=JSON.parse(window.localStorage.getItem(this.domainId))||{};if(t)return t[e]||null}var o,i,n=e+"=",a=document.cookie.split(";");for(o=0;o<a.length;o+=1){for(i=a[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null},se.prototype.updateGtmMacros=function(){var e,t=[];for(e=0;e<ee.optanonHtmlGroupData.length;e++)this.endsWith(ee.optanonHtmlGroupData[e],":1")&&t.push(ee.optanonHtmlGroupData[e].replace(":1",""));for(e=0;e<ee.optanonHostData.length;e++)this.endsWith(ee.optanonHostData[e],":1")&&t.push(ee.optanonHostData[e].replace(":1",""));for(e=0;e<ee.genVendorsData.length;e++)this.endsWith(ee.genVendorsData[e],":1")&&t.push(ee.genVendorsData[e].replace(":1",""));var o=","+this.serialiseArrayToString(t)+",";window.OnetrustActiveGroups=o,window.OptanonActiveGroups=o;var i=window;this.otDataLayer.ignore||void 0===i[this.otDataLayer.name]?this.otDataLayer.ignore||(i[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:o},{event:"OptanonLoaded",OptanonActiveGroups:o}]):i[this.otDataLayer.name].constructor===Array&&(i[this.otDataLayer.name].push({OnetrustActiveGroups:o}),i[this.otDataLayer.name].push({OptanonActiveGroups:o}));var n,a=new CustomEvent("consent.onetrust",{detail:t});!this.otDataLayer.ignore&&t.length&&(i[this.otDataLayer.name].constructor===Array&&i[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:o}),n=new CustomEvent("OneTrustGroupsUpdated",{detail:t})),setTimeout(function(){window.dispatchEvent(a),n&&window.dispatchEvent(n)})},se.prototype.deserialiseStringToArray=function(e){return e?e.split(","):[]},se.prototype.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},se.prototype.serialiseArrayToString=function(e){return e.toString()},se.prototype.setStubScriptElement=function(){ee.stubScriptElement=document.querySelector("script[src*='"+ee.stubFileName+"']");var e=ee.stubScriptElement&&0<=ee.stubScriptElement.getAttribute("src").indexOf("did=");ee.stubScriptElement&&ee.stubScriptElement.hasAttribute(ee.DATAFILEATTRIBUTE)?this.domainId=ee.stubScriptElement.getAttribute(ee.DATAFILEATTRIBUTE).trim():e?this.domainId=ee.stubScriptElement.getAttribute("src").split("did=")[1]:ee.stubScriptElement||(ee.stubScriptElement=document.querySelector("script[src*='"+ee.migratedCCTID+"']"),ee.stubScriptElement&&(ee.isMigratedURL=!0,this.domainId=ee.migratedDomainId.trim()))},se.prototype.setDomainDataFileURL=function(){var e=ee.stubScriptElement.getAttribute("src"),t=-1<e.indexOf("/consent");e&&(ee.isMigratedURL?ee.storageBaseURL=e.split("/consent/"+ee.migratedCCTID)[0]:ee.storageBaseURL=t?e.split("/consent")[0]:e.split("/scripttemplates/"+ee.stubFileName)[0]),this.storageBaseURL=ee.storageBaseURL,this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId=this.domainId+"-test":this.isPreview=!1,ee.bannerBaseDataURL=ee.storageBaseURL&&ee.storageBaseURL+"/consent/"+this.domainId,ee.bannerDataParentURL=ee.bannerBaseDataURL+"/"+this.domainId+".json"},se.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e},se.prototype.removeTcf=function(){delete window.__tcfapi;var e=document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];e&&e.parentElement.removeChild(e)},se.prototype.getParamForIE=function(){return{get:function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?null:decodeURI(t[1])||""}}},se.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var e="true"===this.urlParams.get("otreset"),t="true"===this.urlParams.get("otpreview");this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase();var o=this.readCookieParam(oe,"expiry"),i=this.readCookieParam(oe,te);this.isReset=e||o&&new Date(o)<new Date,this.isPreview=!this.isReset&&(t||o&&new Date(o)>new Date),this.setGeoParam(this.geoFromUrl||i)},se.prototype.setGeoParam=function(e){if(e){var t=window;t.OneTrust||(t.OneTrust={});var o=e.split(",");t.OneTrust.geolocationResponse={countryCode:o[0],stateCode:o[1]}}},se);function se(){var c=this;this.iabType=null,this.iabTypeAdded=!0,this.crossOrigin=null,this.isAmp=!1,this.domainId="",this.isReset=!1,this.isPreview=!1,this.geoFromUrl="",this.nonce="",this.setAttributePolyfillIsActive=!1,this.storageBaseURL="",this.addBannerSDKScript=function(e){var t=null;c.iabTypeAdded&&("IAB"!==(t=c.getRegionSet(e)).Type&&"IAB2"!==t.Type||(c.iabType=t.Type,c.intializeIabStub()),"IAB2"!==t.Type&&c.removeTcf());var o=ee.stubScriptElement.cloneNode(!0),i="";i=e.UseSDKRefactor?(ee.isMigratedURL&&(o.src=ee.storageBaseURL+"/scripttemplates/new/scripttemplates/"+ee.stubFileName+".js"),ee.storageBaseURL+"/scripttemplates/new/scripttemplates/"+e.Version+"/"+ee.bannerScriptName):"5.11.0"===e.Version?(ee.isMigratedURL&&(o.src=ee.storageBaseURL+"/scripttemplates/old/scripttemplates/"+ee.stubFileName+".js"),ee.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+ee.bannerScriptName):(ee.isMigratedURL&&(o.src=ee.storageBaseURL+"/scripttemplates/"+ee.stubFileName+".js"),ee.storageBaseURL+"/scripttemplates/"+e.Version+"/"+ee.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin"].forEach(function(e){ee.stubScriptElement.getAttribute(e)&&o.setAttribute(e,ee.stubScriptElement.getAttribute(e))}),c.isAmp=!!ee.stubScriptElement.getAttribute("amp"),window.otStubData={bannerBaseDataURL:ee.bannerBaseDataURL,crossOrigin:c.crossOrigin,domainData:e,domainId:c.domainId,geoFromUrl:c.geoFromUrl,isAmp:c.isAmp,isPreview:c.isPreview,isReset:c.isReset,mobileOnlineURL:ee.mobileOnlineURL,nonce:c.nonce,otDataLayer:c.otDataLayer,regionRule:t,setAttributePolyfillIsActive:c.setAttributePolyfillIsActive,storageBaseURL:c.storageBaseURL,stubElement:o,urlParams:c.urlParams,userLocation:ee.userLocation},c.jsonp(i,null)},this.intializeIabStub=function(){var e=window;c.iabTypeAdded?("IAB"===c.iabType?void 0===e.__cmp&&(window.__cmp=c.executeCmpApi):void 0===e.__tcfapi&&(window.__tcfapi=c.executeTcfApi),c.addIabFrame()):c.addBackwardIabFrame(),e.receiveOTMessage=c.receiveIabMessage,(e.attachEvent||window.addEventListener)("message",e.receiveOTMessage,!1)},this.addIabFrame=function(){var e=window,t="IAB"===c.iabType?"__cmpLocator":"__tcfapiLocator";!e.frames[t]&&(e.document.body?c.addLocator(t,"CMP"):setTimeout(c.addIabFrame,5))},this.addBackwardIabFrame=function(){var e=window,t="__cmpLocator";!e.frames[t]&&(e.document.body?c.addLocator(t,"CMP"):setTimeout(c.addIabFrame,5));var o="__tcfapiLocator";!e.frames[o]&&(e.document.body?c.addLocator(o,"TCF"):setTimeout(c.addIabFrame,5))},this.addLocator=function(e,t){var o=window,i=o.document.createElement("iframe");ae(i,"display: none;",!0),i.name=e,i.setAttribute("title",t+" Locator"),o.document.body.appendChild(i)},this.receiveIabMessage=function(i){var n="string"==typeof i.data,e={};try{e=n?JSON.parse(i.data):i.data}catch(e){}if(e.__cmpCall&&"IAB"===c.iabType){var a=e.__cmpCall.callId,r=e.__cmpCall.command,t=e.__cmpCall.parameter;c.executeCmpApi(r,t,function(e,t){var o={__cmpReturn:{returnValue:e,success:t,callId:a,command:r}};i.source.postMessage(n?JSON.stringify(o):o,i.origin)})}else e.__cmpCall&&"IAB2"===c.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(e.__tcfapiCall&&"IAB2"===c.iabType){var s=e.__tcfapiCall.callId,l=e.__tcfapiCall.command,o=(t=e.__tcfapiCall.parameter,e.__tcfapiCall.version);c.executeTcfApi(l,t,function(e,t){var o={__tcfapiReturn:{returnValue:e,success:t,callId:s,command:l}};i&&i.source&&i.source.postMessage&&i.source.postMessage(n?JSON.stringify(o):o,"*")},o)}else e.__tcfapiCall&&"IAB"===c.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];c.iabType="IAB";var o=e[0],i=e[1],n=e[2];if("function"==typeof n&&o)if(ee.isStubReady&&ee.IABCookieValue)switch(o){case"ping":c.getPingRequest(n,!0);break;case"getConsentData":c.getConsentDataRequest(n);break;default:c.addToQueue(o,i,n)}else c.addToQueue(o,i,n)},this.executeTcfApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(c.iabType="IAB2",!e.length)return window.__tcfapi.a||[];var o=e[0],i=e[1],n=e[2],a=e[3];"function"==typeof n&&o&&("ping"===o?c.getPingRequest(n):c.addToQueue(o,i,n,a))},this.addToQueue=function(e,t,o,i){var n=window,a="IAB"===c.iabType?"__cmp":"__tcfapi";n[a].a=n[a].a||[],n[a].a.push([e,t,o,i])},this.getPingRequest=function(e,t){if(void 0===t&&(t=!1),e){var o={},i=!1;"IAB"===c.iabType?(o={gdprAppliesGlobally:ee.oneTrustIABgdprAppliesGlobally,cmpLoaded:t},i=!0):"IAB2"===c.iabType&&(o={gdprApplies:ee.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},i=!0),e(o,i)}},this.getConsentDataRequest=function(e){e&&ee.IABCookieValue&&e({gdprApplies:ee.oneTrustIABgdprAppliesGlobally,hasGlobalScope:ee.hasIABGlobalScope,consentData:ee.IABCookieValue},!0)},this.initConsentSDK()}var le=new re;return e.OtSDKStub=re,e.otSdkStub=le,e}({});

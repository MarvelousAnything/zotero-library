!function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var s,r=[],c=["www.washingtonpost.com","pb-impact.washingtonpost.com","fusion-sandbox.washingtonpost.com","www.wapodev.com","www.wapostage.com","pb-dev.digitalink.com","pb-staging.digitalink.com","subs-stage.washingtonpost.com","localhost","localhost.digitalink.com","localhost.washingtonpost.com","subscribe.digitalink.com",".*.preview.now.washingtonpost.com"],l={prod:{anon:{default:864e5,optedOut:63072e6},signed:{default:864e5,optedOut:864e5}},fStage:{anon:{default:3e5,optedOut:63072e6},signed:{default:3e5,optedOut:3e5}},fqa:{anon:{default:3e5,optedOut:18e5},signed:{default:3e5,optedOut:3e5}},stage:{anon:{default:864e5,optedOut:63072e6},signed:{default:864e5,optedOut:864e5}},qa:{anon:{default:3e5,optedOut:18e5},signed:{default:3e5,optedOut:3e5}}};function u(t){for(var e=!1,n=0;n<c.length;n+=1){var a=new RegExp(c[n]);if(t.match(a)){e=!0;break}}return e}function p(){if(void 0!==s)return s;try{var t=(new Date).toString();window.localStorage.setItem(t,t);var e=window.localStorage.getItem(t)===t;return window.localStorage.removeItem(t),s=e,e}catch(t){return s=!1,!1}}function w(t){if(!t)return null;if(!document.cookie)return null;for(var e=null,n=document.cookie.split(";"),a=0;a<n.length;a++)if(n[a].indexOf("=")>0){var o=n[a].split("="),i=o[0],s=o[1];i&&(i=i.trim()),i===t&&(s||(s=""),e=s.trim()),s.trim()}return e}function d(t,e,n,a,o,i){var s,r="",c="",l=".washingtonpost.com",u=!1===o?"":";secure";n<0?r=";expires=".concat(new Date(1e3).toUTCString):n>0&&(r=";expires=".concat(new Date(n).toUTCString())),"qa"===i&&(l=".digitalink.com"),null!=l&&(c=";domain=".concat(l)),e||(e=""),s=a?e:encodeURIComponent(e);var p="".concat(t,"=").concat(s,";path=/").concat(r).concat(c).concat(u);document.cookie=p}function g(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function f(t,e,n){p()&&!g(e)&&(u(window.location.hostname)&&(e.e=Date.now()+(n||0),localStorage.setItem(t,JSON.stringify(e))))}function m(t,e,n,a){return e=e||"GET",n=n&&JSON.stringify(n)||null,new Promise((function(o,i){var s=new XMLHttpRequest;s.open(e,t,!0),s.timeout=3e3,s.withCredentials=!0,a&&a.contentType&&s.setRequestHeader("Content-Type",a.contentType),s.onload=function(t){if(4===(t=t.target||{}).readyState&&200===t.status){var e={};try{(e=JSON.parse(t.response)).statusCode=200,o(e)}catch(t){i("")}}else t.status>=400&&i({message:t.status})},s.onerror=function(t){i("")},s.ontimeout=function(){i("")},s.send(n)}))}var h="wapo_identity",y="wapo_secure_login_id",v="wp_usp",S="privacySetting",b={iabSpec:1,explicitNotice:"Y",optOut:"N",lspa:"Y"},O={prod:{env:"prod",feLoggingApi:"https://www.washingtonpost.com/subscribe/logging/",tetroApi:"https://www.washingtonpost.com/tetro/evaluate",cookieDomain:".washingtonpost.com",LSDomain:"www.washingtonpost.com",authStatusUrl:"https://www.washingtonpost.com/subscribe/user/auth-status",sipUrl:"https://www.washingtonpost.com/subscribe/user/save-identity-preferences",checkEntitlementUrl:"https://subscribe.washingtonpost.com/swg/check-entitlement"},fStage:{env:"stage",feLoggingApi:"https://subs-stage.washingtonpost.com/logging/",tetroApi:"https://subs-stage.washingtonpost.com/tetro/evaluate",cookieDomain:".washingtonpost.com",LSDomain:"www.wapostage.com",authStatusUrl:"https://subs-stage.washingtonpost.com/user/auth-status",sipUrl:"https://subs-stage.washingtonpost.com/user/save-identity-preferences",checkEntitlementUrl:"https://subs-stage.washingtonpost.com/swg/check-entitlement"},stage:{env:"stage",feLoggingApi:"https://subs-stage.washingtonpost.com/logging/",tetroApi:"https://subs-stage.washingtonpost.com/tetro/evaluate",cookieDomain:".washingtonpost.com",LSDomain:"www.washingtonpost.com",authStatusUrl:"https://subs-stage.washingtonpost.com/user/auth-status",sipUrl:"https://subs-stage.washingtonpost.com/user/save-identity-preferences",checkEntitlementUrl:"https://subs-stage.washingtonpost.com/swg/check-entitlement"},fQa:{env:"qa",feLoggingApi:"https://subscribe.digitalink.com/logging/",tetroApi:"https://tetro.digitalink.com/evaluate",cookieDomain:".digitalink.com",LSDomain:"www.wapodev.com",authStatusUrl:"https://subscribe.digitalink.com/user/auth-status",sipUrl:"https://subscribe.digitalink.com/user/save-identity-preferences",checkEntitlementUrl:"https://subscribe.digitalink.com/swg/check-entitlement"},qa:{env:"qa",feLoggingApi:"https://subscribe.digitalink.com/logging/",tetroApi:"https://tetro.digitalink.com/evaluate",cookieDomain:".digitalink.com",LSDomain:"pb-dev.digitalink.com",authStatusUrl:"https://subscribe.digitalink.com/user/auth-status",sipUrl:"https://subscribe.digitalink.com/user/save-identity-preferences",checkEntitlementUrl:"https://subscribe.digitalink.com/swg/check-entitlement"}};function _(){var t="prod";return-1!==window.location.hostname.indexOf("localhost.wash")&&-1!==window.location.href.indexOf("/pb/")||-1!==window.location.hostname.indexOf("pb-impact")||-1!==window.location.hostname.indexOf("impact.wash")||-1!==window.location.hostname.indexOf("subs-stage")||-1!==window.location.hostname.indexOf("vforum-stage.")?t="stage":-1!==window.location.hostname.indexOf("localhost.wash")&&-1!==window.location.href.indexOf("/pf/")||-1!==window.location.hostname.indexOf("localhost.wash")&&-1!==window.location.href.indexOf(":3000")||-1!==window.location.hostname.indexOf("sandbox.wash")||-1!==window.location.hostname.indexOf("subs-stage")||-1!==window.location.hostname.indexOf("preview.now.washingtonpost.com")?t="fStage":-1!==window.location.hostname.indexOf("localhost.digitalink")&&-1!==window.location.href.indexOf("/pf/")||-1!==window.location.hostname.indexOf("localhost.digitalink")&&-1!==window.location.href.indexOf(":3000")||-1!==window.location.hostname.indexOf("www.digitalink.com")||-1!==window.location.hostname.indexOf("dev.wash")&&-1!==window.location.href.indexOf("/pf/")?t="fQa":-1===window.location.hostname.indexOf("digitalink.com")&&-1===window.location.hostname.indexOf("dev.wash")||(t="qa"),t}function k(){return O[_()]}function x(t){var e=function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(t,"(=([^&#]*)|&|#|$)")).exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("utm_medium");e&&(t.tetro_utm=e)}var C={},D=window.performance&&window.performance.timing||{},T=(new Date).getTime(),I={};function P(t){Object.assign(I,t),window.pwapiPaywallResponse=I;for(var e=0;e<window.extConsumers.length;e++)window.extConsumers[e](I);for(var n=0;n<window.consumers.length;n++)window.consumers[n](I)}function E(t,e){for(var n=e.split("."),a=0,o=n.length;null!=t&&a<o;){t=t[n[a++]]}return a&&a===o?t:void 0}var A=(new Date).getTime();function j(t,e,n){var a,o=k();switch(n=n||{},e=e||"",t){case"info":a="logInfo";break;case"success":a="logSuccess";break;case"error":a="logHandledError";break;case"expectedError":a="logExpectedError";break;default:a="logInfo"}var i=o.feLoggingApi;try{var s=new XMLHttpRequest;s.open("POST",i+a,!0),s.setRequestHeader("Content-Type","application/json"),n.processId=A,n.path=window.location.pathname;var r={appName:"site-paywall",locationId:"pwapi-proxy",message:e,state:n};s.withCredentials=!0,s.send(JSON.stringify(r)),s.onload=function(){},s.onerror=function(){}}catch(t){console.error("LOGGING ERROR")}}function Q(t){var e;(t=t||{}).referrer=document.referrer,Object.assign(t,(e={},window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,a){r.indexOf(n)>=0&&(e[n]=a)})),e));var n="";for(var a in t)if(t.hasOwnProperty(a)){var o=t[a];"string"==typeof o&&""!==o&&(n+="".concat(a,"=").concat(encodeURIComponent(o.trim()),"&"))}return n}function U(t){var e=k()||{};return new Promise((function(n,a){var o,i,s={entitlements:t};if(o=document.cookie.match(/wapo_login_id=([^\;]*)/),i=document.cookie.match(/wapo_secure_login_id=([^\;]*)/),null!=o&&null!=o[1]&&null!=i&&null!=i[1])return n({status:"NOT_CHECKED",systemMessages:"User logged in"});m(e.checkEntitlementUrl,"POST",s,{contentType:"application/json"}).then((function(t){n(t)})).catch((function(t){var e={status:"ERROR",systemMessages:"Check Entitlement failed with ".concat(t.message)};n(e)}))}))}function N(t,e){if(e&&""!==e){var n,a=e.split(","),i=[],s={fusion:{metadata:"wpMetaData",content_type:"content_type",ct_tags:"ct_tags",sct_tags:"sct_tags"},classic:{metadata:"wp_meta_data",content_type:"contentType",ct_tags:"tags_for_paywall",sct_tags:"tags_for_paywall_subs"}}[C.name],r=window[s.metadata]||{},c=s[t];n=r[c]&&r[c].split(",")||[],i=[].concat(o(n),o(a)),r[c]=i.join(","),window[s.metadata]=r}}function M(t){var e,n,a=t.actionCodes;(function(t){var e=!1,n=w("wp_dbg_ent");return(t.toString().indexOf("23")>=0||null!=n)&&(e=!0),e}(a)&&N("sct_tags","subs_enterprise"),3!==t.action&&6!==t.action||!function(t){return t&&t.userAttributes&&t.userAttributes.isTerminated||!1}(t)||N("ct_tags","subs_terminated"),3!==t.action&&6!==t.action||!function(t){return t&&t.isSignedIn||!1}(t)||N("ct_tags","subs_signedin"),t.action>0&&function(t){return t&&t.isSubscriber||!1}(t)&&N("sct_tags","subs_subscriber"),t.action>0)&&N("ct_tags",a.filter((function(t){return t.indexOf("w_")>-1})).join(","));e=!1,null!=(n=w("scroll0"))&&n.length>0&&(e=!0),e&&N("sct_tags","scroll0")}function L(t){return x(t),function(t){if(!p())return null;var e=JSON.parse(localStorage.getItem("wapo_identity"));void 0!==(null==e?void 0:e.dob_source)&&(t.tetro_dob_source=e.dob_source)}(t),t}var R=36e5,J=[{name:"wapo_login_id",expireOffsetMillis:R,cookiesToLocalStorage:!1,localStorageToCookies:!0,useDelimiter:!1},{name:"wapo_secure_login_id",expireOffsetMillis:R,cookiesToLocalStorage:!1,localStorageToCookies:!0,useDelimiter:!1},{name:"wp_ak_v_m",expireOffsetMillis:5184e6,cookiesToLocalStorage:!0,localStorageToCookies:!0,useDelimiter:!0,delimiterValue:"|",notEncoded:!0}];function G(t,e){var n;(n=document.createElement("script")).type="text/javascript",n.setAttribute("subscriptions-control","manual"),n.src="https://news.google.com/swg/js/v1/swg.js",n.onerror=function(){},document.head.appendChild(n),function(t,e){(window.SUBSCRIPTIONS=window.SUBSCRIPTIONS||[]).push((function(n){var a=!1,o={process:"swg-entitlement"};if(-1===window.location.href.indexOf("localhost.")&&-1===window.location.href.indexOf("local."))try{n.init("washingtonpost.com:basic"),n.getEntitlements().then((function(n){return n&&n.entitlements&&n.entitlements.length>0?(P({action:0,data:{action:0},status:"final"}),a=!0,o.numEntitlements=n.entitlements.length,o.pwresp_action=t,o.pwresp_action_final=0,o.pwresp_mtrct=e,o.raw_entitlements=JSON.stringify(n.entitlements),n.entitlements.forEach((function(t,e){if(t.source.indexOf("washingtonpost.com")>=0)o.postSWGPurchase=!0,t.subscriptionToken?o["entitlement_".concat(e)]="entitlementType=post|subscriptionToken=".concat(t.subscriptionToken):o["entitlement_".concat(e)]="entitlementType=post|subscriptionToken=".concat(t.signedEntitlements);else if(t.subscriptionToken){o.gglSWGPurchase=!0;var n=JSON.parse(t.subscriptionToken);o["entitlement_".concat(e)]="entitlementType=google|orderId=".concat(n.orderId,"|packageName=").concat(n.packageName,"|productId=").concat(n.productId,"|purchaseTime").concat(n.purchaseTime)}}))):P({status:"final"}),n})).then((function(t){a&&U(t.entitlements).then((function(t){var e=[];e.push("isEntitled=".concat(t.status)),t.createAccount&&e.push("isLinked=".concat(!t.createAccount)),t.systemMessages&&e.push("messages=".concat(t.systemMessages)),o.entitlement_status=e.join("|"),j("info","swg entitlements",o)}))})).catch((function(){P({status:"final"})}))}catch(t){P({status:"final"})}else P({status:"final"})}))}(t,e),setTimeout((function(){"final"!==I.status&&P({status:"final"})}),5e3)}function q(t){var e=t;e.data.action,e.data.actionCodes.join(","),e.data.meterCount,e.status="processing",window.pwapiPaywallStatus=200;var n=e.data.meterCount,a={3:"paywall",6:"softwall",9:"regwall"}[e.data.action],o=e.data.wallMeterType,i="";switch(a){case"paywall":i="".concat(o||"meter","_").concat(a),2===e.data.articleWeight&&(i="double_meter_".concat(a)),e.data.meterCount=i;break;case"softwall":case"regwall":o&&(e.data.meterCount="".concat(o,"_").concat(a))}return M(e.data),!function(){if(!p())return!1;var t=localStorage.getItem("wp_sponsored");if(window.location.search.indexOf("das=pw_spsrd_hit")>-1||window.location.search.indexOf("pw_unlock_mgclink")>-1){if(localStorage.setItem("wp_sponsored",window.location.pathname),"function"==typeof window.history.replaceState){var e=window.location.href;e=e.replace(/das=[^\&]*/,""),window.history.replaceState({},null,e)}return!0}return!(!t||window.location.pathname!==t)}()?3===e.data.action||8===e.data.action||9===e.data.action?G(e.data.action,n):e.status="final":(e.status="final",e.action=0,e.data.action=0),P(e),e}function H(t,e){t=t||{},e=e||"info",P({status:"error"});var n={process:"pwapiproxy-response",xhrstatus:t.statusCode};t.timeout&&(n.timeout=t.timeout),j(e,t.msg,n)}function Y(t,e){var n="v2",a="POST",o=!0,i=5e3,s=[202,469,499];return new Promise((function(r){var c,l=Q(e),u=window.location.href&&window.location.href.split("?")[0]||"";c=JSON.stringify({articles:[{article:"".concat(u,"?").concat(l)}]});try{if(t){var p=new XMLHttpRequest;p.open(a,t),p.timeout=i,p.withCredentials=o,p.onload=function(){if(window["pwapi".concat(n,"Response")]=(new Date).getTime()-T,window["pwapiAPI".concat(n,"End")]=(new Date).getTime()-(D.navigationStart||0),p.readyState===XMLHttpRequest.DONE&&200===p.status){window["pwapiAPI".concat(n,"Ready")]=(new Date).getTime()-(D.navigationStart||0);var t={};try{(t=JSON.parse(p.response)).statusCode=p.status,q(t),r(t)}catch(t){t.statusCode=-1;var e={status:"error",statusCode:-1,msg:"pwapiproxy response invalid".concat(t.statusText?" - ".concat(t.statusText):"")};H(e,"error"),r(e)}}else if(p.readyState===XMLHttpRequest.DONE&&s.indexOf(p.status)>-1)r({status:"error",msg:"ignored status code"});else{var a={status:"error",statusCode:p.status,msg:"pwapiproxy invalid status code"};H(a,"error"),r(a)}},p.onerror=function(t){window["pwapiAPI".concat(n,"End")]=(new Date).getTime()-(D.navigationStart||0);var e={status:"error",statusCode:t&&t.statusCode?t.statusCode:500,msg:"pwapiproxy error"};H(e,"error"),r(e)},p.ontimeout=function(){var t={status:"error",statusCode:504,timeout:((new Date).getTime()-T)/1e3,msg:"PWAPIPROXY TIMEOUT"};H(t,"expectedError"),r(t)},p.setRequestHeader("Content-Type","application/json"),window["pwapiAPI".concat(n,"Start")]=(new Date).getTime()-(D.navigationStart||0),p.send(c)}}catch(t){var w={status:"error",statusCode:500};w.msg="pwapiproxy error".concat(t.message?" - ".concat(t.message):""),H(w,"error"),r(w)}}))}function V(t){var e=function(){var t=(document.cookie.match(/wp_pwapi=([^\;]*);/)||{})[1]||_(),e=O[t].tetroApi||O.prod.tetroApi;if([/^www-washingtonpost-com/].some((function(t){return t.test(window.location.hostname)}))){var n=document.createElement("a");return n.href=e,n.pathname}return e}();Promise.all([Y(e,t)]).catch((function(){}))}window.consumers=window.consumers||[],window.extConsumers=window.extConsumers||[],I.status="init",window.registerPwapiConsumer=function(t){window.consumers.push(t),t(I)},window.registerExtUpdates=function(t){window.extConsumers.push(t),t(I)},window.extListener=function(t){P(t)};var X={};X.pwapi_contentsection=E(window,"wpMetaData.content_section"),X.pwapi_ct_tags=E(window,"wpMetaData.ct_tags"),X.pwapi_sct_tags=E(window,"wpMetaData.sct_tags"),X.commercial_node=E(window,"wpMetaData.commercial_node"),X.content_type=E(window,"wpMetaData.content_type"),X.is_amp="0",X.env=window.renderingEnv||"";var $,W=X,B=k()||{},F=($=B.env,l[$]);function K(t){for(var e=0;e<window.authConsumers.length;e++)window.authConsumers[e](t)}function z(t){var e=!!w(y),n=!(!t||!t.ccpa||"Y"!==t.ccpa.optOut),a=F&&F[e?"signed":"anon"][n?"optedOut":"default"]||0;return Date.now()+a}function Z(){var t=null;p()&&localStorage.getItem(h)&&(function(){var t=!1;if(p()&&localStorage.getItem(h)){var e=JSON.parse(localStorage.getItem(h));e.e&&Date.now()>e.e&&(t=!0)}return t}()?p()&&localStorage.removeItem(h):t=JSON.parse(localStorage.getItem(h)));return t}function tt(t){if(p()&&u(window.location.hostname)){var e=localStorage.getItem(h);e=e&&JSON.parse(e)||{};var n=Object.assign(e,t),a=z(n.privacySetting||{});n.e=a,localStorage.setItem(h,JSON.stringify(n))}}function et(t){if(p()&&localStorage.getItem(h))return JSON.parse(localStorage.getItem(h))[t]}function nt(t){var e,n,a;return t=t||(e=w(y),n=w(v),!1===et("signedIn")&&e?"sip":(window.wp_meta_data&&window.wp_meta_data.tags_for_paywall&&-1!==window.wp_meta_data.tags_for_paywall.indexOf("ccpa")||window.wpMetaData&&window.wpMetaData.ct_tags&&-1!==window.wpMetaData.ct_tags.indexOf("ccpa")||!!(g(Z())||e&&!n))&&"auth-status"),new Promise((function(e,n){!1!==t?function(t){return new Promise((function(e,n){var a;if("auth-status"===t)m("".concat(B.authStatusUrl,"?_v=").concat((new Date).getTime())).then((function(t){e(t)})).catch((function(t){n({status:"FAIL",errorState:"Auth Status failed"})}));else if("sip"===t){var o=Z(),i={caller:"SubsStorageManager",requestId:(a=window.crypto||window.msCrypto,([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^a.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))),authStatus:!0};i=Object.assign(i,o),m(B.sipUrl,"POST",i,{contentType:"application/json"}).then((function(t){e(t)})).catch((function(){n("Auth Status failed")}))}else n("Invalid action: ".concat(t))}))}(t).then((function(t){t&&"SUCCESS"===t.status&&tt(a=t.userState)})).finally((function(){K(a=Z()),e(a)})):(K(a=Z()),e(a))}))}window.authConsumers=window.authConsumers||[],window.registerAuthConsumer=function(t){window.authConsumers.push(t),t(Z())},window.updateIdentity=function(t){if(p()){var e=u(window.location.hostname),n=localStorage.getItem(h);if(e&&null!=n)try{n=n&&JSON.parse(n)||{};var a=Object.assign(n,t);localStorage.setItem(h,JSON.stringify(a))}catch(t){}}},window.storePrivacySetting=function(t){t="object"===n(t)?t:{};var a=et(S)||{};if(a.ccpa=e(e(e({},b),a.ccpa),t.ccpa),!g(a)){var o=w(y),i="".concat(a.ccpa.iabSpec,a.ccpa.explicitNotice,a.ccpa.optOut,a.ccpa.lspa);if(tt({privacySetting:a}),o)nt("sip");else{var s=_(),r=z(a);d(v,i,r,!0,!0,s)}}};var at={getUspString:function(t){return"".concat((t=t||{}).iabSpec,t.explicitNotice,t.optOut,t.lspa)},getUSPData:function(t,e){var n="".concat(t,"---");if(p()&&localStorage.getItem(h)){var a=et("geoState");if(navigator.globalPrivacyControl&&"CA"===a)n="1YYY";else{var o=et(S);o&&o.ccpa&&(n=at.getUspString(o.ccpa))}}if(n){var i={};i.version=t,i.uspString=n,e(i,!0)}},v1:{getUSPData:function(t){at.getUSPData(1,t)}}};window.addEventListener("message",(function(t){if(t.data.hasOwnProperty("__uspapiCall")){t.stopImmediatePropagation&&t.stopImmediatePropagation();var e=t.data.__uspapiCall.command,n=t.data.__uspapiCall.version;e&&n&&window.__uspapi(e,n,(function(e,n){n?t.source.postMessage({__uspapiReturn:{returnValue:e,success:n,callId:t.data.__uspapiCall.callId}},t.origin):t.source.postMessage({__uspapiReturn:{returnValue:{version:1,uspString:"1NYY"},success:!1,callId:t.data.__uspapiCall.callId}},t.origin)}))}return null}),!1);var ot=window&&window.location&&window.location.search.indexOf("debug=true")>-1||!1,it=function(t,e){if(null!==(e=e.toLowerCase()).toLowerCase().match(/(ready|final|error)/)&&(!window.dQ.participantStatus[t]||"error"!==window.dQ.participantStatus[t].status)){window.dQ.participantStatus[t].status=e,"final"!==e&&"error"!==e||(window.dQ.participantStatus[t].readyDisplay=!1);var n=window.dQ.participants.filter((function(t){return window.dQ.participantStatus[t]&&""===window.dQ.participantStatus[t].status}));ot&&console.log("still waiting on response from: ".concat(JSON.stringify(n)));var a=!0,o=window.dQ.participants.filter((function(t){var e=window.dQ.participantStatus[t];return!!e&&("ready"!==e.status&&"final"!==e.status&&(a=!1),"ready"===e.status&&!1===e.readyDisplay&&!0===a)}));if(ot&&console.log("displayable queue: ".concat(JSON.stringify(o))),o.length>0){window.dQ.displayableGroup=window.dQ.participantStatus[o[0]]&&window.dQ.participantStatus[o[0]].displayGroup;for(var i=window.dQ.displayable[window.dQ.displayableGroup],s=window.dQ.participants.filter((function(t){var e=window.dQ.participantStatus[t];return!!e&&("ready"===e.status&&e.displayGroup===window.dQ.displayableGroup)})),r=0;r<o.length;r+=1){var c=window.dQ.participantStatus[o[r]];c&&c.displayGroup===window.dQ.displayableGroup&&i.concurrent_displayable>=s.length&&window.dQ.displayable.total<=window.dQ.displayable.max&&(c.readyDisplay=!0,window.dQ.displayable.total+=1)}for(var l=0;l<window.dConsumers.length;l+=1){var u=window.dConsumers[l],p=u.participant,w=u.callback;o.indexOf(p)>=0&&w(window.dQ.participantStatus[p])}}ot&&console.log(" Display Group: ".concat(window.dQ.displayableGroup,"\n\n        Total Displayed: ").concat(window.dQ.displayable.total,"\n\n        Max Displayable: ").concat(window.dQ.displayable.max,"\n\n        Current participantStatus queue: ").concat(JSON.stringify(window.dQ.participantStatus).replaceAll("},","},\n")))}},st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.participant,n=t.callback;window.dConsumers.push(t),n(window.dQ.participantStatus[e])};C.name="fusion",window.pwapiVersion="Version 1.15.0 on Fri, 21 Jan 2022 00:03:20 GMT",window.pwapiStart=T-(D.navigationStart||0),function(){var t={status:"",readyDisplay:!1,hasProcessed:!1,displayGroup:"2"},n=window.dQ||{};n.hold=n.hold||[],window.dConsumers=window.dConsumers||[],n=Object.assign(n,{displayable:{max:2,total:0,1:{concurrent_displayable:1},2:{concurrent_displayable:2}},status:"init",participantStatus:{iab_banner:{name:"iab_banner",status:"",readyDisplay:!1,hasProcessed:!1,displayGroup:"1",timeout:3e4},paywall:{name:"paywall",status:"",readyDisplay:!1,hasProcessed:!1,displayGroup:"1"},regwall:{name:"regwall",status:"",readyDisplay:!1,hasProcessed:!1,displayGroup:"1"},softwall:{name:"softwall",status:"",readyDisplay:!1,hasProcessed:!1,displayGroup:"2"}}});var a=["paywall","regwall","iab_banner","softwall"];for("1"!==(document.cookie.match("wp_ak_ot=(1)[^;]*(;|$)")?RegExp.$1:"")&&a.splice(2,1),n.participants=n.participants||a,window.dQ=n,window.registerDisplay=function(){var a=arguments.length<=0?void 0:arguments[0],o=a.participant,i=a.status,s=a.callback,r=a.info;(Array.isArray(o)?o:o.split()).forEach((function(a){var o=a;o&&(n.participantStatus[o]||(n.participantStatus[o]=e(e({name:o},t),{info:r}),n.participants.push(o))),o&&s?st({participant:o,callback:s}):o&&i?(Object.assign(n.participantStatus[o],{info:r}),it(o,i)):o&&r?(Object.assign(n.participantStatus[o],{info:r}),window.dConsumers.filter((function(t){return t.participant===o})).forEach((function(t){t.callback(n.participantStatus[t.participant])}))):s||i||r||!o||(n.participantStatus[o]=e({name:o},t),n.participants.push(o))}))};n.hold.length>0;){var o=n.hold.splice(0,1);window.registerDisplay(o[0])}}(),window.registerPwapiConsumer((function(t){"error"!==t.status&&0!==t.action||(window.registerDisplay({participant:"paywall",status:"final"}),window.registerDisplay({participant:"softwall",status:"final"}),window.registerDisplay({participant:"regwall",status:"final"}))})),L(W),V(W),window.dQ.participants.filter((function(t){return window.dQ.participantStatus[t]&&null!=window.dQ.participantStatus[t].timeout&&"ready"!==window.dQ.participantStatus[t].status})).forEach((function(t){var e=window.dQ.participantStatus[t];setTimeout((function(t){"ready"!==window.dQ.participantStatus[t].status&&window.registerDisplay({participant:t,status:"final",info:{statusMsg:"timeout"}})}),e.timeout,e.name)})),function(t){var e={},n={};if(p()){for(var a=0;a<J.length;a++){var o=J[a];try{var i=o.name,s=w(i),r=localStorage.getItem(i),c={};if(r)try{(c=JSON.parse(r)).e<(new Date).getTime()&&(c={},localStorage.removeItem(i))}catch(t){c={},localStorage.removeItem(i)}var l=null!=s,u=null!=c.v;if(u&&!l&&o.localStorageToCookies&&(d(i,c.v,c.e,o.notEncoded,!0,t),n[i]=c.v),!u&&l&&o.cookiesToLocalStorage&&f(i,{v:s},o.expireOffsetMillis),l&&u&&o.useDelimiter){var g=o.delimiterValue||"|",m=s.split(g),h=c.v.split(g);o.cookiesToLocalStorage&&m&&h&&m[1]&&m[1]!==h[1]?f(i,{v:s},o.expireOffsetMillis):o.localStorageToCookies&&m&&h&&m[0]!==h[0]&&(!m[1]||m[1]===h[1])&&d(i,c.v,c.e||Date.now()+o.expireOffsetMillis,o.notEncoded,!0,t)}}catch(t){console.error("Unable to synchCookiesAndLocalStorage for synchCookie item: ".concat(JSON.stringify(o)),t)}}try{(Object.keys(n).length>0||Object.keys(e).length>0)&&j("info","User storage Synced",{process:"storage-sync","cookie-sync":JSON.stringify(e),"ls-sync":JSON.stringify(n)})}catch(t){}}}(_());try{window.__uspapi=function(t,e,n){return at["v".concat(e)]&&"function"==typeof at["v".concat(e)][t]?n?void at["v".concat(e)][t].apply(null,[n]):at["v".concat(e)][t]:!!n&&void n(null,!1)}}catch(t){}try{setTimeout((function(){nt()}),0)}catch(t){}}();
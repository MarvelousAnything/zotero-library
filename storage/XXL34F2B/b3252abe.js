(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{TsMF:function(e,t,n){"use strict";n.d(t,"a",(function(){return Q}));var r=n("q1tI"),a=n.n(r),o=n("6RI4"),i=n("Ii0K");n("OUbi"),n("kC94"),n("Pfy6"),n("EcEN");function c(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}function s(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){s(o,r,a,i,c,"next",e)}function c(e){s(o,r,a,i,c,"throw",e)}i(void 0)}))}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return(h=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&f(a,n.prototype),a}).apply(null,arguments)}function v(e){var t="function"===typeof Map?new Map:void 0;return(v=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function m(e,t){return e(t={exports:{}},t.exports),t.exports}c("/** Namespacing with magiclink__ **/\n.magiclink__wrapper {\n  text-align: center;\n  background-color: #f1f1f1;\n  font-weight: 400;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n  .magiclink__wrapper p, .magiclink__wrapper h1 {\n    padding: 0; }\n  .magiclink__wrapper h1.font--headline {\n    font-size: 24px; }\n  .magiclink__wrapper .magiclink__container {\n    padding: 48px; }\n    .magiclink__wrapper .magiclink__container.magiclink__bad-password, .magiclink__wrapper .magiclink__container.magiclink__finish-setting-your-acct {\n      padding-top: 24px; }\n    @media screen and (max-width: 655px) {\n      .magiclink__wrapper .magiclink__container {\n        padding-left: 24px;\n        padding-right: 24px; } }\n    .magiclink__wrapper .magiclink__container.magiclink__logmein {\n      position: relative;\n      min-height: 300px; }\n  .magiclink__wrapper .inner-content {\n    background-color: #ffffff;\n    padding: 16px 24px; }\n  .magiclink__wrapper .icon-inbox {\n    height: 60px; }\n  .magiclink__wrapper .header {\n    background-color: #e1e1e1;\n    height: 48px;\n    color: #888;\n    font-size: 14px;\n    border-radius: 2px 2px 0 0;\n    font-weight: 400;\n    border: 1px solid #f1f1f1;\n    display: flex; }\n    .magiclink__wrapper .header .header-content {\n      display: flex;\n      margin-left: 16px;\n      width: 100%; }\n      .magiclink__wrapper .header .header-content a {\n        font-size: 16px;\n        color: #888888;\n        text-decoration: none;\n        display: flex;\n        align-items: center; }\n        .magiclink__wrapper .header .header-content a:hover {\n          text-decoration: underline; }\n        .magiclink__wrapper .header .header-content a span {\n          margin-left: 2px; }\n  .magiclink__wrapper .magiclink__footer {\n    margin-top: 36px; }\n    .magiclink__wrapper .magiclink__footer a {\n      text-decoration: none;\n      color: #1955a5; }\n      .magiclink__wrapper .magiclink__footer a:hover {\n        text-decoration: underline; }\n    .magiclink__wrapper .magiclink__footer .resending {\n      color: #00b16a; }\n      .magiclink__wrapper .magiclink__footer .resending.error {\n        color: #d9202c; }\n");var _,y,g=m((function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(P){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=function(e,t,n){var r=p;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw o;return T()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?h:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",v={};function m(){}function _(){}function y(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(I([])));E&&E!==n&&r.call(E,o)&&(g=E);var b=y.prototype=m.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"===typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function I(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return _.prototype=b.constructor=y,y.constructor=_,_.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(R.prototype),R.prototype[i]=function(){return this},e.AsyncIterator=R,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new R(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(b),s(b,c,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}})),w={test:"https://subscribe.digitalink.com",dev:"https://subscribe.digitalink.com",development:"https://subscribe.digitalink.com",qa:"https://subscribe.digitalink.com",stg:"https://subs-stage.washingtonpost.com",stage:"https://subs-stage.washingtonpost.com",prod:"https://subscribe.washingtonpost.com"},E=l({},w);E.dev=w.dev.replace("subscribe","pb-dev")+"/pb/homepage",E.qa=E.dev+"/pb/homepage",E.stage=w.stage.replace("subs-stage","pb-impact"),E.prod=w.prod.replace("subscribe","www");var b;!function(e){e.SOAP="33",e.AUTO="34",e.TWP_VERIFY="36",e.AMZ_VERIFY="37"}(b||(b={}));(_={})[b.AMZ_VERIFY]={path:"/verify",createSearchParams:function(e){return"email_override="+e}},_[b.TWP_VERIFY]={path:"/verify",createSearchParams:function(e){return"email_override="+e}},_[b.SOAP]={path:"/soap",createSearchParams:function(e,t){return"email_override="+e+"&provider_override="+t}},_[b.AUTO]={path:"/connect",createSearchParams:function(e){return"email_override="+e}};var x,R=((y={})[i.d.ACCOUNT_NOT_FOUND]="Sorry, we don't recognize this account.",y[i.d.LOOKUP_ACCNT_SYSTEM_ERROR]="Generic Error",y[i.d.USERNAME_MIMA_NOT_MATCH]="Hmm. We don't recognize this email/password combination.",y),k=["client_id","device_id","ostype","request_id","redirect_uri","scope","state"];!function(e){e.MISSING_RECAPTCHA="exception:missing_recaptcha",e.MISSING_LOGIN_COOKIES="handled_failure:missing_login_cookies"}(x||(x={}));function A(e,t){return O.apply(this,arguments)}function O(){return(O=u(g.mark((function e(t,n){var r,a,o,c,s;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={method:"GET"}),r="prod","undefined"!==typeof window&&(r=(null==(a=window.WPAA)?void 0:a.env)||"prod"),o=""+w[r]+t,e.next=6,fetch(o,l({headers:l({},i.a,n.headers||{})},n));case 6:if(c=e.sent,[200,202,400].indexOf(c.status),!(c.status>=500)){e.next=12;break}return S("fetchData:error",c),e.abrupt("return",Promise.reject("A network error occurred."));case 12:return e.next=14,c.json();case 14:return s=e.sent,e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,t),dispatchEvent(n)}var I;!function(e){e.EMPTY_EMAIL="Please enter an email.",e.INVALID_EMAIL="Please enter a valid email.",e.API_EMAIL="Something went wrong"}(I||(I={}));var T,P,U,L=function(e,t){var n={key:"",value:""};if("undefined"!==typeof window&&(t||(t=window.location.search),t)){var r=t.substr(1,t.length).split("&").reduce((function(e,t){var n=t.split("="),r={key:n[0],value:n[1]};return n&&e.push(r),e}),[]);return e?r.find((function(t){return t.key===e}))||n:r}return n},N=function(e,t){var n=L(void 0,decodeURIComponent(decodeURIComponent(e)));if(n instanceof Array){var r=n.find((function(e){return"redirectUri"===e.key||"redirect_uri"===e.key})),a=n.find((function(e){return"state"===e.key})),o=n.find((function(e){return"scope"===e.key})),i=n.find((function(e){return"clientId"===e.key||"client_id"===e.key}));if(null!=r&&r.value&&null!=a&&a.value&&null!=o&&o.value&&null!=i&&i.value){var c=(null==r?void 0:r.value)||"";return decodeURIComponent(c)+"?state="+(null==a?void 0:a.value)+"&client_id="+(null==i?void 0:i.value)+"&scope="+(null==o?void 0:o.value)+"&buy=&account_created=false"}}if(t){var s=t.redirectUri,u=t.state,l=t.scope,p=t.clientId;if(s&&u&&l&&p)return s+"?state="+u+"&client_id="+p+"&scope="+l+"&buy=&account_created=false"}},C=a.a.createContext({email:"",env:"dev",appRequestHeaders:{requestId:"1234"},format:"modal",loginState:"",authFlow:!1}),D={STATUSES:{FINISH_SETTING_UP_ACCT:"12",SOCIAL_PROVIDER_ONLY:"14",BAD_PASSWORD:"21"},FLOW:{PML:"pml"}};!function(e){e.COMPLETE_SETUP="COMPLETE_SETUP",e.VERIFIED="STATUS_TWO",e.NOT_FOUND="STATUS_ONE",e.SOCIAL_PROVIDER="SOCIAL_PROVIDER"}(U||(U={}));(T={}).pw=D.STATUSES.BAD_PASSWORD;var F,q,H,M="Resend it",j="Sending...",W="Email sent!",G="Failed to send! try again";(P={})[D.STATUSES.BAD_PASSWORD]="authenticate",P[D.STATUSES.FINISH_SETTING_UP_ACCT]="lookup-account-by-email",P[D.FLOW.PML]="on-demand-magic-link";function V(e){var t=l({},e,{authenticated:!1});switch(e.state){case i.d.ACCOUNTS_LINK_CLEANUP:t.type=q.SOAP,t.authenticated=!0;break;case i.d.ACCOUNTS_AUTO_CONNECTED:t.type=q.AUTOCONNECT,t.authenticated=!0;break;case i.d.MAGIC_LINK_FOR_TWP_OR_AZ_REQUIRED:case i.d.SUBS_MAGIC_LINK_AZ_REQUIRED:t.type=q.VERIFY,t.authenticated=!0;break;case i.d.USERNAME_MIMA_NOT_MATCH:t.type=q.ERROR,t.errorState=e.state;break;case i.d.TWP_MAGICLINK_EMAIL_SENT:t.type=q.BAD_PASSWORD;break;case i.d.CONFIRMATION_REQUIRED:t.type=q.AUTHENTICATED,t.authenticated=!0,t.privateAppleAccount=!0;break;case i.d.APPLE_FAILURE:case i.d.APPLE_ERROR:case i.d.APPLE_CANCELED:case i.d.TWP_LOGIN_FAILURE:case i.d.FACEBOOK_ERROR:case i.d.FACEBOOK_FAILURE:case i.d.GOOGLE_ERROR:case i.d.GOOGLE_FAILURE:case i.d.AMAZON_ERROR:case i.d.AMAZON_FAILURE:t.type=q.ERROR,t.errorState=e.state,t.error=new Error(R[e.state]);break;default:t.type=q.AUTHENTICATED,t.authenticated=!0}return t}!function(e){e.EMAIL_VERIFIED="EMAIL_VERIFIED",e.ERROR="ERROR",e.GET_EMAIL="GET_EMAIL",e.SEND_EMAIL="SEND_EMAIL",e.SET_PASSWORD="SET_PASSWORD",e.SOCIAL_PROVIDER="SOCIAL_PROVIDER"}(F||(F={})),function(e){e.AUTHENTICATED="AUTHENTICATED",e.AUTOCONNECT="AUTOCONNECT",e.BAD_PASSWORD="BAD_PASSWORD",e.ERROR="ERROR",e.SOAP="SOAP",e.VERIFY="VERIFY"}(q||(q={})),function(e){e.AMAZON="amazon",e.FACEBOOK="facebook",e.GOOGLE="google",e.TWP="washington post",e.APPLE="apple"}(H||(H={}));var B=function(e,t){var n=function(e){return e.replace(/_[A-z]{1}/,(function(e){return e.substr(1,1).toUpperCase()}))};-1!==k.indexOf(t.key)&&(e[t.key]||(e[n(t.key)]=t.value),e.appRequestHeaders&&!e.appRequestHeaders[t.key]&&(e.appRequestHeaders[n(t.key)]=t.value))},Y=function(e){var t=L(),n=L("next_url");if(t instanceof Array&&t.forEach((function(t){return B(e,t)})),"value"in n&&n.value){var r=L(void 0,decodeURIComponent(n.value));r instanceof Array&&r.forEach((function(t){return B(e,t)}))}return e},K=function(){var e=u(g.mark((function e(t){var n,r,a,o,i,c,s,u;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=window.WPAA||{env:"prod"},a=r.env,(t=l({},t,{authflow:!1,remember:"yes",recaptchaType:"invisible",appRequestHeaders:t.appRequestHeaders})).nextUrl?t.nextUrl=decodeURIComponent(t.nextUrl):(t.nextUrl=E[a],"value"in(o=L("next_url"))&&o.value&&(t.nextUrl=decodeURIComponent(o.value),t.nextUrl.match(/case=noa/)&&(t.authflow=!0))),!(t=l({},t,Y(t))).authflow&&!window.location.search.match(/ostype=(ios|android)/)){e.next=15;break}if(t.authflow=!0,c=N(window.location.search,{})){e.next=12;break}if(s=t.nextUrl){e.next=11;break}throw new Error("nextURL couldn't be ascertained from body");case 11:c=N(s,{});case 12:c=null==(i=c="redirect_uri="+c)?void 0:i.replace(/redirect_uri=.*\?/,(function(e){var t=e.split("=");return t[0]+"="+encodeURIComponent(t[1].substr(0,t[1].length-1))+"&"})),t.nextUrl=E[a]+"?"+c+"&case=noa";case 15:return t.requestId=null==(n=t.appRequestHeaders)?void 0:n.requestId,e.next=18,A("/user/authenticate",{method:"POST",credentials:"include",body:JSON.stringify(t)});case 18:return u=e.sent,e.abrupt("return",V(u));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=Object.keys(R),Z=function(){var e=u(g.mark((function e(t,n,r){var a,o,i,c,s,u,l,p;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||E[(null==(a=window.WPAA)?void 0:a.env)||"prod"],n&&(t.appRequestHeaders=n.appRequestHeaders,o=n.clientId,i=n.redirectUri,c=n.scope,s=n.state,o&&i&&c&&s&&(t.authflow=!0,t.clientId=o,t.appRequestHeaders=n.appRequestHeaders,t.nextUrl=r+(r.match(/\?/)?"&":"?")+"client_id="+o+"&redirect_uri="+i+"&scope="+c+"&state="+s+"&case=noa&device_id="+(null==(u=n.appRequestHeaders)?void 0:u.deviceId))),t.nextUrl||(r?t.nextUrl=r:"value"in(l=L("next_url"))&&l.value&&(t.nextUrl=decodeURIComponent(l.value))),e.next=5,A("/user/lookup-account-by-email",{method:"POST",body:JSON.stringify(t)});case 5:if(!(p=e.sent).state||-1===z.indexOf(p.state)){e.next=8;break}return e.abrupt("return",{accountStatus:"",displayName:"",emailExist:!1,error:new Error(R[p.state]),state:null});case 8:return e.abrupt("return",p);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),J=function(e){function t(t,n){var r;return(r=e.call(this,t)||this).message=t,r.data=n,r.stack=(new Error).stack,r}return p(t,e),t}(v(Error)),Q=function(){var e=u(g.mark((function e(t){var n,r,a,o;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,A("/user/getRecaptchaStatus?identifier="+n+"&_v="+(new Date).getTime());case 3:if(r=e.sent,a=r.captcha,o=r.recaptchaToken,!a&&o){e.next=8;break}throw new J("Display recaptcha",{});case 8:return e.abrupt("return",{needsRecaptcha:a,recaptchaToken:o});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){var t=e.callback,n=a.a.useRef(null);return a.a.useEffect((function(){if(!window.grecaptcha){var e=document.createElement("script");e.id="grecaptcha-api",e.src="https://www.google.com/recaptcha/api.js",e.defer=!0,e.async=!0,document.body.appendChild(e),e.onload=function(){if(window.grecaptcha)var e=window.grecaptcha.execute,t=setInterval((function(){e(),clearInterval(t)}),100)}}window.captchaSubmit=function(e){t(e)}}),[n]),a.a.createElement("div",{id:"subs-recaptcha",ref:n,className:"g-recaptcha","data-sitekey":"6Lf0DRoUAAAAAEawkoNEUKcpWx8eh_I7PRArTA9V","data-callback":"captchaSubmit","data-size":"invisible"})},$=a.a.createContext({type:"link",emailSent:!1}),ee=function(e){var t="",n=a.a.useState(e),r=n[0],o=n[1],i=L();if(i instanceof Array){var c=i.find((function(e){return"next_url"===e.key})),s=(null==c?void 0:c.value)||"";t=decodeURIComponent(s).match(/pml=1/)?"pml":""}return a.a.createElement($.Provider,{value:{type:r.type,emailSent:r.emailSent,children:null==e?void 0:e.children,flow:(null==e?void 0:e.flow)||t,setState:function(e){return o(l({},r,e))}}},r.children)},te=function(){var e=Object(r.useState)(!1)[1];return Object(r.useCallback)((function(t){e((function(){throw t}))}),[e])};var ne={"Content-Type":"application/json",Accept:"application/json"},re=function(e){var t=e.appRequestHeaders,n=e.body;if(t){n.appRequestHeaders=t;var r=n.appRequestHeaders.appRequestHeaders;if(r)for(var a in r)r.hasOwnProperty(a)&&(n.appRequestHeaders[a]=r[a]);delete n.appRequestHeaders.appRequestHeaders}},ae=function(e,t){var n=t.match(/\?/)?"&":"?",r=t.split("&"),a=["redirect_uri","scope","state","client_id"],o=r.reduce((function(e,t){var n=t.split("=");if(-1!==a.indexOf(n[0])){var r=n[0].indexOf("_");if(-1!==r){var o=n[0].charAt(r+1);n[0]=n[0].replace("_"+o,o.toUpperCase())}e[n[0]]=n[1]}return e}),{});if(e){var i=e.clientId,c=e.redirectUri,s=e.scope,u=e.state,l=o.clientId,p=o.redirectUri,d=o.scope,f=o.state;l||p||d||f||(t=""+t+n+"client_id="+i+"&redirect_uri="+c+"&scope="+s+"&state="+u)}return t},oe=function(e){var t=e.deviceInfo,n=e.body;if(t){n.appRequestHeaders=t.appRequestHeaders;var r=t.clientId,a=t.redirectUri,o=t.scope,i=t.state;r&&a&&o&&i&&(n.authflow=!0,n.clientId=r,n.redirectUri=a,n.scope=o,n.state=i,n.appRequestHeaders=t.appRequestHeaders),re({appRequestHeaders:t.appRequestHeaders,body:n})}},ie=function(){var e=u(g.mark((function e(t,n){var r;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,l({headers:ne},n));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(){var e=u(g.mark((function e(t,n,r,a){var i,c,s,u,l,p,d,f,h;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=window.WPAA||{env:"prod"},u=s.env,l=w[u]+"/user/on-demand-magic-link",(p={email:t,nextUrl:a,appRequestHeaders:void 0,recaptchaToken:r.recaptchaToken,recaptchaResponse:r.recaptchaResponse,recaptchaType:"invisible",requestId:null==n?void 0:null==(i=n.appRequestHeaders)?void 0:i.requestId}).nextUrl=decodeURIComponent(p.nextUrl||E[u]),p.nextUrl=p.nextUrl+(-1===(null==(c=p.nextUrl)?void 0:c.indexOf("?"))?"?":"&")+"pml=1",oe({deviceInfo:n,body:p}),p.authflow&&n&&(p.nextUrl=ae(n,p.nextUrl)),e.prev=7,e.next=10,ie(l,{method:"POST",credentials:"include",body:JSON.stringify(p)});case 10:if(d=e.sent,f=d.status,h=d.state,"FAILURE"!==f){e.next=15;break}throw new Error(o.b.ENDPOINT_FAILURE);case 15:return e.abrupt("return",{status:f,state:h});case 18:return e.prev=18,e.t0=e.catch(7),e.abrupt("return",{status:"FAILURE",state:"",error:e.t0});case 21:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),se=function(){var e=a.a.useState({text:M,count:0}),t=e[0],n=e[1],o=a.a.useState(!1),i=o[0],c=o[1],s=Object(r.useContext)($),l=s.type,p=s.setState,d=s.flow,f=te(),h=a.a.useContext(C),v=h.email,m=h.appRequestHeaders,_=h.loginState,y=h.nextUrl,w=h.deviceInfo,E=function(){var e=u(g.mark((function e(r){var a,o,i,c,s,u,h,E,b;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.recaptchaToken,i=void 0===o?null:o,c=r.recaptchaResponse,s=void 0===c?null:c,d!==D.FLOW.PML){e.next=7;break}return e.next=4,ce(v,w,{recaptchaResponse:s,recaptchaToken:i,checkRecaptchaStatus:!1,getRecaptchaResponse:!1},y||"");case 4:u=e.sent,e.next=16;break;case 7:if(_!==D.STATUSES.BAD_PASSWORD){e.next=13;break}return e.next=10,K({username:v,password:"",appRequestHeaders:m,requestId:m.requestId||"",recaptchaToken:i,recaptchaResponse:s});case 10:u=e.sent,e.next=16;break;case 13:return e.next=15,Z({email:v,recaptchaToken:i,recaptchaResponse:s},w);case 15:u=e.sent;case 16:if(h=null==(a=u)?void 0:a.error,E=t.count+1,b=h?G:W,!h){e.next=22;break}return f(h),e.abrupt("return");case 22:n({text:b,count:E}),"link"===l&&3!==E&&setTimeout((function(){return n({text:M,count:E})}),5e3),p&&p({emailSent:!0});case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){e.preventDefault(),n({text:j,count:t.count}),function(){var e=u(g.mark((function e(){var t,n,r;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(v);case 2:if(t=e.sent,n=t.error,r=t.recaptchaToken,-1===window.location.search.indexOf("recaptcha=1")){e.next=9;break}c(!0),e.next=15;break;case 9:if(n){e.next=14;break}return e.next=12,E({recaptchaToken:r});case 12:e.next=15;break;case 14:"exception:missing_recaptcha"===n.message&&c(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().catch(console.error)},x=function(){var e=u(g.mark((function e(t){var n;return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,E({recaptchaResponse:t});case 3:null!=(n=window.grecaptcha)&&n.reset&&window.grecaptcha.reset();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(r.Fragment,null,"button"===l&&a.a.createElement("button",{type:"button",className:"default mt-sm btn","data-cy":"send-it-again",onClick:b,disabled:t.text===j},"Send it again"),"link"===l&&a.a.createElement(r.Fragment,null,t.text===M&&a.a.createElement("a",{href:"",className:"magiclink__resend",onClick:b},M)||a.a.createElement("span",{className:"resending "+(t.text===G?"error":"")+" "},t.text),"\xa0or\xa0"),i&&a.a.createElement(X,{callback:x}))},ue=function(e){var t=e.flow;return a.a.createElement(ee,{type:"link",flow:t},a.a.createElement("div",{className:"magiclink__footer mt-md"},a.a.createElement("div",{className:"mb-xxs "},"Don't see the email in your inbox or spam?"),a.a.createElement("div",null,a.a.createElement(se,null),a.a.createElement("a",{href:"https://helpcenter.washingtonpost.com/hc/en-us/requests/new?ticket_form_id=502668"},"contact us"),".")))};ue.displayName="Footer";"undefined"!==typeof window&&window.WPAA&&window.WPAA.env;var le=function(e){function t(t,n,r){var a;return(a=e.call(this,n)||this).name=t,a.message=n,a.data=r,a.stack=(new Error).stack,a}return p(t,e),t}(v(Error));le.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}});var pe=function(e){function t(t,n,r){var a;return(a=e.call(this,n)||this).name=t,a.message=n,a.data=r,a.stack=(new Error).stack,a}return p(t,e),t}(v(Error));pe.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}});var de;!function(e){e.EMPTY_PASSWORD="Please enter a password.",e.INVALID_PASSWORD="Please enter a valid password.",e.API_PASSWORD="Something went wrong"}(de||(de={}));c(".has-pw-manager button {\n  right: 15px; }\n");c('.social-btn {\n  width: 100%;\n  height: 44px;\n  text-shadow: none;\n  transition: opacity 0.2s ease;\n  opacity: 1;\n  -webkit-font-smoothing: antialiased;\n  font-family: "Franklin","Helvetica Neue",Helvetica,Roboto,Arial,sans-serif; }\n  .social-btn:hover {\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n  .social-btn.app-ios {\n    border: 1px solid #000; }\n  .social-btn .social-icon {\n    display: table;\n    margin: 0 auto;\n    background-color: transparent; }\n    .social-btn .social-icon img {\n      transform: translate(-50%, 21%);\n      height: 17px; }\n  .social-btn .social-txt {\n    line-height: 22px;\n    background-color: transparent; }\n  .social-btn .fill-facebook {\n    fill: #3b5998; }\n')}}]);
//# sourceMappingURL=b3252abe.5a596c46f118d5e492ad.js.map
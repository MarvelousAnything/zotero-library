!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var i;(function(){!function(n,r){if(e.exports)return e.exports=r();void 0===(i=function(){return n.TimeMe=r()}.apply(t,[]))||(e.exports=i)}(this,(function(){var e={startStopTimes:{},idleTimeoutMs:3e4,currentIdleTimeMs:0,checkStateRateMs:250,active:!1,idle:!1,currentPageName:"default-page-name",timeElapsedCallbacks:[],userLeftCallbacks:[],userReturnCallbacks:[],trackTimeOnElement:function(t){var n=document.getElementById(t);n&&(n.addEventListener("mouseover",(function(){e.startTimer(t)})),n.addEventListener("mousemove",(function(){e.startTimer(t)})),n.addEventListener("mouseleave",(function(){e.stopTimer(t)})),n.addEventListener("keypress",(function(){e.startTimer(t)})),n.addEventListener("focus",(function(){e.startTimer(t)})))},getTimeOnElementInSeconds:function(t){var n=e.getTimeOnPageInSeconds(t);return n||0},startTimer:function(t){if(t||(t=e.currentPageName),void 0===e.startStopTimes[t])e.startStopTimes[t]=[];else{var n=e.startStopTimes[t],i=n[n.length-1];if(void 0!==i&&void 0===i.stopTime)return}e.startStopTimes[t].push({startTime:new Date,stopTime:void 0}),e.active=!0},stopAllTimers:function(){for(var t=Object.keys(e.startStopTimes),n=0;n<t.length;n++)e.stopTimer(t[n])},stopTimer:function(t){t||(t=e.currentPageName);var n=e.startStopTimes[t];void 0!==n&&0!==n.length&&(void 0===n[n.length-1].stopTime&&(n[n.length-1].stopTime=new Date),e.active=!1)},getTimeOnCurrentPageInSeconds:function(){return e.getTimeOnPageInSeconds(e.currentPageName)},getTimeOnPageInSeconds:function(t){return void 0===e.getTimeOnPageInMilliseconds(t)?void 0:e.getTimeOnPageInMilliseconds(t)/1e3},getTimeOnCurrentPageInMilliseconds:function(){return e.getTimeOnPageInMilliseconds(e.currentPageName)},getTimeOnPageInMilliseconds:function(t){var n=e.startStopTimes[t];if(void 0!==n){for(var i=0,r=0;r<n.length;r++){var o=n[r].startTime,a=n[r].stopTime;void 0===a&&(a=new Date),i+=a-o}return Number(i)}},getTimeOnAllPagesInSeconds:function(){for(var t=[],n=Object.keys(e.startStopTimes),i=0;i<n.length;i++){var r=n[i],o=e.getTimeOnPageInSeconds(r);t.push({pageName:r,timeOnPage:o})}return t},setIdleDurationInSeconds:function(t){var n=parseFloat(t);if(!1!==isNaN(n))throw{name:"InvalidDurationException",message:"An invalid duration time ("+t+") was provided."};return e.idleTimeoutMs=1e3*t,this},setCurrentPageName:function(t){return e.currentPageName=t,this},resetRecordedPageTime:function(t){delete e.startStopTimes[t]},resetAllRecordedPageTimes:function(){for(var t=Object.keys(e.startStopTimes),n=0;n<t.length;n++)e.resetRecordedPageTime(t[n])},resetIdleCountdown:function(){e.idle&&e.triggerUserHasReturned(),e.idle=!1,e.currentIdleTimeMs=0},callWhenUserLeaves:function(e,t){this.userLeftCallbacks.push({callback:e,numberOfTimesToInvoke:t})},callWhenUserReturns:function(e,t){this.userReturnCallbacks.push({callback:e,numberOfTimesToInvoke:t})},triggerUserHasReturned:function(){if(!e.active)for(var t=0;t<this.userReturnCallbacks.length;t++){var n=this.userReturnCallbacks[t],i=n.numberOfTimesToInvoke;(isNaN(i)||void 0===i||i>0)&&(n.numberOfTimesToInvoke-=1,n.callback())}e.startTimer()},triggerUserHasLeftPage:function(){if(e.active)for(var t=0;t<this.userLeftCallbacks.length;t++){var n=this.userLeftCallbacks[t],i=n.numberOfTimesToInvoke;(isNaN(i)||void 0===i||i>0)&&(n.numberOfTimesToInvoke-=1,n.callback())}e.stopAllTimers()},callAfterTimeElapsedInSeconds:function(t,n){e.timeElapsedCallbacks.push({timeInSeconds:t,callback:n,pending:!0})},checkState:function(){for(var t=0;t<e.timeElapsedCallbacks.length;t++)e.timeElapsedCallbacks[t].pending&&e.getTimeOnCurrentPageInSeconds()>e.timeElapsedCallbacks[t].timeInSeconds&&(e.timeElapsedCallbacks[t].callback(),e.timeElapsedCallbacks[t].pending=!1);!1===e.idle&&e.currentIdleTimeMs>e.idleTimeoutMs?(e.idle=!0,e.triggerUserHasLeftPage()):e.currentIdleTimeMs+=e.checkStateRateMs},visibilityChangeEventName:void 0,hiddenPropName:void 0,listenForVisibilityEvents:function(){void 0!==document.hidden?(e.hiddenPropName="hidden",e.visibilityChangeEventName="visibilitychange"):void 0!==document.mozHidden?(e.hiddenPropName="mozHidden",e.visibilityChangeEventName="mozvisibilitychange"):void 0!==document.msHidden?(e.hiddenPropName="msHidden",e.visibilityChangeEventName="msvisibilitychange"):void 0!==document.webkitHidden&&(e.hiddenPropName="webkitHidden",e.visibilityChangeEventName="webkitvisibilitychange"),document.addEventListener(e.visibilityChangeEventName,(function(){document[e.hiddenPropName]?e.triggerUserHasLeftPage():e.triggerUserHasReturned()}),!1),window.addEventListener("blur",(function(){e.triggerUserHasLeftPage()})),window.addEventListener("focus",(function(){e.triggerUserHasReturned()})),document.addEventListener("mousemove",(function(){e.resetIdleCountdown()})),document.addEventListener("keyup",(function(){e.resetIdleCountdown()})),document.addEventListener("touchstart",(function(){e.resetIdleCountdown()})),window.addEventListener("scroll",(function(){e.resetIdleCountdown()})),setInterval((function(){e.checkState()}),e.checkStateRateMs)},websocket:void 0,websocketHost:void 0,setUpWebsocket:function(t){if(window.WebSocket&&t){var n=t.websocketHost;try{e.websocket=new WebSocket(n),window.onbeforeunload=function(n){e.sendCurrentTime(t.appId)},e.websocket.onopen=function(){e.sendInitWsRequest(t.appId)},e.websocket.onerror=function(e){console&&console.log("Error occurred in websocket connection: "+e)},e.websocket.onmessage=function(e){console&&console.log(e.data)}}catch(e){console&&console.error("Failed to connect to websocket host.  Error:"+e)}}return this},websocketSend:function(t){e.websocket.send(JSON.stringify(t))},sendCurrentTime:function(t){var n={type:"INSERT_TIME",appId:t,timeOnPageMs:e.getTimeOnCurrentPageInMilliseconds(),pageName:e.currentPageName};e.websocketSend(n)},sendInitWsRequest:function(t){var n={type:"INIT",appId:t};e.websocketSend(n)},initialize:function(t){var n=e.idleTimeoutMs||30,i=e.currentPageName||"default-page-name",r=void 0;t&&(n=t.idleTimeoutInSeconds||n,i=t.currentPageName||i,r=t.websocketOptions),e.setIdleDurationInSeconds(n).setCurrentPageName(i).setUpWebsocket(r).listenForVisibilityEvents(),e.startTimer()}};return e}))}).call(this)},function(e,t,n){"use strict";n.r(t);n(0),n(2)},function(e,t,n){(function(e){!function(){if(document.querySelectorAll&&document.querySelector&&XMLHttpRequest&&document.addEventListener){var t=document.querySelectorAll("[data-bsp-pv]");if(t&&0!==t.length){for(var n=document.querySelector("script[data-bsp-site]"),i=n?n.getAttribute("data-bsp-site"):null,r="/_track",o=document.querySelector("script[data-bsp-analytics-data]"),a=o?JSON.parse(unescape(o.getAttribute("data-bsp-analytics-data"))):null,s=[],c=0,u=t.length;c<u;++c){var d=t[c].getAttribute("data-bsp-pv");d&&s.push(d)}var l="";document.referrer&&(l=document.referrer);var m=window.localStorage,f=!1,v=!1;if(m){var p=i?"."+i:"",g="bsp.analytics.uniqueVisit"+p,b="bsp.analytics.visitStarted"+p,T="bsp.analytics.lastActivity"+p;function h(e,t){try{m.setItem(e,t)}catch(e){}}m.getItem(g)||(h(g,!0),f=!0);var k=m.getItem(b),I=m.getItem(T),S=C();h(T,S),!k||parseInt(k)+432e5<S?(h(b,S),v=!0):(!I||parseInt(I)+18e5<S)&&(v=!0)}var y=[];f&&y.push("uv"),v&&y.push("v"),s.length>0&&y.push("pv"),""!==l&&y.push("ch");var w=document.querySelector("script[data-bsp-contentid]");if(void 0!==w)var P=w.getAttribute("data-bsp-contentid");M({s:i,p:s,r:l,ci:P,u:window.location.href,e:y}),e.initialize({idleTimeoutInSeconds:30});var O=0,E=1e4,N=32*E;setTimeout((function t(){E<N&&(E*=2),setTimeout(t,E);var n=e.getTimeOnCurrentPageInSeconds(),r=n-O;r>0&&(O=n,(y=[]).push("t"),M({s:i,e:y,p:s,t:r>N?N:r,u:window.location.href}))}),E),window.addEventListener("beforeunload",(function(){var t=e.getTimeOnCurrentPageInSeconds()-O;if(!(t<=0)){(y=[]).push("t");var n={s:i,e:y,p:s,t:t,u:window.location.href};if(navigator.sendBeacon)navigator.sendBeacon(r,JSON.stringify(n));else{var o,a=C()+200;for(M(n,(function(){o=!0}));!(o||C()>a););}}}))}}function C(){return+new Date}function M(e,t){var n,i={};if(a)for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=a[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);var o=new XMLHttpRequest;t?(o.open("POST",r,!1),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&200===o.status&&t()}):o.open("POST",r,!0),o.send(JSON.stringify(i))}}()}).call(this,n(0))}]);
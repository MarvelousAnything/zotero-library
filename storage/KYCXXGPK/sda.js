!function(){"use strict";var i=window.adsConfig,n=window.DARLA,o=window.rapidPageConfig,e=window.YAHOO,t=e.context,d=t.meta,l=void 0===d?{}:d,a=t.feature;l.siteAttribute,l.url;var s=o.rapidConfig;s&&s.keys;var r=e.i13n&&e.i13n.SPACEID,v=function(o,e,t){var d,l,s,v,u,c=null===(d=null==o?void 0:o.meta)||void 0===d?void 0:d.data,f=null==c?void 0:c.adMeta,w="";(null===(s=null===(l=window.vzm)||void 0===l?void 0:l.getPageContext())||void 0===s?void 0:s.ynet)&&(-1!==(null===(u=null===(v=window.location)||void 0===v?void 0:v.search)||void 0===u?void 0:u.indexOf("_spaceid"))&&(w=(null==n?void 0:n.evtSettings("AUTO")).sp));var g=(null==f?void 0:f.site_attribute)||"";if(g=n.evtSettings("AUTO").sa,-1!==a.indexOf("enableMLWAfterArticle")){var m='hashtag="',p=g.indexOf(m),h=m.length+p;-1!==p?g=g.slice(0,h)+"widget-test;"+g.slice(h,g.length):g+=' hashtag="widget-test;"'}var O=function(n){var o,e;return(null===(o=null==i?void 0:i.clientPositionMeta)||void 0===o?void 0:o.positions)?null===(e=null==i?void 0:i.clientPositionMeta)||void 0===e?void 0:e.positions.filter((function(i){return-1!==n.indexOf(i.id)})):n.map((function(n){var o;return null===(o=null==i?void 0:i.positions[n])||void 0===o?void 0:o.meta}))}(e),A=[],I=window.location.protocol+"//"+window.location.host;if(window.location.pathname&&(I+=window.location.pathname),null==O?void 0:O.length){for(var L=0,P=O;L<P.length;L++){var x=P[L];A.push(x.id),x.meta||(x.meta={}),x.meta.hostURL=I,n.addPos(x)}n.add(t,{name:t,ps:e,ref:window.location.href,sa:g,sp:(null==f?void 0:f.spaceid)||w||r}),n.event(t)}},u=function(o,e,t){i&&n&&(n.inProgress()?function(i,o,e){var t=0,d=setInterval((function(){if(n.inProgress()&&"AUTO"===n.inProgress()&&n.abort(),!n.inProgress())return clearInterval(d),void v(i,o,e);t>=20&&(clearInterval(d),n.inProgress()&&(n.abort(),v(i,o,e))),t++}),500)}(o,e,t):v(o,e,t))},c=window.wafer;function f(i){var n,o;if(null===(o=null===(n=window.adsConfig)||void 0===n?void 0:n.clientPositionMeta)||void 0===o?void 0:o.positions){var e=window.adsConfig.clientPositionMeta.positions.map((function(i){return i.id}));if(e.length>0){var t=document.getElementById(window.adsConfig.clientPositionMeta.positions[0].dest);t&&c&&c.utils&&c.utils.elementInView(t,{offsetY:window.adsConfig.clientViewportAdFetchYOffset},c.base.viewport)&&(c.removeListener&&c.removeListener("scroll",f),u(i,e,"CLIENTINVIEWPORT"))}}!function(){var i,n,o,e,t,d,l,a=(null===(i=document.querySelector("#Masterwrap .caas-share-section"))||void 0===i?void 0:i.clientWidth)||0;if(-1!==(null===(e=null===(o=null===(n=window.YAHOO)||void 0===n?void 0:n.context)||void 0===o?void 0:o.feature)||void 0===e?void 0:e.indexOf("modal2deeplinkRedirect"))){var s=document.getElementById("sda-LDRB2");s.style.marginLeft="".concat(a,"px"),s.style.textAlign="left"}if(-1!==(null===(l=null===(d=null===(t=window.YAHOO)||void 0===t?void 0:t.context)||void 0===d?void 0:d.feature)||void 0===l?void 0:l.indexOf("enableWidgetOnDeepLink"))){var r=document.getElementById("sda-WIDGET");r.style.marginLeft="".concat(a,"px"),r.style.textAlign="left"}}()}function w(){c.on("fetch:success",(function(i){var n,o,e=null===(n=null==i?void 0:i.meta)||void 0===n?void 0:n.url,t=null==e?void 0:e.includes("module=relatedStories"),d=null==e?void 0:e.includes("module=relatedContent"),l=null==e?void 0:e.includes("module=moreStories");if(t||d||l){var a=document.getElementById("sda-LDRB2-9"),s=null===(o=null==a?void 0:a.firstChild)||void 0===o?void 0:o.hasChildNodes();a&&!s&&u(i,["LDRB2-9"],"CLIENTSIDELDRB")}}))}c&&c.ready((function(){window.DARLA&&c.on("scroll",f),w()}),window)}();
//# sourceMappingURL=sda.js.map
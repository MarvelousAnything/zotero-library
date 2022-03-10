


(function() {
    var amznAutoTagger=function(a){var c={};c.process=function(e){if(amznAndonCordModel.isAndonCordStatusEnabled()){return false;}d(e,a.trackingId);};var b=["tag","tag-value","tag_value","t"];function d(h,e){var g=false;for(var f=0;f<b.length;f++){if(amznOneTagUtils.isQueryParamPresent(h,b[f])){g=true;break;}}if(!g){amznOneTagUtils.addQueryParam(h,"linkCode","w50");amznOneTagUtils.addQueryParam(h,"tag",e);}}return c;};
    var amznFetchImpression=function(c){var e={};var a=null;e.process=function(g){if(amznAndonCordModel.isAndonCordStatusEnabled()){d(g);return false;}var i=new XMLHttpRequest();i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){if(i.status===200&&i.responseText){var j=JSON.parse(i.responseText);b(j,g);}else{f(g);}}};var h=e.getImpressionRequestUrl(c);i.open("GET",h,true);i.timeout=c.impressionFetchTimeout;i.withCredentials=true;i.ontimeout=f;i.send();};function f(g){amznImpressionModel.init(null,null);d(g);}function b(h,g){amznImpressionModel.init(h.impressionId,h.impressionToken);d(g);}e.setNextStep=function(g){a=g;};function d(g){if(a){a(g);}}e.getImpressionRequestUrl=function(g){var i="/onetag";var h={};h.tracking_id=g.trackingId;h.assocPayloadId=amznSessionStorage.get("assocPayloadId");h.refUrl=amznOneTagUtils.getCurrentUrl();var j="?src=330&pj="+encodeURIComponent(JSON.stringify(h))+"&u="+amznOneTagUtils.getCurrentUrl();return g.aesEndpoint+i+j;};return e;};var amznTransitRecorder=function(b){var e={};var a=null;var d="assocPayloadId";e.process=function(i){if(amznImpressionModel.isUserOptedOut()||amznAndonCordModel.isAndonCordStatusEnabled()){c(i);return false;}var h=amznImpressionModel.get();if(!(g())||f(amznOneTagUtils.getCurrentUrl())){amznSessionStorage.set(d,h.id);}c(i);return true;};function c(h){if(a){a(h);}}function f(i){var h=i.match(/utm_source=/i);return(h!==null);}function g(){var h=amznSessionStorage.get(d);return h;}e.setNextStep=function(h){a=h;};return e;};var amznImpressionAppender=function(a){var b={};b.process=function(c){if(amznImpressionModel.isUserOptedOut()||amznAndonCordModel.isAndonCordStatusEnabled()){return false;}amznOneTagUtils.addQueryParam(c,"imprToken",amznImpressionModel.get().token);amznOneTagUtils.addQueryParam(c,"slotNum",amznLinkSlot.getSlot());return true;};return b;};var amznPixelRecorder=function(b){var d={};var a=null;d.process=function(g){if(amznImpressionModel.isUserOptedOut()||amznAndonCordModel.isAndonCordStatusEnabled()){c(g);return false;}var h=d.createAssocPayload(g);var f=amznImpressionModel.get();var e=b.aesEndpoint+"/onetag/"+f.id+"/pixel?assoc_payload="+encodeURIComponent(h);d.generateImage(e);c(g);return true;};d.generateImage=function(e){if(e){(new Image()).src=e;}};d.createAssocPayload=function(f){var h={};h.refUrl=amznOneTagUtils.getCurrentUrl();h.assocPayloadId=amznSessionStorage.get("assocPayloadId");if(f.nodeName==="#document"){h.logType="onetag_pageload";h.linkCode="w49";}else{if(f.nodeName==="A"){var g=f.search.match(/(linkCode)=([^&]+)/i);h.logType="onetag_textlink";h.slotNum=amznLinkSlot.getSlot();h.destinationURL=f.href;if(g){h.linkCode="w50";}else{h.linkCode="w61";}}}var e=JSON.stringify(h);return e;};d.setNextStep=function(e){a=e;};function c(e){if(a){a(e);}}return d;};var amznImpressionModel=(function(){var b={};var a={};a.init=function(d,c){b.id=d;b.token=c;return b;};a.get=function(){if(Object.keys(b).length===0){b=a.init(null,null);}return b;};a.isUserOptedOut=function(){return(b.token===null||typeof b.token==="undefined");};return a;}());var amznSessionStorage=(function(){var a={};a.get=function(c){var d=null;if(typeof(window.sessionStorage)!=="undefined"){try{d=window.sessionStorage.getItem(c);}catch(b){}}return d;};a.set=function(c,d){if(typeof(window.sessionStorage)!=="undefined"){try{window.sessionStorage.setItem(c,d);}catch(b){}}};return a;}());
    var amznOneTagUtils=(function(){var b={};var a={CA:["ca"],CN:["cn"],IN:["in"],DE:["de"],FR:["fr"],GB:["co.uk"],JP:["jp","co.jp"],US:["com"],MX:["com.mx"],ES:["es"],IT:["it"],AU:["com.au"],BR:["br"],UK:["co.uk"],SA:["sa"],NL:["nl"],AE:["ae"],SG:["sg"]};var c="ots";b.fetchAmznLinks=function(h,e,f){var d=a[e];var g=[];d.forEach(function(m,k){var n=new RegExp("^(http|https)://(www|[\\w\\-\\.]+)?amazon\\.("+m+")/","i");var l=h.getElementsByTagName("a");for(i=0;i<l.length;i++){var j=String(l[i].href);if(j.match(n)&&!isAnExcludedLink(j,f,m)){g.push(l[i]);}}});return g;};b.markLinkAsProcessed=function(d){if(b.isLinkProcessed(d)){return;}b.addQueryParam(d,c,"1");};b.isLinkProcessed=function(d){return d.search.indexOf("ots=1")!==-1;};b.addQueryParam=function(e,d,f){if(e.search.length===0){e.search=e.search.concat("?"+d+"="+f);}else{e.search=e.search.replace(/\?/,"?"+d+"="+f+"&");}};b.isQueryParamPresent=function(f,e){var d="/?"+e+"=([^&]+)|&"+e+"=([^&]+)/";return f.search.match(d);};b.getCurrentUrl=function(){return(window.location!==window.parent.location)?document.referrer:document.location.href;};isAnExcludedLink=function(g,e,h){var f,d=false;for(f=0;f<e.length;f++){var j=e[f].replace("{0}",h);if(g.match(j)){d=true;break;}}return d;};b.isTrackingEnabled=function(){return !window["aa-disable-onetag-tracking"];};return b;}());var amznLinkSlot=(function(){var a={};var b=-1;a.getSlot=function(){return b;};a.increment=function(){b++;};return a;}());var amznAndonCordModel=(function(){var b={};var a={};a.init=function(c){b.status=c;return b;};a.get=function(){if(Object.keys(b).length===0){b=a.init(null);}return b;};a.isAndonCordStatusEnabled=function(){return(typeof b.status==="undefined"||(b.status!==null&&b.status===true));};return a;}());var amznFetchAndonCord=function(c){var e={};var a=null;e.process=function(g){var j=new XMLHttpRequest();j.onreadystatechange=function(){if(j.readyState===XMLHttpRequest.DONE){if(j.status===200&&j.responseText){var k=JSON.parse(j.responseText);b(k,g);}else{f(g);}}};var h=e.getAndonCordRequestUrl(c);j.open("GET",h,true);j.timeout=c.impressionFetchTimeout;j.withCredentials=true;j.ontimeout=f;j.send();};function b(g,h){amznAndonCordModel.init(g.status);d(h);}function f(g){amznAndonCordModel.init(true);d(g);}e.setNextStep=function(g){a=g;};function d(g){if(a){a(g);}}e.getAndonCordRequestUrl=function(g){var h="/onetag/andoncord";return g.aesEndpoint+h;};return e;};var amznPageHandler=function(c){var e={};var b=[];var d=null;var a=function(){if(typeof amznFetchAndonCord!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznFetchAndonCord(c));}if(typeof amznFetchImpression!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznFetchImpression(c));}if(typeof amznTransitRecorder!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznTransitRecorder(c));}if(typeof amznPixelRecorder!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznPixelRecorder(c));}var j=null;if(b.length){j=b[0];for(var h=1;h<b.length;h++){var f=b[h];var k=b[h-1];k.setNextStep(f.process);}var g=b[b.length-1];g.setNextStep(e.completed);}return j;};e.handleRequest=function(){var f=a();if(f){f.process(document);}else{e.completed();}};e.setNextHandler=function(f){d=f;};e.completed=function(){if(d){d();}};return e;};var amznLinkHandler=function(c){var e={};var d=null;var b=[];var a=function(f){if(typeof amznAutoTagger!=="undefined"){b.push(amznAutoTagger(c));}if(typeof amznPixelRecorder!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznPixelRecorder(c));}if(typeof amznImpressionAppender!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznImpressionAppender(c));}};e.handleRequest=function(){var g=amznOneTagUtils.fetchAmznLinks(document,c.region,c.denyList);if(b.length===0){a();}for(var f=0;f<g.length;f++){if(!amznOneTagUtils.isLinkProcessed(g[f])){amznLinkSlot.increment();b.forEach(function(h){h.process(g[f]);});amznOneTagUtils.markLinkAsProcessed(g[f]);}}e.completed();};e.setNextHandler=function(f){d=f;};e.completed=function(){if(d){d();}};return e;};var amznMutationRunner=function(h){var g={};var f=3000;var c={childList:true,subtree:true,chracterData:true};var e=document.body;var j,a;var d=false;function b(){a=Date.now();j=a;h.handleRequest();d=false;}g.process=function(){h.setNextHandler(null);j=Date.now();var k=new MutationObserver(function(l){a=Date.now();if(a-j>f){j=a;h.handleRequest();}else{if(!d){d=true;setTimeout(b,f);}}});k.observe(e,c);};return g;};var amznDynamicContentHandler=function(a){var c={};var b=null;c.handleRequest=function(){if(typeof amznMutationRunner!=="undefined"){amznMutationRunner(a).process();}c.completed();};c.setNextHandler=function(d){b=d;};c.completed=function(){if(b){b();}};return c;};var amznOneTag=function(a){var b={};b.execute=function(){var e=amznPageHandler(a);var c=amznLinkHandler(a);var d=amznDynamicContentHandler(c);c.setNextHandler(d.handleRequest);e.setNextHandler(c.handleRequest);e.handleRequest();};return b;};
var spec = {
trackingId : "curbedcom06-20",
region : "US",
aesEndpoint : "https://assoc-na.associates-amazon.com",
denyList: [   "kdp.amazon.{0}"   , "amazon.{0}/adprefs"   , "advertising.amazon.{0}"   , "services.amazon.{0}/advertising"   , "amazon.{0}/advertise"   , "aws.amazon.{0}"   , "docs.aws.amazon.{0}"   , "developer.amazon.{0}"   , "giveaway.amazon.{0}"   , "powerup.amazon.{0}/admin"   , "quip-amazon.{0}"   , "advantage.amazon.{0}"   , "amazon.{0}/advantage"   , "ams.amazon.{0}"   , "author.amazon.{0}"   , "cscentral-eu.amazon.{0}"   , "org.amazon.{0}"   , "mturk.amazon.{0}"   , "dtp.amazon.{0}"   , "gamedev.amazon.{0}"   , "videodirect.amazon.{0}"   , "smile.amazon.{0}"   , "echo.amazon.{0}"   , "blueprints.amazon.{0}"   , "affiliate-blog.amazon.{0}"   , "jobfinder.amazon.{0}"   , "whispercast.amazon.{0}"   , "affiliate-program.amazon.{0}"   , "freight.amazon.{0}"   , "brandservices.amazon.{0}"   , "aftlite-na.amazon.{0}"   , "smt-tools.amazon.{0}"   , "alexa.amazon.{0}"   , "rapids.amazon.{0}"   , "fba.amazon.{0}"   , "authorize.payments.amazon.{0}"   , "kindleworlds.amazon.{0}"   , "authorcentral.amazon.{0}"   , "primenow.amazon.{0}"   , "kindlescout.amazon.{0}"   , "ignite.amazon.{0}"   , "payments.amazon.{0}"   , "amazonpublishing.amazon.{0}"   , "sell.amazon.{0}"   , "wap-jobs.amazon.{0}"   , "catalyst.amazon.{0}"   , "analytics-bi.amazon.{0}"   , "pay.amazon.{0}"   , "sellercentral.amazon.{0}"   , "source.amazon.{0}"   , "remars.amazon.{0}"   , "cloudcam.amazon.{0}"   , "studios.amazon.{0}"   , "read.amazon.{0}"   , "seller-central.amazon.{0}"   , "images.amazon.{0}"   , "alexaanswers.amazon.{0}"   , "kindle.amazon.{0}"   , "apub.amazon.{0}"   , "login.amazon.{0}"   , "sellercentral-europe.amazon.{0}"   , "services.amazon.{0}"   , "games.amazon.{0}"   , "twitch.amazon.{0}"   , "merch.amazon.{0}"   , "aps.amazon.{0}"   , "iliate-program.amazon.{0}"   , "translation.amazon.{0}"   , "logistics.amazon.{0}"   , "trans-logistics-eu.amazon.{0}"   , "pslip-web-na.amazon.{0}"   ]
};
var onetag = amznOneTag(spec);
onetag.execute();
}());
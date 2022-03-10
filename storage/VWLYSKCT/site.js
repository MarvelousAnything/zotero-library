(function(n,t,i,r){var u=n(t);n.fn.lazyload=function(f){function s(){var t=0;o.each(function(){if(n(this).hasClass("lazy")){var i=n(this);if((!e.skip_invisible||i.is(":visible"))&&!n.abovethetop(this,e)&&!n.leftofbegin(this,e))if(n.belowthefold(this,e)||n.rightoffold(this,e)){if(++t>e.failure_limit)return!1}else i.trigger("appear"),t=0}})}var o=this,h,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,effect_speed:10,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(r!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),r!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),n.extend(e,f)),h=e.container===r||e.container===t?u:n(e.container),0===e.event.indexOf("scroll")&&h.bind(e.event,function(){return s()}),this.each(function(){var i=this,t=n(i);i.loaded=!1;(t.attr("src")===r||t.attr("src")===!1)&&t.is("img")&&t.attr("src",e.placeholder);t.one("appear",function(){if(!this.loaded){if(e.appear){var r=o.length;e.appear.call(i,r,e)}n("<img />").bind("load",function(){var r=t.attr("data-"+e.data_attribute),u,f;t.hide();t.is("img")?t.attr("src",r):t.css("background-image","url('"+r+"')");t[e.effect](e.effect_speed);i.loaded=!0;u=n.grep(o,function(n){return!n.loaded});o=n(u);e.load&&(f=o.length,e.load.call(i,f,e))}).attr("src",t.attr("data-"+e.data_attribute))}});0!==e.event.indexOf("scroll")&&t.bind(e.event,function(){i.loaded||t.trigger("appear")})}),u.bind("resize",function(){s()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&u.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&o.each(function(){n(this).trigger("appear")})}),n(i).ready(function(){s()}),this};n.belowthefold=function(i,f){var e;return e=f.container===r||f.container===t?(t.innerHeight?t.innerHeight:u.height())+u.scrollTop():n(f.container).offset().top+n(f.container).height(),e<=n(i).offset().top-f.threshold};n.rightoffold=function(i,f){var e;return e=f.container===r||f.container===t?u.width()+u.scrollLeft():n(f.container).offset().left+n(f.container).width(),e<=n(i).offset().left-f.threshold};n.abovethetop=function(i,f){var e;return e=f.container===r||f.container===t?u.scrollTop():n(f.container).offset().top,e>=n(i).offset().top+f.threshold+n(i).height()};n.leftofbegin=function(i,f){var e;return e=f.container===r||f.container===t?u.scrollLeft():n(f.container).offset().left,e>=n(i).offset().left+f.threshold+n(i).width()};n.inviewport=function(t,i){return!n.rightoffold(t,i)&&!n.leftofbegin(t,i)&&!n.belowthefold(t,i)&&!n.abovethetop(t,i)};n.extend(n.expr[":"],{"below-the-fold":function(t){return n.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!n.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return n.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!n.rightoffold(t,{threshold:0})},"in-viewport":function(t){return n.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!n.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return n.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!n.rightoffold(t,{threshold:0})}})})(jQuery,window,document);$(document).ready(function(){function p(){var n,t;$(".top-story-large-item-img-wrap img").length>0&&o<=1024&&(n=$(".top-story-large-item-img-wrap img").attr("src"),t=n.replace("TopStoryLargeImageFaceDetect","TopStoryLargeImageFaceDetect_1024"),$(".top-story-large-item-img-wrap img").attr("src",t));$(".category-four-articles-img-wrap img").length>0&&o<=1024&&$(".category-four-articles-img-wrap img").each(function(){n=$(this).attr("data-original");t=n.replace("JD_CategoryFourArticlesFaceDetect","JD_CategoryFourArticlesFaceDetect_1024");$(this).attr("data-original",t)})}function w(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)===" ";)t=t.substring(1);if(t.indexOf(r)===0)return t.substring(r.length,t.length)}return""}function v(n){document.cookie=n+"=; Path=/;  expires=Thu, 01 Jan 1970 00:00:01 GMT;"}function b(n){n!==""&&n!=null&&$(".banner").each(function(){$(this).css("display","none")})}function k(n,t){var r=n.get(0),u=r.tagName.toLowerCase(),f=new RegExp("^<"+u),e=new RegExp("<\\/"+u+">$"),i=r.outerHTML.replace(f,"<"+t).replace(e,"<\/"+t+">");i=i.replace(/&amp;/g,"&");n.replaceWith(i)}function d(n){n===""||n==null?($("script[data-src]").each(function(){var n=$(this);n.attr({src:n.attr("data-src")}).removeAttr("data-src")}),$("template").each(function(){k($(this),"script")})):($(".hide-for-premium").each(function(){$(this).prev("div.fake-br-for-article-body")!=null&&$(this).prev("div.fake-br-for-article-body")!="undefined"&&$(this).prev("div.fake-br-for-article-body").remove();this.remove()}),window.disableUponit=!0)}function g(n){if(n===""||n==null)$(".paywall-before-login").css("display","inline-block"),$(".paywall-after-login").css("display","none");else{console.log("before decodeURI"+n);n=decodeURI(n);console.log("after decodeURI"+n);$(".paywall-before-login").css("display","none");$(".paywall-user-name").html(n);var t=$(".paywall-user-name-full");t!=null&&t!="undefined"&&$(".paywall-user-name-full").html("Hello "+n);$(".paywall-after-login").css("display","inline-block")}}function nt(){$(".daily-edition-a").length>0&&$(".daily-edition-a").click(function(){console.log("clicked daily");event.preventDefault();window.location.href=t!=""&&t!=null?"https://jpost.pressreader.com/jerusalem-post":"/PayWalllogin?returnUrl="+window.location.href})}var tt=document.location.pathname,o,r,u,f,e,n,s,t;const i=document.querySelector(".article-inner-content"),h=document.querySelector(".article-inner-content-breaking-news"),c=document.querySelector(".corona-page-content"),l=c!=null&&c!="undefined"||i!=null&&i!="undefined"||h!=null&&h!="undefined",a=document.querySelector(".fake-container-for-outbrain-sticky"),y=i!=null&&i!="undefined"&&a!=null&&a!="undefined";$("#lnkCancelSubscription").attr("href","/landedpages/CanceledSubscryber.aspx");$("img.lazy").lazyload({effect:"show",failure_limit:999,threshold:220});o=$(window).width();p();r=$(".vertical-links-item");r!=null&&r!="undefined"&&r.length>0&&$(".vertical-links-item").length>1&&($(".vertical-links-item").hover(function(){$(this).find(".vertical-links-img-wrap").css("display","none");$(this).find(".vertical-links-img-wrap.hover").css("display","inline-block")}),$(".vertical-links-item").mouseleave(function(){$(this).find(".vertical-links-img-wrap").css("display","inline-block");$(this).find(".vertical-links-img-wrap.hover").css("display","none")}));u=$(".page-header-info p.minimize");u!==null&&u!=="undefined"&&u.length>0&&(f=$("p.minimize"),e=205,f.each(function(){var n=$(this).text();n.length<e||$(this).html(n.slice(0,e)+'<span>... <\/span><a href="#" class="more">Read More<\/a><span style="display:none;">'+n.slice(e,n.length)+' <a href="#" class="less">Less<\/a><\/span>')}),$("a.more",f).click(function(n){n.preventDefault();$(this).hide().prev().hide();$(this).next().show()}),$("a.less",f).click(function(n){n.preventDefault();$(this).parent().hide().prev().show().prev().show()}));document.location.pathname=="/"&&$(".paywall-login-link").text("Premium Login");n=$(".banner-300X600-left-side")[0];n!=null&&n!="undefined"&&(stickyBanner=n.offsetTop);s=0;window.onscroll=function(){function r(){i!=null&&i!="undefined"&&(window.pageYOffset>i?(t.classList.add("sticky"),$(".sticky .paywall-header-wrap").css("display","inline-block"),$(".paywall-login-link").text("Login")):l||($(".sticky .paywall-header-wrap").css("display","none"),t.classList.remove("sticky"),$(".paywall-login-link").text("Premium Login")))}var i,t=document.getElementById("header-sticky");t!=null&&t!="undefined"&&(i=t.offsetTop);l||r()};t=w("rennabtuohtiweikooc");b(t);d(t);g(t);nt();$(".paywall-sign-out").click(function(){v("rennabtuohtiweikooc");v(".ASPXAUTH");location.reload()})});
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(n){var u,i=n.documentElement,f=i.firstElementChild||i.firstChild,r=n.createElement("body"),t=n.createElement("div");return t.id="mq-test-1",t.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(t),function(n){return t.innerHTML='&shy;<style media="'+n+'"> #mq-test-1 { width: 42px; }<\/style>',i.insertBefore(r,f),u=t.offsetWidth==42,i.removeChild(r),{matches:u,media:n}}}(document);
/*! Respond.js v1.2.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(n){function d(){a(!0)}if(n.respond={},respond.update=function(){},respond.mediaQueriesSupported=n.matchMedia&&n.matchMedia("only all").matches,!respond.mediaQueriesSupported){var t=n.document,i=t.documentElement,e=[],u=[],r=[],o={},v=30,f=t.getElementsByTagName("head")[0]||i,g=t.getElementsByTagName("base")[0],s=f.getElementsByTagName("link"),h=[],y=function(){for(var f=s,c=f.length,r=0,t,i,u,e;r<c;r++)t=f[r],i=t.href,u=t.media,e=t.rel&&t.rel.toLowerCase()==="stylesheet",!i||!e||o[i]||(t.styleSheet&&t.styleSheet.rawCssText?(w(t.styleSheet.rawCssText,i,u),o[i]=!0):(/^([a-zA-Z:]*\/\/)/.test(i)||g)&&i.replace(RegExp.$1,"").split("/")[0]!==n.location.host||h.push({href:i,media:u}));p()},p=function(){if(h.length){var n=h.shift();nt(n.href,function(t){w(t,n.href,n.media);o[n.href]=!0;p()})}},w=function(n,t,i){var o=n.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),s=o&&o.length||0,t=t.substring(0,t.lastIndexOf("/")),v=function(n){return n.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},y=!s&&i,h=0,f,c,r,l,p;for(t.length&&(t+="/"),y&&(s=1);h<s;h++)for(f=0,y?(c=i,u.push(v(n))):(c=o[h].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,u.push(RegExp.$2&&v(RegExp.$2))),l=c.split(","),p=l.length;f<p;f++)r=l[f],e.push({media:r.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:u.length-1,hasquery:r.indexOf("(")>-1,minw:r.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:r.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});a()},c,b,k=function(){var u,r=t.createElement("div"),n=t.body,f=!1;return r.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=f=t.createElement("body"),n.style.background="none"),n.appendChild(r),i.insertBefore(n,i.firstChild),u=r.offsetWidth,f?i.removeChild(n):n.removeChild(r),l=parseFloat(u)},l,a=function(n){var nt="clientWidth",tt=i[nt],it=t.compatMode==="CSS1Compat"&&tt||t.body[nt]||tt,d={},ot=s[s.length-1],rt=(new Date).getTime(),o,h,g;if(n&&c&&rt-c<v){clearTimeout(b);b=setTimeout(a,v);return}c=rt;for(o in e){var y=e[o],p=y.minw,w=y.maxw,ut=p===null,ft=w===null,et="em";!p||(p=parseFloat(p)*(p.indexOf(et)>-1?l||k():1));!w||(w=parseFloat(w)*(w.indexOf(et)>-1?l||k():1));y.hasquery&&(ut&&ft||!(ut||it>=p)||!(ft||it<=w))||(d[y.media]||(d[y.media]=[]),d[y.media].push(u[y.rules]))}for(o in r)r[o]&&r[o].parentNode===f&&f.removeChild(r[o]);for(o in d)h=t.createElement("style"),g=d[o].join("\n"),h.type="text/css",h.media=o,f.insertBefore(h,ot.nextSibling),h.styleSheet?h.styleSheet.cssText=g:h.appendChild(t.createTextNode(g)),r.push(h)},nt=function(n,t){var i=tt();i&&(i.open("GET",n,!0),i.onreadystatechange=function(){i.readyState==4&&(i.status==200||i.status==304)&&t(i.responseText)},i.readyState!=4)&&i.send(null)},tt=function(){var n=!1;try{n=new XMLHttpRequest}catch(t){n=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return n}}();y();respond.update=y;n.addEventListener?n.addEventListener("resize",d,!1):n.attachEvent&&n.attachEvent("onresize",d)}})(this);
webpackJsonp([4],[function(e,t){e.exports=jQuery},,,,,,,function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(3);t.a=function(){o()(".js-carousel").each(function(e){var t=new i(this,{cellAlign:"left",contain:!0,groupCells:!0,selectedAttraction:.03,friction:.3,imagesLoaded:!0,percentPosition:!1,wrapAround:!1});t.on("dragStart",function(e,t){document.ontouchmove=function(e){e.preventDefault()}}),t.on("dragEnd",function(e,t){document.ontouchmove=function(e){return!0}}),o()(this).css("opacity","1"),o()(this).css("height","auto")})}},,,function(e,t,n){"use strict";var a=n(6),o=n.n(a);t.a=function(e){"undefined"!=typeof fundingPushStations&&""!=fundingPushStations?fundingPushStations.includes(o.a.get("pbsol.station"))?e.show():e.hide():e.show()}},,,,,,function(e,t,n){n(17),e.exports=n(59)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(18),s=n(7),r=n(30),l=n(31),c=n(32),d=n(34),u=n(42),p=n(43),h=n(44),v=n(45),f=n(46),g=n(47),m=n(48),b=n(49),_=n(10),w=n(50),y=n(51),j=n(52),C=n(53),k=n(54),x=n(55),P=n(56),A=n(12);o()(function(){var e=this;if(o()(".js-menu").length>0&&Object(i.a)(),o()(".single-post").length>0&&Object(r.a)(),o()(".js-live-blog").length>0&&n.e(2).then(function(e){(0,n(13).default)()}.bind(null,n)).catch(n.oe),o()(".js-tabs").length>0&&Object(l.a)(),o()(".js-audio").length>0&&Object(c.a)(),o()("#datepicker").length>0)new A({field:o()("#datepicker")[0],trigger:o()("#datepicker-button")[0],maxDate:new Date(Date.now())});o()(".js-share").length>0&&Object(d.a)(),o()(".js-series-player").length>0&&Object(u.a)(),o()(".js-comments").length>0&&n.e(0).then(function(t){var a=n(14).default;e.comments=new a}.bind(null,n)).catch(n.oe),o()('[class*="wp-image"]').length>0&&Object(v.a)(),o()(".js-narrative__page").length>0&&Object(f.a)(),o()(".js-videos").length>0&&n.e(1).then(function(t){var a=n(15).default;e.videos=new a}.bind(null,n)).catch(n.oe),o()(".js-author-bio").length>0&&Object(g.a)(),o()(".js-podcast").length>0&&Object(m.a)(),o()(".js-topper").length>0&&Object(b.a)(),o()(".js-debate-slider").length>0&&debateTopper(),o()(".js-debate-slider-home").length>0&&Object(j.a)(),(o()(".js-elections-nav-links-toggle").length>0||o()(".js-state-nav").length>0)&&Object(C.a)(),o()(".js-conventions").length>0&&Object(k.a)(),o()(".js-general-election-2020").length>0&&Object(x.a)(),o()(".js-error-search").length>0&&Object(P.a)(),h.a.autoload(),y.a.autoload()}),o()(window).on("load",function(){o()(".js-recirc").length>0&&Object(s.a)(),y.a.deferredAutoload(),o()(".js-popup").length>0&&Object(p.a)(),o()(".newsmatch").length>0&&Object(_.a)(o()(".newsmatch")),Object(w.a)()})},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=o()(".js-menu-open"),s=o()(".js-menu-close"),r=o()(".js-menu"),l=o()("body"),c=o()(".js-menu-overlay");function d(){l.addClass("inactive"),l.on("keydown",p),r.addClass("open"),r.find("a").first().focus(),c.css("visibility","visible"),c.animate({opacity:.6},200)}function u(){l.removeClass("inactive"),l.off("keydown",p),r.removeClass("open"),i.focus(),c.animate({opacity:0},200,function(){c.css("visibility","hidden")})}function p(e){var t=o()(e.target);27===e.which?(e.preventDefault(),u()):9===e.which&&e.shiftKey?r.find("a").first().is(t)&&(e.preventDefault(),s.focus()):9===e.which&&s.is(t)&&(e.preventDefault(),r.find("a").first().focus())}t.a=function(){i.on("click",d),s.on("click",u),o.a.get(scriptvars.ajax_url,{action:"recirc_watch_live"},function(e){e.collection&&e.collection.length>0?o()(".nav__live").addClass("nav__live--active"):o()(".nav__live").removeClass("nav__live--active")}).fail(function(){o()(".nav__live").removeClass("nav__live--active")})}},,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=o()(".js-post__hero-video"),s=o()(".js-post__byline--side"),r=o()(".js-post__byline--side .post__byline-name-hyphenated span");function l(e,t,n){for(var a="",o=0,i=0;i<t.length&&o<e.length;i++)a+=e.substr(o,t[i]),o+t[i]<e.length&&(a+=n),o+=t[i];return a+=e.substr(o)}t.a=function(){i.length>0&&s.length>0&&s.addClass("post__byline--below-video"),function(){var e=o()(".body-text iframe[src*='//player.vimeo.com'], .body-text iframe[src*='youtube.com'], .body-text iframe[src*='//player.pbs.org'], .body-text iframe.responsive-video");if(!(e.length<1)){var t=o()(".body-text p:not(.wp-caption-text)");e.each(function(){o()(this).data("aspectRatio",this.height/this.width),o()(this).removeAttr("height"),o()(this).removeAttr("width")}),o()(window).resize(function(){var n=t.width();e.each(function(){var e=o()(this);e.width(n),e.data("aspectRatio")?e.height(n*e.data("aspectRatio")):e.height(.562*n)})}).resize()}}(),function(){var e=r.text().split(" ");r.empty();for(var t=0;t<e.length;t++){var n=l(e[t],[11,11,11],"-");0===t?r.append(n):r.append(" "+n)}r.css("opacity","1")}()}},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=o()(".js-tab"),s=o()(".js-tabgroup");function r(){window.location.hash.length?c(window.location.hash):u()}function l(e){e.preventDefault();var t=e.currentTarget.hash;window.location.hash=t,c(t)}function c(e){d();try{!function(e){var t=".js-tab-".concat(e.substring(1)),n=o()(t);if(!n.length)throw"Could not find element ".concat(t);n.addClass("tabs__tab--active")}(e),function(e){var t=o()(e);if(!t.length)throw"Could not find element ".concat(e);t.show()}(e)}catch(e){console.error(e),u()}}function d(){i.removeClass("tabs__tab--active"),s.children("div").hide()}function u(){var e=o()(".js-tabs a:first-of-type"),t=o()(".js-tabgroup > div:first-of-type");d(),e.addClass("tabs__tab--active"),t.show()}t.a=function(){d(),r(),i.on("click",l),window.onhashchange=r}},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(33);n.n(i);t.a=function(){o()("audio").audioPlayer()}},function(e,t,n){(function(e){!function(e,t,n,a){var o="ontouchstart"in t,i=o?"touchstart":"mousedown",s=o?"touchmove":"mousemove",r=o?"touchcancel":"mouseup",l=function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),a=Math.ceil(e%3600%60);return(0==t?"":t>0&&t.toString().length<2?"0"+t+":":t+":")+(n.toString().length<2?"0"+n:n)+":"+(a.toString().length<2?"0"+a:a)},c=function(e){var t=n.createElement("audio");return!(!t.canPlayType||!t.canPlayType("audio/"+e.split(".").pop().toLowerCase()+";").replace(/no/,""))};e.fn.audioPlayer=function(t){t=e.extend({classPrefix:"audioplayer",strPlay:"Play",strPause:"Pause",strVolume:"Volume"},t);var n={},a={playPause:"playpause",playing:"playing",time:"time",timeCurrent:"time-current",timeDuration:"time-duration",bar:"bar",barLoaded:"bar-loaded",barPlayed:"bar-played",volume:"volume",volumeButton:"volume-button",volumeAdjust:"volume-adjust",noVolume:"novolume",mute:"mute",mini:"mini"};for(var d in a)n[d]=t.classPrefix+"-"+a[d];return this.each(function(){if("audio"!=e(this).prop("tagName").toLowerCase())return!1;var a=e(this),d=a.attr("src"),u=""===(u=a.get(0).getAttribute("autoplay"))||"autoplay"===u,p=""===(p=a.get(0).getAttribute("loop"))||"loop"===p,h=!1;void 0===d?a.find("source").each(function(){if(void 0!==(d=e(this).attr("src"))&&c(d))return h=!0,!1}):c(d)&&(h=!0);var v=e('<div class="'+t.classPrefix+'">'+(h?e("<div>").append(a.eq(0).clone()).html():'<embed src="'+d+'" width="0" height="0" volume="100" autostart="'+u.toString()+'" loop="'+p.toString()+'" />')+'<div class="'+n.playPause+'" title="'+t.strPlay+'"><a href="#">'+t.strPlay+"</a></div></div>"),f=(f=h?v.find("audio"):v.find("embed")).get(0);if(h){v.find("audio").css({width:0,height:0,visibility:"hidden"}),v.append('<div class="'+n.time+" "+n.timeCurrent+'"></div><div class="'+n.bar+'"><div class="'+n.barLoaded+'"></div><div class="'+n.barPlayed+'"></div></div><div class="'+n.time+" "+n.timeDuration+'"></div><div class="'+n.volume+'"><div class="'+n.volumeButton+'" title="'+t.strVolume+'"><a href="#">'+t.strVolume+'</a></div><div class="'+n.volumeAdjust+'"><div><div></div></div></div></div>');var g=v.find("."+n.bar),m=v.find("."+n.barPlayed),b=v.find("."+n.barLoaded),_=v.find("."+n.timeCurrent),w=v.find("."+n.timeDuration),y=v.find("."+n.volumeButton),j=v.find("."+n.volumeAdjust+" > div"),C=0,k=function(e){theRealEvent=o?e.originalEvent.touches[0]:e,f.currentTime=Math.round(f.duration*(theRealEvent.pageX-g.offset().left)/g.width())},x=function(e){theRealEvent=o?e.originalEvent.touches[0]:e,f.volume=Math.abs((theRealEvent.pageY-(j.offset().top+j.height()))/j.height())},P=setInterval(function(){f.buffered.length>0&&(b.width(f.buffered.end(0)/f.duration*100+"%"),f.buffered.end(0)>=f.duration&&clearInterval(P))},100),A=f.volume,T=f.volume=.111;Math.round(1e3*f.volume)/1e3==T?f.volume=A:v.addClass(n.noVolume),w.html("&hellip;"),_.text(l(0)),f.addEventListener("loadeddata",function(){w.text(l(f.duration)),j.find("div").height(100*f.volume+"%"),C=f.volume}),f.addEventListener("timeupdate",function(){_.text(l(f.currentTime)),m.width(f.currentTime/f.duration*100+"%")}),f.addEventListener("volumechange",function(){j.find("div").height(100*f.volume+"%"),f.volume>0&&v.hasClass(n.mute)&&v.removeClass(n.mute),f.volume<=0&&!v.hasClass(n.mute)&&v.addClass(n.mute)}),f.addEventListener("ended",function(){v.removeClass(n.playing)}),g.on(i,function(e){k(e),g.on(s,function(e){k(e)})}).on(r,function(){g.unbind(s)}),y.on("click",function(){return v.hasClass(n.mute)?(v.removeClass(n.mute),f.volume=C):(v.addClass(n.mute),C=f.volume,f.volume=0),!1}),j.on(i,function(e){x(e),j.on(s,function(e){x(e)})}).on(r,function(){j.unbind(s)})}else v.addClass(n.mini);u&&v.addClass(n.playing),v.find("."+n.playPause).on("click",function(){return v.hasClass(n.playing)?(e(this).attr("title",t.strPlay).find("a").html(t.strPlay),v.removeClass(n.playing),h?f.pause():f.Stop()):(e(this).attr("title",t.strPause).find("a").html(t.strPause),v.addClass(n.playing),h?f.play():f.Play()),!1}),a.replaceWith(v)}),this}}(e,window,document)}).call(t,n(0))},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(9),s=n.n(i),r=o()(".js-share-more"),l=o()(".js-share-list");t.a=function(e){var t,n;o()(".js-share").on("click",function(e){var t,n,a,i;e.preventDefault(),t=e.currentTarget.href,n=o()(window).height()/2-275,a=o()(window).width()/2-400,i="width=".concat(800,", height=").concat(550,", top=").concat(n,", left=").concat(a,", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"),window.open(t,"shareWindow",i)}),r.on("click",function(e){o()(e.currentTarget).next().fadeIn(100),o()(e.currentTarget).next().addClass("js-share-open")}),o()(document).on("click touchstart",function(e){o()(e.target).closest(r).length||o()(e.target).closest(l).length||l.is(":visible")&&l.fadeOut(100,function(){o()(this).removeClass("js-share-open")})}),t=new s.a(".share__copy-to-clipboard"),n=o()(".share__copy-to-clipboard"),t.on("success",function(e){n.text("Copied!"),setTimeout(function(){n.text("Copy URL"),n.blur()},3e3),e.clearSelection()}),t.on("error",function(e){n.text("Not Supported"),setTimeout(function(){n.addClass("share__copy-to-clipboard--disabled"),n.blur()},3e3)})}},,,,,,,,function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(){var e=0,t=seriesPosts.length,n="#js-hero-player",a=".player-countdown",i=".player-countdown span";o()(n).attr("src",o()(n).attr("src")),o()(".js-watch-next").on("click",function(e){r(),this.blur(),e.preventDefault()}),o()(".js-article-next").on("click",function(e){r(),this.blur(),e.preventDefault()});var s=!1;function r(){e<t-1?e++:e=0;var a,i=seriesPosts[e].coveId,s=seriesPosts[e].overrideId;s?o()(n).attr("src",s+"?&autoplay=1&modestbranding=1&rel=0"):o()(n).attr("src","https://player.pbs.org/widget/partnerplayer/"+i+"/?start=0&end=0&chapterbar=false&endscreen=false&topbar=false&autoplay=true"),l(),l(),a=seriesPosts[e].title,o()(".js-video-title").html(a),o()(".js-video-part").html(e+1)}function l(){var n;n=e==t-1?0:e+1,o()(".js-article-next").css("display","none"),o()('.js-article-next[data-index="'+n+'"]').css("display","block")}o()(window).on("message",function(e){var t=e.originalEvent.data;"video::finished"==t&&0==s&&(s=!0,d()),"video::playing"==t&&(s=!1)});var c=3;function d(e){o()(a).css("display","block"),0!=s?0===c?(o()(i).text(c),r(),o()(a).css("display","none"),c=3):(o()(i).text(c),c--,setTimeout(d,1e3)):o()(a).css("display","none")}}},function(e,t,n){"use strict";var a,o=n(0),i=n.n(o),s=n(6),r=n.n(s),l=(n(10),i()(".js-popup")),c=i()(".js-popup-close"),d=i()(".js-popup-link"),u=i()(".js-footer");function p(){var e=i()(window).scrollTop();Math.abs(a-e)>300&&(i()(window).off("scroll"),l.addClass("popup--visible"),c.focus(),u.addClass("footer__sub--popup-visible"))}function h(){l.removeClass("popup--visible"),i()(window).unbind("scroll"),r.a.set("popupIsClosed",1,{expires:7,path:"/newshour",secure:!0}),u.removeClass("footer__sub--popup-visible")}t.a=function(){var e,t;c.on("click",h),d.on("click",function(e){e.preventDefault(),h(),window.location=d.attr("href")}),1!=r.a.get("popupIsClosed")&&(a=i()(window).scrollTop(),i()(window).on("scroll",(e=500,t=!1,function(){t||(p.call(),t=!0,setTimeout(function(){t=!1},e))})))}},function(e,t,n){"use strict";var a=n(0),o=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=o()(t),this.$=function(e){return a.$el.find(e)},this.init()}var t,n,a;return t=e,a=[{key:"autoload",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".subscribe-form";o()(t).each(function(t,n){return new e(n)})}}],(n=[{key:"init",value:function(){var e=this.$(".form-success"),t=this.$(".form-error"),n=this.$(".form-fields"),a=this.$('input[name="email"]'),i=this.$('input[name="newsletter"]').val(),s=this.$('input[name="newsletter[]"]'),r=this.$('input[name="signup_location"]');this.$el.submit(function(l){if(l.preventDefault(),s.length>0){var c=[];s.each(function(){o()(this).is(":checked")&&c.push(o()(this).val())}),i=c.join(",")}var d={action:"newsletter_subscribe",email:a.val(),newsletter:i,signup_location:r.val()};return o.a.post(scriptvars.ajax_url,d,function(a){t.hide(),n.hide(),e.html(a.message).show()}).fail(function(n){t.html(n.responseJSON.message).show(),e.hide()}),!1})}}])&&i(t.prototype,n),a&&i(t,a),e}();t.a=s},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=o()('[class*="wp-image"]');t.a=function(){i.each(function(){var e=o()(this)[0].title;e.length>0&&o()(this).next(".wp-caption-text").prepend('<span class="wp-image-custom-title">'+e+"</span>")})}},function(e,t,n){"use strict";(function(e){var a=n(11),o=n.n(a),i=e(".js-narrative__nav"),s=e(".js-chapter-link"),r=e(".js-back-to-top"),l=!0,c=!1,d=e(".narrative__chapter");function u(){var t=e(window).scrollTop();t>600&&!0===l?(l=!1,i.addClass("narrative__nav--visible")):t<=600&&!1===l&&(l=!0,i.removeClass("narrative__nav--visible"))}function p(){window.location.hash.length&&v(window.location.hash)}function h(e){e.preventDefault();var t=e.currentTarget.hash;window.location.hash=t,v(t)}function v(t){var n=".".concat(t.substring(1));c=!0,e("html, body").animate({scrollTop:e(n).offset().top},800,function(){c=!1,g()})}function f(){c=!0,e("html, body").animate({scrollTop:0},800,function(){c=!1,g()})}function g(){var t=e(window).scrollTop()+e(window).height();!1===c&&d.each(function(n){var a=e(this).offset().top,o=a+e(this).height(),i=e(".narrative__nav-chapter:eq("+n+")");a<=t&&o>=t?(i.focus(),i.addClass("narrative__nav-chapter--current")):i.removeClass("narrative__nav-chapter--current")})}t.a=function(){e(window).bind("scroll",(t=100,n=!1,function(){n||(function(){u(),g()}.call(),n=!0,setTimeout(function(){n=!1},t))})),setInterval(u,1e3),u(),g(),p(),s.on("click",h),r.on("click",f),window.onhashchange=p,window.sr=o()({reset:!1,mobile:!1,distance:0,duration:250,scale:1,delay:0,viewFactor:.2,easing:"ease-in-out"}),sr.reveal(".js-reveal");var t,n}}).call(t,n(0))},function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(){var e=o()(".js-author-bio-toggle"),t=o()("body");e.on("click",function(e){e.preventDefault(),t.toggleClass("js-author-bio-is-visible")})}},function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(){o()(".js-transcript-open").on("click",function(e){o()(".podcast-transcript-modal").toggleClass("visible"),e.preventDefault()}),o()(".podcast-transcript-modal-close").on("click",function(){o()(".podcast-transcript-modal").toggleClass("visible")}),o()(".podcast-transcript-modal-overlay").on("click",function(){o()(".podcast-transcript-modal").toggleClass("visible")})}},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(3);t.a=function(){if(o()(".js-topper-slider").length>0){var e=o()(".js-topper-slider"),t=new i(".js-topper-slider",{cellAlign:"left",contain:!0,groupCells:!1,selectedAttraction:.03,friction:.3,imagesLoaded:!0,percentPosition:!1,wrapAround:!1,arrowShape:{x0:0,x1:50,y1:50,x2:65,y2:35,x3:30}});t.on("change",function(e){console.log("Flickity change "+e)}),t.on("dragStart",function(t,n){e.addClass("dragging"),document.ontouchmove=function(e){console.log("start"),e.preventDefault()}}),t.on("dragEnd",function(t,n){e.removeClass("dragging"),document.ontouchmove=function(e){return!0}}),e.removeClass("js-slider-loading")}}},function(e,t,n){"use strict";t.a=function(){if(void 0!==document.addEventListener){var e="",t="";if(void 0!==document.hidden?(e="hidden",t="visibilitychange"):void 0!==document.msHidden?(e="msHidden",t="msvisibilitychange"):void 0!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),""!=e){var n=0;document.addEventListener(t,function(){document[e]?n=Math.floor(Date.now()/1e3):Math.floor(Date.now()/1e3)-n>900&&window.location.reload()},!1)}}}},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(7);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var c=function(){function e(){s(this,e)}return l(e,null,[{key:"homepage",value:function(){var e=o()("#recirc-popular");e.length>0&&o.a.get(scriptvars.ajax_url,{action:"recirc_popular"},function(t){e.html(t.html)}).done(function(){Object(i.a)()});var t=o()(".home__recirc-categories");t.length>0&&o.a.get(scriptvars.ajax_url,{action:"recirc_categories"},function(e){t.html(e.html)});var n=o()(".home__liveblog-updates"),a=o()(".home__liveblog-updates").data("slug");if(n.length>0){var s=function(){o.a.get(scriptvars.ajax_url,{action:"live_updates",slug:a,entries:4},function(e){"html"in e&&n.html(e.html)})};s(),setInterval(function(){s()},12e4)}}},{key:"recircLatest",value:function(){var e=o()("#recirc-latest");e.length>0&&o.a.get(scriptvars.ajax_url,{action:"recirc_latest"},function(t){"html"in t&&e.html(t.html)}).done(function(){Object(i.a)()})}},{key:"recircTrending",value:function(){var e=o()(".sidebar__trending");e.length>0&&o.a.get(scriptvars.ajax_url,{action:"recirc_trending"},function(t){"html"in t&&e.html(t.html)})}}]),e}(),d=function(){function e(){s(this,e)}return l(e,null,[{key:"homepage",value:function(){var e=o()(".home__recirc-originals");e.length>0&&o.a.get(scriptvars.ajax_url,{action:"recirc_originals"},function(t){e.html(t.html)}).done(function(){Object(i.a)()})}}]),e}(),u=function(){function e(){s(this,e)}return l(e,null,[{key:"autoload",value:function(){switch(window.location.pathname){case scriptvars.base_path:c.homepage();break;default:c.recircTrending(),c.recircLatest()}}},{key:"deferredAutoload",value:function(){switch(window.location.pathname){case scriptvars.base_path:d.homepage()}}}]),e}();t.a=u},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(3);t.a=function(){var e=new i(".js-debate-slider-home",{cellAlign:"left",contain:!0,groupCells:!1,selectedAttraction:.03,friction:.3,imagesLoaded:!0,percentPosition:!1,wrapAround:!0,arrowShape:{x0:0,x1:50,y1:50,x2:65,y2:35,x3:30}});e.on("change",function(e){console.log("Flickity change "+e)}),e.on("dragStart",function(e,t){o()(".js-debate-slider-home").addClass("dragging"),document.ontouchmove=function(e){console.log("start"),e.preventDefault()}}),e.on("dragEnd",function(e,t){o()(".js-debate-slider-home").removeClass("dragging"),document.ontouchmove=function(e){return!0}}),o()(".js-debate-slider-home").removeClass("js-slider-loading")}},function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(){function e(){o()(".elections-nav-links").toggleClass("hidden"),o()(".js-elections-nav-links-toggle").toggleClass("nav-visible");var e=o()(".js-elections-nav-links-toggle span").text();o()(".js-elections-nav-links-toggle span").text("Show pages"==e?"Hide pages":"Show pages")}o()(".js-elections-nav-links-toggle").on("click",function(){e()});var t=window.location.href.split("?")[0];o()(".elections-nav-links a").each(function(){var e=this.href;t==e&&o()(this).closest("a").addClass("active")});var n={};location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,a){n[t]=a}),n.nav&&e(),o()(".page-state-results-state-name").on("click",function(){o()(".js-state-nav-menu").toggleClass("hidden"),o()(".js-state-nav").toggleClass("nav-visible")}),o()(".elections-nav-state-results-state-nav").on("click",function(e){o()(".js-top-state-nav").toggleClass("hidden"),o()(".js-state-nav-button").toggleClass("nav-visible")})}},function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(3);t.a=function(){o()(".js-convention-speaker-toggle").on("click",function(){o()(this).closest(".convention-speaker").find(".convention-speaker__more").toggleClass("expand"),o()(this).toggleClass("expanded"),o()(this).hasClass("expanded")?o()(this).find("span").html("less"):o()(this).find("span").html("more")}),o()(".js-journalists-carousel").each(function(e){var t={cellAlign:"left",contain:!0,groupCells:!0,selectedAttraction:.03,friction:.3,imagesLoaded:!0,percentPosition:!1,wrapAround:!0};o()(window).width()<1200&&(t.cellAlign="center");var n=new i(this,t);n.on("dragStart",function(e,t){document.ontouchmove=function(e){e.preventDefault()}}),n.on("dragEnd",function(e,t){document.ontouchmove=function(e){return!0}}),o()(this).css("opacity","1"),o()(this).css("height","auto")}),o()(".js-convention-play-button").on("click",function(e){!function(e){var t=document.getElementById("youtube-api"),n=e.getAttribute("data-video-id");if(null===t){var a=document.createElement("script"),o=document.getElementsByTagName("script")[0];a.src="https://www.youtube.com/iframe_api",a.id="youtube-api",o.parentNode.insertBefore(a,o)}window.onYouTubeIframeAPIReady=function(){window.player=new window.YT.Player(e,{videoId:n,playerVars:{autoplay:1,modestbranding:1,rel:0,playsinline:1}})}}(o()("#video-player")[0]),o()(".js-convention-embed").addClass("load"),setTimeout(function(){o()(".js-convention-embed").addClass("play"),o()(".js-convention-embed").removeClass("load")},1e3),o()([document.documentElement,document.body]).animate({scrollTop:o()("#video-player").offset().top-100},1e3),e.preventDefault()});var e=o()(".sc__liveblog-updates"),t=o()(".sc__liveblog-updates").data("slug");if(e.length>0){var n=function(){o.a.get(scriptvars.ajax_url,{action:"live_updates",slug:t,entries:4},function(t){"html"in t&&e.html(t.html)})};n(),setInterval(function(){n()},12e4)}}},function(e,t,n){"use strict";(function(e){e(".general-results-selector-bar__state-select").length>0&&(n(e(".general-results-selector-bar__state-select option:selected").val()),e(".general-results-selector-bar__state-select select").on("change",function(){n(this.value)}));function n(t){var n=e(".general-results-selector-bar__state-select option:selected").text().toLowerCase().split(" ").join("-");e(".general-results-selector-bar__state-select-results span").text(t),e(".general-results-selector-bar__state-select-results a").attr("href","https://pbs.org/newshour/elections-2020/"+n),e(".general-results-selector-bar__state-select-initiatives").hide();["AL","AK","AZ","AR","CA","CO","DC","FL","GA","IL","IA","KY","LA","MD","MA","MI","MS","MO","MT","NE","NV","NJ","NM","ND","OK","OR","RI","SD","UT","VA","WA"].includes(t)&&(e(".general-results-selector-bar__state-select-initiatives span").text(t),e(".general-results-selector-bar__state-select-initiatives a").attr("href","https://pbs.org/newshour/elections-2020/"+n+"/ballot-initiatives"),e(".general-results-selector-bar__state-select-initiatives").show())}t.a=function(){e(".general-home-pre-election-topper__tab").on("click",function(){var t=e(this).data("tab-open");e(".general-home-pre-election-topper__tab").removeClass("tab-active"),e(this).addClass("tab-active"),e(".general-home-pre-election-topper__tab-content").addClass("tab-hidden"),e(".general-home-pre-election-topper__tab-contents").find("[data-tab='"+t+"']").removeClass("tab-hidden")}),e(".general-home-post-election-topper__tab").on("click",function(){if(e(this).hasClass("general-home-post-election-topper__tab--next")){var t=e(".general-home-post-election-topper__tab-content").length,n=e(".general-home-post-election-topper__tab.tab-active").data("tab-open");e(".general-home-post-election-topper__tab").removeClass("tab-disabled");var a=n+1;return n==t?void e(".general-home-post-election-topper__tab--next").addClass("tab-disabled"):(n==t-1&&e(".general-home-post-election-topper__tab--next").addClass("tab-disabled"),e(".general-home-post-election-topper__tab").removeClass("tab-active"),e(".general-home-post-election-topper__tabs").find("[data-tab-open='"+a+"']").addClass("tab-active"),e(".general-home-post-election-topper__tab-content").addClass("tab-hidden"),void e(".general-home-post-election-topper__tab-contents").find("[data-tab='"+a+"']").removeClass("tab-hidden"))}if(e(this).hasClass("general-home-post-election-topper__tab--previous"))return t=e(".general-home-post-election-topper__tab-content").length,n=e(".general-home-post-election-topper__tab.tab-active").data("tab-open"),e(".general-home-post-election-topper__tab").removeClass("tab-disabled"),a=n-1,2==n&&e(".general-home-post-election-topper__tab--previous").addClass("tab-disabled"),1==n?void e(".general-home-post-election-topper__tab--previous").addClass("tab-disabled"):(e(".general-home-post-election-topper__tab").removeClass("tab-active"),e(".general-home-post-election-topper__tabs").find("[data-tab-open='"+a+"']").addClass("tab-active"),e(".general-home-post-election-topper__tab-content").addClass("tab-hidden"),void e(".general-home-post-election-topper__tab-contents").find("[data-tab='"+a+"']").removeClass("tab-hidden"));var o=e(this).data("tab-open");e(".general-home-post-election-topper__tab").removeClass("tab-active"),e(this).addClass("tab-active"),e(".general-home-post-election-topper__tab-content").addClass("tab-hidden"),e(".general-home-post-election-topper__tab-contents").find("[data-tab='"+o+"']").removeClass("tab-hidden")}),e(".general-home-georgia-election-topper__tab").on("click",function(){if(e(this).hasClass("general-home-georgia-election-topper__tab--next")){var t=e(".general-home-georgia-election-topper__tab-content").length,n=e(".general-home-georgia-election-topper__tab.tab-active").data("tab-open");e(".general-home-georgia-election-topper__tab").removeClass("tab-disabled");var a=n+1;return n==t?void e(".general-home-georgia-election-topper__tab--next").addClass("tab-disabled"):(n==t-1&&e(".general-home-georgia-election-topper__tab--next").addClass("tab-disabled"),e(".general-home-georgia-election-topper__tab").removeClass("tab-active"),e(".general-home-georgia-election-topper__tabs").find("[data-tab-open='"+a+"']").addClass("tab-active"),e(".general-home-georgia-election-topper__tab-content").addClass("tab-hidden"),void e(".general-home-georgia-election-topper__tab-contents").find("[data-tab='"+a+"']").removeClass("tab-hidden"))}if(e(this).hasClass("general-home-georgia-election-topper__tab--previous"))return t=e(".general-home-georgia-election-topper__tab-content").length,n=e(".general-home-georgia-election-topper__tab.tab-active").data("tab-open"),e(".general-home-georgia-election-topper__tab").removeClass("tab-disabled"),a=n-1,2==n&&e(".general-home-georgia-election-topper__tab--previous").addClass("tab-disabled"),1==n?void e(".general-home-georgia-election-topper__tab--previous").addClass("tab-disabled"):(e(".general-home-georgia-election-topper__tab").removeClass("tab-active"),e(".general-home-georgia-election-topper__tabs").find("[data-tab-open='"+a+"']").addClass("tab-active"),e(".general-home-georgia-election-topper__tab-content").addClass("tab-hidden"),void e(".general-home-georgia-election-topper__tab-contents").find("[data-tab='"+a+"']").removeClass("tab-hidden"));var o=e(this).data("tab-open");e(".general-home-georgia-election-topper__tab").removeClass("tab-active"),e(this).addClass("tab-active"),e(".general-home-georgia-election-topper__tab-content").addClass("tab-hidden"),e(".general-home-georgia-election-topper__tab-contents").find("[data-tab='"+o+"']").removeClass("tab-hidden")})}}).call(t,n(0))},function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(){o()(".js-error-search input").focus(function(){o()(".js-error-search").addClass("search-active")})}},,,function(e,t){}],[16]);
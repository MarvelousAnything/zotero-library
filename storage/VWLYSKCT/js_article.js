function getCookie(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)===" ";)t=t.substring(1);if(t.indexOf(r)===0)return t.substring(r.length,t.length)}return""}function hideLines(n){var r,t,i;if(n!==""&&n!=null){const o=document.querySelector(".top-banner");o!=null&&o!="undefined"&&(t=o.parentNode,t!=null&&t!="undefined"&&(t.remove(),console.log("test - remove .top-banner parent")));const n=document.querySelectorAll(".body-banner");if(n!=null&&n!="undefined"&&n.length>0){for(i=0;i<n.length;i++)t=n[i].parentNode,t!=null&&t!="undefined"&&t.remove();const r=document.querySelector(".article-inner-content");r!=null&&r!="undefined"&&r.setAttribute("style","margin-top: 20px;")}const u=document.querySelectorAll(".right-side-banner");if(u!=null&&u!="undefined"&&u.length>0)for(i=0;i<u.length;i++)t=u[i].parentNode,t!=null&&t!="undefined"&&t.remove();const f=document.querySelectorAll(".banner-300X600-left-side");if(f!=null&&f!="undefined"&&f.length>0)for(i=0;i<f.length;i++)r=f[i].parentNode,r!=null&&r!="undefined"&&r.remove();const s=document.querySelector(".right-side-banner-small");s!=null&&s!="undefined"&&(t=s.parentNode,t!=null&&t!="undefined"&&t.remove());const e=document.querySelectorAll(".OUTBRAIN");if(e!=null&&e!="undefined"&&e.length>0)for(i=0;i<e.length;i++)e[i].remove()}}function hideArticlePremiumBody(n){var t,i,r;n!==""&&n!=null?(t=document.getElementById("hiddenLink"),t!=null&&t!="undefined"&&t.remove()):(i=document.getElementById("hiddenPremiumForm"),i!=null&&i!="undefined"&&i.remove(),r=document.getElementById("hiddenBody"),r!=null&&r!="undefined"&&r.remove())}function setOutbrainStickyBanner(n){if(n===""||n==null){var t=document.getElementById("container-outbrain-sticky");t!=null&&t!="undefined"&&jQuery(function(n){var t=0;n(window).scroll(function(){var i=n(this).scrollTop(),r=n("#container-outbrain-sticky"),u=n("#startBannerSticky").offset().top;i>t?n(this).scrollTop()>100&&r.fadeOut(600):(i<150&&r.fadeIn(600),i>u&&r.fadeIn(600));t=i})})}}document.addEventListener("DOMContentLoaded",()=>{function i(){console.log("subscriber - clean error msg");var n=document.getElementById("newsletter-form-msg");n!==null&&n!=="undefined"&&$("#newsletter-form-msg").html("")}function r(){console.log("subscriber - clean email");var n=document.getElementById("user-email-input");n!==null&&n!=="undefined"&&(n.value="")}function u(n){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n)}function f(){emailVal=$("#user-email-input").val();console.log("subscriber - email: "+emailVal);email=u(emailVal);email===!0?(i(),contactListID=$("#contact-list-id").val(),console.log("subscriber - contactListID: "+contactListID),s(emailVal,contactListID)):$("#newsletter-form-msg").html("Please insert a valid email address").fadeIn()}function e(n){console.log("subscriber - args: "+JSON.stringify(n));$.ajax({type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",traditional:!0,data:JSON.stringify(n),url:"/Shared/RegisterUserWithoutRobot",success:function(n){if(console.log("subscriber responce status: "+n.status),n.status==="succses"){alert("You have been successfully subscribed!");r();return}if(n.status==="conflict"){alert("This email already exists!");return}if(n.status==="fail"||n.status==="error"||n.status==="invalidcontact"){alert("Please try again...");return}if(n.status==="robots"||n.status==="abuser"){$("#newsletter-submit").unbind("click");return}},error:function(n){return console.log("subscriber - status: error"),console.log("subscriber - error: "+n),!1}})}function o(n,t){this.email=n;this.contactListID=t}function s(n,t){let i=new o(n,t);return e(i)}var t=document.getElementById("user-email-input"),n;t!==null&&t!=="undefined"&&t.addEventListener("change",i);n=$("#subscriberForm");n!==null&&n!=="undefined"&&n.length>0&&$("#newsletter-submit").click(function(n){f();n.preventDefault()})});$(document).ready(function(){var n=getCookie("rennabtuohtiweikooc"),t;hideLines(n);hideArticlePremiumBody(n);setOutbrainStickyBanner(n);t=window.innerWidth?window.innerWidth:$(window).width();t<=1024&&$(window).load()&&$(".removein1024").length>0&&$(".removein1024").remove();$(".first-article-banner").length>0&&setTimeout(function(){var n=$(".first-article-banner").height();n!=undefined&&n!=null&&n>0&&$(".right-side-first-banner").height(n);console.log("banner height "+n)},5e3)});$(document).on("click",".article-subline-share .share-twitter-button",function(n){n.preventDefault();var r=$(this).parent().data("share-url"),u=$(this).parent().data("share-title").trim(),t=575,i=400,f=($(window).width()-t)/2,e=($(window).height()-i)/2,o="https://twitter.com/share?text="+encodeURI(u)+"&url="+encodeURIComponent(r),s="status=1,width="+t+",height="+i+",top="+e+",left="+f;return window.open(o,"Tweet Us",s),!1});$(document).on("click",".article-subline-share .share-facebook-button",function(){var n=$(this).parent().data("share-url"),t=$(this).parent().data("share-title").trim();return url="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(n),window.open(url,"_blank","width=500, height=500,top=200,left=200"),!1});$(document).on("click",".article-subline-share .share-mail-button",function(){var t=$(this).parent().data("share-url"),i=$(this).parent().data("share-title").trim(),n;return url="mailto:?Subject="+i+"&amp;Body="+t,n=window.open(url,"emailWindow"),n&&n.open&&!n.closed&&n.close(),!1});$(document).on("click",".article-subline-share .share-fb-copy-message-button",function(){var n=$(this).parent().data("share-url"),t=$(this).parent().data("share-title").trim();return url="http://www.facebook.com/dialog/send?app_id=313311835670174&link="+encodeURIComponent(n)+"&redirect_uri=https://www.jpost.com",window.open(url,"_blank","width=500, height=500,top=200,left=200"),!1});
var ie_follow_button=false;var on_mobile=follow_widget_data.ie_mobile_check;function addFollowScript(){(function(doc,scrt){var js,fjs=doc.getElementsByTagName(scrt)[0];var afanyDivPresent=false;if(0<jQuery(".custom_follow_author").length||0<jQuery(".author_feed_data").length){afanyDivPresent=true}if(!afanyDivPresent){return}js=doc.createElement(scrt);js.src=location.protocol+"//"+location.hostname+"/wp-content/themes/indianexpress/js/min/ie-author-follow.js?ver=25032021.0";js.async=1;fjs.parentNode.insertBefore(js,fjs)})(document,"script")}if("yes"===on_mobile){jQuery(window).scroll(function(){if(!ie_follow_button&&window.scrollY>150){ie_follow_button=true;addFollowScript()}})}else{addFollowScript()}

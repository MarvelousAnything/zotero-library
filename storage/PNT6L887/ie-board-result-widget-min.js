var board_result_widget=false;jQuery(window).scroll(function(){if(!board_result_widget&&window.scrollY>150){board_result_widget=true;(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){return}var link=document.createElement("link");link.setAttribute("rel","stylesheet");link.setAttribute("type","text/css");link.setAttribute("href","https://media-central.indianexpress.com/static/results/css/cbr-style.css");fjs.parentNode.insertBefore(link,fjs);js=d.createElement(s);js.setAttribute("type","text/javascript");js.setAttribute("charset","utf-8");var board=d.getElementById(id).getAttribute("data-cbrBoard");var lang=d.getElementById(id).getAttribute("data-cbrLang");var standard=d.getElementById(id).getAttribute("data-cbrStandard");var year=d.getElementById(id).getAttribute("data-cbrYear");var js_src="https://results.indianexpress.com/api/board?board=";if(standard!=null){js.src=js_src.concat(board).concat("&lang=").concat(lang).concat("&year=").concat(year).concat("&standard=").concat(standard)}else{js.src=js_src.concat(board).concat("&lang=").concat(lang).concat("&year=").concat(year)}fjs.parentNode.insertBefore(js,fjs)})(document,"script","cbr-base-register-div")}});
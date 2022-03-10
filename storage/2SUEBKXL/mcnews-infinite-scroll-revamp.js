var listOfScrollUrlInfinite = [];
		
if(playInfiniteScroll == "true"){
	$(".f-menulist").show();
	$(document).ready(function(){
		artid = $(".article_page#page1").attr('data-id');
		// $(".article_page#page1").css('height',$("#article-"+artid).height());
	//setTimeout(function(){
		//$('.footer-menu').slideDown();
        //}, 2500);
		
		
	$('.footer-menu').click(function(){
		//alert('hello')
		$('.menu_arrow').toggleClass('iconfa-lock iconfa-unlock');

		$('.footer-menu-open').slideToggle()
	});
	$('.footer-menu, .footer-menu-open').click(function(e)
	{
		e.stopPropagation();
	});
	
	$(document).click(function(){
		if($('.footer-menu-open').css('display') == "block"){
		$('.menu_arrow').toggleClass('iconfa-lock iconfa-unlock');
			$('.footer-menu-open').slideUp()
		}

	});
	
	var openMenu = function(){
		$('.menu_arrow').addClass('iconfa-unlock').removeClass('iconfa-lock');
		$('.footer-menu-open').slideDown();
	};
	var menuClose = function(){
		$('.menu_arrow').addClass('iconfa-lock').removeClass('iconfa-unlock');
		$('.footer-menu-open').slideUp();
	};
	
	$( window ).scroll(function() {
		  var docViewTop = $(this).scrollTop();
		    var docViewBottom = docViewTop + $(this).height();
		
		    var elemTop = $('.footer-menu-autopen').offset().top;
		    var elemBottom = elemTop + $('.footer-menu-autopen').height();
		
		if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
			openMenu();
		}else{
			if($('.footer-menu-open').css('display') == "block"){
				menuClose();
			};
		}
	      });		
	});
	
	$(document).ready(function() {
		if(document.getElementById('enable-notification') != null){
			document.getElementById('enable-notification').addEventListener('click',function(){
				if (isSubscribed) {
					    unsubscribe();
				    } else {
					    subscribe();
				    }
				//document.getElementById("overlay_brNotif").style.display="none";
			});
		}
		
		var count=1;
		var page_offset;
		var page_offset_top;
		var scroll_top;
		var win_height;
		var scroll_pagi_slider;
		var slide_move=0;
		
		$(window).scroll(function ()
		{
			var content_height = $(document).height();
			var content_scroll_pos = $(window).scrollTop();
			var percentage_value = content_scroll_pos * 100 / content_height;
		
			if(percentage_value >= 5)
			{
				var width = window.innerWidth || document.documentElement.clientWidth;
				if (width <= 768 ) {
					setTimeout(function(){
						$('.scroll-paginate').animate({bottom: 54},2000);
						
					}, 1000);
				}
				else{
					setTimeout(function(){
						$('.f-menulist').animate({bottom: 0},2000);
						$('.scroll-paginate').animate({bottom: 0},2000);
						
					}, 1000);
				}
			}
		});
	
		scroll_pagi_slider = $('.scroll-paginate .bxslider').bxSlider({
			  pager:false,
			  auto:false,
			  slideWidth: 405,
			  minSlides: 2, 
			  maxSlides: 5,
			  moveSlides:1,
			  slideMargin: 0,
			  infiniteLoop:false,
			  hideControlOnEnd:true
			  
		});
	
		$(document).scroll(function(){
			if(typeof($("#page"+count).offset()) !== 'undefined'){
				page_offset = $("#page"+count).offset().top - 50;
				var $page_section =  $("#page"+count);
				page_offset_top = page_offset;
				scroll_top = $(window).scrollTop();	
				win_height = $(window).height();	
				var page_pos = scroll_top - page_offset_top;
				var page_height = $page_section.height();
				var page_scrollpercent = 100-((page_height-page_pos)/page_height)*100;
				//$('.article_pagi').removeClass('active'); 
				if(page_offset_top>scroll_top){
					
					if(count>1)count--;	
					slide_move=count;
					scroll_pagi_slider.goToPrevSlide();
		
				}
				if(page_height<page_pos){
					count++;
					if(count>3){
						slide_move=count;
						//alert(slide_move);
						scroll_pagi_slider.goToNextSlide();
					}
				}		
				if($(window).scrollTop()>page_offset){
				$('.paginate-section-nav').removeClass('active');
					if(page_scrollpercent<=100){
						$('#paginav'+count+'.paginate-section-nav').addClass('active');
					}
				}
				$('#paginav'+count+'.paginate-section-nav.active .scroll_progress').css('width',''+page_scrollpercent+'%');
			
			}
		});
	
	
	});
	
	function scrollToPage(pageno){
			$('html, body').animate({scrollTop: $('#page'+pageno+'').offset().top}, 2000); 	
	}
	
	$(".bseliveselectbox").click(function(){
		$(".bselivelist").slideDown();
	});
	$(".bselivelist").mouseleave(function(){
		$(this).slideUp();
	});
	
	$(function () {
	    var ad_counter = 0;
	    var currentHash = $("#page1").attr('data-url');
	    var article_url ='';
	    var url_arr = '';
	    var id_arr = '';
	    var id_url_arr = '';
	    var count_scroll_page_id = '';
	    var scroll_page = '';
	    var newsscroll= true;

		var currentUrlInfinite = window.location.href;
		currentUrlInfinite = currentUrlInfinite.split("/");

	    $(document).scroll(function () {
		if($(window).height() > 200 && newsscroll==true){
				loadarticles();
				newsscroll=false;
		}
		$('.article_page').each(function () {
			
		    var top 		= window.pageYOffset;
		    var distance 	= top - $(this).offset().top + 50;
		    var hash 		= $(this).attr('data-url');
		    var hashNext 	= $(this).attr('data-next');
		    var title 		= $(this).attr('data-title');
		    var description 	= $(this).attr('data-description');
		    var topic_id 	= $(this).attr('data-topic');
		    var autono 		= $(this).attr('data-autono');
		    var nextPostID 	= $(this).attr('data-id');
		    var thisPostSec 	= $(this).attr('data-section');
		    count_scroll_page_id = $(this).attr('id');
		    var scroll_page 	= count_scroll_page_id.split("page");
		    scroll_page         = count_scroll_page_id.replace("page","");	
		  
		$('.slideshows-class').each(function () {
			var top	= window.pageYOffset;
			var distance = top - $(this).offset().top + 50;		
			var hash  = $(this).attr('data-url');
			var cnter  = $(this).attr('data-cnter');
			var title 		= $(this).attr('data-title');

			var width = window.innerWidth || document.documentElement.clientWidth;
			if(listOfScrollUrlInfinite.length == 0){
				listOfScrollUrlInfinite.push(currentUrlInfinite[currentUrlInfinite.length-1])
			}

			if (distance < 10 && distance > -10 && currentHash != hash && !(listOfScrollUrlInfinite.indexOf(hash.trim()) > -1)){
				listOfScrollUrlInfinite.push(hash.trim());
				
				currentHash = hash;
				document.title = title;
				history.replaceState({}, '', currentHash);
				if(cnter == 4 && width >=768){
					ga('send', 'event', 'Ad Slots', 'MC_ENG_DESKTOP/MC_ENG_PHOTOGALLERY/MC_ENG_PHOTOGALLERY_AS/MC_ENG_ROS_PHT_AS_MID_728 - position-1', pageurl);
				}
				if(cnter == 4 && width <768){
					ga('send', 'event', 'Ad Slots','MC_ENG_PWA/MC_ENG_PWA_PHOTOGALLERY/MC_ENG_PWA_PHOTOGALLERY_AS/MC_ENG_PWA_ROS_PHT_AS_ATF_300 - position-1', pageurl);
				}
				if(cnter == 8 && width >=768){
					ga('send', 'event', 'Ad Slots', 'MC_ENG_DESKTOP/MC_ENG_PHOTOGALLERY/MC_ENG_PHOTOGALLERY_AS/MC_ENG_ROS_PHT_AS_BTF_728 - position-2', pageurl);
				}else if(cnter == 8 && width <768){
					ga('send', 'event', 'Ad Slots','MC_ENG_PWA/MC_ENG_PWA_PHOTOGALLERY/MC_ENG_PWA_PHOTOGALLERY_AS/MC_ENG_PWA_ROS_PHT_AS_BTF_300 - position-2', pageurl);
				}
				if(cnter == 8 && $('#BTF_728_Photogallery').length > 0)
				{
					webjsonadsparse = $.parseJSON(webjsonads);
					createAd300x600('/1039154/'+webjsonadsparse['BTF_728'][0],'BTF_728_Photogallery',$.parseJSON("["+webjsonadsparse['BTF_728'][1]+"]"),'web');
					ga('send', 'event', 'Ad Slots', webjsonadsparse['BTF_728'][0]+'- position-2', pageurl);
				}
				callComScore();
				//pushGA();
				console.log('test 10 '+cnter);
				ga('send', 'pageview');
				//pagetitle=galtitle;
				//document.title = pagetitle;	
	
			}
			if(distance > 250 && distance < 500 && currentHash != hash && !(listOfScrollUrlInfinite.indexOf(hash.trim()) > -1)){
				listOfScrollUrlInfinite.push(hash.trim());
				
				currentHash = hash;
				document.title = title;
				history.replaceState({}, '', currentHash);
				//callComScore();
				//pushGA();
				console.log('test 250 '+cnter);
				ga('send', 'pageview');
	
			}
		});
			winhei = 100 - $(window).height();
		   if (distance < 30 && distance > winhei && currentHash != hash) {	 
		   // console.log(distance);      
			currentHash = hash;
			document.title = title;
			//alert("condition-1");
			$('meta[name=description]').attr('content', description);
			url_arr = currentHash.split("/");
					article_url = url_arr[url_arr.length - 1];
					id_url_arr = article_url.split('-');
					id_arr = id_url_arr[id_url_arr.length - 1].split('.');
	
					$(".scroll_li").removeClass('active');
					$("#bottomBar_id_"+id_arr[0]).addClass('active');
					slot_id300x600 = nextPostID+"_rightad300x600";
					slot_id728x90  = nextPostID+"_bottomad728x90";
					slot_id300x250 = nextPostID+"_mobile_bottom300x250";
					slot_id320x50  = nextPostID+"_mobile_top320x50";
					ad_counter = parseInt(scroll_page);
					mobileheader_ad_counter = ['1','4','7','10'];
					mobilebottom_ad_counter = ['3','6','9','12'];
					forum_id = nextPostID+"_forum_blog";
					//autono = nextPostID;
					forum_cat  = $(this).attr('data-cat');
					scid = $(this).attr('data-scid');
					if(scid != ""){
						//stockWidget('N',scid);
					}	
					    if (!navigator.userAgent.match(/Android/i) &&
						!navigator.userAgent.match(/webOS/i) &&
						!navigator.userAgent.match(/iPhone/i) &&
						!navigator.userAgent.match(/iPod/i) &&
						!navigator.userAgent.match(/iPad/i) &&
						!navigator.userAgent.match(/Blackberry/i)) {
							if(ad_counter <=5){
								webjsonadsparse = $.parseJSON(webjsonads);
								/*console.log(adkeypage);
								console.log(webjsonadsparse['BTF_728'][0]);*/
								createAd300x600('/1039154/'+webjsonadsparse['ATF_300'][0],slot_id300x600,$.parseJSON("["+webjsonadsparse['ATF_300'][1]+"]"),'web');
								createAd300x600('/1039154/'+webjsonadsparse['ATF_728'][0],slot_id728x90,$.parseJSON("["+webjsonadsparse['ATF_728'][1]+"]"),'web');
								/*createAd300x600(webjsonadsparse['ATF_300'][0],slot_id300x600,'webjsonadsparse['ATF_300'][1]','web');
								createAd728x90(webjsonadsparse['BTF_728'][0],slot_id728x90,'webjsonadsparse['BTF_728'][1]','web');*/
								/*googletag.cmd.push(function() {
									var e = googletag.defineSlot('1039154/'+webjsonadsparse['ATF_300'][0], $.parseJSON("["+webjsonadsparse['ATF_300'][1]+"]"), slot_id300x600).addService(googletag.pubads());
									googletag.display(webjsonadsparse['ATF_300'][0]), googletag.pubads().refresh([e])
								 });
								googletag.cmd.push(function() {
									var e = googletag.defineSlot(webjsonadsparse['ATF_728'][0], $.parseJSON("["+webjsonadsparse['ATF_728'][1]+"]"), slot_id728x90).addService(googletag.pubads());
									googletag.display(webjsonadsparse['ATF_728'][0]), googletag.pubads().refresh([e])
								 });*/
								// alert(slot_id728x90);
								//getForum(forum_id,autono,topic_id);
							}
						}else{
							wapjsonadsparese = $.parseJSON(wapjsonads);
							// createAd300x600('1039154/'+wapjsonadsparese['ATF_300'][0],slot_id300x250,$.parseJSON("["+wapjsonadsparese['ATF_300'][1]+"]"),'wap');
							createAd300x600('/1039154/'+wapjsonadsparese['ATF_320'][0],slot_id320x50,$.parseJSON("["+wapjsonadsparese['ATF_320'][1]+"]"),'wap');

							if($('#ATF_300_ads_'+nextPostID).length > 0)
							{
								createAd300x600('/1039154/'+wapjsonadsparese['ATF_300'][0],'ATF_300_ads_'+nextPostID,$.parseJSON("["+wapjsonadsparese['ATF_300'][1]+"]"),'wap');
							}
							if($('#FLY_300_ads_'+nextPostID).length > 0)
							{
								createAd300x600('/1039154/'+wapjsonadsparese['FLY_300'][0],'FLY_300_ads_'+nextPostID,$.parseJSON("["+wapjsonadsparese['FLY_300'][1]+"]"),'wap');
							}
							if($('#BTF_300_ads_'+nextPostID).length > 0)
							{
								createAd300x600('/1039154/'+wapjsonadsparese['BTF_300'][0],'BTF_300_ads_'+nextPostID,$.parseJSON("["+wapjsonadsparese['BTF_300'][1]+"]"),'wap');
							}
								/*createAd300x250('1039154/Moneycontrol_Mobile_WAP/MC_WAP_News/MC_WAP_News_Internal_300x250_'+parseInt(mobilebottom_ad_counter[ad_counter-1]),slot_id300x250,'300,250','wap');
								createAd320x50('1039154/Moneycontrol_Mobile_WAP/MC_WAP_News/MC_WAP_News_Internal_320x50_'+parseInt(mobileheader_ad_counter[ad_counter-1]),slot_id320x50,'320,50','wap');*/
								/*console.log(adkeypage);
								console.log(wapjsonadsparese['ATF_320'][0]);*/
								/*googletag.cmd.push(function() {
									var e = googletag.defineSlot(wapjsonadsparese['ATF_300'][0], $.parseJSON("["+wapjsonadsparese['ATF_300'][1]+"]"), slot_id300x250).addService(googletag.pubads());
									googletag.display(wapjsonadsparese['ATF_300'][0]), googletag.pubads().refresh([e])
								 });
								googletag.cmd.push(function() {
									var e = googletag.defineSlot(wapjsonadsparese['ATF_320'][0], $.parseJSON("["+wapjsonadsparese['ATF_320'][1]+"]"), slot_id320x50).addService(googletag.pubads());
									googletag.display(wapjsonadsparese['ATF_320'][0]), googletag.pubads().refresh([e])
								 });*/
								//getForum(forum_id,autono,topic_id);
					    }
				       // }

					history.replaceState({}, '', currentHash);
					callComScore();
					pushGA();
					fbCirculation(nextPostID);
					// getontheIo(title,article_authors,article_cat,article_type,article_word_count);
					if(nextPostID!='4915601')
					trinityAds(nextPostID);
					OutbrainAds(nextPostID,url_arr);
	
		    }
		
		if(distance > 500 && distance < 600 && currentHash != hash) {
		    currentHash = hash;
		    url_arr = currentHash.split("/");
				    article_url = url_arr[url_arr.length - 1];
				    document.title = title;
				    //alert("condition-2");
				    $('meta[name=description]').attr('content', description);
				    // console.log(currentHash,"dataaaaaaaaaaaa");
				    history.replaceState({}, '', currentHash);
	
				    id_url_arr = article_url.split('-');
				    id_arr = id_url_arr[id_url_arr.length - 1].split('.');
	
				    $(".scroll_li").removeClass('active');
				    $("#bottomBar_id_"+id_arr[0]).addClass('active');
				    //callComScore();
				    pushGA();
		}
		
	    });
	    });
	});
	
	// How to force async functions to execute sequentially 
	// by using deferred pipe chaining.
	
	// The master deferred.
	var dfd = $.Deferred(),  // Master deferred
	    dfdNext = dfd; // Next deferred in the chain
	    x = 0, // Loop index
	    values = [];
	    // Simulates $.ajax, but with predictable behaviour.
	    // You only need to understand that higher 'value' param 
		// will finish earlier.
		var JS_IGNORE_FLAG=$("#JS_IGNORE_FLAG").val();
	    simulateAjax = function (value,cnt) {
		var dfdAjax = $.Deferred();
		setTimeout(
		    function () {
				if(typeof JS_IGNORE_FLAG !== "undefined" && JS_IGNORE_FLAG==1){
					$.ajax({
						url: site_Url+'services/infinte-article/?classic=true',
						type: 'GET',
						data:{next_id:value,counter:cnt,related_ids:related_Ids},
						success:function(res){
							$('#page'+cnt).html(res);		
							// GET Current Post URL:
								var contentAttribute = $('#content_'+value).find('.article_page').attr('data-url');
								if (typeof contentAttribute !== typeof undefined && contentAttribute !== false) {
									var extractHost = extractHostname(contentAttribute);
									var currentPostUrl=contentAttribute;
									if( extractHost==null  ){
										currentPostUrl = 'http://www.moneycontrol.com/news' + contentAttribute;
									}
								}
							}
						}).always(function(){
					
					dfdAjax.resolve();
					});
				}else{
					$.ajax({
						url: site_Url+'services/infinte-article/?classic=true',
						type: 'GET',
						data:{next_id:value,counter:cnt,related_ids:related_Ids},
						complete: function(){
							dfdAjax.resolve();
						},
						success:function(res){
							$('#page'+cnt).html(res);
						   // GET Current Post URL:
								var contentAttribute = $('#content_'+value).find('.article_page').attr('data-url');
								if (typeof contentAttribute !== typeof undefined && contentAttribute !== false) {
									var extractHost = extractHostname(contentAttribute);
									var currentPostUrl=contentAttribute;
									if( extractHost==null  ){
										currentPostUrl = 'http://www.moneycontrol.com/news' + contentAttribute;
									}
								}
							}
						})/*.complete(function(){
					
					dfdAjax.resolve();
					})*/;
				}
			    
		    },
		    1000);
	
		return dfdAjax.promise();
	    };
	
	    // This would be a user function that makes an ajax request.
	    // In normal code you'd be using $.ajax instead of simulateAjax.
	   var requestAjax = function (value,cnt) {
		return simulateAjax(value,cnt);
	    };
	
	// Start the pipe chain.  You should be able to do 
	// this anywhere in the program, even
	// at the end,and it should still give the same results.
	dfd.resolve();
	
	// Deferred pipe chaining.
	// What you want to note here is that an new 
	// ajax call will not start until the previous
	// ajax call is completely finished.
	var loadarticles = function(){
		$('#infinite-scroll').animate({
					      'bottom':'0px'}, 1000);
		var cl = 2;							  
		$.each(related_Ids, function(index, id){
			values.push(id);
			dfdNext = dfdNext.pipe(function () {
				var value = values.shift();
				return requestAjax(value,cl).
					done(function(response) {
						// Process the response here.
						cl++;
					});
	
			});
	
		});	
	}
	
	
	function createAd300x600(adcode,slot_id,d,t){
		// console.log(adcode,slot_id);
	    googletag.cmd.push(function() {
		var e = googletag.defineSlot(adcode, d, slot_id).addService(googletag.pubads());
		googletag.display(slot_id), googletag.pubads().refresh([e])
	    })
	}
	
	function createAdNative(adcode,slot_id,d,t){
	    googletag.cmd.push(function() {
		var e = googletag.defineSlot(adcode, [fluid,fluid], slot_id).addService(googletag.pubads());
		googletag.display(t), googletag.pubads().refresh([e])
	    })
	}
	
	function createAd728x90(adcode,slot_id,d,t){
	    googletag.cmd.push(function() {
		var e = googletag.defineSlot(adcode, [[728,90],[970,90],[970,250]], slot_id).addService(googletag.pubads());
		googletag.display(t), googletag.pubads().refresh([e])
	    })
	}
	
	function createAd300x250(adcode,slot_id,d,t){
	    googletag.cmd.push(function() {
		var e = googletag.defineSlot(adcode, [300,250], slot_id).addService(googletag.pubads());
		googletag.display(t), googletag.pubads().refresh([e])
	    })
	}
	
	function createAd320x50(adcode,slot_id,d,t){
	    googletag.cmd.push(function() {
		var e = googletag.defineSlot(adcode, [320,50], slot_id).addService(googletag.pubads());
		googletag.display(t), googletag.pubads().refresh([e])
	    })
	}
	
	function getForum(forum_id,auto_no,topic_id){
	    var dfdAjax = $.Deferred();
	    $.ajax({
		url: site_Url+'services/get_forum_widget/?autono='+auto_no+'&topic_id='+topic_id+'&classic=true',
		type: 'GET',
		success:function(res){
			    $("#"+forum_id).html(res);
			}
		}).done(function(){
		dfdAjax.resolve();
	
	    });	
	}
	
	function pushGA(){
		if(IS_EU == '0'){
		}
		else{
		
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-156703-1', 'moneycontrol.com');
			ga('require', 'GTM-PGHT597'); 
			if(listOfScrollUrlInfinite.length == 0){
				ga('send', 'pageview');
			
			}
		}
	}
	
	
	function callComScore(){
		if(IS_EU == '0'){
		}
		else{
			(self.COMSCORE && COMSCORE.beacon({c1: "2", c2: "6683813"}));
			$.ajax({
			url: site_Url+'services/get_comscore_pageview/?classic=true',
			type: 'GET',
			success:function(res){
				}
			});
		}
  
	}
	
	function fbCirculation(id){
		//alert("FB");
		var width = window.innerWidth || document.documentElement.clientWidth;
		var fb_re_Ads = 'firstArticlemob_'+id;
		if (width <= 768 ) {
		      window.ADNW = window.ADNW || {};
		      window.ADNW.v60 = window.ADNW.v60 || {};
		      window.ADNW.v60.slots = window.ADNW.v60.slots || [];
		      window.ADNW.v60.slots.push({
		        rootElement: document.getElementById(fb_re_Ads),
		        placementid: '606338322858150_1309645385860770',
			format: 'recirculation',
			testmode: false,
			onUnitLoaded: function(rootElement) {
			  // called when the unit is loaded
			  console.log('Audience Network [606338322858150_1309645385860770] unit loaded');
			  rootElement.style.display = 'block';
			},
			onUnitError: function(errorCode, errorMessage) {
			  // called when the unit could not be loaded
			  console.log('Audience Network [606338322858150_1309645385860770] error (' + errorCode + ') ' + errorMessage);
			},
			recirculation: {
			  desktop: {
			    ad_load: 'auto',
			    infinite_scroll: 'off',
			    layout: 'auto',
			  },
			  mobile: {
			    ad_load: 'heavy',
			    infinite_scroll: 'off',
			    layout: 'grid',
					heading:'on',
					rows:'two',
					columns:'two'
			  },
			}
		      });
		}
		
		var fb_re_Ads = 'firstArticle_'+id;
		window.ADNW = window.ADNW || {};
		window.ADNW.v60 = window.ADNW.v60 || {};
		window.ADNW.v60.slots = window.ADNW.v60.slots || [];
		var width = window.innerWidth || document.documentElement.clientWidth;
		if (width > 768 ) {
		
			window.ADNW.v60.slots.push({
			rootElement: document.getElementById(fb_re_Ads),
		        placementid: '606338322858150_1309648245860484',
			format: 'recirculation',
			testmode: false,
			onUnitLoaded: function(rootElement) {
			  // called when the unit is loaded
			  console.log('Audience Network [606338322858150_1309648245860484] unit loaded');
			  rootElement.style.display = 'block';
			},
			onUnitError: function(errorCode, errorMessage) {
			  // called when the unit could not be loaded
			  console.log('Audience Network [606338322858150_1309648245860484] error (' + errorCode + ') ' + errorMessage);
			},
			recirculation: {
			  desktop: {
				ad_load: 'heavy', 
				infinite_scroll: 'off', 
				layout: 'h_list', 
				heading:'on', 
				max_slots:3,
			  },
			 mobile: {
			    ad_load: 'auto',
			    infinite_scroll: 'off',
			    layout: 'auto',
			  },
			}
		      });
		}
	}
	
	function trinityAds(id){
		/*var textSelector = '#article-'+id;
		var js = document.createElement('script');
		js.type = 'text/javascript';
		js.setAttribute('data-player-id', 'player-'+id);
		js.src = 'https://trinitymedia.ai/sas/player/trinity.php?sCampaignID=2900000155&GDPR=$$GDPR_MACRO$$&GDPR_CONSENT=$$GDPR_CONSENT_MACRO$$&TRINITY_LOAD_PLAYER=1&textSelector='+encodeURIComponent(btoa(textSelector));
		document.getElementById("trinity-"+id).appendChild(js);*/

	}

	function OutbrainAds(id,url_arr){
		OBR.extern.researchWidget();
	}
}

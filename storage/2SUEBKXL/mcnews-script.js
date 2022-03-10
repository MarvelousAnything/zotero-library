// JavaScript Document
$(document).ready(function(e) {
	//var hight =$(window).height();
	//$('.nav_dropdown').css('height', hight );

    $('#more-links').on('click', function(e){
	$('#more-links-panel').slideToggle();
    });
    $('.pancke, .menu_btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.state_ddown').slideUp();
		$('.weatherDropBox').slideUp();
		$('.ddmenue').slideToggle();
	});

	// For Mobile Version:
	$('.tsearch_icon').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var $searchPop = $('.popup_search');
		if ($searchPop.is(':visible')) {
			$searchPop.slideUp();
			// Other stuff to do on slideUp
		} else {
			$searchPop.slideDown();
			// Other stuff to down on slideDown
		}
		//$('.popup_search').slideToggle();
		$('.tsearch_box').css('background', '#e6e6e6')
	});
	$('.mnav_links').on('click', function(){
		$('.extr_lnk').slideToggle();
	});
	$('.close_img').on('click', function(){
		$('.nav_dropdown, .ddmenue').slideUp();
		$('.mlanguage').slideUp();
	});

	$('.language_btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.mlanguage').slideToggle();
		$('.ddmenue').hide();
	});

	//
	var ctC = false;
	$('.categoryPnk').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		if(ctC){
			ctC = false;
			$(this).find('span').removeClass('cuparrow');
			$(this).find('span').addClass('cdwnarrow');
		}else{
			ctC = true;
			$(this).find('span').removeClass('cdwnarrow');
			$(this).find('span').addClass('cuparrow');
		}
		$('.stateLpnk').slideUp();
		$('.categoryLPnk').slideToggle();
	});

	var stC = false;
	$('.statePnk').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		if(stC){
			stC = false;
			$(this).find('span').removeClass('cdwnarrow');
			$(this).find('span').addClass('cuparrow');
		}else{
			stC = true;
			$(this).find('span').removeClass('cuparrow');
			$(this).find('span').addClass('cdwnarrow');
		}
		$('.categoryLPnk').slideUp();
		$('.stateLpnk').slideToggle();
	});
	// Mobile:

	// Weather Scripts Here:
	$('.weather').on('mouseenter', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.state_ddown').slideUp();
		$('.nav_dropdown, .ddmenue').slideUp();
		$('.weatherDropBox').slideToggle();
	});
	$('.weatherDropBox').on('mouseleave', function(e){
		$('.weatherDropBox').slideUp();
	});

	// Cricket Left Slider Widgets:
	$('.live_cimg').on('click', function(e){
		e.preventDefault();
		$('.live_cricketpup').animate({'left': '0px', 'padding': '4px'});
		$('.live_cimg').css('display', 'none');
	});
	$('.lc_close').on('click', function(e){
		e.preventDefault();
		$('.live_cricketpup').animate({'left': '-495px', 'padding-right': '40px'});
		$('.live_cimg').css('display', 'block');
	});
	// End Of Cricket Slider Widgets:

	$(document).on('click', '.setting_icon', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.settingbox').slideDown();
		$('.citybox').slideUp();
	});

	/*$('.close, .cancl_btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		//$('.weather_hoverbox').slideUp();
		$('.settingbox').slideUp();
		$('.citybox').slideDown();
	});
	*/
	// Weather Scripts End Here:

	$('.moreicon').on('click', function(e){
		e.preventDefault();
		$('ul.sharebox').slideDown();
	});

	$('.more_icon').on('click', function(e){
		e.preventDefault();
		$('ul.sharebox').slideUp();
	});

	$('.fltr').on('click', function(e){
        e.preventDefault();
		e.stopPropagation();
		$('.ddbox').slideToggle();
		$('.filterDropBox').slideUp();
	});

	$('.fltr1').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.ddbox1').slideToggle();
	});

	// Filter Box DropDown:
	$('.filterBox').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.filterDropBox').slideToggle();
		$('.ddbox').slideUp();
	});

	// Bloggers List:
	$('.select_blogers').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.blogger_dropbox').slideToggle();
	})

	$(document).on('click', '.city_click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.city_dropbox').slideToggle();
	});

	$('.shows_click').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.show_dropbox').slideToggle();
	})
	// Slide Toggle For State Nav:
	/*var StatTtoggleFlag = 0;
	$('.state_nav').mouseover(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.nav_dropdown').slideUp();
		$('.weather_hoverbox').slideUp();
		$('.state_ddown').slideDown();
		if(StatTtoggleFlag==0){
		  //code for slide down
		  StatTtoggleFlag=1;
		}else{
			//code for slide up
			StatTtoggleFlag=0;
			if(stateSlug!='india'){
				$('#stateTopMenu li[data-slug=' + stateSlug + '] a').addClass('act');
				$('.headerStateNewsBox').hide();
				$('#stateDropBox'+stateSlug).show();
			}else{
				var storyDivBoxId = $('#stateTopMenu li').data('slug');
				$('#stateTopMenu li:eq(0) a').addClass('act');
				$('.headerStateNewsBox').hide();
				$('#stateDropBox'+storyDivBoxId).show();
			}
		}
	});*/
	$('.state_nav').on('click', function(e){
		e.preventDefault();
		$('.nav_dropdown, .ddmenue').slideUp();
		$('.weatherDropBox').slideUp();
		$('.state_ddown').slideToggle();
		e.stopPropagation();
		$(this).find("span").toggleClass('location_uparrow');
	});
	$('.state_ddown').on('mouseleave', function(e){
		$('.state_ddown').slideUp();
		$('.state_nav').find("span").toggleClass('location_uparrow');
		if($.trim(stateSlug)!='india'){
			$("#stateTopMenu li a").removeClass('act');
			$('#stateTopMenu li[data-slug=' + stateSlug + '] a').addClass('act');
			$('.headerStateNewsBox').hide();
			$('#stateDropBox'+stateSlug).show();
		}else{
			var storyDivBoxId = $('#stateTopMenu li').data('slug');
			$("#stateTopMenu li a").removeClass('act');
			$('#stateTopMenu li:eq(0) a').addClass('act');
			$('.headerStateNewsBox').hide();
			$('#stateDropBox'+storyDivBoxId).show();
		}
	});

	// State Landing Page Local Section:
	$('.local_links .linner ul li').on('click', function(e){
		e.preventDefault();
		$(this).addClass('act').siblings().removeClass('act');
		$('.cbox').slideDown();
		$('.local_news').slideUp();
	});

	$("#stateTopMenu li").on('mouseenter', function(e){
		e.preventDefault();
		e.stopPropagation();
		var stateSlugVal = $(this).data('slug');
		$('#stateTopMenu li').find('a').removeClass('act');
		$('.headerStateNewsBox').hide();
		$('#stateDropBox'+stateSlugVal).show();
	});
	$('.headerStateNewsBox').on('mouseenter', function(e){
		var sBoxId = $(this).data('id');
		$('#stateTopMenu li[data-slug=' + sBoxId + '] a').addClass('act');
	});

	// Stop Sliding on Click Document:
	$('.nav_dropdown, .settingbox, div.jto_ddown a, .topSearchK').on('click', function(e){
		e.stopPropagation();
	});

	// Get Weather Data on Click Top Weather Submit:
	$("#weatherTopSubmit").on('click', function(e){
		var wCSlug = $('.weatherHCity').val();
		e.preventDefault();
		getWeatherWidgetTop(wCSlug);
		setCookie('cookie_weather',wCSlug, 3);
	});

	// Wap Page:
	$('#weatherPageSubmit').on('click', function(e){
		e.preventDefault();
		var wCSlug = $('.weatherHCity').val();
		e.preventDefault();
		getWeatherWidgetTop(wCSlug);
		setCookie('cookie_weather',wCSlug, 3);
	})

	//Get POLL Result :-
	$("#pollSubmit").on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: siteUrl+'ajax-post.php',
			type: 'post',
			dataType: 'html',
			data: $("#formPoll").serialize(),
			success: function(data) {
				if(data!=0){
					$('#pollResultBox').html(data);
				}
			}
		});
	});
	//Get POLL Result :-
	$("#pollSubmitWap").on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: siteUrl+'ajax-post.php',
			type: 'post',
			dataType: 'html',
			data: $("#formPollWap").serialize(),
			success: function(data) {
				if(data!=0){
					$('#pollResultBoxWap').html(data);
				}
			}
		});
	});


	$(document).on('click', function(){
		$('.state_ddown').slideUp();
		//$('.nav_dropdown').slideUp();
		$('.weatherDropBox').slideUp();
		$('.jto_ddown').slideUp();
		$('.filter_ddown').slideUp();
		$('.filterDropBox').slideUp();
		$('.nav_dropdown, .ddmenue').slideUp();
        $('.popup_search').slideUp();
	});
	var windowsize = $(window).width()
	var windohsize = $(window).height();

	if (windowsize >= 800) {
	$('.ddmenue').css({'height':parseInt(windohsize-186)})
	//alert(parseInt(windohsize-186));

	}
	if (windowsize <= 765) {
	$('.ddmenue, .mlanguage').css({'height':parseInt(windohsize+60), 'position': 'fixed', 'top': '0'})
	}

	// up next Slider
	$("#up-next").owlCarousel({
            navigation : false,
	    autoPlay : false,
	    items :3,
	    itemsCustom : false,
	    itemsDesktop : [1280,3],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,3],
	    itemsTabletSmall: [600,2],
	    itemsMobile : [480,2],
	    singleItem : false,
	    itemsScaleUp : false,
		     pagination: true,

	 });
	
	// slideshow carousel
	/*$(".slideshow-carousel").owlCarousel({
	    loop: true,
            navigation : true,
	    items :1,
	    dots: false,
	    pagination: false,
	    itemsDesktop : [1280,1],
	    itemsDesktopSmall : [1024,1],
	    itemsTablet: [768,1],
	    itemsTabletSmall: [600,1],
	    itemsMobile : [480,1]
	 });
	
	$(".slideshow-thumb-carousel").owlCarousel({
	    loop: true,
            navigation : true,
	    dots: false,
	    items :6,
	    pagination: false,
	    itemsDesktop : [1280,7],
	    itemsDesktopSmall : [1024,6],
	    itemsTablet: [768,4],
	    itemsTabletSmall: [600,3],
	    itemsMobile : [480,2]
	 });
	*/

	var sync1 = $(".slideshow-carousel");
	var sync2 = $(".slideshow-thumb-carousel");
 
        sync1.owlCarousel({
	    loop: true,
	    navigation : true,
	    items :1,
	    dots: false,
	    pagination: false,
	    itemsDesktop : [1280,1],
	    itemsDesktopSmall : [1024,1],
	    itemsTablet: [768,1],
	    itemsTabletSmall: [600,1],
	    itemsMobile : [480,1],
	    afterAction : syncPosition,
	  });

	sync2.owlCarousel({
	  loop: true,
	  navigation : true,
	  dots: false,
	  items :6,
	  pagination: false,
	  itemsDesktop : [1280,7],
	  itemsDesktopSmall : [1024,6],
	  itemsTablet: [768,4],
	  itemsTabletSmall: [600,3],
	  itemsMobile : [480,2],
	  afterInit : function(el){
	    el.find(".owl-item").eq(0).addClass("synced acive");
	  }
	});

	function syncPosition(el){
	  var current = this.currentItem;
	  $("#sync2")
	    .find(".owl-item")
	    .removeClass("synced active")
	    .eq(current)
	    .addClass("synced active")
	  if($("#sync2").data("owlCarousel") !== undefined){
	    center(current)
	  }
  
	}
  
	$("#sync2").on("click", ".owl-item", function(e){
	  e.preventDefault();
	  var number = $(this).data("owlItem");
	  sync1.trigger("owl.goTo",number);
	});
  
	function center(number){
	  var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
  
	  var num = number;
	  var found = false;
	  for(var i in sync2visible){
	    if(num === sync2visible[i]){
	      var found = true;
	    }
	  }
  
	  if(found===false){
	    if(num>sync2visible[sync2visible.length-1]){
	      sync2.trigger("owl.goTo", num - sync2visible.length+2)
	    }else{
	      if(num - 1 === -1){
		num = 0;
	      }
	      sync2.trigger("owl.goTo", num);
	    }
	  } else if(num === sync2visible[sync2visible.length-1]){
	    sync2.trigger("owl.goTo", sync2visible[1])
	  } else if(num === sync2visible[0]){
	    sync2.trigger("owl.goTo", num-1)
	  }
	}
	
	// trending Slider
	$("#trending").owlCarousel({
            navigation : false,
	    autoPlay : false,
	    items :4,
	    itemsCustom : false,
	    itemsDesktop : [1280,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,3],
	    itemsTabletSmall: [600,2],
	    itemsMobile : [480,2],
	    singleItem : false,
	    itemsScaleUp : false,
	    pagination: true,

	 });

	// mainslide Slider
	$("#mainslide").owlCarousel({
            navigation : false,
	    autoPlay : false,
	    items :3,
	    itemsCustom : false,
	    itemsDesktop : [1280,3],
	    itemsDesktopSmall : [1024,2],
	    itemsTablet: [768,2],
	    itemsTabletSmall: [640,1],
	    itemsMobile : [480,1],
	    singleItem : false,
	    itemsScaleUp : false,
	    pagination: true,

	 });

// blog Slider
	$("#blogs-carousel").owlCarousel({
            navigation : false,
	    autoPlay : true,
	    loop:true,
	    nav:true,
	    singleItem : true,
	    pagination: true
	 });
// network  Slider
	$("#network-carousel").owlCarousel({
            navigation: false,
	    autoPlay: true,
	    loop: true,
	    nav: true,
	    items: 5,
	    pagination: true,
	    itemsDesktop : [1280,5],
	    itemsDesktopSmall : [1024,3],
	    itemsTablet: [768,3],
	    itemsTabletSmall: [640,2],
	    itemsMobile : [480,2]
	});
// partners Slider
	$("#partners-carousel").owlCarousel({
            navigation : false,
	    autoPlay : true,
	    loop:true,
	    nav:true,
	    items :5,
	    pagination: false,
	    itemsDesktop : [1280,5],
	    itemsDesktopSmall : [1024,2],
	    itemsTablet: [768,2],
	    itemsTabletSmall: [640,1],
	    itemsMobile : [480,1]
	});


// grid3 Slider
	$("#grid3").owlCarousel({
            navigation : false,
	    autoPlay : false,
	    items :3,
	    itemsCustom : false,
	    itemsDesktop : [1280,3],
	    itemsDesktopSmall : [1024,3],
	    itemsTablet: [768,3],
	    itemsTabletSmall: [640,2],
	    itemsMobile : [480,2],
	    singleItem : false,
	    itemsScaleUp : false,
	    pagination: false,
	    touchDrag : false,
	    mouseDrag: false,

	 });


});

// Print Function Page:
function printPage(){
	window.print();
}

// Display Top 10 Stories on MouseOver State:
function displayStateTopStories(stateSlug){
	$.ajax({
		type: "GET",
		dataType:'html',
		url: siteUrl+'ajax-post.php',
		data:{func:'state_top_stories', stateSlug:stateSlug},
		success: function(response){
			$('#stateDropBox').html('');
			$('#stateDropBox').html(response);
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log(xhr.status);
			console.log(thrownError);
		}
	});
}

//Common Function For Sliders Functions:
function commonSlider(classContainer, arrowClass){
	// Slider Container:
	var sliderContainer = $("."+classContainer + " ul");
	var count =0;
	var slider_li_width = sliderContainer.find('li').width();
	var total_li = sliderContainer.find("li").length;
	sliderContainer.css('width', (total_li*100)+'%');
	var singleLiWd = (100/total_li);
	sliderContainer.find("li").css('width', singleLiWd+'%');
	var ImageCount = 1;

	// Sliders:
	$("." + classContainer + " a." +arrowClass).click(function(e){
		e.preventDefault();
		var dir=$(this).data("type");
		if(dir=="right"){
			count=count+1;
			ImageCount = ImageCount+1;
		}
		else{
			count=count-1;
			ImageCount = ImageCount-1;
		}
		if(count <0 || count>=total_li){
			count=0;
			ImageCount = 1;
		}
		var noimageLentgh = ImageCount.length;
		$('.no_photo').html(ImageCount+'/'+total_li);
		sliderContainer.animate({marginLeft:'-'+count*slider_li_width+'px'},500);
	});
}
// Weather Widgets For Header:
function getWeatherWidgetTop(stateSlug){
	$.ajax({
		type: "GET",
		dataType:'json',
		url: siteUrl+'ajax-post.php',
		data:{func:'weather_top_widget', stateSlug:stateSlug},
		success: function(response){
			$('#weatherTopHeader').show();
			$("#weatherTopHeader").html(response.top_weather_sec);
			$("#weatherTopSection").html(response.middle_weather_sec);
			//$(".suggest_holder_w .autoSuggestHInput").val(response.city_weather);
			$(".suggest_holder_w .autoSuggestHInput").attr('placeholder', response.city_weather);
			$('#wapWeatherSection').html(response.wap_weather);
			$(".weatherHCity").val(stateSlug);
			$('.settingbox').slideUp();
			$('.citybox').slideDown();
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log(xhr.status);
			console.log(thrownError);
		}
	});
}

// Function For Auto Suggest:
function getAutoSuggest(suggestedHL, suggestedUL, suggestedLI, suggestedDiv, autoSuggestType){
	// Suggest section holder
	var $suggestedHL = suggestedHL;
	// Suggestions UL
	var $suggestedUL = suggestedUL;
	// Suggestions LI
	var $suggestedLI = suggestedLI;
	var $suggestedDiv = suggestedDiv;
	// Keyboard Nav Index
	var index = -1;
	$('input', $suggestedHL).on({
		keyup: function(e){
			var mHT = false;
			if(e.which == 38){
				// Down arrow - Check that we've not tried to select before the first item
				if(--index < 0){
					index = 0;
				}

				// Set a variable to show that we've done some keyboard navigation
				mHT = true;
			}else if(e.which == 40){
				// Up arrow - Check that index is not beyond the last item
				if(++index > $suggestedLI.length - 1){
					index = $suggestedLI.length-1;
				}
				// Set a variable to show that we've done some keyboard navigation
				mHT = true;
			}

			// Check we've done keyboard navigation
			if(mHT){
				// Remove the active class
				$('li.active', $suggestedHL).removeClass('active');
				$suggestedLI.eq(index).addClass('active');
			}else if(e.which == 27){
				index = -1;
				// Esc key
				$suggestedDiv.hide();
				$suggestedUL.hide();
			}else if(e.which == 13){
				// Enter key
				if(index > -1){
					addSuggestion($('li.active', $suggestedHL));
					index = -1;
					$('li.active', $suggestedHL).removeClass('active');
				}
			}else{
				index = -1;
				// Clear the ul
				$suggestedUL.empty();
				// Cache the search term
				$searchHValue = $(this).val();
				// Search regular expression
				$searchHValue = new RegExp($searchHValue.replace(/[^0-9a-z_]/i), 'i');
				// Loop through the array
				$.each(stateCityMasterArray, function(index, element){
					var stringSplit = index;
					var checkCharacter = stringSplit.indexOf(',');
					var arrayStateS ='';
					var arrayStateCityS='';
					var elementUrl ='';
					if(checkCharacter>-1){
						// Split Key of Array:
						var arrayOfStrings = stringSplit.split(',');
						arrayStateS = arrayOfStrings[0];
						arrayStateCityS = arrayOfStrings[1];
						elementUrl = siteUrl+arrayStateS+'/'+arrayStateCityS;
					}else{
						arrayStateCityS = stringSplit;
						elementUrl = siteUrl+arrayStateCityS;
					}
					if(arrayStateS){
						var dataStateSlug = 'data-state="'+arrayStateS+'"';
					}
					if(element.match($searchHValue)){
						$suggestedUL.append($('<li data-slug="'+arrayStateCityS+'" '+dataStateSlug+'><a href="'+elementUrl+'">' + element + '</a></li>'));
					}
				});
				// Show the ul
				$suggestedDiv.show();
				$suggestedUL.show();
			}
			if($(this).val() == ''){
				$suggestedDiv.hide();
				$suggestedUL.hide();
			}
		},
		keydown: function(e){
			if(e.which == 38 || e.which == 40 || e.which == 13){
				e.preventDefault();
			}
		},
		focus: function(e){
			if($(this).val() != ''){
				$suggestedDiv.show();
				$suggestedUL.show();
			}
		}
	});
	// Onclik Li List:
	$suggestedHL.on('click', 'li', function(e){
		e.preventDefault();
		var valueSlug = $(this).data('slug');
		var valueSSlug = $(this).data('state');
		if(autoSuggestType=="weather_city"){
			$('.weatherHCity').val(valueSlug);
		}else{
			if(valueSSlug){
				window.location.href = siteUrl+valueSSlug+'/'+valueSlug;
			}else{
				window.location.href = siteUrl+valueSlug;
			}

		}
		$(".autoSuggestHInput", $suggestedHL).val($(this).text());
		//$(".autoSuggestHInput", $suggestedHL).attr("placeholder", $(this).text());
		$suggestedDiv.hide();
		$suggestedUL.hide();
	});
}

// Load Breaking News:
function loadBreakingAlert(stateSlug){
	var stateSlug = stateSlug;
	$.ajax({
		type: "GET",
		dataType:'json',
		url: siteUrl+'ajax-post.php',
		data:{func:'breaking_alert', stateSlug:stateSlug},
		success: function(response){
			$.each(response,function(i, headlines){
				var pheadline = window.stripslashes(headlines.news);
				$('<li>',{
				'html': pheadline,
				'class': 'breaking',
				'style': 'display:none'
				}).appendTo('ul#breakingAlerts');
			});
			if(response[0] && response[0].news.length > 0){
				$('.alert_box').show();
				$("ul#breakingAlerts").fadeIn('slow');
			}else{
				$('.alert_box').hide();
			}
			function fadeContent() {
				$("li.breaking:hidden:first").fadeIn(800);
			}
			function fadeContentMulti() {
				$("li.breaking:hidden:first").fadeIn(800).delay(2000).fadeOut(800, function() {
				$(this).appendTo($(this).parent());
					fadeContentMulti();
				});
			}
			if(response.length > 1){
				fadeContentMulti();
			}
			else {
				fadeContent();
			}
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log(xhr.status);
			console.log(thrownError);
		}
	});
}

// Get left ScoreCard Widgets:
function getLeftScoreCardWedget(liveScoreCardUrl){
	var jsonUrl='http://english.pradesh18.com/js/crosslivescores.json';
	$.ajax({
		type: "GET",
		crossDomain: true,
		jsonpCallback: 'scores',
		dataType: "jsonp",
		jsonp: 'jsonp',
		url: liveScoreCardUrl,
		success: function(response){
			var matchesDetails = response.matches;
			var liveMatchListing='';
			var countMatch=0;
			$.each(matchesDetails,function(i, liveMatches){
				var fteamNameA = liveMatches.hometeam;
				var fteamNameB = liveMatches.awayteam;
				var fMatchId = liveMatches.matchid;
				if(i==0){
					var flscorelink = siteUrl+'scorecard/full/'+fteamNameA.toLowerCase().replace(/\s+/g, '')+'-'+fteamNameB.toLowerCase().replace(/\s+/g, '')+'/'+fMatchId+'.html';
					$('.top_live_score a').attr('href', flscorelink);
				}
				var teamAScore=liveMatches.teama.scores;
				var teamBScore=liveMatches.teamb.scores;
				var seriesFullName = liveMatches.series;
				var liveMatchData = getWidgetActiveTeam(teamAScore,teamBScore);
				var fullScoreCardLink = siteUrl+'scorecard/full/'+fteamNameA.toLowerCase().replace(/\s+/g, '')+'-'+fteamNameB.toLowerCase().replace(/\s+/g, '')+'/'+fMatchId+'.html';
				liveMatchListing+='<li><a href="'+fullScoreCardLink+'">'+seriesFullName+'</a> '+liveMatchData+'</li>';
				countMatch++;
			});
			if(liveMatchListing){
				//$('.live_cricketpup').css('left', (countMatch*(-305))+'px' );
				$('#topScoreBox').show();
				$(".top_live_score").show();
				var scoreCardLeftContainer = $('#topLeftScoreCardWidget');
				$('.mcricket_widget .live_cwidget').show();
				var scoreCardDivW = $('.lcinner').outerWidth()
				scoreCardLeftContainer.css('width', (countMatch*scoreCardDivW)+'px');
				$('#mobileLiveScoreCard').css('width', (countMatch*390)+'px');
				$('#topLeftScoreCardWidget').html(liveMatchListing);
				$('#mobileLiveScoreCard').html(liveMatchListing);
			}
			if(matchesDetails.length==0 && typeof matchInterval!='undefined'){
				$('#topScoreBox').hide();
				$(".top_live_score").hide();
				$('.mcricket_widget .live_cwidget').hide();
				$('.live_cricketpup').hide();
				clearInterval(matchInterval);
			}
		},
		error: function(xhr, ajaxOptions, thrownError){
			clearInterval(matchInterval);
			console.log(xhr.status);
			console.log(thrownError);
		}
	});
}

// Make Widget Li For Teams:
function getWidgetActiveTeam(teamAScore,teamBScore){
	var activeTeamName='';
	var activeTeamTotalRun='';
	var activeTeamWickets='';
	var activeTeamOvers='';

	for(var b=0; b < teamBScore.length; b++){
	var activeStatus=teamBScore[b].active;
		if(activeStatus==1){
			activeTeamName=teamBScore[b].team;
			activeTeamTotalRun=teamBScore[b].scores;
			activeTeamWickets=teamBScore[b].wickets;
			activeTeamOvers=teamBScore[b].overs;
		}
	}
	if(activeTeamName==''){
		for(var b=0; b < teamAScore.length; b++){
			var activeStatus=teamAScore[b].active;
			if(activeStatus==1){
				activeTeamName=teamAScore[b].team;
				activeTeamTotalRun=teamAScore[b].scores;
				activeTeamWickets=teamAScore[b].wickets;
				activeTeamOvers=teamAScore[b].overs;
			}
		}
	}
	if(activeTeamName!=''){
		return '<div class="score">'+activeTeamName+' <span><a href="#">'+activeTeamTotalRun+'/'+activeTeamWickets+'</a></span> '+activeTeamOvers+' Overs</div>';
	}else{
		return '';
	}
}

/* loading js file for etv patti */
function loadJSDynamically(file,callback) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "text/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
	jsElm.onload = function() {
		window[callback]();
	}
    document.body.appendChild(jsElm);
}
/* Load patti Data */
function loadPattiDataEtvAjax() {
	var patti_js_url = siteUrl+'js/patti_data.js?v=1';
	loadJSDynamically( patti_js_url,'getCityStatePattiNewsAjax' );
}

// For Strip Slashes:
function stripslashes (str) {
  return (str + '').replace(/\\(.?)/g, function (s, n1) {
    switch (n1) {
    case '\\':
      return '\\';
    case '0':
      return '\u0000';
    case '':
      return '';
    default:
      return n1;
    }
  });
}

// function Set Cookies:
function setCookie(name, value, expires){
	domain = '';
	secure = '';
	path = '/';
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+'='+escape( value ) +
		( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString()
		( ( path ) ? ';path=' + path : '' ) +
		( ( domain ) ? ';domain=' + domain : '' ) +
		( ( secure ) ? ';secure' : '' );
}
// Get Cookies:
function getCookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ';', len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}



$(document).ready(function(){
   $(".highlight-list li:first-child").addClass("active");
});

(function($){
			$(window).on("load",function(){
				
				$(".highlight-list").mCustomScrollbar({
					   theme:"dark"
				});
				
			});
		})(jQuery);
 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


$(document).ready(function(){
if(typeof($('.share_arti_revamp').offset()) != 'undefined'){    
var fixmeTop = $('.share_arti_revamp').offset().top;
    $(window).scroll(function() {
	var width = $(window).width();
	if(width > 1365){
	    var currentScroll = $(window).scrollTop();
	    if (currentScroll >= fixmeTop) {
		$('.share_arti_revamp').css({
		    position: 'fixed',
		    top: '65px',
		});
	    } else {
		$('.share_arti_revamp').css({
		    position: 'static'
		});
	    }
	}
	
    });
}
});






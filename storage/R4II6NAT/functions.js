slider = {
	init: function() {
		if($('.community-offers-block .slick-wrapper').length) {
			let isMobile =  $('.community-offers-block .slick-wrapper').hasClass('is-mobile') ? true : false;
			slider.getSlider( isMobile );
		}
		if($('.page-for-users-header-top .user-wrapp').length) {
			slider.rgbCommunityMenu();
		}
		$(document).on('click', '.rgb-mobile-menu-toggle', slider.rgbGetToggleMenu);
		$(document).on('click', '.main-users-page-slider-inner .arrow-down, #users-page-main-menu li a', slider.rgbGetScrollTo);
	},
	getSlider: function( isMobile ) {
		let intViewportWidth = window.innerWidth;
		let arrows           = ( intViewportWidth >= 1024 ) ? true : false;
		let infinite         = ( isMobile && intViewportWidth < 1024 ) ? true : false;
		$(".slick-wrapper.slider").slick({
			dots: false,
			infinite: infinite,
			arrows: arrows,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					infinite: true
				}
			},{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					variableWidth: true
				}
			}]
		});
	},
	rgbCommunityMenu: function () {
		let headerProfile = $('.page-for-users-header-top .user-wrapp .profile-links');
		let inner         = headerProfile.find('.profile-links-inner');

		if (document.cookie.indexOf('CRMSESSION=') === -1) {
			inner.html('<a href="https://crm.timesofisrael.com/sign-in"><span>Sign in</span></a>');
		}
	},
	rgbGetToggleMenu: function( event ) {
		event.preventDefault();
		let $this  = $(this);
		let nav    = $this.parent().find('.navigation');
		let header = $this.closest('.page-for-users-header');

		if( ! $this.hasClass('active') ) {
			$this.addClass('active');
			nav.slideDown(400, function() {
				header.addClass('open');
				nav.removeClass('hidden');
			});
			document.documentElement.style.overflow = 'hidden';
		} else {
			$this.removeClass('active');
			header.removeClass('open');
			nav.slideUp(400, function() {
				nav.addClass('hidden');
				document.documentElement.style.overflow = '';
			});
		}
	},
	rgbGetScrollTo: function( event ) {
		let scrollTo = $(this).data('scroll');
		if( typeof scrollTo != 'undefined' ) {
			if( $('body').hasClass('mobile') && window.innerWidth < 1024 ) {
				event.preventDefault();
				let menuToggle = $('.rgb-mobile-menu-toggle');
				let header = $('.page-for-users-header');
				let nav = $('.page-for-users-header-top .navigation');
				menuToggle.removeClass('active');
				header.removeClass('open');
				nav.slideUp(400, function() {
					nav.addClass('hidden');
					document.documentElement.style.overflow = '';
					$([document.documentElement, document.body]).animate({
						scrollTop: $(scrollTo).offset().top - 80
					}, 800);
				});
			} else {
				$([document.documentElement, document.body]).animate({
					scrollTop: $(scrollTo).offset().top - 80
				}, 800);
			}
		}
	}
};

jQuery(document).ready(slider.init);

jQuery(document).ready(function () {

	var utm_medium = checkSomeUrlParameter( 'utm_medium' );
	if( ! getCookie( 'nlPopup' ) && typeof utm_medium !== 'undefined' && utm_medium == 'email' ) {
	  var cookieTime = 30 * 24 * 60 * 60 * 1000; // 30 days
	  setCookie( 'nlPopup', 1, cookieTime );
	}

	// {TOI CRM} Create a content page for users
	$(document).on('click', '.page-for-users-header-top .user-wrapp i', function ( event ) {
		event.preventDefault();
		let $this        = $(this);
		let parent       = $this.parent();
		let profileLinks = parent.find('.profile-links');

		parent.toggleClass('open');
		if( parent.hasClass('open') ) {
			profileLinks.slideDown(400);
		} else {
			profileLinks.slideUp(400);
		}
	});
	$(document).on('scroll', function ( event ) {
		if( ! $('body').hasClass('mobile') ) {
			let headerHeight = $('.page-for-users-header-top');
			let stickyHeight = headerHeight.parent().find('.page-for-users-header-top-sticky');
			let wOffset      = window.pageYOffset;
			if( wOffset > 0 ) {
				headerHeight.addClass('sticky');
				stickyHeight.css({'height':headerHeight.outerHeight()+'px'});
			} else {
				headerHeight.removeClass('sticky');
				stickyHeight.css({'height':''});
			}
		}
	});

	$(document).on('click', '.btn-load-more-community-posts', function ( event ) {
		event.preventDefault();
		let $this     = $(this);
		let parent    = $this.closest('.community-latest-block');
		let row       = parent.find('.community-latest-block-inner');
		let offset    = row.find('.community-latest-posts-item').length;
		let preloader = parent.find('.ajaxloader');

		$.ajax({
			type : "GET",
			dataType : 'html',
			url : '/wp-content/themes/rgb/ajax/community-load-more.php',
			data : {
				offset : offset
			},
			beforeSend: function() {
				preloader.show();
			}
		}).done(function( data ) {
			if( data != '' ) {
				row.append(data);
			} else {
				$this.slideUp();
			}
			if( $('.load-more-hidden').length > 0 ) {
				$this.slideUp();
			}
			preloader.hide();
		});
	});

	// {TOI} Check podcast page
	$('#topic-load-more-btn').on('click', function ( event ) {
		event.preventDefault();
		let $this     = $(this);
		let parent    = $this.closest('.posts-block');
		let row       = parent.find('.row');
		let tag       = $this.data('tag');
		let tag_id    = $this.data('tag_id');
		let offset    = row.find('.post-item').length + 1;
		let preloader = $this.parent().find('.ajaxloader');

		$.ajax({
			type: "POST",
			url: window.wp_data.ajax_url,
			data : {
				action : 'rgb_load_more_topic_terms',
				tag    : tag,
				tag_id : tag_id,
				offset : offset
			},
			beforeSend: function() {
				preloader.show();
			},
			success: function( data ) {

				if( data != '' ) {
					row.append(data);
				} else {
					$this.parent().slideUp();
				}

				if( $('.load-more-hidden').length > 0 ) {
					$this.parent().slideUp();
				}

				preloader.hide();
			}
		});
	});

	// show hidden part of crm-post-module
	$(document).on('click', 'a.crm-article-popup__read-more-link', function ( event ) {
		event.preventDefault();
		let $this = $(this);
		let parent = $this.parent();
		let hiddenModule = parent.find('.crm-article-popup__hidden-content');
		if( hiddenModule.is(':visible') ) {
			hiddenModule.slideUp();
		} else {
			$this.slideUp();
			hiddenModule.slideDown();
		}
	});

	// outbrain mobile
	rgbAddMobileOutbrain();
	rgbSalaModuleOutbrain();

	// cookieconsent.init();

	var nl_popup_opened = false;
	var $crmBottomPopup = $('.crm-bottom-popup');
	var crmBottomPopupCoockieName = 'crm-bottom-popup';
	
	if ($('body').hasClass('single')) {
		crmBottomPopupCoockieName = 'crm-bottom-popup-single';
	}

	setTimeout(setWidgetHeight, 500);
	if (getCookie('euconsent-v2') && rgbPushPopupIsNotVisible()) {
		if (($('body').hasClass('home') || $('body').hasClass('single')) && !$('body').hasClass('single-liveblog_entry')) {
			if($('body').hasClass('single')){
				if (($('.crm-bottom-popup').length == 0 || getCookie(crmBottomPopupCoockieName) == '1')) {
					nl_popup_opened = newsletterPopup();
				}
			} else {
				nl_popup_opened = newsletterPopup();
			}
		}
	}

	if (typeof __tcfapi == 'function') {
		// CHECK COOKIES POPUP EXITS
		__tcfapi('getTCData', 2, (tcData, success) => {
			// console.log('tcData: ', tcData);
			// console.log('success: ', success);
			if (success && tcData.gdprApplies === false) {
				if (rgbPushPopupIsNotVisible()) {
					if (($('body').hasClass('home') || $('body').hasClass('single')) && !$('body').hasClass('single-liveblog_entry')) {
						if($('body').hasClass('single')){
							if (($('.crm-bottom-popup').length == 0 || getCookie(crmBottomPopupCoockieName) == '1')) {
								nl_popup_opened = newsletterPopup();
							}
						} else {
							nl_popup_opened = newsletterPopup();
						}
					}
				}
			}
		});
	} else {
		if (rgbPushPopupIsNotVisible()) {
			if (($('body').hasClass('home') || $('body').hasClass('single')) && !$('body').hasClass('single-liveblog_entry')) {
				if($('body').hasClass('single')){
					if (($('.crm-bottom-popup').length == 0 || getCookie(crmBottomPopupCoockieName) == '1')) {
						nl_popup_opened = newsletterPopup();
					}
				} else {
					nl_popup_opened = newsletterPopup();
				}
			}
		}
	}

	$(document).on('click', '#partners-slider .sub-menu a', function (e) {
		e.preventDefault();
		var id = $(this).data('id');
		if (id != 0) {
			$.ajax({
				type: 'POST',
				dataType: 'html',
				url: '/wp-content/themes/rgb/ajax/partners.php',
				data: {
					id: id
				}
			}).done(function (html) {
				$('#partners-slider').html(html);
			});
		} else {
			location.assign($(this).attr('href'));
		}
	});

	// CRM Bottom popup
// OLD CODE
	// if ($crmBottomPopup.length && navigator.userAgent.indexOf('rgbmedia-app') == -1) {
	// 	if (!getCookie('cookieconsent_status') && false) {
	// 		var windowClickFn = function (e) {
	// 			if (e.target.classList.contains('cc-dismiss')) {
	// 				window.removeEventListener('click', windowClickFn);
	// 				if (!getCookie('crm-bottom-popup') && !getCookie('CRMSESSION')) {
	// 					showCrmBottomPopup();
	// 				} else {
	// 					$('.crm-bottom-popup').remove();
	// 				}
	// 			}
	// 		};

	// 		window.addEventListener('click', windowClickFn);
	// 	} else {
	// 		if (!getCookie('crm-bottom-popup') && !getCookie('CRMSESSION')) {
	// 			showCrmBottomPopup();
	// 		} else {
	// 			$('.crm-bottom-popup').remove();
	// 		}
	// 	}
	// }

	// NEW CODE
	if ($crmBottomPopup.length && navigator.userAgent.indexOf('rgbmedia-app') == -1) {
		if (getCookie('euconsent-v2') && rgbPushPopupIsNotVisible()) {
			setTimeout(function(){
				rgbShowPushPopup();
			}, 5000);
			if (!getCookie(crmBottomPopupCoockieName) && !getCookie('CRMSESSION')) {
				showCrmBottomPopup(nl_popup_opened, crmBottomPopupCoockieName);
			}
		}

		// CHECK COOKIES POPUP EXITS
		__tcfapi('getTCData', 2, (tcData, success) => {
			// console.log('tcData: ', tcData);
			// console.log('success: ', success);
			if (success && tcData.gdprApplies === false) {
				setTimeout(function(){
					rgbShowPushPopup();
				}, 5000);
				if (rgbPushPopupIsNotVisible()) {
					if (!getCookie(crmBottomPopupCoockieName) && !getCookie('CRMSESSION')) {
						showCrmBottomPopup(nl_popup_opened, crmBottomPopupCoockieName);
					}
				}
			}
		});
	}

	// if (!getCookie('cookieconsent_status')) {
		// $(document).on('click', '.cc-popup-button', function(event) {
		// 	setTimeout(function(){
		// 		rgbShowPushPopup();
		// 	}, 5000);
		// });
	// }

	// if (!rgbPushPopupIsNotVisible() && getCookie('cookieconsent_status')) {
	// 	rgbShowPushPopup();
	// }

	function rgbPushPopupIsNotVisible(){
		var PushwooshIsSubscribed = false;
		var PushwooshIsDenied = false;
		if (typeof Pushwoosh == 'object' && typeof Pushwoosh.isSubscribed == 'function') {
			Pushwoosh.isSubscribed().then(function(result) {
				PushwooshIsSubscribed = result;
			});
		}
		if (typeof Pushwoosh == 'object' && typeof Pushwoosh.driver == 'object' && typeof Pushwoosh.driver.getPermission=='function') {
			PushwooshIsDenied = (Pushwoosh.driver.getPermission()=='denied');
		}
		return ((getCookie('push-notification-closed') || PushwooshIsSubscribed || PushwooshIsDenied ) || $('#push-notification-widget-script').length == 0 || navigator.userAgent.indexOf('rgbmedia-app') !== -1);
	}
	function rgbShowPushPopup() {
		var subscriptionWidget = $('#push-notification-widget');
		if (subscriptionWidget.length==1 && !getCookie('push-notification-closed') && navigator.userAgent.indexOf('rgbmedia-app') == -1) {
		} else{
			return false;
		}
		if (typeof Pushwoosh == 'object' && typeof Pushwoosh.driver == 'object' && typeof Pushwoosh.driver.getPermission=='function') {
		var actions = [];
			var permission = Pushwoosh.driver.getPermission();
			var isSubscribed = Pushwoosh.isSubscribed();
			actions.push(permission);
			actions.push(isSubscribed);
			Promise.all(actions)
				.then((result) => {
					var permission = result[0];
					var isSubscribed = result[1];
					if (permission !== 'denied' && !isSubscribed) {
						subscriptionWidget.removeClass('push-notification-widget_hidden');
					}
				});
		}
	}
	// function showCrmBottomPopup() {
	// 	var $crmBottomPopup = $('.crm-bottom-popup');
	// 	var	$crmBottomPopupCloseBtn = $('.crm-bottom-popup__close', $crmBottomPopup);
	// 	var crmBottomPopupClass = getRandomCrmPopup( $crmBottomPopup );

	// 	setTimeout(() => {
	// 		$('body').prepend('<div class="crm-bottom-popup-overlay"></div>');
	// 		$crmBottomPopup.addClass('open');
	// 		$crmBottomPopup.addClass(crmBottomPopupClass).addClass('open');
	// 		setCookie('crm-bottom-popup', 1, (24 * 60 * 60 * 1000)); // 1 days
	// 		ga('send', 'event', 'CRM', 'CRM Popup show', 'CRM Popup show up',1);
	// 	}, 10000);

	// 	$crmBottomPopupCloseBtn.click(function () {
	// 		$('.crm-bottom-popup-overlay').remove();
	// 		$crmBottomPopup.removeClass('open');
	// 	});
	// }

	function showCrmBottomPopup(nl_popup_opened, crmBottomPopupCoockieName) {
		var cookieTime = (24 * 60 * 60 * 1000); // 1 days
		if ($('body').hasClass('single')) {
			// if (nl_popup_opened) {
			// 	return false;
			// }
			cookieTime = (24 * 60 * 60 * 1000 * 2); // 2 days
		}
		var $crmBottomPopup = $('.crm-bottom-popup');
		var	$crmBottomPopupCloseBtn = $('.crm-bottom-popup__close', $crmBottomPopup);
		var crmBottomPopupClass = getRandomCrmPopup( $crmBottomPopup );

		setTimeout(() => {
			$('body').prepend('<div class="crm-bottom-popup-overlay"></div>');
			// $crmBottomPopup.addClass(crmBottomPopupClass).addClass('open');
			$crmBottomPopup.addClass('open');
			console.log('opened')
		}, 10000);

		$crmBottomPopupCloseBtn.click(function () {
			setCookie(crmBottomPopupCoockieName, 1, cookieTime); // 1 days
			ga('send', 'event', 'CRM', 'CRM Popup show', 'CRM Popup show up', 1);
			$('.crm-bottom-popup-overlay').remove();
			$crmBottomPopup.removeClass('open');
		});
	}

	// Get Random CRM Popup/Module
	function getRandomCrmPopup( $crmPopup ) {
		//var crmBottomPopupStyles = ['bg-light-blue', 'bg-light-yellow', 'bg-blue'];
		//var crmBottomPopupStylesColors = ['C7F4FF', 'FFDF60', '1964F6'];
		if ( $('body').hasClass('home') ) {
			var crmBottomPopupStyles = ['bg-blue'];
			var crmBottomPopupStylesColors = ['1964F6'];
		} else {
			var crmBottomPopupStyles = ['bg-light-yellow'];
			var crmBottomPopupStylesColors = ['FFDF60'];
		}

		var randomNumber = Math.floor(Math.random() * crmBottomPopupStyles.length);
		var crmBottomPopupClass = crmBottomPopupStyles[randomNumber];

		if ( $crmPopup.length ) {
			$crmPopup.find('a').each(function(i, element) {
				var link = $(element).attr('href');

				if ( link.indexOf('utm_campaign=community_june2020') !== -1 ) {
					$(element).attr('href', link + crmBottomPopupStylesColors[randomNumber]);
				}
			});
		}

		return crmBottomPopupClass;
	}

	// CRM Bottom popup - closing
	// $(document).click(function(e) {
	// 	var container = $('.crm-bottom-popup');

	// 	if (!container.is(e.target) && container.has(e.target).length === 0 && container.css('display') === 'block' && e.target.className !== 'cc-popup-button' ) {
	// 		e.preventDefault();
	// 		container.hide();
	// 		container.removeClass('open');
	// 		$('.crm-bottom-popup-overlay').remove();
	// 	}
	// });

	// CRM article module
	// var $crmPostModuleMark = $('.article .article-content .crm-post-module-mark');
	// if ($crmPostModuleMark.length && !getCookie('CRMSESSION'))
	// 	$.ajax({
	// 		type: 'GET',
	// 		dataType: 'html',
	// 		url: '/wp-content/themes/rgb/includes/crm/crm-post-module.php',
	// 	}).done(function (html) {
	// 		$crmPostModuleMark.after(html);
	// 		$crmPostModuleMark.remove();

	// 		var $crmPostModule = $('.crm-post-module');
	// 		var crmPostModuleClass = getRandomCrmPopup( $crmPostModule );

	// 		$crmPostModule.removeClass('bg-light-blue bg-light-yellow bg-blue');
	// 		$crmPostModule.addClass(crmPostModuleClass);
	// 	});
	if (!getCookie('CRMSESSION')){
		var userViewsCount = 1;
		var userViews = getCookie('userViews');
		var moduleClass = '.in-article';
		if (userViews && JSON.parse(userViews).hasOwnProperty('articles')) {
			userViewsCount = JSON.parse(userViews).articles.length;
		}
		
		if (userViewsCount > 3 && userViewsCount % 3 == 1) {
			moduleClass = '.in-article-spical-counter';
			// var countMsg = 'We’re really pleased that you’ve read <span class="count-num">' + userViewsCount + '</span> Times of Israel articles in the past month. That’s why we come to work every day - to provide intelligent readers like you with must-read coverage of Israel and the Jewish world.';
			$('.crm-article-popup__counter-wrap .count-num').text(userViewsCount);
			$('.crm-article-popup__counter-wrap').show();
		}
		// console.log(moduleClass);
		if ($('.crm-post-module' + moduleClass).length > 0) {
			$('.crm-post-module' + moduleClass).show();
		}
	}

	// if ($('.the-content .liveblogdiv > div').length && !rgb_remove_toi_dfp_banner('')) {
		// rgbLiveBlogAddBanners();
	// }


	// GA track events on Share by Email button click
	$(document).on('click', '.social .email a', function () {
		//ga('send', 'event', 'button', 'Share By Mail Button', 'Share by Mail button on page: ' + document.title, 1);

		ga('send', 'event', 'MailShareButton', 'Mail share click', 'Mail share click on page: [' + document.title + ']', 1);
	});


	// Check UserID
	// if ( getCookie('CRMSESSION') && !getCookie('userID')) {
		// deleteCookie('CRMSESSION');

		// COMMENTED BY BIRA 2020-05-05
		// $.ajax({
		// 	type : "POST",
		// 	dataType : 'json',
		// 	url : '/wp-content/themes/rgb/ajax/crm_user_loggedin.php',
		// 	data : {
		// 		crmsession : getCookie('CRMSESSION')
		// 	},
		// }).done(function( data ) {
		// 	if( data.id && data.id != '' ) {
		// 		var cookieTime = 365 * 24 * 60 * 60 * 1000; // 365 days
		// 		setCookie( 'userID', data.id, cookieTime );
		// 		console.log('User is authorized on devcrm.timesofisrael.com', data);
		// 	}
		// });
		// END COMMENTED BY BIRA 2020-05-05

		// fetch('https://crm.timesofisrael.com/user/profile?ArgsOnly=true', {
		// 	credentials: 'include'
		// }).then((response) => {
		// 	if (response.status == 200) {
		// 		response.json().then((data) => {
		// 			console.log('User is authorized on devcrm.timesofisrael.com', data);
		// 			var cookieTime = 365 * 24 * 60 * 60 * 1000; // 365 days
		// 			setCookie( 'UserID', data.id, cookieTime );
		// 		})

		// 	} else{
		// 		console.log('User is NOT authorized on devcrm.timesofisrael.com');
		// 	}
		// }).catch((error) => {
		// 	console.log('Error: ', error);
		// })
	// }
	// if ($('.open-comments').length > 0) {
	// 	$('.show-onready').removeClass('show-onready');
	// 	$(document).on('click', '.open-comments', function ( event ) {
	// 		$(this).parents('#comments').toggleClass('open');
	// 		return false;
	// 	});

	// }

	// SET COOKIE FOR OPEN CLOSE COMMENTS BOX
	if ($('.open-comments').length > 0) {
		var cookieTime = 365 * 24 * 60 * 60 * 1000;
		if (getCookie('comments_opened')) {
			$('#comments').addClass('open');
		}
		$('.show-onready').removeClass('show-onready');
		$(document).on('click', '.open-comments', function ( event ) {
			$(this).parents('#comments').toggleClass('open');
			if ($(this).parents('#comments').hasClass('open')) {
				setCookie('comments_opened', 1, cookieTime);
			} else {
				deleteCookie('comments_opened');
			}
			return false;
		});

	}

	/* var checkCrmUser = function(){
		var crmUserJson = localStorage.getItem('crmUser'),
			now = new Date(),
			crmUserObject = {'updatedAt': '', 'id': 0, 'status': '', 'firstName': '', 'lastName': ''},
			crmUserResponse
		;
		if (crmUserJson) {
			try {
				crmUserObject = JSON.parse(crmUserJson);
				// check if it is the same day
				if ((crmUserObject.updatedAt || '') == now.toDateString()) {
					return crmUserObject;
				}
			} catch (e) { // ignore to refetch
			}
		}
		// fetch user object from local backend script
		crmUserResponse = fetch('https://crm.timesofisrael.com/user/profile', {
			method: 'GET',
			body: {'CRMSESSION': document.cookie.replace(/(?:(?:^|.*;\s*)CRMSESSION\s*\=\s*([^;]*).*$)|^.*$/, "$1")}
		}).then(
			response => response.json()
		).catch(() => {
			console.log('backend error');
			return crmUserObject;
		});
		crmUserObject = {
			'updatedAt': now.toDateString(),
			'id': crmUserResponse.id || 0,
			'status': crmUserResponse.status || '',
			'firstName': crmUserResponse.firstName || '',
			'lastName': crmUserResponse.lastName || ''
		};
		localStorage.setItem('crmUser', JSON.stringify(crmUserObject));
		if (crmUserResponse.id && crmUserResponse.id != 0 && !getCookie('userID')) {
			var cookieTime = 365 * 24 * 60 * 60 * 1000; // 365 days
			setCookie( 'userID', crmUserResponse.id, cookieTime );
		}
		return crmUserObject;
	}
	if ( getCookie('CRMSESSION') && !getCookie('userID')) {
		var doAjax = true;
		var now = new Date();
		var crmUserJson = getCookie('crmUser');
		var cookieTime = 365 * 24 * 60 * 60 * 1000; // 365 days
		if (crmUserJson !== false) {
			crmUserObject = JSON.parse(crmUserJson);
			console.log(crmUserObject.updatedAt);
			if ((crmUserObject.updatedAt || '') == now.toDateString()) {
				doAjax = false;
			}
		}
		if (doAjax) {
			$.ajax({
				type : "POST",
				dataType : 'json',
				url : '/wp-content/themes/rgb/ajax/crm_user_loggedin.php',
				data : {
					crmsession : getCookie('CRMSESSION')
				},
			}).done(function( crmUserResponse ) {
				crmUserObject = {
					'updatedAt': now.toDateString(),
					'id': crmUserResponse.id || 0,
					'status': crmUserResponse.status || '',
					'firstName': crmUserResponse.firstName || '',
					'lastName': crmUserResponse.lastName || ''
				};
				setCookie( 'crmUser', JSON.stringify(crmUserObject),  cookieTime);
				if( crmUserResponse.id && crmUserResponse.id != '' ) {
					setCookie( 'userID', crmUserResponse.id, cookieTime );
					console.log('User is authorized on crm.timesofisrael.com', crmUserResponse);
				}
			});
		}
	} */
	if( getCookie('CRMSESSION') ) {
		checkCrmUser();
	  }
	  rgbViewsCount();




});

!function(o){var e={width:1020,height:640,scroll:"auto",overlayOpacity:.85,id:"modal",src:function(o){return jQuery(o).attr("href")},fadeInSpeed:0,fadeInSpeedOverlay:0,noClose:!1,fadeOutSpeed:0};o.modal=function(o){return _modal(this,o)},o.modal.mopen=function(){_modal.mopen()},o.modal.close=function(){_modal.close()},o.modal.closeModal=function(){_modal.closeModal()},o.fn.modal=function(o){return _modal(this,o)},_modal=function(t,s){return this.options={parent:null,overlayOpacity:null,id:null,content:null,width:null,height:null,scroll:null,modalClassName:null,imageClassName:null,closeClassName:null,overlayClassName:null,src:null},this.options=o.extend({},options,_defaults),this.options=o.extend({},options,e),this.options=o.extend({},options,s),this.close=function(){jQuery("."+options.modalClassName+", ."+options.overlayClassName).fadeOut(e.fadeOutSpeed,function(){jQuery(this).off().remove()})},this.closeModal=function(){jQuery("."+options.modalClassName+", ."+options.overlayClassName).fadeOut(e.fadeOutSpeed,function(){jQuery(this).off().remove()})},this.mopen=function(){"function"==typeof options.src?options.src=options.src(t):options.src=options.src||_defaults.src(t);var o="";if(o=/^.+\.((jpg)|(gif)|(jpeg)|(png)|(jpg))$/i.test(options.src)?'<div class="'+options.imageClassName+'"><img src="'+options.src+'"/></div>':'<iframe width="'+options.width+'" height="'+options.height+'" frameborder="0" scrolling="'+options.scroll+'" allowtransparency="true" src="'+options.src+'"></iframe>',options.content=options.content||o,jQuery("."+options.modalClassName).length&&jQuery("."+options.overlayClassName).length)jQuery("."+options.modalClassName).html(options.content);else{$overlay=jQuery(_isIE6()?'<iframe src="BLOCKED SCRIPT\'<html></html>\';" scrolling="'+options.scroll+'" frameborder="0" class="'+options.overlayClassName+'"></iframe><div class="'+options.overlayClassName+'"></div>':'<div class="'+options.overlayClassName+'"></div>'),$overlay.hide().appendTo(options.parent),$modal=jQuery('<div id="'+options.id+'" class="'+options.modalClassName+'" style="width:'+options.width+"px; height:"+options.height+"px; margin-top:-"+options.height/2+"px; margin-left:-"+options.width/2+'px;">'+options.content+"</div>"),$modal.hide().appendTo(options.parent),!1===options.noClose&&($close=jQuery('<a class="'+options.closeClassName+'"></a>'),$close.appendTo($modal));var e=_getOpacity($overlay.not("iframe"))||options.overlayOpacity;$overlay.fadeTo(options.fadeInSpeedOverlay,0).show(options.fadeInSpeedOverlay).not("iframe").fadeTo(options.fadeInSpeedOverlay,e),$modal.fadeIn(options.fadeInSpeed),!1===options.noClose&&($close.click(function(){jQuery.modal().closeModal()}),$overlay.click(function(){jQuery.modal().closeModal()}))}},this},_isIE6=function(){return!(!(document.all&&document.getElementById&&document.compatMode)||window.XMLHttpRequest)},_getOpacity=function(o){return $sender=jQuery(o),opacity=$sender.css("opacity"),filter=$sender.css("filter"),filter.indexOf("opacity=")>=0?parseFloat(filter.match(/opacity=([^)]*)/)[1])/100:""!=opacity?opacity:""},_defaults={parent:"body",overlayOpacity:85,id:"modal",content:null,width:800,height:600,scroll:"auto",modalClassName:"modal-window",imageClassName:"modal-image",closeClassName:"close-window",overlayClassName:"modal-overlay",fadeInSpeed:0,fadeInSpeedOverlay:0,fadeOutSpeed:0,noClose:!1,src:function(o){return jQuery(o).attr("href")}}}(jQuery);


function newsletterPopup() {
	var mobileStr = '';
	mobileStr = $('body').hasClass('mobile') ? '-mobile' : '';
	var is_open = false;
	var nlSuiPopup = "https://www.timesofisrael.com/wp-content/themes/rgb"+mobileStr+"/nl-sui-popup.html";
	var nlEstatePopup = "https://www.timesofisrael.com/wp-content/themes/rgb"+mobileStr+"/nl-estate-popup.html";
	var nlPopup = "https://www.timesofisrael.com/wp-content/themes/rgb/new-nl-popup.html";
	var src = ($('body.single').hasClass('category-start-up-israel') ? nlSuiPopup : nlPopup);
	var src = ($('body.single').hasClass('category-real-estate-israel') ? nlEstatePopup : src);
	var ctime = 7 * 24 * 60 * 60 * 1000; // 7 days
	var cname = ($('body.single').hasClass('category-start-up-israel') ? 'nlSuiPopup' : 'nlPopup');
	var cname = ($('body.single').hasClass('category-real-estate-israel') ? 'nlEstatePopup' : cname);
	var stop = false;
	var point = ($('body').hasClass('home') ? '#hp_section_2' : '.social.bottom');
	var height = ($('body').hasClass('mobile')) ? ((cname == 'nlSuiPopup' || cname == 'nlEstatePopup') ? 317 : 505) : ((cname == 'nlSuiPopup' || cname == 'nlEstatePopup') ? 565 : 415);
	var width = ($('body').hasClass('mobile')) ? 288 : ((cname == 'nlSuiPopup' || cname == 'nlEstatePopup') ? 800 : 810);

	if (!getCookie(cname) && !getCookie('CRMSESSION')) {
		is_open = true;
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			if ($(point).length) {
				if (scrollTop >= $(point).offset().top) {
					if (!stop) {
						$.modal({width:width,height:height,src:src}).open();
						popup(src, width, height);
						setCookie(cname, 1, ctime);
						stop = true;
					}
				}
			}
		});
	}
	return is_open;
}

// function newsletterPopup() {

// 	var folder = ($('body').hasClass('mobile')) ? 'rgb-mobile' : 'rgb';
// 	var nlSuiPopup = "https://www.timesofisrael.com/wp-content/themes/" + folder + "/nl-sui-popup.html";
// 	var nlPopup = "https://www.timesofisrael.com/wp-content/themes/rgb/new-nl-popup.html";
// 	var src = ($('body.single').hasClass('category-start-up-israel') ? nlSuiPopup : nlPopup);
// 	var ctime = 7 * 24 * 60 * 60 * 1000; // 7 days
// 	var cname = ($('body.single').hasClass('category-start-up-israel') ? 'nlSuiPopup' : 'nlPopup');
// 	var height = ($('body').hasClass('mobile')) ? ((cname == 'nlSuiPopup') ? 317 : 505) : ((cname == 'nlSuiPopup') ? 565 : 415);
// 	var width = ($('body').hasClass('mobile')) ? 288 : ((cname == 'nlSuiPopup') ? 800 : 810);
// 	var stop = false;
// 	var is_open = false;
// 	var point = ($('body').hasClass('home') ? '#hp_section_2' : '#comments');

// 	if (!getCookie(cname) && !getCookie('CRMSESSION')) {
// 		is_open = true;
// 		$(window).scroll(function () {
// 			var scrollTop = $(window).scrollTop();
// 			if ($(point).length) {
// 				if (scrollTop >= $(point).offset().top) {
// 					if (!stop) {
// 						popup(src, width, height, cname);
// 						setCookie(cname, 1, ctime);
// 						stop = true;
// 					}
// 				}
// 			}
// 		});
// 	}
// 	return is_open;
// }

function popup(src, width, height, cname) {
	// open
	$('.modal-overlay,.modal-window').remove();
	var marginLeft = (width / 2) * -1;
	var marginLop = (height / 2) * -1;
	var html = '<div id="modal" class="modal-window" style="width:' + width + 'px; height:' + height + 'px; margin-left:' + marginLeft + 'px; margin-top:' + marginLop + 'px;display:none;">'
	html += '<div class="modal-close"></div>';
	html += '<iframe width="100%" height="100%" frameborder="0" scrolling="auto" allowtransparency="true" src="' + src + '" onload="iframeOnload()"></iframe>';
	html += '</div>'
	$('body').append('<div class="modal-overlay ' + cname + '"></div>');
	$('body').append(html);

	// close
	$(document).on("click", ".modal-close", function (e) {
		$('.modal-overlay,.modal-window').fadeOut().remove();
	});

	// resize
	$(window).resize(function () {
		if ($('.modal-window').length) {
			var marginLeft = (width / 2) * -1;
			var marginLop = (height / 2) * -1;
			$('.modal-window').css({
				"width": width + "px",
				"height": height + "px",
				"margin-left": marginLeft + "px",
				"margin-top": marginLop + "px"
			});
		}
	});
}

function iframeOnload() {
	$('.modal-overlay').addClass('active');
	$('#modal').show();
}

function setWidgetHeight() {
	if ($('.cols4.reverse').length && $('.cols2.reverse .widget').length) {
		var minusheight = parseInt(($('.cols2.reverse .widget').outerHeight() - $('.cols2.reverse .widget-body').outerHeight()), 10);
		if ($('.cols2.reverse .banner').length) {
			minusheight = minusheight + parseInt($('.cols2.reverse .banner').outerHeight()) + 45;
		}
		var cols4height = parseInt($('.cols4.reverse').height(), 10);
		var widgetBodyHeight = cols4height - minusheight;
		$('.cols2.reverse .widget-body').animate({
			height: widgetBodyHeight + 'px'
		});
	}
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return false;
}

function setCookie(cname, cvalue, ctime) {
	var d = new Date();
	d.setTime(d.getTime() + (ctime)); // one here = 12*30*24*60*60*1000
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

// function deleteCookie(cname) {
//   document.cookie = cname +'=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=.timesofisrael.com';
// }

function deleteCookie(cname) {
  document.cookie = cname +'=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function rgbLiveBlogAddBanners() {
	var currentIndex = 1;
	var banner = '';
	var hasToi_4 = false;
	$('.the-content .liveblogdiv').prepend('<style>.TOI_Live_1,.TOI_Live_2,.TOI_Live_3,.TOI_Live_4 { width: 100%; height: 280px; margin-bottom:35px; }@media(min-width: 1000px) { .TOI_Live_1 { width: 100%; height: 90px; } }</style>');
	$('.the-content .liveblogdiv > div').each(function () {
		// if (currentIndex == 1) {
		// 	banner = '<ins class="adsbygoogle TOI_Live_1" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_1"></ins>';
		// 	banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
		// 	$(this).after(banner);
		// } else if (currentIndex == 4) {
		// 	banner = '<ins class="adsbygoogle TOI_Live_2" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_2"></ins>';
		// 	banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
		// 	$(this).after(banner);
		// } else
		if (currentIndex == 7) {
			banner = '<ins class="adsbygoogle TOI_Live_3" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_3"></ins>';
			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
			$(this).after(banner);
		} else if (currentIndex >= 10 && (currentIndex - 1) % 3 == 0) { // evrey 3 entries
			hasToi_4 = true;
			banner = '<ins class="adsbygoogle TOI_Live_4" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_4"></ins>';
			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
			$(this).after(banner);
		}

		// if (currentIndex%3==0 && currentIndex <= 12) {
		// 	banner = '<ins class="adsbygoogle TOI_Live_' + (currentIndex/3) + '" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_' + (currentIndex/3) + '"></ins>';
		// 	banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
		// 	$(this).after(banner);
		// }
		currentIndex++;
	});
	// if (currentIndex < 12) {
	// 	for (var i = currentIndex; i < 12; i++) {
	// 		if (i%3==0) {
	// 			banner = '<ins class="adsbygoogle TOI_Live_' + (i/3) + '" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_' + (i/3) + '"></ins>';
	// 			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
	// 			$('.the-content .liveblogdiv').append(banner);
	// 			if (i/3 == 4) {
	// 				hasToi_4 = true;
	// 			}
	// 		}
	// 	}
	// 	if (!hasToi_4) {
	// 		banner = '<ins class="adsbygoogle TOI_Live_4" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_4"></ins>';
	// 		banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
	// 		$('.the-content .liveblogdiv').append(banner);
	// 	}

	// }
};

function checkCrmUser() {

	let crmUser = decodeURIComponent( getCookie('CrmUser') );
	if( crmUser ) {
	  try {
		crmUser = JSON.parse( crmUser );
	  } catch(e) { console.log(e); }
	}
  
	let userLocalStorageName = 'userID'+crmUser.id;
	let crmUserJson   = localStorage.getItem(userLocalStorageName),
		now           = new Date(),
		crmUserObject = {'updatedAt': '', 'id': 0, 'status': '', 'firstName': '', 'lastName': ''},
		crmUserResponse;
  
	if( crmUserJson ) {
	  try {
		crmUserObject = JSON.parse(crmUserJson);
		// check if it is the same day
		if ( (crmUserObject.updatedAt || '') == now.toDateString() ) {
		  return true;
		}
	  } catch(e) {/* ignore to refetch */}
	}
  
	/*fetch user object from local backend script
	crmUserResponse = fetch('https://devcrm.timesofisrael.com/user/profile', {
	  method: 'GET',
	  body: {'CRMSESSION': document.cookie.replace(/(?:(?:^|.*;\s*)CRMSESSION\s*\=\s*([^;]*).*$)|^.*$/, "$1")}
	}).then(
	  response => response.json()
	).catch(() => {
	  console.log('backend error');
	  return crmUserObject;
	});*/
  
	$.ajax({
	  type : "POST",
	  dataType : 'json',
	  url : '/wp-content/themes/rgb/ajax/crm_user_loggedin.php',
	  data : {
		crmsession : getCookie('CRMSESSION')
	  },
	}).done(function( crmUserResponse ) {
	  crmUserObject = {
		'updatedAt': now.toDateString(),
		'id': crmUserResponse.id || 0,
		'status': crmUserResponse.status || '',
		'firstName': crmUserResponse.firstName || '',
		'lastName': crmUserResponse.lastName || ''
	  };
	  if( crmUserResponse.id && crmUserResponse.id != '' ) {
		localStorage.setItem(userLocalStorageName, JSON.stringify(crmUserObject));
		return true;
	  } else {
		var errorCrmUserObject = {
			'updatedAt': now.toDateString(),
			'id': crmUser.id || 0,
			'status': crmUser.status || '',
			'firstName': crmUserResponse.firstName || '',
			'lastName': crmUserResponse.lastName || ''
		  };
		console.error(errorCrmUserObject);
		localStorage.setItem(userLocalStorageName, JSON.stringify(errorCrmUserObject));
	  }
	  return false;
	});
  }
  
// function rgb_remove_toi_dfp_banner(bannerId) {
// 	if (getCookie('CRMSESSION')){
// 		if(bannerId!=''){
// 			$(bannerId).remove();
// 		}
// 		return true;
// 	}
// 	return false;
// }
function rgb_remove_toi_dfp_banner(bannerId) {

	let crmUser = decodeURIComponent( getCookie('CrmUser') );
	if( crmUser ) {
	  try {
		crmUser = JSON.parse( crmUser );
	  } catch(e) { console.log(e); }
	}
  
	let localUser = localStorage.getItem('userID'+crmUser.id);
	if( localUser ) {
	  try {
		localUser = JSON.parse( localUser );
	  } catch(e) { console.log(e); }
	}
  
	crmUser    = crmUser    || {};
	localUser  = localUser  || {};
  
	// if (getCookie('CRMSESSION')) {
	if( getCookie('CRMSESSION') && (crmUser.status == 'active' || !("status" in crmUser)) && (localUser.status == 'active' || !("status" in localUser)) ) {
		if( bannerId != '' ) {
			var bannerLabel = $(bannerId).siblings('.banner-label');
			if(bannerLabel.length > 0){
				bannerLabel.remove();
				$('.banner-placeholder').remove();
				$('.HP_Top_m-wrap').remove();
			}
			$( bannerId ).remove();
		}
	  return true;
	  }
	return false;
  }
function rgbAddMobileOutbrain () {
	//console.log('function rgbAddMobileOutbrain');
	if($('body').hasClass('mobile') && $('body').hasClass('single') && navigator.userAgent.indexOf('rgbmedia-app') == -1){
		var bannerHtml  = '<div class="OUTBRAIN" data-src="' + (window.location.href).replace('dev', 'www') + '" data-widget-id="AR_3"></div>';
		//$('.OUTBRAIN[data-widget-id="AR_3"]').remove();
		$('.outbrain-replace').replaceWith(bannerHtml);
		OBR.extern.researchWidget();
	}
}

function rgbAddAppOutbrain(advertising_id,os){
	//console.log('function rgbAddAppOutbrain:' + advertising_id + ', ' + os);
	if(typeof advertising_id !== 'undefined' && typeof os !== 'undefined' && os !== null){ // && advertising_id !== null
		//var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		var isIOS = (os == 'ios') ? true : false;
		var widgetId = ((isIOS) ? 'MB_1' : 'MB_2');
		var appVer = ((isIOS) ? '3.2' : '3.0.9');
		var partnerKey = ((isIOS) ? 'TIMES25JPQ5PE30GMK56AFMN8' : 'TIMES20LJK2AGB8OAP1DMK42M');
		//var advertising_id = ((isIOS) ? '8F94EFC3-5F34-47AF-998E-3D8B792FC3F1' : '909e86b9-ecec-49a8-8eec-821291771e45');
		var bannerHtml = '<div class="OUTBRAIN" data-src="' + (window.location.href).replace('dev', 'www') + '"' +
			'data-widget-id="' + widgetId + '"' +
			'data-ob-template="Times Of Israel"' +
			'data-ob-installation-type="app_js_widget"' +
			'data-ob-user-id="' + ((advertising_id!='') ? advertising_id : null) + '"' +
			'data-ob-app-ver="' + appVer + '"' +
			'data-ob-installation-key="' + partnerKey + '">' +
			'</div>';

		$('.outbrain-replace').replaceWith(bannerHtml);
		//$('body').prepend(advertising_id + ', ' + os);
		OBR.extern.researchWidget();
	}
}

function rgbSalaModuleOutbrain () {
	if($('.outbrain_hp-placeholder').length > 0 && !rgb_remove_toi_dfp_banner('.outbrain_hp-placeholder')){
		var bannerHtml  = '<div class="banner b970x90 byjs"><div class="OUTBRAIN" data-src="' + (window.location.href).replace('dev', 'www') + '" data-widget-id="HPC" data-ob-template="Times Of Israel"></div></div>';
		$('.outbrain_hp-placeholder').replaceWith(bannerHtml);
		OBR.extern.researchWidget();
	}
}

function rgbRemoveHeadBanners (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return false;
}

function checkRefreshedPages() {
  var refreshCount = 0;
  var currentUrl = window.location.href;
  var countRequest = Number(sessionStorage.getItem("countRequest"));
  var countRequestURL = sessionStorage.getItem("countRequestURL");
  // var startTime = Number(sessionStorage.getItem("startTime"));

  // INIT
  if (!countRequestURL && !countRequest) {
    var targetEvent = [currentUrl, refreshCount];
    sessionStorage.setItem("countRequestURL", currentUrl);
    sessionStorage.setItem("countRequest", refreshCount);
    // sessionStorage.setItem("startTime", currentTime);
    return targetEvent;
  }else{
    if (countRequestURL && countRequestURL == currentUrl) {
      sessionStorage.setItem("countRequest", countRequest + 1);
      var targetEvent = [countRequestURL, countRequest + 1];
      // sessionStorage.setItem("startTime", currentTime);
      return targetEvent;
    }else if (countRequestURL && countRequestURL !== currentUrl){
      var targetEvent = [countRequestURL, refreshCount];
      sessionStorage.setItem("countRequestURL", currentUrl);
      sessionStorage.setItem("countRequest", refreshCount);
      // sessionStorage.setItem("startTime", currentTime);
      return targetEvent;
    }
  }

  return [];
}

function checkSomeUrlParameter(param) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for(var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if(sParameterName[0] == param) {
			return sParameterName[1];
		}
	}
}

function rgbViewsCount() {
	if ( $('body').hasClass('single-post') || $('body').hasClass('single-spotlight') ) {
		var date = new Date();
		var expiresDate = date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
		var currentArticleID = '';

		var classList = $('body').attr('class').split(/\s+/);
		$.each(classList, function (index, item) {
			if (item.indexOf('postid-') >= 0) {
				var item_arr = item.split('-');
				currentArticleID = item_arr[item_arr.length - 1];

				return false;
			}
		});

		if ( currentArticleID ) {
			var userViews = {};
			if ( getCookie('userViews') ) {
				var userViews = JSON.parse(getCookie('userViews'));
				var userViewsArticles = userViews.articles;
				var userViewsDate = userViews.updatedAt;
				if (rgbDatediff(Date.parse(userViewsDate), date.getTime()) < 30) {
					userViewsArticles.map( function() {
						if ( userViewsArticles.indexOf(currentArticleID) === -1 ) {
							userViewsArticles.push(currentArticleID);
						}
					});
					expiresDate = date.setTime(Date.parse(userViewsDate) + (30 * 24 * 60 * 60 * 1000));
				} else {
					userViewsArticles = [ currentArticleID ];
					userViewsDate = date.toDateString();
				}
				userViews = { "articles": userViewsArticles, 'updatedAt' : userViewsDate};
			} else {
				userViews = { "articles": [ currentArticleID ], 'updatedAt' : date.toDateString()};
			}
			setCookie( 'userViews', JSON.stringify(userViews), expiresDate );
		}
	}
}

function rgbDatediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

// NEW HEADER

function getUserStatus() {
	let crmUser = decodeURIComponent( getCookie('CrmUser') );
  if( crmUser ) {
    try {
      crmUser = JSON.parse( crmUser );
      return crmUser.status;
    } catch(e) { console.log(e); }
  }
  return '';
}

function newheadersetutm(utm_content) {
	utm_content = utm_content || '';
	return '?utm_source=website&utm_medium=header&utm_campaign=community_announcement&utm_content=' + utm_content;
}


function addUtmNewheader(status) {
	var main_banner_link = $('body .join-community-banner a').attr('href');
	// anonim member
	if (!status) {

		if ($('body').hasClass('home') && $('body').hasClass('anonim-member')) {
			var checkScroll = setInterval(function(){
				if ($(window).scrollTop()) {
					var banner_link = main_banner_link + newheadersetutm('homepage_scroll_anonym');
				} else {
					var banner_link = main_banner_link + newheadersetutm('homepage_top_anonym');
				}

				$('body .join-community-banner a').each(function(index, el) {
					$(el).attr('href', banner_link);
				});
			}, 200);
		}

		if (!$('body').hasClass('home') && $('body').hasClass('anonim-member')) {
			var checkScroll = setInterval(function(){
				if ($(window).scrollTop()) {
					var banner_link = main_banner_link + newheadersetutm('article_scroll_anonym');
				} else {
					var banner_link = main_banner_link + newheadersetutm('article_top_anonym');
				}

				$('body .join-community-banner a').each(function(index, el) {
					$(el).attr('href', banner_link);
				});
			}, 200);
		}

	}

	// registered member
	if (status) {
		if ($('body').hasClass('home') && $('body').hasClass('registered-member')) {
			var checkScroll = setInterval(function(){
				if ($(window).scrollTop()) {
					var banner_link = main_banner_link + newheadersetutm('homepage_scroll_reg');
				} else {
					var banner_link = main_banner_link + newheadersetutm('homepage_top_reg');
				}

				$('body .join-community-banner a').each(function(index, el) {
					$(el).attr('href', banner_link);
				});
			}, 200);
		}

		if (!$('body').hasClass('home') && $('body').hasClass('registered-member')) {
			var checkScroll = setInterval(function(){
				if ($(window).scrollTop()) {
					var banner_link = main_banner_link + newheadersetutm('article_scroll_reg');
				} else {
					var banner_link = main_banner_link + newheadersetutm('article_top_reg');
				}

				$('body .join-community-banner a').each(function(index, el) {
					$(el).attr('href', banner_link);
				});
			}, 200);
		}
	}
}


// new header
jQuery(document).ready(function($) {
	// console.log('status: ', status)
	var status = getUserStatus();
	if (!status) {
		$('body').addClass('anonim-member');
	}
	if (status) {
		// var status = getUserStatus();
		$('body').addClass('registered-member');
		if (status === 'active') {
			$('body').addClass('community-member');
		}


		$('.header.new-header-toi .new-account .anonim').hide();
		$('.header.new-header-toi .new-account .registered').show();

		communityLoggedMenu = '';
		var communityHeaderAccountMenu = $('.header.new-header-toi .new-account .sub-menu');

		communityLoggedMenu += '<li><a href="https://crm.timesofisrael.com/profile"><span>My profile</span></a></li>';
		if (status === 'active') {
			communityLoggedMenu += '<li><a href="https://www.timesofisrael.com/community/"><span>Community page</span></a></li>';
		}
		communityLoggedMenu += '<li><a href="https://crm.timesofisrael.com/support"><span>Support</span></a></li>';
		communityLoggedMenu += '<li><a href="https://crm.timesofisrael.com/sign-out"><span>Sign out</span></a></li>';

		communityHeaderAccountMenu.html(communityLoggedMenu);


		
	}

	// ADD UTM TO BANNER
		addUtmNewheader(status);
	    rgb_remove_ad();
});



// {TOI} design and develop browser push notification
jQuery(document).ready(function($) {
	$(document).on('click','.push-notification-widget__button', function(){
		// Pushwoosh.subscribe();
		$('#push-notification-widget').remove();
	});
	$(document).on('click','.push-notification-widget__close', function(){
		$('#push-notification-widget').remove();
		setCookie('push-notification-closed', 1, (7 * 24 * 60 * 60 * 1000)); // 7 days
	});
});


// {TOI} Develop podcasts topic page
jQuery(document).ready(function($) {

		$(document).on('click', '.g-new-podcast-page-header-albums a', function(event) {
			event.preventDefault();
			var id = $(this).attr('href');
			var h = $(id).offset().top - 50;
			window.scroll({
			  top: h, 
			  left: 0, 
			  behavior: 'smooth'
			});
		});

		if ($('body').hasClass('page')) {
			rgbPodcastHeaderBG();
		}

	 //  var myConfObj = {
		//   iframeMouseOver: false,
		//   el: null,
		// }

		// window.addEventListener('blur',function(){
		//   if(myConfObj.iframeMouseOver){
		//     $('.g-new-podcast-post-item').removeClass('play');
		//     myConfObj.el.parents('.g-new-podcast-post-item').addClass('play');
		//   }
		// });

		// $(document).on('click', '.g-new-podcast-section', function(event) {
		// 	event.preventDefault();
		// 	$('.g-new-podcast-post-item').removeClass('play');
		// });

		// $(document).on('mouseover', '.g-new-podcast-post-item .media-video' ,function(){
		//    myConfObj.iframeMouseOver = true;
		//    myConfObj.el = $(this);
		//    $(window).focus();
		// });

		// $(document).on('mouseout', '.g-new-podcast-post-item .media-video' ,function(){
		//    myConfObj.iframeMouseOver = false;
		//    myConfObj.el = null;
		// });


			// {TOI} Design and develop video article template 
	if($('.video-open-button').length>0){
		if($('.video-wrapper iframe').length>0){
			if($(".video-wrapper iframe")[0].src.indexOf('autoplay=0')==-1 ){
				$(".video-wrapper iframe")[0].src += "&autoplay=0";
			
		}
		$(document).on('click', '.video-open-button', function(){
		$('.video-light-box-overlay').show();
		start_video();
   });
 		  $(document).on('click', '.video-close-button', function(){
	  	 $('.video-light-box-overlay').hide();
	  	 stop_video();
  });
		if($('.video-light-box-overlay').length){
		$(document).on('click','.video-light-box-overlay',function(){
		$('.video-light-box-overlay').hide();
		stop_video();
		});
     }
  }
  
		function start_video(){	
		var oldSrc = $(".video-wrapper iframe").attr("src");
		var newSrc = oldSrc.replace("autoplay=0", "autoplay=1");
		$(".video-wrapper iframe").attr("src", newSrc); 
		setTimeout(function(){ $("iframe").show(); }, 200);

		}
		function stop_video(){
			var oldSrc = $(".video-wrapper iframe").attr("src");
			var newSrc = oldSrc.replace("autoplay=1", "autoplay=0");
			$(".video-wrapper iframe").attr("src", newSrc); 
			setTimeout(function(){ $(".video-wrapper iframe").hide(); }, 200);
		}

}
		
				

	});


function rgbPodcastHeaderBG () {
	doAnimation();

	$(window).resize(function () {
		doAnimation();
	});
	$(window).scroll(function () {
		doAnimation();
	});

	function doAnimation() {
		var header = $('.g-new-podcast-page .header');
		var animationLength = $('.article-header').height() - $('.g-new-podcast-page .header').height();
		var scrollTop = $(window).scrollTop();
		var num = (scrollTop * 100 / animationLength) / 100;
		var bg = num.toFixed(1);
		if (bg <= 1 && scrollTop <= animationLength) {
			header.css({
				"background": "rgba(16, 17, 20," + bg + ")",
				"transition": "inherit"
			});
		} else {
			header.css({
				"background": "rgba(16, 17, 20,1)",
				"transition": "inherit"
			});
		}
	}
}

jQuery(document).ready(function($) {
	rgbOrderingLoadMore();
});

function rgbOrderingLoadMore () {

		$(document).on('click', '.g-tag-load-more a', function (e) {
			e.preventDefault();

			var loadMoreBtn = $(this);
			var orderingId = loadMoreBtn.data('ordering_id');
			var loadMoreBtnSelector = loadMoreBtn.parents('.g-tag-load-more-wrapper');
			var ordering_paged = loadMoreBtn.data('ordering_paged');
			var post_tag = loadMoreBtn.data('post_tag');
			var taxonomy = loadMoreBtn.data('taxonomy');
			var template = loadMoreBtn.data('template');
			var posts_not_in = loadMoreBtn.data('posts_not_in');
			var posts_per_page = loadMoreBtn.data('posts_per_page');
			var promoted = loadMoreBtn.data('promoted');
			var promoted_class = loadMoreBtn.data('promoted_class');
			var cont = loadMoreBtn.parents('.g-new-podcast-posts-block');
			cont.addClass('gi_loading');

			$.ajax({
				type: 'GET',
				dataType: 'html',
				url: '/wp-content/themes/rgb/ajax/ordering_ajax.php',
				data: {
					ordering_id: orderingId,
					ordering_paged: ordering_paged,
					// post_tag: post_tag,
					// taxonomy: taxonomy,
					// template: template,
					// posts_not_in: posts_not_in,
					posts_per_page: posts_per_page,
					promoted_class: promoted_class,
					promoted: promoted
				}
			}).done(function (res) {
				var count = $(res).filter('.last-page');
				cont.removeClass('gi_loading');
				ordering_paged++;
				$(res).insertBefore(loadMoreBtnSelector);
				if (count.length) {
					loadMoreBtnSelector.remove();
				}

				// console.log(count.length)
				loadMoreBtn.data('ordering_paged', ordering_paged);
				$(document).find('.last-page').remove();
			});
		});
	}


function rgb_remove_ad(){
	if(navigator.userAgent.indexOf('rgbmedia-app') > -1){
		$('head').append('<script type="text/javascript">!(function(o,n,t){t=o.createElement(n),o=o.getElementsByTagName(n)[0],t.async=1,t.src="https://bawdybalance.com/v2vvxaB9NXEJ3TYz3vR9ayFuXwpWMi9BQfMC-uXk477al1wkuNd8tJMkrVj2PILzs",o.parentNode.insertBefore(t,o)})(document,"script"),(function(o,n){function t(){(t.q=t.q||[]).push(arguments)}t.v=1,o.admiral=o.admiral||t})(window);!(function(o,t,n,c){function e(n){(function(){try{return(localStorage.getItem("v4ac1eiZr0")||"").split(",")[4]>0}catch(o){}return!1})()&&(n=o[t].pubads())&&n.setTargeting("admiral-engaged","true")}(c=o[t]=o[t]||{}).cmd=c.cmd||[],typeof c.pubads===n?e():typeof c.cmd.unshift===n?c.cmd.unshift(e):c.cmd.push(e)})(window,"googletag","function");</script>');

		if( rgbRemoveHeadBanners('CRMSESSION') || crmUser.status == 'active' || localUser.status == 'active' ) {

			window.admiral = window.admiral || function() {(admiral.q = admiral.q || []).push(arguments)};
			window.admiral("targeting", "pause");
		}

	}


}

// {TOI} Update section + topic + writer + latest ad units
$(document).ready(function (){

	if(jQuery('.item.template1').length>0){
		$('#gpt-passback').insertAfter($('#gpt-passback').parents('.items.sticky-sidebar-relative').children('.item.template1').eq(2));
		var count_items = jQuery('.item.template1').length;
		if(count_items>=10){
			$('.banner-placeholder').insertAfter($('.banner-placeholder').parents('.items.sticky-sidebar-relative').children('.item.template1').eq(7));
		}
	}


	// {TOI} Add UTM to all articles in HP sidebar module
	var url = window.location.pathname.split('/');
	var utm_campaign_param = url[1];

 $('.sidebar.sidebar-main .item-content a').each(function() {
	hostname = new RegExp(location.host);
    var href = $(this).attr('href');
    if (href) {
        var url = new URL(href);
        url.searchParams.set("utm_campaign", utm_campaign_param);	
		// if internal link	
		if(hostname.test(href)){
        $(this).attr('href', url.href);
		}
    }
});

});



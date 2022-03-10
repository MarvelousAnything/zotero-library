// JavaScript Document
var start_cmnt_live    = 0;
var live_site_base_url = 'https://commenting.jansatta.com/';
var lb_content         = '';
var lb_crnt_editr      = '';

css_path    = live_site_base_url + 'css/live_css_' + window.location.hostname + '.css?ver=2.51';
bt_var      = document.createElement('link'),
bt_tag      = document.getElementsByTagName('link')[0];
bt_var.type = 'text/css';
bt_var.rel  = 'stylesheet';
bt_var.href = css_path;
bt_tag.parentNode.insertBefore(bt_var, bt_tag);

tw_path    = '//platform.twitter.com/widgets.js';
tw_var      = document.createElement('script');
tw_tag      = document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1];
tw_var.async = 'true';
tw_var.defer = 'true';
tw_var.src = tw_path;
if ( 'loksatta' != tie_comments_data.site_name ) {
	tw_tag.parentNode.insertBefore(tw_var, tw_tag);
}

ig_path    = '//platform.instagram.com/en_US/embeds.js';
ig_var      = document.createElement('script');
ig_tag      = document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1];
ig_var.async = 'true';
ig_var.defer = 'true';
ig_var.src = ig_path;
ig_tag.parentNode.insertBefore(ig_var, ig_tag);

function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string, find, replace) {
	return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function storyLiveEssentials()
{
	if( jQuery('.tie_livecommentlist').length > 0 ) {
		var cmntbox = '<div id="comment-here" class="user-c" style="display: block;"><div class="savewrapperlive"></div>';

		wlh = window.location.hostname;

		cmntbox += '<div class="form-row"><div class="small-12 columns"><input type="text" name="text-title" class="livecommentbox-title" id="lbtitle_' + live_blogs_data.post_id_live + '" rows="6" cols="58" placeholder="Your Blog Title"></div></div>';
		cmntbox += '<div class="form-row"><div class="small-12 columns"><textarea name="text-area" class="livecommentbox" id="lbmessage_' + live_blogs_data.post_id_live + '" rows="6" cols="58" placeholder="Your Comment"></textarea></div></div>';
		cmntbox += '<div class="form-row"><div class="small-12 columns"><input type="hidden" name="username" id="lbmessage_name"></div></div>';
		cmntbox += '<div class="form-row">';
		cmntbox += '</div><div class="clear"></div></div>';
		cmntbox += '<div class="form-submit"><input type="button" name="savelivecomment" id="savelivecomment" onClick="submit_comment_root_separte_live(\'yes\',' + live_blogs_data.post_id_live + ' ,\'\',\'\')" class="submit" value="Submit"></div>';
		cmntbox += '</div>';

		jQuery( '.lvblg-rgt > div' ).prepend( '<span class="lb_edit">Edit</span>' );
		jQuery( '.lvblg-rgt > div' ).prepend( '<span class="lb_delete">Delete</span>' );
		jQuery( '.lvblg-rgt > div.highlighted' ).prepend( '<span class="lb_lowlights">Highlighted</span>' );
		jQuery( '.lvblg-rgt > div.lowlighted' ).prepend( '<span class="lb_highlights">Highlights</span>' );

		jQuery('.tie_livecommentlist').html(cmntbox);

		tinymce.init({
			selector: '.livecommentbox',
			height: 200,
			plugins: [
				"advlist autolink lists link image charmap print preview anchor",
				"searchreplace visualblocks code fullscreen",
				"insertdatetime media table contextmenu paste imagetools"
			],
			//styleselect
			toolbar: "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link image code",
			imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
			extended_valid_elements:'script[language|type|src]',
			media_strict: false,
			convert_urls: false,
			relative_urls : false,
			force_br_newlines : true,
			force_p_newlines : false,
			paste_data_images: true,
			content_css: ['//www.tinymce.com/css/codepen.min.css'],
			automatic_uploads: true,
			image_advtab: true,
			image_caption     : true,
			images_upload_handler: function ( blobInfo, success, failure ) {
				var xhr, formData;
				xhr = new XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.open( 'POST', '/liveblog/update/' );
				xhr.onload = function() {
					var json;
					if (xhr.status != 200) {
						failure('HTTP Error: ' + xhr.status);
						return;
					}
					json = JSON.parse(xhr.responseText);
					if (!json || typeof json.location != 'string') {
						failure('Invalid JSON: ' + xhr.responseText);
						return;
					}
					success(json.location);
				};
				formData = new FormData();
				formData.append( 'file', blobInfo.blob(), blobInfo.filename() );
				xhr.send( formData );
			}
		});

		try{
			jQuery('body').append('<style>i.mce-i-bold, i.mce-i-italic, i.mce-i-bullist, i.mce-i-numlist, i.mce-i-blockquote, i.mce-i-alignleft, i.mce-i-aligncenter, i.mce-i-alignright, i.mce-i-link, i.mce-i-unlink, i.mce-i-wp_more, i.mce-i-strikethrough, i.mce-i-spellchecker, i.mce-i-fullscreen, i.mce-i-wp_fullscreen, i.mce-i-wp_adv, i.mce-i-underline, i.mce-i-alignjustify, i.mce-i-forecolor, i.mce-i-pastetext, i.mce-i-pasteword, i.mce-i-removeformat, i.mce-i-charmap, i.mce-i-outdent, i.mce-i-indent, i.mce-i-undo, i.mce-i-redo, i.mce-i-help, i.mce-i-wp_help, i.mce-i-wp-media-library, i.mce-i-ltr, i.mce-i-wp_page, .mce-close{font: normal 20px/1 \'tinymce\' !important;}</style>');
		}catch(ert){}

		if (typeof live_blogs_data !== 'undefined') {
			if (!isNaN(live_blogs_data.start_cmnt_live) && '' !== live_blogs_data.start_cmnt_live) {
				start_cmnt_live = parseInt(live_blogs_data.start_cmnt_live);
			}
		}
		jQuery( 'body' ).on( 'click', '.lb_edit', function(e) {
			var ta_id = jQuery( this ).next( 'div' ).attr( 'id' );
			if( jQuery( this ).next('div#edit-' + lb_crnt_editr ).length > 0 ) {
				jQuery( this ).text('Edit');
				jQuery( '#edit-' + lb_crnt_editr ).next( 'div' ).show(0);
				jQuery( '#edit-' + lb_crnt_editr ).remove();
				try{
					tinymce.EditorManager.execCommand( 'mceRemoveEditor', true, lb_crnt_editr );
				} catch(err){}
				lb_crnt_editr = '';
			} else {
				//if( jQuery( this ).next( 'article' ).find('.comment-content-live p').html() == undefined || jQuery( this ).next( 'article' ).find('p').html() == '' ) {
				//	lb_content = jQuery( this ).next( 'article' ).find('.comment-content-live').html();
				//} else {
					lb_content = unescape( jQuery( this ).next( 'div' ).find( '#lbcontentbody' ).attr( 'class' ) );
					lb_content = lb_content.replace(/\\\//g, "/");
					lb_content = lb_content.replace(/\\n/g, "");
					lb_title   = jQuery( this ).next( 'div' ).find('.heading-lvblg').html();
				//}
				jQuery( this ).text('Cancel');
				jQuery( this ).next( 'div' ).hide(0);
				jQuery( '<div id="edit-'+ta_id+'"><input type="text" class="lb-edit-title" name="lb_title" id="lbtitle_' + parseInt( ta_id.replace('lb-','') ) + '" value="'+lb_title+'"><br clear="both"><textarea id="te-' + ta_id + '">'+lb_content+'</textarea><br clear="both"><input type="button" lb_id="' + ta_id + '" name="save" class="lb-edit-button" value="Save" onclick="submit_comment_root_separte_live(\'yes\',' + live_blogs_data.post_id_live + ' ,' + parseInt( ta_id.replace('lb-','') ) + ',\'\')"></div>' ).insertAfter( jQuery( this ) );
				if( lb_crnt_editr != '' ) {
					jQuery( '#edit-' + lb_crnt_editr ).next( 'div' ).show(0);
					jQuery( '#edit-' + lb_crnt_editr ).remove();
					try{
						tinymce.EditorManager.execCommand( 'mceRemoveEditor', true, 'te-'+lb_crnt_editr );
					} catch(err){}
				}
				lb_crnt_editr = ta_id;
				try{
					tinymce.EditorManager.execCommand( 'mceRemoveEditor', true, 'te-'+ta_id );
				} catch(err){}
				try{
					tinymce.EditorManager.execCommand( 'mceToggleEditor', true, 'te-'+ta_id );
				} catch(err){}

				try{
					tinymce.EditorManager.execCommand( 'mceAddEditor', true, 'te-'+ta_id );
				} catch(err){}

				try{
					tinymce.execCommand('mceFocus',false,'te-'+ta_id);
				} catch(err){}
				try{
					tinymce.EditorManager.execCommand('mceFocus',false,'te-'+ta_id);
				} catch(err){}
				//tinymce.EditorManager.setActive(current_lb);
				var tt = setTimeout( function(){ tinyMCE.activeEditor.setContent(lb_content); }, 500 );
				jQuery( window ).scrollTop( jQuery( this ).offset().top - 100 );
				//tinyMCE.execCommand( 'mceAddControl', false, ta_id );
				//tinyMCE.execCommand('mceRemoveControl', false, id);
			}
		});
	} else {
		jQuery( '.commentlistlive div div' ).removeAttr( 'id' );
	}
	if (
		'loksatta' !== tie_comments_data.site_name
		|| 'jansatta' !== tie_comments_data.site_name
	) {
		jQuery('.lvblg-rgt').addClass('withouthlgt');
	}
	if ( !jQuery( '.lvblg-lft > ul' ).has( "li" ).length ) {
		jQuery('.lvblg-lft').hide();
		jQuery('.highlightwrap').hide();
		if (
			'loksatta' == tie_comments_data.site_name
			|| 'jansatta' == tie_comments_data.site_name
		) {
			jQuery('.lvblg-rgt').addClass('withouthlgt');
		}
	}
	// Delete Live blog content
	jQuery( 'body' ).on( 'click', '.lb_delete', function(e) {
		var ta_id = jQuery( this ).next().next( 'div' ).attr( 'id' );
		if( ta_id !=='' && ta_id !== 'undefined' ) {
			if( confirm('Are you sure you want to delete it') ) {
				submit_comment_root_separte_live( 'No', parseInt( live_blogs_data.post_id_live ) , parseInt( ta_id.replace('lb-','') ) , 2 );
			} else {
				return false;
			}
		}
	});
	// Highlights
	jQuery( 'body' ).on( 'click', '.lb_highlights', function(e) {
		var ta_id = jQuery( this ).next().next().next( 'div' ).attr( 'id' );
		if( ta_id !=='' && ta_id !== 'undefined' ) {
			if( confirm('Highlight this blog') ) {
				if ( !jQuery( '.lvblg-lft > ul' ).has( "li" ).length ) {
					//jQuery('.lvblg-lft').show();
					//jQuery('.highlightwrap').show();
					//jQuery('.lvblg-rgt').removeClass('withouthlgt');
				}
				submit_highlight_check_live( 'highlights', parseInt( live_blogs_data.post_id_live ) , parseInt( ta_id.replace('lb-','') ) );
				var hglttime  = jQuery( '#'+ta_id ).find('.ieo-datetime span:first').text();
				var hglttitle = jQuery( '#'+ta_id ).find('.heading-lvblg').text();
				var hgltdesc  = jQuery( '#'+ta_id ).find('.body-lvblg').text();
				if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && ( 'jansatta' == tie_comments_data.site_name || 'fe' == tie_comments_data.site_name ) ) {
					jQuery('ul.hlgt-list').prepend('<li id="hlgt_'+ parseInt( ta_id.replace('lb-','') )+'" class="hlgt-list-item"<h3><span class="h3font">'+ hglttitle +'</span></h3></li>');
				} else {
					jQuery('ul.hlgt-list').prepend('<li id="hlgt_'+ parseInt( ta_id.replace('lb-','') )+'" class="hlgt-list-item"><span class="ieo-time">'+ hglttime +'</span><h3><span class="h3font">'+ hglttitle +'</span><span class="paragraphtxt"><p>'+ hgltdesc +'</p></span></h3></li>');
				}
			} else {
				alert("not confirm");
				return false;
			}
		}
	});
	jQuery( 'body' ).on( 'click', '.lb_lowlights', function(e) {
		var ta_id = jQuery( this ).next().next().next( 'div' ).attr( 'id' );
		if( ta_id !=='' && ta_id !== 'undefined' ) {
			if( confirm('Remove from Highlights') ) {
				submit_highlight_check_live( 'lowlights', parseInt( live_blogs_data.post_id_live ) , parseInt( ta_id.replace('lb-','') ) );
				jQuery('#hlgt_'+ parseInt( ta_id.replace('lb-','') )).remove();
				if ( !jQuery( '.lvblg-lft > ul' ).has( "li" ).length ) {
					jQuery('.lvblg-lft').hide();
					jQuery('.highlightwrap').hide();
					jQuery('.lvblg-rgt').addClass('withouthlgt');
				}
			} else {
				return false;
			}
		}
	});
	//SOCIAL SHARING
	jQuery( 'body' ).on('click touchstart', '.lvblg-sharebx .ieotw',function(e){
		try{
			e.preventDefault();
			var lbtext        = jQuery(this).parent('.lvblg-sharebx').parent('.lvblg-box-shr').next('div').find('div.heading-lvblg').text();
			var lbtext_social = ' ' + jQuery( 'meta[name="twitter:creator"]' ).attr( 'content' ) + '-' + jQuery( this ).parent('div').parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		} catch(err) {
			var lbtext        = '';
			var lbtext_social = ' ' + jQuery( 'meta[name="twitter:creator"]' ).attr( 'content' ) + '-' + jQuery( this ).parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		}
		lbtext = lbtext.substring( 0, 100 );
		if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && 'jansatta' == tie_comments_data.site_name ) {
			fulluri = encodeURIComponent( lbtext + lbtext_social );
		} else {
			fulluri = encodeURIComponent( lbtext + lbtext_social );
		}
		var openuri = "https://twitter.com/intent/tweet?text=";
		window.open( openuri + fulluri, 'twwindow', "width=550, height=420" ).focus();
	});
	jQuery( 'body' ).on('click touchstart', '.lvblg-sharebx .ieofb', function(e) {
		try{
			e.preventDefault();
			var lbtext        = jQuery(this).parent('.lvblg-sharebx').parent('.lvblg-box-shr').next('div').find('div.heading-lvblg').text();
			var lbtext_social = jQuery( this ).parent('div').parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		} catch(err) {
			var lbtext        = '';
			var lbtext_social = jQuery( this ).parent('div').parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		}
		lbtext = lbtext.substring( 0, 600 );
		lbtext = replaceAll(lbtext, "#" ,"%23");
		fulluri = escape( lbtext + lbtext_social );
		if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && 'loksatta' == tie_comments_data.site_name ) {
			var fb_app_id = 888039347940729;
		} else if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && 'jansatta' == tie_comments_data.site_name ) {
			var fb_app_id = 905883139531042;
		} else if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && 'fe' == tie_comments_data.site_name ) {
			var fb_app_id = 1672404616366149;
		} else if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && 'ietamil' == tie_comments_data.site_name ) {
            var fb_app_id = 784796468345964;
        } else if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && 'iemalayalam' == tie_comments_data.site_name ) {
            var fb_app_id = 427052487635014;
        } else {
			var fb_app_id = 960016430711295;
		}
		FB.init({
			appId : fb_app_id,//IE API KEY
			status: true,
			cookie: true,
			xfbml: true,
			oauth: true
		});
		FB.ui({
			method: 'feed',
			name: lbtext+" ["+lbtext_social+"]",
			link: lbtext_social/*,
			picture: pageimage,
			description: ''*/
		});
	});
	jQuery( 'body' ).on('click touchstart', '.lvblg-sharebx .ieolinkedin',function(e){
		try{
			e.preventDefault();
			var lbtext        = jQuery(this).parent('.lvblg-sharebx').parent('.lvblg-box-shr').next('div').find('div.heading-lvblg').text();
			var lbtext_social = jQuery( this ).parent('div').parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		} catch(err) {
			var lbtext        = '';
			var lbtext_social = jQuery( this ).parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		}
		lbtext = lbtext.substring( 0, 100 );
		fulluri = escape( lbtext_social );
		var openuri = "https://www.linkedin.com/company/jansatta/";
		window.open( openuri , 'twwindow', "width=550, height=420" ).focus();
	});
	jQuery( 'body' ).on('click touchstart', '.lvblg-sharebx .ieoreddit',function(e){
		try{
			e.preventDefault();
			var lbtext        = jQuery(this).parent('.lvblg-sharebx').parent('.lvblg-box-shr').next('div').find('div.heading-lvblg').text();
			var lbtext_social = jQuery( this ).parent('div').parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		} catch(err) {
			var lbtext        = '';
			var lbtext_social = jQuery( this ).parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		}
		lbtext = lbtext.substring( 0, 100 );
		fulluri = escape( lbtext_social+ '&amp;title=' + lbtext );
		var openuri = "https://www.reddit.com/submit?url="
		window.open( openuri + fulluri, 'twwindow', "width=550, height=420" ).focus();
	});
	jQuery( 'body' ).on('click touchstart', '.lvblg-sharebx .ieowa',function(e){
		try{
			e.preventDefault();
			var lbtext        = jQuery(this).parent('.lvblg-sharebx').parent('.lvblg-box-shr').next('div').find('div.heading-lvblg').text();
			var lbtext_social = jQuery( this ).parent('div').parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		} catch(err) {
			var lbtext        = '';
			var lbtext_social = jQuery( this ).parent('div').parent('div').find('time[itemprop="url"]').attr( 'content' );
		}
		lbtext = lbtext.substring( 0, 100 );
		if( 'loksatta' == tie_comments_data.site_name ){
			fulluri1 = escape( lbtext_social + '%3Futm_source%3Dwhatsapp%26utm_medium%3Dsocial%26utm_campaign%3DWhatsappShare :' );
			fulluri2 = lbtext;
			fulluri  = fulluri1 + fulluri2;
		} else {
			fulluri = escape( lbtext_social + '%3Futm_source%3Dwhatsapp%26utm_medium%3Dsocial%26utm_campaign%3DWhatsappShare :' + lbtext );
		}
		var openuri = "whatsapp://send?text=";
		window.open( openuri + fulluri, 'twwindow', "width=550, height=420" ).focus();
	});

	if( tie_comments_data.fb_api_key == undefined || tie_comments_data.fb_api_key == '' ) {
		(function() {
			var e = document.createElement('script'); e.async = true;
			e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
			var pd = document.createElement( 'div' );
			pd.id  = 'live-fb-root';
			document.getElementsByClassName('live-commentlist-box')[0].appendChild(pd);
			if( jQuery( '#live-fb-root' ).length > 0 ) {
				document.getElementById( 'live-fb-root' ).appendChild(e);
			}
		}());
		FB.init({
			appId : '960016430711295',//IE API KEY
			status: true,
			cookie: true,
			xfbml: true,
			oauth: true
		});
	}
}

function submit_highlight_check_live( rt, stryidd, snipid ) {
	if (rt != '') {
		var currenttext  = 'Highlighted';
		var newclass     = 'lb_lowlights';
		var highlight    = 1;
		if( rt == 'lowlights' ){
			currenttext  = 'Highlights';
			newclass     = 'lb_highlights';
			highlight    = 0;
		}
		if (stryidd == '') {
			stryidd = live_blogs_data.post_id_live;
		}
		if( snipid == '' ) {
			var snipid = '';
		} else {
			var snipid = parseInt( snipid );
			var lbtitle  = jQuery( '#lbtitle_' + snipid ).val();
		}
		var username = live_blogs_data.usernamelive;
		var userid   = live_blogs_data.useridlive;
		var lbtitle  = jQuery( '#lbtitle_' + stryidd ).val();
		var useremail = live_blogs_data.useremaillive;
		var dataurl = live_site_base_url + "savelivecomment/" + live_blogs_data.api_key_live + '/post/' + escape(stryidd) + '/';
		var datatype = "jsonp";
		jQuery.ajax({
			type: 'POST',
			url: dataurl,
			dataType: datatype,
			cache: false,
			data: {
				'snipid'    : escape( snipid ),
				'user'      : username,
				'userid'    : userid,
				'useremail' : useremail,
				'title'     : lbtitle,
				'highlight' : highlight
			},
			jsonp: "callbackcom",
			success: function (data) {
				if (typeof data != 'undefined' && data.success != undefined && data.success != '') {
					var datanew = data.success.split('~||~');
					if ( datanew[0] == 'saved' ) {
						jQuery( '#lb-' + snipid ).parent('.brdr20').find( '.lb_' + rt ).addClass( newclass ).removeClass( 'lb_' + rt );
						jQuery( '#lb-' + snipid ).parent('.brdr20').find( '.' + newclass ).text( currenttext );
					}
				}
			}
		});
	}
}
function submit_comment_root_separte_live(rt, stryidd, snipid, delstatus ) {
	if( delstatus === 2 ) {
		var comm_mess = "deleting_message";
	} else {
		var comm_mess = "";
	}
	if (rt == 'yes') {
		if (tinyMCE.activeEditor.getContent() == "") {
			alert("Please enter your comment");
			jQuery("#lbmessage_" + stryidd).focus();
			tinyMCE.activeEditor.focus();
			return false;
		}
		comm_mess    = tinyMCE.activeEditor.getContent();
		var username = live_blogs_data.usernamelive;
		var userid   = live_blogs_data.useridlive;
		var lbtitle  = jQuery( '#lbtitle_' + stryidd ).val();
		if( snipid == '' ) {
			var snipid = '';
		} else {
			var snipid = parseInt( snipid );
			var lbtitle  = jQuery( '#lbtitle_' + snipid ).val();
		}
		var useremail = live_blogs_data.useremaillive;
	}

	if (stryidd == '') {
		stryidd = live_blogs_data.post_id_live;
	}
	jQuery('.savewrapperlive').show(10);
	if( comm_mess.match( 'data:image') && ! comm_mess.match( '<blockquote' ) ) {
		var dataurl = '/liveblog/update/';
		var datatype = "";
	} else {
		var dataurl = live_site_base_url + "savelivecomment/" + live_blogs_data.api_key_live + '/post/' + escape(stryidd) + '/';
		var datatype = "jsonp";
	}
	jQuery.ajax({
		type: 'POST',
		url: dataurl,
		dataType: datatype,
		cache: false,
		data: {
			'snipid'    : escape( snipid ),
			'act'       : escape( delstatus ),
			'message'   : comm_mess,
			'user'      : username,
			'userid'    : userid,
			'useremail' : useremail,
			'title'     : lbtitle
		},
		jsonp: "callbackcom",
		success: function (data) {
			if (typeof data != 'undefined' && data.success != undefined && data.success != '') {
				var datanew = data.success.split('~||~');
				if (datanew[2] != null && datanew[2] != undefined) {

				} else {
					datanew[2] = '';
				}
				if( delstatus !== 2 ) {
					tinyMCE.activeEditor.setContent('');
					cmntId = '#livetopcommentlist_' + stryidd;

					if (stryidd != '') {
						tinyMCE.activeEditor.getContent();
					}
				}
				if ( rt == 'yes' ) {
					if( snipid != '' ) {
						jQuery( '#edit-lb-' + snipid ).next( 'div' ).show(0);
						jQuery( '#edit-lb-' + snipid ).prev('.lb_edit').text('Edit');
						try{
							tinymce.EditorManager.execCommand( 'mceRemoveEditor', true, 'lb-' + snipid );
						}catch(err){}
						try{
							tinymce.EditorManager.execCommand( 'mceRemoveEditor', true, lb_crnt_editr );
						}catch(err){}
						try{
							tinymce.EditorManager.execCommand( 'mceRemoveEditor', true, 'te-lb-'+snipid );
						}catch(err){}
						jQuery( '#edit-lb-' + snipid ).remove();
						lb_crnt_editr = '';
						jQuery( 'div#lb-'+snipid + ' .heading-lvblg' ).html( unescape( data.title ) );
						jQuery( 'div#lb-'+snipid + ' .body-lvblg' ).html( unescape( datanew[2] ) );
						jQuery( '#edit-lb-'+snipid ).prev( '.lb_edit' ).html('Edit');
						if( window.instgrm !=undefined && window.instgrm !='' && datanew[2].match('instagram') ) {
							window.instgrm.Embeds.process();
						}
						if( window.twttr !=undefined && window.twttr !='' && datanew[2].match('twitter') ) {
							window.twttr.widgets.load()
						}
					} else {
						jQuery('.com_firt_live').removeClass('com_firt_live');
						jQuery('.livecommentbox-title').val('');
						var append_title = data.title;
						jQuery( '#tie_livecommentlist' ).append("<div class='alertmsg'>Thanks for posting your comment.</div>");
						var tuu = setTimeout(function(){jQuery(".alertmsg").remove();}, 2000);
						comment_data_box = '<div class="brdr20" ><span class="lb_highlights">Highlights</span><span class="lb_delete">Delete</span><span class="lb_edit">Edit</span><div id="lb-' + datanew[1] + '" class="comment-body-live com_firt_live">';
						comment_data_box +='<div class="' + escape( replaceAll( datanew[2],'"',"'" ) ) + '" id="lbcontentbody"></div>';
						comment_data_box += '<div class="lvblg-box-shr">';
						comment_data_box += data.datetime;
						comment_data_box += '<div class="lvblg-sharebx"><a href="javascript:void(0);" class="sprite-img ieotw"></a><a href="#" class="sprite-img ieofb"></a><a href="javascript:void(0);" class="sprite-img ieolinkedin"></a><a href="javascript:void(0);" class="sprite-img ieoreddit"></a><a href="#" class="sprite-img ieowa"></a></div>';
						comment_data_box += '</div>';
						comment_data_box += '<div class="lvblg-box">';
						comment_data_box += '<div class="heading-lvblg">' + append_title.replace(/\\/gi, "") + '</div>';
						comment_data_box += '<div class="body-lvblg">' + datanew[2] + '</div>';
						comment_data_box += '</div><div class="clear"></div></div><div class="clear"></div></div>';

						jQuery(cmntId).prepend(unescape(comment_data_box));
						jQuery( '.commentlistlive li:eq(0)' ).prepend( '<span class="lb_edit">Edit</span>' );
						if( window.instgrm !=undefined && window.instgrm !='' && comment_data_box.match('instagram') ) {
							window.instgrm.Embeds.process();
						}
						if( window.twttr !=undefined && window.twttr !='' && comment_data_box.match('twitter') ) {
							window.twttr.widgets.load()
						}
					}
				} else if( rt == 'No' ) {
					jQuery('#lb-'+snipid).parent('div').remove();
				} else {
					cmnty = '<div class="user-c">';
					cmnty += '<div class="com-descptn">' + (datanew[2]) + '</div></div>';
					jQuery('#commentlist').prepend(unescape(cmnty));
				}
				jQuery('.savewrapperlive').hide(10);

			} else if (data.error != undefined && data.error != null) {
				jQuery('.savewrapperlive').hide(10);
				alert(data.error);
			} else {
				jQuery('.savewrapperlive').hide(10);
				alert("Error saving data.");
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert('Error saving data, please try reloading page and try again...')
			jQuery('.savewrapperlive').hide(10);
		}
	});

}

var ajax_call_no = 1;

function showmore_liveblog_cmt() {
	if(  '' !== live_blogs_data.start_ajax_load_cmnt_live && 'undefined' !== live_blogs_data.start_ajax_load_cmnt_live && 1 == live_blogs_data.start_ajax_load_cmnt_live ) {
		var limitstart        = live_blogs_data.start_cmnt_live;
		if( 0 == parseInt( limitstart ) ) {
			var limitstart = 2;
		}
		var endlimitinonecall = live_blogs_data.live_blogs_ajaxcall_one_call_load;
		if( ajax_call_no > 1 ) {
			limitstart = parseInt( limitstart ) * parseInt( ajax_call_no );
		}
		if( '' !== limitstart && '' !== endlimitinonecall && 'undefined' !== limitstart && 'undefined' !== endlimitinonecall ) {
			jQuery( '#load_more' ).show();
			jQuery.ajax({
				type  : 'POST',
				url   : live_site_base_url + "getlivecommenthlgt/" + live_blogs_data.api_key_live + '/post/' + escape( live_blogs_data.post_id_live ) + '/' + escape( limitstart ) + '/'+ escape( endlimitinonecall ) + '/',
				cache : false,
				dataType : "jsonp",
				jsonp : "callbackcom",
				data  : { },
				success: function(data){
					jQuery( '#load_more' ).hide();
					var obj = JSON.parse( JSON.stringify( data ) );
					jQuery( '#ajax_liveblog_comment_load' ).append( data.comments );
					if( data.blog_content_total_count > ajax_call_no ) {
						ajax_call_no = parseInt( ajax_call_no ) + 1;
					} else {
						jQuery('#loadcmtmore').remove();
					}

				},
				error: function () {
					alert('Error most read data reload and try again.');
				}
			})
		}
	}
}
storyLiveEssentials();
if ( 'undefined' !== jQuery.type( tie_comments_data.site_name ) && null !== tie_comments_data.site_name && ( 'jansatta' == tie_comments_data.site_name || 'fe' == tie_comments_data.site_name ) ) {
	jQuery(document).ready(function(){
		jQuery("#gotlivebhbc").click(function(){						
			jQuery('html, body').animate({scrollTop: jQuery('.hlt-bot-text').offset().top - 200}, 2000);
		});
	});
}
jQuery(document).ready(function(){
var hash = "";
hash     = location.hash;
	if( hash !== null && hash !== '' ) {
		window.location = "#liveblogstart";
		jQuery("html,body").animate({scrollTop: jQuery("#liveblogstart").offset().top},"fast");
	}
})

/**
 * Newsletter script.
 *
 * @package indian-express
 */

var nLvid         = 2;
var media_central = false;
let NewsLpopval   = ie_newsl_getCookie( 'nLPopupSuppressed' );
let UserCity      = ie_newsl_getCookie( 'current_city_newname' );

jQuery( window ).scroll(
	function () {
		if ( ! media_central && window.scrollY > 150) {
			media_central      = true;
			let NotifyLaterval = ie_newsl_getCookie( 'ieNotifylater' );
			let NotifyAllowval = ie_newsl_getCookie( 'ieNotifyallow' );
			if ( ! NewsLpopval && undefined === NewsLpopval ) {
				jQuery( '#append_breaking_box' ).hide();
				jQuery( '#izooto-optin' ).hide();
			} if ( NewsLpopval && undefined !== NewsLpopval ) {
				if ( NotifyLaterval && undefined !== NotifyLaterval ) {
					jQuery( '#append_breaking_box' ).show();
				} else {
					if ( NotifyAllowval && undefined !== NotifyAllowval ) {
						jQuery( '#append_breaking_box' ).show();
					} else {
						jQuery( '#izooto-optin' ).show();
						jQuery( '#append_breaking_box' ).hide();
					}
				}
			}
			(function (d, s, idsList) {
				var js, fjs       = d.getElementsByTagName( s )[0];
				let anyDivPresent = false;
				var idsListLenght = idsList.length;
				for (let dCount = 0;dCount < idsListLenght;dCount++) {
					if (d.getElementById( idsList[dCount] )) {
						anyDivPresent = true;
						break;
					}
				}
				if ( ! anyDivPresent) {
					return;
				}
				js       = d.createElement( s );
				js.src   = "https://media-central.indianexpress.com/static/subscription/js/newsletter.js";
				js.async = 1;
				fjs.parentNode.insertBefore( js, fjs );
			}(document, "script", ["id_newsletter_subscription","id_newsletter_subscription_popup"]));
		}
	}
);

function ie_newsl_getCookie( c_name ) {
	var i,x,y,ARRcookies = document.cookie.split( ';' );
	for ( i = 0;i < ARRcookies.length;i++ ) {
		x = ARRcookies[i].substr( 0,ARRcookies[i].indexOf( '=' ) );
		y = ARRcookies[i].substr( ARRcookies[i].indexOf( '=' ) + 1 );
		x = x.replace( /^\s+|\s+$/g,"" );
		if ( x === c_name ) {
			return unescape( y );
		}
	}
}

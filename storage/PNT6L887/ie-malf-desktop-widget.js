/**
 *  Check My Author Follow List Widget.
 *
 * @package indian-express
 */

var mafl_media_central = false;
jQuery( window ).scroll(
	function () {
		if ( ! mafl_media_central && window.scrollY > 150) {
			mafl_media_central = true;
			(function (doc, scrt, malfidsList) {
				var js, fjs           = doc.getElementsByTagName( scrt )[0];
				var malfanyDivPresent = false;
				var idsListLength     = malfidsList.length;
				for (var dCount = 0;dCount < idsListLength;dCount++) {
					if (doc.getElementById( malfidsList[dCount] )) {
						malfanyDivPresent = true;
						break;
					}
				}
				if ( ! malfanyDivPresent) {
					return;
				}
				js = doc.createElement( scrt );
				if (
					'undefined' !== typeof mafl_check
					&& '' !== mafl_check.theme_url
				) {
					js.src   = mafl_check.theme_url.concat( '/js/ie-my-author-follow-list-script.js?ver=15032021.0' );
					js.async = 1;
					fjs.parentNode.insertBefore( js, fjs );
				}
				
			}(document, 'script', ['ie_my_author_follow_list_widget']));
		}
	}
);

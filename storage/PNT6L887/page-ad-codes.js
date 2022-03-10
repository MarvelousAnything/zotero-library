/**
 * Create file for Express Ad Codes for desktop.
 *
 * @package  Express_Ad_code_Manager
 */

window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(
	function() {

			var displayAdslots = [];

			var ad_units = ad_code_params.ad_units;

		if ( 0 !== ad_units.length ) {

			ad_units.forEach(
				function (ad_element) {

					if ( ad_element.slot_id && 0 < jQuery( '#' + ad_element.slot_id ).length ) {
						displayAdslots.push( ad_element.slot_id );
						if ( 'gpt_ad_IE_ROS_OOP_INNOV1' === ad_element.slot_id || 'gpt_ad_IE_ROS_OOP_INNOV2' === ad_element.slot_id ) {
							googletag.defineOutOfPageSlot( ad_element.slot_name, ad_element.slot_id ).addService( googletag.pubads() );
						} else if ( '' !== ad_element.slot_size ) {
							googletag.defineSlot( ad_element.slot_name, ad_element.slot_size, ad_element.slot_id ).addService( googletag.pubads() );
						} else {
							googletag.defineSlot( ad_element.slot_name, ad_element.slot_id ).addService( googletag.pubads() );
						}
					}
				}
			);
		}

		if ( ad_code_params.articleId ) {
			var articleid         = ad_code_params.articleId;
			var target_article_id = articleid.toString();
			googletag.pubads().setTargeting( 'HDFCIE', target_article_id );
		}
		if ( 'undefined' !== typeof ad_code_params.sponsor_tagId && ad_code_params.sponsor_tagId ) {
			var sponsor_tag_id = ad_code_params.sponsor_tagId;
			var target_tag_id  = sponsor_tag_id.toString();
			googletag.pubads().setTargeting( 'PROTECTSPRAY', target_tag_id );
		}
			googletag.pubads().collapseEmptyDivs();
			googletag.pubads().enableSingleRequest();
			googletag.enableServices();

			displayAdslots.forEach(
				function( element ) {
					if ( element && 0 < jQuery( '#' + element ).length ) {
						googletag.display( element );
					}
				}
			);

	}
);
jQuery.fn.isOnScreen = function() {
	try {
		var elementTop     = jQuery( this ).offset().top;
		var elementBottom  = elementTop + jQuery( this ).outerHeight();
		var viewportTop    = jQuery( window ).scrollTop();
		var viewportBottom = viewportTop + jQuery( window ).height();
		return elementBottom > viewportTop && elementTop < viewportBottom + 300;
	} catch (err) {
	}
};
function ie_dfp_ads()
{
	jQuery( '.dfp_ads' ).each(
		function()
		{
			var cur_obj = jQuery( this );
			if (cur_obj.isOnScreen() && cur_obj.attr( 'data-id' )) {
				var ids = cur_obj.attr( 'data-id' );
				cur_obj.attr( 'id', cur_obj.attr( 'data-id' ) );
				cur_obj.removeAttr( 'data-id' );
				ie_show_ads( ids );
			}
		}
	);
}
jQuery( window ).scroll(
	function()
	{
		ie_dfp_ads();
	}
);
function ie_show_ads(showid)
{
	var para  = document.createElement( 'script' );
	var divbx = document.createElement( 'div' );
	divbx.id  = showid;
	var a     = 'googletag.cmd.push(function() { googletag.display("' + divbx.id + '"); });';
	var t     = document.createTextNode( a );
	para.appendChild( t );
	divbx.appendChild( para );
	document.getElementById( showid ).appendChild( divbx );
}

/**
 * Js to show hide vukkle comment box.
 */

jQuery( '#ie_story_comments' ).on(
	'click',
	function(e) {
		e.preventDefault();
		jQuery( '.ie-vuukle' ).slideToggle();
	}
);


if ( 'undefined' !== typeof taboolaExports ) {

	if (
		'undefined' !== typeof taboolaExports.mode
		&& 'undefined' !== typeof taboolaExports.container
		&& 'undefined' !== typeof taboolaExports.placement
		&& 'undefined' !== typeof taboolaExports.target_type
	) {

		window._taboola = window._taboola || [];

		_taboola.push( {
			mode: taboolaExports.mode, // Like 'alternating-thumbnails-a',
			container: taboolaExports.container, // Element's id
			placement: taboolaExports.placement, // Like 'below article'
			target_type: taboolaExports.target_type // Type like 'mix'
		} );

	}
}

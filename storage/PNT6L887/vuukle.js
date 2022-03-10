/**
 * Create file for vuukle comment box
 *
 * @package indian-express
 */

var VUUKLE_CONFIG = {
	'apiKey': '2e5a47ef-15f6-4eec-a685-65a6d0ed00d0',
	'articleId': vuukle.articleId,
	'img': vuukle.image,
	'tags': vuukle.tags,
	'url': vuukle.url,
	'title': vuukle.title,
	'language': 'en',
	'comments': {
		'enabled': true,
		'hideRecommendedArticles': true,
		'hideCommentInputBox': true,
		'commentingClosed': false,
		'countToLoad': '1',
		'auth': {
			'vuukle': true,
			'password': true,
			'facebook': true,
			'twitter': true,
			'google': true,
			'disqus': true,
		},
	}
};
(function() {
	var d = document,
		s = d.createElement( 'script' );
	s.src = 'https://cdn.vuukle.com/platform.js';
	(
		d.head || d.body
	).appendChild( s );
}
)();

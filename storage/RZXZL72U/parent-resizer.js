var get_iframe = function(target_src) {
	let iframes = document.getElementsByTagName('iframe');
	for (var i=0; i<iframes.length; i+=1) {
		var iframe = iframes[i];
		if(iframe.src === target_src) {
			return iframe;
		}
	}
	return null;
}

var parent_resizer = function (e) {
	if (e.data !== undefined && typeof e.data === 'object') {
		try {
			if (
				// message is coming from iframe resizer
				e.data.messenger === 'iframe-resizer' &&
				// url is set
				e.data.url !== undefined &&
				// height is set
				e.data.height !== undefined
			) {
				iframe = get_iframe(e.data.url);
				// iframe exists
				if (iframe !== null) {
					// set height and style height
					iframe.height = e.data.height;
					iframe.style.height = e.data.height + 'px';
				}
				else {
					console.info('iframe with source ' + e.data.url + ' not found to resize')
				}
			}
		} catch (e) {
			return;
		}
	}
}

window.addEventListener("message", parent_resizer, false);
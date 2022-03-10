/**
 * Controls the Browser Cache for images with a class of dynamic.
 */

debug = true;
checkCache = 0;

 
function getCurrentCache(el) {
	
	if (el.classList.contains('skipcache')) {
		
		return;

	} else {

		if (debug) console.log('Executing getCurrentCache for the element id:', el);
		
		el.classList.add("skipcache");
		oldsrc = el.getAttribute('src');
		oldsrcset = el.getAttribute('srcset');
		searchRegExp = /\.jpg/g;
		replaceWith = '.jpg'+'?_timestamp='+'cache-'+getAssetCacheBuster(15);
		el.setAttribute('src', oldsrc.replace(searchRegExp, replaceWith));
		el.setAttribute('srcset', oldsrcset.replace(searchRegExp, replaceWith));


	}

}


 function checkBrowserCache(id) {
	 
	if (debug) console.log(`Executing checkBrowserCache for the element id: ${id}.`);

	 var currentCache = 'cache-'+getAssetCacheBuster(15);
	 if (debug) console.log('currentCache: ', currentCache);
 
	 caches.has(currentCache).then(function(hasCache) {			// Check if the current cache is cached.
		 if (hasCache) {
			 if (debug) console.log(`The cache: ${currentCache} is current.`);
 
			 assetsToCache = [];
			 jQuery("#"+id+" img.dynamic").each(function() { 
				 asset =  jQuery(this).attr("src")+'?_timestamp='+currentCache;
				 assetsToCache.push(asset);
				 jQuery(this).attr("src",asset);
			 });
			 assetsCached = [];
				caches.open(currentCache).then((cache) => {
					cache.matchAll().then((matches) => {
						matches.forEach(response => {
							assetsCached.push(response.url);
						});
						if (debug) console.log('assetsToCache: ', assetsToCache);
						if (debug) console.log('assetsCached: ', assetsCached);
						missingAssets = assetsToCache.filter(x => !assetsCached.includes(x));
						return missingAssets;
					}).then((missingAssets) => {
						if (missingAssets.length > 0) cache.addAll(missingAssets);  
						if (debug) console.log('missingAssets: ', missingAssets);
					}) 
				});
		 return true;
	 } else{
		 if (debug) console.log(`The cache: ${currentCache} is not current.`);
		 caches.open(currentCache).then(cache => { 
				 if (debug) console.log(`Rebuild Cache`);
				 assetsToCache = [];
				 jQuery("#"+id+" img.dynamic").each(function() { 
					 asset =  jQuery(this).attr("src")+'?_timestamp='+currentCache;
					 assetsToCache.push(asset);
					 jQuery(this).attr("src",asset);
				 });
				 if (debug) console.log('Assets to Cache: ', assetsToCache);
				 cache.addAll(assetsToCache);  
				 if (debug) console.log(`Cache ${currentCache} Created`);
				 caches.keys().then(cacheNames => {   
					 return Promise.all( 
						 cacheNames.map(cache => {                  
						 if(cache !== currentCache && cache.search('cache-') >= 0) {               
								 caches.delete(cache).then(function () {
									 if (debug) console.log("Cache with name " + cache + " is deleted");
								 });       
							 }
						 })
					 )
				 });
		 });
		 
	 }
	 }).catch(function() {
		 console.log("Error what retrieving cache: ", err);
	 });
 
 }
 
 function getAssetCacheBuster(m) {t = new Date();return t.getUTCFullYear()+right('0'+t.getUTCMonth(),2)+right('0'+t.getUTCDate(),2)+right('0'+t.getUTCHours(),2)+right('0'+(t.getUTCMinutes()-(t.getUTCMinutes()%m)),2);}
 
 function right(str, chr) { return str.slice(str.length-chr,str.length); }
 
 function left(str, chr) {return str.slice(0, chr - str.length);}

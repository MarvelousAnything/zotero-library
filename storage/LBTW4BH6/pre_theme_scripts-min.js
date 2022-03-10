function createCookie(name, value, minutes) {
	var d = new Date;
	d.setTime(d.getTime() + minutes*60*1000);
	document.cookie = name + "=" + value + ";path=/;secure;samesite=strict;expires=" + d.toGMTString();
}

/* getCookie did not work in Chrome or Edge, so keep it for now. */
function getCookie(name) {
	var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|jQuery)');
	return v ? v[2] : null;
}

/* getCookie seems to be working for all. */
function getCookieNew(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return null;
  }

function deleteCookie(name) { 
	createCookie(name, '', -1);
}

// adds bootstrap column classes to site alert divs as needed
function siteAlertColumnAssignment() {
	
	// determine the number of site-alerts that we'll need to stylize
	numAlerts = jQuery('.site-alert').length;

	// remove the site-alert-margin class from main block
	jQuery("main").removeClass("site-alert-margin");

	// only bother reassigning classes if there are more than 0 alerts
	if (numAlerts > 0) {

		// add the site-alert-margin class back to the main block
		jQuery("main").addClass("site-alert-margin");

		// switch determines how to assign column styles based on the number of alerts
		switch(numAlerts) {
			
			case 1:
				// no action needed
				break;

			case 2:
				jQuery("div.site-alert").addClass("col-md-6");
				jQuery("div.site-alert").addClass("col-lg-6");
				break;
			
			case 3:
				jQuery("div.site-alert:eq(1)").addClass("col-md-6");
				jQuery("div.site-alert:eq(2)").addClass("col-md-6");
				jQuery("div.site-alert").addClass("col-lg-4");
				break;

			case 4:
				jQuery("div.site-alert").addClass("col-md-6");
				jQuery("div.site-alert").addClass("col-lg-3");
				break;

			case 5:
				jQuery("div.site-alert:eq(1)").addClass("col-md-6");
				jQuery("div.site-alert:eq(2)").addClass("col-md-6");
				jQuery("div.site-alert:eq(3)").addClass("col-md-6");
				jQuery("div.site-alert:eq(4)").addClass("col-md-6");
				jQuery("div.site-alert:eq(1)").addClass("col-lg-3");
				jQuery("div.site-alert:eq(2)").addClass("col-lg-3");
				jQuery("div.site-alert:eq(3)").addClass("col-lg-3");
				jQuery("div.site-alert:eq(4)").addClass("col-lg-3");
				break;

			case 6:
				jQuery("div.site-alert").addClass("col-md-6");
				jQuery("div.site-alert").addClass("col-lg-4");
				break;

			case 7:
				jQuery("div.site-alert:eq(1)").addClass("col-md-6");
				jQuery("div.site-alert:eq(2)").addClass("col-md-6");
				jQuery("div.site-alert:eq(3)").addClass("col-md-6");
				jQuery("div.site-alert:eq(4)").addClass("col-md-6");
				jQuery("div.site-alert:eq(5)").addClass("col-md-6");
				jQuery("div.site-alert:eq(6)").addClass("col-md-6");
				jQuery("div.site-alert:eq(1)").addClass("col-lg-4");
				jQuery("div.site-alert:eq(2)").addClass("col-lg-4");
				jQuery("div.site-alert:eq(3)").addClass("col-lg-4");
				jQuery("div.site-alert:eq(4)").addClass("col-lg-4");
				jQuery("div.site-alert:eq(5)").addClass("col-lg-4");
				jQuery("div.site-alert:eq(6)").addClass("col-lg-4");
				break;

			case 8:
				jQuery("div.site-alert").addClass("col-md-6");
				jQuery("div.site-alert").addClass("col-lg-3");
				break;
			
			default:
				// if we ever see more than 8 alerts, someone is doing something wrong
				jQuery("div.site-alert").addClass("col-md-6");
				jQuery("div.site-alert").addClass("col-lg-3");
		}

	}

}

// do i still use this???
function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		}
	} 
}

// adds a "new" flag for headlines that are recent
function isStoryNew(published) {
	
	// set up acceptable value for what is consiered "recent"
	// var consideredRecent = 172800 // 48 hours for testing
	var consideredRecent = 3600 // 1 hour

	// get local timestamp for "now"
	var jsNow = Math.floor(Date.now() / 1000);
	
	// compare against the passed published timestamp
	var timeSpan = (jsNow - published);

	// check to see if post is recent enough to be considered "recent"
	if (timeSpan < consideredRecent) {

		// output a "NEW" flag for the headline
		document.write('<p class="newsroll-item-tag">NEW</p>');

	}
}

// checks how long ago a date/time value was and returns a string to output
function howLongAgo(value, isPost, isUpdated) {
	
	// declare datetimeString
	var datetimeString = '';

	// set up acceptable value for what is consiered "recent"
	var oneHourAgo = 3600 // 1 hour
	var sixHoursAgo = 21600 // 6 hours

	// get local timestamp for "now"
	var jsNow = Math.floor(Date.now() / 1000);

	// compare the current datetime against the passed datetime
	var timeSpan = (jsNow - value);

	// check to see if the time span is less than an hour
	if ((timeSpan < oneHourAgo) && (isUpdated == 0)) {

		// calculate the number of minutes
		theNumber = Math.floor(timeSpan / 60);

		// check to see if the number of hours calculated is singular or more
		if (theNumber == 0) {

			// reassign the value of datetimeString
			dateTimeString = 'just now';

		} else if (theNumber == 1) {

			// reassign the value of datetimeString
			dateTimeString = theNumber + ' minute ago';

		} else {

			// reassign the value of datetimeString
			dateTimeString = theNumber + ' minutes ago';

		}

	} else if ((timeSpan < sixHoursAgo) && (isUpdated == 0)) {

		// calculate the number of hours
		theNumber = Math.floor((timeSpan / 60) / 60);

		// check to see if the number of hours calculated is singular or more
		if (theNumber == 1) {

			// reassign the value of datetimeString
			dateTimeString = theNumber + ' hour ago';

		} else {

			// reassign the value of datetimeString
			dateTimeString = theNumber + ' hours ago';

		}

	} else {

		// create a date by using the value of compareAgainst but add milliseconds
		dateToOutput = new Date(value*1000);

		// set up an array of month name abbreviations
		var monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		// extract month and year from the timestamp
		outputMonth = monthsArray[dateToOutput.getMonth()];
		outputDate = dateToOutput.getDate();
		outputYear = dateToOutput.getFullYear();
		outputHour = dateToOutput.getHours();
		outputAMPM = outputHour >= 12 ? 'PM' : 'AM';
		outputHour = outputHour % 12;
		outputHour = outputHour ? outputHour : 12; // the hour '0' should be '12'
		outputMinute = dateToOutput.getMinutes();
		outputMinute = outputMinute < 10 ? '0' + outputMinute : outputMinute;
		// outputSecond = dateToOutput.getSeconds();
		// outputSecond = outputSecond < 10 ? '0' + outputSecond : outputSecond;

		// check passed value of isPost
		if (isPost == 1) {

			// reassign the value of datetimeString using date and time
			// dateTimeString = outputMonth + ' ' + outputDate + ', ' + outputYear + ' - ' + outputHour + ':' + outputMinute + ':' + outputSecond + ' ' + outputAMPM;
			dateTimeString = outputMonth + ' ' + outputDate + ', ' + outputYear + ' - ' + outputHour + ':' + outputMinute + ' ' + outputAMPM;

		} else {

			// reassign the value of datetimeString using only date
			dateTimeString = outputMonth + ' ' + outputDate;

		}

	}

	// send the value of dateTimeString back to the caller
	return dateTimeString;
	
}

// outputs details about publish and/or modified datetime values
function outputDateTimeDetails(published, modified, isPost) {
	
	// determine the allowable difference between "published" and "modified" to determine what is considered "new"
	isNewEnough = 180; // three minutes

	// alert(published);
	// alert(modified);

	// check to see if we are outputting datetime values on a post or elsewhere
	if (isPost == 1) {

		// outputting on a post so check to see if the modified date is differnt than the published date
		if ((modified > published) && ( modified - published > isNewEnough)) {

			// post has been updated so output both "datetimes"
			document.write('Updated: ' + howLongAgo(modified, isPost, 0) + '<br />');
			document.write('Published: ' + howLongAgo(published, isPost, 1));

		} else {

			// only need to output published "datetime"
			document.write(howLongAgo(published, isPost, 0));

		}

	} else {

		// outputting in a list of headlines so check to see if the modified date is differnt than the published date
		if ((modified > published) && ( modified - published > isNewEnough)) { 

			// only need to output modified "datetime"
			document.write(howLongAgo(modified, isPost, 0));

		} else {

			// only need to output published "datetime"
			document.write(howLongAgo(published, isPost, 0));

		}

	}

}
// extracts actual lat/long coordinates from the returned navigator position and sets the cookies
function setCookiesFromPosition(position) {
	
	// set cookies so we don't have to keep asking permission for location
	createCookie("userLatitude", position.coords.latitude, 5);
	createCookie("userLongitude", position.coords.longitude, 5);

}

// returns either a default set of coordinates or a user's latitude and longitude if allowed
function getCoordinates() {

	// set default values for the coordinates to use for weather widget
	var useLat = defaultLat;
	var useLong = defaultLong;

	// check to see if the site allows to check geolocation for user
	if (geoAllowedBySite == 1) {
		
		// check to see if cookies already exist with user's latitude and longitude
		cookieExistsLat = getCookie('userLatitude');
		cookieExistsLong = getCookie('userLongitude');

		// check results of function
		if ((cookieExistsLat !== null) && (cookieExistsLong !== null)) {
			
			// cookies already exist so recreate them with their existing values and a new expiration
			createCookie("userLatitude", cookieExistsLat, 5);
			createCookie("userLongitude", cookieExistsLong, 5);
			
		} else {
			
			// user lat/long cookies do not exist so attempt to obtain the user's coordinates, but first check to see if site is secure
			if (location.protocol == 'https:') {
				
				// site is secure so attempt to obtain user's coordinates
				if (navigator.geolocation) {
					
					// browser allows geolocation so pass position to setCookiesFromPosition function
					navigator.geolocation.getCurrentPosition(setCookiesFromPosition);

				} else {
					
					// navigator.geolocation not available so set (or reset) cookies based on predetermined default lat/long
					createCookie("userLatitude", useLat, 5);
					createCookie("userLongitude", useLong, 5);

				}

			} else {
				
				// site is not https which means navigator.geolocation is not available, so set (or reset) cookies based on predetermined default lat/long
				createCookie("userLatitude", useLat, 5);
				createCookie("userLongitude", useLong, 5);

			}

		}

	} else {
		
		// geolocation not allowed by site, so set (or reset) cookies based on predetermined default lat/long
		createCookie("userLatitude", useLat, 5);
		createCookie("userLongitude", useLong, 5);

	}

}

// outputs weather widget in site header
function displayWeatherWidget() {
	
	// write the widget html to the screen
	document.write('<div class="text-center">');
	document.write('<span class="text-white">');
	document.write('<img id="wxWidgetImage" class="p-0" src="' + wxWidgetImageDefault + '" height="30" />');
	document.write(' ');
	document.write('<span id="wxWidgetCurrentTemp" class="font-weight-bold"></span><br />');
	document.write('<small id="wxWidgetLocation"></small>');
	document.write('</span>');
	document.write('</div>');

}

// outputs full extended forecast content
function displayExtendedForecast() {
	
	// run the function that will obtain coordinates for weather preferences and set cookies
	getCoordinates();

	// simply write a div with an ID that will later be used to populate with HTML on the fly
	document.write('<div id="wxFullForecast"></div>');

	displayExtendedForecastData();

}

// resets a users location cookies at their request
function resetCoordinates() {

	// if there's a zip code cookie, expire that too
	deleteCookie("userZIP");

	// remove the weather widget data cookie
	deleteCookie("userWXWidgetData");

	// remove existing location cookies by expiring them
	deleteCookie("userLatitude");
	deleteCookie("userLongitude");

	// run the function that will obtain coordinates for weather preferences and set cookies
	getCoordinates();

	// reload the page to use the new coordinates when outputting data
	window.location.href = window.location.href;
	
}

// checks the value of a user's entered location
function checkUserLocation() {
	
	// retrieve current value of the newLocation field and assign it to a local variable
	newLocationField = document.getElementById("newLocation");
	newLocationValue = newLocationField.value;

	// test to see if the value looks like it could be a valid ZIP code
	isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(newLocationValue);

	// did the value pass as a possible ZIP code
	if(isValidZip) {
		
		// in case user entered an extended ZIP, we'll only want to use the first part
		zipSplit = newLocationValue.split("-");
		newLocationValue = zipSplit[0];

		// if there's a zip code cookie, expire that too
		deleteCookie("userZIP");

		// ZIP code cookie does not exists so create it
		createCookie("userZIP", newLocationValue, 10080); // (10080 minutes is 1 week)

		// remove the weather widget data cookie
		deleteCookie("userWXWidgetData");

		// reload the page to make sure cookie is available when determining whether to retrieve weather by ZIP or by coordinates
		window.location.href = window.location.href;
		
	} else {
		
		// user didn't supply a valid ZIP, so reset the form with a warning
		newLocationField.value = 'Not a Valid ZIP';

	}

}

// retrieves weather data for a user's preferred location
function displayExtendedForecastData() {
	
	// make sure a value was set on the theme level for the api key and client id
	if ((wsiApiKey !== "") && (wsiClientID !== "")) {

		// alert(weatherDataOrder);

		// extract the date and month with leading zeros
		rightNow = new Date();
		rightNowYear = rightNow.getFullYear();
		rightNowMonth = rightNow.getMonth();
		rightNowDay = rightNow.getDate();
		todayDateFormatted = rightNowMonth + '/' + rightNowDay + '/' + rightNowYear;
		todayDate = new Date(rightNowYear, rightNowMonth, rightNowDay);

		// values used for retrieving almanac data on current day
		thisDay = ('0' + rightNow.getDate()).slice(-2);
		thisMonth = (rightNow.getMonth() + 1);
		thisMonth = ('0' + thisMonth).slice(-2);

		// the weather widget data cookie doesn't exist but check to see if there is a ZIP code cookie
		cookieExistsZIP1 = getCookie('userZIP'); // Keep for now does not work in Chrome
		cookieExistsZIP =  getCookieNew('userZIP');

		// check results of function
		if (cookieExistsZIP !== null) {
			
			wsiRequestUrl = 'https://api.weather.com/v3/aggcommon/v3-location-point;v3-wx-observations-current;v3-wx-forecast-daily-10day-custom;v3-wx-forecast-hourly-2day-custom;v3-wx-almanac-daily-1day?postalKey=' + cookieExistsZIP + ':US&clientId=' + wsiClientID + '&day=' + thisDay + '&month=' + thisMonth + '&language=en-US&units=e&format=json&apiKey=' + wsiApiKey;

		} else {
			
			wsiRequestUrl = 'https://api.weather.com/v3/aggcommon/v3-location-point;v3-wx-observations-current;v3-wx-forecast-daily-10day-custom;v3-wx-forecast-hourly-2day-custom;v3-wx-almanac-daily-1day?geocode=' + defaultLat + ',' + defaultLong + '&clientId=' + wsiClientID + '&day=' + thisDay + '&month=' + thisMonth + '&language=en-US&units=e&format=json&apiKey=' + wsiApiKey;

		}

		// set up an ajax call to the generated url
		jQuery.ajax({
			type : "get",
			url : wsiRequestUrl,
			success: function(response) {
				
				// set up month names in an array for later use
				const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

				// separate out the responses for easier parsing
				wsi_location_point = response['v3-location-point'];
				wsi_observations_current = response['v3-wx-observations-current'];
				wsi_extended_forecast = response['v3-wx-forecast-daily-10day-custom'];
				wsi_hourly_forecast = response['v3-wx-forecast-hourly-2day-custom'];
				wsi_almanac = response['v3-wx-almanac-daily-1day'];
				
				// make sure the value of wsi_location_point is a proper object
				if (typeof wsi_location_point === 'object' && wsi_location_point !== null) {

					// value is an object so it is safe to continue
					useCity = wsi_location_point["location"]["city"];
					useState = wsi_location_point["location"]["adminDistrictCode"];
					useIcon = wsi_observations_current["iconCode"];
					useSky = wsi_observations_current["wxPhraseMedium"];

					if ((wsi_extended_forecast.temperatureMax[0] !== "") && (wsi_extended_forecast.temperatureMax[0] != null)) {
						useHi = wsi_extended_forecast.temperatureMax[0] + '<sup>&deg;</sup>';
					} else {
						useHi = '-';
					}

					useLo = wsi_extended_forecast.temperatureMin[0] + '<sup>&deg;</sup>';
					useTemp = wsi_observations_current["temperature"];
					usePhrase = wsi_extended_forecast.narrative[0];

					// build the HTML that will be returned to the calling js
					html = '<!-- ROW (current conditions) -->';
					html = html + '<div class="row mb-4">';
					html = html + '<div class="col-12 my-2"><h4>Current Conditions for ' + useCity + ', ' + useState + '</h4></div>';
					html = html + '<div class="col-12">';
					html = html + '<div class="row">';
					html = html + '<div class="col-6 text-center">';
					html = html + '<img class="media-object" src="' + wxIconDir + useIcon + '.png" width="60" height="60" alt="' + useSky + '" title="' + useSky + '" />';
					html = html + '<p class="h5">' + useHi + ' | ' + useLo + '</p>';
					html = html +  '</div>';
					html = html + '<div class="col-6 text-center">';
					html = html + '<p class="h5">Currently:</p><h2 class="display-4">' + useTemp + '<sup>&deg;</sup></h2>';
					html = html + '</div>';
					html = html + '<div class="col-12 text-center">';
					html = html + '<p>' + usePhrase + '</p>';
					html = html + '</div>';
					html = html + '</div>';
					html = html + '</div>';

					useFeelsLike = wsi_observations_current["temperatureFeelsLike"];
					useWindDir = wsi_observations_current["windDirectionCardinal"];
					useWindSpeed = wsi_observations_current["windSpeed"];
					useHumidity = wsi_observations_current["relativeHumidity"];
					useDewPt = wsi_observations_current["temperatureDewPoint"];
					usePressure = wsi_observations_current["pressureAltimeter"];
					
					html = html + '<div class="col-12 col-xl-6">';
					html = html + '<table style="width: 100%;">';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Feels like: </strong></td>';
					html = html + '<td class="text-right">' + useFeelsLike + '<sup>&deg;</sup></td>';
					html = html + '</tr>';
					html = html + '<tr>';
					html = html + '<td valign="top"><strong>Wind: </strong></td>';
					html = html + '<td class="text-right">' + useWindDir + ' ' + useWindSpeed + 'mph</td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Humidity: </strong></td>';
					html = html + '<td class="text-right">' + useHumidity + '%</td>';
					html = html + '</tr>';
					html = html + '<tr>';
					html = html + '<td valign="top"><strong>Dewpoint: </strong></td>';
					html = html + '<td class="text-right">' + useDewPt + '<sup>&deg;</sup></td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Pressure: </strong></td>';
					html = html + '<td class="text-right">' + usePressure + '"</td>';
					html = html + '</tr>';
					html = html + '</table>';
					html = html + '</div>';

					useCeiling = wsi_observations_current["cloudCeiling"];
					useVisibility = wsi_observations_current["visibility"];

					// manipulate sunrise/sunset datetime values as needed
					useSunriseDateTime = wsi_observations_current["sunriseTimeLocal"];
					theSunriseDateTime = useSunriseDateTime.split("T");
					theSunriseTime = theSunriseDateTime[1].split("-");
					theSunriseTime = theSunriseTime[0].split(":");
					useSunriseHour = parseInt(theSunriseTime[0], 10);

					if (useSunriseHour == "0") {
						useSunriseHour = "12";
						useSunriseAMPM = "AM";
					} else if (useSunriseHour == 12) {
						useSunriseAMPM = "PM";
					} else if (useSunriseHour > 12) {
						useSunriseHour = (useSunriseHour - 12);
						useSunriseAMPM = "PM";
					} else {
						useSunriseAMPM = "AM";
					}

					useSunriseMinute = theSunriseTime[1];
					useSunriseSecond = theSunriseTime[2];

					useSunsetDateTime = wsi_observations_current["sunsetTimeLocal"];
					theSunsetDateTime = useSunsetDateTime.split("T");
					theSunsetTime = theSunsetDateTime[1].split("-");
					theSunsetTime = theSunsetTime[0].split(":");
					useSunsetHour = parseInt(theSunsetTime[0], 10);

					if (useSunsetHour == "0") {
						useSunsetHour = "12";
						useSunsetAMPM = "AM";
					} else if (useSunsetHour == 12) {
						useSunsetAMPM = "PM";
					} else if (useSunsetHour > 12) {
						useSunsetHour = (useSunsetHour - 12);
						useSunsetAMPM = "PM";
					} else {
						useSunsetAMPM = "AM";
					}

					useSunsetMinute = theSunsetTime[1];
					useSunsetSecond = theSunsetTime[2];

					html = html + '<div class="col-12 col-xl-6">';
					html = html + '<table style="width: 100%;">';
					html = html + '<tr>';
					html = html + '<td valign="top"><strong>Sky: </strong></td>';
					html = html + '<td class="text-right">' + useSky + '</td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Ceiling: </strong></td>';
					html = html + '<td class="text-right">' + useCeiling + '</td>';
					html = html + '</tr>';
					html = html + '<tr>';
					html = html + '<td valign="top"><strong>Visibility: </strong></td>';
					html = html + '<td class="text-right">' + useVisibility + 'mi</td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Sunrise: </strong></td>';
					html = html + '<td class="text-right">' + useSunriseHour + ':' + useSunriseMinute + ':' + useSunriseSecond + ' ' + useSunriseAMPM + '</td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Sunset: </strong></td>';
					html = html + '<td class="text-right">' + useSunsetHour + ':' + useSunsetMinute + ':' + useSunsetSecond + ' ' + useSunsetAMPM + '</td>';
					html = html + '</tr>';
					html = html + '</table>';
					html = html + '</div>';
					html = html + '<!-- /COL-12 -->';
					html = html + '</div>';
					html = html + '<!-- /ROW (current conditions) -->';

					html = html + '<!-- ROW (change location) -->';
					html = html + '<div class="row mb-4">';
					html = html + '<div class="col-12 my-2"><h4>Change Location</h4></div>';
					html = html + '<div class="col-12">';
					html = html + '<div class="input-group">';
					html = html + '<input name="newLocation" id="newLocation" type="text" class="form-control" placeholder="ZIP Code" aria-label="Search" aria-describedby="change" onFocus="this.value=\'\';">';
					html = html + '<div class="input-group-append">';
					html = html + '<button class="btn btn-dark" type="button" id="change" onClick="checkUserLocation();">Change</button>';
					html = html + '</div>';
					html = html + '</div>';
					html = html + '<h4 class="my-3 text-center">OR</h4>';
					html = html + '<button class="btn btn-dark btn-block" type="button" id="relocate" onClick="resetCoordinates();">Use My Location</button>';
					html = html + '</div>';
					html = html + '<!-- /COL-12 -->';
					html = html + '</div>';
					html = html + '<!-- /ROW (change location) -->';

					html = html + '<!-- ROW (trends) -->';
					html = html + '<div class="row mb-4">';
					html = html + '<div class="col-12 my-2"><h4>Trends for ' + useCity + ', ' + useState + '</h4></div>';
					
					useAvgHi = wsi_almanac.temperatureAverageMax[0];
					useAvgLo = wsi_almanac.temperatureAverageMin[0];
					useMean = wsi_almanac.temperatureMean[0];

					html = html + '<div class="col-12 col-xl-6">';
					html = html + '<table style="width: 100%;">';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Avg. High: </strong></td>';
					html = html + '<td class="text-right">' + useAvgHi + '<sup>&deg;</sup></td>';
					html = html + '</tr>';
					html = html + '<tr>';
					html = html + '<td valign="top"><strong>Avg. Low: </strong></td>';
					html = html + '<td class="text-right">' + useAvgLo + '<sup>&deg;</sup></td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Mean: </strong></td>';
					html = html + '<td class="text-right">' + useMean + '<sup>&deg;</sup></td>';
					html = html + '</tr>';
					html = html + '</table>';
					html = html + '</div>';

					useRecordHi = wsi_almanac.temperatureRecordMax[0];
					useRecordHiDate = wsi_almanac.almanacRecordYearMax[0];
					useRecordLo = wsi_almanac.temperatureRecordMin[0];
					useRecordLoDate = wsi_almanac.almanacRecordYearMin[0];

					html = html + '<div class="col-12 col-xl-6">';
					html = html + '<table style="width: 100%;">';
					html = html + '<tr>';
					html = html + '<td valign="top"><strong>Record High: </strong></td>';
					html = html + '<td class="text-right">';
					html = html + useRecordHi + '<sup>&deg;</sup> (' + useRecordHiDate + ')';
					html = html + '</td>';
					html = html + '</tr>';
					html = html + '<tr class="bg-light">';
					html = html + '<td valign="top"><strong>Record Low: </strong></td>';
					html = html + '<td class="text-right">';
					html = html + useRecordLo + '<sup>&deg;</sup> (' + useRecordLoDate + ')';
					html = html + '</td>';
					html = html + '</tr>';
					html = html + '</table>';
					html = html + '</div>';
					html = html + '<!-- /COL-12 -->';
					html = html + '</div>';
					html = html + '<!-- /ROW (trends) -->';

					html = html + '<!-- ROW (hourly forecast) -->';
					html = html + '<div class="row mb-4">';
					html = html + '<div class="col-12 my-2"><h4>Hourly Forecast for ' + useCity + ', ' + useState + '</h4></div>';
					html = html + '<!-- COL-12 -->';
					html = html + '<div class="col-12">';
					html = html + '<div class="container weather-forecast-data">';
					html = html + '<div class="row text-center pr-2">';

					// loop through the hourly forecast values
					for(var hour=0; hour <= 47; hour++) {

						// manipulate date values as needed
						useDateTimeLocal = wsi_hourly_forecast["validTimeLocal"][hour];
						theDateTimeLocal = useDateTimeLocal.split("T");
						theFormattedDate = theDateTimeLocal[0];
						theFormattedDateSplit = theFormattedDate.split("-");
						theFormattedDate = theFormattedDateSplit[1] + '/' + theFormattedDateSplit[2] + '/' + theFormattedDateSplit[0];
						theFormattedDate = new Date(theFormattedDate);
						theDateInterval = Math.abs(theFormattedDate - todayDate);
						theDateDiffDays = Math.ceil(theDateInterval / (1000 * 60 * 60 * 24))

						// determine how to show day based on value of theDateInterval
						if (theDateInterval == 0) {
							theDayToDisplay = 'Today';
						} else if (theDateDiffDays == 1) {
							theDayToDisplay = 'Tomorrow';
						} else {
							theDayToDisplay = wsi_hourly_forecast["dayOfWeek"][hour];
						}

						// further manipulate time values as needed
						theTimeLocal = theDateTimeLocal[1].split(":");
						theHourLocal = parseInt(theTimeLocal[0], 10);

						if (theHourLocal == "0") {
							theHourLocal = "12AM";
						} else if (theHourLocal == 12) {
							theHourLocal = theHourLocal + "PM";
						} else if (theHourLocal > 12) {
							theHourLocal = ((theHourLocal - 12) + "PM");
						} else {
							theHourLocal = theHourLocal + "AM";
						}

						// determine if hour is day or night
						dayOrNight = wsi_hourly_forecast["dayOrNight"][hour];
						
						// pick out the data needed for display
						useHourTemp = wsi_hourly_forecast["temperature"][hour] + '<sup>&deg;</sup>';
						useHourIcon = wsi_hourly_forecast["iconCode"][hour];
						useHourSky = wsi_hourly_forecast["wxPhraseShort"][hour];
						useHourHumidity = wsi_hourly_forecast["relativeHumidity"][hour];
						useHourPrecip = wsi_hourly_forecast["precipChance"][hour];
						useHourWindDir = wsi_hourly_forecast["windDirectionCardinal"][hour];
						useHourWindSpeed = wsi_hourly_forecast["windSpeed"][hour];

						// determine whether to stylize for day or night
						if (dayOrNight == 'D') {
							html = html + '<div class="col-4 col-md-6 col-lg-4 col-xl-3 col-xxl-2">';
						} else {
							html = html + '<div class="col-4 col-md-6 col-lg-4 col-xl-3 col-xxl-2 weather-forecast-data-night">';
						}

						html = html + '<span class="forecastHourlyTime">' + theHourLocal + '</span><br />';
						html = html + '<span class="forecastHourlyDay">' + theDayToDisplay + '</span><br />';
						html = html + '<span class="forecastHourlyTime">' + useHourTemp + '</span><br />';
						html = html + '<img class="media-object" src="' + wxIconDir + + useHourIcon + '.png" width="60" height="60" alt="' + useHourSky + '" title="' + useHourSky + '" /><br />';
						html = html + '<span class="forecastHourlySmall">';
						html = html + useHourSky + '<br />';
						html = html + 'Humidity: ' + useHourHumidity + '%<br />';
						html = html + 'Precip: ' + useHourPrecip + '%<br />';
						html = html + 'Wind: ' + useHourWindDir + ' ' + useHourWindSpeed + 'mph';
						html = html + '</span>';
						html = html + '</div>';

					}

					html = html + '</div>';
					html = html + '</div>';
					html = html + '</div>';
					html = html + '<!-- /COL-12 -->';
					html = html + '</div>';
					html = html + '<!-- /ROW (hourly forecast) -->';

					html = html + '<!-- ROW (extended forecast) -->';
					html = html + '<div class="row mb-4">';
					html = html + '<div class="col-12 my-2"><h4>Extended Forecast for ' + useCity + ', ' + useState + '</h4></div>';
					html = html + '<!-- COL-12 -->';
					html = html + '<div class="col-12">';
					html = html + '<div class="container weather-forecast-data">';
					html = html + '<div class="row text-center pr-2">';

					// loop through all 10 returned days of data
					for (var day=0; day <= 9; day++) {

						// calculate the daypart index value for day and night for each time through the loop
						dayPartDay = (day * 2);
						dayPartNight = (dayPartDay + 1);

						// manipulate date values as needed
						useDateTimeLocal = wsi_extended_forecast["validTimeLocal"][day];
						theDateTimeLocal = useDateTimeLocal.split("T");
						theFormattedDate = theDateTimeLocal[0];
						theFormattedDateSplit = theFormattedDate.split("-");
						theFormattedDate = theFormattedDateSplit[1] + '/' + theFormattedDateSplit[2] + '/' + theFormattedDateSplit[0];
						theFormattedDate = new Date(theFormattedDate);

						// pick out the data needed for display
						useDayIcon = wsi_extended_forecast.daypart[0]["iconCode"][dayPartDay];
						useDayPhrase = wsi_extended_forecast.daypart[0]["wxPhraseShort"][dayPartDay];
						useDayHumidity = wsi_extended_forecast.daypart[0]["relativeHumidity"][dayPartDay];
						useDayPrecip = wsi_extended_forecast.daypart[0]["precipChance"][dayPartDay];
						useDayWindDir = wsi_extended_forecast.daypart[0]["windDirectionCardinal"][dayPartDay];
						useDayWindSpeed = wsi_extended_forecast.daypart[0]["windSpeed"][dayPartDay];

						useNightIcon = wsi_extended_forecast.daypart[0]["iconCode"][dayPartNight];
						useNightPhrase = wsi_extended_forecast.daypart[0]["wxPhraseShort"][dayPartNight];
						useNightHumidity = wsi_extended_forecast.daypart[0]["relativeHumidity"][dayPartNight];
						useNightPrecip = wsi_extended_forecast.daypart[0]["precipChance"][dayPartNight];
						useNightWindDir = wsi_extended_forecast.daypart[0]["windDirectionCardinal"][dayPartNight];
						useNightWindSpeed = wsi_extended_forecast.daypart[0]["windSpeed"][dayPartNight];

						useDayHi = wsi_extended_forecast.daypart[0]["temperature"][dayPartDay] + '<sup>&deg;</sup>';
						useDayLo = wsi_extended_forecast.daypart[0]["temperature"][dayPartNight] + '<sup>&deg;</sup>';
						useDaypartNameDay = wsi_extended_forecast.daypart[0]["daypartName"][dayPartDay];
						useDaypartNameNight = wsi_extended_forecast.daypart[0]["daypartName"][dayPartNight];

						// only display daytime day part if it hasn't yet become old
						if (((wsi_extended_forecast.temperatureMax[0] !== "") && (wsi_extended_forecast.temperatureMax[0] != null)) || (dayPartDay > 0)) {

							html = html + '<div class="col-4 col-md-6 col-lg-4 col-xl-3 col-xxl-2">';
							html = html + '<span class="forecastDailyDay">' + useDaypartNameDay + '</span><br />';
							html = html + '<span class="forecastDailyDate">' + monthNames[theFormattedDate.getMonth()] + ' ' + theFormattedDate.getDate() + '</span><br />';
							html = html + '<span class="forecastHourlyTime">' + useDayHi + '</span><br />';
							html = html + '<img class="media-object" src="' + wxIconDir + useDayIcon + '.png" width="60" height="60" alt="' + useDayPhrase + '" title="' + useDayPhrase + '" /><br />';
							html = html + '<span class="forecastDailySmall">';
							html = html + useDayPhrase + '<br />';
							html = html + 'Humidity: ' + useDayHumidity + '%<br />';
							html = html + 'Precip: ' + useDayPrecip + '%<br />';
							html = html + 'Wind: ' + useDayWindDir + ' ' + useDayWindSpeed + 'mph';
							html = html + '</span>';
							html = html + '</div>';

						}

						html = html + '<div class="col-4 col-md-6 col-lg-4 col-xl-3 col-xxl-2 weather-forecast-data-night">';
						html = html + '<span class="forecastDailyDay">' + useDaypartNameNight + '</span><br />';
						html = html + '<span class="forecastDailyDate">' + monthNames[theFormattedDate.getMonth()] + ' ' + theFormattedDate.getDate() + '</span><br />';
						html = html + '<span class="forecastHourlyTime">' + useDayLo + '</span><br />';
						html = html + '<img class="media-object" src="' + wxIconDir + useNightIcon + '.png" width="60" height="60" alt="' + useNightPhrase + '" title="' + useNightPhrase + '" /><br />';
						html = html + '<span class="forecastDailySmall">';
						html = html + useNightPhrase + '<br />';
						html = html + 'Humidity: ' + useNightHumidity + '%<br />';
						html = html + 'Precip: ' + useNightPrecip + '%<br />';
						html = html + 'Wind: ' + useNightWindDir + ' ' + useNightWindSpeed + 'mph';
						html = html + '</span>';
						html = html + '</div>';

					}

					html = html + '</div>';
					html = html + '</div>';
					html = html + '</div>';
					html = html + '<!-- /COL-12 -->';
					html = html + '</div>';
					html = html + '<!-- /ROW (extended forecast) -->';

					// populate the html element with the generated content
					jQuery("#wxFullForecast").html(html);

				} else {

					// invalid location so just show form
					html = '<!-- ROW (change location) -->';
					html = html + '<div class="row mb-4">';
					html = html + '<div class="col-12 my-2"><h4>Change Location</h4></div>';
					html = html + '<div class="col-12">';
					html = html + '<div class="input-group">';
					html = html + '<input name="newLocation" id="newLocation" type="text" class="form-control" placeholder="ZIP Code" aria-label="Search" aria-describedby="change" onFocus="this.value=\'\';">';
					html = html + '<div class="input-group-append">';
					html = html + '<button class="btn btn-dark" type="button" id="change" onClick="checkUserLocation();">Change</button>';
					html = html + '</div>';
					html = html + '</div>';
					html = html + '<h4 class="my-3 text-center">OR</h4>';
					html = html + '<button class="btn btn-dark btn-block" type="button" id="relocate" onClick="resetCoordinates();">Use My Location</button>';
					html = html + '</div>';
					html = html + '<!-- /COL-12 -->';
					html = html + '</div>';
					html = html + '<!-- /ROW (change location) -->';

					// populate the html element with the generated content
					jQuery("#wxFullForecast").html(html);

					// alert user of error and reset
					alert("Invalid ZIP code. Reverting to local default.");
					resetCoordinates();
					// location.reload();
					window.location.href = window.location.href

				}
			},
			error: function(xhr) {
				alert('An unknown error has occurred...');
			}
		});

	} else {

		// a critical value is missing at the theme level so remind user to provide it
		alert('Make sure you provide a WSI Client ID and API Key in the theme customizer.');

	}



}

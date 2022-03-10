/* START | alert banner generation */
// set up paths to alert files
fileWeather = '/wp-content/uploads/alerts/weather.html';
fileClosings = '/wp-content/uploads/alerts/closings.html';
fileNews = '/wp-content/uploads/alerts/news.html';
fileLive = '/wp-content/uploads/alerts/live.html';

// function to retrieve content from an alert file
jQuery.extend({
	getFileContent: function(url) {
		var result = null;
		jQuery.ajax({
			url: url,
			type: 'get',
			async: false,
			cache: false,
			success: function(data) {
					result = data;
				}
			});
		return result;
	}
});

// create one string from the four individual
var allAlerts = jQuery.getFileContent(fileWeather) + jQuery.getFileContent(fileClosings) + jQuery.getFileContent(fileNews) + jQuery.getFileContent(fileLive);

// populate the alert div
jQuery("#alertContainerRow").html(allAlerts);
/* END | alert banner generation */

// Controls the stickiness of the header
jQuery(".navbar-toggler").click(function() {
	//jQuery("#navbarSupportedContent").height(325);
	if (jQuery( "#navheader" ).hasClass( "fixed-top" ) ) {
		jQuery( "#navheader" ).removeClass( "fixed-top" );
		jQuery( "#closeNavtxt" ).css("display", "block");
		window.scrollTo(0,0);
	} else {
		jQuery( "#navheader" ).addClass( "fixed-top" );
		jQuery( "#closeNavtxt" ).css("display", "none");
	}
});

// Creates value for current year
jQuery('#thisYear').text(new Date().getFullYear());

// has logic for resizing alert divs when others are dismissed
jQuery(document).ready(function(){
	
	// before anything, loop through each existing site-alert div to see if cookies exist for any, this lets us know if they were previously dismissed
	jQuery("div.site-alert").each(function(){
		
		// use this div's ID to set the cookie name we want to check for
		cookieName = this.id + '-dismissed';

		// call the function that checks for a cookie's existence
		cookieExists = getCookie(cookieName);

		// check results of function
		if (cookieExists !== null) {
			// a cookie has found, which means it has been dismissed, so remove it from the DOM
			document.getElementById(this.id).remove();
		}

    });

	// initialize the column class assignment function
	siteAlertColumnAssignment();

	// all alerts are hidden temporarily but after initial column assignment, we can now show by removing the class that hides them
	jQuery("div.site-alert").removeClass("d-none");

	// if user is dismissing an alert
	jQuery("div.site-alert").on('closed.bs.alert', function () {

		// first remove all column classes to prepare for eventual reclassification
		jQuery("div.site-alert").removeClass("col-md-6");
		jQuery("div.site-alert").removeClass("col-lg-3");
		jQuery("div.site-alert").removeClass("col-lg-4");
		jQuery("div.site-alert").removeClass("col-lg-6");

		// set the cookie for the dismissed alert
		cookieName = this.id + '-dismissed';

		// call the cookie creation function
		createCookie(cookieName, "true", 5);

		// reset the column class assignments
		siteAlertColumnAssignment();

	});

});

jQuery(document).ready( function() {
	
	// check to see if the cookie that would hold the wx widget data already exists
	cookieExistsWXWidgetData = getCookie('userWXWidgetData');

	// check results of function
	if (cookieExistsWXWidgetData !== null) {
		
		// split the contents of the cookie into an array and set individual values
		var arrayWXWidgetData = cookieExistsWXWidgetData.split("|");
		var currentTemp = arrayWXWidgetData[0];
		var currentLocation = arrayWXWidgetData[1];
		var currentImage = arrayWXWidgetData[2];

		// modify returned values as needed to help properly populate the html elements
		currentTemp = currentTemp + "&deg;";

		// rebuld the weather widget html using the values retrieved from the cookie
		jQuery("#wxWidgetCurrentTemp").html(currentTemp);
		jQuery("#wxWidgetLocation").html(currentLocation);
		jQuery("#wxWidgetImage").attr("src",currentImage);

	} else {
		
		// make sure a value was set on the theme level for the api key
		if (wsiApiKey !== "") {
			
			// the weather widget data cookie doesn't exist but check to see if there is a ZIP code cookie
			cookieExistsZIP1 = getCookie('userZIP'); // Keep for now does not work in Chrome
			cookieExistsZIP =  getCookieNew('userZIP');

			// check results of function
			if (cookieExistsZIP !== null) {
				
				wsiRequestUrl = 'https://api.weather.com/v3/aggcommon/v3-location-point;v3-wx-observations-current?postalKey=' + cookieExistsZIP + ':US&language=en-US&units=e&format=json&apiKey=' + wsiApiKey;

			} else {
				
				wsiRequestUrl = 'https://api.weather.com/v3/aggcommon/v3-location-point;v3-wx-observations-current?geocode=' + defaultLat + ',' + defaultLong + '&language=en-US&units=e&format=json&apiKey=' + wsiApiKey;

			}
			
			// set up an ajax call to the generated url
			jQuery.ajax({
				type : "get",
				url : wsiRequestUrl,
				success: function(response) {
					
					// separate out the responses for easier parsing
					wsi_location_point = response['v3-location-point'];
					wsi_observations_current = response['v3-wx-observations-current'];
					
					// make sure the value of wsi_location_point is a proper object
					if (typeof wsi_location_point === 'object' && wsi_location_point !== null) {
						
						// value is an object so it is safe to continue
						
						// assign local values from the location response
						currentLocation = wsi_location_point["location"]["city"] + ', ' + wsi_location_point["location"]["adminDistrictCode"];
						
						// assign local values from the current observations response
						currentIconCode = wsi_observations_current["iconCode"];
						currentTemp = wsi_observations_current["temperature"] + '&deg;';
						currentImage = wxIconDir + currentIconCode + '.png';
						
						// populate the html elements with the returned response values
						jQuery("#wxWidgetCurrentTemp").html(currentTemp);
						jQuery("#wxWidgetLocation").html(currentLocation);
						jQuery("#wxWidgetImage").attr("src",currentImage);

						// Piece together the weather data into a single string to store in a cookie for use later
						cookieContent = wsi_observations_current["temperature"] + "|" + currentLocation + "|" + currentImage;

						// save weather widget data to a short-lived cookie so we don't have to access api with every single page load
						createCookie("userWXWidgetData", cookieContent, 5);

					}
					
				},
				error: function(xhr) {
					alert('An unknown error has occurred');
				}
			});
		
		} else {

			// a critical value is missing at the theme level so remind user to provide it
			alert('Make sure you provide a WSI Client ID and API Key in the theme customizer.');

		}

	}
})
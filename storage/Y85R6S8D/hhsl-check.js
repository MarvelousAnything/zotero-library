"use strict";({initialize:function(){this.initializeHsslCheck()},debug:function(){var e=!1;return e="undefined"!=typeof DFM_AD_MODS_DEBUG?!0:e},checkForBangPremiumOffer:function(){var o,n,i=window.blueConicClient.profile.getProfile();this.debug()&&console.log("DEBUG: blueconic profile = "+i);var e=["bang_accept_premium_offer","bang_accept_premium_offer_date"];this.debug()&&console.log("DEBUG: blueconic premium offer properties = "+e),i.loadValues(e,this,function(){var e;o=i.getValue("bang_accept_premium_offer"),n=i.getValue("bang_accept_premium_offer_date"),"yes"===o&&0<n.length&&(e=new Date(n),!1==432e6<new Date-e?localStorage.setItem("hhsl","access"):localStorage.removeItem("hhsl"))})},initializeHsslCheck:function(){this.debug()&&console.log("DEBUG: initializeHsslCheck success");var i=!1,l=this,c=void 0;"undefined"!=typeof DFM_AD_MODS_LEVEL&&(c=parseInt(DFM_AD_MODS_LEVEL[0])),this.debug()&&console.log("DEBUG: hhslFromOptions "+c),document.addEventListener("onLoginSuccess",function(e){i=!0,l.debug()&&console.log("DEBUG: onLoginSuccess is true")}),void 0!==window.blueConicClient&&void 0!==window.blueConicClient.event&&void 0!==window.blueConicClient.event.subscribe?(l.debug()&&console.log("DEBUG: blueconic detected and not undefined; running checkForBangPremiumOffer"),l.checkForBangPremiumOffer()):(l.debug()&&console.log("DEBUG: blueconic not loaded, adding event listener"),window.addEventListener("onBlueConicLoaded",function(){l.checkForBangPremiumOffer()},!1)),document.addEventListener("onHasAccess",function(e){l.debug()&&console.log("DEBUG: onHasAccess event listener hit");var o=[];void 0!==c&&o.push(c),l.debug()&&console.log("DEBUG: hhsl level is "+o);var n=void 0,e=e.detail.MG2AccountData.DigitalAccess.Subscription.HouseHoldSubscriptionLevel;l.debug()&&console.log("DEBUG: hhsl level is "+e),n=!(void 0===e||!o.includes(e)),l.debug()&&console.log("DEBUG: hhslAccess "+n),!0===n?(localStorage.setItem("hhsl","access"),l.debug()&&console.log("DEBUG: setting localStorage item for hhsl")):(localStorage.removeItem("hhsl"),l.debug()&&console.log("DEBUG: removing localStorage item for hhsl")),i&&!0===n&&window.location.reload()})}}).initialize();
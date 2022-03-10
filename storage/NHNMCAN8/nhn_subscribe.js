/**
 * @version 1.2
 */
$(function(){if("safari"in window&&"pushNotification"in window.safari){var isSubbedToNotify=!1,permissionData=window.safari.pushNotification.permission("web.org.pbs.newshour"),navNotifyElem=$(".nav__notification"),navNotifyHideClass="nav__notification--hidden",navNotifySubbedClass="nav__notification--subscribed",navNotifyBubbleElem=$(".nav__notification__bubble"),navNotifyBubbleHideClass="nav__notification__bubble--hidden",navNotifySubButtonElem=navNotifyBubbleElem.find("button").first(),navNotifyMessageH5=navNotifyBubbleElem.find("h5").first(),
subscribeToken=Math.random().toString(36).substr(2)+Date.now().toString(36),notificationsBaseUrl="https://newshour.io/api/notifications";initSafariPermissions(permissionData);navNotifySubButtonElem.click(function(){isSubbedToNotify||window.safari.pushNotification.requestPermission(notificationsBaseUrl,"web.org.pbs.newshour",{subscribe_token:"APN_"+subscribeToken},initSafariPermissions)});navNotifyElem.click(function(){navNotifyBubbleElem.toggleClass(navNotifyBubbleHideClass)})}
function initSafariPermissions(a){navNotifyBubbleElem.addClass(navNotifyBubbleHideClass);navNotifyElem.removeClass(navNotifyHideClass);switch(a.permission){case "granted":isSubbedToNotify=!0;navNotifyElem.addClass(navNotifySubbedClass);navNotifyMessageH5.html("You are subscribed. To unsubscribe, open <i>Safari > Preferences > Notifications</i>.");navNotifyBubbleElem.find("button").hide();break;case "denied":isSubbedToNotify=!1,navNotifyMessageH5.html("To subscribe, open <i>Safari > Preferences > Notifications</i> and select <b>Allow</b> for PBS NewsHour."),
navNotifyElem.removeClass(navNotifySubbedClass),navNotifyBubbleElem.find("button").hide()}};});
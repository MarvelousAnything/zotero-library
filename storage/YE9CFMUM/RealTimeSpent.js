var InitRealTimeSpentTracker = function(config) {
  var pageLoadedAt = Date.now();
  var idleThreashold = 10; // sec
  var idleTime = 0;
  var prevUserActionTime = Date.now();
  var prevTrackTime = Date.now();
  var prevScrollY = 0;
  var prevScrollX = 0;
  var trackTarget = config.options.trackRead.target;

  var eventHandler = function(event) {
    var r = getV(trackTarget);
    if (r.detail.documentIsVisible !== 'hidden' && r.detail.documentIsVisible !== 'prerender' && r.status.isInView) {
      var now = Date.now();
      var currentScrollY = window.parent.scrollY;
      var currentScrollX = window.parent.scrollX;
      if (currentScrollY === prevScrollY && currentScrollX === prevScrollX) {
        if ((now - prevUserActionTime)/1000 > idleThreashold) {
          idleTime = idleTime + (now - prevTrackTime);
        }
      } else {
        prevUserActionTime = now;
      }
      prevScrollX = currentScrollX;
      prevScrollY = currentScrollY;
      prevTrackTime = now;

      atlasTracking.setCustomObject('elapsed_time_on_reading', (now - pageLoadedAt - idleTime)/1000)
    }
  }

  if (config.options.trackRead.enable && config.options.trackRead.target) {
    window.parent.addEventListener('atlasVisibilityStatus', eventHandler, false);
  }

  var getV = function(t) {
    var tgr = {}; //targetRect
    try {
      tgr = t.getBoundingClientRect();
    } catch (e) {
      tgr = {};
    }

    var vph = window.parent.innerHeight; //viewportHeight
    var dch = window.parent.document.documentElement.scrollHeight; //documentHeight
    var div = window.parent.document.visibilityState || 'unknown'; //documentIsVisible
    var dvt = 'pageYOffset' in window.parent ?
      window.parent.pageYOffset :
      (window.parent.document.documentElement || window.parent.document.body.parentNode || window.parent.document.body).scrollTop; //documentVisibleTop
    var dvb = dvt + vph; //documentVisibleBottom
    var tgh = tgr.height; //targetHeight
    var tmt = tgr.top <= 0 ? 0 : tgr.top; //targetMarginTop
    var tmb = (tgr.bottom - vph) * -1 <= 0 ? 0 : (tgr.bottom - vph) * -1; //targetMarginBottom
    var dsu = dvb; //documentScrollUntil
    var dsr = dvb / dch; //documentScrollRate

    var tvt = null; //targetVisibleTop
    var tvb = null; //targetVisibleBottom
    var tsu = 0; //targetScrollUntil
    var tsr = 0; //targetScrollRate
    var tvr = 0; //targetViewableRate
    var iiv = false; //isInView
    var loc = null; //location

    if (tgr.top >= 0 && tgr.bottom > vph && tgr.top >= vph) {
      // pre
      tvt = null;
      tvb = null;
      iiv = false;
      loc = 'pre';
    } else if (tgr.top >= 0 && tgr.bottom > vph && tgr.top < vph) {
      // top
      tvt = 0;
      tvb = vph - tgr.top;
      iiv = true;
      loc = 'top';
    } else if (tgr.top < 0 && tgr.bottom > vph) {
      // middle
      tvt = tgr.top * -1;
      tvb = tvt + vph;
      iiv = true;
      loc = 'middle';
    } else if (tgr.top >= 0 && tgr.bottom <= vph) {
      // all in
      tvt = 0;
      tvb = tgh;
      iiv = true;
      loc = 'all';
    } else if (tgr.top < 0 && tgr.bottom >= 0 && tgr.bottom <= vph) {
      // bottom
      tvt = tgh + tgr.top;
      tvb = tgh;
      iiv = true;
      loc = 'bottom';
    } else if (tgr.top < 0 && tgr.bottom < 0) {
      // post
      tvt = null;
      tvb = null;
      iiv = false;
      loc = 'post';
    } else {
      iiv = false;
      loc = 'unknown';
    }

    tvr = (tvb - tvt) / tgh;
    tsu = tvb;
    tsr = tsu / tgh;

    return {
      'detail': {
        'viewportHeight': vph,
        'documentHeight': dch,
        'documentIsVisible': div,
        'documentVisibleTop': dvt,
        'documentVisibleBottom': dvb,
        'targetHeight': tgh,
        'targetVisibleTop': tvt,
        'targetVisibleBottom': tvb,
        'targetMarginTop': tmt,
        'targetMarginBottom': tmb,
        'targetScrollUntil': tsu,
        'targetScrollRate': tsr,
        'targetViewableRate': tvr,
        'documentScrollUntil': dsu,
        'documentScrollRate': dsr
      },
      'status': {
        'isInView': iiv,
        'location': loc
      }
    }
  }
};
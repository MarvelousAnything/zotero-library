(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * Partner: Namespace used to initialize advertising
   * Sets up:
   * - Googletag with global settings
   * - Ad Logger
   * - Prebid.js
   * - IAS
   * @example
   * Partner.init();
   */
  var Partner = {
    init: function init() {
      var _this = this;

      // Abort if ads should not be shown
      var utils = ga_data.utils;
      if (utils.getNested(ga_data, 'route', 'noAdvertising') || utils.getUrlParamValue('no_ads') || utils.isAdFreeExperience()) return;
      window.ads = window.ads || {}; // GDPR check, will halt everything until we are certain

      utils.isEUuserRestrictedAccess().then(function (tcData) {
        return _this.setupFramework(tcData);
      });
    },
    setupFramework: function setupFramework(tcData) {
      var _this2 = this;

      var getNested = ga_data.utils.getNested;
      var gdprApplies = this.gdprApplies = tcData.gdprApplies;
      var tcString = this.tcString = tcData.tcString;
      var choices = this.choices = window.ga_privacy && window.ga_privacy.choices;
      this.consentTargetBarrier = new ga_data.utils.Deferred();

      if (gdprApplies) {
        if (this.needConsent === undefined) {
          window.addEventListener('consent-update', function (data) {
            return _this2.onConsentUpdate(data);
          }, {
            passive: true
          });
        }

        var adChoice = window.ga_privacy.ads;

        if (tcString && (choices.functional || adChoice === 'personalized' || adChoice === 'non-personalized')) {
          this.needConsent = false; // display ad containers

          document.body.classList.remove('partner-placements-inactive');

          if (choices.targeting || adChoice === 'non-personalized') {
            this.consentTargetBarrier.resolve();
          }
        } else {
          this.needConsent = true; // hide ad containers

          document.body.classList.add('partner-placements-inactive'); // can't go any further, GDPR applies and we don't have the right consent

          return;
        }
      } else {
        this.consentTargetBarrier.resolve();
      } // Get the U.S. Privacy String


      if (!gdprApplies) {
        if (typeof window.__uspapi === 'function') {
          window.__uspapi('getUSPData', 1, function (res) {
            var uspString = res.uspString;
            _this2.uspString = uspString;

            if (uspString === '1YYY') {
              _this2._setPageTargeting({
                'privacy': 'ccpa-out'
              });
            }
          });
        } else {
          this.uspString = '1---';
        }
      } // Barriers to making an ad call


      this.adCallPromises = []; // Setup logging

      this.adLoggerEnabled = !!ga_data.utils.getUrlParamValue('usat_console');
      this.adLogger('Partner Framework Initializing');
      this.platform = this._inMobileEnvironment() ? 'mobile' : 'desktop'; // Set Bucket for experiments

      this.setupExperiment(); // Set Global Targeting

      this.setGlobalTargeting();
      this.setGlobalExclusionTargeting(); // Setup Brandlock and our tagless handler

      window.ads.tagless = {
        push: function push(slot) {
          return _this2.fireTagless(slot);
        }
      };
      this.setupBrandLock(); // Set up GPT

      this.adCallPromises.push(this.setupGoogletag());
      this.disableBidding = !!getNested(window, 'ga_data', 'route', 'disableBidding');
      this.consentTargetBarrier.promise.then(function () {
        // Set up google propensity cookie
        if (!_this2.hasUSPrivacy()) {
          _this2.getPtSScore();
        } // Set up prebid


        if (_this2.prebidEnabled()) {
          var index = getNested(ga_data, 'site', 'ads', 'prebid', _this2.platform, 'indexExchange') || {};
          ga_data.ads.prebidMetricEvents = [];
          ga_data.ads.isKeepAlive = 'keepalive' in new Request('');
          _this2.bidFireInterval = setInterval(_this2.firePrebidMetricPixel, 60000);

          if ((index.enabled || ga_data.utils.getUrlParamValue('ix_debug')) && index.identityLib.scriptUrl) {
            _this2.setupIxIdentityLib(index.identityLib.scriptUrl);
          }

          _this2.setupPrebidJS(); // Setup Rivr Tag


          _this2.rivrConfig = getNested(ga_data, 'site', 'ads', 'prebid', 'rivr') || {};

          if (_this2.rivrConfig && (_this2.rivrConfig.enabled || ga_data.utils.getUrlParamValue('rivr'))) {
            _this2.setupRivr();
          }
        } // Set up APS (Amazon Bidding)


        if (_this2.apsEnabled()) {
          _this2.setupAPS();
        } // Set up IAS


        if (_this2.iasEnabled()) {
          _this2.setupIAS();
        } // deal with GDPR timinig issues


        if (_this2.needConsent === false) {
          _this2.onPageReady();
        }
      }); // Set up Confiant

      if (this.confiantEnabled()) {
        this.setupConfiant();
      } // Add listener for CP targeting, if we are embedded


      this._onPostMessageFn = function (e) {
        return _this2._onPostMessage(e);
      };

      window.addEventListener('message', this._onPostMessageFn);
      window.requestAnimationFrame(function () {
        if (document.readyState === 'complete') {
          _this2.onPageReady();
        } else {
          // DOM isn't ready let's listen for when it's complete
          document.addEventListener('readystatechange', function (e) {
            var readyState = e.target.readyState;

            _this2.adLogger('readyState', readyState);

            if (readyState === 'complete') {
              _this2.onPageReady();
            }
          });
        }
      }); // Listen for the earliest point at which all elements present on page load have registered themselves

      this.slotReady = function () {
        return _this2._onSlotReady();
      };

      window.addEventListener('slotReady', this.slotReady);
    },
    onConsentUpdate: function onConsentUpdate(data) {
      var tcData = data && data.detail || {};

      if (this.needConsent && tcData.gdprApplies !== undefined) {
        this.setupFramework(tcData);
      } else {
        this.choices = window.ga_privacy.choices;

        if (this.choices.targeting || window.ga_privacy.ads === 'personalized') {
          this.consentTargetBarrier.resolve();
        }
      }
    },
    _onSlotReady: function _onSlotReady() {
      var _this3 = this;

      var timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'loadTimeoutInitial') || 1000;

      if (this.slotReadyTO) {
        clearTimeout(this.slotReadyTO);
        timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'loadTimeoutSubsequent') || 300;
      }

      this.slotReadyTO = setTimeout(function () {
        return _this3.onPageReady();
      }, timeout);
    },
    onPageReady: function onPageReady() {
      var _this4 = this;

      /*
       * Multiple points of entry to this function, let's make sure:
       *     • we haven't been here before
       */
      if (this.initialized) {
        return false;
      }

      this.initialized = true;
      window.removeEventListener('slotReady', this.slotReady);
      this.adLogger('onPageReady()');
      this.consentTargetBarrier.promise.then(function () {
        if (_this4.prebidEnabled()) _this4.getPrebid();
        if (_this4.apsEnabled()) _this4.getAPS();
        if (_this4.iasEnabled()) _this4.getIAS();
      });
      Promise.all(this.adCallPromises).then(function () {
        return _this4.firstCalls();
      }).catch(function (e) {
        _this4.firstCalls();

        _this4.adLogger('A partner failed to setup, moving forward with ad calls without them.');

        if (window.newrelic) window.newrelic.noticeError(e);
      });
      var blockThroughConfig = ga_data.utils.getNested(ga_data, 'site', 'ads', 'blockThrough') || {};

      if ((blockThroughConfig.enabled || ga_data.utils.getUrlParamValue('blockThrough')) && blockThroughConfig.scriptUrl) {
        this.testAdBlocking(function () {
          return ga_data.utils.loadScript(blockThroughConfig.scriptUrl, 'blockthrough');
        });
      }
    },
    firstCalls: function firstCalls() {
      var _this5 = this;

      var userguid = ga_data.utils.readCookie('gup_anonid') || '',
          kuid = localStorage && localStorage.getItem('kxgannett_user') || '';

      this._setPageTargeting({
        userguid: userguid,
        kuid: kuid
      });

      this.adLogger('First Call');
      ga_data.ads = ga_data.ads || {};
      ga_data.ads.displayQueue = ga_data.ads.displayQueue || [];
      ga_data.ads.displayQueue.forEach(function (el) {
        return _this5.displayAd(el);
      });
      ga_data.ads.displayQueue = {
        push: function push(el) {
          return _this5.displayAd(el);
        }
      };
      ga_data.ads.refreshQueue = ga_data.ads.refreshQueue || [];
      ga_data.ads.refreshQueue.forEach(function (el) {
        return _this5.refreshAd(el);
      });
      ga_data.ads.refreshQueue = {
        push: function push(el) {
          return _this5.refreshAd(el);
        }
      };
    },
    testAdBlocking: function testAdBlocking(callback) {
      var testDiv = document.createElement('div'),
          container = document.body;
      testDiv.className = 'ad-slot playAds1 leaderboard-container partner'; // trc-content-sponsoredUB

      testDiv.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:2px;height:2px';
      container.appendChild(testDiv);
      var bcr = testDiv.getBoundingClientRect(),
          adBlockEnabled = bcr.top === 0 && bcr.bottom === 0 && bcr.width === 0 && bcr.height === 0;
      container.removeChild(testDiv);

      if (adBlockEnabled) {
        callback();
      }
    },
    adLogger: function adLogger(msg) {
      var elapsed,
          args = Array.prototype.slice.call(arguments, 1);

      if (this.adLoggerEnabled && window.console) {
        var _console;

        elapsed = (performance.now() / 1000).toFixed(3);
        msg = "AD FRAMEWORK : ".concat(elapsed, "s : ").concat(msg);

        (_console = console).info.apply(_console, [msg].concat(_toConsumableArray(args))); // eslint-disable-line no-console

      }
    },
    setupGoogletag: function setupGoogletag() {
      var _this6 = this;

      var scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'dfp', 'scriptUrl') || 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      return ga_data.utils.loadScript(scriptUrl, 'googletagservicesScript').catch(function () {
        window.ads.scriptFailed = true;
      }).then(function () {
        return _this6.onGoogletagLoaded();
      });
    },
    onGoogletagLoaded: function onGoogletagLoaded() {
      var _this7 = this;

      // Global settings
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function () {
        window.googletag.pubads().setTagForChildDirectedTreatment(0);
        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();
        var gup_anonid = ga_data.utils.readCookie('gup_anonid') || '';

        if (gup_anonid) {
          window.googletag.pubads().setPublisherProvidedId(gup_anonid);
        }

        if (!_this7.gdprApplies && ga_data.utils && typeof ga_data.utils.flushTcfStub === 'function') {
          ga_data.utils.flushTcfStub();
        }
      });
    },
    setupExperiment: function setupExperiment() {
      var _this8 = this;

      var name = 'ad-control';
      var bucket = Math.random() * 1000;
      window.ga_data.ads = window.ga_data.ads || {};
      window.ga_data.ads.bucket = bucket;
      window.ga_data.ads.experiment = {
        name: name
      };
      var utils = window.ga_data.utils;
      var experiments = utils.getNested(window.ga_data, 'site', 'ads', 'experiments') || []; // Using some, so we can break when we found an experiment (there should only be one match)

      experiments.some(function (experiment) {
        if (bucket >= experiment.bucketStart && bucket < experiment.bucketEnd) {
          name = experiment.name; // addition work for omitting one bidder

          if (experiment.flag === 'omitOne') {
            var bidder = _this8.chooseOneBidder();

            experiment.params = bidder;
            name = "".concat(name, "-").concat(bidder);
            experiment.name = name;
            var disbledBidder = {};
            disbledBidder[bidder] = {
              enabled: false
            };
            experiment.override = {
              prebid: {
                desktop: disbledBidder,
                mobile: disbledBidder
              }
            };
          } // We have an active experiment here!


          window.ga_data.ads.experiment = experiment;

          if (_typeof(experiment.override) === 'object') {
            // override any settings for our ad object
            var adSettings = Object.assign({}, window.ga_data.site.ads);
            utils.deepMerge(adSettings, experiment.override);
            window.ga_data.site.ads = adSettings;
          } // break array iteration


          return true;
        }
      }); // Set our current varient as targeting

      this.varients = [name];
    },
    chooseOneBidder: function chooseOneBidder() {
      var bidders = window.ga_data.utils.getNested(window.ga_data, 'site', 'ads', 'prebid', this.platform);
      var bidderClean = Object.keys(bidders).filter(function (bidder) {
        // remove keys that are not bidders
        return ['enabled', 'timeout', 'sizes', 'staq'].indexOf(bidder) === -1;
      });
      return bidderClean[Math.floor(Math.random() * bidderClean.length)];
    },
    getNavigationType: function getNavigationType() {
      var qp = ga_data.utils.getUrlParamValue('navigationtype');

      if (qp) {
        return qp;
      }

      if (ga_data.utils.readCookie('page_refresh')) {
        ga_data.utils.removeCookie('page_refresh');
        var hiddenAttr = '';

        if (typeof document.hidden !== 'undefined') {
          hiddenAttr = 'hidden';
        } else if (typeof document.msHidden !== 'undefined') {
          hiddenAttr = 'msHidden';
        } else if (typeof document.webkitHidden !== 'undefined') {
          hiddenAttr = 'webkitHidden';
        }

        return !document[hiddenAttr] ? 'pagerefresh-on' : 'pagerefresh-off';
      }

      if (document.referrer.indexOf(document.location.host) !== -1) {
        return 'internal';
      }

      if (!document.referrer) {
        return 'direct';
      }

      return 'external';
    },
    getUtm: function getUtm() {
      var getParam = ga_data.utils.getUrlParamValue,
          source = getParam('itm_source') || '',
          medium = getParam('itm_medium') || '',
          campaign = getParam('itm_campaign') || '';
      return "".concat(source, "|").concat(medium, "|").concat(campaign);
    },
    getFront: function getFront() {
      var lastFront = '';
      var pageType = ga_data.utils.getNested(ga_data, 'route', 'basePageType');
      var sectionName = ga_data.utils.getNested(ga_data, 'route', 'sectionName');

      if (pageType.includes('front') || pageType.includes('franchise page')) {
        // If we are on a front type page we'll store that information
        var taxonomy = pageType.includes('front') ? 'cst' : 'ssts';
        var cstParts = (ga_data.utils.getNested(ga_data, 'route', taxonomy) || '').split('/');
        var currentFront = cstParts.splice(-1).pop();

        if (currentFront === 'main') {
          currentFront = cstParts.splice(-1).pop();
        }

        ga_data.utils.writeCookie('last_front', currentFront, 0);
      } else {
        lastFront = sectionName.includes('sponsor-story') ? '' : ga_data.utils.readCookie('last_front');
        ga_data.utils.removeCookie('last_front');
      }

      return lastFront;
    },
    getFeatures: function getFeatures() {
      var features = [];
      var overrides = ga_data.utils.getUrlParamValue('features');

      if (overrides) {
        return overrides.split(',');
      }

      if (window.chrome) {
        features.push('noautoplay');
      }

      var nav = navigator,
          ni = nav.connection,
          niEffectiveType = ni && ni.effectiveType;

      if (ni && ni.saveData || niEffectiveType && niEffectiveType !== '4g' || nav.deviceMemory < 4 || !!window.MSInputMethodContext && !!document.documentMode) {
        features.push('low');
      }

      if (document.querySelector('.big-story-container')) {
        features.push('big-story');
      }

      return features;
    },
    setGlobalTargeting: function setGlobalTargeting() {
      var getNested = ga_data.utils.getNested,
          getParam = ga_data.utils.getUrlParamValue,
          routeConfig = ga_data.route,
          siteConfig = ga_data.site,
          cstParts = getNested(routeConfig, 'cst').split('/'),
          ssts = getNested(routeConfig, 'ssts') || '',
          sstsParts = ssts.split('/'),
          keywords = routeConfig.keywords || [],
          breakingNewsEnabled = getNested(siteConfig, 'ads', 'breakingNews', 'enabled') || false,
          navigationType = this.getNavigationType(),
          pageType = this.mapPageType(routeConfig.basePageType),
          usatl = getParam('usatl'),
          siteName = getNested(siteConfig, 'awsSiteName') || 'usat',
          categoryValue = this.getCategoryValue(routeConfig);
      var personalTargeting = {},
          globalTargeting = {
        aam_props: "".concat(getParam('sitelabel') || 'universal', "|").concat(getParam('platform') || this._inMobileEnvironment() ? 'mobileweb' : 'desktop', "|").concat(routeConfig.basePageType),
        // Omniture props 26|4|16
        adlabel: usatl ? usatl.toString() : null,
        alerttype: breakingNewsEnabled ? routeConfig.isBreakingNews ? 'breaking' : 'none' : '',
        build: getParam('build') ? [getNested(siteConfig, 'build'), getParam('build')] : [getNested(siteConfig, 'build'), getNested(siteConfig, 'theme')],
        categoryvalue: categoryValue,
        content_category: this._stringifyTopics(routeConfig.adWords),
        contentid: routeConfig.contentId,
        cst_section: cstParts[0] || '',
        cst_subsection: cstParts[1] || '',
        cst_topic: cstParts[2] || '',
        features: this.getFeatures(),
        front: this.getFront(),
        gnt_sb: ga_data.utils.readCookie('gnt_sb') || '',
        gnt_ub: ga_data.utils.readCookie('gnt_ub') || '',
        navigationType: navigationType,
        origin: getNested(routeConfig, 'sourceOrganization', 'name') || '',
        pageType: pageType,
        privacy: this.getPrivacyValue(),
        property: siteName,
        referrer: (document.referrer.match(/https?:\/\/[:\w.-]+/) || [''])[0],
        series: routeConfig.series || '',
        sitepage: "".concat(siteName, "/").concat(ssts),
        ssts_section: sstsParts[0] || '',
        ssts_subsection: sstsParts[1] || '',
        ssts_subtopic: sstsParts[3] || '',
        ssts_topic: sstsParts[2] || '',
        subsection: routeConfig.subsection || '',
        topic: this._stringifyTopics(keywords),
        variant: this.varients
      };

      if (!this.gdprApplies || this.gdprApplies && this.choices.targeting === true) {
        personalTargeting = {
          ksg: (localStorage && localStorage.getItem('kxgannett_segs') || '').split(','),
          kuid: localStorage && localStorage.getItem('kxgannett_user') || '',
          ss: this.getSSInfo(),
          swgt: this.getPropensitySubscribe(),
          user_traits: this.getUserTraits(),
          user_gsp: this.user_gsp,
          userguid: ga_data.utils.readCookie('gup_anonid') || '',
          utm_props: this.getUtm()
        };
      }

      globalTargeting = ga_data.globalAdTargeting = Object.assign(globalTargeting, personalTargeting);
      window.ads.globalTargeting = globalTargeting;

      this._setPageTargeting(globalTargeting);

      this._markTargeting(globalTargeting);
    },
    _stringifyTopics: function _stringifyTopics(tagsNameArray) {
      return tagsNameArray && tagsNameArray.length ? tagsNameArray.join(',').toLowerCase().trim().replace(/,\s+/g, ',').replace(/[^a-z0-9\s-,]/g, '').replace(/[\s-]+/g, '-') : '';
    },
    _onPostMessage: function _onPostMessage(e) {
      var data = e.data,
          overwrite = ['adlabel', 'navigationType', 'referrer', 'utm_props'],
          addTo = ['front', 'series', 'subsection', 'topic', 'property', 'cst_section', 'cst_subsection', 'cst_topic', 'ssts_section', 'ssts_subsection', 'ssts_topic', 'ssts_subtopic', 'alerttype', 'origin'];

      if (_typeof(data) === 'object' && data.contentid) {
        window.removeEventListener('message', this._onPostMessageFn);
        var targeting = ga_data.globalAdTargeting;

        for (var key in targeting) {
          if (targeting.hasOwnProperty(key)) {
            if (data[key] && typeof data[key] === 'string' && data[key].toLowerCase() !== 'na') {
              if (overwrite.indexOf(key) !== -1) {
                targeting[key] = data[key];
              } else if (addTo.indexOf(key) !== -1) {
                var val = targeting[key];

                if (typeof val === 'string') {
                  targeting[key] = [val, data[key]];
                } else if (Array.isArray(val)) {
                  targeting[key] = val.concat(data[key]);
                }
              }
            }
          }
        } // Update page targeting with ingested values from CP page we are embedded in


        this._setPageTargeting(targeting);
      }
    },
    getPrivacyValue: function getPrivacyValue() {
      var gpc = navigator.globalPrivacyControl;
      var privacy = ['NA'];

      if (this.uspString === '1YYY') {
        privacy = ['ccpa-out'];
      } else if (this.gdprApplies) {
        if (this.choices.targeting) {
          privacy = ['gdpr-in'];
        } else {
          privacy = ['gdpr-out'];
        }
      }

      if (gpc !== undefined) {
        privacy.push(gpc ? 'gpc-out' : 'gpc');
      }

      return privacy;
    },

    /**
     * Retrieves different categories
     */
    getCategoryValue: function getCategoryValue(routeConfig) {
      var categoryValue = [];

      if (routeConfig.simpleTarget && routeConfig.simpleTarget.length) {
        categoryValue = categoryValue.concat(routeConfig.simpleTarget);
      }

      if (routeConfig.simpleExclusion && routeConfig.simpleExclusion.length) {
        categoryValue = categoryValue.concat(routeConfig.simpleExclusion);
      }

      if (document.querySelector('.big-story-container')) {
        categoryValue.push('disasters');
      }

      return _toConsumableArray(new Set(categoryValue));
    },

    /**
     * Retrieves different user traits
     */
    getUserTraits: function getUserTraits() {
      var traits = [],
          camEid = ga_data.utils.readCookie('gnt_eid') || ga_data.utils.readCookie('cam_eid') || '',
          insights = this.getUserInsights(),
          camExperienceId = ga_data.utils.getNested(insights, 'cam-experience', 'id'),
          qqArr = insights.QQ_ID; //Check for caucus segment

      if (camEid) {
        traits.push(camEid);
      } //Check for cam experience ID


      if (camExperienceId) {
        traits.push(camExperienceId);
      }

      if (insights.LongAnon) {
        traits.push('LongAnon');
      }

      if (Array.isArray(qqArr)) {
        traits = traits.concat(qqArr);
      }

      return _toConsumableArray(new Set(traits));
    },

    /**
     * Retrieves the current GUP Insights object from local storage.
     */
    getUserInsights: function getUserInsights() {
      var insights;

      try {
        insights = JSON.parse(window.localStorage && window.localStorage.getItem('user_insights'));
      } catch (e) {
        if (window.newrelic) window.newrelic.noticeError(e);
      }

      return insights || {};
    },
    getSSInfo: function getSSInfo() {
      if (!this.ss) {
        // lets check the userinfo for details
        try {
          var gupUserInfo = JSON.parse(window.localStorage && window.localStorage.getItem('gupUserInfo')) || {};
          var license = gupUserInfo.response.user.userLicenseType;

          if (license) {
            return license.split('_').map(function (pair) {
              return pair.substring(0, 3);
            }).join('_');
          }
        } catch (e) {// gupUserInfo not a json string
        } // If there are no details in the userinfo object, let's try the last known cookie to see if they are logged out


        var ss = 'non';

        try {
          var last = JSON.parse(decodeURIComponent(ga_data.utils.readCookie('gup_lng')));

          if (last && last.auth === false) {
            if (last['ret-sub'] === true) {
              ss = 'sub_off';
            } else if (last['ret-usr'] === true) {
              ss = 'reg_off';
            }
          }
        } catch (e) {// gup_lng not a json string
        }

        this.ss = ss;
      }

      return this.ss;
    },

    /**
     * Get gupUserInfo from localStorage for google propensity
     */
    getPropensitySubscribe: function getPropensitySubscribe() {
      var gupUserInfo = {},
          propensitySubscribe,
          result = [];

      try {
        gupUserInfo = JSON.parse(window.localStorage && window.localStorage.getItem('gupUserInfo')) || {};
        propensitySubscribe = gupUserInfo.response.propensitySubscribe;
        result = Object.keys(propensitySubscribe).find(function (key) {
          return propensitySubscribe[key];
        });
      } catch (e) {// gupUserInfo not a json string
      }

      return result ? result : '';
    },

    /**
     * Get user_gsp from cookies for google propensity
     */
    getPtSScore: function getPtSScore() {
      var _this9 = this;

      this.user_gsp = ga_data.utils.readCookie('user_gsp');

      if (!this.user_gsp && ['non', 'reg_no_sub', 'reg_off'].indexOf(this.getSSInfo()) > -1) {
        var dfp = ga_data.utils.getNested(ga_data, 'site', 'ads', 'dfp') || {},
            accId = ga_data.utils.getUrlParamValue('usatai') || dfp.accountId,
            iu = encodeURIComponent("/".concat(accId, "/swg/pts_").concat(dfp.accountName)),
            sz = encodeURIComponent('1x1'),
            ref = encodeURIComponent(document.referrer),
            gadsvalue = encodeURIComponent(ga_data.utils.readCookie('__gads')),
            c = Math.floor(Math.random() * 1e15),
            tz = -new Date().getTimezoneOffset(),
            gdprString = this.gdprApplies ? "&gdpr=1&gdpr_consent=".concat(this.tcString) : '',
            adTag = "https://securepubads.g.doubleclick.net/gampad/adx?iu=".concat(iu, "&sz=").concat(sz, "&ref=").concat(ref, "&cookie=").concat(gadsvalue, "&c=").concat(c, "&tile=1&u_tz=").concat(tz).concat(gdprString);
        ga_data.utils.getJSON(adTag).then(function (res) {
          var user_gsp = res.value;
          _this9.user_gsp = user_gsp;
          ga_data.utils.writeCookie('user_gsp', user_gsp, 30, true, 'None');

          _this9._setPageTargeting({
            user_gsp: user_gsp
          });
        }).catch(function (error) {
          if (window.newrelic) window.newrelic.noticeError(error);
        });
      }
    },
    setGlobalExclusionTargeting: function setGlobalExclusionTargeting(pubads) {
      var pageTags,
          getNested = ga_data.utils.getNested,
          keywords = getNested(ga_data, 'route', 'seoKeywords') || '',
          // Should always be a string, but have seen arrays from Presto
      taxonomy = getNested(ga_data, 'route', 'keywords') || '',
          // Should always be a string, but have seen arrays from Presto
      categories = getNested(ga_data.site, 'ads', 'exclusionCategories') || []; // Added checks to make sure keywords and taxonomy are strings

      keywords = Array.isArray(keywords) ? keywords.join(',') : keywords;
      taxonomy = Array.isArray(taxonomy) ? taxonomy.join(',') : taxonomy;
      pageTags = "".concat(keywords, ",").concat(taxonomy).split(',').map(function (tag) {
        return tag.toLowerCase().trim();
      });
      categories.forEach(function (category) {
        if (!category) return;
        var tags = category.tags.join(',').toLowerCase().split(','),
            matched = tags.filter(function (tag) {
          return pageTags.indexOf(tag) > -1;
        });

        if (matched.length) {
          window.googletag.cmd.push(function () {
            window.googletag.pubads().setCategoryExclusion(category.name);
          });
        }
      });
    },
    _setPageTargeting: function _setPageTargeting(targeting) {
      window.googletag = window.googletag || {
        cmd: []
      };
      window.googletag.cmd.push(function () {
        var key,
            value,
            pubads = window.googletag.pubads();

        for (key in targeting) {
          if (targeting.hasOwnProperty(key)) {
            value = targeting[key];

            if (!(typeof value === 'undefined' || value === null || value === '' || Array.isArray(value) && !value.length)) {
              pubads.setTargeting(key, String(value));
            }
          }
        }
      });
    },
    _markTargeting: function _markTargeting(targeting) {
      if (window.newrelic && targeting.pageType === 'story' && (!targeting.topic || targeting.topic === 'NA')) {
        window.newrelic.addPageAction('advertisingSuspiciousTargeting', {
          mediaType: 'display',
          build: 'universal web',
          experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name'),
          targeting: JSON.stringify(targeting)
        });
      }
    },
    mapPageType: function mapPageType(pageType) {
      var type = pageType;

      switch (pageType) {
        case 'homefront':
          type = 'home-front';
          break;

        case 'story pages':
          type = 'story';
          break;

        case 'section front':
          type = 'section-front';
          break;

        case 'sub-section front':
          type = 'subsection-front';
          break;

        case 'vertical asset gallery':
          type = 'gallery-vertical';
          break;

        case 'video':
          type = 'video-asset';
          break;

        case 'topic front':
        case 'sub-topic front':
          type = 'topic';
          break;
      }

      return type;
    },
    apsEnabled: function apsEnabled() {
      var apsDebug = !!ga_data.utils.getUrlParamValue('aps_debug');
      return (apsDebug || ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'enabled')) && !this.disableBidding;
    },
    setupAPS: function setupAPS() {
      var _this10 = this;

      var scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'scriptUrl') || 'https://c.amazon-adsystem.com/aax2/apstag.js';
      this.apsLoaded = ga_data.utils.loadScript(scriptUrl, 'apsScript').catch(function () {
        window.ads.scriptFailed = true;
      }).then(function () {
        return _this10.onAPSLoaded();
      });
    },
    onAPSLoaded: function onAPSLoaded() {
      var config = {
        pubID: ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'pubid'),
        adServer: 'googletag',
        videoAdServer: 'DFP',
        bidTimeout: ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'timeout'),
        deals: true
      };

      if (this.uspString) {
        config.params = {
          us_privacy: this.uspString
        };
      }

      window.apstag = window.apstag || {};

      if (window.apstag.init) {
        window.apstag.init(config);
      }
    },
    getAPS: function getAPS() {
      var _this11 = this;

      this.apsLoaded.then(function () {
        var timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'timeout') || 1500;
        ga_data.ads = ga_data.ads || {};
        ga_data.ads.apsAdUnits = ga_data.ads.apsAdUnits || [];
        var els = ga_data.ads.apsAdUnits;

        _this11.adLogger('getAPS()', els); // Replace queue


        ga_data.ads.apsAdUnits = {
          push: function push(el) {
            return _this11.pushToAPS([el], timeout);
          }
        }; // Make first request with queued units

        if (els.length) {
          _this11.pushToAPS(els, timeout);
        }
      });
    },
    pushToAPS: function pushToAPS(els, timeout) {
      var _this12 = this;

      this.adCallPromises.push(new Promise(function (resolve, reject) {
        _this12.adLogger('Requesting Bids from Amazon'); // Construct APS slots from elements


        var slots = [];
        els.forEach(function (el) {
          return slots.push(el.apsUnit);
        }); // Push bid request to apstag

        window.apstag = window.apstag || {};

        if (window.apstag.fetchBids && slots.length) {
          window.apstag.fetchBids({
            slots: slots,
            timeout: timeout
          }, function (bids) {
            _this12.apsBidsBack(bids);

            _this12.notifyReturned('apsBids', els, bids);

            resolve();
          });
        } else {
          reject();
        } // Timeout


        setTimeout(function () {
          reject();
        }, timeout); // Prebid reached cutoff, cancel our request to aps

        window.addEventListener('prebidcutoff', reject);
      }).catch(function () {
        _this12.adLogger("APS timeout of ".concat(timeout, "ms reached"), els);

        _this12.notifyReturned('apsBids', els);
      }));
    },
    apsBidsBack: function apsBidsBack(bids) {
      this.adLogger('apsBidsBack()', bids);
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function () {
        window.apstag.setDisplayBids();
      });
    },
    confiantEnabled: function confiantEnabled() {
      var debugEnabled = ga_data.utils.getUrlParamValue('confiant_debug');
      var configEnabled = ga_data.utils.getNested(ga_data, 'site', 'ads', 'confiant', 'enabled');
      var inIframe = ga_data.utils.inIframe();
      return !inIframe && (debugEnabled || configEnabled);
    },
    setupConfiant: function setupConfiant() {
      var config = ga_data.utils.getNested(ga_data, 'site', 'ads', 'confiant') || {};
      var scriptUrl = ga_data.utils.getNested(config, 'scriptUrl') || 'https://confiant-integrations.global.ssl.fastly.net/r5TdgVvkbv-PeaJCKaQfCh5Xsto/gpt_and_prebid/config.js';
      window.confiant = window.confiant || {};
      window.confiant.enable_integrations = ['gpt'];
      window.confiant.callback = this.confiantCallback;
      ga_data.utils.loadScript(scriptUrl, 'confiantScript');
    },
    confiantCallback: function confiantCallback(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
      // Log blocking event to NewRelic
      if (window.newrelic) {
        window.newrelic.addPageAction('advertisingConfiant', {
          blockingType: blockingType,
          blockingId: blockingId,
          isBlocked: isBlocked,
          wrapperId: wrapperId,
          tagId: tagId,
          experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name')
        });
      } // Refresh blocked ads to recapture revenue


      if (ga_data.utils.getNested(ga_data, 'site', 'ads', 'confiant', 'refreshBlocked')) {
        // DFP Slot element ID should be available at `impressionData.dfp.s` per Confiant documentation
        var slotId = ga_data.utils.getNested(impressionData, 'dfp', 's');

        if (slotId) {
          var els = ga_data.utils.getNested(window, 'ga_data', 'ads', 'units') || [];
          els.forEach(function (el) {
            if (el.slotId === slotId && typeof el.refresh === 'function') {
              el.refresh();
            }
          });
        }
      }
    },
    prebidEnabled: function prebidEnabled() {
      return ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', this.platform, 'enabled') && !this.disableBidding;
    },
    setupPrebidJS: function setupPrebidJS() {
      var _this13 = this;

      var scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', 'scriptUrl') || 'https://www.gannett-cdn.com/partner/vendor/pbjsandwich.min.js';
      ga_data.utils.loadScript(scriptUrl, 'prebidScript').catch(function () {
        window.ads.scriptFailed = true;
      }).then(function () {
        return _this13.onPrebidJSLoaded();
      });
    },
    onPrebidJSLoaded: function onPrebidJSLoaded() {
      var _this14 = this;

      var getNested = ga_data.utils.getNested,
          prebidConfigs = getNested(ga_data, 'site', 'ads', 'prebid') || {},
          config = prebidConfigs.config || {},
          staq = getNested(prebidConfigs, this.platform, 'staq') || {},
          liveintent = prebidConfigs.liveintent || {},
          identityLink = prebidConfigs.identityLink || {},
          gdpr = prebidConfigs.gdpr || {},
          priceGranularity = {
        buckets: [{
          precision: 2,
          min: 0,
          max: 10,
          increment: 0.01
        }, {
          precision: 2,
          min: 10,
          max: 20,
          increment: 0.05
        }, {
          precision: 2,
          min: 20,
          max: 50,
          increment: 0.10
        }, {
          precision: 2,
          min: 50,
          max: 75,
          increment: 0.25
        }, {
          precision: 2,
          min: 75,
          max: 100,
          increment: 0.50
        }, {
          precision: 2,
          min: 100,
          max: 200,
          increment: 1.00
        }, {
          precision: 2,
          min: 200,
          max: 480,
          increment: 5.00
        }]
      };
      window.pbjs = window.pbjs || {}; // Configure prebid

      window.pbjs.que = window.pbjs.que || [];
      window.pbjs.que.push(function () {
        var userIds = [],
            options = {
          consentManagement: {
            gdpr: {
              cmpApi: 'iab',
              allowAuctionWithoutConsent: false,
              timeout: gdpr.timeout || 10000,
              defaultGdprScope: true,
              rules: gdpr.rules || []
            },
            usp: {
              cmpApi: 'iab',
              timeout: config.uspapiTimeout || 0
            }
          },
          priceGranularity: priceGranularity,
          cache: {
            url: 'https://prebid.adnxs.com/pbc/v1/cache'
          },
          bidderSequence: config.bidderSequence || 'random',
          enableSendAllBids: false,
          usePrebidCache: true,
          maxRequestsPerOrigin: config.maxRequestsPerOrigin || 4,
          timeoutBuffer: config.timeoutBuffer || 200,
          userSync: {
            syncEnabled: true,
            filterSettings: {
              iframe: {
                bidders: config.syncBlacklistIframe || [],
                filter: 'exclude'
              },
              image: {
                bidders: config.syncBlacklistImage || [],
                filter: 'exclude'
              }
            },
            syncsPerBidder: config.syncsPerBidder || 5,
            syncDelay: config.syncDelay || 5000
          },
          rubicon: {
            singleRequest: true
          },
          useBidCache: !!config.useBidCache
        };
        var onEvent = window.pbjs.onEvent,
            bidWonStr = 'bidWon',
            bidResponseStr = 'bidResponse',
            bidTimeoutStr = 'bidTimeout',
            bidderErrorStr = 'bidderError',
            adRenderFailedStr = 'adRenderFailed',
            auctionEndStr = 'auctionEnd';

        if (liveintent.enabled || ga_data.utils.getUrlParamValue('liveintent')) {
          userIds.push({
            name: 'liveIntentId',
            params: {
              publisherId: liveintent.publisherId,
              identifiersToResolve: ['gup_anonid']
            },
            storage: {
              type: 'cookie',
              name: 'pbjs_li_nonid',
              expires: 1
            }
          });
        }

        if (identityLink.enabled || ga_data.utils.getUrlParamValue('identitylink')) {
          userIds.push({
            name: 'identityLink',
            params: {
              pid: identityLink.placementId
            },
            storage: {
              type: 'cookie',
              name: 'idl_env',
              expires: 7
            }
          });
        }

        if (userIds.length) options.userSync.userIds = userIds;
        window.pbjs.setConfig(options);
        window.pbjs.bidderSettings = {
          standard: {
            adserverTargeting: [{
              key: 'hb_ap',
              val: function val(bidResponse) {
                return bidResponse.pbCg;
              }
            }, {
              key: 'hb_pb',
              val: function val(bidResponse) {
                if (bidResponse.mediaType === 'video') {
                  return bidResponse.pbCg;
                }

                return '';
              }
            }, {
              key: 'hb_bidder',
              val: function val(bidResponse) {
                return bidResponse.bidderCode;
              }
            }, {
              key: 'hb_adid',
              val: function val(bidResponse) {
                return bidResponse.adId;
              }
            }, {
              key: 'hb_size',
              val: function val(bidResponse) {
                return bidResponse.size;
              }
            }, {
              key: 'hb_source',
              val: function val(bidResponse) {
                return bidResponse.source;
              }
            }, {
              key: 'hb_format',
              val: function val(bidResponse) {
                return bidResponse.mediaType;
              }
            }, {
              key: 'hb_ap_id',
              val: function val(bidResponse) {
                var env = _this14._inMobileEnvironment() ? 'mobile' : 'desktop';
                var adPointId = ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', env, bidResponse.bidderCode, 'adPointId');

                if (!adPointId && bidResponse.mediaType !== 'video' && window.newrelic) {
                  // Log an event to Newrelic so we can trigger alerts.
                  window.newrelic.addPageAction('advertisingError', {
                    build: 'universal web',
                    experiment: ga_data.utils.getNested(ga_data, 'ads', 'experiment', 'name'),
                    message: "AdPoint ID not found in config for bidder code: ".concat(bidResponse.bidderCode)
                  });
                }

                return adPointId;
              }
            }, {
              key: 'hb_deal',
              val: function val(bidResponse) {
                return bidResponse.dealId;
              }
            }]
          }
        };

        if (staq.enabled) {
          window.pbjs.enableAnalytics([{
            provider: 'staq',
            options: {
              host: document.location.hostname,
              url: staq.url,
              connId: staq.connId
            }
          }]);
        } // Add listeners for events


        onEvent(bidWonStr, function (bid) {
          if (window.newrelic) {
            window.newrelic.addPageAction('advertisingPrebidWon', {
              adId: bid.adId,
              adUnitCode: bid.adUnitCode,
              bidder: bid.bidder,
              cpm: bid.cpm,
              experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name'),
              mediaType: bid.mediaType,
              size: bid.size
            });
          }

          _this14.adLogger("Bid Won | Unit : ".concat(bid.adUnitCode, " | Bidder : ").concat(bid.bidder, " | CPM : ").concat(bid.cpm));

          _this14.collectPrebidMetricPixel(bid, bidWonStr);
        });
        onEvent(bidResponseStr, function (bid) {
          _this14.collectPrebidMetricPixel(bid, bidResponseStr);

          _this14.adLogger("Bid | Unit : ".concat(bid.adUnitCode, " | Bidder : ").concat(bid.bidder, " | Response : ").concat(bid.timeToRespond, " | CPM : ").concat(bid.cpm));
        });
        onEvent(bidTimeoutStr, function (bid) {
          return _this14.collectPrebidMetricPixel(bid, bidTimeoutStr);
        });
        onEvent(bidderErrorStr, function (bid) {
          return _this14.collectPrebidMetricPixel(bid, bidderErrorStr);
        });
        onEvent(adRenderFailedStr, function (bid) {
          _this14.collectPrebidMetricPixel(bid, adRenderFailedStr);

          _this14.adLogger("Bid Render Failed | Unit : ".concat(bid.adUnitCode, " | Bidder : ").concat(bid.bidder));
        });
        onEvent(auctionEndStr, function () {
          _this14.firePrebidMetricPixel();
        });
        document.addEventListener('visibilitychange', function () {
          if (document.visibilityState !== 'visible') {
            _this14.firePrebidMetricPixel();
          }
        }, false);
      });
    },
    getPrebid: function getPrebid() {
      var _this15 = this;

      ga_data.ads = ga_data.ads || {};
      ga_data.ads.pbAdUnits = ga_data.ads.pbAdUnits || [];
      var els = ga_data.ads.pbAdUnits;
      this.adLogger('getPrebid()', els); // Replace queue

      ga_data.ads.pbAdUnits = {
        batched: ga_data.ads.pbAdUnits.length,
        push: function push(el) {
          return _this15.pushToPrebid([el]);
        }
      }; // Make first request with any queued units

      if (els.length) {
        this.pushToPrebid(els);
      }
    },
    pushToPrebid: function pushToPrebid(els) {
      var _this16 = this;

      var config = ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', this.platform) || {};
      var timeout = config.timeout || 1500;
      var buffer = config.timeoutBuffer || 200; // Rejects with either no bid in the case of a timeout, or  bid in the case of cutoff being met

      this.adCallPromises.push(new Promise(function (resolve, reject) {
        // Construct ad unit codes from elements
        var adUnitCodes = [];
        els.forEach(function (el) {
          return adUnitCodes.push(el.slotId);
        }); // Push bid request to Prebid

        window.pbjs = window.pbjs || {};
        window.pbjs.que = window.pbjs.que || [];
        window.pbjs.que.push(function () {
          _this16.adLogger('Requesting Prebid Bids', els);

          var requestObj = {
            adUnitCodes: adUnitCodes,
            bidsBackHandler: function bidsBackHandler(bids) {
              _this16.notifyReturned('prebidBids', els, bids);

              resolve();

              _this16.adLogger('prebidBidsBack()', bids);
            },
            timeout: timeout
          };

          if (window.rivraddon && typeof window.rivraddon.adjustRequest === 'function') {
            var adjustedRequestedObj = window.rivraddon.adjustRequest(requestObj);
            window.pbjs.requestBids(adjustedRequestedObj);
          } else {
            window.pbjs.requestBids(requestObj);
          }
        }); // Timeout : base timeout + window.pbjs timeout buffer + allotment for script to load

        setTimeout(function () {
          reject(null);
        }, timeout + buffer + 500);
      }).catch(function (bid) {
        _this16.notifyReturned('prebidTimeout', els, bid);

        _this16.adLogger("Prebid timeout of ".concat(timeout, "ms reached"), els);
      }));
    },
    setupRivr: function setupRivr() {
      var _this17 = this;

      ga_data.utils.loadScript(this.rivrConfig.scriptUrl, 'rivraddon').then(function () {
        window.pbjs.que.push(function () {
          var args = {
            clientID: _this17.rivrConfig.clientId,
            authToken: _this17.rivrConfig.clientAuthToken,
            pbjs: window.pbjs
          };

          if (window.rivraddon) {
            window.rivraddon.enable(args);
          } else {
            window.RIVR_ARGS = args;
          }
        });
      });
    },
    iasEnabled: function iasEnabled() {
      var iasDebugEnabled = !!ga_data.utils.getUrlParamValue('ias_debug');
      return iasDebugEnabled || ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'enabled');
    },
    setupIAS: function setupIAS() {
      var _this18 = this;

      var scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'scriptUrl') || 'https://cdn.adsafeprotected.com/iasPET.1.js';
      ga_data.utils.loadScript(scriptUrl, 'iasScript').catch(function () {
        window.ads.scriptFailed = true;
      }).then(function () {
        _this18.setupIASADX();
      });
    },
    setupIASADX: function setupIASADX() {
      var scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'adxScriptUrl') || 'https://static.adsafeprotected.com/iasADX.js';
      ga_data.utils.loadScript(scriptUrl, 'adxScript').then(function () {
        window.__iasADX.start(ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'pubId'));
      });
    },
    getIAS: function getIAS() {
      var _this19 = this;

      var pubId = ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'pubId') || 0;
      var timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'timeout') || 1000;
      window.__iasPET = window.__iasPET || {};
      window.__iasPET.pubId = pubId;
      ga_data.ads = ga_data.ads || {};
      ga_data.ads.iasAdUnits = ga_data.ads.iasAdUnits || [];
      var els = ga_data.ads.iasAdUnits;
      this.adLogger('getIAS()', els); // Replace queue

      ga_data.ads.iasAdUnits = {
        push: function push(el) {
          return _this19.pushToIAS([el], timeout);
        }
      }; // Make first requests with any queued units

      if (els) {
        this.pushToIAS(els, timeout);
      }
    },
    pushToIAS: function pushToIAS(els, timeout) {
      var _this20 = this;

      this.adCallPromises.push(new Promise(function (resolve, reject) {
        // Construct IAS ad slots from elements
        var adSlots = [];
        els.forEach(function (el) {
          return adSlots.push(el.iasUnit);
        });

        _this20.adLogger('Requesting Targeting from IAS'); // Push request to IAS


        window.__iasPET = window.__iasPET || {};
        window.__iasPET.queue = window.__iasPET.queue || [];

        window.__iasPET.queue.push({
          adSlots: adSlots,
          dataHandler: function dataHandler() {
            _this20.iasReponseHandler();

            _this20.notifyReturned('ias', els);

            resolve();
          },
          timeout: timeout
        }); // Timeout


        setTimeout(function () {
          reject();
        }, timeout);
      }).catch(function () {
        _this20.adLogger("IAS timeout of ".concat(timeout, "ms reached"), els);

        _this20.notifyReturned('ias', els);
      }));
    },
    iasReponseHandler: function iasReponseHandler() {
      this.adLogger('IAS Returned');

      window.__iasPET.setTargetingForGPT();
    },
    displayAd: function displayAd(el) {
      Promise.all(this.adCallPromises).then(function () {
        if (typeof el.display === 'function') el.display();
      }).catch(function () {
        // Something failed, we still want to display with whatever we got
        if (typeof el.display === 'function') el.display();
      });
    },

    /**
     *
     * @param {String} service Which service to notify completion of
     * @param {Array}  units Array of elements to notify
     * @param {Array}  bids Passed to the `${service}Returned` callback
     */
    notifyReturned: function notifyReturned(service, units) {
      var bids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.adLogger("".concat(service, "Returned()"));
      units.forEach(function (el) {
        if (typeof el["".concat(service, "Returned")] === 'function') {
          el["".concat(service, "Returned")](bids);
        }
      });
    },
    refreshAd: function refreshAd(el) {
      Promise.all(this.adCallPromises).then(function () {
        if (typeof el.pubadsRefresh === 'function') el.pubadsRefresh();
      }).catch(function () {
        // Something failed, we still want to display with whatever we got
        if (typeof el.pubadsRefresh === 'function') el.pubadsRefresh();
      });
    },
    _inMobileEnvironment: function _inMobileEnvironment() {
      window.ga_data = window.ga_data || {};
      window.ga_data.ads = window.ga_data.ads || {};

      if (typeof window.ga_data.ads.inMobileEnvironment === 'undefined') {
        window.ga_data.ads.inMobileEnvironment = window.innerWidth < 768;
      }

      return window.ga_data.ads.inMobileEnvironment;
    },
    setupIxIdentityLib: function setupIxIdentityLib(scriptUrl) {
      ga_data.utils.loadScript(scriptUrl, 'identityLib');
    },
    fireTagless: function fireTagless(ad) {
      var _this21 = this;

      var base = 'https://securepubads.g.doubleclick.net/gampad/adx?';
      var rand = Math.floor(Math.random() * 10e10);
      var cust_params = [];
      var rdp = this.hasUSPrivacy() ? '&rdp=1' : '';
      var gdprString = this.gdprApplies ? "&gdpr=1&gdpr_consent=".concat(this.tcString) : '';
      var childDirected = 'tfcd=0';

      for (var key in window.ads.globalTargeting) {
        if (window.ads.globalTargeting.hasOwnProperty(key)) {
          cust_params.push("".concat(key, "=").concat(window.ads.globalTargeting[key]));
        }
      }

      var ads = ad ? [ad] : window.ads.tagless;
      ads.forEach(function (ad) {
        if (typeof ad.callback === 'function') {
          var adUnit = _this21.generatePath(ad.position);

          var url = "".concat(base).concat(childDirected, "&t=position%3D").concat(ad.position, "%26features%3Dtagless").concat(rdp).concat(gdprString, "&iu=").concat(adUnit, "&sz=").concat(ad.size, "&cust_params=").concat(encodeURIComponent(cust_params.join('&')), "&c=").concat(rand);
          ga_data.utils.fetch(url, true).then(ad.callback);
        }
      });
    },
    hasUSPrivacy: function hasUSPrivacy() {
      var privacy = window.ga_privacy || {
        choices: {}
      };
      return privacy.ccpaApplies && privacy.choices.targeting === false;
    },
    generatePath: function generatePath(placement) {
      var getParam = ga_data.utils.getUrlParamValue;
      var dfpConfig = ga_data.utils.getNested(window, 'ga_data', 'site', 'ads', 'dfp') || {};
      var accountId = getParam('usatai') || dfpConfig.accountId;
      var accountName = getParam('usatan') || (this._inMobileEnvironment() ? dfpConfig.mobileAccountName : dfpConfig.accountName);
      var cst = ga_data.utils.getNested(window, 'ga_data', 'route', 'cst');
      var vendor = ga_data.utils.getNested(window, 'ga_data', 'route', 'vendor');
      var path = "/".concat(accountId, "/").concat(accountName, "/").concat(placement);

      if (vendor) {
        path += "-".concat(vendor);
      }

      if (cst) {
        path += "/".concat(cst);
      }

      return path.replace(/[^\w-*!<>:().\\\/]/g, '');
    },

    /* Specific Ad Units */
    setupBrandLock: function setupBrandLock() {
      var _this22 = this;

      var pageType = ga_data.utils.getNested(ga_data.route, 'basePageType');
      var sectionName = ga_data.utils.getNested(ga_data.route, 'sectionName');
      var subsection = ga_data.utils.getNested(ga_data.route, 'subsection');
      var whitelist = ga_data.utils.getNested(window, 'ga_data', 'site', 'ads', 'brandlock', 'whitelist') || [];
      var brandlockEl = document.querySelector('.gnt_x__bl'); // Brandlock can not run on section fronts, homefront, and sponsored stories

      if (brandlockEl && (!(pageType === 'section front' || pageType === 'homefront' || sectionName.includes('sponsor-story')) || whitelist.indexOf(subsection) !== -1)) {
        var position = this._inMobileEnvironment() ? 'mobileweb-sponsor_logo' : 'sponsor_logo';
        window.ads.tagless.push({
          position: position,
          size: '300x50',
          callback: function callback(res) {
            _this22.doBrandLock(res);
          }
        });
      }
    },
    doBrandLock: function doBrandLock(res) {
      if (res === '') return;
      var jsonStr = res.slice(res.indexOf('N-->') + 4, res.indexOf('<!--/J'));
      var config;

      try {
        config = JSON.parse(jsonStr);
      } catch (e) {
        this.adLogger('Brandlock is not valid JSON');
      }

      if (!config) return;
      var impStr = res.slice(res.indexOf('NS-->') + 5, res.indexOf('<!--/I'));

      if (this._inMobileEnvironment()) {
        impStr += res.slice(res.indexOf('ITM-->') + 6, res.indexOf('<!--/ITM'));
      } else {
        impStr += res.slice(res.indexOf('ITD-->') + 6, res.indexOf('<!--/ITD'));
      }

      var brandlockEl = document.querySelector('.gnt_x__bl');

      if (this._inMobileEnvironment()) {
        // Find the mobile brandlock position, if available on page
        var brandlockMobileEl = document.querySelector('.gnt_x__mbl');

        if (brandlockMobileEl) {
          brandlockEl = brandlockMobileEl;
        }
      }

      if (!brandlockEl) return;
      brandlockEl.innerHTML = "<a href=\"".concat(config.click, "\" class=\"gnt_x__bl_l\" rel=\"sponsored\" target=\"_blank\" title=\"").concat(config.title, "\"><span class=\"gnt_x__bl_lb\">").concat(config.label, "</span><img src=\"").concat(config.logo, "\" alt=\"").concat(config.name, "\" class=\"gnt_x__bl_i\"/></a>");
      document.documentElement.classList.add('gnt__bl');

      if (!this._inMobileEnvironment()) {
        var mainContentEl = document.querySelector('.page-main-content-container');

        if (mainContentEl) {
          var brandlockBg = document.createElement('div');
          brandlockBg.classList.add('gnt_x__bg');
          brandlockBg.style.background = config.color;
          mainContentEl.appendChild(brandlockBg);
        }
      } // Fire off impression img/script tags


      var tracking = document.createElement('div');
      tracking.classList.add('gnt_x__bl_h');
      tracking.innerHTML = impStr;
      var target = document.querySelector('.gnt_x__mbl');
      this.loadTrackingScripts(tracking, target); // Add in some extra tracking

      if (config.adlabel) {
        var adlabel = [ga_data.utils.getUrlParamValue('usatl'), config.adlabel].filter(Boolean);
        if (ga_data.utils.getNested(window, 'ads', 'globalTargeting')) window.ads.globalTargeting.adlabel = adlabel;

        this._setPageTargeting({
          adlabel: adlabel
        });
      }
    },
    loadTrackingScripts: function loadTrackingScripts(node, target) {
      for (var i = 0; i < node.childElementCount; i++) {
        var currentEl = node.children[i];

        if (currentEl.childElementCount) {
          this.loadTrackingScripts(currentEl);
          continue;
        } // Special handling for script tags


        if (currentEl.tagName.toLowerCase() === 'script') {
          var scriptEl = document.createElement('script');
          scriptEl.async = true;

          if (currentEl.src) {
            scriptEl.src = currentEl.src;
          } else {
            scriptEl.id = currentEl.id;
            scriptEl.innerHTML = currentEl.innerHTML;
          }

          var el = target || document.body;
          el.appendChild(scriptEl);
        }
      }
    },
    collectPrebidMetricPixel: function collectPrebidMetricPixel(bids, type) {
      var _iterator = _createForOfIteratorHelper(Array.isArray(bids) ? bids : [bids]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var bid = _step.value;
          var meta = bid.meta;
          ga_data.ads.prebidMetricEvents.push({
            adId: bid.adId && bid.adId.toString(),
            adUnitCode: bid.adUnitCode,
            auctionId: bid.auctionId && bid.auctionId.toString(),
            bidderCode: bid.bidderCode || bid.bidder || bid.bidderRequest.bidderCode,
            cpm: bid.cpm,
            creativeId: bid.creativeId && bid.creativeId.toString(),
            currency: bid.currency && bid.currency.toString(),
            dealId: bid.dealId && bid.dealId.toString(),
            eventType: type,
            experiment: 'prebid-metrics-pixel',
            height: bid.height,
            mediaType: bid.mediaType,
            meta: meta && {
              networkId: meta.networkId && meta.networkId.toString(),
              networkName: meta.networkName,
              agencyId: meta.agencyId,
              agencyName: meta.agencyName,
              advertiserId: meta.advertiserId && meta.advertiserId.toString(),
              advertiserName: meta.advertiserName,
              advertiserDomains: Array.isArray(meta.advertiserDomains) ? meta.advertiserDomains.filter(function (x) {
                return typeof x === 'string';
              }) : [],
              brandId: meta.brandId && meta.brandId.toString(),
              brandName: meta.brandName,
              primaryCatId: meta.primaryCatId,
              secondaryCatIds: Array.isArray(meta.secondaryCatIds) ? meta.secondaryCatIds.filter(function (x) {
                return typeof x === 'string';
              }) : [],
              mediaType: meta.mediaType
            },
            requestId: bid.requestId && bid.requestId.toString(),
            source: bid.source,
            status: bid.status,
            timeToRespond: bid.timeToRespond,
            width: bid.width
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    firePrebidMetricPixel: function firePrebidMetricPixel() {
      var _this23 = this;

      var prebidMetricEvents = ga_data.ads.prebidMetricEvents;

      if (prebidMetricEvents.length) {
        var url = 'https://traxex.gannettdigital.com/prebid-event';

        if (ga_data.ads.isKeepAlive) {
          fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-store',
            keepalive: true,
            body: JSON.stringify(prebidMetricEvents)
          }).catch(function (error) {
            _this23.adLogger('prebid-metrics.js - Error returned from traxex api =>');

            _this23.adLogger(error);
          });
        } else {
          navigator.sendBeacon && navigator.sendBeacon(url, JSON.stringify(prebidMetricEvents));
        }

        ga_data.ads.prebidMetricEvents.length = 0;
      }
    }
  };

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      _classCallCheck(this, Utils);

      this.Deferred = /*#__PURE__*/function () {
        function _class(timeout) {
          var _this = this;

          _classCallCheck(this, _class);

          this.isResolved = false;
          this.timeout = timeout ? timeout : null;
          this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;

            if (timeout) {
              setTimeout(function () {
                resolve();
              }, timeout);
            }
          }).then(function () {
            _this.isResolved = true;
          });
        }

        return _createClass(_class);
      }();

      this.UA = {
        IS_ANDROID: /Android/.test(navigator.userAgent) && !window.MSStream,
        IS_IPHONE: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        IS_IPAD: /iPad/.test(navigator.userAgent) && !window.MSStream,
        IS_IOSMOBILE: /iPhone|iPod|iPad/.test(navigator.userAgent) && !window.MSStream
      };
      this.UA.IS_MOBILE = this.UA.IS_ANDROID || this.UA.IS_IOSMOBILE;
      this.lastY = 0;
    }

    _createClass(Utils, [{
      key: "checkVisible",
      value: function checkVisible(elm, threshold, viewHeight) {
        threshold = threshold || 0;
        viewHeight = viewHeight || Math.max(document.documentElement.clientHeight, window.innerHeight);
        var rect = elm.getBoundingClientRect(),
            above = rect.bottom - threshold < 0,
            below = rect.top - viewHeight + threshold >= 0;
        return above ? 'above' : below ? 'below' : 'visible';
      }
    }, {
      key: "cstToObj",
      value: function cstToObj(cst) {
        var list = cst.split('/');
        return {
          section: list[0] || '',
          subsection: list[1] || '',
          topic: list[2] || ''
        };
      }
    }, {
      key: "broadcastEvent",
      value: function broadcastEvent(eventName, params) {
        var parameters = {
          bubbles: true,
          cancelable: false,
          detail: params
        };

        if (typeof window['CustomEvent'] === 'function') {
          window.dispatchEvent(new CustomEvent(eventName, parameters));
        } else {
          var docEvt = document.createEvent('CustomEvent');
          docEvt.initCustomEvent(eventName, parameters.bubbles, parameters.cancelable, parameters.detail);
          window.dispatchEvent(docEvt);
        }
      }
    }, {
      key: "findAncestor",
      value: function findAncestor(el, className) {
        while ((el = el.parentElement) && !el.classList.contains(className)) {
        }

        return el;
      }
    }, {
      key: "loadScript",
      value: function loadScript(url, id) {
        // prevent duplicate script loads
        if (document.getElementById(id)) {
          return Promise.resolve(url);
        }

        return new Promise(function (resolve, reject) {
          var element = document.createElement('script');
          element.id = id;
          element.async = true;
          element.src = url; // Important success and error for the promise

          element.onload = function () {
            resolve(url);
          };

          element.onerror = function () {
            reject(url);
          };

          document.body.appendChild(element);
        });
      }
    }, {
      key: "importAndCreateEl",
      value: function importAndCreateEl(relativePath) {
        return new Promise(function (resolve, reject) {
          Polymer.Base.importHref("".concat(window.ga_data.site.hosts.clientStatic).concat(window.ga_data.server.clientRoot).concat(relativePath), function () {
            try {
              var parts = relativePath.toLowerCase().split('/');
              var name = parts[parts.length - 1].replace('.html', '');
              var element = window.document.createElement(name);
              resolve(element);
            } catch (err) {
              if (window.newrelic) window.newrelic.noticeError(err);
              reject(err);
            }
          }, function (err) {
            if (window.newrelic) window.newrelic.noticeError(err);
            reject(err);
          });
        });
      }
    }, {
      key: "getCoords",
      value: function getCoords(el) {
        var box = el.getBoundingClientRect(),
            docEl = document.documentElement,
            top = box.top + window.pageYOffset - (docEl.clientTop || 0),
            left = box.left + window.pageXOffset - (docEl.clientLeft || 0);
        return {
          top: Math.round(top),
          left: Math.round(left)
        };
      }
    }, {
      key: "getNested",
      value: function getNested(obj) {
        if (obj) {
          for (var _len = arguments.length, path = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            path[_key - 1] = arguments[_key];
          }

          return path.reduce(function (obj, arg) {
            return obj && obj[arg];
          }, obj);
        }

        return undefined;
      }
    }, {
      key: "getUrlParamValue",
      value: function getUrlParamValue(key) {
        var value = decodeURI((new RegExp(key + '=' + '(.+?)(&|$)').exec(window.location.search) || ['', 'false'])[1]);

        if (value === 'false') {
          return false;
        } else if (value === 'true') {
          return true;
        }

        return value;
      }
    }, {
      key: "readCookie",
      value: function readCookie(name) {
        var result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
        return result ? result[1] : null;
      }
    }, {
      key: "writeCookie",
      value: function writeCookie(name, value, days, secure, sameSite) {
        var date,
            expires,
            options = '';

        if (!days) {
          days = 365 * 20;
        }

        date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();

        if (secure) {
          options = options.concat('; secure');
        }

        if (sameSite) {
          options = options.concat('; samesite=' + sameSite);
        }

        document.cookie = name + '=' + value + expires + '; path=/' + options;
      }
    }, {
      key: "removeCookie",
      value: function removeCookie(name) {
        this.writeCookie(name, '', -1);
      }
      /**
       * Simple json retriever
       * @param url - url to fetch JSON from
       * @returns {Promise<T>}
       */

    }, {
      key: "getJSON",
      value: function getJSON(url) {
        if (window.fetch) {
          return window.fetch(url).then(function (response) {
            return response.json().then(function (json) {
              return response.ok ? json : Promise.reject(json);
            });
          });
        } else {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest(),
                errorOut = function errorOut() {
              reject(xhr.statusText);
            };

            xhr.open('GET', url);

            xhr.onload = function () {
              if (xhr.status >= 200 && xhr.status < 300) {
                try {
                  resolve(JSON.parse(xhr.responseText));
                } catch (err) {
                  errorOut();
                }
              } else {
                errorOut();
              }
            };

            xhr.onerror = function () {
              errorOut();
            };

            xhr.send(null);
          });
        }
      }
      /**
       * Simple http request retriever
       * @param url - url to fetch from
       * @returns {Promise<T>}
       */

    }, {
      key: "fetch",
      value: function fetch(url, withCredentials) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest(),
              errorOut = function errorOut() {
            reject(xhr.statusText);
          };

          xhr.withCredentials = !!withCredentials;
          xhr.open('GET', url);

          xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve(xhr.responseText);
              } catch (err) {
                errorOut();
              }
            } else {
              errorOut();
            }
          };

          xhr.onerror = function () {
            errorOut();
          };

          xhr.send(null);
        });
      }
    }, {
      key: "throttle",
      value: function throttle(func, wait, options) {
        var context,
            args,
            result,
            later,
            timeout = null,
            previous = 0;
        if (!options) options = {};

        later = function later() {
          previous = options.leading === false ? 0 : Date.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        };

        return function () {
          var remaining,
              now = Date.now();
          if (!previous && options.leading === false) previous = now;
          remaining = wait - (now - previous);
          context = this; //eslint-disable-line no-invalid-this

          args = arguments;

          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }

            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }

          return result;
        };
      }
      /**
       * Whether the current user is logged in with Scroll.com
       * https://developer.scroll.com/
       */

    }, {
      key: "scrollUserDetected",
      value: function scrollUserDetected() {
        if (this._scrollUserDetected === undefined) {
          this._scrollUserDetected = document.cookie.indexOf('scroll0=') > -1;
        }

        return this._scrollUserDetected;
      }
      /**
       * Checks which type of ads we can serve
       * https://support.google.com/admanager/answer/9805023#consent-policies
       */

    }, {
      key: "getAdPrivacyChoice",
      value: function getAdPrivacyChoice(tcData) {
        var purpose = tcData.purpose || {};
        var consents = purpose.consents;
        var legitimateInterests = purpose.legitimateInterests;
        var eligiblity = 'none';

        if (consents && consents['1'] && legitimateInterests && legitimateInterests['2'] && legitimateInterests['7'] && legitimateInterests['9'] && legitimateInterests['10']) {
          eligiblity = 'non-personalized';

          if (consents['3'] && consents['4']) {
            eligiblity = 'personalized';
          }
        }

        return eligiblity;
      }
    }, {
      key: "getPrivacyChoices",
      value: function getPrivacyChoices() {
        // Default to false (opt-out) if GDPR Applies
        var choiceDefault = !(window.ga_privacy && window.ga_privacy.gdprApplies);
        var choices = {
          necessary: choiceDefault,
          performance: choiceDefault,
          functional: choiceDefault,
          targeting: choiceDefault,
          social: choiceDefault
        };

        if (typeof window.OnetrustActiveGroups === 'string') {
          window.OnetrustActiveGroups.split(',').filter(Boolean).forEach(function (i) {
            switch (i) {
              case '1':
                choices.necessary = true;
                break;

              case '2':
                choices.performance = true;
                break;

              case '3':
                choices.functional = true;
                break;

              case '4':
                choices.targeting = true;
                break;

              case '5':
                choices.social = true;
                break;
            }
          });
        }

        return choices;
      }
    }, {
      key: "getLocation",
      value: function getLocation() {
        var os = window.otStubData || {};
        var ol = window.otLocation || {};
        return (os.userLocation && os.userLocation.country || ol && ol.country || '').toLowerCase();
      }
      /**
       * Whether the current GDPR currently applies
       * Returns if GDPR applies, and the consent string (if available)
       */

    }, {
      key: "isEUuserRestrictedAccess",
      value: function isEUuserRestrictedAccess() {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var gdprApplies = window.ga_privacy && window.ga_privacy.gdprApplies;
          var tcDataStub = {
            gdprApplies: gdprApplies,
            tcString: ''
          };

          if (!gdprApplies || !window.__tcfapi) {
            return resolve(tcDataStub);
          } // Ping to see if OneTrust is loaded, and either fetch tcData or listen for when it's ready


          window.__tcfapi('ping', 2, function (pingReturn) {
            if (pingReturn.cmpLoaded === true) {
              // CMP is loaded we can get TCData
              window.__tcfapi('getTCData', 2, function (tcData, success) {
                if (success && tcData) {
                  resolve(tcData);
                } else {
                  // No success, we will pass back our stubbed version
                  resolve(tcDataStub);
                }
              });
            } else {
              window.__tcfapi('addEventListener', 2, function (tcData, success) {
                if (success && tcData && tcData.eventStatus === 'tcloaded') {
                  window.ga_privacy.ads = _this2.getAdPrivacyChoice(tcData);
                  window.ga_privacy.choices = _this2.getPrivacyChoices();

                  _this2.broadcastEvent('consent-update', tcData);

                  resolve(tcData); // remove listener to not get called more than once

                  window.__tcfapi('removeEventListener', 2, function (success) {
                    if (!success) {
                      console.info('Failed to remove tcloaded event listener'); // eslint-disable-line no-console
                    }
                  }, tcData.listenerId);
                } else {
                  // No success, we will pass back our stubbed version
                  resolve(tcDataStub);
                }
              });
            }
          });

          setTimeout(function () {
            // Timeout reached
            resolve(tcDataStub);
          }, 5000);
        });
      }
    }, {
      key: "flushTcfStub",
      value: function flushTcfStub() {
        if (window.__tcfapi && window.__tcfapi.a && window.__tcfapi.a.length) {
          /**
           * GDPR does not apply, but the tcfapi stub is on the page.
           * If only the stub is loaded, GPT will never request ads
           * We need to make sure that we can respond to any queued calls/listeners
           * to inform them that GDPR does not apply
           */
          window.__tcfapi.a.forEach(function (queued) {
            var fn = queued[2];
            var ver = queued[1] || queued[3]; // for some reason, it's in both spots, [3] should be vendorIds

            if (typeof fn === 'function' && ver === 2) {
              var stubbed = {
                gdprApplies: false,
                tcString: '',
                tcfPolicyVersion: 2,
                eventStatus: 'tcloaded',
                cmpStatus: 'loaded',
                isServiceSpecific: false
              };
              fn(stubbed, true);
            }
          });
        }
      }
      /**
       * Whether "Ad Free" handling should be applied to the page.
       */

    }, {
      key: "isAdFreeExperience",
      value: function isAdFreeExperience() {
        return this.getNested(ga_data, 'site', 'ads', 'scroll', 'enabled') && this.scrollUserDetected() || ga_data.intents.indexOf('variant-group:streamlined') > -1 || this._isAdFreeSubscription() || this.getNested(ga_data, 'site', 'ads', 'dfp', 'enabled') === false;
      }
    }, {
      key: "_isAdFreeSubscription",
      value: function _isAdFreeSubscription() {
        var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!Object.keys(user).length) {
          try {
            user = JSON.parse(window.localStorage.getItem('gupUserInfo')) || {};
          } catch (e) {
            user = {};
            if (window.newrelic) window.newrelic.noticeError(e);
          }
        }

        if (user.meta && user.meta.status === 200 && user.meta.isAuthenticatedInCurrentContext) {
          var adFreeLicenses = this.getNested(window, 'ga_data', 'site', 'consumerMarketing', 'ad_free_entitlements');
          var currentLicense = this.getNested(user, 'response', 'user', 'userLicenseType');

          if (adFreeLicenses.indexOf(currentLicense) > -1) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "checkIfAdFreeReloadRequired",
      value: function checkIfAdFreeReloadRequired(user, localUser) {
        if (this._isAdFreeSubscription(user) && !this._isAdFreeSubscription(localUser)) {
          window.ga_data.flags = window.ga_data.flags || {};
          window.ga_data.flags.reloadPage = true;
        }
      }
    }, {
      key: "inIframe",
      value: function inIframe() {
        try {
          return window.self !== window.top;
        } catch (e) {
          return true;
        }
      }
    }, {
      key: "deepMerge",
      value: function deepMerge(target, source) {
        for (var key in source) {
          if (target[key] !== null && _typeof(target[key]) === 'object' && !Array.isArray(target[key])) {
            this.deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    }, {
      key: "calcVelocity",
      value: function calcVelocity(throttleSpeed, pass) {
        var _this3 = this;

        var delta = Math.abs(this.lastY - window.scrollY);
        throttleSpeed = throttleSpeed || 60;
        pass = pass || 1;

        if (delta <= 0 && pass < 3) {
          setTimeout(function () {
            _this3.calcVelocity(throttleSpeed + 60, ++pass);
          }, throttleSpeed);
        } else {
          this.broadcastEvent('ga-speed', {
            speed: delta * (1000 / throttleSpeed)
          });
        }
      }
    }]);

    return Utils;
  }();

  /**
   * Core
   */

  var Core = /*#__PURE__*/function () {
    function Core() {
      var _this = this;

      _classCallCheck(this, Core);

      window.ga_data = window.ga_data || {};
      window.ga_data.utils = new Utils();
      window.ga_privacy = window.ga_privacy || {
        choices: {}
      };
      Partner.init(); // Global, throttled, window scroll/resize broadcast

      var throttleSpeed = 60; // in ms 

      window.addEventListener('scroll', ga_data.utils.throttle(function () {
        window.ga_data.utils.lastY = window.scrollY;
        window.ga_data.utils.broadcastEvent('ga-scroll');
        window.ga_data.utils.speedTO = setTimeout(function () {
          window.ga_data.utils.calcVelocity(throttleSpeed);
        }, throttleSpeed);
      }, throttleSpeed), {
        passive: true
      });
      window.addEventListener('resize', ga_data.utils.throttle(function () {
        return window.ga_data.utils.broadcastEvent('ga-resize');
      }, throttleSpeed), {
        passive: true
      }); // Global feedback request listener

      window.addEventListener('ga-feedback-request', function (event) {
        Polymer.Base.importHref("".concat(ga_data.site.hosts.clientStatic).concat(ga_data.server.clientRoot, "elements/partner/partner-feedback/partner-feedback.html"), function () {
          if (!_this._feedbackEl) {
            _this._feedbackEl = document.createElement('partner-feedback');
          }

          _this._feedbackEl.redirectToFeedbackPage(event);
        }, null, true);
      });
      /**
       * Setup our handling of privacy restrictions
       */

      ga_data.utils.isEUuserRestrictedAccess().then(function (tcData) {
        if (tcData.gdprApplies) {
          window.__tcfapi('addEventListener', 2, function (tcData, success) {
            if (success && tcData && tcData.eventStatus === 'useractioncomplete') {
              window.ga_privacy.ads = ga_data.utils.getAdPrivacyChoice(tcData);
              window.ga_privacy.choices = ga_data.utils.getPrivacyChoices();
              window.ga_data.utils.broadcastEvent('consent-update', tcData);
            }
          });
        }
      });
      /**
       * This is a hack to allow iPhones to blur out of input fields on hack. It is a common safari issue that isn't limited to polymer.
       * Link to Issue: https://github.com/Polymer/paper-input/issues/47
       */

      if (window.ga_data.utils.UA.IS_IPHONE || window.ga_data.utils.UA.IS_IPAD) {
        document.body.addEventListener('touchstart', function () {
          return document.activeElement.blur();
        });
      }
      /**
       * End iPhone Hack
       */

    }
    /**
     * Finds all DOM elements marked with a module paths and loads the related import.
     * 
     * This function looks for elements with a "util-module-path" attribute.
     * If the module is in a <util-module-slot low-priority>, the module will not be imported until after page scroll
     * Else, the module will be imported immediately
     * 
     * TODO-FEATURE: Make root node overridable to allow loading from a shadow root
     * TODO-FEATURE: Make trigger attributes configurable
     */


    _createClass(Core, [{
      key: "loadDynamicModules",
      value: function loadDynamicModules() {
        var _this2 = this;

        if (!window.ga_data.route.disablePolymer) {
          // List of modules that should never be loaded from anywhere
          var moduleBlacklist = ['partner-pong', 'nav-global', 'util-analytics', 'util-module-slot'];
          var matches = Array.prototype.slice.call(document.querySelectorAll('[util-module-path]'));
          var lazyModules = Array.prototype.slice.call(document.querySelectorAll('div.module-slot[low-priority] [util-module-path]'));
          matches.reduce(function (union, i) {
            // If not a lazy module 
            if (lazyModules.indexOf(i) == -1) {
              union.push(i);
            }

            return union;
          }, []).forEach(function (match) {
            if (moduleBlacklist.indexOf(match.nodeName.toLowerCase()) !== -1) return;

            if (!window.customElements.get(match.localName)) {
              _this2.importModuleForNode(match);
            }
          });

          var lazyLoader = function lazyLoader() {
            window.removeEventListener('ga-scroll', lazyLoader);
            lazyModules.forEach(function (match) {
              if (!window.customElements.get(match.localName)) {
                _this2.importModuleForNode(match);
              }
            });
          };

          window.addEventListener('ga-scroll', lazyLoader, {
            passive: true
          });
        }
      }
      /**
       * Imports module associated with a DOM element
       * 
       * Takes the `util-module-path` from and element and creates a dynamic import of the related module.
       * Module path is based on the current environment's configured client root.
       * Module path assumes the module is located in a folder named to match the element, in an html file named to match the element.
       * If util-module-async is set on the element, the import will be requested async
       * On load, the element will set `data-module-loaded` with a bool pass/fail
       * 
       * @param {HTMLElement} node
       * @param {function} loadCallback: callback after node is successfully imported
       */

    }, {
      key: "importModuleForNode",
      value: function importModuleForNode(node, loadCallback) {
        var nodePath = node.getAttribute('util-module-path') || 'elements';
        var loadAsync = node.hasAttribute('util-module-async');
        var normalized = node.nodeName.toLowerCase(); // Remove attr to prevent additional imports

        node.removeAttribute('util-module-path'); // Import

        this.importHref("".concat(ga_data.site.hosts.clientStatic).concat(ga_data.server.clientRoot).concat(nodePath, "/").concat(normalized, "/").concat(normalized, ".html"), function () {
          node.dataset.moduleLoaded = true;

          if (node.dataset.modulePlaceholderId) {
            node.hidden = false;
            node.classList.add('module-loaded');
          }

          if (loadCallback) loadCallback();
        }, function () {
          node.dataset.moduleLoaded = false;
        }, loadAsync);
      }
      /**
       * Import a module. Creates a link tag to import a module at given path.
       * 
       * @param {string} src Full path to import
       * @param {function} loadCallback Called on success
       * @param {function} errCallback Called on fail
       * @param {boolean} loadAsync if import should happen async
       */

    }, {
      key: "importHref",
      value: function importHref(src, loadCallback, errCallback, loadAsync) {
        if (!document.querySelector("link[href=\"".concat(src, "\"]"))) {
          var link = document.createElement('link');
          link.rel = 'import';
          link.href = src;
          link.async = loadAsync;
          link.addEventListener('load', loadCallback);
          link.addEventListener('error', errCallback);
          document.head.appendChild(link);
        }
      }
      /**
       * Clears cached user related objects and localStorage items.
       * This makes is possible to refetch (get) the user if they log in using an inline/embed method.
       */

    }, {
      key: "removeUser",
      value: function removeUser() {
        this._user = null;
        this._userPromise = null;
        window.localStorage.removeItem('gupUserInfo', '{}');
        window.localStorage.removeItem('user_insights', '{}');
      }
      /**
       * For analytics.
       * AdRev duplicates this method due to async issues.
       * When making changes, please also update the `_inMobileEnvironment` functions in both
       * gallium/core/partner.js and gallium/behaviors/partner-utils.html as well.
       */

    }, {
      key: "isMobile",
      get: function get() {
        return window.innerWidth < 768;
      }
      /**
       * Flag for determining if the CAM meter was incremented.
       *
       * Stores a copy of the firefly cookie in localStorage. If values are different, flag as true.
       */

    }, {
      key: "isCAMMeterIncrement",
      get: function get() {
        if (this._isCAMMeterIncrement === undefined) {
          var cookieKey = 'firefly_akamai_open';
          var cookie = ga_data.utils.readCookie(cookieKey);
          var localVal = window.localStorage.getItem(cookieKey);
          this._isCAMMeterIncrement = !!cookie && cookie !== localVal;

          if (this._isCAMMeterIncrement) {
            try {
              window.localStorage.setItem(cookieKey, cookie);
            } catch (e) {
              if (window.newrelic) window.newrelic.noticeError(e);
            }
          }
        }

        return this._isCAMMeterIncrement;
      }
      /**
       * Current user
       * 
       * returns Promise for a GUP User object for the current user
       */

    }, {
      key: "user",
      get: function get() {
        var _this3 = this;

        if (!this._userPromise) {
          this._userPromise = new Promise(function (resolve, reject) {
            if (_this3._user) {
              resolve(_this3._user);
            }

            var gupasURLTemplate = "https://user.".concat(ga_data.site.baseName).concat(ga_data.site.topLevelDomain, "/").concat(ga_data.site.uaid, "-GUP/user/");
            fetch(gupasURLTemplate, {
              credentials: 'include'
            }).then(function (response) {
              return response.json().then(function (user) {
                if (user && user.meta && user.meta.status === 200) {
                  window.ga_data.utils.checkIfAdFreeReloadRequired(user, _this3.userLocalData);

                  try {
                    window.localStorage.setItem('gupUserInfo', JSON.stringify(user || {}));
                    window.localStorage.setItem('user_insights', JSON.stringify(user.response.insights || {}));
                  } catch (e) {
                    if (window.newrelic) window.newrelic.noticeError(e);
                  }

                  _this3._user = user;
                  resolve(user);
                } else {
                  reject('user not found');
                }
              });
            }).catch(function (error) {
              reject('service error');
            });
          });
        }

        return this._userPromise;
      }
      /**
       * Retrieves the current GUP Insights object from local storage.
       * Triggers the user promise in case it hasn't already been updated.
       */

    }, {
      key: "userInsights",
      get: function get() {
        var insights = {};
        this.user;

        try {
          insights = JSON.parse(window.localStorage.getItem('user_insights'));
        } catch (e) {
          if (window.newrelic) window.newrelic.noticeError(e);
        }

        return insights;
      }
      /**
       * Retrieves the current GUP user object from local storage.
       * Triggers the user promise in case it hasn't already been updated.
       */

    }, {
      key: "userLocalData",
      get: function get() {
        var gupUserInfo = {};
        this.user;

        try {
          gupUserInfo = JSON.parse(window.localStorage.getItem('gupUserInfo')) || {};
        } catch (e) {
          if (window.newrelic) window.newrelic.noticeError(e);
        }

        return gupUserInfo;
      }
      /**
       * Returns the current user cam experience id, from `gnt_eid` or 'cam_eid' cookie, defaulting to 'control' if it doesn't exist
       * @returns {*|string}
       */

    }, {
      key: "userCamExperienceId",
      get: function get() {
        return ga_data.utils.readCookie('gnt_eid') || ga_data.utils.readCookie('cam_eid') || 'control';
      }
    }]);

    return Core;
  }();

  window.Gallium = new Core(); // Initial import of all dynamic modules

  requestAnimationFrame(function () {
    return window.Gallium.loadDynamicModules();
  });
  window.ga_data.utils.broadcastEvent('ga-init');

}());

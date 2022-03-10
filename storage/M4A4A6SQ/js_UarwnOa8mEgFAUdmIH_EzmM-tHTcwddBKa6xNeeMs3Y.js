/**
 * @file
 * JavaScript for the Disqus Drupal module.
 */

// The Disqus global variables.
var disqus_shortname = '';
var disqus_url = '';
var disqus_title = '';
var disqus_identifier = '';
var disqus_developer = 0;
var disqus_def_name = '';
var disqus_def_email = '';
var disqus_config;

(function ($) {

/**
 * Drupal Disqus behavior.
 */
Drupal.behaviors.disqus = {
  attach: function (context, settings) {
    $('body').once('disqus', function() {
      // Load the Disqus comments.
      if (settings.disqus || false) {
        // Setup the global JavaScript variables for Disqus.
        disqus_shortname = settings.disqus.domain;
        disqus_url = settings.disqus.url;
        disqus_title = settings.disqus.title;
        disqus_identifier = settings.disqus.identifier;
        disqus_developer = settings.disqus.developer || 0;
        disqus_def_name = settings.disqus.name || '';
        disqus_def_email = settings.disqus.email || '';

        // Language and SSO settings are passed in through disqus_config().
        disqus_config = function() {
          if (settings.disqus.language || false) {
            this.language = settings.disqus.language;
          }
          if (settings.disqus.remote_auth_s3 || false) {
            this.page.remote_auth_s3 = settings.disqus.remote_auth_s3;
          }
          if (settings.disqus.api_key || false) {
            this.page.api_key = settings.disqus.api_key;
          }
          if (settings.disqus.sso || false) {
            this.sso = settings.disqus.sso;
          }
          if (settings.disqus.callbacks || false) {
            for (var key in settings.disqus.callbacks) {
              for (var i = 0; i < settings.disqus.callbacks[key].length; i++) {
                var callback = settings.disqus.callbacks[key][i].split('.');
                var fn = window;
                for (var j = 0; j < callback.length; j++) {
                  fn = fn[callback[j]];
                }
                if(typeof fn === 'function') {
                  this.callbacks[key].push(fn);
                }
              }
            }
          }
        };

        // Make the AJAX call to get the Disqus comments.
        jQuery.ajax({
          type: 'GET',
          url: '//' + disqus_shortname + '.disqus.com/embed.js',
          dataType: 'script',
          cache: false
        });
      }

      // Load the comment numbers JavaScript.
      if (settings.disqusComments || false) {
        disqus_shortname = settings.disqusComments;
        // Make the AJAX call to get the number of comments.
        jQuery.ajax({
          type: 'GET',
          url: '//' + disqus_shortname + '.disqus.com/count.js',
          dataType: 'script',
          cache: false
        });
      }
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Loads content of blocks via AJAX just after page loading, updates Drupal.settings, reattaches behaviors.
 */

(function ($) {

Drupal.ajaxblocksSendRequest = function (request, delay) {
  if (delay) {
    setTimeout(function () { Drupal.ajaxblocksSendRequest(request, 0); }, delay);
    return;
  }
  $.ajax({
    url: ((typeof Drupal.settings.ajaxblocks_path !== 'undefined') ? Drupal.settings.ajaxblocks_path : (Drupal.settings.basePath + Drupal.settings.pathPrefix + "ajaxblocks")),
    type: "GET",
    dataType: "json",
    data: request,
    cache: true,
    success: function (data) {
      // Replaces the placeholder divs by the actual block contents returned by the AJAX call,
      // executes the extra JavaScript code and attach behaviours if the apply to the blocks.
      Drupal.freezeHeight();
      for (var id in data) {
        Drupal.ajaxblocksSetBlockContent(id, data[id]);
      }
      Drupal.unfreezeHeight();
    }
  });
};

Drupal.ajaxblocksSetBlockContent = function (id, data) {
  if (data['delay']) {
    setTimeout(function () {data['delay'] = 0; Drupal.ajaxblocksSetBlockContent(id, data);}, data['delay']);
    return;
  }
  var wrapper = $('#block-' + id + '-ajax-content');
  if (!wrapper) {
    return;
  }
  var context = wrapper.parent();
  Drupal.detachBehaviors(context);
  if (!context) {
    return;
  }
  $('#block-' + id).addClass('ajaxblocks-loaded');
  context.html(data['content']);
  if (data['ajaxblocks_settings']) {
    $.extend(true, Drupal.settings, data['ajaxblocks_settings']);
  }
  Drupal.attachBehaviors(context);
};

$(document).ready(function () {
  if (typeof Drupal.settings.ajaxblocks !== 'undefined') {
    Drupal.ajaxblocksSendRequest(Drupal.settings.ajaxblocks, Drupal.settings.ajaxblocks_delay);
  }
});

$(window).load(function () {
  if (typeof Drupal.settings.ajaxblocks_late !== 'undefined') {
    Drupal.ajaxblocksSendRequest(Drupal.settings.ajaxblocks_late, Drupal.settings.ajaxblocks_late_delay);
  }
});

})(jQuery);
;

/* Polyfill service v3.110.1
 * Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {Element.prototype.toggleAttribute=function t(e,i){return i!==undefined&&(i=!!i),null!==this.getAttribute(e)?!!i||(this.removeAttribute(e),!1):!1!==i&&(this.setAttribute(e,""),!0)};})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
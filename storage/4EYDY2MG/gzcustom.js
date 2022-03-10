/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/gazette-3-0/assets/build/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

/*
 * HTML 5 audio player, can be included into Gazette posts via shortcode
 */
plyr.setup('.gz-plyr', {
	debug: !0,
	title: 'Gazette Audio',
	tooltips: {
		controls: !0
	},
	captions: {
		defaultActive: !0
	}
});

jQuery(document).ready(function () {
	jQuery('.tablinks').on('click', function (e) {
		jQuery('.tabcontent').hide();
		jQuery('#' + jQuery(this).data('target')).show();
		jQuery('.tablinks').removeClass('active');
		jQuery(this).addClass('active');
		jQuery(this).blur();
	});

	jQuery('#latest-tablink').trigger('click');

	if (jQuery('.scrolly .step').length > 0) {
		enterView({
			selector: '.step',
			enter: function enter(el) {
				el.classList.add('entered');
				jQuery('.item').hide();
				jQuery('.item-' + jQuery(el).attr('data-index')).show();
			},
			exit: function exit(el) {
				var index = jQuery(el).attr('data-index');
				index = Math.max(0, index - 1);
				if (index > 0) {
					jQuery('.item').hide();
					jQuery('.item-' + index).show();
				}
			},

			offset: 0.3 // enter at middle of viewport
			//once: true, // trigger just once
		});
	}

	if (jQuery('.accordion-wrapper').length > 0) {
		jQuery('.accordion-wrapper .accordion-title').on('click', function (e) {
			e.preventDefault();
			jQuery(this).parent().parent().toggleClass('is-active');
		});
	}

	//.article-collection-teases_showmore
	jQuery('.article-collection-teases_showmore').on('click', function (e) {
		e.preventDefault();
		jQuery('.article-collection-teases__hide').addClass('show');
		jQuery(this).parent().hide();
	});
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNmMTk2NDgyZGU2NDU2MjE2OWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2d6Q3VzdG9tLmpzIl0sIm5hbWVzIjpbInBseXIiLCJzZXR1cCIsImRlYnVnIiwidGl0bGUiLCJ0b29sdGlwcyIsImNvbnRyb2xzIiwiY2FwdGlvbnMiLCJkZWZhdWx0QWN0aXZlIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZSIsImhpZGUiLCJkYXRhIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJibHVyIiwidHJpZ2dlciIsImxlbmd0aCIsImVudGVyVmlldyIsInNlbGVjdG9yIiwiZW50ZXIiLCJlbCIsImNsYXNzTGlzdCIsImFkZCIsImF0dHIiLCJleGl0IiwiaW5kZXgiLCJNYXRoIiwibWF4Iiwib2Zmc2V0IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7QUFHQUEsS0FBS0MsS0FBTCxDQUFZLFVBQVosRUFBd0I7QUFDdkJDLFFBQU8sQ0FBRSxDQURjO0FBRXZCQyxRQUFPLGVBRmdCO0FBR3ZCQyxXQUFVO0FBQ1RDLFlBQVUsQ0FBRTtBQURILEVBSGE7QUFNdkJDLFdBQVU7QUFDVEMsaUJBQWUsQ0FBRTtBQURSO0FBTmEsQ0FBeEI7O0FBV0FDLE9BQVFDLFFBQVIsRUFBb0JDLEtBQXBCLENBQTJCLFlBQVc7QUFDckNGLFFBQVEsV0FBUixFQUFzQkcsRUFBdEIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsQ0FBVixFQUFjO0FBQ2hESixTQUFRLGFBQVIsRUFBd0JLLElBQXhCO0FBQ0FMLFNBQVEsTUFBTUEsT0FBUSxJQUFSLEVBQWVNLElBQWYsQ0FBcUIsUUFBckIsQ0FBZCxFQUFnREMsSUFBaEQ7QUFDQVAsU0FBUSxXQUFSLEVBQXNCUSxXQUF0QixDQUFtQyxRQUFuQztBQUNBUixTQUFRLElBQVIsRUFBZVMsUUFBZixDQUF5QixRQUF6QjtBQUNBVCxTQUFRLElBQVIsRUFBZVUsSUFBZjtBQUNBLEVBTkQ7O0FBUUFWLFFBQVEsaUJBQVIsRUFBNEJXLE9BQTVCLENBQXFDLE9BQXJDOztBQUVBLEtBQUtYLE9BQVEsZ0JBQVIsRUFBMkJZLE1BQTNCLEdBQW9DLENBQXpDLEVBQTZDO0FBQzVDQyxZQUFVO0FBQ1RDLGFBQVUsT0FERDtBQUVUQyxVQUFPLFNBQVNBLEtBQVQsQ0FBZ0JDLEVBQWhCLEVBQXFCO0FBQzNCQSxPQUFHQyxTQUFILENBQWFDLEdBQWIsQ0FBa0IsU0FBbEI7QUFDQWxCLFdBQVEsT0FBUixFQUFrQkssSUFBbEI7QUFDQUwsV0FBUSxXQUFXQSxPQUFRZ0IsRUFBUixFQUFhRyxJQUFiLENBQW1CLFlBQW5CLENBQW5CLEVBQXVEWixJQUF2RDtBQUNBLElBTlE7QUFPVGEsU0FBTSxTQUFTQSxJQUFULENBQWVKLEVBQWYsRUFBb0I7QUFDekIsUUFBSUssUUFBUXJCLE9BQVFnQixFQUFSLEVBQWFHLElBQWIsQ0FBbUIsWUFBbkIsQ0FBWjtBQUNBRSxZQUFRQyxLQUFLQyxHQUFMLENBQVUsQ0FBVixFQUFhRixRQUFRLENBQXJCLENBQVI7QUFDQSxRQUFLQSxRQUFRLENBQWIsRUFBaUI7QUFDaEJyQixZQUFRLE9BQVIsRUFBa0JLLElBQWxCO0FBQ0FMLFlBQVEsV0FBV3FCLEtBQW5CLEVBQTJCZCxJQUEzQjtBQUNBO0FBQ0QsSUFkUTs7QUFnQlRpQixXQUFRLEdBaEJDLENBZ0JHO0FBQ1o7QUFqQlMsR0FBVjtBQW1CQTs7QUFFRCxLQUFLeEIsT0FBUSxvQkFBUixFQUErQlksTUFBL0IsR0FBd0MsQ0FBN0MsRUFBaUQ7QUFDaERaLFNBQVEscUNBQVIsRUFBZ0RHLEVBQWhELENBQW9ELE9BQXBELEVBQTZELFVBQVVDLENBQVYsRUFBYztBQUMxRUEsS0FBRXFCLGNBQUY7QUFDQXpCLFVBQVEsSUFBUixFQUFlMEIsTUFBZixHQUF3QkEsTUFBeEIsR0FBaUNDLFdBQWpDLENBQThDLFdBQTlDO0FBQ0EsR0FIRDtBQUlBOztBQUVEO0FBQ0EzQixRQUFRLHFDQUFSLEVBQWdERyxFQUFoRCxDQUFvRCxPQUFwRCxFQUE2RCxVQUFVQyxDQUFWLEVBQWM7QUFDMUVBLElBQUVxQixjQUFGO0FBQ0F6QixTQUFRLGtDQUFSLEVBQTZDUyxRQUE3QyxDQUF1RCxNQUF2RDtBQUNBVCxTQUFRLElBQVIsRUFBZTBCLE1BQWYsR0FBd0JyQixJQUF4QjtBQUNBLEVBSkQ7QUFLQSxDQTlDRCxFIiwiZmlsZSI6Imd6Y3VzdG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dwLWNvbnRlbnQvdGhlbWVzL2dhemV0dGUtMy0wL2Fzc2V0cy9idWlsZC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3OSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzNmMTk2NDgyZGU2NDU2MjE2OWQiLCIvKlxuICogSFRNTCA1IGF1ZGlvIHBsYXllciwgY2FuIGJlIGluY2x1ZGVkIGludG8gR2F6ZXR0ZSBwb3N0cyB2aWEgc2hvcnRjb2RlXG4gKi9cbnBseXIuc2V0dXAoICcuZ3otcGx5cicsIHtcblx0ZGVidWc6ICEgMCxcblx0dGl0bGU6ICdHYXpldHRlIEF1ZGlvJyxcblx0dG9vbHRpcHM6IHtcblx0XHRjb250cm9sczogISAwXG5cdH0sXG5cdGNhcHRpb25zOiB7XG5cdFx0ZGVmYXVsdEFjdGl2ZTogISAwXG5cdH1cbn0pO1xuXG5qUXVlcnkoIGRvY3VtZW50ICApLnJlYWR5KCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5KCAnLnRhYmxpbmtzJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRqUXVlcnkoICcudGFiY29udGVudCcgKS5oaWRlKCk7XG5cdFx0alF1ZXJ5KCAnIycgKyBqUXVlcnkoIHRoaXMgKS5kYXRhKCAndGFyZ2V0JyApICkuc2hvdygpO1xuXHRcdGpRdWVyeSggJy50YWJsaW5rcycgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRqUXVlcnkoIHRoaXMgKS5ibHVyKCk7XG5cdH0pO1xuXG5cdGpRdWVyeSggJyNsYXRlc3QtdGFibGluaycgKS50cmlnZ2VyKCAnY2xpY2snICk7XG5cblx0aWYgKCBqUXVlcnkoICcuc2Nyb2xseSAuc3RlcCcgKS5sZW5ndGggPiAwICkge1xuXHRcdGVudGVyVmlldyh7XG5cdFx0XHRzZWxlY3RvcjogJy5zdGVwJyxcblx0XHRcdGVudGVyOiBmdW5jdGlvbiBlbnRlciggZWwgKSB7XG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoICdlbnRlcmVkJyApO1xuXHRcdFx0XHRqUXVlcnkoICcuaXRlbScgKS5oaWRlKCk7XG5cdFx0XHRcdGpRdWVyeSggJy5pdGVtLScgKyBqUXVlcnkoIGVsICkuYXR0ciggJ2RhdGEtaW5kZXgnICkgKS5zaG93KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdDogZnVuY3Rpb24gZXhpdCggZWwgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IGpRdWVyeSggZWwgKS5hdHRyKCAnZGF0YS1pbmRleCcgKTtcblx0XHRcdFx0aW5kZXggPSBNYXRoLm1heCggMCwgaW5kZXggLSAxICk7XG5cdFx0XHRcdGlmICggaW5kZXggPiAwICkge1xuXHRcdFx0XHRcdGpRdWVyeSggJy5pdGVtJyApLmhpZGUoKTtcblx0XHRcdFx0XHRqUXVlcnkoICcuaXRlbS0nICsgaW5kZXggKS5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG9mZnNldDogMC4zIC8vIGVudGVyIGF0IG1pZGRsZSBvZiB2aWV3cG9ydFxuXHRcdFx0Ly9vbmNlOiB0cnVlLCAvLyB0cmlnZ2VyIGp1c3Qgb25jZVxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCBqUXVlcnkoICcuYWNjb3JkaW9uLXdyYXBwZXInICkubGVuZ3RoID4gMCApIHtcblx0XHRqUXVlcnkoICcuYWNjb3JkaW9uLXdyYXBwZXIgLmFjY29yZGlvbi10aXRsZScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5wYXJlbnQoKS5wYXJlbnQoKS50b2dnbGVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vLmFydGljbGUtY29sbGVjdGlvbi10ZWFzZXNfc2hvd21vcmVcblx0alF1ZXJ5KCAnLmFydGljbGUtY29sbGVjdGlvbi10ZWFzZXNfc2hvd21vcmUnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRqUXVlcnkoICcuYXJ0aWNsZS1jb2xsZWN0aW9uLXRlYXNlc19faGlkZScgKS5hZGRDbGFzcyggJ3Nob3cnICk7XG5cdFx0alF1ZXJ5KCB0aGlzICkucGFyZW50KCkuaGlkZSgpO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2d6Q3VzdG9tLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
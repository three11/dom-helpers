(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.domHelpers = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.trigger = _exports.insertBefore = _exports.insertAfter = _exports.toggleClass = _exports.removeClass = _exports.addClass = _exports.hasClass = _exports.getScrollPosition = _exports.isElementVisibleInViewport = _exports.enableListeners = _exports.$$ = _exports.$ = void 0;

  var _this = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var D = document;
  /**
   * Query a single element
   */
  // prettier-ignore

  var $ = function $(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : D;
    return context.querySelector(selector);
  };
  /**
   * Query a collection of element
   */
  // prettier-ignore


  _exports.$ = $;

  var $$ = function $$(selector) {
    var startNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : D;
    return _toConsumableArray(startNode.querySelectorAll(selector));
  };
  /**
   * Enable jQuery-like syntax for attaching of event listeners
   */


  _exports.$$ = $$;

  var enableListeners = function enableListeners() {
    /**
     * Add `on` method to Element
     *
     * @param {String} type
     * @param {Function} listener
     * @param {Object|Boolean} options
     */
    Element.prototype.on = function (type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _this.addEventListener(type, listener, options);
    };
    /**
     * Add `on` method to Array
     *
     * @param {String} type
     * @param {Function} listener
     * @param {Object|Boolean} options
     */
    // eslint-disable-next-line no-extend-native


    Array.prototype.on = function (type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _this.map(function (el) {
        if (el instanceof Element) {
          el.addEventListener(type, listener, options);
        }
      });
    };
  };
  /**
   * Detect if an element is visible in the viewport
   */


  _exports.enableListeners = enableListeners;

  var isElementVisibleInViewport = function isElementVisibleInViewport(el) {
    var isPartiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        right = _el$getBoundingClient.right,
        bottom = _el$getBoundingClient.bottom,
        left = _el$getBoundingClient.left;

    var _window = window,
        innerWidth = _window.innerWidth,
        innerHeight = _window.innerHeight;
    return isPartiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  /**
   * Returns the scroll position of an element
   */


  _exports.isElementVisibleInViewport = isElementVisibleInViewport;

  var getScrollPosition = function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return {
      x: el.pageXOffset || el.scrollLeft,
      y: el.pageYOffset || el.scrollTop
    };
  };
  /**
   * Classname utilities
   */


  _exports.getScrollPosition = getScrollPosition;

  var hasClass = function hasClass(el, className) {
    return el.classList.contains(className);
  };

  _exports.hasClass = hasClass;

  var addClass = function addClass(el, className) {
    return el.classList.add(className);
  };

  _exports.addClass = addClass;

  var removeClass = function removeClass(el, className) {
    return el.classList.remove(className);
  };

  _exports.removeClass = removeClass;

  var toggleClass = function toggleClass(el, className, force) {
    return el.classList.toggle(className, force);
  };
  /**
   * Insert HTML string after the element
   */


  _exports.toggleClass = toggleClass;

  var insertAfter = function insertAfter(el, html) {
    return el.insertAdjacentHTML('afterend', html);
  };
  /**
   * Insert HTML string before the element
   */


  _exports.insertAfter = insertAfter;

  var insertBefore = function insertBefore(el, html) {
    return el.insertAdjacentHTML('beforebegin', html);
  };
  /**
   * Trigger an event
   */


  _exports.insertBefore = insertBefore;

  var trigger = function trigger(el, eventType, detail) {
    return el.dispatchEvent(new CustomEvent(eventType, {
      detail: detail
    }));
  };

  _exports.trigger = trigger;
});

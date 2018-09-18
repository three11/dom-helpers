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
  _exports.enableListeners = _exports.$$ = _exports.$ = void 0;

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
   * Usage
   *
   * const button = $('#button');
   *
   * button.on('click', () => {
   *     console.log('clicked a single button');
   * });
   *
   * const buttons = $$('.button');
   *
   * buttons.on('click', () => {
   *     console.log('clicked a button in a collection');
   * });
   */


  _exports.enableListeners = enableListeners;
});

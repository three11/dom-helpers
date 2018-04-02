"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListener = exports.multiple = exports.single = exports.byID = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var doc = document;
var win = window;

var byID = function byID(id) {
  return doc.getElementById(id);
};

exports.byID = byID;

var single = function single(selector) {
  return doc.querySelector(selector);
};

exports.single = single;

var multiple = function multiple(selector) {
  return _toConsumableArray(doc.querySelectorAll(selector));
};

exports.multiple = multiple;

var addListener = function addListener(element, eventType, callback, shouldBubble) {
  element.addEventListener(eventType, function (event) {
    callback(event);
  }, shouldBubble);
};

exports.addListener = addListener;
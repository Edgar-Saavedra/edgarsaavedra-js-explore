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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MergSort = __webpack_require__(12);

var MergeSort = _interopRequireWildcard(_MergSort);

__webpack_require__(13);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// top-down implementation
function mergeSortTopDown(array) {
  if (array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
  var array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  array = array.concat(left.slice()).concat(right.slice());
  return array;
}

function test() {
  var a = [3, 23, 423, 423, 4, 324, 23432];
  while (a.length > -1) {
    a.shift();
  }
}

var countdown = function countdown(value, arr) {
  arr.push(value);
  if (value > 0) {

    return countdown(value - 1, arr);
  } else {
    return arr;
  }
};

//setTimeout(function(){
//  var array = [9, 2, 5, 6,3,4];
//  console.log(mergeSortTopDown(array.slice()));
//},0);

var sumOfDigits = function sumOfDigits(value) {
  return value == 0 ? 0 : value % 10 + sumOfDigits(parseInt(value / 10));
};

//console.log(sumOfDigits(55));

//var triangle = function(val)
//{
//
//}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * ==================================
 * Backtracing
 * ==================================
 */

function backtracing(n, arr) {
  if (n > 0) {
    backtracing(n - 1, arr);
  }
  arr.push(n);
}
var arr1 = [];
backtracing(10, arr1);
console.log(arr1); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/**
 * ==================================
 * Reverse Backtracing
 * ==================================
 */

function reverseBacktracing(n, arr) {
  arr.push(n);
  //console.log(arr);
  if (n > 0) {
    reverseBacktracing(n - 1, arr);
  }
}

var arr2 = [];
reverseBacktracing(10, arr2);
console.log(arr2); //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

/***/ })

/******/ });
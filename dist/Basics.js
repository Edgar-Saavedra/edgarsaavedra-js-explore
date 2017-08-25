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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PrototypalInheritance = __webpack_require__(1);

var PrototypalInheritance = _interopRequireWildcard(_PrototypalInheritance);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//PrototypalInheritance.inheritingProperties();
PrototypalInheritance.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//only one constructor : objects
//each object has a private property [[Prototype]], which holds a link to another object called its prototype

//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
//Important null is a valid object, null has no prototype, and acts as the final link in this prototype chain.

//all objects in JavaScript are instances of Object which sits on the top of a prototype chain

var inheritingProperties = function inheritingProperties() {
  //JavaScript objects are dynamic "bags" of properties (referred to as own properties)
  var proto = {
    hello: 'world'
  };
  var obj = Object.create(proto);
  console.warn('ECMAScript 2015 Method to get prototype Object.getPrototypeOf()', Object.getPrototypeOf(obj));
  console.warn('defacto way to get the proto : __proto__ ', obj.__proto__);

  //In ES5, it will throw a TypeError exception if the obj parameter isn't an object
  // TypeError: "foo" is not an object (ES5 code)
  console.warn('proto of string : ', Object.getPrototypeOf('foo'));
  return false;
};

/**
 * A simple example to create instances of an object
 * and using the prototype
 */
var es5Instances = function es5Instances() {
  function Parent(fN) {
    var lN = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Last';

    this.sayName = function () {
      return fN + ' ' + lN;
    };
  }

  Parent.prototype.addedMethod = function () {
    return 'more stuff';
  };

  var child = new Parent('First');

  child.childSays = function () {
    var saying = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Im a child';

    return saying;
  };
  //child.sayName(); // First Last
  //child.addedMethod(); // more stuff
  //child.childSays(); //'Im a child'
};

/**
 * Using call method to chain constructors for an object
 * @link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
var es5Inheritance = function es5Inheritance() {
  function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Family Name';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    this.name = name;
    this.age = age;
    this.sayInfo = function () {
      return this.name + ' - ' + this.age;
    };
    this.talk = function () {
      console.log(this.sayInfo());
    };
  }

  function Child(name, age) {
    Parent.call(this, name, age);
    this.childAttr = 'child attr';
    this.sayInfo = function () {
      return this.name + ' - ' + this.age + ' ' + this.childAttr;
    };
    this.talk = function () {
      console.log(this.sayInfo());
    };
  }

  function GrandChild(name, age) {
    Child.call(this, name, age);
    this.grandAttr = 'grand child';
    this.sayInfo = function () {
      return this.name + ' - ' + this.age + ' ' + this.childAttr + ' ' + this.grandAttr;
    };
    this.talk = function () {
      console.log(this.sayInfo());
    };
  };
  var greatGrandChild = new GrandChild();
  greatGrandChild.talk(); //Family Name - 0 child attr grand child
  greatGrandChild = new GrandChild('Grand Name', 20);
  greatGrandChild.talk(); //Grand Name - 20 child attr grand child
};

/**
 * Displaying the proto chain in es5
 */
var protoChainES5 = function protoChainES5() {
  function Parent() {
    this.a = 1;
    this.b = 2;
  }
  var Child = new Parent();
  Child.b = 3;
  Child.c = 4;
  console.log(Child.__proto__); //Parent
  console.log(Child.__proto__.__proto__); //Object
  console.log(Child.__proto__.__proto__.__proto__); //null
  //console.log(Child.__proto__.__proto__.__proto__.__proto__);//Error
};

/**
 * Displaying the proto chain in es6
 */
var protoChainES6 = function protoChainES6() {
  var Parent = {
    a: 1,
    b: 2,
    d: function d() {
      return 5;
    }
  };
  var Child = Object.create(Parent);
  Child.b = 3;
  Child.c = 4;
  console.log(Child.__proto__); // { a: 1, b: 2, d: [Function: d] }
  console.log(Child.__proto__.__proto__); //Object
  console.log(Child.__proto__.__proto__.__proto__); //null
};

var init = exports.init = function init() {
  //es5Instances();
  //es5Inheritance();
  //protoChainES5();
  //protoChainES6();
  constructor();
};

/***/ })
/******/ ]);
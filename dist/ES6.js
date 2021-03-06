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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ====================================================================
 * Destructuring
 * ====================================================================
 * Destructing , when you can extract a value
 * from an object/array into a variable
 * @type {{bar: number, baz: number}}
 */
var foo = {
  bar: 1,
  baz: 2
};

var bar = foo.bar,
    baz = foo.baz;

//console.log(bar); // result 1

/**
 * So destructoring is mos useful in Promises
 */
//Promise.all([promise1,promise2])
//  .then(function ([ result1,result2 ]) {
//    // console.log(result1);
//  });

var foo2 = 2;
var obj = {
  bar: 1,
  foo2: foo2 // this is the same as foo2 : 2


  /*
    This is really good if we have  method
    var name = "will";
    var age = 34;
    some.method( { name,age } );
   */

  /*
    var name = "will";
    var obj = {
      ["name" + name] = "some value"
    }
  * */

  //desctructuring arguments
};function calBMI(_ref) {
  var weight = _ref.weight,
      height = _ref.height,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 25 : _ref$max,
      callback = _ref.callback;

  var bmi = weight / Math.pow(height, 2);
  if (bmi > max) {
    console.log("you're overwiehgt");
  }
  if (callback) {
    calBMI(bmi);
  }
}
//calBMI({ weight , height, max : 25 });
//calBMI({ weight, height , callback : function(){ } });

/**
 * ====================================================================
 * Template strings
 * ====================================================================
 */

var name = "will";
var thing = "party";
var greet = "hi, my name is " + name + "\n  and I like to " + thing + "!";

/**
 * ====================================================================
 * Block Scoping let & const
 * ====================================================================
 */

var a = 1;

if (true) {
  //this will be hoisted
  var b = 2;
}
//console.log(b); //2

// let is the new var
if (true) {
  var c = 2;
}
//console.log(c); // c is not defined

//const , is like let except that the value of the var can't be changed.

/**
 * ====================================================================
 * Classes
 * ====================================================================
 */

var Parent = function () {
  //age = 34;
  function Parent() {
    _classCallCheck(this, Parent);

    console.log('constructor');
  }

  _createClass(Parent, [{
    key: "foo",
    value: function foo() {
      console.log('foo');
    }
  }], [{
    key: "bar",
    value: function bar() {
      console.log('bar');
    }
  }]);

  return Parent;
}();

var Child = function (_Parent) {
  _inherits(Child, _Parent);

  function Child() {
    _classCallCheck(this, Child);

    return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this));
  }

  _createClass(Child, [{
    key: "baz",
    value: function baz() {
      console.log('baz');
    }
  }]);

  return Child;
}(Parent);

//var parent = new Parent();
//parent.foo();
//Parent.bar();
//var child  = new Child();
//child.baz();

/**
 * ====================================================================
 * Arrow functions
 * ====================================================================
 */


var arrow = function arrow(a, b) {
  return a + b;
};

var _module = {
  age: 30,
  foo: function foo() {
    var _this2 = this;

    //console.log(this.age); //logs 30
    setTimeout(function () {
      console.log(this.age);
    }.bind(this), 100);

    //arrow functions bind this
    setTimeout(function () {
      console.log(_this2.age);
    }, 100);

    //$(".some-el").width().jQuery(()=>{
    //  //$(this) we overriden value of this
    // the value of this will be the value of the containing scope
    //});
  }

  //module.foo();

  /**
   * ====================================================================
   * Modules
   * ====================================================================
   */
  //before
  //module.exports.foo = function () {
  //
  //}
  //module.exports.bar = function () {
  //
  //}
  //
  //after
  //export default function () {
  //
  //}
  //export var foo1 = 3;
  //export function  foo()
  //{
  //
  //}
  //export function  bar()
  //{
  //
  //}

  //before
  //var myModule = require('MyModule')
  //now
  //these have to be at the top of file
  //import myModule from 'myModule';
  // you can also import as descrutoring
  // import { foo , bar } from 'myModule';

  /**
   * ====================================================================
   * Generator function
   * ====================================================================
   */

  //async function aa() {
  //  var result = await $.get('https://httpbin.org/get');
  //  console.warn(result.origin);
  //}

  /**
   * ====================================================================
   * Promises
   * ====================================================================
   */
};var myPromise = new Promise(function (resolve, reject) {
  //cleaning room

  var isClean = false;
  setTimeout(function () {
    isClean = true;
    if (isClean) resolve('clean');else reject('not clean');
  }, 1000);
});

//myPromise.then(function(resolve){
//  console.log(`the room is ${resolve}`);
//}).catch(function(reject){
//  console.log(`the room is ${reject}`);
//});

var cleanRoom = function cleanRoom() {
  return new Promise(function (resolve, reject) {
    resolve("Cleaned The Room");
  });
};

var removeGarbage = function removeGarbage(message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " remove the garbage");
  });
};

var wonIceCream = function wonIceCream(message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " won ice cream");
  });
};

//cleanRoom().then((result)=>{
//  return removeGarbage(result);
//}).then((result)=>{
//  return wonIceCream(result);
//}).then((result)=>{
//  console.log(result); //Cleaned The Room remove the garbage won ice cream
//})

/**
 * To run all promises in parallel
 */
//Promise.all([cleanRoom(),removeGarbage(),wonIceCream()]).then((result)=>{
//  console.log('all finished');
//});


/**
 * To run as soon as one finishes
 */
//Promise.race([cleanRoom(),removeGarbage(),wonIceCream()]).then((result)=>{
//  console.log('one of them finished');
//  console.log(result);
//});


// ES6 Promise Example

// server
// -----------------------------------------------------
// Imagine this array lives in your server
var people = [{ name: 'John Doe', age: '30' }, { name: 'Jane Doe', age: '24' }];

// client
// -----------------------------------------------------

// function that simulates an AJAX call to our
// imaginary server, where the people array lives.
// The call may succeed or fail.
var simulateAJAXCall = function simulateAJAXCall(index, cb) {
  var chance = Math.random();
  var isSuccess = chance <= 0.80 ? true : false;

  return setTimeout(function () {
    if (isSuccess) {
      return cb(people[index]);
    } else {
      return cb(null);
    }
  }, 1000);
};

// Function that returns a promise to search
// a person according to his index
var getPerson = function getPerson(index) {

  // The promise resolves if the data comes back
  // successfully and it rejects in case of an error
  return new Promise(function (resolve, reject) {

    console.log('fetching person...');
    simulateAJAXCall(index, function (data) {

      if (data === null) {
        reject('Something went wrong!');
      }

      resolve(data);
    });
  });
};

// Call getPerson, which will return a promise.
// If the promise resolves, then log the person,
// if there's an error, it will go to the catch
// block and be handled there.
//Promise.race([getPerson(1),getPerson(0)])
//.then(person => {
//
//  console.log(person);
//}).catch(error => {
//
//  console.log(error);
//});

//async await allows for more sync writting of promises
// we will need to use babel-polyfill to use async and await
var showMyPerson = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var myPerson;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getPerson(1);

          case 2:
            myPerson = _context.sent;

            console.log('showMyPerson()', myPerson);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function showMyPerson() {
    return _ref2.apply(this, arguments);
  };
}();
showMyPerson();

/***/ })

/******/ });
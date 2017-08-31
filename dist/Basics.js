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

var _GeneralInterviewQuestions = __webpack_require__(2);

var GeneralInterview = _interopRequireWildcard(_GeneralInterviewQuestions);

var _EventLoop = __webpack_require__(3);

var _PromisesCallBacks = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//PrototypalInheritance.inheritingProperties();
PrototypalInheritance.init();
//GeneralInterview.init();
//new EventLoop();
//new PromisesCallBacks();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//only one constructor : objects
//each object has a private property [[Prototype]], which holds a link to another object called its prototype

//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
//Important null is a valid object, null has no prototype, and acts as the final link in this prototype chain.

//all objects in JavaScript are instances of Object which sits on the top of a prototype chain
/**
 * ======================================================================
 * Creating objects
 * ======================================================================
 */
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
 * ======================================================================
 * ES5 Classes
 * ======================================================================
 */
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
 * ======================================================================
 * the CALL APPLY BIND method
 * ======================================================================
 */
/**
 *
 * Use .bind() when you want that function to later be called with a certain context,
 * useful in events. Use .call() or .apply() when you want to invoke the function
 * immediately, and modify the context.
 *
 *
 * Using call method
 *
 * to chain constructors for an object
 * @link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 *
 * The difference is that apply lets you invoke the function with arguments as an array;
 * call requires the parameters be listed explicitly.
 * A useful mnemonic is "A for array and C for comma."
 */
var es5CallInheritance = function es5CallInheritance() {
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
  // ====================== CALL ======================
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

  //======================= APPLY ======================
  function GrandChild(name, age) {
    Child.apply(this, [name, age]); //using apply
    this.grandAttr = 'grand child';
    this.sayInfo = function () {
      return this.name + ' - ' + this.age + ' ' + this.childAttr + ' ' + this.grandAttr;
    };
    this.talk = function () {
      console.log(this.sayInfo());
    };
  };

  //======================== BIND =====================
  // NOTE: Use .bind() when you want that function to later be called with a certain context
  function MyObject(element, style) {
    var _this2 = this;

    this.elm = element;
    this.clicked = false;
    this.style = style || {
      backgroundColor: 'red',
      color: 'blue',
      border: 'solid 1px black'
    };
    this.setStyles = function (element) {
      var _this = this;

      Object.keys(this.style).map(function (key, index) {
        element.style[key] = _this.style[key];
      });
    };

    if (this.elm.length) {
      Array.prototype.map.call(this.elm, function (element, i) {
        element.addEventListener('click', _this2.click.bind(_this2), false);
        element.addEventListener('mouseenter', _this2.mouseenter.bind(_this2), false);
        element.addEventListener('mouseleave', _this2.mouseleave.bind(_this2), false);
        _this2.setStyles(element);
      });
    } else {
      element.addEventListener('click', this.click.bind(this), false);
      element.addEventListener('mouseenter', this.mouseenter.bind(this), false);
      element.addEventListener('mouseleave', this.mouseleave.bind(this), false);
      this.setStyles(element);
    }
  };

  MyObject.prototype.click = function (event) {
    var t = this;
    var element = event.target;
    element.style.color = 'purple';
    element.style.fontWeight = 'bold';
    event.stopPropagation();
  };
  MyObject.prototype.mouseenter = function (event) {
    var element = event.target;
    element.style.backgroundColor = 'white';
    event.stopPropagation();
  };
  MyObject.prototype.mouseleave = function (event) {
    console.log('enter');
    var element = event.target;
    this.setStyles(element);
    event.stopPropagation();
  };

  var a_link = new MyObject(document.getElementById('MyObject'));
  var allDivs = new MyObject(document.getElementsByClassName('a-div'), {
    backgroundColor: "pink",
    borderRadius: "5px",
    border: "solid 20px green",
    fontSize: "20px",
    padding: "10px",
    color: "white"
  });

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

/**
 * ===
 * Using class keyword
 *
 * ES6 added the class keyword. It remains however ar prototype based object
 *
 * The new keywords are class, constructor, static exdends and super
 * ===
 */
var es6Class = function es6Class() {
  var Parent = function () {
    function Parent(age, name) {
      _classCallCheck(this, Parent);

      this.age = age;
      this.name = name;
    }

    _createClass(Parent, [{
      key: 'talk',
      value: function talk() {
        console.log(this.name + " , " + this.age);
      }
    }, {
      key: 'setAge',
      value: function setAge(age) {
        this.age = age;
      }
    }]);

    return Parent;
  }();

  var Child = function (_Parent) {
    _inherits(Child, _Parent);

    function Child(name, age) {
      _classCallCheck(this, Child);

      return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, age, name));
    }

    _createClass(Child, [{
      key: 'sayHello',
      value: function sayHello() {
        console.log("hello " + this.name);
      }
    }]);

    return Child;
  }(Parent);

  var child = new Child("Edgar", 22);
  child.sayHello();
  child.talk();
};

/**
 * The lookup time for properties that are high up on the prototype chain can
 * have a negative impact on performance,
 *
 * trying to access nonexistent properties will always traverse the full prototype chain.
 *
 * To check whether an object has a property defined on itself and not somewhere on
 * its prototype chain, it is necessary to use the hasOwnProperty
 *
 * console.log(g.hasOwnProperty('vertices'));
   // true

   console.log(g.hasOwnProperty('nope'));
   // false

   console.log(g.hasOwnProperty('addVertex'));
   // false

   console.log(g.__proto__.hasOwnProperty('addVertex'));
   // true

   Note: It is not enough to check whether a property is undefined.
   The property might very well exist, but its value just happens to
   be set to undefined.
 */

/**
    Bad Practice : Extension of native prototypes

    The only good reason for extending a built-in prototype is to
    backport the features of newer JavaScript engines, like Array.forEach.

 */
var init = exports.init = function init() {
  //es5Instances();
  es5CallInheritance();
  //protoChainES5();
  //protoChainES6();
  //es6Class();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var init = exports.init = function init() {

  /**
   * General note:
   * A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.
   * The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables
   * in the enclosing function’s scope, and (3) global variables.
   *
   *
   * What will be the output of the following code:
   * for (var i = 0; i < 5; i++) {
      setTimeout(function() { console.log(i); }, i * 1000 );
    }
   The reason for this is that each function executed within the loop will be executed after the entire loop has
   completed and all will therefore reference the last value stored in i, which was 5.
     var a={},
   b={key:'b'},
   c={key:'c'};
    a[b]=123;
   a[c]=456;
    console.log(a[b]);
   When setting an object property, JavaScript will implicitly stringify the parameter value.
   a[b] anda[c] are both equivalent to a["[object Object]"]
    * @constructor
   */

  function GeneralInterview() {
    this.foo = "bar";
    /**
     * Although typeof bar === "object" is a reliable way of checking if bar is an object,
     * the surprising gotcha in JavaScript is that null is also considered an object!
     *
     * As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:
     *
     * First, the above solution will return false if bar is a function. In most cases, this is the desired behavior,
     * but in situations where you want to also return true for functions, you could amend the above solution to be:
     *
     * console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
     *
     * Second, the above solution will return true if bar is an array (e.g., if var bar = [];). In most cases, this is the desired behavior,
     * since arrays are indeed objects, but in situations where you want to also false for arrays, you could amend the above solution to be:
     */
    this.understandNull = function () {
      var bar = null;
      console.log((typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "object"); // true
      console.log(bar !== null && (typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "object"); // logs false
      var bar2 = [];
      console.log(bar2 !== null && (typeof bar2 === "undefined" ? "undefined" : _typeof(bar2)) === "object" && Object.prototype.toString.call(bar2) === '[object Array]'); // logs true
    };

    /**
     What will the code below output to the console and why?
      In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
      In the inner function, though, this no longer refers to myObject.
      As a result, this.foo is undefined in the inner function,
     whereas the reference to the local variable self remains in scope and is accessible there.
     */
    this.understandingScope = function () {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo); //bar
      console.log("outer func:  self.foo = " + self.foo); //bar

      var inner = function inner() {
        if (this) console.log("inner func:  this.foo = " + this.foo); //undefined
        console.log("inner func:  self.foo = " + self.foo); //bar
      };
      inner();

      var hero = {
        _name: 'John Doe',
        getSecretIdentity: function getSecretIdentity() {
          return this._name;
        }
      };

      /**
       * The first console.log prints undefined because we are extracting the method from the hero object,
       * so stoleSecretIdentity() is being invoked in the global context
       * (i.e., the window object) where the _name property does not exist.
       */
      //var stoleSecretIdentity = hero.getSecretIdentity;
      //bind method creates a new function that, when called,
      // has its this keyword set to the provided value, with a
      // given sequence of arguments preceding any provided when the new function is called.
      var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

      console.log(stoleSecretIdentity());
      console.log(hero.getSecretIdentity());
    };

    /**
     * Reasons to use strict mode:
     *
     * 'use strict'
     *
     * Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions
     * Prevents accidental globals Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name.
     * Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global.
     * Disallows duplicate property names or parameter values
     * or a duplicate named argument for a functio
     *
     * Makes eval() safer. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope
     * Throws error on invalid usage of delete : The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the objec
     */

    /**
     * semicolons are technically optional in JavaScript (although omitting them is generally really bad form).
     *  As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(),
     *  a semicolon is automatically inserted immediately after the return statement.
     */
    this.semiCollonError = function () {
      function foo1() {
        return {
          bar: "hello"
        };
      }

      function foo2() {
        return;
        {
          bar: "hello";
        };
      }
      console.log("foo1 returns:");
      console.log(foo1()); // object
      console.log("foo2 returns:");
      console.log(foo2()); //undefined
    };

    /**
     * This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because
     * the result of the operation is non-numeric (e.g., an attempt to divide by zero).
     *
     * A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN() function,
     * which is a different and more reliable than the old global isNaN() function.
     */
    this.understandNAN = function () {
      console.log(typeof NaN === "number"); // logs "true"
      //Additionally, NaN compared to anything – even itself! – is false:
      console.log(NaN === NaN); // logs "false"
    };

    /**
     *  Numbers in JavaScript are all treated with floating point precision,
     *  and as such, may not always yield the expected results.
     */
    this.understandNumbers = function () {
      console.log(0.1 + 0.2);
      console.log(0.1 + 0.2 == 0.3);
      console.log(10 + '2'); // 102
      console.log(10 / '2'); // 5
      console.log(10 * '10'); // 100
      console.log(10 % '4'); // 2
      console.log(10 - '4'); // 4
    };

    this.understandEvents = function () {

      (function () {
        /*
         2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second)
         whereas 3 is being logged after a delay of 0 msecs.
         OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being logged right away?
         And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later line of code?
          The browser has an event loop which checks the event queue and processes pending events
         When the onclick handler is complete, the queue is checked and the event is then handled (e.g., the onload script is executed).
          */
        console.log(1);
        setTimeout(function () {
          console.log(2);
        }, 1000);
        setTimeout(function () {
          console.log(3);
        }, 0);
        console.log(4);
      })();
    };

    /**
     * numeric values are always stored as floating point values.
     */
    this.isInteger = function (x) {
      return (x ^ 0) === x;
    };

    this.isPalindrome = function (str) {
      //\W Matches any non-word character. Equivalent to [^A-Za-z0-9_].
      /*
       \d	Any digit character
       \w	An alphanumeric character (“word character”)
       \s	Any whitespace character (space, tab, newline, and similar)
       \D	A character that is not a digit
       \W	A nonalphanumeric character
       \S	A nonwhitespace character
       .	Any character except for newline
      * */
      str = str.replace(/\W/g, '').toLocaleLowerCase();
      return str == str.split('').reverse().join('');
    };

    this.sum = function (x) {
      if (arguments.length == 2) {
        return arguments[0] + arguments[1];
      } else {
        return function (y) {
          return x + y;
        };
      }
    };

    /**
     * (a) What gets logged to the console when the user clicks on “Button 4” and why?
     *
     * No matter what button the user clicks the number 5 will always be logged to the console.
     * This is because, at the point that the onclick method is invoked (for any of the buttons),
     * the for loop has already completed and the variable i already has a value of 5.
     */
    this.addButton = function () {
      /**
       * (a) What gets logged to the console when the user clicks on “Button 4” and why?
       *
       * No matter what button the user clicks the number 5 will always be logged to the console.
       * This is because, at the point that the onclick method is invoked (for any of the buttons),
       * the for loop has already completed and the variable i already has a value of 5.
       */
      for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function () {
          console.log(i);
        });
        document.body.appendChild(btn);
      }

      /**
       * (b) The key to making this work is to capture the value of i at each pass through the for
       * loop by passing it into a newly created function object. Here are three possible ways
       * to accomplish this:
       */
      for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function (i) {
          return function () {
            console.log(i);
          };
        }(i));
        document.body.appendChild(btn);
      }
    };

    this.arrayMethods = function () {
      var arr1 = "john".split('');
      // arr2 directly references the arr1 var
      var arr2 = arr1.reverse();
      arr2 = arr1.slice(0);
      var arr3 = "jones".split('');
      //arr4 copys the array
      var arr4 = arr2.slice(0);
      arr2.push(arr3);
      console.log(arr4);
      console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
      console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
    };

    /**
     * The stack overflow is eliminated because the event loop handles the recursion, not the call stack.
     * When  the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem.
     * Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear,
     * @param list
     */
    this.correctRecursive = function (list) {
      var nextListItem = function nextListItem(list) {

        if (list) {
          var item = list.pop();

          if (item) {
            // process the list item...
            setTimeout(nextListItem, 0);
          }
          return item;
        }
      };
      console.warn(nextListItem(list));
    };

    /**
     * Lear how implement this recursively
     * @param objArr
     */
    this.deepCopy = function (objArr) {};

    this.talk = function () {
      //this.understandNull();
      this.understandingScope();
      //this.semiCollonError();
      //this.understandNAN();
      //this.understandNumbers();
      //console.warn(this.isInteger('test'));
      //console.warn(this.isInteger(2));
      //this.understandEvents();
      //console.warn(this.isPalindrome('lAAl'));
      //console.log(this.sum(2)(3));
      //this.addButton();
      //this.arrayMethods();
      //this.correctRecursive([6,3,3423,23,2,1,4,234,5]);
    };
    this.talk();
  }
  new GeneralInterview();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EventLoop = exports.EventLoop = function EventLoop() {

  this.stackFrames = function () {
    function foo(b) {
      var a = 10;
      return a + b + 11;
    }

    function bar(x) {
      var y = 3;
      return foo(x * y);
    }

    console.log(bar(7));
  };
  this.init = function () {
    this.stackFrames();
  };
  this.init();
};

exports.default = EventLoop;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PromisesCallBacks = exports.PromisesCallBacks = function PromisesCallBacks() {
  this.count = 0;
  this.talk = function (add) {
    this.count = +add;
    return this.count;
  };
  this.log = function (msg) {
    console.log('PromisesCallBacks : ', msg);
  };
  this.init = function () {};
  this.init();
};

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CreatingClassesFromClasses = __webpack_require__(6);

var CreatingClasses = _interopRequireWildcard(_CreatingClassesFromClasses);

var _DecoratorPattern = __webpack_require__(7);

var DecoratorPattern = _interopRequireWildcard(_DecoratorPattern);

var _FactoryPattern = __webpack_require__(8);

var FactoryPattern = _interopRequireWildcard(_FactoryPattern);

var _SingletonPattern = __webpack_require__(9);

var SingletonPattern = _interopRequireWildcard(_SingletonPattern);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

CreatingClasses.main();
DecoratorPattern.main();
FactoryPattern.main();
SingletonPattern.main();
//const betterForLoop = (myarray) => {
//  var i = 0,
//    max = myarray.length;
//  for ( i = 0; i < max; i+=1 )
//  {
//    console.log('betterForLoop',myarray[i]);
//  }
//}
//
//const betterForLoop2 = (myarray) => {
//  var i = myarray.length;
//  while((i-=1)> - 1)
//  {
//    console.log('betterForLoop2',myarray[i]);
//  }
//}
//
////betterForLoop([1,2,3,4,562,23,2]);
//betterForLoop2([1,2,3,4,562,23,2]);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var main = exports.main = function main() {
  function Student() {
    this.name = null;
    this.id = '';
    this.main = function () {
      console.log('working');
    };
    this.main();
  }
  //new Student();
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var main = exports.main = function main() {
  /**
   * Similar to Mixins, they can be considered another
   * viable alternative to object sub-classing.
   *
   * The idea was that the decoration itself wasn't essential to the base
   * functionality of the class, otherwise it would be baked into the superclass itself.
   *
   * They can be used to modify existing systems where we wish to add
   * additional features to objects without the need to heavily modify the underlying code using them.
   *
   * Imagine having to define hundreds of different object constructors for say, a JavaScript game.
   *
   * The object constructors could represent distinct player types, each with differing capabilities
   * but there could easily be hundreds of these
   * If we then factored in capabilities, imagine having to create sub-classes for
   * each combination of capability type e.g HobbitWithRing,HobbitWithSword, HobbitWithRingAndSword and so on.This isn't very practical and certainly isn't manageable
   *
   * --> The idea is that rather than sub-classing, we add (decorate) properties or methods to a base object so it's a little more streamlined.
   */
  //test instance
  var testInstance = new Vehicle('car');
  var truck = new Vehicle('truck');

  //new functionality we're decorating vehicle with
  truck.setModel = function (modelName) {
    this.model = modelName;
  };
  truck.setColor = function (color) {
    this.color = color;
  };
  truck.setModel('CAT');
  truck.setColor('blue');
  //log(truck); //truck has new props
  //log(testInstance); //original instance and class stays same

  var mb = new MacBook();
  memory(mb);
  engraving(mb);
  insurance(mb);
  //log(mb.cost());
  //log(mb.screenSize());

  function log(obj) {
    console.log('DecoratorPattern.js', obj);
  }

  /**
   * Class we will decorate
   * @param vehicleType
   * @constructor
   */
  function Vehicle(vehicleType) {
    this.vehicleType = vehicleType;
    this.model = 'default';
    this.license = '00000-000';
  }

  /**
   * The Class We will decorate
   * @constructor
   */
  function MacBook() {
    this.cost = function () {
      return 997;
    };
    this.screenSize = function () {
      return 11.6;
    };
  }

  /**
   * ================================================
   * Decorators for our MacBook's
   * ================================================
   */

  //decorator 1
  function memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
      return v + 75;
    };
  }
  //decorator 2
  function engraving(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
      return v + 200;
    };
  }

  //decorator 3
  function insurance(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
      return v + 250;
    };
  }

  /**
   * ================================================
   * Pseudo-classical Decorators
   * ================================================
   */
  // see this jsbin for more info on thise types: http://jsbin.com/UMEJaXu/1/edit?html,js,output
  // for now we will stick to examples above
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function log(obj) {
  console.log('FactoryPattern.js', obj);
}

var main = exports.main = function main() {
  /**
   * it doesn't explicitly require us to use a constructor
   * actory can provide a generic interface for creating objects
   * where we can specify the type of factory object we wish to be created.
   *
   * We inform the Factory what type of object is required (e.g "Button", "Panel")
   * and it instantiates this, returning it to us for use.
   */

  //Create instance of our factory that makes cars
  var carFactory = new VehicleFactory();
  var car = carFactory.createVehicle({
    vehicleType: 'truck'
  });
  //log(car);

  /**
   * Constructor for new cars
   * @param options
   * @constructor
   */
  function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
  }

  /**
   * Constructor for new trucks
   * @param options
   * @constructor
   */
  function Truck(options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
  }

  /**
   * =============================================
   * Factory for vehicle
   * =============================================
   *
   * When To Use The Factory Pattern
   *
   * When our object or component setup involves a high level of complexity
   * When we need to easily generate different instances of objects depending on the environment we are in
   * When we're working with many small objects or components that share the same properties
   * When composing objects with instances of other objects that need only satisfy an API contract
   *
   * @constructor
   */
  function VehicleFactory() {
    this.vehicleClass = Car;
    this.createVehicle = function (options) {
      switch (options.vehicleType) {
        case "car":
          this.vehicleClass = Car;
          break;
        case "truck":
          this.vehicleClass = Truck;
          break;
      }
      return new this.vehicleClass(options);
    };
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function log(obj) {
  console.log('SingletonPattern.js', obj);
}

var main = exports.main = function main() {
  /**
   * it restricts instantiation of a class to a single object.
   *
   * creates a new instance of the class if one doesn't exist.
   * In the event of an instance already existing, it simply
   * returns a reference to that object
   *
   * whilst a Singleton can be implemented as a static instance,
   * it can also be constructed lazily, without the need for
   * resources nor memory until this is actually needed
   *
   * If we have a static object that can be initialized directly,
   * we need to ensure the code is always executed in the same order
   * and this doesn't scale when you have a large number of source files.
   *
   * In practice, the Singleton pattern is useful when exactly one
   * object is needed to coordinate others across a system
   *
   * when we find ourselves needing it in JavaScript it's a sign that we may need to re-evaluate our design.
   * They're often an indication that modules in a system are either tightly coupled or that logic
   * is overly spread across multiple parts of a codebase
   *
   * ingletons can be more difficult to test due to issues ranging from hidden dependencies, the difficulty
   * in creating multiple instances, difficulty in stubbing dependencies and so on.
   *
   * see: https://www.ibm.com/developerworks/webservices/library/co-single/index.html
   */

  var mySingleton = function () {
    var instance;

    /**
     * Method to return our instance
     * @returns {{publicMethod: publicMethod, publicPropety: string, getRandomNumber: getRandomNumber}}
     */
    function init() {
      //singleton
      //private methods and vars
      var privateVariable = "I am also private";
      var privateRandomNumber = Math.random();
      function privateMethod() {
        log('I am private');
      }
      return {
        publicMethod: function publicMethod() {
          log("public can see mee!");
        },
        publicPropety: "I am also public",
        getRandomNumber: function getRandomNumber() {
          return privateRandomNumber;
        }
      };
    }

    return {
      getInstance: function getInstance() {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  }();

  var singleA = mySingleton.getInstance();
  //var singleB = mySingleton.getInstance();
  //log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
  //singleA.publicMethod();
};

/***/ })
/******/ ]);
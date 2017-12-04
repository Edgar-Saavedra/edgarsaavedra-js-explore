// "use strict";

function log(obj,str) {
  console.log((str || ">"),obj);
}

/**
 * Post increment
 */
log('post icrement');
 var a = 123;
 var b = a++; 
 log(b);//123
 log(a);//124
 log(b);//123

 /**
  * Pre increment
  */
  var c = 121;
  var d = --c;
  log('pre icrement');
  log(c);//120
  log(d);//120
 
 /**
  * Null is an object
  */ 

  /**
   * typeof will give string of the type of object
   * • "number" • "string" • "boolean" • "undefined" • "object" • "function"
   * 
   * NUMBERS
   * 
   * When a number starts with a 0, it's considered an octal number. 
   * For example, the octal 0377 is the decimal 255
   * 
   * In JavaScript, you put 0x before a hexadecimal value (also called hex for short)
   * 
   * 1e1 (also written as 1e+1 or 1E1 or 1E+1) represents the number one with one zero after 
   * it, or in other words, 10
   * 
   */
  log(1e1); // 10
  log(2e3); //2000
  log(2e-3);// 0.002
  /**
   * NUMBERS
   * 
   * Infinity
   * 
   * To be precise, the biggest number JavaScript can handle is 1.7976931348623157e+308
   * while the smallest is 5e-324
   * 
   * Dividing by zero gives you in nity: 
   * > var a = 6 / 0;
   * In nity is the biggest number (or rather a little bigger than the biggest)
   * 
   * var i = -Infinity;
   * -Infinity
   * 
   * When you sum in nity and minus in nity, you don't get 0, but something that is called NaN
   * Infinity – Infinity; // NaN
   * -Infinity + Infinity; // NaN
   * Infinity – 20 // Infinity
   * -Infinity * 3; //Infinity
   * Infinity / 2; //Infinity
   * 
   *  NaN is a special value that is also a number:
   * typeof NaN; // number
   * You get NaN when you try to perform an operation that assumes numbers, but the operation fails.
   * 
   * NaN is contagious, so if you have even one NaN in your arithmetic operation, the whole result goes down the drain
   * 1 + 2 + NaN; // NaN
   * 
   * STRINGS
   * A lazy way to convert any number-like string to a number is to multiply it by 1
   * var s = "100"; typeof s; // string
   *  s = s * 1; // 100
   * typeof s; //number
   * 
   * If the conversion fails, you'll get NaN:
   * 
   * BOOLEANS
   * If you use a logical operator on a non-Boolean value, the value is converted to Boolean behind the scenes:
   * var b = "one";
   * !b; //false
   * 
   * Most values convert to true with the exception of the following, which convert to false:
   *  • The empty string ""
      • null
      • undefined
      • The number 0
      • The number NaN
      • The Boolean false
   * 
   * These six values are referred to as falsy, while all others are truthy 
   * (including, for example, the strings "0", " ", and "false").
   * 
   * LOGICAL OPERATORS
   * Similarly for logical operations, ! has the highest precedence and is executed  
   * first, assuming there are no parentheses that demand otherwise. Then, in the order 
   * of precedence, comes && and  finally ||
   * !, &&, ||
   * 
   * Use parentheses instead of relying on operator precedence.
   * 
   * true && "something";  // true
   */

  typeof Infinity;//number
  log(Infinity);
  log(1e308); //1e+308
  log(1e309); //Infinity

  /**
   * It's common to use this behavior to de ne variables when you're not sure whether they were previously de ned
   */

   /**
    * This is simple and looks elegant, but be aware that it's not completely foolproof. 
    If mynumber is de ned and initialized to 0 (or to any of the six falsy values), 
    this code might not behave as you expect:

      • The empty string ""
      • null
      • undefined
      • The number 0
      • The number NaN
      • The Boolean false

    */
   function deineVariable(mynumber){
    var mynumber = mynumber || 10;
    log(mynumber);
   }
   deineVariable(0); // 10
   deineVariable(1); // 1

/**
 * COMPARISON
 * == Equality comparison: Returns true when both operands are equal. The operands are converted to the same type before being compared.
 * === Equality and type comparison: Returns true if both operands are equal and of the same false type. 
 * != Non-equality comparison: Returns true if the operands are not equal to each other (after a type conversion).
 * !== Non-equality comparison without type conversion:
 * 
 * Note that NaN is not equal to anything, not even itself
 * 
 * Using the typeof operator on a non-existing variable is not an error. You get the string "undefined"
 * If you declare a variable without giving it a value, this is, of course, not an error. But, the typeof still returns "undefined"
 * 
 * The null value, on the other hand, is not assigned by JavaScript behind the scenes; 
 * it's assigned by your code
 * var somevar = null; // null
 * typeof somevar; // object
 * 
 * Although the difference between null and undefined is small, it could be critical at times.
 *  var i = 1 + undefined; // NaN
 *  var i = 1 + null; // 1
 * 
 * This is because of the different ways null and undefined are converted to the other primitive types.
 * Conversion to a number:
 *  1 * undefined; //NaN
 *  1 * null; // 0
 * Conversion to a Boolean:
 *  !!undefined; // false
 *  !!null; //false
 * Conversion to a string:
 *  "value: " + null; // "value: null"
 *  "value: " + undefined; // "value: unde ned"
 */   

 /**
  * RECAP
  * There are  ve primitive data types in JavaScript:
      ° Number
      ° String
      ° Boolean
      ° Undefined ° Null

    Everything that is not a primitive data type is an object

    The primitive number data type can store positive and negative integers or  
    floats, hexadecimal numbers, octal numbers, exponents, and the special numbers NaN, 
    Infinity, and –Infinity

    • The string data type contains characters in quotes
    • The only values of the Boolean data type are true and false
    • The only value of the null data type is the value null
    • The only value of the unde ned data type is the value undefined
    • All values become true when converted to a Boolean, with the exception of the six falsy values:
      ° ""
      ° null
      ° undefined 
      ° 0
      ° NaN
      ° false
  */

  /**
   * Arrays
   * 
   * Deleting elements
   * var a = [1, 2, 3];
   * delete a[1]; // true
   * a; // [1, undefined, 3]
   * typeof a[1] // "undefined"
   * 
   * typeof [] // object
   */

var arr = [1,2,3];
log(typeof arr, 'typeof []');
log(Array.isArray(arr),'Array.isArray(arr)'); //flase
log(Array.isArray({}),'Array.isArray({}})'); // false

/**
 * Code blocks
 * 
 */

// inner(); // error
log(xx); // undefined

{
  var x = xx; // undefined
  {
    var xx = 'test'; 
    function inner() {
      log('inner');
    }
    log(x); //undefined
    log(xx); // test
    {
      log(x);
      log(xx); // test
    }
  }
};

inner(); // inner
log(xx); // test

(function hoisting() {
  var yx = xx;
  log(yx,'hoist > '); // test
})();

(function test(a) {
  log(a);
  return function(b) {
    log(a+b,"undefined + NaN");
    log(undefined + NaN,"undefined + NaN"); //undefined
    return a+b;
  }
})(1)();

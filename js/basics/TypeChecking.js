/**
 * ===================================
 * Type Checking
 * ===================================
 *
   JavaScript defines seven built-in types:

   null
   undefined
   boolean
   number
   string
   object
   symbol -- added in ES6!

 Note: All of these types except object are called "primitives"

 typeof undefined     === "undefined"; // true
 typeof true          === "boolean";   // true
 typeof 42            === "number";    // true
 typeof "42"          === "string";    // true
 typeof { life: 42 }  === "object";    // true

 // added in ES6!
 typeof Symbol()      === "symbol";    // true


 typeof null === "object"; // true
 var a = null;
 (!a && typeof a === "object"); // true

 So what's the seventh string value that typeof can return?

 --------
 FUNCTIONS
 typeof function a(){ ... } === "function"; // true
 you'll see it's actually a "subtype" of object
 a function is referred to as a "callable object"

 -------
 ARRAYS
 typeof [1,2,3] === "object"; // true
 it's most appropriate to think of them also as a "subtype" of object

 ------
 undefined vs "undeclared"

 Variables that have no value currently, actually have the undefined value.
 var a;

 typeof a; // "undefined"

 An "undefined" variable is one that has been declared in the accessible scope, but at
 the moment has no other value in it. By contrast, an "undeclared" variable is one that
 has not been formally declared in the accessible scope.

 var a;

 a; // undefined
 b; // ReferenceError: b is not defined

 var a;

 typeof a; // "undefined"

 typeof b; // "undefined"

 The typeof operator returns "undefined" even for "undeclared" (or "not defined") variables
 */
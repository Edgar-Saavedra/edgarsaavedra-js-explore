var a = 'bar';
var b = ["f","o","o"];
/**
 ===========================================
 String
 ===========================================
 */
console.log(a.charAt(1));//a

//Also, many of the array methods that could be helpful
// when dealing with strings are not actually available for
// them, but we can "borrow" non-mutation array methods against our string:
console.log(Array.prototype.join.call( a, "-" ));//b-a-r


/**
 ===========================================
 ARRAYS
 ===========================================
 */
Array.prototype.map.call(a,function(v){
  console.log(v); // b a r
});
//Warning: Be careful! This approach doesn't work for strings with complex (unicode) characters in them (astral symbols, multibyte characters, etc.).
// You need more sophisticated library utilities that are unicode-aware for such operations to be handled accurately.
console.log(a.split('').reverse().join(''));
console.log( Array.prototype.slice.call(a)); //[ 'b', 'a', 'r' ]


/**
 ===========================================
 NUMBERS
 ===========================================
 */
//because number values can be boxed with the Number object wrapper (see Chapter 3),
// number values can access methods that are built into the Number.prototype (see Chapter 3). For example, the toFixed(..)

var aa = 42.59;

//method allows you to specify how many fractional decimal
// places you'd like the value to be represented with
console.log(aa.toFixed( 0 ));//43

var onethousand = 1E3;						// means 1 * 10^3
var onemilliononehundredthousand = 1.1E6;	// means 1.1 * 10^6

//Small Decimal Values
//0.1 + 0.2 === 0.3; // false
//Simply put, the representations for 0.1 and 0.2 in binary floating-point
// are not exact, so when they are added, the result is not exactly 0.3. It's really close: 0.30000000000000004

//console.log( (0.1 + 0.2).toFixed(1) ); //0.3

isInteger = function(num) {
  return typeof num == "number" && num % 1 == 0;
};

console.log(isInteger( 42 ));		// true
console.log(isInteger( 42.000 ));		// true
console.log(isInteger( 42.3 ));		// false

/**
 ===========================================
 undefined / null / NaN
 ===========================================
 */
//console.log(typeof undefined); //undefined
//console.log(typeof null); //object

//In other words: "the type of not-a-number is 'number'!" Hooray for confusing names and semantics.

//NaN is a kind of "sentinel value" (an otherwise normal value that's assigned a special meaning)
//hat represents a special kind of error condition within the number set
//"I tried to perform a mathematic operation but failed, so here's the failed number result instead."
//var a = 2 / "foo";
//isNaN( a ); // true
//console.log(typeof NaN); //number

//As of ES6, finally a replacement utility has been provided: Number.isNaN(..)
function isANumber(n){
  return typeof n === "number" && !Number.isNaN(n);
};
console.log(isANumber(2/'foo'))

/**
 ===========================================
 NATIVES
 ===========================================

 Here's a list of the most commonly used natives:

 String()
 Number()
 Boolean()
 Array()
 Object()
 Function()
 RegExp()
 Date()
 Error()
 Symbol() -- added in ES6!

 As you can see, these natives are actually built-in functions.


 ---------------------------------------
 var s = new String( "Hello World!" );

 console.log( s.toString() ); // "Hello World!"


 ---------------------------------------
 var a = new String( "abc" );

 typeof a; // "object" ... not "String"

 a instanceof String; // true

 Object.prototype.toString.call( a ); // "[object String]"

 Boxing (primitive -> Native) (heap)
 ==============================================
 Implicit conversion of a value type (int, char etc.) to a reference type (object),
 is known as Boxing. In boxing process, a value type is being allocated on the heap rather than the stack.

 Unboxing (Native -> primitive) (stack)
 ==============================================
 Explicit conversion of same reference type (which is being created by boxing process); back to a value
 type is known as unboxing. In unboxing process, boxed value type is unboxed from the heap and assigned
 to a value type which is being allocated on the stack.
 */
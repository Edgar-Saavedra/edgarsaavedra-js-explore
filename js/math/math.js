/**
 * given an integer greater than zero,
 * write a function to determine if
 * it’s a power of 2
 */
function isPowerOfTwo(number) {

  // If the number is odd, it's not a power of two, we can short-circuit
  if (number % 2) {
    return false;
  }

  if (number > 2) {
    return isPowerOfTwo(number/2);
  }
  return !(number % 2);
}

//console.log(isPowerOfTwo(2147483648)); // true
//console.log(isPowerOfTwo(1)); // false
//console.log(isPowerOfTwo(11)); // false
//console.log(isPowerOfTwo(64)); // true
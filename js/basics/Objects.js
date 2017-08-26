// Utilities required for this example
// ========================================

// extend()
// Extend an object a with the properties
// in object b
function extend( a, b ){
  for( var key in b )
    if( b.hasOwnProperty(key) )
      a[key] = b[key];
  return a;
}

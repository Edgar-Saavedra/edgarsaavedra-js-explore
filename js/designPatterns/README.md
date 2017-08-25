# NOTES

## Implied globals
Implied globals can be a problem.
meaning that any variable you don’t declare becomes a
property of the global object (and is accessible just like a properly declared global variable).

```
//The rule of thumb is to always declare variables with var

function sum(x, y) {
    var result = x + y;
    return result;
}
```

chain assignments as part of a var declaration. can cause un expected globals.

```
function foo() {
    var a = b = 0;
    // ...
    //its like saying ...
    //var a = (b = 0);
}
```

## Side Effects When Forgetting var

  - Globals created with var (those created in the program outside of any function)
    cannot be deleted.
  - Implied globals created without var (regardless if created inside functions) can be
    deleted.... implied globals are technically not real variables, but they are properties of the global object.

    ```
      // define three globals
      var global_var = 1;
      global_novar = 2; // antipattern
      (function () {
        global_fromfunc = 3; // antipattern
      }());

      // attempt to delete
      delete global_var; // false
      delete global_novar; // true
      delete global_fromfunc; // true
      // test the deletion
      typeof global_var; // "number"
      typeof global_novar; // "undefined"
      typeof global_fromfunc; // "undefined"

    ```

## Access to the Global Object
If you need to access the global object without hard-coding the identifier window, you can
do the following from any level of nested function scope:

```
  var global = (function () {
      return this;
  }());
```

## Hoisting
When a variable is defined after it has been called in a function. The vars get hoisted to the top, often causing and undefined error.

```
  myname = 'global';
  function func()
  {
    alert(myname); //undefined
    var myname = 'local';
    alert(myname);
  }
```

## for loops
Always cache the lenght of loops to avoid itterating over entire array, specially the dom.
```
  for (var i = 0; max = myarray.length; i < max; i+=1)
  {
    //do something
  }
```

## Enumeration (for in loops)
It’s important to use the method hasOwnProperty() when iterating over object properties
to filter out properties that come down the prototype chain.

```
  for (var i in obj)
  {
    if(obj.hasOwnProperty(i))
    {
      // we're good to go : obj[i]
    }
  }
```

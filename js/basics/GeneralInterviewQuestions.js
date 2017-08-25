
export const init = () =>
{

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

  function GeneralInterview()
  {
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
    this.understandNull = function()
    {
      var bar = null;
      console.log(typeof bar === "object"); // true
      console.log((bar !== null) && (typeof bar === "object"));  // logs false
      var bar2 = [];
      console.log(((bar2 !== null) && (typeof bar2 === "object") && Object.prototype.toString.call(bar2) === '[object Array]')); // logs true
    }

    /**
     What will the code below output to the console and why?

     In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

     In the inner function, though, this no longer refers to myObject.

     As a result, this.foo is undefined in the inner function,
     whereas the reference to the local variable self remains in scope and is accessible there.
     */
    this.understandingScope = function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);//bar
      console.log("outer func:  self.foo = " + self.foo);//bar

      var inner = function() {
        if(this)
          console.log("inner func:  this.foo = " + this.foo); //undefined
        console.log("inner func:  self.foo = " + self.foo);//bar
      };
      inner();


      var hero = {
        _name: 'John Doe',
        getSecretIdentity: function (){
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

    }


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
    this.semiCollonError = function() {
      function foo1()
      {
        return {
          bar: "hello"
        };
      }

      function foo2()
      {
        return
        {
          bar: "hello"
        };
      }
      console.log("foo1 returns:");
      console.log(foo1()); // object
      console.log("foo2 returns:");
      console.log(foo2()); //undefined
    }

    /**
     * This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because
     * the result of the operation is non-numeric (e.g., an attempt to divide by zero).
     *
     * A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN() function,
     * which is a different and more reliable than the old global isNaN() function.
     */
    this.understandNAN = function()
    {
      console.log(typeof NaN === "number");  // logs "true"
      //Additionally, NaN compared to anything – even itself! – is false:
      console.log(NaN === NaN);  // logs "false"
    }

    /**
     *  Numbers in JavaScript are all treated with floating point precision,
     *  and as such, may not always yield the expected results.
     */
    this.understandNumbers = function()
    {
      console.log(0.1 + 0.2);
      console.log(0.1 + 0.2 == 0.3);
      console.log(10+'2'); // 102
      console.log(10/'2'); // 5
      console.log(10*'10'); // 100
      console.log(10%'4'); // 2
      console.log(10-'4'); // 4
    }

    this.understandEvents = function()
    {

      (function() {
        /*
         2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second)
         whereas 3 is being logged after a delay of 0 msecs.
         OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being logged right away?
         And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later line of code?

         The browser has an event loop which checks the event queue and processes pending events
         When the onclick handler is complete, the queue is checked and the event is then handled (e.g., the onload script is executed).

         */
        console.log(1);
        setTimeout(function(){console.log(2)}, 1000);
        setTimeout(function(){console.log(3)}, 0);
        console.log(4);
      })();
    }

    /**
     * numeric values are always stored as floating point values.
     */
    this.isInteger = function(x)
    {
      return (x^0) === x;
    }

    this.isPalindrome = function(str)
    {
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
      str = str.replace(/\W/g,'').toLocaleLowerCase();
      return (str == str.split('').reverse().join(''));
    }

    this.sum = function (x)
    {
      if (arguments.length == 2) {
        return arguments[0] + arguments[1];
      } else {
        return function(y) { return x + y; };
      }
    }

    /**
     * (a) What gets logged to the console when the user clicks on “Button 4” and why?
     *
     * No matter what button the user clicks the number 5 will always be logged to the console.
     * This is because, at the point that the onclick method is invoked (for any of the buttons),
     * the for loop has already completed and the variable i already has a value of 5.
     */
    this.addButton = function()
    {
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
        btn.addEventListener('click', function(){ console.log(i); });
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
        btn.addEventListener('click', (function(i) {
          return function() { console.log(i); };
        })(i));
        document.body.appendChild(btn);
      }
    }

    this.arrayMethods = function()
    {
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
    }

    /**
     * The stack overflow is eliminated because the event loop handles the recursion, not the call stack.
     * When  the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem.
     * Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear,
     * @param list
     */
    this.correctRecursive = function(list) {
      var nextListItem = function(list) {

        if(list)
        {
          var item = list.pop();

          if (item) {
            // process the list item...
            setTimeout( nextListItem, 0);
          }
          return item;
        }
      };
      console.warn(nextListItem(list));
    }

    /**
     * Lear how implement this recursively
     * @param objArr
     */
    this.deepCopy = function(objArr)
    {

    }

    this.talk = function()
    {
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
    }
    this.talk();
  }
  (new GeneralInterview());
}
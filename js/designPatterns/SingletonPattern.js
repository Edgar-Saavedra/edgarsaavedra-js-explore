function log(obj)
{
  console.log('SingletonPattern.js',obj)
}

export const main = () =>
{
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

  var mySingleton = (function () {
    var instance;

    /**
     * Method to return our instance
     * @returns {{publicMethod: publicMethod, publicPropety: string, getRandomNumber: getRandomNumber}}
     */
    function init()
    {
      //singleton
      //private methods and vars
      var privateVariable = "I am also private";
      var privateRandomNumber = Math.random();
      function privateMethod()
      {
        log('I am private');
      }
      return {
        publicMethod : function()
        {
          log("public can see mee!");
        },
        publicPropety : "I am also public",
        getRandomNumber : function()
        {
          return privateRandomNumber;
        }
      }
    }

    return {
      getInstance : function()
      {
        if(!instance)
        {
          instance = init();
        }
        return instance;
      }
    }

  })();


  var singleA = mySingleton.getInstance();
  //var singleB = mySingleton.getInstance();
  //log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
  //singleA.publicMethod();

}


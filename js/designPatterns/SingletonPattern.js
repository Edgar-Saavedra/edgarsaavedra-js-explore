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


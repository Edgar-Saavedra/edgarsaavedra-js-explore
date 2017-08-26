export const main = () =>
{
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
  truck.setModel = function(modelName)
  {
    this.model = modelName;
  }
  truck.setColor = function(color)
  {
    this.color = color;
  }
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

  function log(obj)
  {
    console.log('DecoratorPattern.js',obj)
  }

  /**
   * Class we will decorate
   * @param vehicleType
   * @constructor
   */
  function Vehicle(vehicleType)
  {
    this.vehicleType = vehicleType;
    this.model = 'default';
    this.license = '00000-000';
  }

  /**
   * The Class We will decorate
   * @constructor
   */
  function MacBook()
  {
    this.cost = function()
    {
      return 997;
    }
    this.screenSize = function()
    {
      return 11.6;
    }
  }

  /**
   * ================================================
   * Decorators for our MacBook's
   * ================================================
   */

  //decorator 1
    function memory(macbook)
    {
      var v = macbook.cost();
      macbook.cost = function()
      {
        return v + 75;
      }
    }
  //decorator 2
    function engraving(macbook)
    {
      var v = macbook.cost();
      macbook.cost = function()
      {
        return v + 200;
      }
    }

  //decorator 3
    function insurance(macbook)
    {
      var v = macbook.cost();
      macbook.cost = function()
      {
        return v + 250;
      }
    }

    /**
     * ================================================
     * Pseudo-classical Decorators
     * ================================================
     */
  // see this jsbin for more info on thise types: http://jsbin.com/UMEJaXu/1/edit?html,js,output
  // for now we will stick to examples above
}




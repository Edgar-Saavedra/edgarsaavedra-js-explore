function log(obj)
{
  console.log('FactoryPattern.js',obj)
}

export const main = () =>
{
  /**
   * it doesn't explicitly require us to use a constructor
   * actory can provide a generic interface for creating objects
   * where we can specify the type of factory object we wish to be created.
   *
   * We inform the Factory what type of object is required (e.g "Button", "Panel")
   * and it instantiates this, returning it to us for use.
   */

  //Create instance of our factory that makes cars
  var carFactory = new VehicleFactory();
  var car = carFactory.createVehicle({
    vehicleType : 'truck'
  });
  //log(car);

  /**
   * Constructor for new cars
   * @param options
   * @constructor
   */
  function Car(options)
  {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
  }

  /**
   * Constructor for new trucks
   * @param options
   * @constructor
   */
  function Truck(options)
  {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
  }

  /**
   * =============================================
   * Factory for vehicle
   * =============================================
   *
   * When To Use The Factory Pattern
   *
   * When our object or component setup involves a high level of complexity
   * When we need to easily generate different instances of objects depending on the environment we are in
   * When we're working with many small objects or components that share the same properties
   * When composing objects with instances of other objects that need only satisfy an API contract
   *
   * @constructor
   */
  function VehicleFactory(){
    this.vehicleClass = Car;
    this.createVehicle = function(options)
    {
      switch (options.vehicleType)
      {
        case "car":
          this.vehicleClass = Car;
          break;
        case "truck":
          this.vehicleClass = Truck;
          break;
      }
      return new this.vehicleClass(options);
    }
  }


}


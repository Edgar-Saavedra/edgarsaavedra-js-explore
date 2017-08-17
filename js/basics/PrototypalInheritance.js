//only one constructor : objects
//each object has a private property [[Prototype]], which holds a link to another object called its prototype

//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
//Important null is a valid object, null has no prototype, and acts as the final link in this prototype chain.

//all objects in JavaScript are instances of Object which sits on the top of a prototype chain

export const inheritingProperties = () =>{
  //JavaScript objects are dynamic "bags" of properties (referred to as own properties)
  var proto = {
    hello: 'world',
  };
  var obj = Object.create(proto);
  console.warn('ECMAScript 2015 Method to get prototype Object.getPrototypeOf()',Object.getPrototypeOf(obj));
  console.warn('defacto way to get the proto : __proto__ ',obj.__proto__);

  //In ES5, it will throw a TypeError exception if the obj parameter isn't an object
// TypeError: "foo" is not an object (ES5 code)
  console.warn('proto of string : ',Object.getPrototypeOf('foo'));
  return false;
}

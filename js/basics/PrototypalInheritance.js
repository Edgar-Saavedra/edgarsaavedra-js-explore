//only one constructor : objects
//each object has a private property [[Prototype]], which holds a link to another object called its prototype

//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
//Important null is a valid object, null has no prototype, and acts as the final link in this prototype chain.

//all objects in JavaScript are instances of Object which sits on the top of a prototype chain

const inheritingProperties = () =>{
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

/**
 * A simple example to create instances of an object
 * and using the prototype
 */
const es5Instances = () =>
{
  function Parent(fN,lN = 'Last') {
    this.sayName = function() {
      return fN+' '+lN;
    }
  }

  Parent.prototype.addedMethod = function ()
  {
    return 'more stuff';
  }

  let child = new Parent('First');

  child.childSays = function(saying = 'Im a child')
  {
    return saying;
  };
  //child.sayName(); // First Last
  //child.addedMethod(); // more stuff
  //child.childSays(); //'Im a child'
}

/**
 * Using call method to chain constructors for an object
 * @link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
const es5Inheritance = () =>
{
  function Parent(name = 'Family Name',age = 0)
  {
    this.name = name;
    this.age = age;
    this.sayInfo = function()
    {
      return this.name+' - '+this.age;
    }
    this.talk = function ()
    {
      console.log(this.sayInfo());
    }
  }

  function Child(name,age)
  {
    Parent.call(this,name,age);
    this.childAttr = 'child attr';
    this.sayInfo = function()
    {
      return this.name+' - '+this.age+' '+this.childAttr;
    }
    this.talk = function ()
    {
      console.log(this.sayInfo());
    }
  }

  function GrandChild(name,age)
  {
    Child.call(this,name,age);
    this.grandAttr = 'grand child';
    this.sayInfo = function()
    {
      return this.name+' - '+this.age+' '+this.childAttr+' '+this.grandAttr;
    }
    this.talk = function ()
    {
      console.log(this.sayInfo());
    }
  };
  let greatGrandChild = new GrandChild();
  greatGrandChild.talk(); //Family Name - 0 child attr grand child
  greatGrandChild = new GrandChild('Grand Name',20);
  greatGrandChild.talk(); //Grand Name - 20 child attr grand child
}

/**
 * Displaying the proto chain in es5
 */
const protoChainES5 = () =>
{
  function Parent(){
    this.a = 1;
    this.b = 2;
  }
  let Child = new Parent();
  Child.b = 3;
  Child.c = 4;
  console.log(Child.__proto__); //Parent
  console.log(Child.__proto__.__proto__);//Object
  console.log(Child.__proto__.__proto__.__proto__);//null
  //console.log(Child.__proto__.__proto__.__proto__.__proto__);//Error
}


/**
 * Displaying the proto chain in es6
 */
const protoChainES6 = () =>
{
  let Parent = {
    a : 1,
    b : 2,
    d : function()
    {
      return 5;
    }
  }
  let Child = Object.create(Parent);
  Child.b = 3;
  Child.c = 4;
  console.log(Child.__proto__); // { a: 1, b: 2, d: [Function: d] }
  console.log(Child.__proto__.__proto__);//Object
  console.log(Child.__proto__.__proto__.__proto__);//null
}


export const init = () =>
{
  //es5Instances();
  //es5Inheritance();
  //protoChainES5();
  //protoChainES6();
  constructor();
}
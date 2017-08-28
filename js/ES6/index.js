/**
 * ====================================================================
 * Destructuring
 * ====================================================================
 * Destructing , when you can extract a value
 * from an object/array into a variable
 * @type {{bar: number, baz: number}}
 */
var foo =
{
  bar : 1,
  baz : 2
}

var { bar , baz } = foo;

//console.log(bar); // result 1

/**
 * So destructoring is mos useful in Promises
 */
//Promise.all([promise1,promise2])
//  .then(function ([ result1,result2 ]) {
//    // console.log(result1);
//  });

var foo2 = 2;
var obj = {
  bar : 1,
  foo2 // this is the same as foo2 : 2
}

/*
  This is really good if we have  method
  var name = "will";
  var age = 34;
  some.method( { name,age } );
 */

/*
  var name = "will";
  var obj = {
    ["name" + name] = "some value"
  }
* */

//desctructuring arguments
function calBMI({ weight, height, max = 25, callback })
{
  var bmi = weight / Math.pow(height,2);
  if(bmi > max)
  {
    console.log("you're overwiehgt")
  }
  if(callback)
  {
    calBMI(bmi);
  }
}
//calBMI({ weight , height, max : 25 });
//calBMI({ weight, height , callback : function(){ } });

/**
 * ====================================================================
 * Template strings
 * ====================================================================
 */

var name = "will";
var thing = "party";
var greet = `hi, my name is ${name}
  and I like to ${thing}!`;

/**
 * ====================================================================
 * Block Scoping let & const
 * ====================================================================
 */

var a = 1;

if(true)
{
  //this will be hoisted
  var b = 2;
}
console.log(b);

// let is the new var
if(true)
{
  let c = 2;
}
//console.log(c); // c is not defined

//const , is like let except that the value of the var can't be changed.

/**
 * ====================================================================
 * Classes
 * ====================================================================
 */

class Parent
{
  //age = 34;
  constructor()
  {
    console.log('constructor');
  }
  foo()
  {
    console.log('foo');
  }
  static bar()
  {
    console.log('bar');
  }
}

class Child extends Parent
{
  constructor()
  {
    super();
  }
  baz()
  {
    console.log('baz');
  }
}

//var parent = new Parent();
//parent.foo();
//Parent.bar();
//var child  = new Child();
//child.baz();

/**
 * ====================================================================
 * Arrow functions
 * ====================================================================
 */
let arrow = (a,b) =>
{
  return a + b;
}

var module = {
  age : 30,
  foo : function()
  {
    //console.log(this.age); //logs 30
    setTimeout(function(){
      console.log(this.age);
    }.bind(this),100);

    //arrow functions bind this
    setTimeout(()=>{
      console.log(this.age);
    },100);

    //$(".some-el").width().jQuery(()=>{
    //  //$(this) we overriden value of this
    // the value of this will be the value of the containing scope
    //});
  }
}

//module.foo();

/**
 * ====================================================================
 * Modules
 * ====================================================================
 */
//before
//module.exports.foo = function () {
//
//}
//module.exports.bar = function () {
//
//}
//
//after
//export default function () {
//
//}
//export var foo1 = 3;
//export function  foo()
//{
//
//}
//export function  bar()
//{
//
//}

//before
//var myModule = require('MyModule')
//now
//these have to be at the top of file
//import myModule from 'myModule';
// you can also import as descrutoring
// import { foo , bar } from 'myModule';

/**
 * ====================================================================
 * Generator function
 * ====================================================================
 */

async function aa()
{
  var friends = await $.get('http://somesite.com/friends');
  console.log(friends); // we gre promise as if we already got it.
}
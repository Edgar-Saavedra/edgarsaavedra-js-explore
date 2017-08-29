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
//console.log(b); //2

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


//async function aa() {
//  var result = await $.get('https://httpbin.org/get');
//  console.warn(result.origin);
//}

/**
 * ====================================================================
 * Promises
 * ====================================================================
 */
let myPromise  = new Promise(function(resolve,reject){
//cleaning room

  let isClean = false;
  setTimeout(function(){
    isClean = true;
    if(isClean)
      resolve('clean');
    else
      reject('not clean');
  },1000)

});

//myPromise.then(function(resolve){
//  console.log(`the room is ${resolve}`);
//}).catch(function(reject){
//  console.log(`the room is ${reject}`);
//});

let cleanRoom = () => {
  return new Promise((resolve,reject)=>{
    resolve(`Cleaned The Room`);
  })
}

let removeGarbage = (message) => {
  return new Promise((resolve,reject)=>{
    resolve(`${message} remove the garbage`);
  })
}


let wonIceCream = (message) => {
  return new Promise((resolve,reject)=>{
    resolve(`${message} won ice cream`);
  })
}

//cleanRoom().then((result)=>{
//  return removeGarbage(result);
//}).then((result)=>{
//  return wonIceCream(result);
//}).then((result)=>{
//  console.log(result); //Cleaned The Room remove the garbage won ice cream
//})

/**
 * To run all promises in parallel
 */
//Promise.all([cleanRoom(),removeGarbage(),wonIceCream()]).then((result)=>{
//  console.log('all finished');
//});


/**
 * To run as soon as one finishes
 */
//Promise.race([cleanRoom(),removeGarbage(),wonIceCream()]).then((result)=>{
//  console.log('one of them finished');
//  console.log(result);
//});



// ES6 Promise Example

// server
// -----------------------------------------------------
// Imagine this array lives in your server
const people = [
  {name: 'John Doe', age: '30'},
  {name: 'Jane Doe', age: '24'}
];

// client
// -----------------------------------------------------

// function that simulates an AJAX call to our
// imaginary server, where the people array lives.
// The call may succeed or fail.
const simulateAJAXCall = (index, cb) => {
  let chance = Math.random();
  let isSuccess= (chance <= 0.80) ? true : false;

  return setTimeout(() => {
    if (isSuccess) {
      return cb(people[index]);
    }
    else {
      return cb(null);
    }
  }, 1000)
}

// Function that returns a promise to search
// a person according to his index
const getPerson = (index) => {

  // The promise resolves if the data comes back
  // successfully and it rejects in case of an error
  return new Promise((resolve, reject) => {

    console.log('fetching person...');
    simulateAJAXCall(index, (data) => {

      if (data === null) {
        reject('Something went wrong!');
      }

      resolve(data);
    });
  });
}

// Call getPerson, which will return a promise.
// If the promise resolves, then log the person,
// if there's an error, it will go to the catch
// block and be handled there.
//Promise.race([getPerson(1),getPerson(0)])
//.then(person => {
//
//  console.log(person);
//}).catch(error => {
//
//  console.log(error);
//});

//async await allows for more sync writting of promises
const showMyPerson = async () =>
{
  var myPerson = await getPerson(1);
  console.log('showMyPerson()',myPerson);
}
showMyPerson();
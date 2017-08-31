/**
 * ==================================
 * Backtracing
 * ==================================
 */

function backtracing(n,arr)
{
  if(n>0)
  {
    backtracing(n-1,arr)
  }
  arr.push(n);
}
var arr1 = [];
backtracing(10,arr1);
//console.log(arr1); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/**
 * ==================================
 * Reverse Backtracing
 * ==================================
 */

function reverseBacktracing(n,arr)
{
  arr.push(n);
  //console.log(arr);
  if(n>0)
  {
    reverseBacktracing(n-1,arr);
  }
}

var arr2 = [];
reverseBacktracing(10,arr2);
//console.log(arr2); //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

/**
 * ==================================
 * Search in boxes
 * ==================================
 */
var arr3=[[[[3,3,4]]],[[100]],[[1]],[[[['adf']]]]];

function searchInBoxes(box)
{
  for(let item in box)
  {
    if(box[item] instanceof Array)
    {
      searchInBoxes(box[item]);
    }else if(typeof box[item] === 'number')
    {
      console.log(`found ${box[item]}`);
    }
  }
}
searchInBoxes(arr3);


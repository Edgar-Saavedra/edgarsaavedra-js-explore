// top-down implementation
function mergeSortTopDown(array) {
  if(array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
  var array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

function test()
{
  var a = [3,23,423,423,4,324,23432];
  while(a.length > -1)
  {
    a.shift();
  }
}


var countdown = function(value,arr) {
  arr.push(value);
  if (value > 0) {

    return countdown(value - 1,arr);

  } else {
    return arr;
  }
};

setTimeout(function(){
  var array = [9, 2, 5, 6,3,4];
  console.log(mergeSortTopDown(array.slice()));
},0);
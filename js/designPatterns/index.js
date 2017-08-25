const betterForLoop = (myarray) => {
  var i = 0,
    max = myarray.length;
  for ( i = 0; i < max; i+=1 )
  {
    console.log('betterForLoop',myarray[i]);
  }
}

const betterForLoop2 = (myarray) => {
  var i = myarray.length;
  while((i-=1)> - 1)
  {
    console.log('betterForLoop2',myarray[i]);
  }
}

//betterForLoop([1,2,3,4,562,23,2]);
betterForLoop2([1,2,3,4,562,23,2]);
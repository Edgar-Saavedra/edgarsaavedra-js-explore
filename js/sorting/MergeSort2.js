let inputArray = [9,7,3,1,6,3,2,6,8,9,2,3,0];
//let orgArr = inputArray.slice(0);
MergeSort(inputArray);

console.log(inputArray);

console.log(new String('a') instanceof String && 'b' instanceof String);

function  MergeSort(inptArray)
{

  sort(inptArray,0,inptArray.length-1);

  /**
   * A sort function to sort an array
   * @param inArr Array to sort
   * @param start integer Starting Slot
   * @param end integer Ending slot
   */
  function sort(inArr,start,end)
  {
    //we have no more elements
    if(end <= start)
      return;

    let mid = Math.floor((start+end)/2);

    //left half
    sort(inArr,start,mid);
    //right half
    sort(inArr,mid+1,end);

    merge(inArr,start,mid,end);
  }

  /**
   * Takes two sections and merges them together
   * @param inputArray
   * @param start
   * @param mid
   * @param end
   */
  function merge(inptArray,start,mid,end)
  {

    //temporary array to manage the sorted values
    //in java [end-start+1] to account for the size from start to end
    // if start is 0 and end is 3, but we really have 4 slots, in other words we want temp to be same size as give array
    let tempArray = [];
    //index counter for left side
    let leftSlot = start;
    //index counter for right side
    let rightSlot = mid+1;
    // counter
    let k = 0;

    // if left larger than mid, then we are done sorting
    while(leftSlot <= mid && rightSlot <= end)
    {
      if(inptArray[leftSlot] < inptArray[rightSlot])
      {
        tempArray[k] = inptArray[leftSlot];
        leftSlot++;
      }
      else
      {
        tempArray[k] = inptArray[rightSlot];
        rightSlot++;
      }
      k++;
    }
    /**
     * We are don sorting, the above loop has completed
     * so both right and left side of the sub-array conisdered
     * sorted;
     *
     * consider the right side done being sorted, left must be sorted
     */
    if(leftSlot <= mid)
    { // consider the right side done being sorted, left must be sorted
      while(leftSlot<=mid)
      {
        tempArray[k] = inptArray[leftSlot];
        leftSlot = leftSlot + 1;
        k++;
      }
    }else if(rightSlot <= end)
    {
      // the left side had been sorted , then the right side must also have been sorted
      while(rightSlot <= end)
      {
        tempArray[k] = inptArray[rightSlot];
        rightSlot++
        k++;
      }
    }

    //copy over temp array
    for(let i = 0; i< tempArray.length;i++)
    {
      inptArray[start+i] = tempArray[i];
    }

    //console.log(`
    //  ======================================================
    //  leftSlot: ${start} (index) = ${orgArr[start]} (value) ,
    //  rightSlot: ${mid} (index) = ${orgArr[mid]} (value),
    //  end: ${end} (index) = ${orgArr[end]} (value)
    //  tempArray : ${tempArray}
    //  inputArray : ${inptArray}
    //`);

  }
}

//console.log(inputArray);
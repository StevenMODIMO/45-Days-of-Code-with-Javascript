/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */


 function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
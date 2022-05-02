/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


 */

function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    const finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (let j = 0; j < arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
}

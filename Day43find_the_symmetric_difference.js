/**
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
 */

function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    function symDiff(arrayOne, arrayTwo) {
      var result = [];
  
      arrayOne.forEach(function(item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach(function(item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  
    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
  }
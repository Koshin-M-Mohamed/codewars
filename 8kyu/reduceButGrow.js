// Given a non-empty array of integers, return the result of 
// multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x) {
    const numbers = x.reduce(function(accumulator, currentValue) {
      return accumulator * currentValue;
    }, 1);
    return numbers;
  }
  
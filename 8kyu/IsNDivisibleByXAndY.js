// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.


function isDivisible(n, x, y) {
    if (x === 0 || y === 0) {
      return false; // x or y cannot be zero
    }
    if (n % x === 0 && n % y === 0) {
      return true; // n is divisible by both x and y
    } else {
      return false; // n is not divisible by both x and y
    }
  }
  
  
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle,



function findNeedle(haystack) {
    const index = haystack.indexOf("needle"); 
    // this if condtion means if you can find "needle" because -1 means the index is not found 
    if (index !== -1) {
      return "found the needle at position " + index;
    }
  }
  
  
  
//   In this code, we first use the indexOf() method to 
//   find the index of the string "needle" in the haystack array. 
//   If the index is not -1 (meaning the string was found), 
//   we return a string that concatenates the message "found the needle at position " with the value of index. 
//   If the string is not found, the function returns undefined.
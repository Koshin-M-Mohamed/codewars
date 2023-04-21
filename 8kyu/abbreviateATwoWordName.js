// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    // name array splits the array in two words (the first and last names)
      let nameArr = name.split(" "); 
    // Then this grabs the first word in the array and then grabs the first letter of that word
      let firstInitial = nameArr[0][0]; 
    // this variable grabs the second word in that array and the first letter of that word
      let lastInitial = nameArr[1][0];
      return `${firstInitial.toUpperCase()}.${lastInitial.toUpperCase()}`;
    }
    
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let newArray = []
    for(let i=0; i<array.length; i++){
     newArray.push(array[i]* -1)
    }
    return newArray
  }

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favor"]



function stringToArray(string) {
  let array = [];
  let splitWords = string.split(" ");
  array = array.concat(splitWords);
  return array;
}

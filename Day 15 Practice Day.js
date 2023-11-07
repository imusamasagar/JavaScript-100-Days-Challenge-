// Day 15 Practice Set

// Question 1
// what will be the length 
let str = "Har\""
// the length should be 4 bcz \" is consider as a single character 
console.log(str.length)

// Question 2
// includes , starts with, end with methods
// include 
// it will return true if word is presnet in string otherwise it will return false
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word1 = 'over';
const word2 = 'hgd';
console.log(sentence.includes(word1))
console.log(sentence.includes(word2))
// so like more complexity
console.log(`The word "${word1}" ${sentence.includes(word1) ? 'is' : 'is not'} in the sentence`);

// startswith
// true if string start with your given condition and false otherwise
console.log(sentence.startsWith("The"))
console.log(sentence.startsWith("Theer"))

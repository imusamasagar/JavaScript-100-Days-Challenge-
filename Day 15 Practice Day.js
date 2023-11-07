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

// rndswith
// true if string ends with your given condition and false otherwise
console.log(sentence.endsWith("dog"))
console.log(sentence.endsWith("cat"))

// Question 3
// covert string to lower letters
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())

// Question 4
let str2 = "Please give Rs 1000"
let amount1 = Number.parseInt(str2.slice("Please give Rs ".length))
console.log(amount1)
console.log(typeof amount1)
// also written like that 
let amount2 = Number.parseInt(str2.slice(15))
console.log(amount2)
console.log(typeof amount2)

// Question 5
let friend = "usama"
friend[3] = "h"
console.log(friend) // friend is not changed, because string is immutable
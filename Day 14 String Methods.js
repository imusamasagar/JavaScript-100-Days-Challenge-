// Lecture 14 methods of strings

let name = "Usama Sagar"

// to find the length of the string
console.log(name.length)

// \" it will consider as a single character 
let name2 = "Usama \" Sagar"
console.log(name2.length)

// it will convert all letters to upper case
console.log(name.toUpperCase())

// it will convert all letters to lower case
console.log(name.toLowerCase())

// it will print the leeter from index 2 to 3 4 is not included
console.log(name.slice(2, 4))  

// it will print the leeter from index 2 to end of string
console.log(name.slice(2))
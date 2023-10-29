// Lecture 06 Operators 
console.log("Operators in Js")

// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a) //increment first then print
console.log("a++ = ", a++) //print first then increment
console.log("--a = ", --a) //decrement first then print
console.log("a-- = ", a--) //print first then decrement 
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
let c = 20;
c += 5 // same as c = c + 5
console.log("c is now = ", c)
c -= 5 // same as c = c - 5
console.log("c is now = ", c)
c *= 5 // same as c = c * 5
console.log("c is now = ", c)
c /= 5 // same as c = c / 5
console.log("c is now = ", c)
c **= 5 // same as c = c ^ 5
console.log("c is now = ", c)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment  */
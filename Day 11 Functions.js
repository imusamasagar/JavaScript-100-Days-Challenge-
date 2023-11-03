// Lecture 11 functions

// What is Function?
/*A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.*/

// used when multiple lines of code used repeatedly in the code
// avoid repentance of code
// should call or invoke the function otherwise they will not execute
// function with parameters 
// function without parameters / argument 
// functio return jo karta he call karne par wo cheez print or execute ho jati he
/*
Math.round ye use karte he value ko round of karne k liye java script me
*/

function sum(a,b)
{
  console.log("sum of numbers are")
  return a+b;
}
console.log(sum(54,14));
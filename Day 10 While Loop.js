// Lecture 10

/* What is a while loop?
Here, the while loop refers to a control flow statement that basically lets the execution of a code on the basis of any given Boolean condition. Therefore, we can think of a while loop as a type of a repeating it statement.*/

// while loop
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
// syntax is as initialize outside the bracket then while with a condition ahead then after bracket increment the while loop can run untill the condition is false do if you give that condition that dont false your code will crash

let i = 0;
while(i<n){
  console.log(i)
  i++;
}
// do while loop
// this loop body should execute one tome minimum either the condition is true or not bcz in do while loop the condition is placed after the body statements

let m = prompt("Enter the value of m")
m = Number.parseInt(m) 
let j = 10;
do{
  console.log(j)
  j++;
}while (j < m) 
// Day 21 Chapter 5 Practice Set

// Question no 1
// take input from user add it in array
let arr1 = [12,54,36,87,5]
console.log(arr1)
let b = prompt("enter the no ")
b= Number.parseInt(b)
arr1.push(b)
console.log(arr1)

// Question no 2
// keep adding number in array until the 0 come
let arr2 = [12,54,36,87,5]
let c;
do
  {
    c = prompt("enter number")
    c= Number.parseInt(c)
    arr2.push(c)
    // c++
  }
  while(c!=0);
console.log("0 is entered loop terminated")
console.log(arr2)
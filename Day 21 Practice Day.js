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

// Question no 3
// filter the array of numbers divisible of 10
let arr3 = [70,100,12,54,36,87,5]
let farr = arr3.filter((value)=>{
  return value%10==0
})
console.log(farr)

// Question no 4
// square of array numbers 
let arr4 = [1,54,7,25,6]
let sqarr = (value) =>{
  return value*value
}
let ar=arr4.map(sqarr)
console.log(ar)

// Question no 5
// factorial of no
let arr5 = []
let f = prompt("Number")
f = Number.parseInt(f)
for(let i=1; i<=f; )
  {
    arr5.push(f)
    f--
  }
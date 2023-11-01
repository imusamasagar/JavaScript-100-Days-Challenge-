// Lecture 09 for loops
// for loop consist of three parts initialize condition increment 
// for loop execute till the condition is true 
for(let a =0; a<=10; a++)
  {
    console.log(a)
  }
console.log("Table of 2")
let b;
for(b=1; b<=20; b++)
  // * this is multiply sign
  // + operator is used to indicate the space and also seperate the terms 
  {
    console.log("2 x "+b+" = "+ 2*b)
  }
// for of loop
// this loop is used to find the vaiue
// this loop used ti iterate over the values if iterabke object you can direct access the values without the index so that the use of for of loop
// it is used in arrays and strings 
// it ca also seperate the alphabets of the word lile that
const name = "Usama Sagar";
for(let alphabets of name)
  {
    console.log("alphabets of my name are "+alphabets)
  }
// for example i ac see the values without using index 
// 1
const dumb = [12,57,87,45,'a','h','j']
for(let d of dumb)
  {
    console.log("Data present in array is "+d)
  }
// 2
const obj = {
    a:1,
    b:2,
    c:3,
  }
  // you can see error here bcz obj is not iterable so its only workfor jey means for in 
  // for(let z of obj)
  //   {
  //     console.log("values in obj are "+z)
  //   }

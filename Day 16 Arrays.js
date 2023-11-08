// Day 16 Arrays
// Arrays is a variable consist of many items
// collection of items
// Can be editable
// Can be changed
// Diffrent type of data can store
// index start with 0

let marks = [91, 82, 63, 84, false, "Not Present"]
// Access the alues from the index
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6]) // Will be undefined because index 6 does not exist

// .length to find the length of array 
console.log("The length of marks is", marks.length)

// adding the array
marks[6] = 89 // Adding a new value to the array

// change the array
marks[1] = 96 // Changing the value of an array
console.log(marks)

// the type of array is OBJECT
console.log(typeof marks)

// Practice 
// for loop to print the array
let array = ["usama",1,8,56,'w',null]
for(let a =0; a<array.length; a++)
  {
    console.log(array[a])
  }
// Practice Q
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
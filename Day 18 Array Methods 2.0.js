// Lecture 18 More array methods

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2= [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num3 = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// print the length of array
console.log(num1.length)
console.log(num2.length)
console.log(num3.length)

// to delete an item from the array
// delete the value which is present at 0 index
delete num1[0]
console.log(num1.length)

// to add the arrays concat method
// it will not modify the orignal arrauy it will make the new array who stores the collection of more arrays
let newArray = num1.concat(num2, num3)
console.log(newArray)

// no change in orignal array
console.log(num1, num2)

// sort method
// it will sort the array alphabet not place like the small no at first it will sort like that no who starts with 1 is at first then 2,3,4 and so on
num3.sort()
console.log(num3)

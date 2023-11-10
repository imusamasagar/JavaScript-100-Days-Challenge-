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

// comapre function

// simple function 
// to sort the array ascending or descending 
function compare1(a,b){
    // b-a for descending and a-b for ascending 
    return b-a 
  }

// arrow function
let compare2 = (a, b)=>{
    return a - b
  }
  let num4 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
  num4.sort(compare1)
  num4.sort(compare2)
  
  // reverse method
  num4.reverse()
  console.log(num4)

// Splice and Slice

// splice
// syntax of spice
// [index where you start - no of elements you want to delete - add new elemnt - add new element]
let num5 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// it will also not change the orignal array instead of that it will store the result of the splice in the new array
// here the deleted values store the elemnts that were delete from the orignal array bcz this method will return that
let deletedValues = num5.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num5)
console.log(deletedValues)

// slice
// it means start from index 3 and print the array till the end of it
let Num6 = num4.slice(3)
console.log(Num6)
// it will show the array from index 3 to 4 bcz the ending point 5 in not included 
let Num7 = num4.slice(3, 5)
console.log(Num7)
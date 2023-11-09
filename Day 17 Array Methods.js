// Lecture 17 Array Methods
let num = [1, 2, 3, 34, 4]
console.log(num)

// covert array to a string of comma separated 
let b = num.toString() // b is now a string 

// b to print the string and typeof to check if it will covert correctly
console.log(b, typeof b)

// it may format your array and one imp thing the join ethod also covert the array to string automatically 
// here " and " this will be present between all the values
let c = num.join(" and ")
console.log(c, typeof c)

// it will remove the last element of an array 
// unlike string the orignal array will change also
num.pop()
console.log(num);
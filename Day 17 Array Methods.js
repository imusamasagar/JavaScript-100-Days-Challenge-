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

// in this r store the element which is pop fro the array
// pop returns the popped element
let r1 = num.pop()
console.log(num, r1)

// push method use to add the element in the array
num.push(98);
console.log(num);

// in this r contains the new length of the array after push an new element 
// push returns the new array length
let r2 = num.push(56) 
console.log(num, r2)

// shift is like the pop method but here the element remove fro the start of the array
num.shift();

// in this r store the pop element which is removed fro the array
let r3 = num.shift()

// Removes an element from the start of the array
console.log(r3, num) 
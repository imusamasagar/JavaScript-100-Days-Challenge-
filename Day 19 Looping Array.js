// Day 19 Looping Array

let num = [3, 5, 1, 2, 4]
// Simple for loop
for(let i=0; i<num.length;i++){
  console.log(num[i])
}

// ForEach Loop
// here we make a arrow function element which can ultiply the item with its self and print it  

// for each means run for each elemnt of the array 
// help in react based projects
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
// html collection dom we want to covert it into array bcz i cant rum for each loop so this will make array for me to collect the items

// dom manipulation
let name = "Usama2544"
let no = "2154612"
// we make array from name usama
let arr1 = Array.from(name)
let arr2 = Array.from(no)

// arr will be the array that formed 
console.log(arr1)
console.log(arr2)

// for...of 
// we knoe the for of is used for access the values 
for (let item of num){
  console.log(item)
}

// for...in
// we know that it will used to access the keys in arrays keys means the index 
for (let i in num){
  console.log(num[i])
}

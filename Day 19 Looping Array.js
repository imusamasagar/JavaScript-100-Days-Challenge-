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

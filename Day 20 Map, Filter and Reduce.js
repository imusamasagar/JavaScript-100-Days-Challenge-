// Lecture 20 map , filter , reduce
// higher order array methods
// less time consuming 
// useful modern JavaScript 
// orignal array will not modified always important 
// ye sare aik new array formed karte he

// map
// diffrence between for each and map is that mep will return a new array by perfprm some operation on existing array -- for each is just doing some function or operation on each element of the array 

let l = [21,54,87]
l.map((value)=>{
  // it will just print the value
  console.log(value)
})

// as i declare eralier it will make a new array 
let b = l
// new array formed 
console.log(b)

// passing three arguents [value index array]
let a = [54,89,1025]
let  m = a.map((value,index,array)=>{
  console.log(value,index,array)
  // the new array will be effected by this return
  return value+1
})


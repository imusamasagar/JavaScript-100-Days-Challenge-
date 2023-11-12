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

// new arrays
console.log(b,m)

// filter
// iss ka mtlb he k array me aisa function lagana k j uss ko pass kare ga bas wohi new array me ae ga jo k filter ka basic mtlb bhi he 
let i =  [21,8,45,98,30,1001,121,54]
let na = i.filter((value)=>{
  return value >50
})
// new array
console.log(na)

// reduce
// reduce the array in to single value
// hum reduce ko function dete he beshak uss k age de de ya alag se function bana kar reduce ko de de 
// ab ye kiya kare ga jitne arguments diye he array ki utni values ko pakre ga or function perform karwa de ga jaise yaha array ki 3 values ko le ga unn ko add sub kar de ga phir array ki agli values le ga tab tak reduce karta jae ga jab tak single values nhi reh jati

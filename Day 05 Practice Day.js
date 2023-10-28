// Chapter 1 Practice Set

// Question 1
// Create a var of string and add number in it
let a ="abc"
let b = 123
console.log(a+b)

// Question 2
// Find datatype 
console.log(typeof (a+b))

// Question 3
// Create a const object and hold it to add a number later
const abc= {
  usama: "khcbd",
  f: 5,
}
// abc = 44 
// error kiun k hum const me kuch nhi daal sakte na hi dubara declare kar sakte he na hi apne const ko change kar sakte he 
console.log(abc)
// Question 4
// add new key to const object
abc['asx']="saas"
console.log(abc)
// hum aise kar sakte he hum apne object me kuch add kar sakte he yaha const bata raha he k uss k pass abc object ka refrence he 
abc['f']="asasa"
console.log(abc)
// hum uss k andar kuch change bhi kar sakte he 

// Question 5
// crete word meaning dictionary 
let dictionary = {
  alu: "potato",
  larka: "boy",
  larki: "girl",
}
console.log(dictionary['alu'])
console.log(dictionary.alu) //iss tarha bhi access kiya ja sakta he
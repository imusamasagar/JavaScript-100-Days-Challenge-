console.log("Lecture 3 about var , let , const")
// three types of variable lets discuss
// var is globally scoped and can be redeclared and change 
var a =4;
var a="harry";// redeclared but no issue
a= undefined; 
{
  var a="usama"
  console.log(a)
}
console.log(a) 
// the output is usama bcz var redeclared 
// let is block it can't redecalred but can change the values 
// let a = 4 error you also dont take same a for var and let
let b=4
//let b="Usama"  error throw bcz can't redeclared 
 b="usama" //but you can change the value
console.log(b)
var c=4
{
  let c=5 //no error bcz let is declared in block bracket 
  console.log(c) 
}
console.log(c)
// const never redeclared not change and should initialize
const d=4
// const d=5 error can't redeclared 
// d=5; error bcz also can't change
// var d=5; error can't use const identifier
console.log(d)
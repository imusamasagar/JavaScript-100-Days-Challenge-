// Chapter 2

// Problem No 1
// age lies between 10 and 20 ???
let age1 = prompt("What is your age?")
age1 = Number.parseInt(age1)
if (age1 > 10 && age1 < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}

// Problem No 2
// switch cases ???
let age2 = prompt("What is your age?")
switch (age2) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}

// Problem No 3
// Check no is divisible y by 2 and 3
let num = prompt("What is your no?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}

// Problem No 4
// Check no is divisible y by 2 or 3
let no = prompt("enter number")
no = Number.parseInt(no)
if(no % 2 ==0 || no % 3 ==0)
{
  console.log("yes its divisible")
}
else
{
  console.log("not divisible")
}


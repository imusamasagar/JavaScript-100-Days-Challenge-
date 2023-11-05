// Day 13 strings
// Three types

// single quoted
// you can write the string in single quotes 
let name1 = 'Usama'
console.log(name1)

// double quote 
// you can aslo write your string in double quotes 
let name2 = "ali"
console.log(name2)

// imp you cant write sigle at one end and double at other end use same for both start and end 

// template literal
// important used in modren java script
// ye allow karte he k iss k andar beshak single ya double quote wali string daal sakte he 
// backtick use hota he syntax me iss k 
let name3 = `hello "ahmad" 'here'`
console.log(name3)

// string interpolation 
// ye hota he k backtick k andar dollar sign curly bracket k andar variable ko call kar lena 
// i want to print all above two names declared as a friend
let name4 =  `${name1} ${name2} are friend of each other`
console.log(name4)

// escape sequence characters 
// if you want to put single quote between a single quote string the compiler confuses from where it starts or end 

// error occur

// let name5 = 'usa'ma'
// console.log(name5)
// if you want to put double quote between a double quote string the compiler confuses from where it starts or end 

// error occur

// let name6 = "usa"ma"
// console.log(name6)

// so some characters provide us these fumction like 
// \' it will only insert ' between string backspace is not print and also not count in length of string they are combined called a single character same for double quoute
let name7 = 'usa\'ma'
console.log(name7)
let name7i = "usa\"ma"
console.log(name7i)

// some other are here 
// \n new line \t space tab \r carriage return
// single quote 
let name8 = 'usa\nma'
console.log(name8)
let name9 = 'usa\tma'
console.log(name7)
let name10 = 'usa\rma'
console.log(name7)
// double quote
let name11 = "usa\nma"
console.log(name11)
let name12 = "usa\tma"
console.log(name12)
let name13 = "usa\rma"
console.log(name13)
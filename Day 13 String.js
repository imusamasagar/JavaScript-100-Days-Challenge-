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
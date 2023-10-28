// 7 Types of priitives datatypes
// nn ss bb u
// null , number , string , symbol , boolean , bigInt , undefined
let a = null
let b = 8
let c = "usama"
let d = Symbol("Usama is a symbol")
let e = "true" 
let f = "false"
let g = BigInt("5456") + BigInt("6565")
let h = undefined 
console.log(a,b,c,d,e,f,g,h)
// to find the datatype of any variable 
console.log(typeof a) 
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)

// non primitive datatypes called objects in JS
// ye usama k age koi datatype k lehaz se value deni he boy k liye inverted commas me likha take wo string lage
const gender= {
  "usama": "Boy",
  "ali" : 5,
  "ayesha": true,
  "Maham": "Girl",
  "Maha": undefined
}
console.log(gender["usama"])
console.log(gender["ali"])
console.log(gender["ayesha"])
console.log(gender["Maham"])
console.log(gender["Maha"])
console.log(gender["jh"]) //said its undefined bcz not present 

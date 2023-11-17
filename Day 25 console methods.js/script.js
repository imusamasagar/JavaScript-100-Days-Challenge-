// console se sare shoe ho jae ge jo jo items hote he iss k 
console.log(console)
// log bas msg ko print kar deta he cconsole me
console.log("usama") 
// info log jaise hi hota he bas separate folder me hota he
console.info("usama here")
// assert means assertion ye condition check karta he agar true ho to kuch nhi ho warna red color se assertion failed ka msg a jata he
console.assert(55<100)
console.assert(55>100)
// error red color se error show kar deta he simply bas
console.error("dont touch")
// warn warning show karta he 
console.warn("i warn you")
// time or timeend hum kisi bhi cheez ko kitna time lagta he wo bata deta he proccess likhn se pehle time laga lo or end par time end jaise k time or timend k arguments ka naam same hona chahiye 
// for example
console.time("timetaken")
for(let a = 1; a<5; a++)
  {
    console.log(a)
  }
console.timeEnd("timetaken");

// table it can generate the values and theit index in table form
let arr = [546,54,87,8,8,45,36]
console.table(arr)

// clear iss se sara console clear ho jata he 
// console.clear()
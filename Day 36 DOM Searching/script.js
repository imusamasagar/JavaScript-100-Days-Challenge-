// DOM navigation properties are helpful when elements are close to each other to app log child parent sibling kar lete thy lekin agar ap ko pata nhi he element kaha he to phir masla tha to ye concept waha kaam atta he 

// Searching the DOM
// most used functions
// accesed the lements by id calss names or css selectors ki madad se 
// manipulation throw such access 

// if someone asked you to change the color of first card title

// throw id 
// id de de ge uss ko lekin aik baat yaad rakhe k aik id aik ko hi de sakte he 
let t1 = document.getElementById("tt")
t1.style.color = "red"
// query selector all ye ap ko return kare ga all the elements inside the element matching the given CSS selectors
// ab yaha . ae ga class k liye or # ae ga id k liye kiun k ye css selectors he 
// ye sare wo elements de ga jin ki class given wali ho gi 
let ct = document.querySelectorAll(".card-title")
console.log(ct)
ct[0].style.color= "cyan"
ct[1].style.color = "blue"
ct[2].style.color = "pink"
// query selector
// return the first element of given css selector 
// an efficint version of .querySelectorAll[0]// return the first element 
// agar ap bas 1 element ko access karna chahte he 
// mtlb k agar ap chahte he k wo elemnt de do jis ki pehle number par ye class he like dekhe agar 1 hi element he
let ctt = document.querySelector(".aik")
ctt.style.color = "pink"
// aik line me bhi kar sakte he but not recommended 
document.querySelector(".aik").style.background = "Black"

// getElementByTagName
// it will return all the elemnts of given tag
// ye sab anchor tags return kar de ga 
// result will be same bcz no matter you search in documnets or body it will return number of a 
console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
// ab ye sab se pehle card class k pehle element k andar jae ga or phir waha a tags dekhe ga 
console.log(document.querySelector(".card").getElementsByTagName("a"))


// through class
// return the lements given css class
// agar ye kaam class ki help se karna to aise kar sakte he
// card-title class k andar 3 card he iss liye agar pehle ka chnage karna tha tommaine index [0] de diya
// elemets s lazmi ae ga 
let t11 = document.getElementsByClassName("card-title")[0]
t11.style.background = "yellow"

// through name
// search element by the name attribute 
console.log(document.getElementsByName("nname"))

// ap zaroori nhi inn function ko document.  par chalao to ap further elemnts k elemnts par bhi ye function lag jate he ap search lkar sakte ho 

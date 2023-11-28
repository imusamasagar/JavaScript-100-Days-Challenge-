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

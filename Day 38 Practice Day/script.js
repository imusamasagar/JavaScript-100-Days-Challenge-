// Question 1
// chnage the color of first element 
let e1 = document.body.firstElementChild.firstElementChild.firstElementChild
e1.style.color = "red" 

// Question 2
// create table without tbody check if the view sorce page show tbody or not
// answer no he bcz view source page hum ko raw code dikhata he wo correction nhi karta code ki 
// lekin agar ap inspect par jae ge dekhe ge to browser ne tbody daal di ho gi bcz as we study eralier browser have a capability to do auto correction

// Question no 3
// change the color of first and last child to green
let c1 = document.body.firstElementChild.firstElementChild.firstElementChild
let c3 = document.body.firstElementChild.firstElementChild.lastElementChild
c1.style.color = "green"
c3.style.color = "green"

// Question no 4
// change background of all li
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan"
})

// Question no 5
// which function tell us the farthest ancestor 
// a- matches b-closest c-contains d-none of these
// the answer is d bcz no one tell the farthest ancestor 
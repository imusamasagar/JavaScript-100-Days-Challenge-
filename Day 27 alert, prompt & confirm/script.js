// alert uper show kar deta he msg 
// mini window ko invoke karna 
// its just a message for the user
alert("Enter the value of a!")
// prompt ye use hota he user se response lene k liye 
// 578 yaha hum second default value de sakte he ye value by default likh kar ae gi iss ko change kar sakte he bby the way ap
let a = prompt("Enter a here", "578")
// ye by default string hota he iss ko number me convert karne k liye parseInt ka function
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
// confirm use hota he jaise k agar kuch delete kar rahe ho tab confirmation lene k liye 
let write = confirm("Do you want to write it to the page")
// yaha if kaam kar raha he k agar confirm ko yes karo ge to if chale ga warna else
if (write) {
    // document.write jo cheez do ge wo page par write kar de ga
    document.write(a)
  }
  else {
    document.write("Please allow me to write")
  }
  
  // ye teeno purane he ye ziada recommended nhi hote use karne k liye 
// DOM tree refers the html page where all nodes are objects
// Three major types
// 1- Text Nodes 
// *** is the leaf of tree always
// 2- Element Node
// like the title tag head tag body tag are elements
// 3- Comment Node
// comments jo hote he html me <!--></--!>

// in HTML page
// html tag is root 
// head and body are children

// Autocorrection
// ye hoti he k for example ap ne html likhte hue ending tag sahi nhi lagaya ya lagana bhool ge to ap ka browser khud autocorrect kar de ga 
// jaise k table tag k andar tbody tag lazmi hota he na ho to browser khud laga de ga 

// Walking the DOM
// html page 
// head k andar title hota he meta  
// body uss k andar elements content

// documnet.documentElement karne se html tag ae ga 
// document.body kar k body tag atta he
// document.head karne se head ae ga 
// lekin document.title karne se title change kar sakte he lekin sirf apne browser par

// ap typeof kar k inn sab ki type bhi dekh sakte ho title wale ki string batae ga 
// baki object batae ga etc 

// *** document.body null ho sakti he agar ap JavaScript tag ko body k pehle use kar lo ge 
// iss liye script baad me likho take accesss kar sake wo ap k html page ko
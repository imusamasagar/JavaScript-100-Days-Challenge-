// DOM Manipulation 
// ye read only hoti he aise nhi k ap inn k uper write kar de 
// they are live k agar ap elem.chilNodes  variable k andar koi element add kar do $0 kar k to wo automatically update ho jae ga 
// $0 iss ka mtlb he k agar ap kisi par click kar lo to uss k baad jab console par $0 likho to wo element ko refrence hota he or wo print ho jasta he issi tarha jis ko bhi select karo ge uss k baad console me uss ko $0 kar k access kar sakte he 
// $1 bhi hota he wo previous selected element hota he
// they are iterable using for --- of loop 

// Parent wo hota he jis ki koi sub nodes ho uss k andar jaise k 
// siblings wo hote he jo children ho same parent k mtln aik parent ki child nodes aik dusre ki sibing hote he 
// for example 

// html --> parent
// head and body ----> child of html
// head and body are  -----> sibling 
// body is said to be NEXT and RIGHT sibling of head 
// head is said to be PREVIOUS and LEFT sibling of body

// next sibling is the 
// nextSibling propery
// previous sibling is the 
// previousSibling property 
// for parent it is present as
// parentNode

console.log(document.body.firstChild)
a=document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
// parentNode me bas ye node ho ga kuch return kare ga kuch na kuch return zaroor kare ga 
// parentElement tab hi kuch return kare ga jab wo koi valid element ho ga like head ho ga ya body ho ga

// for example 
alert(document.documentElement.parentNode) // document 
alert(document.documentElement.parentElement) // null 
// ye null iss liye he bcz documentElement ka mtlb html uss ka parentElement koi nhi iss liye null he lekin node me document return kare ga

console.log(a.firstChild.nextSibling)
// html
// html parent he 
// head or body uss k child he 
// head or body aik dusre k siblings he 

// direct child 
// child nodes wo hoti he jo direct link karti he parent root se
// descendent nodes
// nodes k nodes k nodes ye sab descendent nodes hote he 

// html k page par dekhe 
// div direct child he body ka 
// p or span child he div k or apas me siblings he 
// div p span ye sab descendent nodes he body ki 

// access the children 

// first child 
// masla ye he k ye text return kare ga jis ki reason ye he k ye space ko bhi accept karta he div or body k between jo space he ye uss ko first child kahe ga 
console.log(document.body.firstChild)
// last child
console.log(document.body.lastChild)
// all child nodes
console.log(document.body.childNodes)

// similar writing way
// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length-1] === elem.lastChild

// one more method
// check if child nodes present or not
// elem.hasChildNodes
// it will return true if child nodes present if not it will return false 

// Note
// aise lagta he k jaise nodes array ki form me he kiun k wo show aise hoti he k index sath naam lekin wo array k form me nhi hoti
// agar ap chahte he k child nodes array ki form me ae ap unn par array wale methods alaga sake to ap method use karb sakte he 
Array.from(document.body.childNodes)
console.log(document.body.childNodes)
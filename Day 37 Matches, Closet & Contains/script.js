// More DOM searching functions
let id1 = document.getElementById("id1")
let id2 = document.getElementById("id2")
let sp2 = document.getElementById("sp2")
// matches
// elem.matches(css) to check if the element matches the given css selector
// this will return true bcz id1 element matches the class c1
console.log(id1.matches(".c1"))
// this will return false bcz id1 element does not matches the class c1
console.log(id1.matches(".class"))

// closest
// elem.closest(css)
// to look for the nearest ancestor that matches the given css selector the element itself also checked
console.log(sp2.closest(".id2"))
console.log(sp2.closest(".c2"))
console.log(sp2.closest("#sp2"))


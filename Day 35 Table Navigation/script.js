// some dom elements may provide additional properties specific to their type for their connivance
// lets see an example
// table
let table = document.body.firstElementChild.firstElementChild
console.log(table.rows) // collection of tr elements
console.log(table.caption) // reference to <caption>
console.log(table.thead) // referenceto <thead> 
console.log(table.tfoot) // reference to <tfoot>
console.log(table.tBodies) // collection of <tbody> elements

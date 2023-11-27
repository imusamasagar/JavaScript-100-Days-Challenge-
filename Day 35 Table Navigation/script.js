// some dom elements may provide additional properties specific to their type for their connivance
// lets see an example
// table
let table = document.body.firstElementChild.firstElementChild
console.log(table.rows) // collection of tr elements
console.log(table.caption) // reference to <caption>
console.log(table.thead) // referenceto <thead> 
console.log(table.tfoot) // reference to <tfoot>
console.log(table.tBodies) // collection of <tbody> elements
// console.log(table.tbody.rows) // collection of <tr> inside throw error bcz there in only one tbody till yet
// console.log(table.tbody.firstElementChild) // reference to first child of <tbody>

console.log(tr.cells) // collection of td and th
console.log(tr.sectionRowIndex) // index of tr inside closing element 
console.log(tr.rowIndex) // row number starting from 0
console.log(td.cellIndex) // no of cells inside closing <tr>

// Query
console.log(typeof document)
console.log(typeof window)
// answer wilb be the "object"
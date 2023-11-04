// Chapter 3 Practise set

// Question no 1
// Create object and print marks of student with the use of simple for loop
// here i make a obj marks 
let marks = {
    usama: 40,
    Ali: 50,
    Ahmad: 60,
  }
  // use for loop here 
  // Object.keys(marks).length it can indicate the no of students in object so our for loop run accordingly no of students
  for(let i=0; i<Object.keys(marks).length; i++)
    {
      // Object.keys(marks)[i] it can print name of students that are keys of an object 
      // marks[Object.keys(marks)[i]] it can print the marks of students that are the values of the object
      console.log("Marks of"+ Object.keys(marks)[i]+ "="+ marks[Object.keys(marks)[i]])
    }

  // Question no 2
  // do question no  using for in loop
  let marks2 = {
    usama: 40,
    Ali: 50,
    Ahmad: 60,
  }
  for(let b in marks2)
    {
       console.log("Marks of"+ b + "="+ marks2[b])
    }

// Question no 3
// Print try again until user enter the correct number

let correctnumber;
while(correctnumber != 96)
  {
    console.log("try again")
    correctnumber = prompt("Enter the correct number")
    
  }
console.log("Yes this is correct number")
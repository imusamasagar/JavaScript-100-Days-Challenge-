// prompt use karte he user se puchne k liye koi bhi cheez
// alert use karte he koi cheez as a alert or notification ki tarha user ko batane k liye 
let a = prompt("Hey whats you age?");
// prompt by deafualt string hota he iss ko number me convert karne k liye hum parseInt function use karte he 
a = Number.parseInt(a); // Converting the string to a number
// if chale warna else chalta he or jitne marzi else if ho aik hi chale ga agar koi na chale to sada else chale ga 
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

// Switch
const name = 'usama';
switch (name){
    case 'usama':
      console.log("This is usama")
    break;
      // break use so that only true case run which matches the value (the value is the thing write ahead of case ) if you don't use break it will execute all cases irrespective of the value is true or not 
    case 'ali':
      console.log("this is not usama");
      break;

    default: 
      console.log("not usama not ali");
      // the default will excecute if no case will true and imp thing the default is present at the end of switch but if you use it at the middle the cases after default will also be executed 
  }

// ternary operator
// iss me kiya hota he k agar condition true ho jae to pehli statement print hoti he warna dusri pehli true ua dusri
// jis tarha is me agar age 18 se kam ho gi to not driven print ho ga warna driven
console.log("You can", (a<18? "not drive" :"drive"))
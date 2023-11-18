let a = Math.random() * 100;
a = Number.parseInt(a)
let inp;
let score = 100;
while (inp != a) {
    score = score - 1;
    inp = prompt("Enter the Number : ");
    if (inp == a) {
      console.log("Congradulation! You guess the correct number.")
      console.log(`You guess the actual number in ${100 - score} chances.`)
    }

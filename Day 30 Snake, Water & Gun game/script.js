alert("Welcome to game")
let ch = ['S','W','G']

let again;
do
  {
let ui = prompt("press [S for snake] [W for water] [G for gun]");
let ci = ch[Math.round(Math.random())];
if(ui==ci)
{
  alert("Game Draw")
}
else if(ui=='S'&&ci=='W')
{
  alert("User Win")
}

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
else if(ui=='S'&&ci=='G')
{
  alert("UserLoss")
}
else if(ui=='W'&&ci=='S')
{
  alert("User Loss")
}
else if(ui=='W'&&ci=='G')
{
  alert("User Win")
}
else if(ui=='G'&&ci=='S')
{
  alert("User Win")
}
else if(ui=='G'&&ci=='W')
{
  alert("User Loss")
}
again=confirm("Want to play again")
}
while(again)
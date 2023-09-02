var dice1 = Math.floor((Math.random() * 6)+ 1);
var dice2 = Math.floor((Math.random() * 6)+ 1);

if(dice1>dice2){
  document.querySelector("h1").innerHTML = "⚐ Player 1 Wins!";
}
else if(dice1<dice2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! ⚐";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}

var image1 = "images/dice" + dice1 + ".png";
var image2 = "images/dice" + dice2 + ".png";
var player1 = document.querySelectorAll("img")[0].setAttribute("src",image1);
var player2 = document.querySelectorAll("img")[1].setAttribute("src",image2);

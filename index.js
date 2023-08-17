/*
initially checkking if this file is linked.
alert("whaa?!");
*/

                /* FOR FIRST DICE IMAGE: */
// generates b/w 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// selects b/w dice1.png to dice6.png
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; 

// selects source for the random image
var randomImageSource1 = "./images/" + randomDiceImage1; 

//now select the element whose attribute needs to be changed
var image1 = document.querySelectorAll("img")[0];

//now, for this selected element, makechanges in the desired attribute
image1.setAttribute("src", randomImageSource1);

                /* FOR SECOND DICE IMAGE: */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

// you can write like this instead:
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// displaying the winner:
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
wonLoseDraw();
dice1();
dice2();

var randomNumber1 = Math.ceil(Math.random() * 6); // 1 - 6 random number 

function dice1() {
    document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`); // ./images/dice1.png - ./images/dice6.png

}

var randomNumber2 = (Math.ceil(Math.random() * 6)) // 1 - 6 random number

function dice2() {
    document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`); // ./images/dice1.png - ./images/dice6.png
    
}

function wonLoseDraw() {
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!"; // if no one wins
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩player 1 wins!"; // if player 1 wins
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "player 2 wins!🚩"; // if player 2 wins
    }
}


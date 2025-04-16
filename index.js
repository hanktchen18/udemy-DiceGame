function rollDice() {
    // Dice 1
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber + ".png";

    var randomImageSource = "images/" + randomDiceImage;


    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);


    // Dice 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


    // Win or Loss Condition
    if (randomNumber > randomNumber2) {
        document.querySelector("h1").innerHTML = "🥳 Player 1 wins!"
    }
    else if (randomNumber < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🥳"
    }
    else {
        document.querySelector("h1").innerHTML = "😎 Draw! 😎"
    }
}

// Roll the dice
document.querySelector("button").addEventListener("click", rollDice);
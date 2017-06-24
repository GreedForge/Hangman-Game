var gameState = 0;
var wins = 0;
var guessesRemaining = 6;

var wordsForGuessing = [
    ["a", "p", "p", "l", "e"],
    ["s", "n", "i", "f", "f", "l", "e"],
    ["c", "o", "w", "b", "o", "y"],
    ["s", "p", "i", "k", "e"],
    ["e", "i", "n", "s", "t", "e", "i", "n"]
];
var currentWordLeters = [];
var lettersGuessed = [];
var userInput;

var wordGuessed = 0;




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




//look at player guess, if is in current word array add to div and letters guessed, if not decrement guesses, if already guessed set game state to already guessed
function guess() {

    document.getElementById("start").innerHTML = "";




    //user guessed wrong
    if (currentWordLetters.indexOf(userInput) === (-1)) {
        if (lettersGuessed.indexOf(userInput) === (-1)) {
            guessesRemaining--;
            document.querySelector("#numGuesses").innerHTML = guessesRemaining;
            lettersGuessed.push(userInput);
            document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
        } else {
            gameState = 2;
        }
    }
    //user guessed right
    if (currentWordLetters.indexOf(userInput) !== (-1)) {
        if (lettersGuessed.indexOf(userInput) === (-1)) {
            for (var i = 0; i < currentWordLetters.length; i++) {
                if (currentWordLetters[i] === userInput) {
                    document.getElementById(i).innerHTML = currentWordLetters[i];
                    wordGuessed++;
                    if (wordGuessed == currentWordLetters.length) {
                        gameState = 3;
                    }
                }
            }
            lettersGuessed.push(userInput);
            document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
        } else {
            gameState = 2;
        }
    }

    if (guessesRemaining == 0) {
        gameState = 4;
    }
}

function setUp() {
    currentWordLetters = wordsForGuessing[getRandomInt(0, 1)];

    var div = document.createElement("h1");
    div.id = "start";

    div.innerHTML = "Press Any Key to Start";
    document.querySelector("#winsHeader").prepend(div);

    for (var i = 0; i < currentWordLetters.length; i++) {
        var div = document.createElement("div");
        div.style.float = "left";
        div.style.height = "100px";
        div.style.width = "100px";
        div.style.background = "rgba(180, 181, 177, .5)";
        div.style.borderBottom = "rgba(37, 45, 75, .5) 5px solid";
        div.style.margin = "5px";
        div.style.color = "rgba(91, 74, 109, .7)";
        div.style.textAlign = "center";
        div.style.lineHeight = "3.8";
        div.style.fontSize = "28px";

        div.id = i;
        document.querySelector("#current").append(div);

    }
}



function renderGame() {
    //call random int gen to get the string we are playing with




    document.querySelector("#wins").innerHTML = wins;



    document.querySelector("#numGuesses").innerHTML = guessesRemaining;

    document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;


}

setUp();
renderGame();



document.onkeyup = function(event) {
    if (gameState == 4) {
        document.body.innerHTML = "";
        document.body.style.background = "black";
        document.body.style.verticalAlign = "bottom";
        document.body.style.textAlign = "right";
        document.body.innerHTML = "EASY COME, EASY GO...";
        document.body.style.fontSize = "28px";
        document.body.style.color = "white";
        document.body.style.paddingTop = "95%";

        return;

    }

    userInput = String.fromCharCode(event.keyCode).toLowerCase();
    //running through current word to check agains user input
    if (gameState == 0) {
        document.getElementById("start").innerHTML = "";
        gameState = 9;
    }




    guess();

    //add user Input to letters guessed and

    if (gameState == 2) {
        document.getElementById("start").innerHTML = "Already Guessed That Letter";
        gameState = 9;
    }



    if (gameState == 3) {
        document.getElementById("start").innerHTML = "SEE YOU SPACE COWBOY";
        gameState = 0;
        guessesRemaining = 6;
        currentWordLeters = [];
        lettersGuessed = [];
        wordGuessed = 0;
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("start").innerHTML = "";
        document.getElementById("current").innerHTML = "";
        setUp();

    }




}




/* Psudo Code
    
    declare variables
      -wins
      -guesses remaining
      -current word index
      -array of array of words for guessing
      -array for current word letters
      -array for letters guessed already

      

    functions
      -renderGame
        -prints all elements of the game to dom
          -first presents "press any key to get started"
          -wins
          -current word
          -spaces for letters
          -number of guesses remaining
          -letters already guessed
          -space for letters already guessed
      -guess
        -lisens for guess
          -compares to curent word for guessing
          -if correct adds to current word array and letters guessed
            -check if current word array matches current word for guessing
              -if true increment wins
              -increment current word index
          -if incorrect add to letters already guessed array
            -decrement guesses remaining
            -if 0 end game "you lost"


*/
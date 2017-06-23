
      // VARIABLES
      // ==========================================================================

      // The object questions for our quiz game.
      /*
      var questions = {
        q1: ["The sky is blue.", "t"],
        q2: ["There are 365 days in a year.", "t"],
        q3: ["There are 42 ounces in a pound.", "f"],
        q4: ["The Declaration of Independence was created in 1745.", "f"],
        q5: ["Bananas are vegetables.", "f"]
      };

      // We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.
      var questionIndex = 0;
      // Array of questions.
      var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

      // FUNCTIONS
      // ==============================================================================

      // Function to render questions.
      function renderQuestion() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (questionsArray.length - 1)) {
          document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
        }
        // If there aren't, render the end game screen.
        else {
          document.querySelector("#question").innerHTML = "Game Over!";
          document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
      }

      // Function that updates the score...
      function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      }


      // MAIN PROCESS
      // ==============================================================================

      // Calling functions to start the game.
      renderQuestion();
      updateScore();

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // If there are no more questions, stop the function.
        if (questionIndex === questionsArray.length) {
          return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();

        // Only run this code if "t" or "f" were pressed.
        if (userInput === "t" || userInput === "f") {

          // If they guess the correct answer, increase and update score, alert them they got it right.
          if (userInput === questionsArray[questionIndex][1]) {
            alert("Correct!");
            score++;
            updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
            alert("Wrong!");
          }

          // Increment the questionIndex variable and call the renderQuestion function.
          questionIndex++;
          renderQuestion();

        }

      };

*/
      var wins = 0;
      var guessesRemaining = 10;
      
      var wordsForGuessing=[["a","p","p","l","e"],["s","n","i","f","f","l","e"]];
      var currentWordLeters=[];
      var lettersGuessed=[];
      var userInput;


      currentWordLetters= wordsForGuessing[getRandomInt(0, 1)]
      
      console.log(currentWordLetters);
      



      function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      
      function guess(){
        
    }

      

      function renderGame(){
        //call random int gen to get the string we are playing with


        
        

       
        document.querySelector("#wins").innerHTML = wins;

        document.querySelector("#current").innerHTML = currentWordLetters;

        document.querySelector("#numGuesses").innerHTML = guessesRemaining;

        document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;


      }

      renderGame();



      document.onkeyup = function(event) {

        userInput = String.fromCharCode(event.keyCode).toLowerCase();
        //running through current word to check agains user input
        
        guess();
            //add user Input to letters guessed and 

          }
        

        



      renderGame();

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
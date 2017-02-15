var compChoices = ['a', 'b', 'c', 'd', 'e', 
'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

var runGuessesLeft = function() {
 
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var runLetterToGuess = function() {
  this.letterToGuess = this.compChoices[Math.floor(Math.random() * this.compChoices.length)];
};

var runGuessesSoFar = function() {
 
  document.querySelector('#yourguesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reverse = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  runLetterToGuess();
  runGuessesLeft();
  runGuessesSoFar();
}

runLetterToGuess();
runGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  runGuessesLeft();
  runGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reverse();
            }
        }else if(guessesLeft == 0){
                losses++;
            
                document.querySelector('#losses').innerHTML = "Losses: " + losses;
                reverse();
        }
};



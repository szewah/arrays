"use strict"

var colors = ['red', 'blue', 'yellow', 'pink'];
var answerDisplay = [];
let wins = 0;
let losses = 0;
var blanks;
var colorPick;
var pickedWord;
var allowedGuesses;
var wrongGuess = [];
var docWins = document.getElementById('wins');
var docAnswerDisplay = document.getElementById('answer-display');
var docGuessesLeft = document.getElementById('allowedGuesses'); 
var docWrongGuess = document.getElementById('wrongGuess'); 
var docLosses = document.getElementById('losses');
var userGuess;


function newGame() {
    allowedGuesses = 9;
    wrongGuess = [];
    answerDisplay = [];
    colorPick = colors[Math.floor(Math.random() * colors.length)];
    pickedWord = colorPick.split('');
    blanks = pickedWord.length;

    for (var i = 0; i < blanks; i++) {
        answerDisplay.push('_');
    }   
    console.log(answerDisplay.join(' '));
    
    docWins.innerHTML = "Number of wins: " + wins;
    docAnswerDisplay.innerHTML = answerDisplay.join(" ");
    docGuessesLeft.innerHTML = "Guesses: " + allowedGuesses;
    docWrongGuess.innerHTML = "Letters guessed: " + wrongGuess.join(" ");
    docLosses.innerHTML = "Number of losses: " + losses;

}

newGame();

function solveWord(letter) {
    var rightLetter = false;
    for (var i = 0; i < blanks; i++) {
        if( colorPick[i] === letter) {
            rightLetter = true;
        }
    };
    if (rightLetter === true) {
        for (var j = 0; j < blanks; j++) {
            if(colorPick[j] === letter) {
                answerDisplay[j] = letter;
                console.log('this is the letter ' + letter);
            }
        }

    } else {
        wrongGuess.push(letter);
        allowedGuesses--;
        
    }
    console.log(answerDisplay);
}

function roundComplete() {
    docWrongGuess.innerHTML = "Letters guessed: " + wrongGuess.join(" ");
    docGuessesLeft.innerHTML = "Guesses: " + allowedGuesses;
    docAnswerDisplay.innerHTML = answerDisplay.join(" ");
    if (answerDisplay.toString() === pickedWord.toString()) {
        wins++;
        docWins.innerHTML = "Number of wins: " + wins;
        alert('You won');
        newGame();
    } else if (allowedGuesses === 0) {
        alert('You lost');
        losses++;
        newGame();
    }

}

document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    solveWord(userGuess);
    roundComplete()
}
"use strict"

var colors = ['red', 'blue', 'yellow', 'pink'];

let wins = 0;
let losses = 0;
//by declaring the folllowing as global variables it allows other functions
//to have access to their values;
var answerDisplay = [];
var blanks;
var colorPick;
var pickedWord;
var allowedGuesses;
var userGuess;
var wrongGuess;

var docWins = document.getElementById('wins');
var docAnswerDisplay = document.getElementById('answer-display');
var docGuessesLeft = document.getElementById('allowedGuesses'); 
var docWrongGuess = document.getElementById('wrongGuess'); 
var docLosses = document.getElementById('losses');



function newGame() {
    //we set the allowed guesses at 9;
    allowedGuesses = 9;
    //we set the wrong guess variable as an array
    wrongGuess = [];
    //..as we do with the display;
    answerDisplay = [];
    //we randmonly pick a word;
    colorPick = colors[Math.floor(Math.random() * colors.length)];
    //...and split that picked word into an array of characters;
    pickedWord = colorPick.split('');
    //we set blanks to the number of characters in pickedWord;
    blanks = pickedWord.length;

    //we iterate over blanks
    for (var i = 0; i < blanks; i++) {
        //for each number i.e. 1,2,3,4,5 we add and display an underscore
        answerDisplay.push('_');
    }   
    
    //These add the texts to each div on display
    docWins.innerHTML = "Number of wins: " + wins;
    //join(' ') removes the commmas that would otherwise be on display
    docAnswerDisplay.innerHTML = answerDisplay.join(" ");
    docGuessesLeft.innerHTML = "Guesses: " + allowedGuesses;
    //join(' ') removes the commmas that would otherwise be on display
    docWrongGuess.innerHTML = "Letters guessed: " + wrongGuess.join(" ");
    docLosses.innerHTML = "Number of losses: " + losses;

}

newGame();

function solveWord(letter) {
    var rightLetter = false;
    for (var i = 0; i < blanks; i++) {
        console.log('Testing color pickword ' + pickedWord[i] + i, 'and this is colorpick' + colorPick[i])
        //we check if the letter is the same as character in the word
        if( pickedWord[i] === letter) {
            rightLetter = true;
        }
    };
    if (rightLetter === true) {
        for (var j = 0; j < blanks; j++) {
            if(pickedWord[j] === letter) {
                console.log('This is the answer diplay before assigning a letter ' + answerDisplay[j]);
                //we assign the answerDisplay character at the right index with the letter;
                //if we push into the answerDisplay, it adds another character so we need to assign it
                answerDisplay[j] = letter;
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
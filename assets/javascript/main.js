// Here we are creating initial global variables
var wins = 0;
var losses = 0;
var guessesRemaining = 13;
var guessesSoFar = [];
var currentWord;
var wordArr = [];
var blankArr = [];
var userKeyPress;

// Here we are creating an array containing 36 golf themed words
words = [
 "swing",
 "birdie",
 "par",
 "bogey",
 "fairway",
 "green",
 "tee",
 "bunker",
 "hole",
 "flagstick",
 "fore",
 "rough",
 "yardage",
 "divot",
 "eagle",
 "fringe",
 "hazard",
 "ace",
 "albatross",
 "dogleg",
 "drop",
 "lie",
 "over",
 "penalty",
 "trajectory",
 "under",
 "caddy",
 "mulligan",
 "range",
 "starter",
 "cart",
 "driver",
 "iron",
 "putter",
 "ball",
 "chip",
]

//======= INITIAL STATE ======
fetchCurrentWordFunc();
wordArrFunc();
blankArrFunc();

//===========================================================

//====== FUNCTIONS ======

// Here we are going to use Math.Random to get random word from words array and set to variable
function fetchCurrentWordFunc() {
// Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * 36);
    currentWord = words[rnd];
};

//====== RESTART GAME FUNCTION =======

function resetGame() {
    guessesRemaining = 13;
    guessesSoFar = [];
    wordArr = []
    blankArr = [];
    fetchCurrentWordFunc();
    wordArrFunc();
    blankArrFunc();
    document.querySelector("#winner-message").innerHTML = " ";
    document.querySelector("#loser-message").innerHTML = " ";
    document.querySelector("#try-again-message").innerHTM = " ";
};

//====== START FUNCTIONS TO BE CALLED LATER =======

// wordArrFunc takes currentWord and splits into array deliminated on ""
function wordArrFunc() { 
    wordArr = currentWord.split("");
};

// Here we create an array with same length as wordArr with substituted "_ " for each letter character
function blankArrFunc() {
    for (var i = 0; i < wordArr.length; i++) {
        blankArr.push("_ ");
    }
};

// ====== POSSIBLY REMOVE ======
// Match for equality and change counter on wins and display winnerMessage 
// function checkForWinFunc() {
//     if (wordArr === blankArr) {
//         wins++;
//         document.querySelector("#winner-message").innerHTML = "WINNER";
//         resetGame();
//     } else {
//         document.querySelector("#try-again-message").innerHTML = "TRY AGAIN";
//     }
// };

// Here we are creating guessesRemainingFunc and if < 0, end game, chng win/loss and reset game
function winLossCalcFunc() {
    if (wordArr === blankArr) {
        wins++;
        document.querySelector("#winner-message").innerHTML = wins;
        resetGame();
    } if (guessesRemaining < 1) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        resetGame();
    } else if (guessesRemaining <= 13) {
        guessesRemaining--;
        document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
    }
};

// Here we are creating guessesSoFarFunc
function guessesSoFarFunc() {
    guessesSoFar.push(userKeyPress + " ");
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;
};

// Here we use turnary operator to compare wordArr to blankArr bases on key press
function compareArrFunc() {
    for (var i = 0; i < wordArr.length; i++) {
        userKeyPress === wordArr[i] ? blankArr[i] = userKeyPress : document.querySelector("#blanks").innerHTML = blankArr;
    }
};

// ==========================================================
// Here a key press initiates the game

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
    // Converts all key clicks to lowercase letters.
    userKeyPress = String.fromCharCode(event.which).toLowerCase();

    // Adjust the counter for guesses remaining
    winLossCalcFunc();
    // Adds to guessesSoFar array and displays the key presses in HTML
    guessesSoFarFunc();
    // Runs the code to check for correctness.
    compareArrFunc();
};

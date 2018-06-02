var wins = 0;
var losses = 0;
var currentWord;
var guessesRemaining = 13;
var guessesSoFar = [];
var blankArr = [];
var found = false;
var foundCount = 0;  // NOT DISPLAYED CURRENTLY

// // DISPLAY BEGINING VARIABLES
// document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
// document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;

// resetGame FUNCTION
function resetGame() {
    guessesRemaining = 13;
    guessesSoFar = [];
    bankArr = [];
    found = false;
};

// BEGIN FUNCTION TO GENERATE RANDOM WORD TO VARIABLE
var NumberOfWords = 35
var words = new BuildArray(NumberOfWords)

words[0] = "swing"
words[1] = "birdie"
words[2] = "par"
words[3] = "bogey"
words[4] = "fairway"
words[5] = "green"
words[6] = "tee"
words[7] = "bunker"
words[8] = "hole"
words[9] = "flagstick"
words[10] = "fore"
words[11] = "rough"
words[12] = "yardage"
words[13] = "divot"
words[14] = "eagle"
words[15] = "fringe"
words[16] = "hazard"
words[17] = "ace"
words[18] = "albatross"
words[19] = "dogleg"
words[20] = "drop"
words[21] = "lie"
words[22] = "over"
words[23] = "penalty"
words[24] = "trajectory"
words[25] = "under"
words[26] = "caddy"
words[27] = "mulligan"
words[28] = "range"
words[29] = "starter"
words[30] = "cart"
words[31] = "driver"
words[32] = "iron"
words[33] = "putter"
words[34] = "ball"
words[35] = "chip"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this;
};

function pickRandomWord() {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords);

// Display the word inside the text box
alert(words[rnd]);
currentWord = words[rnd];
};

pickRandomWord();
console.log(currentWord); //bww

// END FUNCTION TO GENERATE RANDOM WORD TO VARIABLE

// TURN currentWord INTO ARRAY
wordArr = currentWord.split("");
console.log("wordArr is equal to: " + wordArr);

// CREATE ARR WITH DASHES WHERE EACH LETTER IS IN wordArr
for (var i = 0; i < currentWord.length; i++) {
    blankArr.push("-");
}
console.log("blankArr is equal to: " + blankArr);
document.querySelector("#blanks").innerHTML = blankArr;

//============== THIS FUNCTION WILL CONTAIN REST OF CODE ===============

// GET keyPressUp AND SET TO VARIABLE
document.onkeyup = function(event) {
    var userKeyPress = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("userKeyPress inside function: " + userKeyPress);

    guessesSoFar.push(userKeyPress + " ");
      if (guessesSoFar.includes(userKeyPress)) {
          alert("Please press a key not already pressed!"); //bww not working
      } else {
        document.querySelector("#guesses-so-far").innerHTML = guessesSoFar
      }
    
    // countdown on guessesRemaining and if < 0, end game, chng win/loss and reset game
    if (guessesRemaining <= 13) {
          guessesRemaining--;
          document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
      } else if (guessesRemaining < 1) {
          losses++;
          document.querySelector("#losses").innerHTML = losses;
          document.querySelector("#guesses-remaining").innerHTML = "Game Over... Head to the 19th Hole!"
        } else {
        document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
        }
     
    // bww
    for (var i = 0; i < wordArr.length; i++) {
        userKeyPress === wordArr[i] ? blankArr[i] = userKeyPress : document.querySelector("#blanks").innerHTML = blankArr;
    }
};


var wins = 0;
var losses = 0;
var currentWord;
var guessesRemaining = 13;
var guessesSoFar = [];

// BEGIN FUNCTION TO GENERATE RANDOM WORD TO VARIABLE
var NumberOfWords = 36
var words = new BuildArray(NumberOfWords)

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
words[36] = "swing"

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
console.log(currentWord);

// END FUNCTION TO GENERATE RANDOM WORD TO VARIABLE

// GENERATE AND DISPLAY BEGINNING VARIABLES
var wins = 0;
var losses = 0;

// CONVERT numberOfLetters to dashWord displayed with "-"
var numberOfLetters = currentWord.length.toString();

// BUILD NEW ARRAY WITH UP TO 12 ELEMENTS FOR EACH LETTER IN numberOfLetters
var dash = new BuildArray(numberOfLetters);

dash[1] = "- "
dash[2] = "- "
dash[3] = "- "
dash[4] = "- "
dash[5] = "- "
dash[6] = "- "
dash[7] = "- "
dash[8] = "- "
dash[9] = "- "
dash[10] = "- "
dash[11] = "- "
dash[12] = "- "

console.log(dash);

function BuildArray(numberOfLetters){
    this.length = numberOfLetters
    for (var i = 1; i <= numberOfLetters; i++){
    this[i] = null}
    return this;
};


// DISPLAY DASHES // wip
document.querySelector("#dash-replace").innerHTML = dash.length;

// GAME RESET //wip
// var resetGame = function () {
//   document.querySelector(wins());
//   document.querySelector(losses());
  
// return resetGame();
// };

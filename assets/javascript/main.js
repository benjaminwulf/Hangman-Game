var wins = 0;
var losses = 0;
var currentWord;
var guessesRemaining = 13;
var guessesSoFar = [];
var blanks = [];
var userGuess;

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
console.log(currentWord); //bww

// END FUNCTION TO GENERATE RANDOM WORD TO VARIABLE

//================================= HELP ==================================================
for (var i = 0; i < currentWord.length; i++) {
    blanks.push("-");
}
console.log(blanks);

// GET keyPressUp AND SET TO VARIABLE
document.onkeydown = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User just guessed: " + userGuess);

    guessesSoFar.push(userGuess + " ");
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar

    // Countdown on guessesRemaining
    guessesRemaining--;
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
}
// loop thru currentWord and see if it is equal to  

// var wordObject = "{}" // NEED EACH CHARACTER INTO OBJECT



// TURN EACH CHARACTER INTO AN OBJECT
// var wordObject = {};

// for (var i = 0; i < s.length; i++) {
//     wordObject["key" + i];
// }
// console.log(wordObject);


// eval('var obj=' + string);
// alert(obj.firstName);

// eval("var obj=" + currentWord);
// alert(obj.firstName);

//================================= HELP ==================================================

// This function builds the display of the word that is currently being guessed.
  // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
// function rebuildWordView() {
//     // We start with an empty string.
//     var wordView = "";

//     // Loop through the letters of the word we are trying to guess..
//     for (var i = 0; i < this.currentWord.length; i++) {
//       // If the current letter has been guessed, display that letter.
//       if (this.s.indexOf(this.currentWord[i]) !== -1) { //bww need to create matchedLetters
//         wordView += this.currentWord[i];
//       }
//       // If it hasn't been guessed, display a "_" instead.
//       else {
//         wordView += "&nbsp;_&nbsp;";
//       }
//     }
//     // Update the page with the new string we built.
//     document.querySelector("#word-view").innerHTML = wordView; //bww need to add id="current-word"
//     // console.log("Word view: " + wordView);
// };

//   console.log("rebuildWordView: " + rebuildWordView());

// ==================================================================================
//
//  HELP PLEASE
//

// BEGIN CLEAN VERSION OF ARRAY ITERATION //duplicate or immediate above code snippet
// dashLetter = dash[0, dash.length - 1];
// console.log("dashLetter: " + dashArray);
// console.log("numberOfLetters: " + numberOfLetters)

    // DISPLAY DASHES 
    // for (i = 0; i <= numberOfLetters - 1; i++) {
        // dashLetter += i + " "
    // }
    // console.log(dashLetter[0], dashLetter.length - 1);
// END CLEAN VERSION OF ARRAY ITERATION


// GAME RESET //wip
// var resetGame = function () {
//   document.querySelector(wins());
//   document.querySelector(losses());
  
// return resetGame();
// };

var words = ["baseball", "basketball", "football", "soccer", "swimming", "hockey", "cycling", "tennis", "volleyball", "golf", "boxing", "wrestling", "running",];
lettersInWord =[];
chosenWord = "";
wordLetters = [];
numBlanks = 0;
blanks = [];
amtGuesses = 8;
wrongAnswers = [];
sameLetter = [];

winCounter = 0;
lossCounter = 0;

document.getElementById("numWins").innerHTML = "Wins: " + winCounter;
document.getElementById("numLoses").innerHTML = "Loses: " + lossCounter;
document.getElementById("guessRemain").innerHTML = "Guesses Remaining: " + amtGuesses;

function playGame() {
    blanks = [];
    amtGuesses = 8;
    wrongAnswers = [];
    sameLetter = [];

    var random= (Math.floor(Math.random() * words.length))
    chosenWord = words[random];
    for (i = 0; i < (words[random]).length; i++) {
        lettersInWord.push((words[random]).charAt(i));
        // console.log ((words[random]).charAt(i));
        }
    
    for (i = 0; i < lettersInWord.length; i++) {
        console.log (lettersInWord[i]);
    }


    wordLetters = chosenWord.split("");
    numBlanks = wordLetters.length;
    console.log(numBlanks);

    for (var i = 0; i < numBlanks; i++) {
        blanks.push("_")
    }

    document.getElementById("letters").innerHTML = blanks.join(" ");
    document.getElementById("guessRemain").innerHTML = "Guesses Remaining: " + amtGuesses;
    document.getElementById("wrong-guess").innerHTML = "Wrong Guesses: " + wrongAnswers;
}

function matchLetters(letter) {
    var chosenWordLetters = false;
    for (i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {

        }
    }
}
function matchLetters(letter) {

    var chosenWordLetters = false;

    for (i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            chosenWordLetters = true;
        }
    };

    if (lettersInWord.indexOf(letter) > -1) {
        sameLetter.push(letter);
        amtGuesses--;
    }

    if (chosenWordLetters) {
        for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                blanks[i] = letter;
            }
        }
    } else {
        // only update amtGuesses if letter is NOT in the array yet
        //if letter is not inside wrongAnswers array, then update, if not, ignore. 
        if (wrongAnswers.indexOf(letter) === -1) {
            wrongAnswers.push(letter);
        } else {
           alert("you already guessed that letter: " + letter);
        };
    }
};

function updateGameResults() {

    document.getElementById("letters").innerHTML = blanks.join(" ");
    document.getElementById("guessRemain").innerHTML =
        "Guesses Remaining: " + amtGuesses;
    document.getElementById("wrong-guess").innerHTML = "Wrong Guesses: " + wrongAnswers.join(" ");

    if (wordLetters.join("") === blanks.join("")) {
        winCounter++;
        alert("Congratulations! You win!");
        document.getElementById("numWins").innerHTML = "Wins: " + winCounter;
        playGame();
    } else if (amtGuesses === 0) {
        lossCounter++;
        alert("Game Over");
        document.getElementById("numLoses").innerHTML =
            "Loses: " + lossCounter;
        playGame();
    }
};

playGame();
document.onkeyup = function (event) {
    var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

    matchLetters(userGuesses);
    updateGameResults();
};
// select crystals on html page
let redCrystal = document.querySelector("#redCrystal");
let blueCrystal = document.querySelector("#blueCrystal");
let yellowCrystal = document.querySelector("#yellowCrystal");
let greenCrystal = document.querySelector("#greenCrystal");

// random numbers 
let randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);  // returns a random integer from 19 to 120
let randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for red
let randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for blue
let randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for yellow
let randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for green
// console.log(randomNumberTwo);

// select the displays on html page
let randomDisplay = document.querySelector("#randomNumberDisplay");
let totalScoreDisplay = document.querySelector("#totalScoreDisplay");
let winsDisplay = document.querySelector(".winsDisplay");
let lossesDisplay = document.querySelector(".lossesDisplay");


// beginning of game
let wins = 0;
let losses = 0;
let totalScore = 0

function reset() {
    randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
    randomDisplay.textContent = randomNumberOne;
    randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1); 
    randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
    randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
    randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
    totalScore = 0;
    totalScoreDisplay.textContent = totalScore;
}

function winner() {
    document.querySelector(".winsText").textContent = "You Won";
    wins++;
    winsDisplay.textContent = wins;
    lossesDisplay.classList.add("winner")
    reset();
}

function loser() {
    document.querySelector(".winsText").textContent = "You Lost";
    losses++;
    lossesDisplay.textContent = losses;
    lossesDisplay.classList.add("loser");
    reset();
}

randomDisplay.textContent = randomNumberOne;

// add eventlisteners on crystals /tests

redCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberRed;
    totalScoreDisplay.textContent = totalScore;

        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
});

blueCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberBlue;
    totalScoreDisplay.textContent = totalScore;

        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
});

yellowCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberYellow;
    totalScoreDisplay.textContent = totalScore;

        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
});

greenCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberGreen;
    totalScoreDisplay.textContent = totalScore;

        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
});

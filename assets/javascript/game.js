//select crystals on html page
let redCrystal = document.querySelector("#redCrystal");
let blueCrystal = document.querySelector("#blueCrystal");
let yellowCrystal = document.querySelector("#yellowCrystal");
let greenCrystal = document.querySelector("#greenCrystal");

//select the displays on html page

//random number 
let randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);  // returns a random integer from 19 to 120


//eventlisteners on crystals /test

redCrystal.addEventListener("click", function() {
    alert("redCrystal clicked");
})

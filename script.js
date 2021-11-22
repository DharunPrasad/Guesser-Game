"use strict";
console.log("Hello");
// const message = document.querySelector(".message-box");
const okButton = document.querySelector(".ok-btn");
const hiddenNumber = document.querySelector(".hidden-number");
const lose = document.querySelector(".lose");
const win = document.querySelector(".win");
const playAgain = document.querySelector(".play-again-btn");

//Asigning score and highscore to the content
let score = 10;
let scoreValue = document.querySelector(".score");
scoreValue.textContent = score;
let highScore = 0;
let highScoreValue = document.querySelector(".high-score");
highScoreValue.textContent = highScore;

//Generating the random number
let generatedNumber = Math.trunc(Math.random() * 20) + 1;

hiddenNumber.textContent = "?";
//Creating add event listener for the ok button
okButton.addEventListener("click", okButtonEvent);
//Function to pass the message of the message-box
function messageBox(message) {
  document.querySelector(".message-box").textContent = message;
}
function okButtonEvent() {
  let inputBox = Number(document.querySelector(".input-box").value);
  //If no input is given
  if (!inputBox) {
    messageBox("🔴 No Number!!");
  }
  //If the input is equal to the generated number;
  else if (generatedNumber === inputBox) {
    messageBox("💯Correct Guess!!!"); //Message Displayed
    win.style.backgroundColor = "rgb(52, 144, 52)"; //Changing Wining box style
    document.querySelector("body").style.backgroundColor = "rgb(52, 144, 52)"; //Changing body background
    hiddenNumber.textContent = generatedNumber; //Displaying the hidden number
    //if the score is greater than the high score
    if (score > highScore) {
      highScore = score; //Changing the highScores value to the score
      highScoreValue.textContent = highScore; //Giving the highscore value to the html content
    }
    //If the input is not equal to the generated number
  } else if (generatedNumber !== inputBox) {
    //Score has to be reduced
    if (score > 1) {
      //If the score is greater than 1
      messageBox(inputBox > generatedNumber ? "⬆ Too High" : "⬇ Too Low"); //display high/low based on the input
      score--; //Decrement the score
      scoreValue.textContent = score; //Display the score
    }
    //If the score value is lesser than 1
    else {
      messageBox("👎🏻 You Lost!!"); //Displaying you have lost message
      lose.style.backgroundColor = "rgb(189, 27, 27)"; //Changeing the lost bar
      document.querySelector("body").style.backgroundColor = "rgb(189, 27, 27)"; //Changing the body
      scoreValue.textContent = 0; //Displaying the score value as 0
      hiddenNumber.textContent = generatedNumber;
    }
  }
}
//Creating add event listener for the play again button
playAgain.addEventListener("click", againBtnEvent);
//In this, assign the values to the default values and styles
function againBtnEvent() {
  score = 10; //Score is changed
  generatedNumber = Math.trunc(Math.random() * 20) + 1; //Random number is again generated
  document.querySelector("body").style.backgroundColor = "rgb(133, 127, 127)"; //body background is changed
  win.style.backgroundColor = "white"; //win bar is changed
  lose.style.backgroundColor = "white"; //lose bar is changed
  messageBox("Start Guessing..."); //message content is changed
  document.querySelector(".input-box").value = ""; //value of the input box is changed
  document.querySelector(".score").textContent = score; //score value is displayed
  hiddenNumber.textContent = "?"; // "?" is displayed
}

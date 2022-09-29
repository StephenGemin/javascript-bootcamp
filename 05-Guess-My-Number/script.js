"use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// console.log(document.querySelector(".guess"));
// document.querySelector(".guess").value = 10;

const DEV_MODE = false;
const INITIAL_SCORE = 20;
const SCORE_GAME_OVER = 0;
const INITIAL_MESSAGE = getMessageElement().textContent;
const NUMBER_RANGE = 10;
let secretNumber;
let userScore;
let gameInProgress;
let highScore = 0;

function initialize() {
  // Set initial score
  secretNumber = generateSecretNumber();
  userScore = INITIAL_SCORE;
  gameInProgress = true;

  console.log(`Initial score: ${userScore}`);
  console.log(`Secret number: ${secretNumber}`);

  // set DOM elements
  getScoreElement().textContent = userScore;
  getGuessElement().value = "";
  getMessageElement().textContent = INITIAL_MESSAGE;
  if (DEV_MODE) {
    getNumberElement().textContent = secretNumber;
  } else {
    getNumberElement().textContent = "?";
  }
}
initialize();

function getElementByClass(cls) {
  return document.querySelector(`.${cls}`);
}

function getMessageElement() {
  return getElementByClass("message");
}

function getNumberElement() {
  return getElementByClass("number");
}

function getScoreElement() {
  return getElementByClass("score");
}

function getGuessElement() {
  return getElementByClass("guess");
}

function generateSecretNumber() {
  let _number = 0;
  while (_number === 0) {
    _number = Math.trunc(Math.random() * NUMBER_RANGE);
  }
  return _number;
}

function setWinConditionCss() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  getNumberElement().style.width = "30rem";
  getNumberElement().textContent = secretNumber;
}

function resetGame() {
  document.querySelector("body").style.backgroundColor = "#222";
  getNumberElement().style.width = "15rem";
  initialize();
}

function setHighScore() {
  if (userScore > highScore) {
    console.log(`New high score: ${userScore}, Old high score: ${highScore}`);
    highScore = userScore;
    document.querySelector(".highscore").textContent = highScore;
  }
}

function gameLogic() {
  const guess = Number(getGuessElement().value);
  console.log(guess);

  let msg;
  if (!gameInProgress) {
    return;
  }
  if (guess <= 0 || !guess) {
    msg = "invalid selection, try again.";
    userScore--;
  } else if (!Number.isInteger(guess)) {
    msg = "The number must be an integer, try again.";
    userScore--;
  } else if (guess === secretNumber) {
    msg = "You win!";
    gameInProgress = false;
    setWinConditionCss();
    setHighScore();
  } else {
    msg = "Incorrect, try again.";
    userScore--;
  }

  if (userScore === 0) {
    msg = "You have lost the game.";
    userScore = SCORE_GAME_OVER;
    gameInProgress = false;
  }
  getMessageElement().textContent = msg;
  getScoreElement().textContent = String(userScore);
}

document.querySelector(".check").addEventListener("click", function () {
  gameLogic();
});
document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});

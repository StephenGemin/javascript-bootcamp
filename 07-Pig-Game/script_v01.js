"use strict";

const diceImg = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const p1Section = document.querySelector(".player--0");
const p1Score = document.querySelector("#score--0");
const p1CurrentScore = document.querySelector("#current--0");

const p2Section = document.querySelector(".player--1");
const p2Score = document.querySelector("#score--1");
const p2CurrentScore = document.querySelector("#current--1");

const WIN_SCORE = 10;
let gameActive = true;
let lastActivePlayer = 1;

let diceRollValue;

let gameData = {
  1: {
    score: 0,
    section: p1Section,
    scoreOverall: p1Score,
    scoreCurrent: p1CurrentScore,
  },
  2: {
    score: 0,
    section: p2Section,
    scoreOverall: p2Score,
    scoreCurrent: p2CurrentScore,
  },
  pActive: 1,
};
console.log(`Game data: ${gameData}`);

function initializeGame(reset = false) {
  console.log("Initializing new game");
  gameActive = true;
  if (reset) {
    console.log("resetting the game, loser starts next round");
    switchActivePlayer();
    lastActivePlayer = gameData.pActive;
  }

  for (let id of [1, 2]) {
    gameData[id].score = 0;
    gameData[id].scoreCurrent.textContent = 0;
    gameData[id].scoreOverall.textContent = 0;
    if (gameData[id].section.classList.contains("player--winner")) {
      gameData[id].section.classList.remove("player--winner");
    }
  }
}

function switchActivePlayer() {
  if (gameData.pActive === 1) {
    gameData.pActive = 2;
    gameData[1].section.classList.remove("player--active");
    gameData[2].section.classList.add("player--active");
  } else {
    gameData.pActive = 1;
    gameData[2].section.classList.remove("player--active");
    gameData[1].section.classList.add("player--active");
  }
  console.log(`Active player id: ${gameData.pActive}`);
}

initializeGame();
const rollDice = function () {
  if (!gameActive) {
    return;
  }
  let number = Math.floor(Math.random() * (7 - 1)) + 1;
  diceImg.src = `dice-${number}.png`;
  diceImg.alt = number;
  diceRollValue = number;
  //   diceRollValue = 1;
  console.log(`Dice Roll: ${diceRollValue}`);

  let _id = gameData.pActive;
  gameData[_id].score += diceRollValue;
  gameData[_id].scoreCurrent.textContent = diceRollValue;
  gameData[_id].scoreOverall.textContent = gameData[_id].score;

  if (gameData[_id].score >= WIN_SCORE) {
    gameData[_id].section.classList.add("player--winner");
    gameActive = false;
  }

  if (diceRollValue === 1) {
    switchActivePlayer();
  }
};

btnRollDice.addEventListener("click", rollDice);
btnNewGame.addEventListener("click", function () {
  initializeGame(true);
});
btnHold.addEventListener("click", function () {
  if (gameActive) {
    switchActivePlayer();
  }
});

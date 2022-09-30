"use strict";
// This is attempt 2 at the game
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const player0El = document.querySelector(".player--0");
const score0El = document.querySelector("#score--0");
const current0El = document.querySelector("#current--0");

const player1El = document.querySelector(".player--1");
const score1El = document.querySelector("#score--1");
const current1El = document.querySelector("#current--1");

const WIN_SCORE = 100;
const DICE_MIN = 1;
const DICE_MAX = 6;
let gameActive;
let lastActivePlayer;
let scores, activePlayer, currentScore;

function getActivePlayerCurrentScoreEle(activeId) {
  return document.getElementById(`current--${activeId}`);
}

function getActivePlayerEle(activeId) {
  return document.querySelector(`.player--${activeId}`);
}

function getActivePlayerScoreEle(activeId) {
  return document.getElementById(`score--${activeId}`);
}

function initializeGame() {
  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.remove("player--active");
  player1El.classList.remove("player--active");
  // diceEl.classList.add("hidden");

  if (lastActivePlayer == undefined) {
    console.log("First initialization of the game");
    // very first time game is initialized
    lastActivePlayer = 0;
    activePlayer = 0;
  } else {
    console.log("New game initialization");
    console.log(`Last active player: ${lastActivePlayer}`);
    activePlayer = Number(!lastActivePlayer);
    lastActivePlayer = activePlayer;
    getActivePlayerEle(activePlayer).classList.add("player--active");
  }

  if (activePlayer) {
    // player 2, index 1
    player1El.classList.add("player--active");
  } else {
    // player 1, index 0
    player0El.classList.add("player--active");
  }
  console.log(`Active Player: ${activePlayer}`);
  gameActive = true;
}

function switchActivePlayer() {
  currentScore = 0;
  getActivePlayerCurrentScoreEle(activePlayer).textContent = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  activePlayer = Number(!activePlayer);
  console.log(`Switch active player id: ${activePlayer}`);
}

initializeGame();
const rollDice = function () {
  if (!gameActive) {
    return;
  }
  const diceRoll =
    Math.floor(Math.random() * (DICE_MAX + 1 - DICE_MIN)) + DICE_MIN;
  diceEl.src = `dice-${diceRoll}.png`;
  // diceEl.classList.remove("hidden");
  diceEl.alt = diceRoll;
  //   diceRollValue = 1;
  console.log(`Dice Roll: ${diceRoll}`);

  if (diceRoll != 1) {
    currentScore += diceRoll;
    getActivePlayerCurrentScoreEle(activePlayer).textContent = currentScore;
  } else {
    switchActivePlayer();
  }
};

btnRoll.addEventListener("click", rollDice);
btnNew.addEventListener("click", function () {
  initializeGame();
});
btnHold.addEventListener("click", function () {
  if (!gameActive) {
    return;
  }

  scores[activePlayer] += currentScore;
  getActivePlayerScoreEle(activePlayer).textContent = scores[activePlayer];

  if (scores[activePlayer] >= WIN_SCORE) {
    gameActive = false;
    diceEl.classList.add("hidden");
    getActivePlayerEle(activePlayer).classList.add("player--winner");
    getActivePlayerEle(activePlayer).classList.remove("player--active");
  } else {
    switchActivePlayer();
  }
});

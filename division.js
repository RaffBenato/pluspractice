"use strict";

const num1El = document.querySelector(`.num1`);
const num2El = document.querySelector(`.num2`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const timerEl = document.querySelector(`.timedisplay`);
const answerinputEl = document.querySelector(`.answerinput`);
const btnsNumbersEl = document.querySelectorAll(`.btn-n`);

let answer;
let correctScore = 0;
let wrongScore = 0;
let t;

function startRound() {
  answer = Math.floor(Math.random() * (13 - 2) + 2);
  num2El.textContent = Math.floor(Math.random() * (13 - 2) + 2);
  answerinputEl.textContent = ``;
  num1El.textContent = answer * Number(num2El.textContent);

  t = Date.now();
  setInterval(myTimer, 1000);
}

startRound();

for (let i = 0; i < btnsNumbersEl.length; i++) {
  btnsNumbersEl[i].addEventListener("click", function (e) {
    if (i !== 11 && i !== 10) {
      answerinputEl.textContent = answerinputEl.textContent + i;
    } else {
      if (i === 10) {
        answerinputEl.textContent = answerinputEl.textContent + `.`;
      } else {
        answerinputEl.textContent = ``;
      }
    }
    if (Number(answerinputEl.textContent) === answer) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
      startRound();
    }
  });
}

//Timer
let delta;
let timer;
function myTimer() {
  delta = Date.now() - t;
  timer = 10 - Math.floor(delta / 1000);
  timerEl.textContent = timer;

  if (timer === 0) {
    wrongScore++;
    wrongScoreEl.textContent = wrongScore;
    startRound();
  }
}

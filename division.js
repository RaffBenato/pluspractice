"use strict";

const num1El = document.querySelector(`.num1`);
const num2El = document.querySelector(`.num2`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const timerEl = document.querySelector(`.timedisplay`);
const answerinputEl = document.querySelector(`.answerinput`);
const btnsNumbersEl = document.querySelectorAll(`.btn-n`);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const time = parseInt(urlParams.get("time"));
const numb1 = urlParams.get("numb1").split(",");
const numb2 = parseInt(urlParams.get("numb2"));
let firstNumbers = numb1;
let secondNumbers = [];

timerEl.textContent = time;

let answer;
let correctScore = 0;
let wrongScore = 0;
let t;

function startRound() {
  if (numb2 === 12) {
    secondNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  } else {
    secondNumbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  }

  let firstNumber =
    firstNumbers[Math.floor(Math.random() * firstNumbers.length)];
  let secondNumber =
    secondNumbers[Math.floor(Math.random() * secondNumbers.length)];

  answer = firstNumber;
  num2El.textContent = secondNumber;
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
    if (answerinputEl.textContent === answer) {
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
  timer = time - Math.floor(delta / 1000);
  timerEl.textContent = timer;

  if (timer === 0) {
    wrongScore++;
    wrongScoreEl.textContent = wrongScore;
    startRound();
  }
}

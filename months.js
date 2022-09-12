"use strict";

const wordEl = document.querySelector(`.word`);
const containerEl = document.querySelector(`.container`);
const btnsAnswers = document.querySelectorAll(`.btn-n`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);

const months = [
  { month: "January", days: "31" },
  { month: "February", days: "28" },
  { month: "March", days: "31" },
  { month: "April", days: "30" },
  { month: "May", days: "31" },
  { month: "June", days: "30" },
  { month: "July", days: "31" },
  { month: "August", days: "31" },
  { month: "September", days: "30" },
  { month: "October", days: "31" },
  { month: "November", days: "30" },
  { month: "December", days: "31" },
];

let correctScore = 0;
let wrongScore = 0;
let answer;

function pickAnswer() {
  const RandomMonth = months[Math.floor(Math.random() * months.length)];
  wordEl.textContent = RandomMonth.month;
  answer = RandomMonth.days;
}

pickAnswer();

for (let i = 0; i < btnsAnswers.length; i++) {
  btnsAnswers[i].addEventListener("click", function (e) {
    if (answer === btnsAnswers[i].textContent) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
    }
    pickAnswer();
  });
}

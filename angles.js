"use strict";

const containerEl = document.querySelector(`.container`);
const btnsCoord = document.querySelectorAll(`.btn-coord`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const angleImgEl = document.querySelector(`.angleimg`);
const btnAnswersEl = document.querySelectorAll(`.btn-n`);

let correctScore = 0;
let wrongScore = 0;
let answer;

function startRound() {
  const answers = [`25`, `45`, `90`, `130`, `170`, `270`, `315`];
  const randomAnswers = [];
  const randomImg = Math.floor(Math.random() * (10 - 1) + 1);
  angleImgEl.src = `./img/ang${randomImg}.png`;

  if (randomImg === 1) {
    answer = `25`;
  } else if (randomImg === 4) {
    answer = `130`;
  } else if (randomImg === 5) {
    answer = `170`;
  } else if (randomImg === 6) {
    answer = `270`;
  } else if (randomImg === 7) {
    answer = `315`;
  } else if (randomImg === 2 || randomImg === 8) {
    answer = `45`;
  } else {
    answer = `90`;
  }

  answers.splice(answers.indexOf(answer), 1);
  randomAnswers.push(answer);

  while (randomAnswers.length < 4) {
    let r = Math.floor(Math.random() * answers.length);
    randomAnswers.push(answers[r]);
    answers.splice(answers.indexOf(answers[r]), 1);
  }

  let currentIndex = randomAnswers.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [randomAnswers[currentIndex], randomAnswers[randomIndex]] = [
      randomAnswers[randomIndex],
      randomAnswers[currentIndex],
    ];
  }

  for (let i = 0; i < btnAnswersEl.length; i++) {
    btnAnswersEl[i].textContent = `${randomAnswers[i]}°`;
  }
}

for (let i = 0; i < btnAnswersEl.length; i++) {
  btnAnswersEl[i].addEventListener("click", function (e) {
    if (e.target.textContent === answer + `°`) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
    }
    startRound();
  });
}
startRound();

"use strict";

const wordEl = document.querySelector(`.word`);
const meaning1El = document.querySelector(`.meaning1`);
const meaning2El = document.querySelector(`.meaning2`);
const meaning3El = document.querySelector(`.meaning3`);
const meaningsEl = [meaning1El, meaning2El, meaning3El];
const gameEl = document.querySelectorAll(`.game`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const btnMistakesEl = document.querySelector(`.btn-mistakes`);
const btnBackEl = document.querySelector(`.btn-back`);
const containerEl = document.querySelector(`.container`);

let correctScore = 0;
let wrongScore = 0;
let correctAnswer = ``;
let correctWord = ``;
let wordsArr = [];
let mistakes = [];

function getWords() {
  fetch("https://elevenpluswordpractice.herokuapp.com/api/words", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      wordsArr = data;

      pickRandomNumbers();
    });
}

function pickRandomNumbers() {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    let r = Math.floor(Math.random() * wordsArr.length);
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
  }

  pickRandomWord(randomNumbers[0], randomNumbers[1], randomNumbers[2]);
}

function pickRandomWord(word1, word2, word3) {
  correctWord = wordsArr[word1].word;
  correctAnswer = wordsArr[word1].meaning;
  const wrongAnswer1 = wordsArr[word2].meaning;
  const wrongAnswer2 = wordsArr[word3].meaning;
  const answers = [correctAnswer, wrongAnswer1, wrongAnswer2];

  let currentIndex = answers.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [answers[currentIndex], answers[randomIndex]] = [
      answers[randomIndex],
      answers[currentIndex],
    ];
  }

  wordEl.textContent = correctWord;
  meaning1El.textContent = answers[0];
  meaning2El.textContent = answers[1];
  meaning3El.textContent = answers[2];
}

getWords();

for (let i = 0; i < meaningsEl.length; i++) {
  meaningsEl[i].addEventListener("click", function (e) {
    if (e.target.textContent === correctAnswer) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
      mistakes.push({ word: correctWord, meaning: correctAnswer });
    }
    pickRandomNumbers();
  });
}

btnMistakesEl.addEventListener("click", () => {
  if (wrongScore > 0) {
    gameEl.forEach((game) => {
      game.classList.add(`hidden`);
    });

    mistakes.forEach(function (item, i) {
      const htmlCode = `
      <div class="segment">
      <div class="mistakeword">${item.word}</div>
      <div class="meaning">${item.meaning}</div>
      </div>`;
      containerEl.insertAdjacentHTML(`beforeend`, htmlCode);
    });

    const segmentEl = document.querySelectorAll(`.segment`);
    segmentEl.forEach((segment) => {
      segment.classList.remove(`hidden`);
    });

    btnMistakesEl.classList.add(`hidden`);
    btnBackEl.classList.remove(`hidden`);
  }
});

btnBackEl.addEventListener("click", () => {
  gameEl.forEach((game) => {
    game.classList.remove(`hidden`);
  });

  const segmentEl = document.querySelectorAll(`.segment`);
  console.log(segmentEl);
  segmentEl.forEach((segment) => {
    segment.classList.add(`hidden`);
  });

  btnBackEl.classList.add(`hidden`);
  btnMistakesEl.classList.remove(`hidden`);

  mistakes = [];
});

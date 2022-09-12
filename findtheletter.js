"use strict";

const word1El = document.querySelector(`.word1`);
const word2El = document.querySelector(`.word2`);
const btnAnswersEl = document.querySelectorAll(`.btn-n`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);

let correctScore = 0;
let wrongScore = 0;
let correctLetter;
let letters;
let words;

function getWords() {
  fetch("https://elevenpluswordpractice.herokuapp.com/api/2words", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      words = data;

      pickRandomNumbers();
    });
}

function pickRandomNumbers() {
  letters = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
    `g`,
    `h`,
    `i`,
    `j`,
    `k`,
    `l`,
    `m`,
    `n`,
    `o`,
    `p`,
    `q`,
    `r`,
    `s`,
    `t`,
    `u`,
    `v`,
    `x`,
    `w`,
    `y`,
    `z`,
  ];
  const x = Math.floor(Math.random() * words.length);
  letters.splice(letters.indexOf(words[x].letter), 1);

  const randomLetters = [];
  while (randomLetters.length < 3) {
    let r = Math.floor(Math.random() * letters.length);
    randomLetters.push(letters[r]);
    letters.splice(letters.indexOf(letters[r]), 1);
  }

  pickRandomWord(x, randomLetters[0], randomLetters[1], randomLetters[2]);
}

function pickRandomWord(word1, letter1, letter2, letter3) {
  correctLetter = words[word1].letter;
  const answers = [correctLetter, letter1, letter2, letter3];

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

  word1El.textContent = `${words[word1].word1}(_)`;
  word2El.textContent = `(_)${words[word1].word2}`;

  for (let i = 0; i < btnAnswersEl.length; i++) {
    btnAnswersEl[i].textContent = answers[i];
  }
}

for (let i = 0; i < btnAnswersEl.length; i++) {
  btnAnswersEl[i].addEventListener("click", function (e) {
    if (e.target.textContent === correctLetter) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
    }
    pickRandomNumbers();
  });
}

getWords();

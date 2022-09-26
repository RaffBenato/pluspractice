"use strict";

const word1El = document.querySelector(`.word1`);
const btnAnswersEl = document.querySelectorAll(`.btn-n`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const btnMistakesEl = document.querySelector(`.btn-mistakes`);
const btnBackEl = document.querySelector(`.btn-back`);
const gameEl = document.querySelectorAll(`.game`);
const containerEl = document.querySelector(`.container`);

let correctScore = 0;
let wrongScore = 0;
let correctWord;
let correctAnswer;
let wrongAnswer1;
let wrongAnswer2;
let answers = [];
let btnLabels = [];
let mistakes = [];

let words = [
  {
    word1: "bear",
    word2: "a cub",
  },
  {
    word1: "bird",
    word2: "a chick or nestling",
  },
  {
    word1: "butterfly",
    word2: "a caterpillar",
  },
  {
    word1: "cat",
    word2: "a kitten",
  },
  {
    word1: "cod",
    word2: "a codling",
  },
  {
    word1: "deer",
    word2: "a fawn",
  },
  {
    word1: "dog",
    word2: "a pup or puppy",
  },
  {
    word1: "duck",
    word2: "a duckling",
  },
  {
    word1: "eagle",
    word2: "a eaglet",
  },
  {
    word1: "eel",
    word2: "an elver or grig",
  },
  {
    word1: "elephant",
    word2: "a calf",
  },
  {
    word1: "falcon",
    word2: "an eyas",
  },
  {
    word1: "ferret",
    word2: "a kit",
  },
  {
    word1: "fish",
    word2: "a fry or fingerling",
  },
  {
    word1: "frog",
    word2: "a tadpole",
  },
  {
    word1: "fox",
    word2: "a kit or cub",
  },
  {
    word1: "goat",
    word2: "a kid or yeanling",
  },
  {
    word1: "goose",
    word2: "a gosling",
  },
  {
    word1: "hare",
    word2: "a leveret",
  },
  {
    word1: "herring",
    word2: "a brit or alevin",
  },
  {
    word1: "horse",
    word2: "a foal, colt or filly",
  },
  {
    word1: "knngaroo",
    word2: "a joey",
  },
  {
    word1: "lion",
    word2: "a cub",
  },
  {
    word1: "moth",
    word2: "a caterpillar",
  },
  {
    word1: "owl",
    word2: "an owlet",
  },
  {
    word1: "ox",
    word2: "a calf",
  },
  {
    word1: "pig",
    word2: "a piglet",
  },
  {
    word1: "pigeon",
    word2: "a squab",
  },
  {
    word1: "salmon",
    word2: "a grilse or alevin",
  },
  {
    word1: "seal",
    word2: "a pup",
  },
  {
    word1: "sheep",
    word2: "a lamb",
  },
  {
    word1: "swan",
    word2: "a cygnet",
  },
  {
    word1: "tiger",
    word2: "a cub",
  },
  {
    word1: "whale",
    word2: "a calf",
  },
  {
    word1: "wolf",
    word2: "a cub or whelp",
  },
];

function pickRandomNumbers() {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    let r = Math.floor(Math.random() * words.length);
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
  }
  pickRandomWord(randomNumbers[0], randomNumbers[1], randomNumbers[2]);
}

function pickRandomWord(word1, word2, word3) {
  correctWord = words[word1].word1;
  correctAnswer = words[word1].word2;
  wrongAnswer1 = words[word2].word2;
  wrongAnswer2 = words[word3].word2;
  answers = [correctAnswer, wrongAnswer1, wrongAnswer2];

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

  word1El.textContent = `A baby ${correctWord} is`;
  btnAnswersEl[0].textContent = answers[0];
  btnAnswersEl[1].textContent = answers[1];
  btnAnswersEl[2].textContent = answers[2];
}

for (let i = 0; i < btnAnswersEl.length; i++) {
  btnAnswersEl[i].addEventListener("click", function (e) {
    if (e.target.textContent === correctAnswer) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
      mistakes.push({ word1: correctWord, word2: correctAnswer });
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
      <div class="mistakeword">A baby ${item.word1} is ${item.word2}</div>
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
  segmentEl.forEach((segment) => {
    segment.classList.add(`hidden`);
  });

  btnBackEl.classList.add(`hidden`);
  btnMistakesEl.classList.remove(`hidden`);

  mistakes = [];
});

pickRandomNumbers();

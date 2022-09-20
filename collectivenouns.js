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
    word1: "A bunch",
    word2: "flowers",
  },
  {
    word1: "A cast",
    word2: "actors",
  },
  {
    word1: "A trickle",
    word2: "customers",
  },
  {
    word1: "A board",
    word2: "directors",
  },
  {
    word1: "A panel",
    word2: "experts",
  },
  {
    word1: "A bevy",
    word2: "girls",
  },
  {
    word1: "A dinasty",
    word2: "kings",
  },
  {
    word1: "A gang",
    word2: "labourers",
  },
  {
    word1: "A body",
    word2: "men",
  },
  {
    word1: "A band",
    word2: "musicians",
  },
  {
    word1: "A crowd",
    word2: "people",
  },
  {
    word1: "A team",
    word2: "players",
  },
  {
    word1: "A patrol",
    word2: "policemen",
  },
  {
    word1: "A class",
    word2: "pupils",
  },
  {
    word1: "A mob",
    word2: "rioters",
  },
  {
    word1: "A crew",
    word2: "sailors",
  },
  {
    word1: "A horde",
    word2: "savages",
  },
  {
    word1: "A gaggle",
    word2: "sightseers",
  },
  {
    word1: "A choir",
    word2: "singers",
  },
  {
    word1: "An army",
    word2: "soldiers",
  },
  {
    word1: "A tribe",
    word2: "natives",
  },
  {
    word1: "A congregation",
    word2: "worshippers",
  },
  {
    word1: "A zoo",
    word2: "animals",
  },
  {
    word1: "A hive",
    word2: "bees",
  },
  {
    word1: "A flock",
    word2: "birds",
  },
  {
    word1: "A herd",
    word2: "cattle",
  },
  {
    word1: "A brood",
    word2: "chickens",
  },
  {
    word1: "A school",
    word2: "dolphins",
  },
  {
    word1: "A catch",
    word2: "fish",
  },
  {
    word1: "A swarm",
    word2: "flies",
  },
  {
    word1: "A skulk",
    word2: "foxes",
  },
  {
    word1: "A colony",
    word2: "gulls",
  },
  {
    word1: "A string",
    word2: "horses",
  },
  {
    word1: "A pack",
    word2: "hounds",
  },
  {
    word1: "A litter",
    word2: "kittens",
  },
  {
    word1: "A pride",
    word2: "lions",
  },
  {
    word1: "A plague",
    word2: "locusts",
  },
  {
    word1: "A nest",
    word2: "mice",
  },
  {
    word1: "A troop",
    word2: "monkeys",
  },
  {
    word1: "A rookery",
    word2: "penguins",
  },
  {
    word1: "A pod",
    word2: "seals",
  },
  {
    word1: "A squadron",
    word2: "planes",
  },
  {
    word1: "A round",
    word2: "applause",
  },
  {
    word1: "A crop",
    word2: "apples",
  },
  {
    word1: "A quiver",
    word2: "arrows",
  },
  {
    word1: "A bunch",
    word2: "bananas",
  },
  {
    word1: "A set",
    word2: "books",
  },
  {
    word1: "A crate",
    word2: "bottles",
  },
  {
    word1: "A batch",
    word2: "bread",
  },
  {
    word1: "A hail",
    word2: "bullets",
  },
  {
    word1: "A deck",
    word2: "cards",
  },
  {
    word1: "A fleet",
    word2: "cars",
  },
  {
    word1: "A bale",
    word2: "cotton",
  },
  {
    word1: "A wad",
    word2: "notes",
  },
  {
    word1: "A cluster",
    word2: "diamonds",
  },
  {
    word1: "A chest",
    word2: "drawers",
  },
  {
    word1: "A chain",
    word2: "events",
  },
  {
    word1: "A block",
    word2: "flats",
  },
  {
    word1: "A basket",
    word2: "fruit",
  },
  {
    word1: "An orchard",
    word2: "fruit trees",
  },
  {
    word1: "A stack",
    word2: "hay",
  },
  {
    word1: "A range",
    word2: "mountains",
  },
  {
    word1: "A ream",
    word2: "paper",
  },
  {
    word1: "A heap",
    word2: "rubbish",
  },
  {
    word1: "A flotilla",
    word2: "ships",
  },
  {
    word1: "A column",
    word2: "smoke",
  },
  {
    word1: "A flight",
    word2: "stairs",
  },
  {
    word1: "A forest",
    word2: "trees",
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

  word1El.textContent = `${correctWord} of`;
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
      <div class="mistakeword">${item.word1} of ${item.word2}</div>
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

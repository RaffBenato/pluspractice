"use strict";

const word1El = document.querySelector(`.word1`);
const btnAnswersEl = document.querySelectorAll(`.btn-n`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);

let correctScore = 0;
let wrongScore = 0;
let correctWord;
let correctAnswer;
let wrongAnswer1;
let wrongAnswer2;
let answers = [];
let btnLabels = [];
let words;

words = [
  {
    word1: "bunch",
    word2: "flowers",
  },
  {
    word1: "cast",
    word2: "actors",
  },
  {
    word1: "trickle",
    word2: "customers",
  },
  {
    word1: "board",
    word2: "directors",
  },
  {
    word1: "panel",
    word2: "experts",
  },
  {
    word1: "bevy",
    word2: "girls",
  },
  {
    word1: "dinasty",
    word2: "kings",
  },
  {
    word1: "gang",
    word2: "labourers",
  },
  {
    word1: "body",
    word2: "men",
  },
  {
    word1: "band",
    word2: "musicians",
  },
  {
    word1: "crowd",
    word2: "people",
  },
  {
    word1: "team",
    word2: "players",
  },
  {
    word1: "patrol",
    word2: "policemen",
  },
  {
    word1: "class",
    word2: "pupils",
  },
  {
    word1: "mob",
    word2: "rioters",
  },
  {
    word1: "crew",
    word2: "sailors",
  },
  {
    word1: "horde",
    word2: "savages",
  },
  {
    word1: "gaggle",
    word2: "sightseers",
  },
  {
    word1: "choir",
    word2: "singers",
  },
  {
    word1: "army",
    word2: "soldiers",
  },
  {
    word1: "tribe",
    word2: "natives",
  },
  {
    word1: "congregation",
    word2: "worshippers",
  },
  {
    word1: "zoo",
    word2: "animals",
  },
  {
    word1: "hive",
    word2: "bees",
  },
  {
    word1: "flock",
    word2: "birds",
  },
  {
    word1: "herd",
    word2: "cattle",
  },
  {
    word1: "brood",
    word2: "chickens",
  },
  {
    word1: "school",
    word2: "dolphins",
  },
  {
    word1: "catch",
    word2: "fish",
  },
  {
    word1: "swarm",
    word2: "flies",
  },
  {
    word1: "skulk",
    word2: "foxes",
  },
  {
    word1: "colony",
    word2: "gulls",
  },
  {
    word1: "string",
    word2: "horses",
  },
  {
    word1: "pack",
    word2: "hounds",
  },
  {
    word1: "litter",
    word2: "kittens",
  },
  {
    word1: "pride",
    word2: "lions",
  },
  {
    word1: "plague",
    word2: "locusts",
  },
  {
    word1: "nest",
    word2: "mice",
  },
  {
    word1: "troop",
    word2: "monkeys",
  },
  {
    word1: "rookery",
    word2: "penguins",
  },
  {
    word1: "pod",
    word2: "seals",
  },
  {
    word1: "squadron",
    word2: "planes",
  },
  {
    word1: "round",
    word2: "applause",
  },
  {
    word1: "crop",
    word2: "apples",
  },
  {
    word1: "quiver",
    word2: "arrows",
  },
  {
    word1: "bunch",
    word2: "bananas",
  },
  {
    word1: "set",
    word2: "books",
  },
  {
    word1: "crate",
    word2: "bottles",
  },
  {
    word1: "batch",
    word2: "bread",
  },
  {
    word1: "hail",
    word2: "bullets",
  },
  {
    word1: "deck",
    word2: "cards",
  },
  {
    word1: "fleet",
    word2: "cars",
  },
  {
    word1: "bale",
    word2: "cotton",
  },
  {
    word1: "wad",
    word2: "notes",
  },
  {
    word1: "cluster",
    word2: "diamonds",
  },
  {
    word1: "chest",
    word2: "drawers",
  },
  {
    word1: "chain",
    word2: "events",
  },
  {
    word1: "block",
    word2: "flats",
  },
  {
    word1: "basket",
    word2: "fruit",
  },
  {
    word1: "orchard",
    word2: "fruit trees",
  },
  {
    word1: "stack",
    word2: "hay",
  },
  {
    word1: "range",
    word2: "mountains",
  },
  {
    word1: "ream",
    word2: "paper",
  },
  {
    word1: "heap",
    word2: "rubbish",
  },
  {
    word1: "flotilla",
    word2: "ships",
  },
  {
    word1: "column",
    word2: "smoke",
  },
  {
    word1: "flight",
    word2: "stairs",
  },
  {
    word1: "forest",
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

  word1El.textContent = `A ${correctWord} of`;
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
    }
    pickRandomNumbers();
  });
}

pickRandomNumbers();

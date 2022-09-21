"use strict";

const sentenceEl = document.querySelector(`.word1`);
const btnAnswersEl = document.querySelectorAll(`.btn-n`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const gameEl = document.querySelectorAll(`.game`);
const containerEl = document.querySelector(`.container`);

let correctScore = 0;
let wrongScore = 0;
let sentence;
let correctAnswer;
let wrongAnswer1;
let wrongAnswer2;
let answers = [];
let btnLabels = [];

let words = [
  {
    sentence: "The cat jumped on the wall.",
    verb: "jumped",
    word3: "cat",
    word4: "on",
  },
  {
    sentence: "All the kids like eating cookies.",
    verb: "eating",
    word3: "kids",
    word4: "All",
  },
  {
    sentence: "The water was so cold.",
    verb: "was",
    word3: "water",
    word4: "cold",
  },
  {
    sentence: "The girl carefully dug a hole in the soil.",
    verb: "dug",
    word3: "girl",
    word4: "carefully",
  },
  {
    sentence: "The secretary typed up some letters.",
    verb: "typed",
    word3: "secretary",
    word4: "some",
  },
  {
    sentence: "He found a small wooden box.",
    verb: "found",
    word3: "small",
    word4: "He",
  },
  {
    sentence: "The content cat enjoyed her bowl of milk.",
    verb: "enjoyed",
    word3: "content",
    word4: "cat",
  },
  {
    sentence: "Ben washed his face thoroughly.",
    verb: "washed",
    word3: "Ben",
    word4: "face",
  },
  {
    sentence: "Tom happily ate his delicious dinner.",
    verb: "ate",
    word3: "happily",
    word4: "dinner",
  },
  {
    sentence: "The chef confidently cooked a perfect pancake.",
    verb: "cooked",
    word3: "confidently",
    word4: "perfect",
  },
  {
    sentence: "Two birds flew gracefully across the sky.",
    verb: "flew",
    word3: "gracefully",
    word4: "birds",
  },
  {
    sentence: "The fierce dragon flapped its wings angrily.",
    verb: "flapped",
    word3: "fierce",
    word4: "angrily",
  },
  {
    sentence: "I posted an important letter in post box.",
    verb: "posted",
    word3: "I",
    word4: "important",
  },
  {
    sentence: "The chocolate cake is delicious.",
    verb: "is",
    word3: "chocolate",
    word4: "delicious",
  },
  {
    sentence: "The succulent apples were delicious.",
    verb: "were",
    word3: "succulent",
    word4: "delicious",
  },
  {
    sentence: "He definitely did it.",
    verb: "did",
    word3: "it",
    word4: "definitely",
  },
  {
    sentence: "Mozart was a famous composer.",
    verb: "was",
    word3: "Mozart",
    word4: "composer",
  },
  {
    sentence: "I am trully sorry.",
    verb: "am",
    word3: "trully",
    word4: "sorry",
  },
  {
    sentence: "I missed the train.",
    verb: "missed",
    word3: "I",
    word4: "train",
  },
  {
    sentence: "Baking is so much fun.",
    verb: "Baking",
    word3: "fun",
    word4: "much",
  },
  {
    sentence: "Walking can be very tiring.",
    verb: "Walking",
    word3: "very",
    word4: "tiring",
  },
  {
    sentence: "The girl sang her song.",
    verb: "sang",
    word3: "her",
    word4: "song",
  },
  {
    sentence: "The bus driver whistled whilst he drove.",
    verb: "whistled",
    word3: "whilst",
    word4: "driver",
  },
  {
    sentence: "Leo played football every day.",
    verb: "played",
    word3: "Leo",
    word4: "football",
  },
  {
    sentence: "The horse galloped across the field.",
    verb: "galloped",
    word3: "across",
    word4: "field",
  },
  {
    sentence: "Jim treasures country living.",
    verb: "treasures",
    word3: "country",
    word4: "Jim",
  },
  {
    sentence: "The man strode along the platform.",
    verb: "strode",
    word3: "man",
    word4: "along",
  },
  {
    sentence: "Three things convince me…",
    verb: "convince",
    word3: "things",
    word4: "me",
  },
  {
    sentence: "Three things convince me…",
    verb: "convince",
    word3: "things",
    word4: "me",
  },
];

function pickVerb() {
  let randomSentence = Math.floor(Math.random() * words.length);
  sentence = words[randomSentence].sentence;
  correctAnswer = words[randomSentence].verb;
  wrongAnswer1 = words[randomSentence].word3;
  wrongAnswer2 = words[randomSentence].word4;
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

  sentenceEl.textContent = sentence;
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
    pickVerb();
  });
}

pickVerb();

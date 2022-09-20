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
    word1: "A blessing in disguise",
    word2: "A good thing that seemed bad at first",
  },
  {
    word1: "A dime a dozen",
    word2: "Something common",
  },
  {
    word1: "Beat around the bush",
    word2: "Avoid saying what you mean, usually because it is uncomfortable",
  },
  {
    word1: "Better late than never",
    word2: "Better to arrive late than not to come at all",
  },
  {
    word1: "Bite the bullet",
    word2: "To get something over with because it is inevitable",
  },
  {
    word1: "Break a leg",
    word2: "Good luck",
  },
  {
    word1: "Call it a day",
    word2: "Stop working on something",
  },
  {
    word1: "Cut somebody some slack",
    word2: "Don't be so critical",
  },
  {
    word1: "Cutting corners",
    word2: "Doing something poorly in order to save time or money",
  },
  {
    word1: "Easy does it",
    word2: "Slow it down",
  },
  {
    word1: "Get out of hand",
    word2: "Get out of control",
  },
  {
    word1: "Get something out of your system",
    word2: "Do the thing you've been wanting to do so you can move on",
  },
  {
    word1: "Get your act together",
    word2: "Work better or leave",
  },
  {
    word1: "Give someone the benefit of the doubt",
    word2: "Trust what someone says",
  },
  {
    word1: "Go back to the drawing board",
    word2: "Start over",
  },
  {
    word1: "Hang in there",
    word2: "Don't give up",
  },
  {
    word1: "Hit the sack",
    word2: "Go to sleep",
  },
  {
    word1: "It's not rocket science",
    word2: "It is not complicated",
  },
  {
    word1: "Let someone off the hook",
    word2: "To not hold someone responsible for something",
  },
  {
    word1: "Make a long story short",
    word2: "Tell something briefly",
  },
  {
    word1: "Miss the boat",
    word2: "It is too late",
  },
  {
    word1: "No pain, no gain",
    word2: "You have to work for what you want",
  },
  {
    word1: "On the ball",
    word2: "Doing a good job",
  },
  {
    word1: "Pull someone's leg",
    word2: "To joke with someone",
  },
  {
    word1: "Pull yourself together",
    word2: "Calm down",
  },
  {
    word1: "So far so good",
    word2: "Things are going well so far",
  },
  {
    word1: "Speak of the devil",
    word2: "The person we were just talking about showed up",
  },
  {
    word1: "That is the last straw",
    word2: "My patience has run out",
  },
  {
    word1: "The best of both worlds",
    word2: "An ideal situation",
  },
  {
    word1: "Time flies when you are having fun",
    word2: "You dont notice how long something lasts when it is fun",
  },
  {
    word1: "To get bent out of shape",
    word2: "To get upset",
  },
  {
    word1: "To make matters worse",
    word2: "Make a problem worse",
  },
  {
    word1: "Under the weather",
    word2: "Sick",
  },
  {
    word1: "We will cross that bridge when we come to it",
    word2: "Let's not talk about that problem right now",
  },
  {
    word1: "Wrap your head around something",
    word2: "Understand something complicated",
  },
  {
    word1: "You can say that again",
    word2: "That is true, I agree",
  },
  {
    word1: "Your guess is as good as mine",
    word2: "I have no idea",
  },
  {
    word1: "A penny for your thoughts",
    word2: "Tell me what you are thinking",
  },
  {
    word1: "A perfect storm",
    word2: "The worst possible situation",
  },
  {
    word1: "A picture is worth a thousand words",
    word2: "Better to show than tell",
  },
  {
    word1: "Actions speak louder than words",
    word2: "Believe what people do and not what they say",
  },
  {
    word1: "Barking up the wrong tree",
    word2: "To be mistaken",
  },
  {
    word1: "Bite off more than you can chew",
    word2: "Take on a project that you cannot finish",
  },
  {
    word1: "Break the ice",
    word2: "Make people feel more comfortable",
  },
  {
    word1: "By the skin of your teeth",
    word2: "Just barely",
  },
  {
    word1: "Costs an arm and a leg",
    word2: "Very expensive",
  },
  {
    word1: "Don't count your chickens before they hatch",
    word2: "Don't count on something good happening until it's happened",
  },
  {
    word1: "Don't cry over spilk milk",
    word2: "There is no reason to complain about something that can't be fixed",
  },
  {
    word1: "Don't give up your day job",
    word2: "You are not very good at this",
  },
  {
    word1: "Every cloud has a silver lining",
    word2: "Good things come after bad things",
  },
  {
    word1: "Get a taste of your own medicine",
    word2: "Get treated the way you have been treating others",
  },
  {
    word1: "Go on a wild goose chase",
    word2: "To do something pointless",
  },
  {
    word1: "Good things come to those who wait",
    word2: "Be patient",
  },
  {
    word1: "I have bigger fish to fry",
    word2: "I have more important things to take care of",
  },
  {
    word1: "Hit the nail on the head",
    word2: "Get something exactly right",
  },
  {
    word1: "Chip off the old block",
    word2: "A son is like his father",
  },
  {
    word1: "It isn't over till the fat lady sings",
    word2: "This isn't over yet",
  },
  {
    word1: "It is a piece of cake",
    word2: "It is easy",
  },
  {
    word1: "It is raining cats and dogs",
    word2: "It is raining hard",
  },
  {
    word1: "Kill two birds with one stone",
    word2: "Get two things done with a single action",
  },
  {
    word1: "Let the cat out of the bag",
    word2: "Give away a secret",
  },
  {
    word1: "On thin ice",
    word2: "If you make another mistake there will be trouble",
  },
  {
    word1: "Once in a blue moon",
    word2: "Rarely",
  },
  {
    word1: "Put something on ice",
    word2: "Put a project on hold",
  },
  {
    word1: "Saving for a rainy day",
    word2: "Saving money for later",
  },
  {
    word1: "Spill the beans",
    word2: "Give away a secret",
  },
  {
    word1: "Take a rain check",
    word2: "Postpone a plan",
  },
  {
    word1: "Take it with a grain of salt",
    word2: "Don't take it too seriously",
  },
  {
    word1: "The ball is in your court",
    word2: "It is your decision",
  },
  {
    word1: "The best thing since sliced bread",
    word2: "Something really good",
  },
  {
    word1: "The elephant in the room",
    word2: "The big issue",
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

  word1El.textContent = correctWord;
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
      <div class="mistakeword">${item.word1}: ${item.word2}</div>
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

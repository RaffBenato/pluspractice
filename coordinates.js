"use strict";

const wordEl = document.querySelector(`.word`);
const containerEl = document.querySelector(`.container`);
const btnsCoord = document.querySelectorAll(`.btn-coord`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);

const coordinates = [
  "North",
  "North-east",
  "East",
  "South-east",
  "South",
  "South-west",
  "West",
  "North-west",
];
let r;
let correctScore = 0;
let wrongScore = 0;

function pickCoordinate() {
  r = Math.floor(Math.random() * coordinates.length);
  wordEl.textContent = coordinates[r];
}

pickCoordinate();

for (let i = 0; i < btnsCoord.length; i++) {
  btnsCoord[i].addEventListener("click", function (e) {
    if (r === i) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
    }
    pickCoordinate();
  });
}

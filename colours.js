"use strict";

const wordEl = document.querySelector(`.word`);
const containerEl = document.querySelector(`.container`);
const btnsCoord = document.querySelectorAll(`.btn-coord`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);

const reds = [
  "Cherry",
  "Rose",
  "Jam",
  "Merlot",
  "Garnet",
  "Crimson",
  "Ruby",
  "Scarlet",
  "Wine",
  "Brick",
  "Mahogany",
  "Blood",
  "Sangria",
  "Berry",
  "Currant",
  "Blush",
  "Candy",
  "Lipstick",
];

const yellows = [
  "Canary",
  "Gold",
  "Daffodil",
  "Flaxen",
  "Butter",
  "Lemon",
  "Mustard",
  "Corn",
  "Medallion",
  "Dandelion",
  "Bumblebee",
  "Banana",
  "Butterscotch",
  "Dijon",
  "Honey",
  "Blonde",
  "Pineapple",
];

const blues = [
  "Azue",
  "Turquoise",
  "Prussian",
  "Ultramarine",
  "Cyan",
  "Indigo",
  "Cobalt",
  "Sapphire",
  "Teal",
  "Navy",
  "Denim",
  "Aegean",
  "Lapis",
  "Berry",
  "Peacock",
  "Cerulean",
  "Stone",
  "Ocean",
];

const greens = [
  "Chartreuse",
  "Juniper",
  "Sage",
  "Fern",
  "Olive",
  "Emerald",
  "Moss",
  "Shamrock",
  "Seafoam",
  "Parakeet",
  "Mint",
  "Seaweed",
  "Basil",
  "Pistachio",
  "Pear",
  "Pickle",
  "Pine",
  "Lime",
];

const browns = [
  "Coffe",
  "Mocha",
  "Peanut",
  "Carob",
  "Hickory",
  "Wood",
  "Pecan",
  "Walnut",
  "Caramel",
  "Syrup",
  "Chocolate",
  "Umber",
  "Tawny",
  "Brunette",
  "Cinnamon",
  "Cedar",
];

const allColours = [reds, yellows, blues, greens, browns];

let r;
let pickedColours = [];
let correctScore = 0;
let wrongScore = 0;

function pickColours() {
  pickedColours = [];
  for (let i = 0; i < allColours.length; i++) {
    pickedColours.push(
      allColours[i][Math.floor(Math.random() * allColours[i].length)]
    );
  }
  r = Math.floor(Math.random() * pickedColours.length);
  wordEl.textContent = pickedColours[r];
}

pickColours();

for (let i = 0; i < btnsCoord.length; i++) {
  btnsCoord[i].addEventListener("click", function (e) {
    if (r === i) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
    }
    pickColours();
  });
}

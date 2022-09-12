"use strict";

const num1El = document.querySelector(`.num1`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const answerinputEl = document.querySelector(`.answerinput`);
const btnsNumbersEl = document.querySelectorAll(`.btn-n`);

let correctScore = 0;
let wrongScore = 0;
let answer;

function convertToRoman(num) {
  const arrConv = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
    4000: "MMMM",
    5000: "MMMMM",
    6000: "MMMMMM",
    7000: "MMMMMMM",
    8000: "MMMMMMMM",
    9000: "MMMMMMMMM",
  };

  let arr = num.toString().split("").reverse(),
    i = 1,
    k;
  for (k = 0; k < arr.length; k++) {
    arr.splice(k, 1, arr[k] * i);
    i *= 10;
  }

  let romansArray = [];
  for (i = 0; i < arr.length; i++) {
    romansArray.push(arrConv[arr[i]] || "");
  }

  //It returns the string with the roman number
  return romansArray.reverse().join("");
}

function startRound() {
  answer = Math.floor(Math.random() * 3999);
  num1El.textContent = convertToRoman(answer);
  answerinputEl.textContent = ``;
  console.log(answer);
}

for (let i = 0; i < btnsNumbersEl.length; i++) {
  btnsNumbersEl[i].addEventListener("click", function (e) {
    if (i !== 11 && i !== 10) {
      answerinputEl.textContent = answerinputEl.textContent + i;
    } else {
      if (i === 10) {
        answerinputEl.textContent = answerinputEl.textContent + `.`;
      } else {
        answerinputEl.textContent = ``;
      }
    }
    if (Number(answerinputEl.textContent) === answer) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
      startRound();
    }
  });
}

startRound();

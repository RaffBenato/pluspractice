"use strict";

const num1El = document.querySelector(`.num1`);
const num2El = document.querySelector(`.num2`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const timerEl = document.querySelector(`.timedisplay`);
const answerinput1El = document.querySelector(`.answerinput1`);
const answerinput2El = document.querySelector(`.answerinput2`);
const btnsNumbersEl = document.querySelectorAll(`.btn-n`);
const pmamEl = document.querySelector(`.pm`);

var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
let minutesOptions = [
  `00`,
  `05`,
  `10`,
  `15`,
  `20`,
  `25`,
  `30`,
  `35`,
  `40`,
  `45`,
  `50`,
  `55`,
];
let amPmOptions = [`AM`, `PM`];
let randomHour;
let randomMinute;
let randomAmPm;
let hourAnswer;
let minuteAnswer;
let correctScore = 0;
let wrongScore = 0;

startRound();

function startRound() {
  answerinput1El.textContent = ``;
  answerinput2El.textContent = ``;

  randomHour = Math.floor(Math.random() * (13 - 1) + 1);
  randomMinute =
    minutesOptions[Math.floor(Math.random() * minutesOptions.length)];
  randomAmPm = amPmOptions[Math.floor(Math.random() * amPmOptions.length)];
  pmamEl.textContent = randomAmPm;

  drawClock();

  minuteAnswer = randomMinute;
  if (randomAmPm === `AM`) {
    if (randomHour === 11) {
      hourAnswer = `11`;
    } else if (randomHour === 10) {
      hourAnswer = `10`;
    } else if (randomHour === 12) {
      hourAnswer = `00`;
    } else {
      hourAnswer = `0` + randomHour;
    }
  } else {
    if (randomHour === 12) {
      hourAnswer = `12`;
    } else {
      hourAnswer = randomHour + 12 + ``;
    }
  }
  console.log(hourAnswer, minuteAnswer);
}

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  var hour = randomHour;
  var minute = Number(randomMinute);
  var second = 0;
  //hour
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.7, radius * 0.07);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

for (let i = 0; i < btnsNumbersEl.length; i++) {
  btnsNumbersEl[i].addEventListener("click", function (e) {
    let input;
    let end = false;
    if (i !== 11 && i !== 10) {
      input = i;
    } else {
      if (i === 10) {
        input = `.`;
      } else {
        answerinput1El.textContent = ``;
        answerinput2El.textContent = ``;
        end = true;
      }
    }

    if (end === false) {
      if (answerinput1El.textContent.length < 2) {
        answerinput1El.textContent = answerinput1El.textContent + input;
      } else {
        if (answerinput2El.textContent.length < 2) {
          answerinput2El.textContent = answerinput2El.textContent + input;
          if (answerinput2El.textContent.length === 2) {
            if (
              answerinput1El.textContent === hourAnswer &&
              answerinput2El.textContent === minuteAnswer
            ) {
              correctScore++;
              correctScoreEl.textContent = correctScore;
              startRound();
            } else {
              wrongScore++;
              wrongScoreEl.textContent = wrongScore;
              startRound();
            }
          }
        }
      }
    }
  });
}

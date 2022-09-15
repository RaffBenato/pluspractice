"use strict";

const menubtn = document.querySelector(`.menubtn`);
const btnline1 = document.querySelector(`.btn-line1`);
const btnline2 = document.querySelector(`.btn-line2`);
const btnline3 = document.querySelector(`.btn-line3`);
const btnlinex = document.querySelector(`.btn-linex`);
const menu = document.querySelector(`.menu`);

const btnAddition = document.querySelector(`.btnAddition`);
const btnAdditionSub = document.querySelectorAll(`.btnAdditionsub`);

const btnSubtraction = document.querySelector(`.btnSubtraction`);
const btnSubtractionSub = document.querySelectorAll(`.btnSubtractionsub`);

const btnTimes = document.querySelector(`.btnTimes`);
const btnTimesSub = document.querySelectorAll(`.btnTimessub`);

const btnDivision = document.querySelector(`.btnDivision`);
const btnDivisionSub = document.querySelectorAll(`.btnDivisionsub`);

const btnPowers = document.querySelector(`.btnPowers`);
const btnPowersSub = document.querySelectorAll(`.btnPowerssub`);

menubtn.addEventListener("click", () => {
  btnline1.classList.toggle(`open`);
  btnline2.classList.toggle(`open`);
  btnline3.classList.toggle(`open`);
  btnlinex.classList.toggle(`open`);
  menu.classList.toggle(`open`);
});

btnAddition.addEventListener("click", () => {
  btnAdditionSub.forEach((sub) => {
    sub.classList.toggle(`hidden`);
  });
});

btnSubtraction.addEventListener("click", () => {
  btnSubtractionSub.forEach((sub) => {
    sub.classList.toggle(`hidden`);
  });
});

btnTimes.addEventListener("click", () => {
  btnTimesSub.forEach((sub) => {
    sub.classList.toggle(`hidden`);
  });
});

btnDivision.addEventListener("click", () => {
  btnDivisionSub.forEach((sub) => {
    sub.classList.toggle(`hidden`);
  });
});

btnPowers.addEventListener("click", () => {
  btnPowersSub.forEach((sub) => {
    sub.classList.toggle(`hidden`);
  });
});

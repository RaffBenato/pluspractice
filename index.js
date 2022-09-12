"use strict";

const menubtn = document.querySelector(`.menubtn`);
const btnline1 = document.querySelector(`.btn-line1`);
const btnline2 = document.querySelector(`.btn-line2`);
const btnline3 = document.querySelector(`.btn-line3`);
const btnlinex = document.querySelector(`.btn-linex`);
const menu = document.querySelector(`.menu`);

menubtn.addEventListener("click", () => {
  btnline1.classList.toggle(`open`);
  btnline2.classList.toggle(`open`);
  btnline3.classList.toggle(`open`);
  btnlinex.classList.toggle(`open`);
  menu.classList.toggle(`open`);
});

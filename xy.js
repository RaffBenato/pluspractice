"use strict";

const containerEl = document.querySelector(`.container`);
const correctScoreEl = document.querySelector(`.correctscore`);
const wrongScoreEl = document.querySelector(`.wrongscore`);
const btnAnswersEl = document.querySelectorAll(`.btn-n`);

let answer;
let correctScore = 0;
let wrongScore = 0;
let myChart;

function pickCoords() {
  const xyValues = [];

  for (let i = 0; i < 4; i++) {
    const xNumber = Math.floor(Math.random() * (10 - 1) + 1);
    const yNumber = Math.floor(Math.random() * (10 - 1) + 1);
    xyValues.push([{ x: xNumber, y: yNumber }]);
  }
  answer = xyValues[0];

  let currentIndex = xyValues.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [xyValues[currentIndex], xyValues[randomIndex]] = [
      xyValues[randomIndex],
      xyValues[currentIndex],
    ];
  }

  for (let i = 0; i < btnAnswersEl.length; i++) {
    btnAnswersEl[i].textContent = `${xyValues[i][0].x},${xyValues[i][0].y}`;
  }

  //Chart
  myChart = new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [
        {
          label: `Whats the XY coordinate?`,
          pointRadius: 10,
          pointBackgroundColor: "rgb(0,0,255)",
          data: answer,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: { enabled: false },
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 9,
        },
        x: {
          suggestedMin: 0,
          suggestedMax: 9,
        },
      },
    },
  });
}

pickCoords();

for (let i = 0; i < btnAnswersEl.length; i++) {
  btnAnswersEl[i].addEventListener("click", function (e) {
    if (
      e.target.textContent[0] === answer[0].x.toString() &&
      e.target.textContent[2] === answer[0].y.toString()
    ) {
      correctScore++;
      correctScoreEl.textContent = correctScore;
    } else {
      wrongScore++;
      wrongScoreEl.textContent = wrongScore;
    }
    myChart.destroy();
    pickCoords();
  });
}

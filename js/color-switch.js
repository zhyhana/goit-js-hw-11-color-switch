const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let myInterval;

function onStartBtnClick() {
  myInterval = setInterval(changeColor, 1000);
  startBtn.disabled = true;
}

function changeColor() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStopBtnClick() {
  clearInterval(myInterval);
  startBtn.disabled = false;
}
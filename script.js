"use strict";

const body = document.querySelector("body");
const boxIssue = document.querySelectorAll(".issue");
const boxBtnSlide = document.querySelector(".box-btn-slide");
const listIssues = document.querySelector(".list-issue");

let currentIssue = 0;
let maxIssue = [...boxIssue].length - 1;

const goToSlide = (current) => {
  boxIssue.forEach((issue, i) => {
    issue.style.transform = `translateY(${110 * (i - current)}%)`;
  });
  body.style.background = `${boxIssue[currentIssue].getAttribute("data-issue")}`;
};

const moveSlide = function (event) {
  const target = event.target;
  console.log(target);
  if (
    target.classList.contains("btn-slide-up") ||
    target.classList.contains("img-icon-up")
  ) {
    moveUp(currentIssue);
  } else if (
    target.classList.contains("btn-slide-down") ||
    target.classList.contains("img-icon-down")
  ) {
    moveDown(currentIssue);
  }
};

const moveUp = function (current) {
  if (currentIssue <= 0) currentIssue = maxIssue;
  else currentIssue--;
  goToSlide(currentIssue);
};
const moveDown = function (current) {
  if (currentIssue >= maxIssue) currentIssue = 0;
  else currentIssue++;
  goToSlide(currentIssue);
};

boxBtnSlide.addEventListener("click", function (event) {
  moveSlide(event);
});

listIssues.addEventListener("click", function (event) {
  currentIssue = Number(event.target.getAttribute("data-issue"));
  goToSlide(currentIssue);
});

body.addEventListener("keyup", function (event) {
  if (event.key === "ArrowUp") moveUp(currentIssue);
  else if (event.key === "ArrowDown") moveDown(currentIssue);
});

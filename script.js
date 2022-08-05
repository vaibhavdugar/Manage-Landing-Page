const navlist = document.querySelector(".hamburger-nav");
const closeIcon = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const error1 = document.querySelector(".error1");
const boxes = document.querySelector(".boxes");
const container = document.querySelector(".container");
const dots = document.querySelector(".dots");

// Responsive Navbar

hamburger.addEventListener("click", function () {
  navlist.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  hamburger.classList.remove("hamburger");
});

closeIcon.addEventListener("click", function () {
  navlist.classList.add("hidden");
  closeIcon.classList.add("hidden");
  hamburger.classList.add("hamburger");
});

// Carousel Movement

const countBox = container.getElementsByClassName("boxes");
const countDot = dots.getElementsByClassName("dot");

let currentIndex = 1;

showBoxes(currentIndex);

function currentBox(n) {
  showBoxes((currentIndex = n));
}

function swipeBoxes() {
  currentIndex++;
  if (currentIndex > countBox.length) {
    currentIndex = 1;
  }
  showBoxes(currentIndex);
}

function showBoxes(n) {
  if (n > countBox.length) {
    currentIndex = 1;
  }

  if (n < 1) {
    currentIndex = countBox.length;
  }

  for (let i = 0; i < countBox.length; i++) {
    countBox[i].classList.remove("active-box");
  }

  for (let i = 0; i < countDot.length; i++) {
    countDot[i].classList.remove("active-dot");
  }

  countBox[currentIndex - 1].classList.add("active-box");
  countDot[currentIndex - 1].classList.add("active-dot");
}

setInterval(swipeBoxes, 10000);

// To scroll left in carousel using the mouse wheel
container.addEventListener("wheel", function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});

// Validating email

submit.addEventListener("click", function () {
  validateEmail();
});

function validateEmail() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.textContent.match(validRegex)) {
    error.classList.remove("hidden");
    error1.classList.remove("hidden");
  }
}

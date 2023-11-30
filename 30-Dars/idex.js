"use script";

const btns = document.querySelectorAll("button");
const logger = () => {
  console.log(1);
};
btns.forEach((btn) => {
  btn.addEventListener("click", logger, { once: true });
});
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Like");
});

const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");
btn.onclick = function () {
  alert("Siz ikkinchi tugmani bosdingiz");
};

btn.addEventListener("click", () => {
  alert("Click");
});

btn.addEventListener("click", () => {
  alert("Click2");
});

btn.addEventListener("mouseenter", (event) => {
  alert("Hover");
  console.log(event.target);
  event.target.remove();
});

let i = 0;

const addElemet = (event) => {
  i++;
  if (i === 3) {
    btn.removeEventListener("click", addElemet);
  }
  console.log(i);
};

btn.addEventListener("click", addElemet);

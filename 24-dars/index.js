"use script";
const car = {
  mator: "X",
  color: "white",
  isAirbag: true,
  isSpeed: function () {
    console.log(320);
  },
};

const gm = {
  isAirbag: false,
};

// gm.__proto__ = car;

// Object.setPrototypeOf(gm, car);
const bmw = Object.create(car);
console.log(bmw);

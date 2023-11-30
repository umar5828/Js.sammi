"use strict";
const numberOfSeries = +prompt("Nechta serial ko'rdigiz");

const SeriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi ko'rganingiz serial nomi");
const b = prompt("Unga qancha baho bergan bo'lganingizni yozing");
const c = prompt("Oxirgi ko'rganingiz serial nomi");
const d = prompt("Unga qancha baho bergan bo'lganingizni yozing");
SeriesDB.series[a] = b;
SeriesDB.series[c] = d;

console.log(SeriesDB);

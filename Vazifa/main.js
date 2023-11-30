"use strict";
const numberOfSeries = +prompt("Nechta serial ko'rdigiz");

const SeriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rganingiz serial nomi");
  const b = prompt("Unga qancha baho bergan bo'lganingizni yozing");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    SeriesDB.series[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
if (SeriesDB.count < 5) {
  console.log("Juda kam");
} else if (SeriesDB.count >= 5 && SeriesDB.count < 10) {
  console.log("O'rtacha");
} else if (SeriesDB.count >= 10) {
  console.log("A'lo");
}

console.log(SeriesDB);

// "use strict";
// // alert("Hello, World!");
// // const place = confirm("Siz 18 yoshda kattamisiz?");
// // console.log(place);
// // const currentPlace = prompt("Siz qayerda yashaysiz?", "Toshkent");
// // console.log(currentPlace);

// //Interpolation.............

// // const channel = prompt("Telegram likigizi kiritig:");
// // console.log("https://t.me/" + channel);

// // OPeratorlar................

// // console.log("Umar"+ " "+ "Jo'rayev");
// // console.log(2+ +"2");

// // let incr = 10;
// // let decr = 10;
// // incr++;
// // decr--;
// // console.log(incr);
// // console.log(decr);

// console.log(5 * 5 === "25");

//adad
const seriesDb = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    seriesDb.count = +prompt("Siz qancha serial ko'rdingiz?", "");
    while (
      seriesDb.count == "" ||
      seriesDb.count == null ||
      isNaN(seriesDb.count)
    ) {
      seriesDb.count = +prompt("Siz qancha serial ko'rdingiz?", "");
    }
  },
};
function rememerMySeries() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz?"),
      b = prompt("Unga qancha baho bergan bo'lar edingiz?");
    if (a != null && b != null && a != "" && b != "") {
      seriesDb.series[a] = b;
      console.log("Done");
    } else {
      console.log("ERROR");
      i--;
    }
  }
}
// rememerMySeries();

function detectPersonalLevelSeries() {
  if (seriesDb.count < 5) {
    console.log("Kam serial ko'ripsiz");
  } else if (seriesDb.count >= 5 && seriesDb.count < 10) {
    console.log("Siz classik tamoshabin ekansiz");
  } else {
    console.log("Siz serialchi zvezda ekansiz");
  }
}
detectPersonalLevelSeries();

function showDb(hidden) {
  if (!hidden) {
    console.log(seriesDb);
  }
}
showDb(seriesDb.privat);

function writeGenres() {
  for (let i = 0; i <= 2; i++) {
    seriesDb.genres[i] = prompt(`Sizning sevimli janringiz nomer ${i + 1}?`);
  }
}
writeGenres();

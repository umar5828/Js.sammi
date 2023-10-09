"use strict";
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
  rememerMySeries: function () {
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
  },
  detectPersonalLevelSeries() {
    if (seriesDb.count < 5) {
      console.log("Kam serial ko'ripsiz");
    } else if (seriesDb.count >= 5 && seriesDb.count < 10) {
      console.log("Siz classik tamoshabin ekansiz");
    } else if (seriesDb.count >= 10) {
      console.log("Siz serialchisiz");
    } else {
      console.log("Xatolik yuz berdi");
    }
  },
  showDb: function () {
    if (!seriesDb.privat) {
      console.log(seriesDb);
    }
  },
  visibleDB: function () {
    if (seriesDb.privat) {
      seriesDb.privat = false;
    } else {
      seriesDb.privat = true;
    }
  },
  writeGenres: function () {
    for (let i = 0; i <= 2; i++) {
      // const genre = prompt(`Sizning sevimli janringiz nomer ${i + 1}?`);
      // if (genre === " " || genre == null) {
      //   console.log("Xatolik");
      //   i--;
      // } else {
      //   seriesDb.genres[i] = genre;
      // }
      let geres = prompt("yaxshi ko'rgan janringizni vergul bilan kiritin");
      if (genres === " " || genres == null) {
        console.log("Xatolik");
        i--;
      } else {
        (seriesDb.genres[i] = genres), split(",");
      }
    }
    seriesDb.genres.forEach((item, i) => {
      console.log(`Sizning sevimli janringiz nomer ${i + 1} - eto ${item}`);
    });
  },
};

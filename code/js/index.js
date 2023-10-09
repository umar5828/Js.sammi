<<<<<<< HEAD
"use strict";
=======
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
let numberOfFilms;
function startApp (){
numberOfSeries = +prompt("Siz qancha serial ko'rdingiz?","");
while(numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)){
    numberOfSeries = +prompt("Siz qancha serial ko'rdingiz?","");
}   
}
startApp();
//adad
>>>>>>> 229c61bfeccfbe6d3cbab32ba7941358ed38b153
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
    // for (let i = 0; i <= 2; i++) {
    // const genre = prompt(`Sizning sevimli janringiz nomer ${i + 1}?`);
    // if (genre === " " || genre == null) {
    //   console.log("Xatolik");
    //   i--;
    // } else {
    //   seriesDb.genres[i] = genre;
    // }
    // }
    let genres = prompt(
      "yaxshi ko'rgan janringizni vergul bilan kiritin"
    ).toLowerCase;
    if (genres === " " || genres == null) {
      console.log("Xatolik");
      i--;
    } else {
      seriesDb.genres = genres.split(",");
      seriesDb.genres.sort();
    }
    seriesDb.genres.forEach((item, idx) => {
      console.log(`Sizning sevimli janringiz nomer ${idx + 1} - nomi ${item}`);
    });
  },
};
<<<<<<< HEAD
=======
function rememerMySeries(){
    for(let i=0; i<2; i++){
    const a= prompt("Oxirgi ko'rgan serialingiz?"),
        b= prompt("Unga qancha baho bergan bo'lar edingiz?");
        if(a!=null && b!=null && a!="" && b!=""){
                    seriesDb.series[a] = b; 
                    console.log("Done")
        }
        else{
            console.log("ERROR")
            i--;
        }
}
}
// rememerMySeries();


function detectPersonalLevelSeries(){
    if(seriesDb.count < 5){
        console.log("Kam serial ko'ripsiz")
        }
        else if(seriesDb.count >= 5 && seriesDb.count < 10){
            console.log("Siz classik tamoshabin ekansiz")
        }
        else{
            console.log("Siz serialchi zvezda ekansiz")
        }
}
detectPersonalLevelSeries();

function showDb(hidden){
    if (!hidden){
        console.log(seriesDb);
    }
}
showDb(seriesDb.privat);

function writeGenres(){
    for(let i=0; i<=2;i++){
        seriesDb.genres[i]=prompt(`Sizning sevimli janringiz nomer ${i+1}?`);
    }
}
writeGenres();

 
>>>>>>> 229c61bfeccfbe6d3cbab32ba7941358ed38b153

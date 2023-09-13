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
const numberOfSeries = +prompt("Siz qancha serial ko'rdingiz?");
//adad
const seriesDb = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,

};

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
if(seriesDb.count < 5){
console.log("Kam serial ko'ripsiz")
}
else if(seriesDb.count >= 5 && seriesDb.count < 10){
    console.log("Siz classik tamoshabin ekansiz")
}
else{
    console.log("Siz serialchi zvezda ekansiz")
}




console.log(seriesDb); 

 
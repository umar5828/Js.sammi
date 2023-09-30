"use stric"
 const arr =[1,2,3,4,5,6,7,8,9,10];
// /* Oxiridan element olib tashaydi*/
//  //  arr.pop();
//  /* Oxiriga element qo'shadi*/
// //  arr.push("Umar")
// /*Boshidan element olib tashlaydi */
// // arr.shift();
// // /*Boshiga element qo'shadi */
// // arr.unshift("Umar");
// //  console.log(arr);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let value of arr){
    // console.log(value);
// }
// arr.forEach(
//     function(item,index,arr){
//         console.log(`${index}:${item} into arr ${arr}`);
//     });  

// const movies = prompt("Qaysi filmni ko'rishni xohlaysiz?", "");
// const userMovius=movies.split(", ");
// userMovius.sort();
// console.log(userMovius);
// console.log(userMovius.join("- "));


function compare(a,b){
    return a-b;
}
arr.sort(compare);
console.log(arr);
"use stric"
 const arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr.length);
// arr.pop();
// arr.push(10);

// arr.shift();
// arr.unshift(1);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }    

// for (let value of arr){
//     console.log(value);
// }

arr.forEach(function(item,index,arr){
console.log(`${index}:${item} massivning ${arr} elementi`);
});
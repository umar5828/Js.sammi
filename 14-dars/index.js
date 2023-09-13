"use strict"
// let startNum = +prompt("Start number");
// let num = 10;

// First method

// while (startNum <= 100) {
//     console.log(startNum);
//     startNum++;
// }

// do while
// do{
//     console.log(startNum);
//     startNum++;
// }while(startNum <= 10);

// for
// for(let i = startNum; i <10; i++){
//     console.log(i);
// }
// for(let i=1;i<=10;i++){
//     console.log(num);
//     num++;
// }

for(let i=1;i<=10;i++){
    if(i==9){
        break;
    }
    console.log(i);
}
for(let i=1;i<=10;i++){
    if(i==9){
        continue;
    }
    console.log(i);
}
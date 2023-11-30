"use script";

function sayHello() {
  console.log("Good moring!");
}
sayHello();

function sayBye() {
  console.log("Good bye!");
}
sayBye();

const arr = [1, 44, -32, 356, 98],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(sorted);

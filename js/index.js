"use strict";
// const arr = [1, 2, 3, 4, -5];
// const length = arr.length;
// let a = 0;
// for (let i = 0; i <= length; i++) {
//   if (i > 0) {
//     a = a + i;
//   }
// }
// console.log(a);
function positiveSum(arr) {
  let a = 0;

  arr.map((item) => {
    if (item > 0) {
      a = a + item;
    }
  });
  return a;
}

console.log(positiveSum([1, 2, 3, 4, -5]));
